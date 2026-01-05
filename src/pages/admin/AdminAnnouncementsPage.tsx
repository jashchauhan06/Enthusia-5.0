import { useState, useEffect } from "react";
import { Bell, Plus, Trash2 } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { supabase } from "@/lib/supabase";

export function AdminAnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'info' as 'info' | 'important' | 'deadline'
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadAnnouncements();
  }, []);

  const loadAnnouncements = async () => {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .eq('is_private', false)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAnnouncements(data || []);
    } catch (error) {
      console.error('Error loading announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      alert('Please fill all fields');
      return;
    }

    setSubmitting(true);
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      const { error } = await supabase
        .from('announcements')
        .insert({
          title: formData.title,
          content: formData.content,
          type: formData.type,
          is_private: false,
          created_by: user.email || 'Admin'
        });

      if (error) throw error;

      alert('Announcement created successfully!');
      setFormData({ title: '', content: '', type: 'info' });
      setShowForm(false);
      loadAnnouncements();
    } catch (error: any) {
      console.error('Error creating announcement:', error);
      alert('Error creating announcement: ' + error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('announcements')
        .delete()
        .eq('id', id);

      if (error) throw error;

      alert('Announcement deleted successfully!');
      loadAnnouncements();
    } catch (error: any) {
      console.error('Error deleting announcement:', error);
      alert('Error deleting announcement: ' + error.message);
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
        title="Announcements - Admin Dashboard"
        description="Manage public announcements"
        url="https://sitnovate.vercel.app/admin/announcements"
      />
      
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl mb-2 text-foreground">
              Public Announcements
            </h1>
            <p className="font-body text-[#b3b3b3]">
              Manage announcements visible to all participants
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-body rounded-lg hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            New Announcement
          </button>
        </div>

        {showForm && (
          <div className="bg-card border border-border rounded-2xl p-8 mb-6">
            <h2 className="font-heading text-2xl text-foreground mb-6">Create Announcement</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
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
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Announcement title"
                  required
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                  placeholder="Announcement content"
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3 bg-red-500 text-white font-body rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {submitting ? 'Creating...' : 'Create Announcement'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-background border border-border text-foreground font-body rounded-lg hover:bg-card transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      {announcement.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-body border ${getTypeColor(announcement.type)}`}>
                      {announcement.type.toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDelete(announcement.id)}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <p className="font-body text-foreground mb-3">
                  {announcement.content}
                </p>
                <p className="font-body text-xs text-[#b3b3b3]">
                  Created: {new Date(announcement.created_at).toLocaleString()} by {announcement.created_by}
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
