import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SEO } from "@/components/seo/SEO";
import { supabase } from "@/lib/supabase";

export function ContactPage() {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.subject || !formData.message) {
      alert('Please fill all fields');
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');

      const { error } = await supabase
        .from('contact_messages')
        .insert({
          user_id: user.sub,
          user_name: userProfile.full_name || user.name,
          user_email: userProfile.email || user.email,
          subject: formData.subject,
          message: formData.message,
          status: 'unread'
        });

      if (error) throw error;

      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ subject: '', message: '' });
      }, 3000);
    } catch (error: any) {
      console.error('Error sending message:', error);
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - SITNovate Dashboard"
        description="Get in touch with the SITNovate team"
        url="https://sitnovate.vercel.app/dashboard/contact"
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">
            Contact Us
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Email Card */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-heading text-lg text-foreground mb-2">
              Email
            </h3>
            <p className="font-body text-sm text-[#b3b3b3]">
              support@sitnovate.com
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-heading text-lg text-foreground mb-2">
              Phone
            </h3>
            <p className="font-body text-sm text-[#b3b3b3]">
              +91 XXXXXXXXXX
            </p>
          </div>

          {/* Location Card */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-heading text-lg text-foreground mb-2">
              Location
            </h3>
            <p className="font-body text-sm text-[#b3b3b3]">
              SIT Campus, Nagpur
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h2 className="font-heading text-2xl text-foreground mb-6">
            Send us a Message
          </h2>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">
                Message Sent!
              </h3>
              <p className="font-body text-sm text-[#b3b3b3]">
                We'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-body text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="technical">Technical Issue</option>
                  <option value="team">Team Related</option>
                  <option value="submission">Submission Query</option>
                  <option value="general">General Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                  placeholder="Type your message here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-heading text-lg rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
