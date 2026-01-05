import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Users, FileText, Send } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { supabase } from "@/lib/supabase";

export function AdminTeamDetailPage() {
  const { teamCode } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState<any>(null);
  const [members, setMembers] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [messageTitle, setMessageTitle] = useState('');
  const [messageContent, setMessageContent] = useState('');
  const [messageType, setMessageType] = useState<'info' | 'important' | 'deadline'>('info');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    loadTeamData();
  }, [teamCode]);

  const loadTeamData = async () => {
    try {
      // Load team
      const { data: teamData } = await supabase
        .from('teams')
        .select('*')
        .eq('code', teamCode)
        .single();

      setTeam(teamData);

      // Load members
      const { data: membersData } = await supabase
        .from('users')
        .select('*')
        .eq('team_code', teamCode);

      setMembers(membersData || []);

      // Load submissions
      const { data: submissionsData } = await supabase
        .from('submissions')
        .select('*')
        .eq('team_code', teamCode)
        .order('created_at', { ascending: false });

      setSubmissions(submissionsData || []);
    } catch (error) {
      console.error('Error loading team data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!messageTitle || !messageContent) {
      alert('Please fill in all fields');
      return;
    }

    setSending(true);
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      const { error } = await supabase
        .from('announcements')
        .insert({
          title: messageTitle,
          content: messageContent,
          type: messageType,
          target_team_code: teamCode,
          is_private: true,
          created_by: user.email || 'Admin'
        });

      if (error) throw error;

      alert('Message sent successfully!');
      setMessageTitle('');
      setMessageContent('');
      setMessageType('info');
    } catch (error: any) {
      console.error('Error sending message:', error);
      alert('Error sending message: ' + error.message);
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-body text-[#b3b3b3]">Loading team details...</p>
        </div>
      </div>
    );
  }

  if (!team) {
    return (
      <div className="text-center py-20">
        <p className="font-body text-[#b3b3b3]">Team not found</p>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${team.name} - Admin Dashboard`}
        description="Team details and submissions"
        url={`https://sitnovate.vercel.app/admin/teams/${teamCode}`}
      />
      
      <div>
        <button
          onClick={() => navigate('/admin/teams')}
          className="mb-6 text-[#b3b3b3] hover:text-foreground font-body text-sm flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Teams
        </button>

        {/* Team Info */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl text-foreground">
                {team.name}
              </h1>
              <p className="font-body text-[#b3b3b3]">
                Code: {team.code} • {team.member_count}/3 Members
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading text-lg text-foreground">Team Members</h3>
            {members.map((member) => (
              <div key={member.id} className="bg-background border border-border rounded-lg p-4">
                <p className="font-body text-foreground font-medium">{member.full_name}</p>
                <p className="font-body text-sm text-[#b3b3b3]">{member.email}</p>
                <p className="font-body text-sm text-[#b3b3b3]">
                  {member.college} • {member.branch} • Year {member.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Submissions */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-6">
          <h2 className="font-heading text-2xl text-foreground mb-6">Submissions</h2>
          
          {submissions.length > 0 ? (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div key={submission.id} className="bg-background border border-border rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl text-foreground mb-2">
                        {submission.project_title}
                      </h3>
                      <p className="font-body text-[#b3b3b3] mb-4">
                        {submission.project_description}
                      </p>
                      <div className="flex gap-4 mb-3">
                        {submission.file_name && (
                          <span className="font-body text-sm text-foreground">
                            📎 {submission.file_name}
                          </span>
                        )}
                      </div>
                      {submission.file_url && (
                        <a
                          href={submission.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-body text-sm rounded-lg hover:opacity-90 transition-opacity"
                        >
                          <FileText className="w-4 h-4" />
                          Download/View File
                        </a>
                      )}
                      <p className="font-body text-xs text-[#b3b3b3] mt-2">
                        Submitted by: {submission.submitted_by} • {new Date(submission.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-[#b3b3b3] mx-auto mb-3" />
              <p className="font-body text-[#b3b3b3]">No submissions yet</p>
            </div>
          )}
        </div>

        {/* Send Private Message */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h2 className="font-heading text-2xl text-foreground mb-6">Send Private Message</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">
                Message Type
              </label>
              <select
                value={messageType}
                onChange={(e) => setMessageType(e.target.value as any)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              >
                <option value="info">Info</option>
                <option value="important">Important</option>
                <option value="deadline">Deadline</option>
              </select>
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">
                Title
              </label>
              <input
                type="text"
                value={messageTitle}
                onChange={(e) => setMessageTitle(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Message title"
              />
            </div>

            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                placeholder="Type your message here..."
              />
            </div>

            <button
              onClick={handleSendMessage}
              disabled={sending}
              className="w-full py-3 bg-red-500 text-white font-body rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {sending ? 'Sending...' : 'Send Message to Team'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
