import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { supabase } from "@/lib/supabase";

export function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnnouncements();
  }, []);

  const loadAnnouncements = async () => {
    try {
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      const teamCode = userProfile.team_code;

      // Fetch public announcements and team-specific announcements
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .or(`is_private.eq.false,target_team_code.eq.${teamCode || 'null'}`)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setAnnouncements(data || []);
    } catch (error) {
      console.error('Error loading announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'bg-red-500/10 border-red-500/20 text-red-400';
      case 'deadline':
        return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400';
      case 'info':
        return 'bg-blue-500/10 border-blue-500/20 text-blue-400';
      default:
        return 'bg-gray-500/10 border-gray-500/20 text-gray-400';
    }
  };

  return (
    <>
      <SEO 
        title="Announcements - SITNovate Dashboard"
        description="Latest announcements and updates"
        url="https://sitnovate.vercel.app/dashboard/announcements"
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Bell className="w-6 h-6 text-primary" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">
            Announcements
          </h1>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-card border border-border rounded-2xl p-6 hover:border-[#555759] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h2 className="font-heading text-xl text-foreground">
                      {announcement.title}
                      {announcement.is_private && (
                        <span className="ml-2 text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">
                          Private
                        </span>
                      )}
                    </h2>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-body border ${getTypeColor(announcement.type)}`}>
                    {announcement.type.toUpperCase()}
                  </span>
                </div>
                <p className="font-body text-sm text-[#b3b3b3] mb-3">
                  {new Date(announcement.created_at).toLocaleDateString()}
                </p>
                <p className="font-body text-foreground">
                  {announcement.content}
                </p>
              </div>
            ))}

            {announcements.length === 0 && (
              <div className="text-center py-12">
                <Bell className="w-16 h-16 text-[#b3b3b3] mx-auto mb-4" />
                <p className="font-body text-[#b3b3b3]">No announcements yet</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
