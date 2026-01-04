import React, { useRef } from "react";
import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";

// --- DATA ---
const techEvents = [
  {
    id: 'sitnovate',
    title: 'SITNovate 2.0',
    subtitle: '24-Hour Hackathon',
    description: 'The flagship event. Build innovative solutions in an intense 24-hour sprint.',
    icon: '⚡',
    color: 'from-blue-500',
    accent: 'blue',
    route: '/events/sitnovate',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'codesprint',
    title: 'CodeSprint 2.0',
    subtitle: 'Competitive Coding',
    description: 'Solve algorithmic problems. Logic, speed, and accuracy.',
    icon: '💻',
    color: 'from-emerald-500',
    accent: 'emerald',
    route: '/events/codesprint',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'strangertech',
    title: 'Stranger Tech',
    subtitle: 'Tech Treasure Hunt',
    description: 'Decode clues and race through tech-driven challenges.',
    icon: '🧩',
    color: 'from-purple-500',
    accent: 'purple',
    route: '/events/strangertech',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'sitank',
    title: 'SITank 2.0',
    subtitle: 'Pitch Competition',
    description: 'Pitch innovative ideas to an expert judging panel.',
    icon: '🎙️',
    color: 'from-orange-500',
    accent: 'orange',
    route: '/events/sitank',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'buildbrand',
    title: 'BuildBrand',
    subtitle: 'Ad Challenge',
    description: 'Design a strategic advertising campaign.',
    icon: '🎨',
    color: 'from-rose-500',
    accent: 'rose',
    route: '/events/buildbrand',
    span: 'md:col-span-1 md:row-span-1'
  }
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    },
};

// --- ANIMATED BACKGROUND COMPONENT ---
const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full"
      />
    </div>
  );
};

// --- SPOTLIGHT CARD COMPONENT (DESKTOP) ---
const EventCard = ({ event }: { event: any }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      className={`group relative border border-white/10 bg-black/40 overflow-hidden rounded-3xl ${event.span} flex flex-col justify-between`}
      onMouseMove={handleMouseMove}
      onClick={() => window.location.href = event.route}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--${event.accent}-500-rgb), 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Glow Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} to-transparent bg-opacity-10 flex items-center justify-center text-2xl mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
          {event.icon}
        </div>

        <div>
           <h3 className="font-heading text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <p className={`font-mono text-sm uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${event.color} to-white mb-4`}>
            {event.subtitle}
          </p>
          <p className="font-body text-zinc-400 text-sm leading-relaxed max-w-sm">
            {event.description}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors">
          <span>Enter Arena</span>
          <motion.span 
            className="inline-block"
            transition={{ type: "spring", stiffness: 400 }} 
            animate={{ x: 0 }} 
            whileHover={{ x: 5 }}
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Decorative Gradient Blob */}
      <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${event.color} to-transparent opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-500`} />
    </motion.div>
  );
};


// --- MAIN DESKTOP COMPONENT ---
function TechFest() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [0, -1000]);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden pb-32">
      <BackgroundGrid />
      
      <div className="max-w-[1400px] mx-auto px-6 pt-32 relative z-10">
        
        {/* HERO SECTION */}
        <div className="relative mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="font-heading text-[10vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mix-blend-overlay"
          >
            TECH<br/>FEST
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute top-1/2 right-0 md:right-10 max-w-md text-right hidden md:block"
          >
            <p className="font-mono text-primary mb-2">/// ENTHUSIA 5.0 SYSTEM ACTIVE</p>
            <p className="text-zinc-400 text-lg">
              Five arenas. High-intensity challenges.<br />
              Are you a player or an NPC?
            </p>
          </motion.div>

          {/* Scrolling Background Text */}
          <motion.div style={{ x: textX }} className="absolute -top-20 left-0 whitespace-nowrap opacity-10 pointer-events-none select-none">
             <span className="text-[200px] font-heading font-bold text-stroke">INNOVATE • CREATE • DOMINATE • </span>
          </motion.div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
           {/* Section Title inside Grid */}
           <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="md:col-span-1 flex flex-col justify-end p-6"
           >
              <h2 className="font-heading text-4xl text-white mb-4">SELECT<br/>MODE</h2>
              <p className="text-zinc-500">Choose your battlefield. Click a card to register.</p>
           </motion.div>

           {techEvents.map((event) => (
             <EventCard key={event.id} event={event} />
           ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div 
          style={{ y }}
          className="mt-32 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-12 py-6 bg-black ring-1 ring-white/10 rounded-full font-heading text-2xl tracking-wide text-white flex items-center gap-4 transition-transform active:scale-95">
              <span>INITIALIZE REGISTRATION</span>
              <span className="animate-pulse">_</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


// --- FIXED MOBILE COMPONENT ---
function TechFestMobile() {
  return (
    <section className="relative w-full min-h-screen bg-black px-4 py-24 overflow-x-hidden">
        {/* Simple fixed background for mobile performance */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-black to-black z-0 pointer-events-none" />
      
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-6xl text-white mb-2 tracking-tighter">TECH<br/><span className="text-primary">FEST</span></h1>
          <p className="font-mono text-xs text-zinc-500 tracking-[0.2em]">ENTHUSIA 5.0 PROTOCOL</p>
        </motion.div>

        {/* THE FIX: Use containerVariants to stagger children immediately on load */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
        >
          {techEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants} // Use item variants here
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = event.route}
              className={`relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 active:bg-zinc-800/80 transition-colors`}
            >
              <div className={`absolute top-0 right-0 p-4 opacity-20 text-4xl grayscale`}>{event.icon}</div>
              {/* Slimmer accent bar on mobile */}
              <div className={`w-0.5 h-full absolute left-0 top-0 bg-gradient-to-b ${event.color} to-transparent`} />
              
              <div className="pl-2">
                <h3 className="font-heading text-xl text-white mb-1">{event.title}</h3>
                <p className={`text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${event.color} to-white mb-2`}>{event.subtitle}</p>
                <p className="text-sm text-zinc-400 line-clamp-2">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }} // Adjusted bottom margin for better trigger
          transition={{ delay: 0.5 }}
          className="mt-16 text-center pb-8"
        >
           <button className="w-full py-4 bg-white text-black font-heading rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 transition-transform">
             REGISTER NOW
           </button>
        </motion.div>
      </div>
    </section>
  );
}

// --- MAIN PAGE EXPORT ---
export function TechFestPage() {
  const { isMobile } = useBreakpoint();

  return (
    <>
      <SEO
        title="TechFest - Enter the Glitch"
        description="High-intensity technical arena."
        url="https://sitnovate.vercel.app/techfest"
      />
      <motion.div className="flex min-h-svh flex-col bg-black text-white selection:bg-primary selection:text-black">
        {isMobile ? (
          <>
           <ProgressiveBlur direction="top" className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none" blurIntensity={1}/>
           <Sidebar />
           <TechFestMobile />
           <Footer />
          </>
        ) : (
          <>
            <NavBar />
            <main className="w-full">
              <TechFest />
              <Footer />
            </main>
          </>
        )}
      </motion.div>
    </>
  );
}