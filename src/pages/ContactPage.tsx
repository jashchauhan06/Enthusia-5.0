import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface ContactCardProps {
  icon: string;
  title: string;
  subtitle: string;
  content: string;
  link?: string;
  gradient: string;
  delay?: number;
}

function ContactCard({ icon, title, subtitle, content, link, gradient, delay = 0 }: ContactCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animation
      const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      cardRef.current.addEventListener('mouseenter', handleMouseEnter);
      cardRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (cardRef.current) {
          cardRef.current.removeEventListener('mouseenter', handleMouseEnter);
          cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 p-8 group cursor-pointer`}
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-heading text-2xl text-white mb-2">{title}</h3>
        <p className="font-mono text-sm text-white/60 mb-4 uppercase tracking-wider">{subtitle}</p>
        {link ? (
          <a 
            href={link}
            className="font-body text-lg text-white hover:text-primary transition-colors duration-300 break-all"
          >
            {content}
          </a>
        ) : (
          <p className="font-body text-lg text-white/80">{content}</p>
        )}
      </div>
      <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
    </div>
  );
}

function AnimatedForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: 'Event',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll('input, select, textarea');
      
      gsap.fromTo(inputs, 
        { 
          opacity: 0, 
          x: -30 
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      queryType: 'Event',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 p-8">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">💬</span>
          <h3 className="font-heading text-2xl text-white">Get In Touch</h3>
        </div>
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:bg-white/10 transition-all duration-300"
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:bg-white/10 transition-all duration-300"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:bg-white/10 transition-all duration-300"
              />
            </div>
            <div className="relative">
              <select
                name="queryType"
                value={formData.queryType}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-primary focus:outline-none focus:bg-white/10 transition-all duration-300"
              >
                <option value="Event" className="bg-black">Event Inquiry</option>
                <option value="Registration" className="bg-black">Registration Help</option>
                <option value="Sponsorship" className="bg-black">Sponsorship</option>
                <option value="Partnership" className="bg-black">Partnership</option>
                <option value="Other" className="bg-black">Other</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your query..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-black font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
}

function Contact() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current && titleRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out"
        }
      );

      // Floating animation for title
      gsap.to(titleRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const contactData = [
    {
      icon: "🏢",
      title: "Visit Us",
      subtitle: "Campus Location",
      content: "Symbiosis Institute of Technology, Nagpur, Maharashtra, India",
      gradient: "from-blue-500/30 to-cyan-500/20",
      delay: 0.1
    },
    {
      icon: "📧",
      title: "Email Us",
      subtitle: "Official Contact",
      content: "enthusia@sitnagpur.edu.in",
      link: "mailto:enthusia@sitnagpur.edu.in",
      gradient: "from-green-500/30 to-emerald-500/20",
      delay: 0.2
    },
    {
      icon: "📱",
      title: "Call Us",
      subtitle: "Direct Line",
      content: "+91 XXXXXXXXXX",
      link: "tel:+91XXXXXXXXXX",
      gradient: "from-purple-500/30 to-pink-500/20",
      delay: 0.3
    },
    {
      icon: "🤝",
      title: "Partnerships",
      subtitle: "Sponsorship & Collaboration",
      content: "partnerships@sitnovate.com",
      link: "mailto:partnerships@sitnovate.com",
      gradient: "from-orange-500/30 to-yellow-500/20",
      delay: 0.4
    }
  ];

  return (
    <section className="relative w-full py-24 px-4 md:px-8 lg:px-16 bg-black min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div ref={heroRef} className="text-center mb-20">
          <h1 
            ref={titleRef}
            className="font-heading text-6xl md:text-8xl lg:text-9xl text-white mb-8 leading-tight tracking-tight"
          >
            CONTACT
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-8" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-4xl mx-auto"
          >
            Ready to innovate? Let's connect and build the future together.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactData.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl text-white mb-6">Let's Start a Conversation</h2>
              <p className="font-body text-lg text-zinc-400 leading-relaxed mb-8">
                Whether you're interested in participating, sponsoring, or partnering with SITNovate 2026, 
                we'd love to hear from you. Our team is here to answer your questions and help you get involved.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-heading text-primary mb-2">24</div>
                  <div className="text-sm font-body text-zinc-400">Hours Response</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-heading text-primary mb-2">100%</div>
                  <div className="text-sm font-body text-zinc-400">Support Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div>
            <AnimatedForm />
          </div>
        </div>

        {/* Social Media Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className="font-heading text-3xl text-white mb-8">Follow Our Journey</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Instagram', icon: '📸', color: 'from-pink-500 to-purple-500', handle: '@sitnovate' },
              { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-700', handle: 'SITNovate' },
              { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-500', handle: '@sitnovate' },
              { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-600', handle: 'SITNovate' }
            ].map((social) => (
              <motion.a
                key={social.name}
                href="#"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-r ${social.color} p-6 rounded-2xl text-white min-w-[200px] group`}
              >
                <div className="text-3xl mb-2">{social.icon}</div>
                <div className="font-heading text-lg">{social.name}</div>
                <div className="font-mono text-sm opacity-80">{social.handle}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 rounded-3xl p-12">
            <h3 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Join SITNovate 2026?
            </h3>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Don't miss out on the biggest hackathon of the year. Register now and be part of innovation history.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a 
                href="/techfest"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black font-heading text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300"
              >
                Register Now
              </motion.a>
              <motion.a 
                href="/gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary font-heading text-lg px-8 py-4 rounded-xl hover:bg-primary/10 transition-all duration-300"
              >
                View Gallery
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactMobile() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    queryType: 'Event',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative w-full py-16 px-4 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl text-white mb-4 tracking-tight">
            CONTACT
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-6" />
          <p className="font-body text-base text-zinc-400 leading-relaxed">
            Ready to innovate? Let's connect and build the future together.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-4 mb-12">
          {[
            { icon: "🏢", title: "Visit Us", content: "SIT Nagpur, Maharashtra", gradient: "from-blue-500/30 to-cyan-500/20" },
            { icon: "📧", title: "Email", content: "enthusia@sitnagpur.edu.in", gradient: "from-green-500/30 to-emerald-500/20" },
            { icon: "📱", title: "Call", content: "+91 XXXXXXXXXX", gradient: "from-purple-500/30 to-pink-500/20" },
            { icon: "🤝", title: "Partner", content: "partnerships@sitnovate.com", gradient: "from-orange-500/30 to-yellow-500/20" }
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-gradient-to-br ${contact.gradient} border border-white/10 rounded-xl p-4`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{contact.icon}</span>
                <div>
                  <h3 className="font-heading text-lg text-white">{contact.title}</h3>
                  <p className="font-body text-sm text-white/80">{contact.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-2xl p-6 mb-12"
        >
          <h3 className="font-heading text-xl text-white mb-6 flex items-center gap-2">
            <span>💬</span> Get In Touch
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:outline-none"
            />
            <select
              name="queryType"
              value={formData.queryType}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none"
            >
              <option value="Event" className="bg-black">Event Inquiry</option>
              <option value="Registration" className="bg-black">Registration</option>
              <option value="Sponsorship" className="bg-black">Sponsorship</option>
              <option value="Other" className="bg-black">Other</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your message..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:outline-none resize-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-blue-500 text-black font-heading text-base px-6 py-3 rounded-lg hover:from-primary/90 hover:to-blue-500/90 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Social Media */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-xl text-white mb-6">Follow Our Journey</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Instagram', icon: '📸', color: 'from-pink-500 to-purple-500' },
              { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-700' },
              { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-500' },
              { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-600' }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className={`bg-gradient-to-r ${social.color} p-4 rounded-xl text-white text-center`}
              >
                <div className="text-2xl mb-1">{social.icon}</div>
                <div className="font-heading text-sm">{social.name}</div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 rounded-2xl p-6">
            <h3 className="font-heading text-lg text-white mb-4">
              Ready to Join SITNovate 2026?
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Don't miss the biggest hackathon of the year.
            </p>
            <div className="space-y-3">
              <a 
                href="/techfest"
                className="block bg-primary text-black font-heading text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                Register Now
              </a>
              <a 
                href="/gallery"
                className="block border border-primary text-primary font-heading text-sm px-6 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                View Gallery
              </a>
            </div>
          </div>
        </motion.div>
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
          title="Contact Us - SITNovate 2026"
          description="Get in touch with the SITNovate team. Contact us for hackathon registration, sponsorships, and partnerships."
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
        title="Contact Us - SITNovate 2026"
        description="Get in touch with the SITNovate team. Contact us for hackathon registration, sponsorships, and partnerships."
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