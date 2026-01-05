import { useState, useEffect } from "react";
import { Upload, FileText, CheckCircle, Edit } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { supabase } from "@/lib/supabase";

export function SubmissionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [existingSubmission, setExistingSubmission] = useState<any>(null);
  const [isUpdating, setIsUpdating] = useState(false);

  // Check for existing submission on load
  useEffect(() => {
    checkExistingSubmission();
  }, []);

  const checkExistingSubmission = async () => {
    try {
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      
      if (!userProfile.team_code) return;

      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .eq('team_code', userProfile.team_code)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching submission:', error);
        return;
      }

      if (data) {
        setExistingSubmission(data);
        setProjectTitle(data.project_title);
        setProjectDescription(data.project_description);
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error checking submission:', error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
      const fileSizeMB = selectedFile.size / 1024 / 1024; // Convert to MB
      const MAX_FILE_SIZE_MB = 15;
      
      // Check if file is PPT, PPTX, or PDF
      if (!['ppt', 'pptx', 'pdf'].includes(fileExtension || '')) {
        alert('Please upload only PPT, PPTX, or PDF files');
        e.target.value = '';
        return;
      }

      // Check file size (15 MB limit)
      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        alert(`File size must be less than ${MAX_FILE_SIZE_MB} MB. Your file is ${fileSizeMB.toFixed(2)} MB. Please compress your file and try again.`);
        e.target.value = '';
        return;
      }

      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // For updates, file is optional (only if they want to change it)
    if (!projectTitle || !projectDescription) {
      alert('Please fill all required fields');
      return;
    }

    // For new submissions, file is required
    if (!existingSubmission && !file) {
      alert('Please upload your presentation file');
      return;
    }

    setLoading(true);
    try {
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      // Check if user has a team
      if (!userProfile.team_code) {
        alert('You must be part of a team to submit a project');
        setLoading(false);
        return;
      }

      let fileUrl = existingSubmission?.file_url;
      let fileName = existingSubmission?.file_name;
      let fileType = existingSubmission?.file_type;

      // Upload new file if provided
      if (file) {
        const timestamp = Date.now();
        const fileExtension = file.name.split('.').pop();
        const storageFileName = `${userProfile.team_code}/${timestamp}_${projectTitle.replace(/[^a-z0-9]/gi, '_')}.${fileExtension}`;
        
        const { error: uploadError } = await supabase.storage
          .from('submissions')
          .upload(storageFileName, file, {
            cacheControl: '3600',
            upsert: false
          });

        if (uploadError) {
          console.error('Upload error:', uploadError);
          throw new Error('Failed to upload file: ' + uploadError.message);
        }

        // Get public URL for the uploaded file
        const { data: { publicUrl } } = supabase.storage
          .from('submissions')
          .getPublicUrl(storageFileName);

        fileUrl = publicUrl;
        fileName = file.name;
        fileType = file.type;
      }

      const submissionData = {
        team_code: userProfile.team_code,
        project_title: projectTitle,
        project_description: projectDescription,
        file_url: fileUrl,
        file_name: fileName,
        file_type: fileType,
        ppt_url: fileType?.includes('pdf') ? null : fileUrl,
        pdf_url: fileType?.includes('pdf') ? fileUrl : null,
        submitted_by: userProfile.full_name || user.name || user.email
      };

      if (existingSubmission) {
        // Update existing submission
        const { error } = await supabase
          .from('submissions')
          .update(submissionData)
          .eq('id', existingSubmission.id);

        if (error) throw error;
      } else {
        // Insert new submission
        const { error } = await supabase
          .from('submissions')
          .insert(submissionData);

        if (error) throw error;
      }

      // Also save to localStorage for quick access
      const submission = {
        projectTitle,
        projectDescription,
        fileName: fileName,
        fileType: fileType,
        fileUrl: fileUrl,
        submittedAt: new Date().toISOString()
      };
      localStorage.setItem('submission', JSON.stringify(submission));

      setSubmitted(true);
      setIsUpdating(false);
      await checkExistingSubmission(); // Refresh the submission data
    } catch (error: any) {
      console.error('Error submitting project:', error);
      alert('Error submitting project: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted && !isUpdating) {
    return (
      <>
        <SEO 
          title="Submission Successful - SITNovate Dashboard"
          description="Your project has been submitted"
          url="https://sitnovate.vercel.app/dashboard/submission"
        />
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="font-heading text-3xl text-foreground mb-4 text-center">
              Submission Successful!
            </h1>
            <p className="font-body text-[#b3b3b3] mb-8 text-center">
              Your project has been submitted successfully. You can update your submission anytime before the deadline.
            </p>

            {/* Submission Details */}
            <div className="bg-background border border-border rounded-lg p-6 mb-6 space-y-4">
              <div>
                <p className="font-body text-sm text-[#b3b3b3] mb-1">Project Title</p>
                <p className="font-body text-base text-foreground font-medium">{existingSubmission?.project_title}</p>
              </div>
              <div>
                <p className="font-body text-sm text-[#b3b3b3] mb-1">Description</p>
                <p className="font-body text-base text-foreground">{existingSubmission?.project_description}</p>
              </div>
              <div>
                <p className="font-body text-sm text-[#b3b3b3] mb-1">Uploaded File</p>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <p className="font-body text-base text-foreground">{existingSubmission?.file_name}</p>
                </div>
              </div>
              <div>
                <p className="font-body text-sm text-[#b3b3b3] mb-1">Submitted At</p>
                <p className="font-body text-base text-foreground">
                  {existingSubmission?.created_at ? new Date(existingSubmission.created_at).toLocaleString() : 'N/A'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsUpdating(true)}
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body rounded-lg hover:opacity-90 transition-opacity"
            >
              <Edit className="w-5 h-5" />
              Update Submission
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Project Submission - SITNovate Dashboard"
        description="Submit your hackathon project"
        url="https://sitnovate.vercel.app/dashboard/submission"
      />
      
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">
            Project Submission
          </h1>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
          <p className="font-body text-sm text-yellow-400">
            ⚠️ Submission deadline: January 16, 2025 at 8:00 AM. Make sure to submit before the deadline!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
          {/* Project Title */}
          <div>
            <label htmlFor="projectTitle" className="block font-body text-sm font-medium text-foreground mb-2">
              Project Title *
            </label>
            <input
              type="text"
              id="projectTitle"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              placeholder="Enter your project title"
              required
            />
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="projectDescription" className="block font-body text-sm font-medium text-foreground mb-2">
              Project Description *
            </label>
            <textarea
              id="projectDescription"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
              placeholder="Brief description of your project"
              required
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-body text-sm font-medium text-foreground mb-2">
              Upload Presentation (PPT/PPTX/PDF) *
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-primary transition-colors">
              <input
                type="file"
                id="projectFile"
                accept=".ppt,.pptx,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="projectFile"
                className="flex flex-col items-center cursor-pointer"
              >
                <FileText className="w-16 h-16 text-[#b3b3b3] mb-4" />
                {file ? (
                  <div className="text-center">
                    <p className="font-body text-base text-foreground font-medium mb-1">
                      {file.name}
                    </p>
                    <p className="font-body text-xs text-[#b3b3b3]">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="font-body text-base text-foreground mb-2">
                      Click to upload your presentation
                    </p>
                    <p className="font-body text-sm text-[#b3b3b3]">
                      Supports: PPT, PPTX, or PDF
                    </p>
                  </>
                )}
              </label>
            </div>
            <p className="font-body text-xs text-[#b3b3b3] mt-2">
              Upload your project presentation in PowerPoint or PDF format (Max size: 15 MB)
            </p>
          </div>

          {/* Current File Info (if updating) */}
          {existingSubmission && !file && (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="font-body text-sm text-blue-400 mb-2">
                Current file: <span className="font-medium">{existingSubmission.file_name}</span>
              </p>
              <p className="font-body text-xs text-[#b3b3b3]">
                Upload a new file to replace it, or leave empty to keep the current file
              </p>
            </div>
          )}

          {/* Submit/Update Button */}
          <div className="flex gap-4">
            {existingSubmission && (
              <button
                type="button"
                onClick={() => {
                  setIsUpdating(false);
                  setFile(null);
                }}
                className="flex-1 py-4 bg-background border border-border text-foreground font-heading text-lg rounded-lg hover:bg-card transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-4 bg-primary text-primary-foreground font-heading text-lg rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? (existingSubmission ? 'Updating...' : 'Submitting...') : (existingSubmission ? 'Update Project' : 'Submit Project')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
