import React, { useState } from "react";
import { motion } from "framer-motion";

// --- UTILITIES ---

export const SmartImage = ({ src, alt, className, fit = "cover" }: { src: string, alt: string, className?: string, fit?: "cover" | "contain" }) => {
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden bg-[#1a1612] w-full h-full ${className || ''}`}>
            {!loaded && !error && (
                <div className="absolute inset-0 bg-[#2c241b] animate-pulse z-10" />
            )}
            {/* 90s TV Scanline Effect Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none mix-blend-overlay"></div>

            <img
                src={error ? `https://placehold.co/600x400/2c241b/d4b483?text=${encodeURIComponent(alt)}` : src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                className={`w-full h-full transition-all duration-700 sepia-[.3] contrast-125 hover:sepia-0 ${fit === "contain" ? "object-contain p-2" : "object-cover"
                    } ${loaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none z-10"></div>
        </div>
    );
};

// --- DATA ---
const HIGHLIGHTS_DATA = [
    { index: 1, ext: 'JPG' }, { index: 2, ext: 'JPG' }, { index: 3, ext: 'JPG' },
    { index: 4, ext: 'JPG' }, { index: 5, ext: 'JPG' }
];
export const MARQUEE_DATA = [...HIGHLIGHTS_DATA, ...HIGHLIGHTS_DATA];

export const SPONSORS_DATA = [
    { name: "Pizza Hut", logo: "pizzahut.png", category: "Food Partner", color: "text-red-400" },
    { name: "MIA by Tanishq", logo: "MIA.png", category: "Jewelry Partner", color: "text-pink-400" },
    { name: "Insterra", logo: "Insterra.webp", category: "Tech Partner", color: "text-blue-400" },
    { name: "PB Creation", logo: "PB.png", category: "Creative Partner", color: "text-purple-400" },
    { name: "Devfolio", logo: "dev.png", category: "Platform Partner", color: "text-indigo-400" },
    { name: "ETH India", logo: "eth.png", category: "Blockchain Partner", color: "text-slate-400" },
    { name: "Polygon", logo: "poly.png", category: "Web3 Partner", color: "text-violet-400" },
    { name: "Unstop", logo: "un.png", category: "Hiring Partner", color: "text-cyan-400" },
    { name: "UCN", logo: "R.png", category: "Media Partner", color: "text-orange-400" }
];
export const STUDENT_DATA = [
    { name: "Sunidhi Haware", role: "President (SRC)", alias: "TOKYO", image: "/codesprint-app/images/team/Sunidhi.jpg" },
    { name: "Prathmesh Raipurkar", role: "Vice President (SRC)", alias: "BERLIN", image: "/codesprint-app/images/team/Prathmesh.png" },
    { name: "SHLOK VIJ", role: "Event Coordinator", alias: "The Professor", image: "/codesprint-app/images/team/SHLOK.jpeg" },
    { name: "SHRUTI BAWANKAR", role: "Event Coordinator", alias: "Nairobi", image: "/codesprint-app/images/team/SHRUTI.jpg" },
    { name: "Jash Chauhan", role: "Web Development Team Lead", alias: "RIO", image: "/codesprint-app/images/team/Jash.jpg" },
    { name: "Soumya Mishra", role: "Developer", alias: "HELSINKI", image: "/codesprint-app/images/team/Soumya.png" },
];

// --- MONEY HEIST CREW CARD ---
export const CrewCard = ({ member, index }: { member: typeof STUDENT_DATA[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="group relative"
        >
            {/* Main Card with torn paper background */}
            <div 
                className="relative w-64 h-80 bg-cover bg-center bg-no-repeat p-4 pt-6 flex flex-col items-center"
                style={{ backgroundImage: "url('/codesprint-app/images/card_bg.png')" }}
            >
                {/* Bullet holes */}
                <div className="absolute top-8 right-4 w-3 h-3 bg-[#1a1a1a] rounded-full shadow-inner opacity-60" />
                <div className="absolute top-12 right-8 w-2 h-2 bg-[#1a1a1a] rounded-full shadow-inner opacity-40" />
                <div className="absolute bottom-20 left-3 w-2 h-2 bg-[#1a1a1a] rounded-full shadow-inner opacity-50" />
                <div className="absolute bottom-28 left-6 w-3 h-3 bg-[#1a1a1a] rounded-full shadow-inner opacity-40" />

                {/* Team Member Photo with Red Border */}
                <div className="relative w-36 h-40 mb-4">
                    {/* Red rounded border frame */}
                    <div className="absolute inset-0 bg-[#c41e3a] rounded-2xl p-1">
                        <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                            {member.image ? (
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <img 
                                        src="/codesprint-app/images/mask.png" 
                                        alt="Dali Mask"
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Alias Label */}
                <div className="text-center mb-0">
                    <span className="text-[#1a1a1a] font-bold text-sm tracking-wider" style={{ fontFamily: 'serif' }}>
                        ALIAS:
                    </span>
                </div>

                {/* Alias Name - Big Bold */}
                <div className="text-center mb-4">
                    <h3 className="text-[#c41e3a] font-black text-2xl uppercase tracking-wide" 
                        style={{ fontFamily: 'Impact, sans-serif', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                        {member.alias}
                    </h3>
                </div>

                {/* Real Name and Role */}
                <div className="text-center mt-auto mb-4">
                    <p className="text-[#2a2a2a] font-black text-sm uppercase tracking-wider">
                        {member.name}
                    </p>
                    <p className="text-[#666] font-bold text-xs uppercase tracking-wide mt-1">
                        {member.role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

// --- CREW SECTION WITH ROPE CONNECTIONS ---
export const CrewSection = () => {
    const topRowMembers = STUDENT_DATA.slice(0, 3);
    const bottomRowMembers = STUDENT_DATA.slice(3, 6);

    return (
        <div className="relative mb-40 py-20 overflow-hidden" id="team">
            {/* Section Header */}
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block"
                >
                    <h2 className="text-6xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        THE <span className="text-[#c41e3a]">CREW</span>
                    </h2>
                </motion.div>
            </div>

            {/* Cards Container with SVG Ropes */}
            <div className="relative max-w-6xl mx-auto px-4">
                {/* SVG Rope Lines */}
                <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    style={{ overflow: 'visible' }}
                    preserveAspectRatio="none"
                >
                    {/* Top row horizontal connections */}
                    <line 
                        x1="20%" y1="25%" 
                        x2="50%" y2="25%" 
                        stroke="#c41e3a" 
                        strokeWidth="2"
                        className="hidden md:block"
                    />
                    <line 
                        x1="50%" y1="25%" 
                        x2="80%" y2="25%" 
                        stroke="#c41e3a" 
                        strokeWidth="2"
                        className="hidden md:block"
                    />
                    
                    {/* Bottom row horizontal connections */}
                    <line 
                        x1="20%" y1="75%" 
                        x2="50%" y2="75%" 
                        stroke="#c41e3a" 
                        strokeWidth="2"
                        className="hidden md:block"
                    />
                    <line 
                        x1="50%" y1="75%" 
                        x2="80%" y2="75%" 
                        stroke="#c41e3a" 
                        strokeWidth="2"
                        className="hidden md:block"
                    />
                    
                    {/* Vertical connections between rows */}
                    <line 
                        x1="20%" y1="25%" 
                        x2="20%" y2="75%" 
                        stroke="#c41e3a" 
                        strokeWidth="2"
                        className="hidden md:block"
                    />
                    <line 
                        x1="50%" y1="25%" 
                        x2="50%" y2="75%" 
                        stroke="#c41e3a" 
                        strokeWidth="2"
                        className="hidden md:block"
                    />
                    <line 
                        x1="80%" y1="25%" 
                        x2="80%" y2="75%" 
                        stroke="#c41e3a" 
                        strokeWidth="2"
                        className="hidden md:block"
                    />
                </svg>

                {/* Top Row - 3 Cards */}
                <div className="relative z-10 flex justify-center gap-6 md:gap-10 lg:gap-16 mb-8 flex-wrap">
                    {topRowMembers.map((member, i) => (
                        <CrewCard key={i} member={member} index={i} />
                    ))}
                </div>

                {/* Bottom Row - Centered */}
                {bottomRowMembers.length > 0 && (
                    <div className="relative z-10 flex justify-center gap-6 md:gap-10 lg:gap-16 flex-wrap">
                        {bottomRowMembers.map((member, i) => (
                            <CrewCard key={i + 3} member={member} index={i + 3} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

// --- THEMED COMPONENTS ---

// Stock Ticker
export const StockTicker = ({ direction = "left", speed = 20 }: { direction?: "left" | "right", speed?: number }) => (
    <div className="w-full overflow-hidden bg-[#2c241b] border-y border-[#5c4d3c] py-2 relative z-30">
        <motion.div
            className="flex whitespace-nowrap gap-12 font-mono text-sm tracking-widest text-[#d4b483]"
            animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        >
            {[...Array(10)].map((_, i) => (
                <React.Fragment key={i}>
                    <span>SITANK 2.0 <span className="text-green-500">▲ 500.00</span></span>
                    <span>ROI <span className="text-green-500">▲ 100%</span></span>
                    <span>PITCH <span className="text-green-500">▲ 24H</span></span>
                    <span>RISK <span className="text-red-500">▼ 0.00</span></span>
                </React.Fragment>
            ))}
        </motion.div>
    </div>
);

// --- NEW COMPONENT: HERO VIDEO BACKGROUND ---
export const HeroVideoBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* 1. The Video */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
            style={{ filter: "grayscale(100%) sepia(80%) contrast(1.2) brightness(0.6)" }}
        >
            {/* REPLACE THIS URL WITH YOUR CUSTOM VIDEO PATH (e.g. /videos/hero.mp4) */}
            <source src="/videos/sitank.mp4" type="video/mp4" />
        </video>

        {/* 2. Texture Overlays for that "1992" Look */}
        <div className="absolute inset-0 bg-[#120f0d]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-40"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>
    </div>
);

// Film Grain Overlay
export const FilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.08] mix-blend-overlay"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}>
    </div>
);

// --- MARKET WATCH SECTION (Secondary Video) ---
export const MarketWatchSection = () => {
    return (
        <div className="relative w-full min-h-[50vh] h-auto md:h-[70vh] overflow-hidden border-y-4 border-[#5c4d3c] bg-black">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 grayscale sepia scale-110"
                >
                    <source src="https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_30fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#120f0d] via-transparent to-[#120f0d]"></div>
            </div>

            <div className="relative z-10 h-full w-full flex items-center justify-center p-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        whileInView={{ scale: 1, opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-[280px] h-[200px] md:w-[600px] md:h-[400px] bg-[#1a1612] p-2 shadow-[20px_20px_0px_rgba(0,0,0,0.5)] border border-[#5c4d3c] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <SmartImage src="/codesprint-app/images/ashneer-grover.png" alt="Guest_Photo" fit="cover" />
                            <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 px-3 py-1 text-white font-mono text-xs font-bold animate-pulse shadow-lg">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                LIVE BROADCAST
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black/80 px-4 py-2 border border-[#d4b483] text-[#d4b483] font-mono text-xs md:text-sm">
                                Guest_Name
                            </div>
                        </div>
                    </motion.div>



                    <div className="bg-[#1a1612] p-10 border border-[#5c4d3c] shadow-[10px_10px_0px_#2c241b] relative">
                        <h2 className="text-4xl font-bold mb-6 text-[#d4b483] uppercase tracking-widest border-b border-[#5c4d3c] pb-4">About</h2>
                        <p className="text-lg text-[#a89070] leading-relaxed font-mono mb-6">
                            Guest_About
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

// --- FAQ DATA ---
export const FAQ_DATA = [
    {
        question: "What is the team size?",
        answer: "You can participate individually or in a team of up to 4 members. Collaboration is key in the market!"
    },
    {
        question: "Is there a registration fee?",
        answer: "No, participation in SITANK 2.0 is completely free. We are looking for talent, not capital."
    },
    {
        question: "Who can participate?",
        answer: "Open to all students who have a knack for building products and pitching efficiently."
    },
    {
        question: "Is it an offline event?",
        answer: "Yes, SITANK 2.0 is an offline event held at SIT Nagpur. Prepare for a high-energy trading floor environment."
    },
    {
        question: "What is the format?",
        answer: "It's a 24-hour hackathon followed by a pitching round where you sell your product to our 'Sharks'."
    }
];

// --- FAQ COMPONENT ---
export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="mb-40">
            <h2 className="text-center text-5xl font-bold mb-16 text-[#d4b483] uppercase tracking-tighter">Market Queries</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {FAQ_DATA.map((faq, i) => (
                    <div
                        key={i}
                        className="bg-[#1a1612] border border-[#5c4d3c] overflow-hidden transition-all duration-300 hover:border-[#d4b483]"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full text-left p-6 flex justify-between items-center text-[#e8d5b5] font-mono font-bold hover:text-[#d4b483] transition-colors"
                        >
                            <span><span className="text-[#d4b483] mr-4">0{i + 1}.</span>{faq.question}</span>
                            <span className={`transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        <div
                            className={`px-6 text-[#a89070] font-sans leading-relaxed transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 py-4 border-t border-[#5c4d3c]' : 'max-h-0 py-0'}`}
                            style={{ overflow: 'hidden' }}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
