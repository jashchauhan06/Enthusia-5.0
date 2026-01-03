const contactInfo = [
  {
    title: 'General Inquiries',
    email: 'info@enthusia.sit.edu',
    phone: '+91 9876543210',
    icon: '📧'
  },
  {
    title: 'Registration Support',
    email: 'register@enthusia.sit.edu',
    phone: '+91 9876543211',
    icon: '📝'
  },
  {
    title: 'Sponsorship',
    email: 'sponsors@enthusia.sit.edu',
    phone: '+91 9876543212',
    icon: '🤝'
  },
  {
    title: 'Media & Press',
    email: 'media@enthusia.sit.edu',
    phone: '+91 9876543213',
    icon: '📰'
  }
];

const socialLinks = [
  { platform: 'Instagram', handle: '@enthusia_sit', icon: '📷', color: 'from-pink-500 to-purple-500' },
  { platform: 'Facebook', handle: 'Enthusia SIT Nagpur', icon: '📘', color: 'from-blue-600 to-blue-700' },
  { platform: 'Twitter', handle: '@enthusia_sit', icon: '🐦', color: 'from-blue-400 to-blue-500' },
  { platform: 'LinkedIn', handle: 'Enthusia SIT', icon: '💼', color: 'from-blue-700 to-blue-800' },
  { platform: 'YouTube', handle: 'Enthusia SIT', icon: '📺', color: 'from-red-500 to-red-600' },
  { platform: 'Discord', handle: 'Enthusia Community', icon: '🎮', color: 'from-indigo-500 to-purple-600' }
];

export function Contact() {
  return (
    <section 
      id="contact" 
      className="py-20 px-6 md:px-12 lg:px-16 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            GET IN TOUCH
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Contact Us
          </p>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Have questions about Enthusia 5.0? Need help with registration? 
            Want to partner with us? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Information
            </h3>
            
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{contact.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">{contact.title}</h4>
                    <div className="space-y-1">
                      <p className="text-foreground/80">
                        <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                          {contact.email}
                        </a>
                      </p>
                      <p className="text-foreground/80">
                        <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                          {contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Address */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Visit Us
              </h4>
              <div className="text-foreground/80">
                <p className="font-medium">Symbiosis Institute of Technology</p>
                <p>Lavale, Mulshi, Pune - 412115</p>
                <p>Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-card p-8 rounded-xl border">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Quick Inquiry
            </h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground/80 mb-2 text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-foreground/80 mb-2 text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-foreground/80 mb-2 text-sm font-medium">Subject</label>
                <select className="w-full p-3 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>General Inquiry</option>
                  <option>Registration Help</option>
                  <option>Sponsorship</option>
                  <option>Media & Press</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-foreground/80 mb-2 text-sm font-medium">Message</label>
                <textarea 
                  rows={4}
                  className="w-full p-3 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Follow Us on Social Media
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className={`bg-gradient-to-r ${social.color} p-4 rounded-lg text-white text-center hover:scale-105 transition-transform`}
              >
                <div className="text-2xl mb-2">{social.icon}</div>
                <div className="font-medium text-sm">{social.platform}</div>
                <div className="text-xs opacity-90">{social.handle}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Join Enthusia 5.0?
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Don't miss out on the biggest techno-cultural festival of the year. 
            Register now and be part of an unforgettable experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/techfest"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Register Now
            </a>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}