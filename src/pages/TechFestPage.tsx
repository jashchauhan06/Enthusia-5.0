import React from "react";
import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { Variants } from "framer-motion";

// --- DATA ---
const techEvents = [
  {
    id: 'sitnovate',
    title: 'SITNovate 2.0',
    subtitle: 'Flagship Hackathon',
    description: '24-Hour intense coding sprint. Build the future.',
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
    description: 'Algorithmic warfare. Speed & logic.',
    icon: '💻',
    color: 'from-emerald-500',
    accent: 'emerald',
    route: '/events/codesprint',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'strangertech',
    title: 'Stranger Tech',
    subtitle: 'Treasure Hunt',
    description: 'Decode clues. Race through the campus.',
    icon: '🧩',
    color: 'from-purple-500',
    accent: 'purple',
    route: '/events/strangertech',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'sitank',
    title: 'SITank 2.0',
    subtitle: 'Pitch Deck',
    description: 'Sell your idea to the sharks.',
    icon: '🎙️',
    color: 'from-orange-500',
    accent: 'orange',
    route: '/events/sitank',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'buildbrand',
    title: 'BuildBrand',
    subtitle: 'Ad Campaign',
    description: 'Creative strategy & design challenge.',
    icon: '🎨',
    color: 'from-rose-500',
    accent: 'rose',
    route: '/events/buildbrand',
    span: 'md:col-span-1 md:row-span-1'
  }
];

// --- VARIANTS FOR GUARANTEED VISIBILITY ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 70, damping: 15, mass: 0.8 }
  },
};

// --- NEW COMPONENT: MOBILE REACTOR ANIMATION ---
const CyberReactor = () => {
    return (
        <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Glow Background */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-[40px] rounded-full opacity-60" />

            <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Outer Ring (Static) */}
                <circle cx="100" cy="100" r="90" stroke="#333" strokeWidth="2" fill="none" opacity="0.5" />
                
                {/* Rotating Tech Ring */}
                <motion.circle 
                    cx="100" cy="100" r="85" 
                    stroke="#06b6d4" // Cyan
                    strokeWidth="2" 
                    fill="none" 
                    strokeDasharray="10 20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "50%", originY: "50%" }}
                />

                {/* Counter-Rotating Inner Ring */}
                <motion.circle 
                    cx="100" cy="100" r="60" 
                    stroke="#3b82f6" // Blue
                    strokeWidth="4" 
                    fill="none" 
                    strokeDasharray="40 100"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "50%", originY: "50%" }}
                />

                {/* Pulsing Core */}
                <motion.circle 
                    cx="100" cy="100" r="30" 
                    fill="#06b6d4" 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ originX: "50%", originY: "50%" }}
                />
                
                {/* Solid Core Dot */}
                <circle cx="100" cy="100" r="10" fill="white" />
            </svg>
        </div>
    );
};


// --- DESKTOP COMPONENTS (Unchanged) ---
const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <motion.div 
      animate={{ opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full"
    />
  </div>
);

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
      className={`group relative border border-white/10 bg-black/40 overflow-hidden rounded-3xl ${event.span} flex flex-col justify-between cursor-pointer`}
      onMouseMove={handleMouseMove}
      onClick={() => window.location.href = event.route}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(var(--${event.accent}-500-rgb), 0.15), transparent 80%)`,
        }}
      />
      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} to-transparent bg-opacity-10 flex items-center justify-center text-2xl mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
          {event.icon}
        </div>
        <div>
           <h3 className="font-heading text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
          <p className={`font-mono text-sm uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${event.color} to-white mb-4`}>{event.subtitle}</p>
          <p className="font-body text-zinc-400 text-sm leading-relaxed max-w-sm">{event.description}</p>
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors">
          <span>Enter Arena</span>
          <motion.span className="inline-block" transition={{ type: "spring", stiffness: 400 }} animate={{ x: 0 }} whileHover={{ x: 5 }}>→</motion.span>
        </div>
      </div>
      <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${event.color} to-transparent opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-500`} />
    </motion.div>
  );
};

// --- DESKTOP LAYOUT ---
function TechFest() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [0, -1000]);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden pb-32">
      <BackgroundGrid />
      <div className="max-w-[1400px] mx-auto px-6 pt-32 relative z-10">
        <div className="relative mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="font-heading text-[10vw] leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mix-blend-overlay"
          >
            TECH<br/>FEST
          </motion.h1>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="absolute top-1/2 right-0 md:right-10 max-w-md text-right hidden md:block">
            <p className="font-mono text-primary mb-2">/// ENTHUSIA 5.0 SYSTEM ACTIVE</p>
            <p className="text-zinc-400 text-lg">Five arenas. High-intensity challenges.<br />Are you a player or an NPC?</p>
          </motion.div>
          <motion.div style={{ x: textX }} className="absolute -top-20 left-0 whitespace-nowrap opacity-10 pointer-events-none select-none">
             <span className="text-[200px] font-heading font-bold text-stroke">INNOVATE • CREATE • DOMINATE • </span>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="md:col-span-1 flex flex-col justify-end p-6">
              <h2 className="font-heading text-4xl text-white mb-4">SELECT<br/>MODE</h2>
              <p className="text-zinc-500">Choose your battlefield. Click a card to register.</p>
           </motion.div>
           {techEvents.map((event) => (<EventCard key={event.id} event={event} />))}
        </div>
        <motion.div style={{ y }} className="mt-32 flex justify-center">
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


// --------------------------------------------------------
// --- MOBILE CREATIVE COMPONENTS ---
// --------------------------------------------------------

const CircuitLine = () => {
    return (
        <div className="absolute left-[29px] top-0 bottom-0 w-0.5 bg-zinc-800 overflow-hidden z-0">
            <motion.div 
                animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-primary to-transparent"
            />
        </div>
    )
}

const MobileHoloCard = ({ event }: { event: any }) => {
    return (
        <motion.div
            variants={cardVariants}
            whileTap={{ scale: 0.96 }}
            className="relative pl-12 mb-8" 
            onClick={() => window.location.href = event.route}
        >
            <div className={`absolute left-[24px] top-8 w-3 h-3 rounded-full bg-black border-2 border-zinc-600 z-10 shadow-[0_0_10px_rgba(0,0,0,1)]`}>
                <div className={`w-full h-full rounded-full bg-${event.accent}-500 opacity-0 animate-ping`} />
                <div className={`absolute inset-0 rounded-full bg-white opacity-20`} />
            </div>
            <div className="absolute left-[29px] top-[38px] w-8 h-[1px] bg-zinc-700" />
            <div className="relative overflow-hidden rounded-xl bg-black/60 border border-zinc-800 backdrop-blur-md">
                <motion.div 
                    animate={{ left: ["-100%", "200%"] }}
                    transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-20 pointer-events-none"
                />
                <div className="p-5 relative z-10">
                    <div className="flex justify-between items-start mb-3">
                        <div className={`p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-2xl`}>{event.icon}</div>
                        <div className={`px-2 py-1 rounded bg-zinc-900/80 border border-zinc-800`}>
                            <span className={`text-[10px] font-mono uppercase text-${event.accent}-400`}>// {event.id}</span>
                        </div>
                    </div>
                    <h3 className="font-heading text-xl text-white mb-1">{event.title}</h3>
                    <p className={`text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${event.color} to-white mb-2`}>{event.subtitle}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed">{event.description}</p>
                </div>
                <div className="h-1 w-full bg-zinc-900 mt-2 flex">
                    <div className={`h-full bg-gradient-to-r ${event.color} w-2/3 opacity-50`} />
                    <div className="h-full bg-transparent w-1/3" />
                </div>
            </div>
        </motion.div>
    )
}

function TechFestMobile() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-x-hidden pb-20">
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff000a_1px,transparent_1px),linear-gradient(to_bottom,#00ff000a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      <div className="fixed inset-0 bg-gradient-to-b from-black via-transparent to-black z-0 pointer-events-none" />

      <div className="relative z-10 px-4 pt-24">
        
        {/* NEW HEADER SECTION WITH ANIMATION */}
        <div className="flex items-center justify-between mb-12 relative z-10">
            {/* Left Side: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="ml-10"
            >
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-[10px] text-green-500">SYSTEM ONLINE</span>
                </div>
                <h1 className="font-heading text-5xl text-white mb-2 tracking-tighter leading-none">
                    TECH<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">FEST</span>
                </h1>
                <p className="font-mono text-xs text-zinc-500 tracking-widest max-w-[180px]">
                    SELECT YOUR CHALLENGE. <br/> INITIATE PROTOCOL.
                </p>
            </motion.div>

            {/* Right Side: The Mobile Reactor Animation */}
            <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
                <CyberReactor />
            </motion.div>
        </div>

        {/* THE CIRCUIT LAYOUT */}
        <div className="relative min-h-[600px]">
            <CircuitLine />
            <motion.div 
                className="relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {techEvents.map((event) => (
                    <MobileHoloCard key={event.id} event={event} />
                ))}
            </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8 relative z-20"
        >
           <button className="w-full group relative overflow-hidden rounded-xl bg-white text-black py-4 font-heading text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <span className="relative z-10 group-active:scale-95 transition-transform block">ENTER SYSTEM</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
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