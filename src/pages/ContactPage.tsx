import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Handshake,
  Send,
  Loader2,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Copy,
  Check,
  ChevronDown
} from "lucide-react";

// --- Components ---

function GlitchText({ text, className }: { text: string; className?: string }) {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100 delay-75 select-none">
        {text}
      </span>
    </div>
  );
}

function ContactCard({ icon: Icon, title, subtitle, content, link, delay = 0 }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      {/* Holographic Border Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/50 via-blue-500/20 to-transparent rounded-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />

      <div className="relative h-full bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden flex flex-col justify-between">
        {/* Scanline Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,14,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

        {/* Glow Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-3xl rounded-full" />

        <div className="relative z-10">
          <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>

          <h3 className="font-heading text-xl md:text-2xl text-white mb-2 tracking-wide">
            {title}
          </h3>
          <p className="font-mono text-xs text-blue-400 mb-4 uppercase tracking-widest">
            //{subtitle}
          </p>

          <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
            {link ? (
              <a
                href={link}
                className="font-body text-sm md:text-base text-zinc-300 hover:text-white transition-colors truncate"
              >
                {content}
              </a>
            ) : (
              <p className="font-body text-sm md:text-base text-zinc-300">{content}</p>
            )}

            <button
              onClick={handleCopy}
              className="p-2 rounded-lg hover:bg-white/10 text-zinc-500 hover:text-white transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Decoder Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </motion.div>
  );
}

function TechInput({ type = "text", name, placeholder, value, onChange, required, rows }: any) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      <div className={`absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-lg transition-opacity duration-300 ${isFocused ? 'opacity-100 blur-[2px]' : 'opacity-0'}`} />

      {rows ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="relative w-full bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-transparent transition-all font-mono text-sm resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="relative w-full bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-transparent transition-all font-mono text-sm"
        />
      )}

      {/* Decorative Corner Markers */}
      <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50 rounded-tr-sm transition-opacity ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50 rounded-bl-sm transition-opacity ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
}



function TechSelect({ options, value, onChange, placeholder }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find((opt: any) => opt.value === value)?.label || placeholder;

  return (
    <div ref={containerRef} className="relative group">
      <div className={`absolute -inset-[1px] bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-lg transition-opacity duration-300 ${isOpen ? 'opacity-100 blur-[2px]' : 'opacity-0'}`} />

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full flex items-center justify-between bg-zinc-900/80 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none transition-all font-mono text-sm"
      >
        <span className={value ? "text-white" : "text-zinc-500"}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 top-[calc(100%+8px)] left-0 w-full bg-zinc-900 border border-white/10 rounded-lg overflow-hidden shadow-xl"
          >
            {options.map((option: any) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm font-mono text-zinc-300 hover:bg-white/5 hover:text-primary transition-colors border-b border-white/5 last:border-0"
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Corner Markers */}
      <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50 rounded-tr-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50 rounded-bl-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
    setFormData({ name: '', email: '', query: 'general', message: '' });
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const queryOptions = [
    { value: 'general', label: 'CHANNEL: GENERAL INQUIRY' },
    { value: 'tech', label: 'CHANNEL: TECHNICAL SUPPORT' },
    { value: 'sponsor', label: 'CHANNEL: SPONSORSHIP' }
  ];

  return (
    <div className="relative mt-4">
      {/* Terminal Frame */}
      <div className="absolute -inset-6 border border-white/10 rounded-2xl bg-black/50 backdrop-blur-sm -z-10" />
      <div className="absolute -top-6 left-8 px-2 -translate-y-1/2 bg-black text-[10px] tracking-widest text-primary font-mono uppercase">
        System.Link.Establish
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TechInput
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TechInput
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <TechSelect
          options={queryOptions}
          value={formData.query}
          onChange={(val: string) => setFormData({ ...formData, query: val })}
          placeholder="SELECT CHANNEL"
        />

        <TechInput
          name="message"
          placeholder="TRANSMISSION // MESSAGE_DATA..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative w-full group overflow-hidden rounded-lg bg-zinc-900/80 border border-primary/30 p-4 transition-all hover:bg-primary/20 hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="relative z-10 flex items-center justify-center gap-3 font-heading text-lg tracking-wider text-primary group-hover:text-white transition-colors">
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" />
                <span>PROCESSING...</span>
              </>
            ) : success ? (
              <>
                <Check className="w-5 h-5" />
                <span>DATA SENT</span>
              </>
            ) : (
              <>
                <span>INITIATE TRANSMISSION</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </div>
          {/* Progress Bar Animation */}
          {isSubmitting && (
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
              className="absolute bottom-0 left-0 h-1 bg-primary"
            />
          )}
        </button>
      </form>
    </div>
  );
}

// --- Main Layout Components ---

function ContactMobile() {
  const contactData = [
    { icon: MapPin, title: "Based In", subtitle: "Coordinates", content: "SIT Nagpur, MH, IN" },
    { icon: Mail, title: "Email", subtitle: "Direct Link", content: "src.sit@sitnagpur.siu.edu.in", link: "mailto:src.sit@sitnagpur.siu.edu.in" },
    { icon: Phone, title: "Phone", subtitle: "Voice Channel", content: "+91 XXXXXXXXXX", link: "tel:+91XXXXXXXXXX" },
    { icon: Handshake, title: "Partner", subtitle: "Alliance", content: "partnerships@sitnovate.com", link: "mailto:partnerships@sitnovate.com" }
  ];

  return (
    <section className="relative min-h-screen bg-black pt-24 pb-16 px-4 overflow-x-hidden">
      {/* Mobile Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto space-y-12">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-2"
          >
            ● SYSTEM_ONLINE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl text-white tracking-tight"
          >
            CONTACT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 font-mono text-sm max-w-xs mx-auto"
          >
            Establish connection with the mainframe.
            We are listening.
          </motion.p>
        </div>

        <div className="grid gap-4">
          {contactData.map((data, i) => (
            <ContactCard key={i} {...data} delay={i * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

        {/* Socials Mobile */}
        <div className="flex justify-center gap-6 py-8 border-t border-white/5">
          {[
            { Icon: Instagram, href: "#" },
            { Icon: Linkedin, href: "#" },
            { Icon: Twitter, href: "#" },
            { Icon: Youtube, href: "#" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-primary hover:bg-white/10 transition-all active:scale-95"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactDesktop() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const contactData = [
    { icon: MapPin, title: "Headquarters", subtitle: "Physical_Layer", content: "SIT Nagpur, Maharashtra, India" },
    { icon: Mail, title: "Communication", subtitle: "Electronic_Mail", content: "src.sit@sitnagpur.siu.edu.in", link: "mailto:src.sit@sitnagpur.siu.edu.in" },
    { icon: Phone, title: "Voice Line", subtitle: "Audio_Frequency", content: "+91 XXXXXXXXXX", link: "tel:+91XXXXXXXXXX" },
    { icon: Handshake, title: "Protocol", subtitle: "Sponsorship_Link", content: "partnerships@sitnovate.com", link: "mailto:partnerships@sitnovate.com" }
  ];

  return (
    <section className="relative min-h-screen bg-black pt-32 pb-20 px-8 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Info & Context */}
          <div className="lg:col-span-5 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-primary/50" />
                <span className="font-mono text-primary text-sm tracking-[0.2em] uppercase">Transmission</span>
              </div>

              <h1 className="font-heading text-7xl md:text-8xl text-white mb-6 leading-[0.9]">
                <GlitchText text="CONTACT" />
                <br />
                <span className="text-stroke-1 text-transparent">US</span>
              </h1>

              <p className="text-xl text-zinc-400 max-w-md leading-relaxed">
                Initiate a connection sequence. Whether you seek alliance, knowledge, or sponsorship, our channels are open.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {contactData.map((data, i) => (
                <ContactCard key={i} {...data} delay={0.2 + i * 0.1} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {[
                { Icon: Instagram, label: "INSTAGRAM" },
                { Icon: Twitter, label: "TWITTER" },
                { Icon: Linkedin, label: "LINKEDIN" },
                { Icon: Youtube, label: "YOUTUBE" },
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  className="group relative flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full overflow-hidden hover:border-primary/50 transition-colors"
                  title={label}
                >
                  <Icon className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors z-10" />
                  <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Form Interface */}
          <div className="lg:col-span-7 lg:pt-20">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Decorative elements behind form */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

              <ContactForm />

              <div className="mt-8 flex items-center justify-between text-zinc-500 font-mono text-xs">
                <span>// ENCRYPTION: AES-256</span>
                <span>// LATENCY: 12ms</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  const { isMobile } = useBreakpoint();

  return (
    <>
      <SEO
        title="Contact Us - SITNovate 2026"
        description="Establish connection with SITNovate. Channels open for registration, sponsorship, and inquiries."
        url="https://sitnovate.vercel.app/contact"
      />
      <div className="flex min-h-svh flex-col bg-black selection:bg-primary/30 selection:text-white">
        {!isMobile && <NavBar />}
        {isMobile && <Sidebar />}

        {isMobile && (
          <ProgressiveBlur
            direction="top"
            className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
            blurIntensity={1}
          />
        )}

        <main className="w-full">
          {isMobile ? <ContactMobile /> : <ContactDesktop />}
        </main>

        <Footer />
      </div>
    </>
  );
}