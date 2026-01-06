import { useState, useEffect } from "react";
import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router";
import { CastleIcon, TrophyIcon, WiFiIcon, LightningIcon, FoodIcon, RestIcon, MoneyIcon, MentorIcon, SwagIcon, CertificateIcon } from "@/components/facilities-icons";

// --- 1. UTILITIES ---

const SmartImage = ({ src, alt, className, fit = "cover" }: { src: string, alt: string, className?: string, fit?: "cover" | "contain" }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#0a0f18] ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-slate-900 animate-pulse z-10" />
      )}
      <img
        src={error ? `https://placehold.co/600x400/0f172a/cbd5e1?text=${encodeURIComponent(alt)}` : src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full transition-all duration-700 ${
            fit === "contain" ? "object-contain p-2" : "object-cover"
        } ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        loading="lazy"
      />
      <div className="absolute inset-0 border border-white/5 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};

// --- 2. DATA ---
const HIGHLIGHTS_DATA = [
  { index: 1, ext: 'JPG', name: 'Opening Ceremony' }, 
  { index: 2, ext: 'JPG', name: 'Team Formation' }, 
  { index: 3, ext: 'jpg', name: 'Coding Marathon' },
  { index: 4, ext: 'jpg', name: 'Mentorship Sessions' }, 
  { index: 5, ext: 'png', name: 'Final Presentations' }, 
  { index: 6, ext: 'png', name: 'Award Ceremony' },
  { index: 'Jash', ext: 'jpg', name: 'Team Member - Jash' },
  { index: 'Parth Choudhari', ext: 'jpg', name: 'Team Member - Parth' },
  { index: 'Sunidhi', ext: 'jpg', name: 'Team Member - Sunidhi' }
];
const SPONSORS_DATA = [
  { name: "Pizza Hut", logo: "pizzahut.png", category: "Food Partner", color: "text-red-400" },
  { name: "MIA by Tanishq", logo: "MIA.png", category: "Jewelry Partner", color: "text-pink-400" },
  { name: "Insterra", logo: "Insterra.webp", category: "Tech Partner", color: "text-blue-400" },
  { name: "PB Creation", logo: "PB.png", category: "Creative Partner", color: "text-purple-400" },
  { name: "Devfolio", logo: "dev.png", category: "Platform Partner", color: "text-indigo-400" },
  { name: "ETH India", logo: "eth.png", category: "Blockchain Partner", color: "text-slate-400" },
  { name: "Polygon", logo: "poly.png", category: "Web3 Partner", color: "text-violet-400" },
  { name: "Unstop", logo: "un.png", category: "Hiring Partner", color: "text-cyan-400" },
];
const FACULTY_DATA = [
  { name: "Sunidhi Haware", role: "President", dept: "Student Representative Council", photo: "Sunidhi.jpg" },
  { name: "Prathmesh Raipurkar", role: "Vice President", dept: "Student Representative Council", photo: null },
  { name: "Parth Choudhari", role: "Lead", dept: "Event Managment", photo: "Parth Choudhari.jpg" },
  { name: "Jash Chauhan", role: "Web Development Team", dept: "Technical Team", photo: "Jash.jpg" }
];
const STUDENT_DATA = [
  { name: "Arjun Mehta", role: "Event Lead", house: "Gryffindor", color: "from-red-900 to-red-950" },
  { name: "Sneha Gupta", role: "Tech Lead", house: "Ravenclaw", color: "from-blue-900 to-blue-950" },
  { name: "Rohit Singh", role: "Logistics", house: "Hufflepuff", color: "from-yellow-900 to-yellow-950" },
  { name: "Kavya Reddy", role: "Marketing", house: "Slytherin", color: "from-green-900 to-green-950" },
  { name: "Vikram Joshi", role: "Sponsorship", house: "Slytherin", color: "from-green-900 to-green-950" },
  { name: "Ananya Das", role: "Design", house: "Ravenclaw", color: "from-blue-900 to-blue-950" },
  { name: "Karan Sharma", role: "Registration", house: "Gryffindor", color: "from-red-900 to-red-950" },
  { name: "Pooja Agarwal", role: "Hospitality", house: "Hufflepuff", color: "from-yellow-900 to-yellow-950" }
];

// --- 3. ANIMATION VARIANTS ---

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
};
const fadeDownVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.4, duration: 1.2 } }
};

// --- 4. MAGICAL COMPONENTS ---

const WandCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
    >
      <img 
        src="/Black Magic Wand & Magic Ball 3D--cursor--SweezyCursors.png" 
        alt="Magic Wand Cursor"
        className="w-8 h-8 drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))' }}
      />
    </motion.div>
  );
};

const FloatingCandles = ({ count = 15 }) => (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {[...Array(count)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1.5 h-10 bg-gradient-to-b from-amber-100/20 to-transparent"
                style={{ 
                    left: `${Math.random() * 100}%`, 
                    top: `${Math.random() * 60}%` 
                }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: Math.random() * 3 + 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2.5 bg-amber-400 rounded-full blur-[3px] animate-pulse"></div>
            </motion.div>
        ))}
    </div>
);

const MobileLiveBackground = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Floating Runes */}
        {[...Array(10)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute text-amber-500/10 font-mono text-xl"
                style={{ left: `${Math.random() * 100}%`, top: `100%` }}
                animate={{ y: "-120vh", rotate: 360, opacity: [0, 0.5, 0] }}
                transition={{ 
                    duration: Math.random() * 20 + 20, 
                    repeat: Infinity, 
                    delay: Math.random() * 20,
                    ease: "linear"
                }}
            >
                {["⚡", "✨", "☾", "△"][i % 4]}
            </motion.div>
        ))}
        {/* Glowing Orbs */}
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i + 10}
                className="absolute w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"
                style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, delay: i * 2 }}
            />
        ))}
    </div>
);

// --- 5. DESKTOP COMPONENT (Maintained for reference, condensed) ---
function SITNovateDesktop() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative w-full text-slate-200 font-serif selection:bg-amber-500/30 overflow-hidden bg-[#020617] cursor-none">
      <WandCursor />
      {/* Hero */}
      <div className="relative min-h-[95vh] flex items-center overflow-hidden">
           {/* Hogwarts Background Image */}
           <div 
               className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
               style={{ 
                   backgroundImage: 'url(/images/hogwarts_legacy___ever_edition_4k_wallpaper_by_aksensei_dg29l08.png)',
               }}
           />
           
           {/* Dark overlay for better text readability */}
           <div className="absolute inset-0 bg-black/40 z-10"></div>
           
           {/* Magical gradient overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-purple-900/30 z-10"></div>
           
           {/* Stardust texture overlay */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 z-10"></div>
           
           {/* Bottom gradient fade */}
           <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#020617] to-transparent z-20"></div>
           
           <FloatingCandles count={20} />

           <div className="max-w-[1400px] w-full mx-auto px-8 relative z-30 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
               <motion.div className="lg:col-span-3 text-left relative" style={{ y: textY }}>
                   <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring" }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-amber-500/50 bg-black/60 backdrop-blur-md mb-8 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]"></span>
                      <span className="text-amber-100 text-xs font-sans tracking-[0.25em] uppercase font-bold">Registration Open</span>
                   </motion.div>
                   <h1 className="text-[14vh] leading-[0.85] font-sans font-bold mb-4 tracking-tighter relative">
                       {/* Main white text with strong black outline */}
                       <span className="relative text-white drop-shadow-[0_0_20px_rgba(0,0,0,1)] [text-shadow:0_0_20px_rgba(0,0,0,1),-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000]">SITNovate 2.0</span>
                   </h1>
                   <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-3xl text-amber-300 font-serif italic tracking-wide mb-10 pl-2 drop-shadow-lg [text-shadow:2px_2px_6px_rgba(0,0,0,0.9)] bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg border border-amber-500/30">"24-Hour Innovation Challenge"</motion.p>
                   <div className="flex flex-wrap gap-6 mb-16">
                       <button className="group relative px-8 py-4 bg-black/40 backdrop-blur-md overflow-hidden rounded-lg border-2 border-amber-600/60 text-amber-100 font-sans font-bold tracking-widest hover:text-white transition-colors hover:shadow-[0_0_40px_rgba(217,119,6,0.6)] shadow-lg cursor-none">
                          <span className="relative z-10">REGISTER NOW</span>
                          <div className="absolute inset-0 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                       </button>
                   </div>
               </motion.div>
               <motion.div className="lg:col-span-2 flex justify-center lg:justify-end relative" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, type: "spring" }}>
                   {/* Hero visual space - removed character */}
               </motion.div>
           </div>
      </div>

      <div className="relative z-20 bg-[#020617]">
      <div className="max-w-[1400px] mx-auto px-8 pb-40">
        {/* ABOUT (Fade Up) */}
        <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="mb-48 pt-20">
            <div className="relative bg-[#0a0f18] border border-slate-800 p-12 lg:p-16 rounded-[3rem] shadow-[0_0_100px_rgba(30,58,138,0.1)] overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <h2 className="text-5xl font-serif text-white mb-8 flex items-center gap-4"><span className="text-amber-500 text-6xl drop-shadow-md">⚡</span> About SITNovate</h2>
                        <p className="text-xl text-slate-300 leading-relaxed font-sans mb-8"><strong className="text-blue-400">SITNovate</strong> is the flagship 24-hour hackathon organized by Symbiosis Institute of Technology, Nagpur. This premier innovation event brings together the brightest minds in technology to collaborate, compete, and create groundbreaking solutions that address real-world challenges.</p>
                        <p className="text-lg text-slate-300 leading-relaxed font-sans mb-8">Over the course of 24 intensive hours, participants work with cutting-edge technologies including AI/ML, blockchain, IoT, and web development frameworks. The hackathon features expert mentorship from industry leaders, comprehensive technical support, and access to state-of-the-art development resources.</p>
                        <p className="text-lg text-slate-300 leading-relaxed font-sans mb-8">With 49 participating teams, 800+ participants, and a prize pool of around 1 Lakh, SITNovate has established itself as a catalyst for technological innovation and entrepreneurship. The event not only showcases exceptional talent but also creates lasting connections between students, industry professionals, and tech enthusiasts.</p>
                        <div className="pl-6 border-l-4 border-amber-600"><p className="text-amber-200/90 italic font-serif text-lg">"Participants get the opportunity to work with cutting-edge technologies and transform their innovative ideas into reality through intensive collaboration and expert guidance."</p></div>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} className="relative h-[400px] rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 cursor-none">
                        <SmartImage src="/images/sitnovate/about.jpg" alt="About" fit="cover" className="grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </motion.div>
                </div>
            </div>
        </motion.div>

        {/* FACILITIES */}
        <div className="mb-48">
             <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" className="text-center mb-24">
                 <h2 className="text-6xl font-serif text-white mb-6">What We Provide</h2>
                 <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
             </motion.div>
             <div className="grid md:grid-cols-2 gap-12">
                 {[
                     { title: "Facilities", icon: <CastleIcon />, color: "from-blue-900/40 to-blue-950/40", borderColor: "border-blue-500/30", glowColor: "shadow-blue-500/20", items: [{t: "High-Speed WiFi", icon: <WiFiIcon />}, {t: "Charging Stations", icon: <LightningIcon />}, {t: "24/7 Food", icon: <FoodIcon />}, {t: "Rest Zones", icon: <RestIcon />}] },
                     { title: "Treasures", icon: <TrophyIcon />, color: "from-amber-900/40 to-amber-950/40", borderColor: "border-amber-500/30", glowColor: "shadow-amber-500/20", items: [{t: "Cash Prizes", icon: <MoneyIcon />}, {t: "Mentorship", icon: <MentorIcon />}, {t: "Cool Swag", icon: <SwagIcon />}, {t: "Certificates", icon: <CertificateIcon />}] }
                 ].map((card, idx) => (
                     <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ delay: idx * 0.2 }} 
                        whileHover={{ y: -10, scale: 1.02 }} 
                        className={`relative bg-gradient-to-br ${card.color} backdrop-blur-sm border-2 ${card.borderColor} p-12 rounded-[2rem] transition-all duration-500 group overflow-hidden ${card.glowColor} hover:shadow-2xl cursor-none`}
                     >
                         {/* Magical background pattern */}
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
                         
                         {/* Glowing orb effect */}
                         <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${card.color} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700`}></div>
                         
                         {/* Header with icon */}
                         <div className="relative z-10 mb-10 flex items-center gap-4 pb-6 border-b-2 border-white/10">
                             <div className="relative text-blue-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                                 {typeof card.icon === 'string' ? <span className="text-5xl">{card.icon}</span> : card.icon}
                             </div>
                             <h3 className="text-4xl font-serif text-amber-100 drop-shadow-md">{card.title}</h3>
                         </div>
                         
                         {/* Items grid */}
                         <div className="relative z-10 grid grid-cols-2 gap-6">
                             {card.items.map((item, i) => (
                                 <motion.div 
                                    key={i} 
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-black/20 border border-white/5 backdrop-blur-sm group/item hover:bg-black/30 transition-all duration-300 cursor-none"
                                 >
                                     <div className="group-hover/item:scale-125 transition-transform duration-300">
                                         {(item as any).icon || <span className="text-2xl">{(item as any).i}</span>}
                                     </div>
                                     <span className="font-sans text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors">{item.t}</span>
                                 </motion.div>
                             ))}
                         </div>
                         
                         {/* Corner magical sparkles */}
                         <motion.div 
                            className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full blur-sm"
                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: idx * 1.5 }}
                         />
                         <motion.div 
                            className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full blur-sm"
                            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: idx * 1.5 + 1 }}
                         />
                     </motion.div>
                 ))}
             </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mb-48">
            <motion.div variants={fadeUpVariant} initial="hidden" whileInView="visible" className="text-center mb-20">
                 <h2 className="text-6xl font-serif text-white mb-4">Event Highlights</h2>
             </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {HIGHLIGHTS_DATA.map((img, idx) => (
                    <motion.div key={img.index} initial={{ opacity: 0, x: (idx % 2 === 0 ? -50 : 50), y: 50, rotate: (idx % 2 === 0 ? -5 : 5) }} whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 50, delay: idx * 0.1 }} whileHover={{ scale: 1.05, zIndex: 10 }} className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-800 bg-[#0a0f18] group cursor-none shadow-lg">
                        <SmartImage src={`/images/sitnovate/${img.index}.${img.ext}`} alt={`Highlight ${img.index}`} fit="cover" className="opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"><span className="text-xs font-medium text-cyan-400">{img.name}</span></div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* SPONSORS (Fade Down) */}
        <div className="mb-48">
            <div className="text-center mb-20">
                <h2 className="text-6xl font-serif text-white mb-4 drop-shadow-lg">Past Sponsors</h2>
                <p className="text-slate-300 text-lg mb-8">Thank you to our amazing sponsors who made SITNovate possible</p>
            </div>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                 {SPONSORS_DATA.map((sp, i) => (
                     <div key={i} className="flex flex-col items-center group">
                         <div className="h-10 w-[1px] bg-slate-700 mb-[-2px] origin-top group-hover:scale-y-110 transition-transform"></div>
                         <motion.div variants={fadeDownVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ rotateX: 15, rotateY: 5 }} className="w-full bg-[#1e293b] border border-slate-700 p-4 rounded-xl shadow-lg relative overflow-hidden flex flex-col items-center justify-center z-10 cursor-none">
                             <div className="w-full h-24 mb-4 bg-black/20 rounded-lg p-3 flex items-center justify-center"><img src={`/images/sponsors/${sp.logo}`} alt={sp.name} className="w-full h-full object-contain filter drop-shadow-md" loading="lazy" /></div>
                             <h4 className="text-white font-bold font-sans text-xs text-center">{sp.name}</h4>
                             <p className={`text-[10px] uppercase tracking-widest mt-1 font-bold text-center ${sp.color}`}>{sp.category}</p>
                         </motion.div>
                     </div>
                 ))}
             </div>
             
             {/* Sponsorship CTA Button - Magical Scroll Style */}
             <div className="text-center mt-16">
                <motion.button 
                    whileHover={{ scale: 1.05, y: -5 }} 
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#1a1612] via-[#2d2416] to-[#1a1612] text-amber-100 font-serif font-bold px-10 py-5 rounded-lg border-2 border-amber-600/60 shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:shadow-[0_0_50px_rgba(217,119,6,0.5)] transition-all duration-500 overflow-hidden cursor-none"
                    onClick={() => window.open('mailto:src.sit@sitnagpur.siu.edu.in?subject=Sponsorship Inquiry for SITNovate 2026&body=Hello,%0D%0A%0D%0AI am interested in sponsoring SITNovate 2026. Please provide more information about sponsorship opportunities.%0D%0A%0D%0AThank you!', '_blank')}
                >
                    {/* Parchment texture overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-map.png')] opacity-20 pointer-events-none"></div>
                    
                    {/* Magical glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Wax seal icon */}
                    <div className="relative z-10 w-8 h-8 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <div className="absolute inset-0 bg-amber-600 rounded-full blur-sm opacity-60"></div>
                        <div className="relative w-7 h-7 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full border-2 border-amber-400/50 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.6)]">
                            <span className="text-xs font-serif font-bold text-amber-950">S</span>
                        </div>
                    </div>
                    
                    {/* Text with magical effect */}
                    <span className="relative z-10 tracking-wider text-lg group-hover:text-amber-50 transition-colors duration-300">
                        Become a Sponsor
                    </span>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-amber-500/50"></div>
                    <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-amber-500/50"></div>
                    <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-amber-500/50"></div>
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-amber-500/50"></div>
                    
                    {/* Sparkle effects */}
                    <motion.div 
                        className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full blur-sm"
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div 
                        className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-400 rounded-full blur-sm"
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                </motion.button>
             </div>
        </div>

        {/* TEAM */}
        <div className="mb-48">
            <div className="text-center mb-20"><h2 className="text-6xl font-serif text-white mb-4 drop-shadow-lg">Our Team</h2></div>
             
             {/* Team Cards - Only 4 cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-6xl mx-auto">
                 {FACULTY_DATA.slice(0, 4).map((f, i) => (
                     <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        whileHover={{ y: -10, scale: 1.02 }} 
                        className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-amber-500/30 rounded-2xl p-6 text-center shadow-2xl hover:border-amber-400/60 hover:shadow-[0_0_40px_rgba(251,191,36,0.2)] transition-all duration-500 group cursor-none"
                     >
                         {/* Profile Image */}
                         <div className="relative mb-6">
                             <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-amber-500/50 group-hover:border-amber-400 transition-colors shadow-[0_0_20px_rgba(251,191,36,0.15)]">
                                 {f.photo ? (
                                     <img 
                                         src={`/images/sitnovate/${f.photo}`}
                                         alt={f.name}
                                         className="w-full h-full object-cover"
                                     />
                                 ) : (
                                     <img 
                                         src={`https://ui-avatars.com/api/?name=${encodeURIComponent(f.name)}&size=96&background=1e293b&color=fbbf24&bold=true&format=png`}
                                         alt={f.name}
                                         className="w-full h-full object-cover"
                                     />
                                 )}
                             </div>
                             {/* Magical glow effect */}
                             <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                         </div>
                         
                         <h3 className="text-lg font-serif text-white mb-2 group-hover:text-amber-100 transition-colors">{f.name}</h3>
                         <p className="text-amber-400 text-sm font-sans font-bold uppercase tracking-wider mb-3">{f.role}</p>
                         <p className="text-slate-400 text-xs">{f.dept}</p>
                         
                         {/* Decorative elements */}
                         <div className="flex justify-center gap-1 mt-4">
                             <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></div>
                             <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30"></div>
                             <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></div>
                         </div>
                     </motion.div>
                 ))}
             </div>
        </div>

        <div className="text-center relative py-20 border-t border-slate-800/50">
             <h2 className="text-6xl font-serif text-white mb-10 drop-shadow-lg">Ready to Innovate?</h2>
             <button onClick={() => navigate('/contact')} className="relative px-12 py-5 bg-transparent border-2 border-amber-500 text-amber-500 font-sans font-bold tracking-widest rounded-full overflow-hidden group hover:text-black transition-colors cursor-none">
                <span className="relative z-10">CONTACT US</span>
                <div className="absolute inset-0 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
             </button>
        </div>

      </div>
      </div>
    </section>
  );
}

// --- 5. MOBILE COMPONENT (Pocket Magic Edition) ---
function SITNovateMobile() {
    const navigate = useNavigate();
  return (
    <section className="relative min-h-screen text-slate-200 pt-24 pb-20 px-4 font-sans bg-[#020617] overflow-hidden">
        {/* Mobile Live Background */}
        <div className="absolute inset-0 bg-[#020617] z-0"></div>
        <MobileLiveBackground />
        <FloatingCandles count={10} />
        
        <div className="relative z-10">
            {/* Mobile Hero */}
            <div className="text-left mb-16 border-l-4 border-amber-500 pl-4 mt-8">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-2">Hogwarts Legacy</motion.div>
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-5xl font-serif text-white mb-2 drop-shadow-lg">SITNOVATE</motion.h1>
                <p className="text-slate-500 italic mt-2">24-Hour Innovation Challenge</p>
            </div>

            {/* Mobile About */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="mb-12 bg-[#1a1612] border border-amber-900/40 p-6 rounded-lg shadow-xl relative overflow-hidden"
            >
                {/* Parchment Texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] opacity-20 pointer-events-none"></div>
                <div className="relative z-10">
                    <h2 className="text-xl font-bold text-amber-100 mb-4 font-serif border-b border-amber-800 pb-2">The Prophecy</h2>
                    <p className="text-sm text-stone-300 leading-relaxed mb-6 font-serif">SITNovate is the flagship 24-hour hackathon organized by SIT Nagpur. Innovation meets competition.</p>
                    <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="bg-black/40 p-2 rounded border border-blue-900/30 text-blue-300 text-sm font-bold">Facilities</div>
                        <div className="bg-black/40 p-2 rounded border border-amber-900/30 text-amber-300 text-sm font-bold">Rewards</div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Highlights */}
            <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-6 font-serif pl-2 border-l-4 border-cyan-500">Memories</h2>
                <div className="grid grid-cols-2 gap-3">
                    {HIGHLIGHTS_DATA.slice(0, 4).map((img, i) => (
                        <motion.div key={img.index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="h-32 w-full rounded-lg overflow-hidden border border-slate-800 relative shadow-lg">
                            <SmartImage src={`/images/sitnovate/${img.index}.${img.ext}`} alt="Highlight" fit="cover" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile Sponsors - Levitating */}
            <div className="mb-12">
                <h2 className="text-xl font-bold text-white mb-6 font-serif pl-2 border-l-4 border-purple-500">Partners</h2>
                <div className="grid grid-cols-2 gap-3">
                    {SPONSORS_DATA.map((sp, i) => (
                        <motion.div 
                           key={i} 
                           animate={{ y: [0, -4, 0] }}
                           transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                           className="bg-[#0f172a] p-3 rounded text-center border border-slate-800 shadow-md shadow-blue-900/10"
                        >
                            <div className="h-12 w-full flex items-center justify-center mb-2 bg-white/5 rounded p-1">
                                <img src={`/images/sponsors/${sp.logo}`} alt={sp.name} className="w-full h-full object-contain" />
                            </div>
                            <p className="text-[10px] text-slate-400 font-bold">{sp.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile Team - Full Order of Code */}
            <div>
                <h2 className="text-xl font-bold text-white mb-6 font-serif pl-2 border-l-4 border-amber-500">The Order of Code</h2>
                
                {/* 1. Faculty (Headmasters) */}
                <div className="mb-6">
                    <h3 className="text-amber-500 text-sm font-bold uppercase mb-3 tracking-widest pl-1">Headmasters</h3>
                    <div className="space-y-3">
                        {FACULTY_DATA.map((f, i) => (
                            <motion.div 
                               key={i}
                               initial={{ x: -20, opacity: 0 }}
                               whileInView={{ x: 0, opacity: 1 }}
                               viewport={{ once: true }}
                               className="bg-[#0f172a] p-3 rounded-lg flex items-center gap-4 border border-slate-800 shadow-md"
                            >
                                <div className="w-10 h-10 rounded-full bg-amber-900/30 flex items-center justify-center text-amber-500 font-bold border border-amber-500/30">{f.name.charAt(4)}</div>
                                <div>
                                    <div className="text-sm font-bold text-slate-200">{f.name}</div>
                                    <div className="text-[10px] text-slate-500">{f.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Students (Prefects) */}
                <div>
                    <h3 className="text-blue-500 text-sm font-bold uppercase mb-3 tracking-widest pl-1">Prefects</h3>
                    <div className="space-y-3">
                        {STUDENT_DATA.map((s, i) => (
                            <motion.div 
                               key={i} 
                               initial={{ x: 20, opacity: 0 }}
                               whileInView={{ x: 0, opacity: 1 }}
                               viewport={{ once: true }}
                               className="bg-[#0f172a] p-3 rounded-lg flex justify-between items-center border border-slate-800 relative overflow-hidden shadow-md"
                            >
                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${s.color}`}></div>
                                <div className="text-sm font-bold text-slate-300 ml-3">{s.name}</div>
                                <div className="text-[10px] text-amber-600 uppercase font-bold tracking-wider">{s.house}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="mt-16 mb-12 text-center">
                <motion.button 
                   whileTap={{ scale: 0.95 }}
                   onClick={() => navigate('/contact')} 
                   className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg font-bold text-black shadow-lg shadow-amber-900/50 tracking-widest font-serif"
                >
                   SEND OWL
                </motion.button>
            </div>
        </div>
    </section>
  );
}

// --- 6. EXPORT ---
export function SITNovatePage() {
  const { isMobile } = useBreakpoint();

  return (
    <>
      <SEO title="SITNovate 2026" description="24-Hour Innovation Challenge" url="https://sitnovate.vercel.app" />
      <div className="flex min-h-svh flex-col bg-[#020617] text-white">
        {isMobile ? (
          <>
            <ProgressiveBlur direction="top" className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none" blurIntensity={1}/>
            <Sidebar />
            <SITNovateMobile />
            <Footer />
          </>
        ) : (
          <>
            <NavBar />
            <main className="w-full">
              <SITNovateDesktop />
              <Footer />
            </main>
          </>
        )}
      </div>
    </>
  );
}
