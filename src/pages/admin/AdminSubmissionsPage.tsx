import { useState, useEffect } from "react";
import { FileText, Eye, Download } from "lucide-react";
import { useNavigate } from "react-router";
import { SEO } from "@/components/seo/SEO";
import { supabase } from "@/lib/supabase";

export function AdminSubmissionsPage() {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      const { data: submissionsData, error } = await supabase
        .from('submissions')
        .select('*, teams(name)')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(submissionsData || []);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Submissions - Admin Dashboard"
        description="View all project submissions"
        url="https://sitnovate.vercel.app/admin/submissions"
      />
      
      <div>
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl mb-2 text-foreground">
            All Submissions
          </h1>
          <p className="font-body text-[#b3b3b3]">
            Total Submissions: {submissions.length}
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid gap-4">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-card border border-border rounded-2xl p-6 hover:border-[#555759] transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl text-foreground">
                          {submission.project_title}
                        </h3>
                        <p className="font-body text-sm text-[#b3b3b3]">
                          Team: {submission.teams?.name || 'Unknown'} (Code: {submission.team_code})
                        </p>
                      </div>
                    </div>

                    <p className="font-body text-[#b3b3b3] mb-3">
                      {submission.project_description}
                    </p>

                    <div className="flex gap-4 mb-2">
                      {submission.file_name && (
                        <span className="font-body text-sm text-foreground">
                          📎 {submission.file_name}
                        </span>
                      )}
                    </div>

                    <p className="font-body text-xs text-[#b3b3b3]">
                      Submitted by: {submission.submitted_by} • {new Date(submission.created_at).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    {submission.file_url && (
                      <a
                        href={submission.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-body text-sm rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    )}
                    <button
                      onClick={() => navigate(`/admin/teams/${submission.team_code}`)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-body text-sm rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                      <Eye className="w-4 h-4" />
                      View Team
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {submissions.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-[#b3b3b3] mx-auto mb-4" />
                <p className="font-body text-[#b3b3b3]">No submissions yet</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
