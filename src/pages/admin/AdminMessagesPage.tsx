import { useState, useEffect } from "react";
import { Mail, Check, Eye } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { supabase } from "@/lib/supabase";

export function AdminMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [selectedMessage, setSelectedMessage] = useState<any>(null);

  useEffect(() => {
    loadMessages();
  }, [filter]);

  const loadMessages = async () => {
    try {
      let query = supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status: 'read' })
        .eq('id', id);

      if (error) throw error;
      loadMessages();
    } catch (error: any) {
      console.error('Error marking as read:', error);
      alert('Error: ' + error.message);
    }
  };

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'technical':
        return 'bg-blue-500/10 text-blue-400';
      case 'team':
        return 'bg-green-500/10 text-green-400';
      case 'submission':
        return 'bg-purple-500/10 text-purple-400';
      case 'general':
        return 'bg-gray-500/10 text-gray-400';
      default:
        return 'bg-yellow-500/10 text-yellow-400';
    }
  };

  return (
    <>
      <SEO 
        title="Messages - Admin Dashboard"
        description="View contact form submissions"
        url="https://sitnovate.vercel.app/admin/messages"
      />
      
      <div>
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl mb-2 text-foreground">
            Contact Messages
          </h1>
          <p className="font-body text-[#b3b3b3]">
            Messages from participants via contact form
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 font-body text-sm rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-red-500 text-white'
                : 'bg-card border border-border text-[#b3b3b3] hover:text-foreground'
            }`}
          >
            All ({messages.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 font-body text-sm rounded-lg transition-colors ${
              filter === 'unread'
                ? 'bg-red-500 text-white'
                : 'bg-card border border-border text-[#b3b3b3] hover:text-foreground'
            }`}
          >
            Unread
          </button>
          <button
            onClick={() => setFilter('read')}
            className={`px-4 py-2 font-body text-sm rounded-lg transition-colors ${
              filter === 'read'
                ? 'bg-red-500 text-white'
                : 'bg-card border border-border text-[#b3b3b3] hover:text-foreground'
            }`}
          >
            Read
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`bg-card border rounded-2xl p-6 transition-all duration-300 ${
                  message.status === 'unread'
                    ? 'border-red-500/50 bg-red-500/5'
                    : 'border-border hover:border-[#555759]'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading text-lg text-foreground">
                        {message.user_name}
                      </h3>
                      {message.status === 'unread' && (
                        <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="font-body text-sm text-[#b3b3b3] mb-2">
                      {message.user_email}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-body ${getSubjectColor(message.subject)}`}>
                      {message.subject.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {message.status === 'unread' && (
                      <button
                        onClick={() => markAsRead(message.id)}
                        className="p-2 bg-green-500/10 text-green-500 hover:bg-green-500/20 rounded-lg transition-colors"
                        title="Mark as read"
                      >
                        <Check className="w-5 h-5" />
                      </button>
                    )}
                    <button
                      onClick={() => setSelectedMessage(selectedMessage?.id === message.id ? null : message)}
                      className="p-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg transition-colors"
                      title="View details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {selectedMessage?.id === message.id && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-body text-sm font-medium text-foreground mb-2">
                      Message:
                    </h4>
                    <p className="font-body text-foreground whitespace-pre-wrap">
                      {message.message}
                    </p>
                    <p className="font-body text-xs text-[#b3b3b3] mt-4">
                      Received: {new Date(message.created_at).toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {messages.length === 0 && (
              <div className="text-center py-12">
                <Mail className="w-16 h-16 text-[#b3b3b3] mx-auto mb-4" />
                <p className="font-body text-[#b3b3b3]">
                  {filter === 'all' ? 'No messages yet' : `No ${filter} messages`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
