const contactInfo = [
  {
    title: 'General Inquiries',
    email: 'info@enthusia.sit.edu',
    phone: '+91 9876543210',
    icon: '📧'
  },
  {
    title: 'Registration',
    email: 'register@enthusia.sit.edu',
    phone: '+91 9876543211',
    icon: '📝'
  },
  {
    title: 'Sponsorship',
    email: 'sponsors@enthusia.sit.edu',
    phone: '+91 9876543212',
    icon: '🤝'
  }
];

const socialLinks = [
  { platform: 'Instagram', handle: '@enthusia_sit', icon: '📷', color: 'from-pink-500 to-purple-500' },
  { platform: 'Facebook', handle: 'Enthusia SIT', icon: '📘', color: 'from-blue-600 to-blue-700' },
  { platform: 'Twitter', handle: '@enthusia_sit', icon: '🐦', color: 'from-blue-400 to-blue-500' },
  { platform: 'LinkedIn', handle: 'Enthusia SIT', icon: '💼', color: 'from-blue-700 to-blue-800' },
  { platform: 'YouTube', handle: 'Enthusia SIT', icon: '📺', color: 'from-red-500 to-red-600' },
  { platform: 'Discord', handle: 'Community', icon: '🎮', color: 'from-indigo-500 to-purple-600' }
];

export function ContactMobile() {
  return (
    <section 
      id="contact-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="max-w-sm mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            GET IN TOUCH
          </h2>
          <p className="font-heading text-2xl text-foreground mb-4">
            Contact Us
          </p>
          <p className="text-foreground/80 text-center">
            Have questions about Enthusia 5.0? We're here to help!
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-8">
          {contactInfo.map((contact, index) => (
            <div key={index} className="bg-card p-4 rounded-lg border">
              <div className="flex items-start gap-3">
                <div className="text-2xl">{contact.icon}</div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-2 text-sm">{contact.title}</h4>
                  <div className="space-y-1">
                    <p className="text-foreground/80 text-xs">
                      <a href={`mailto:${contact.email}`} className="hover:text-primary">
                        {contact.email}
                      </a>
                    </p>
                    <p className="text-foreground/80 text-xs">
                      <a href={`tel:${contact.phone}`} className="hover:text-primary">
                        {contact.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Address */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg mb-8">
          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2 text-sm">
            <span className="text-lg">📍</span>
            Visit Us
          </h4>
          <div className="text-foreground/80 text-xs">
            <p className="font-medium">Symbiosis Institute of Technology</p>
            <p>Lavale, Mulshi, Pune - 412115</p>
            <p>Maharashtra, India</p>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="bg-card p-6 rounded-lg border mb-8">
          <h3 className="font-medium text-foreground mb-4">
            Quick Inquiry
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-foreground/80 mb-1 text-xs font-medium">Name</label>
              <input 
                type="text" 
                className="w-full p-3 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-foreground/80 mb-1 text-xs font-medium">Email</label>
              <input 
                type="email" 
                className="w-full p-3 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-foreground/80 mb-1 text-xs font-medium">Subject</label>
              <select className="w-full p-3 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option>General Inquiry</option>
                <option>Registration Help</option>
                <option>Sponsorship</option>
                <option>Technical Support</option>
              </select>
            </div>
            <div>
              <label className="block text-foreground/80 mb-1 text-xs font-medium">Message</label>
              <textarea 
                rows={3}
                className="w-full p-3 border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div className="mb-8">
          <h3 className="font-medium text-foreground mb-4 text-center">
            Follow Us
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className={`bg-gradient-to-r ${social.color} p-3 rounded-lg text-white text-center`}
              >
                <div className="text-lg mb-1">{social.icon}</div>
                <div className="font-medium text-xs">{social.platform}</div>
                <div className="text-xs opacity-90">{social.handle}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl">
          <h3 className="font-medium text-foreground mb-3">
            Ready to Join Enthusia 5.0?
          </h3>
          <p className="text-sm text-foreground/80 mb-4">
            Don't miss the biggest techno-cultural festival of the year!
          </p>
          <div className="space-y-3">
            <a 
              href="/techfest"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold"
            >
              Register Now
            </a>
            <button className="w-full border border-primary text-primary py-3 rounded-lg font-semibold">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}