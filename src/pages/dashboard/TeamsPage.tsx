import { useState, useEffect } from "react";
import { Users, Plus, UserPlus } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { supabase } from "@/lib/supabase";

export function TeamsPage() {
  const [view, setView] = useState<'main' | 'host' | 'join'>('main');
  const [teamName, setTeamName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [currentTeam, setCurrentTeam] = useState<any>(null);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  const generateTeamCode = () => {
    const code = Math.floor(10000 + Math.random() * 90000).toString();
    return code;
  };

  const loadTeamData = async () => {
    setInitialLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      
      if (!user.sub) {
        console.error('No user found in localStorage');
        setInitialLoading(false);
        return;
      }

      // Fetch user's current data from Supabase to get latest team_code
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('google_id', user.sub)
        .single();

      if (userError) {
        console.error('Error fetching user data:', userError);
        setInitialLoading(false);
        return;
      }

      if (userData && userData.team_code) {
        // Update localStorage with latest data
        localStorage.setItem('userProfile', JSON.stringify(userData));

        // Fetch team details
        const { data: team } = await supabase
          .from('teams')
          .select('*')
          .eq('code', userData.team_code)
          .single();
        
        if (team) {
          setCurrentTeam(team);
          
          // Fetch team members
          const { data: members } = await supabase
            .from('users')
            .select('full_name, email, google_id')
            .eq('team_code', userData.team_code);
          
          setTeamMembers(members || []);
        }
      } else {
        // User has no team, clear any stale data
        setCurrentTeam(null);
        setTeamMembers([]);
      }
    } catch (error) {
      console.error('Error loading team data:', error);
    } finally {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    // Reset view to main when component mounts
    setView('main');
    setGeneratedCode('');
    loadTeamData();
  }, []);

  const handleHostTeam = async () => {
    if (!teamName.trim()) {
      alert('Please enter a team name');
      return;
    }

    setLoading(true);
    try {
      const code = generateTeamCode();
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      // Create team in database
      const { error: teamError } = await supabase
        .from('teams')
        .insert({
          code: code,
          name: teamName,
          member_count: 1
        });

      if (teamError) throw teamError;

      // Update user's team_code
      const { error: userError } = await supabase
        .from('users')
        .update({ team_code: code })
        .eq('google_id', user.sub);

      if (userError) throw userError;

      // Update localStorage
      userProfile.team_code = code;
      localStorage.setItem('userProfile', JSON.stringify(userProfile));

      setGeneratedCode(code);
      await loadTeamData();
    } catch (error: any) {
      console.error('Error creating team:', error);
      alert('Error creating team: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleJoinTeam = async () => {
    if (!joinCode.trim() || joinCode.length !== 5) {
      alert('Please enter a valid 5-digit team code');
      return;
    }

    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');

      // Check if team exists
      const { data: team, error: teamFetchError } = await supabase
        .from('teams')
        .select('*')
        .eq('code', joinCode)
        .single();

      if (teamFetchError || !team) {
        alert('Team not found. Please check the code and try again.');
        setLoading(false);
        return;
      }

      // Check if team is full (max 3 members)
      if (team.member_count >= 3) {
        alert('This team is full. Maximum 3 members allowed per team.');
        setLoading(false);
        return;
      }

      // Update user's team_code
      const { error: userError } = await supabase
        .from('users')
        .update({ team_code: joinCode })
        .eq('google_id', user.sub);

      if (userError) throw userError;

      // Increment team member count
      const { error: teamUpdateError } = await supabase
        .from('teams')
        .update({ member_count: team.member_count + 1 })
        .eq('code', joinCode);

      if (teamUpdateError) throw teamUpdateError;

      // Update localStorage
      userProfile.team_code = joinCode;
      localStorage.setItem('userProfile', JSON.stringify(userProfile));

      alert(`Successfully joined team: ${team.name}`);
      await loadTeamData();
      setView('main');
    } catch (error: any) {
      console.error('Error joining team:', error);
      alert('Error joining team: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLeaveTeam = async () => {
    if (!confirm('Are you sure you want to leave this team?')) {
      return;
    }

    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      const teamCode = userProfile.team_code;

      // Get current team
      const { data: team } = await supabase
        .from('teams')
        .select('*')
        .eq('code', teamCode)
        .single();

      if (team) {
        // Decrement member count
        const newCount = team.member_count - 1;
        
        if (newCount === 0) {
          // Delete team if no members left
          await supabase
            .from('teams')
            .delete()
            .eq('code', teamCode);
        } else {
          // Update member count
          await supabase
            .from('teams')
            .update({ member_count: newCount })
            .eq('code', teamCode);
        }
      }

      // Remove team_code from user
      const { error } = await supabase
        .from('users')
        .update({ team_code: null })
        .eq('google_id', user.sub);

      if (error) throw error;

      // Update localStorage
      userProfile.team_code = null;
      localStorage.setItem('userProfile', JSON.stringify(userProfile));

      setCurrentTeam(null);
      setTeamMembers([]);
      setView('main');
    } catch (error: any) {
      console.error('Error leaving team:', error);
      alert('Error leaving team: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Show loading state while fetching team data
  if (initialLoading) {
    return (
      <>
        <SEO 
          title="Teams - SITNovate Dashboard"
          description="Manage your hackathon team"
          url="https://sitnovate.vercel.app/dashboard/teams"
        />
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="font-body text-[#b3b3b3]">Loading team data...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (currentTeam && view === 'main') {
    const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const isHost = teamMembers.length > 0 && teamMembers[0]?.google_id === userProfile.google_id;

    return (
      <>
        <SEO 
          title="My Team - SITNovate Dashboard"
          description="Manage your hackathon team"
          url="https://sitnovate.vercel.app/dashboard/teams"
        />
        
        <div className="max-w-2xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl mb-6 text-foreground">
            My Team
          </h1>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-foreground">
                  {currentTeam.name}
                </h2>
                <p className="font-body text-sm text-[#b3b3b3]">
                  {isHost ? 'Team Leader' : 'Team Member'} • {currentTeam.member_count}/3 Members
                </p>
              </div>
            </div>

            {isHost && (
              <div className="bg-background border border-border rounded-xl p-6 mb-6">
                <h3 className="font-heading text-lg text-foreground mb-2">
                  Team Code
                </h3>
                <p className="font-body text-sm text-[#b3b3b3] mb-4">
                  Share this code with your team members (Max 3 members total)
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-card border border-border rounded-lg p-4">
                    <p className="font-heading text-3xl text-center text-foreground tracking-wider">
                      {currentTeam.code}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(currentTeam.code);
                      alert('Code copied to clipboard!');
                    }}
                    className="px-6 py-3 bg-primary text-primary-foreground font-body rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Copy
                  </button>
                </div>
                {currentTeam.member_count >= 3 && (
                  <p className="font-body text-sm text-yellow-400 mt-4">
                    ⚠️ Team is full. No more members can join.
                  </p>
                )}
              </div>
            )}

            {/* Team Members List */}
            <div className="space-y-4 mb-6">
              <h3 className="font-heading text-lg text-foreground">
                Team Members ({teamMembers.length}/3)
              </h3>
              {teamMembers.map((member, index) => (
                <div key={member.google_id} className="bg-background border border-border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-foreground font-medium">
                        {member.full_name}
                        {index === 0 && <span className="ml-2 text-xs text-primary">(Leader)</span>}
                      </p>
                      <p className="font-body text-sm text-[#b3b3b3]">{member.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-lg text-foreground">
                Team Information
              </h3>
              <div className="grid grid-cols-2 gap-4 font-body text-sm">
                <div>
                  <p className="text-[#b3b3b3]">Team Code</p>
                  <p className="text-foreground font-medium">{currentTeam.code}</p>
                </div>
                <div>
                  <p className="text-[#b3b3b3]">Members</p>
                  <p className="text-foreground font-medium">{currentTeam.member_count}/3</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleLeaveTeam}
              disabled={loading}
              className="w-full mt-6 py-3 bg-red-500/10 text-red-500 font-body rounded-lg hover:bg-red-500/20 transition-colors disabled:opacity-50"
            >
              {loading ? 'Leaving...' : 'Leave Team'}
            </button>
          </div>
        </div>
      </>
    );
  }

  if (view === 'host') {
    return (
      <>
        <SEO 
          title="Host a Team - SITNovate Dashboard"
          description="Create and host your hackathon team"
          url="https://sitnovate.vercel.app/dashboard/teams"
        />
        
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setView('main')}
            className="mb-6 text-[#b3b3b3] hover:text-foreground font-body text-sm"
          >
            ← Back
          </button>

          <h1 className="font-heading text-3xl md:text-4xl mb-6 text-foreground">
            Host a Team
          </h1>

          {!generatedCode ? (
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
                <p className="font-body text-sm text-blue-400">
                  💡 Maximum 3 members per team (including you)
                </p>
              </div>

              <div className="mb-6">
                <label htmlFor="teamName" className="block font-body text-sm font-medium text-foreground mb-2">
                  Team Name *
                </label>
                <input
                  type="text"
                  id="teamName"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Enter your team name"
                />
              </div>

              <button
                onClick={handleHostTeam}
                disabled={loading}
                className="w-full py-4 bg-primary text-primary-foreground font-heading text-lg rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Generate Team Code'}
              </button>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="font-heading text-2xl text-foreground mb-2">
                  Team Created Successfully!
                </h2>
                <p className="font-body text-[#b3b3b3]">
                  Share this code with your team members (Max 3 total)
                </p>
              </div>

              <div className="bg-background border border-border rounded-xl p-8 mb-6">
                <p className="font-body text-sm text-[#b3b3b3] text-center mb-4">
                  Your Team Code
                </p>
                <p className="font-heading text-5xl text-center text-foreground tracking-wider mb-6">
                  {generatedCode}
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedCode);
                    alert('Code copied to clipboard!');
                  }}
                  className="w-full py-3 bg-primary text-primary-foreground font-body rounded-lg hover:opacity-90 transition-opacity"
                >
                  Copy Code
                </button>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
                <p className="font-body text-sm text-blue-400">
                  💡 Team members can join using this 5-digit code. Maximum 3 members per team!
                </p>
              </div>

              <button
                onClick={() => {
                  setView('main');
                  loadTeamData();
                }}
                className="w-full py-3 bg-background border border-border text-foreground font-body rounded-lg hover:bg-card transition-colors"
              >
                View My Team
              </button>
            </div>
          )}
        </div>
      </>
    );
  }

  if (view === 'join') {
    return (
      <>
        <SEO 
          title="Join a Team - SITNovate Dashboard"
          description="Join an existing hackathon team"
          url="https://sitnovate.vercel.app/dashboard/teams"
        />
        
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setView('main')}
            className="mb-6 text-[#b3b3b3] hover:text-foreground font-body text-sm"
          >
            ← Back
          </button>

          <h1 className="font-heading text-3xl md:text-4xl mb-6 text-foreground">
            Join a Team
          </h1>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
              <p className="font-body text-sm text-blue-400">
                💡 Teams can have maximum 3 members. Make sure the team isn't full!
              </p>
            </div>

            <div className="mb-6">
              <label htmlFor="joinCode" className="block font-body text-sm font-medium text-foreground mb-2">
                Team Code *
              </label>
              <input
                type="text"
                id="joinCode"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground text-center text-2xl tracking-wider"
                placeholder="00000"
                maxLength={5}
              />
              <p className="font-body text-xs text-[#b3b3b3] mt-2">
                Enter the 5-digit code provided by your team leader
              </p>
            </div>

            <button
              onClick={handleJoinTeam}
              disabled={loading}
              className="w-full py-4 bg-primary text-primary-foreground font-heading text-lg rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Joining...' : 'Join Team'}
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Teams - SITNovate Dashboard"
        description="Manage your hackathon team"
        url="https://sitnovate.vercel.app/dashboard/teams"
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl mb-6 text-foreground">
          Team Management
        </h1>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
          <p className="font-body text-sm text-yellow-400">
            ⚠️ Important: Each team can have a maximum of 3 members
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Host a Team Card */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-[#555759] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Plus className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-2xl text-foreground mb-3">
              Host a Team
            </h2>
            <p className="font-body text-[#b3b3b3] mb-6">
              Create a new team and get a unique code to share with up to 2 other members
            </p>
            <button
              onClick={() => setView('host')}
              className="w-full py-3 bg-primary text-primary-foreground font-body rounded-lg hover:opacity-90 transition-opacity"
            >
              Create Team
            </button>
          </div>

          {/* Join a Team Card */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-[#555759] transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
              <UserPlus className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="font-heading text-2xl text-foreground mb-3">
              Join a Team
            </h2>
            <p className="font-body text-[#b3b3b3] mb-6">
              Have a team code? Join an existing team and start collaborating
            </p>
            <button
              onClick={() => setView('join')}
              className="w-full py-3 bg-green-500 text-white font-body rounded-lg hover:opacity-90 transition-opacity"
            >
              Join Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
