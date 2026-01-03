import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: 'Event',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-card border border-border rounded-3xl p-8">
      <h3 className="font-heading text-2xl text-foreground mb-6">
        📝 QUICK CONTACT FORM
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-body text-sm text-[#b3b3b3] mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label className="block font-body text-sm text-[#b3b3b3] mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-body text-sm text-[#b3b3b3] mb-2">Contact Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block font-body text-sm text-[#b3b3b3] mb-2">Query Type</label>
            <select
              name="queryType"
              value={formData.queryType}
              onChange={handleChange}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
            >
              <option value="Event">Event</option>
              <option value="Registration">Registration</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-body text-sm text-[#b3b3b3] mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your query..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
        >
          👉 Submit
        </button>
      </form>
    </div>
  );
}

function Contact() {
  return (
    <section 
      id="contact" 
      className="relative w-full py-24 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-tight">
            📞 CONTACT US
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl text-primary mb-8">
            Let's Connect
          </h2>
          <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed max-w-4xl mx-auto">
            Have a question about events, registrations, sponsorships, or collaborations? The Enthusia 5.0 team is here to help.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Venue */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🏫</span>
                <h3 className="font-heading text-2xl text-foreground">FEST VENUE</h3>
              </div>
              <div className="space-y-3">
                <p className="font-body text-lg text-foreground font-medium">
                  Symbiosis Institute of Technology, Nagpur
                </p>
                <p className="font-body text-base text-[#b3b3b3]">
                  Nagpur, Maharashtra, India
                </p>
                <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50">
                  <p className="font-body text-sm text-[#b3b3b3] text-center">
                    📍 (Embedded Google Map recommended here)
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📧</span>
                <h3 className="font-heading text-2xl text-foreground">EMAIL</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-body text-base text-[#b3b3b3] mb-2">Official Fest Email:</p>
                  <a 
                    href="mailto:enthusia@sitnagpur.edu.in" 
                    className="font-body text-lg text-green-400 hover:text-green-300 transition-colors"
                  >
                    📩 enthusia@sitnagpur.edu.in
                  </a>
                  <p className="font-body text-xs text-[#b3b3b3] mt-1">(placeholder – update with final ID)</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📱</span>
                <h3 className="font-heading text-2xl text-foreground">PHONE</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-body text-base text-[#b3b3b3] mb-2">Fest President / Core Team:</p>
                  <a 
                    href="tel:+91XXXXXXXXXX" 
                    className="font-body text-lg text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    📞 +91 XXXXXXXXXX
                  </a>
                  <p className="font-body text-xs text-[#b3b3b3] mt-1">(to be updated)</p>
                </div>
              </div>
            </div>

            {/* Sponsorship */}
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🤝</span>
                <h3 className="font-heading text-2xl text-foreground">SPONSORSHIP & PARTNERSHIPS</h3>
              </div>
              <div className="space-y-4">
                <p className="font-body text-base text-[#b3b3b3]">
                  For sponsorships, partnerships, and brand collaborations:
                </p>
                <a 
                  href="mailto:sponsorships.enthusia@sitnagpur.edu.in" 
                  className="font-body text-lg text-orange-400 hover:text-orange-300 transition-colors block"
                >
                  📩 sponsorships.enthusia@sitnagpur.edu.in
                </a>
                <p className="font-body text-xs text-[#b3b3b3]">(placeholder)</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-3xl">🌐</span>
              <h3 className="font-heading text-2xl md:text-3xl text-foreground">FOLLOW US</h3>
            </div>
            <p className="font-body text-lg text-[#b3b3b3] mb-8">
              Stay updated with announcements, reveals, and behind-the-scenes content:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 text-pink-400 hover:bg-pink-500/30 hover:border-pink-500/60 font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                📸 Instagram
              </button>
              <button className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 text-blue-400 hover:bg-blue-500/30 hover:border-blue-500/60 font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                💼 LinkedIn
              </button>
              <button className="bg-gradient-to-r from-gray-500/20 to-slate-500/20 border border-gray-500/40 text-gray-400 hover:bg-gray-500/30 hover:border-gray-500/60 font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                🐦 X / Twitter
              </button>
            </div>
            <p className="font-body text-sm text-[#b3b3b3] mt-4">
              (Icons with links recommended)
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
              🔘 CALL TO ACTION
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                Register for Enthusia 5.0
              </button>
              <button className="bg-gradient-to-r from-transparent to-transparent border-2 border-primary text-primary hover:bg-primary/10 font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactMobile() {
  return (
    <section 
      id="contact-mobile" 
      className="relative w-full py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl text-foreground mb-6 leading-tight">
            📞 CONTACT US
          </h1>
          <h2 className="font-heading text-lg text-primary mb-6">
            Let's Connect
          </h2>
          <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
            Have questions about events, registrations, sponsorships, or collaborations? We're here to help.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-6 mb-16">
          {/* Venue */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🏫</span>
              <h3 className="font-heading text-lg text-foreground">FEST VENUE</h3>
            </div>
            <p className="font-body text-base text-foreground font-medium mb-2">
              Symbiosis Institute of Technology, Nagpur
            </p>
            <p className="font-body text-sm text-[#b3b3b3] mb-3">
              Nagpur, Maharashtra, India
            </p>
            <div className="p-3 bg-muted/30 rounded-lg border border-border/50">
              <p className="font-body text-xs text-[#b3b3b3] text-center">
                📍 (Google Map recommended)
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📧</span>
              <h3 className="font-heading text-lg text-foreground">EMAIL</h3>
            </div>
            <p className="font-body text-sm text-[#b3b3b3] mb-2">Official Fest Email:</p>
            <a 
              href="mailto:enthusia@sitnagpur.edu.in" 
              className="font-body text-base text-green-400 hover:text-green-300 transition-colors"
            >
              📩 enthusia@sitnagpur.edu.in
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📱</span>
              <h3 className="font-heading text-lg text-foreground">PHONE</h3>
            </div>
            <p className="font-body text-sm text-[#b3b3b3] mb-2">Fest President / Core Team:</p>
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="font-body text-base text-purple-400 hover:text-purple-300 transition-colors"
            >
              📞 +91 XXXXXXXXXX
            </a>
          </div>

          {/* Sponsorship */}
          <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🤝</span>
              <h3 className="font-heading text-lg text-foreground">SPONSORSHIP</h3>
            </div>
            <p className="font-body text-sm text-[#b3b3b3] mb-2">
              For sponsorships & partnerships:
            </p>
            <a 
              href="mailto:sponsorships.enthusia@sitnagpur.edu.in" 
              className="font-body text-base text-orange-400 hover:text-orange-300 transition-colors"
            >
              📩 sponsorships.enthusia@sitnagpur.edu.in
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-heading text-lg text-foreground mb-6">
              📝 QUICK CONTACT FORM
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <select className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors">
                  <option value="Event">Event</option>
                  <option value="Registration">Registration</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-heading text-base px-6 py-3 rounded-lg transition-all duration-300"
              >
                👉 Submit
              </button>
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xl">🌐</span>
              <h3 className="font-heading text-lg text-foreground">FOLLOW US</h3>
            </div>
            <p className="font-body text-sm text-[#b3b3b3] mb-6">
              Stay updated with announcements and content:
            </p>
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 text-pink-400 font-heading text-sm px-6 py-3 rounded-lg transition-all duration-300">
                📸 Instagram
              </button>
              <button className="w-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/40 text-blue-400 font-heading text-sm px-6 py-3 rounded-lg transition-all duration-300">
                💼 LinkedIn
              </button>
              <button className="w-full bg-gradient-to-r from-gray-500/20 to-slate-500/20 border border-gray-500/40 text-gray-400 font-heading text-sm px-6 py-3 rounded-lg transition-all duration-300">
                🐦 X / Twitter
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
            <h3 className="font-heading text-lg text-foreground mb-6">
              🔘 CALL TO ACTION
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-heading text-base px-6 py-3 rounded-lg transition-all duration-300">
                Register for Enthusia 5.0
              </button>
              <button className="w-full bg-gradient-to-r from-transparent to-transparent border-2 border-primary text-primary hover:bg-primary/10 font-heading text-base px-6 py-3 rounded-lg transition-all duration-300">
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return (
      <>
        <SEO 
          title="Contact Us - Let's Connect"
          description="Get in touch with the Enthusia 5.0 team. Contact us for events, registrations, sponsorships, and collaborations."
          url="https://sitnovate.vercel.app/contact"
        />
        <div className="flex min-h-svh flex-col">
          <ProgressiveBlur
            direction="top"
            className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
            blurIntensity={1}
          />
          
          <Sidebar />
          
          <ContactMobile />

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Contact Us - Let's Connect"
        description="Get in touch with the Enthusia 5.0 team. Contact us for events, registrations, sponsorships, and collaborations."
        url="https://sitnovate.vercel.app/contact"
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}