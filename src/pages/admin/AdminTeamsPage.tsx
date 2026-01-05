import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Users, Eye } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { supabase } from "@/lib/supabase";

export function AdminTeamsPage() {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTeams();
  }, []);

  const loadTeams = async () => {
    try {
      const { data: teamsData, error } = await supabase
        .from('teams')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // For each team, get member details
      const teamsWithMembers = await Promise.all(
        (teamsData || []).map(async (team) => {
          const { data: members } = await supabase
            .from('users')
            .select('full_name, email')
            .eq('team_code', team.code);

          return {
            ...team,
            members: members || []
          };
        })
      );

      setTeams(teamsWithMembers);
    } catch (error) {
      console.error('Error loading teams:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-body text-[#b3b3b3]">Loading teams...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Teams Management - Admin Dashboard"
        description="Manage all hackathon teams"
        url="https://sitnovate.vercel.app/admin/teams"
      />
      
      <div>
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl mb-2 text-foreground">
            Teams Management
          </h1>
          <p className="font-body text-[#b3b3b3]">
            Total Teams: {teams.length}
          </p>
        </div>

        <div className="grid gap-4">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-card border border-border rounded-2xl p-6 hover:border-[#555759] transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-foreground">
                        {team.name}
                      </h3>
                      <p className="font-body text-sm text-[#b3b3b3]">
                        Code: {team.code} • {team.member_count}/3 Members
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-body text-sm text-[#b3b3b3]">Team Members:</p>
                    {team.members.map((member: any, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <span className="font-body text-foreground">{member.full_name}</span>
                        <span className="text-[#b3b3b3]">({member.email})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/admin/teams/${team.code}`)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-body text-sm rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
              </div>
            </div>
          ))}

          {teams.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-[#b3b3b3] mx-auto mb-4" />
              <p className="font-body text-[#b3b3b3]">No teams registered yet</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
