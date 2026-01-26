import React, { useState, useRef, useEffect } from "react";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CrewSection } from "@/sections/sitank/shared";

// --- SOUND TOGGLE BUTTON (MONEY HEIST THEMED) ---
const SoundToggle = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);
    const { isMobile } = useBreakpoint();

    useEffect(() => {
        const handleScroll = () => {
            // Hide button after scrolling 300px
            setIsVisible(window.scrollY < 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Autoplay audio after a short delay (after loading screen)
    useEffect(() => {
        const autoplayTimer = setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                    })
                    .catch((error) => {
                        // Autoplay was prevented by browser, user needs to click
                        console.log('Autoplay prevented:', error);
                    });
            }
        }, 1500); // 1.5 seconds delay to allow loading screen to finish

        return () => clearTimeout(autoplayTimer);
    }, []);

    const toggleSound = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <audio ref={audioRef} loop>
                <source src="/codesprint-app/audio/bella-ciao.mp3" type="audio/mpeg" />
            </audio>
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        onClick={toggleSound}
                        className={`fixed ${isMobile ? 'top-4 right-4' : 'top-6 right-6'} z-50 group`}
                        aria-label={isPlaying ? "Mute Bella Ciao" : "Play Bella Ciao"}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Outer glow effect */}
                        <div className={`absolute inset-0 bg-red-600/30 blur-xl transition-opacity duration-500 ${isPlaying ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />

                        {/* Main button container */}
                        <div className={`relative bg-black border-2 border-red-600 ${isMobile ? 'p-2' : 'p-4'} transform -skew-x-6 overflow-hidden`}>
                            {/* Scan line effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/10 to-transparent animate-scan pointer-events-none" />

                            {/* Corner accents */}
                            <div className={`absolute top-0 left-0 ${isMobile ? 'w-2 h-2' : 'w-3 h-3'} border-t-2 border-l-2 border-red-600`} />
                            <div className={`absolute top-0 right-0 ${isMobile ? 'w-2 h-2' : 'w-3 h-3'} border-t-2 border-r-2 border-red-600`} />
                            <div className={`absolute bottom-0 left-0 ${isMobile ? 'w-2 h-2' : 'w-3 h-3'} border-b-2 border-l-2 border-red-600`} />
                            <div className={`absolute bottom-0 right-0 ${isMobile ? 'w-2 h-2' : 'w-3 h-3'} border-b-2 border-r-2 border-red-600`} />

                            <div className={`flex items-center ${isMobile ? 'gap-2' : 'gap-3'} skew-x-6`}>
                                {/* Sound wave bars */}
                                <div className={`flex items-end gap-[2px] ${isMobile ? 'h-4' : 'h-6'}`}>
                                    {[1, 2, 3, 4].map((bar) => (
                                        <motion.div
                                            key={bar}
                                            className="w-[2px] bg-red-600 rounded-full"
                                            animate={isPlaying ? {
                                                height: isMobile ? ["6px", "16px", "8px", "14px", "6px"] : ["8px", "24px", "12px", "20px", "8px"],
                                            } : { height: isMobile ? "6px" : "8px" }}
                                            transition={{
                                                duration: 0.8,
                                                repeat: Infinity,
                                                delay: bar * 0.1,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Text */}
                                <div className="flex flex-col items-start">
                                    <span className={`${isMobile ? 'text-[8px]' : 'text-[10px]'} text-zinc-500 font-mono uppercase tracking-wider`}>
                                        {isPlaying ? "NOW PLAYING" : "CLICK TO PLAY"}
                                    </span>
                                    <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-black text-white uppercase tracking-tight italic`}>
                                        BELLA CIAO
                                    </span>
                                </div>

                                {/* Play/Pause indicator */}
                                <div className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} flex items-center justify-center border-2 ${isPlaying ? 'border-red-600 bg-red-600/20' : 'border-zinc-600'} transition-colors`}>
                                    {isPlaying ? (
                                        <div className="flex gap-1">
                                            <div className={`${isMobile ? 'w-[2px] h-3' : 'w-1 h-4'} bg-red-600`} />
                                            <div className={`${isMobile ? 'w-[2px] h-3' : 'w-1 h-4'} bg-red-600`} />
                                        </div>
                                    ) : (
                                        <div className={`w-0 h-0 ${isMobile ? 'border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent' : 'border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent'} ml-1`} />
                                    )}
                                </div>
                            </div>

                            {/* Bottom status bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-zinc-800">
                                <motion.div
                                    className="h-full bg-red-600"
                                    animate={isPlaying ? { width: ["0%", "100%"] } : { width: "0%" }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>

                        {/* Glitch effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                            <div className="absolute inset-0 bg-red-600/20 transform translate-x-1 -translate-y-1" />
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Add scan animation to global styles */}
            <style>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                .animate-scan {
                    animation: scan 2s linear infinite;
                }
            `}</style>
        </>
    );
};

// --- 1. UTILITIES ---

const SmartImage = ({ src, alt, className, fit = "cover" }: { src: string, alt: string, className?: string, fit?: "cover" | "contain" }) => {
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden bg-zinc-950 ${className}`}>
            {!loaded && !error && (
                <div className="absolute inset-0 bg-red-900/20 animate-pulse z-10" />
            )}
            <img
                src={error ? `https://placehold.co/600x400/000000/e50914?text=${encodeURIComponent(alt)}` : src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                className={`w-full h-full transition-all duration-700 ${fit === "contain" ? "object-contain p-2" : "object-cover"
                    } ${loaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
            />
            {/* Red Glitch Overlay on Hover */}
            <div className="absolute inset-0 bg-red-500/0 hover:bg-red-500/10 transition-colors duration-300 pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};

// --- 2. DATA ---
const HIGHLIGHTS_DATA = [
    { index: 1, ext: 'JPG' }, { index: 2, ext: 'JPG' }, { index: 3, ext: 'JPG' },
    { index: 4, ext: 'JPG' }, { index: 5, ext: 'JPG' }
];
const MARQUEE_DATA = [...HIGHLIGHTS_DATA, ...HIGHLIGHTS_DATA];


// --- 3. THEMED COMPONENTS (MONEY HEIST) ---

// Floating Money / Particles
const FallingMoney = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-4 h-2 bg-red-600/40 rounded-sm"
                initial={{ y: -100, x: Math.random() * 100 + "%", rotate: 0 }}
                animate={{
                    y: "120vh",
                    rotate: [0, 360],
                    x: ["-20px", "20px"]
                }}
                transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "linear"
                }}
            />
        ))}
    </div>
);

// Heist Ticker
const HeistTicker = ({ direction = "left", speed = 20 }) => (
    <div className="w-full overflow-hidden bg-[#e50914] border-y border-black py-2 relative z-30">
        <motion.div
            className="flex whitespace-nowrap gap-12 font-sans font-black text-sm tracking-widest text-white uppercase"
            animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        >
            {[...Array(10)].map((_, i) => (
                <React.Fragment key={i}>
                    <span>CODE SPRINT 2.0 <span className="text-black">⚠ IN PROGRESS</span></span>
                    <span>BELLA CIAO <span className="text-black">♫</span></span>
                    <span>TIME REMAINING <span className="text-black">24:00:00</span></span>
                    <span>SYSTEM HACKED <span className="text-black">⚠</span></span>
                </React.Fragment>
            ))}
        </motion.div>
    </div>
);

// Hero Image Background (Dark & Red)
const HeroVideoBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
            src="/codesprint-app/images/money_heist_bg.png"
            alt="Money Heist Background"
            className="w-full h-full object-cover scale-105"
            style={{ filter: "contrast(1.2) brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
    </div>
);

// --- MARKET WATCH SECTION (CCTV STYLE) ---

// --- 4. DESKTOP COMPONENT ---
function CodeSprintDesktop() {
    const { scrollY } = useScroll();
    const textY = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section className="relative w-full min-h-screen bg-black text-white font-sans overflow-hidden selection:bg-red-600 selection:text-white">

            {/* HERO SECTION */}
            <div className="relative min-h-screen flex flex-col pt-20 overflow-hidden">
                <HeroVideoBackground />
                <FallingMoney />

                <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4">
                    <motion.div style={{ y: textY }}>
                        <div className="mb-4 inline-block bg-red-600 text-black px-6 py-2 text-sm font-black tracking-[0.3em] uppercase transform -skew-x-12">
                            Join The Resistance
                        </div>

                        <h1 className="text-[12vw] leading-[0.8] font-black text-white drop-shadow-[5px_5px_0px_#e50914] mb-6 tracking-tighter">
                            CODE SPRINT 2.0
                        </h1>



                        <div className="flex gap-6 justify-center">
                            {/* JOIN THE HEIST Button */}
                            <motion.button
                                onClick={() => window.open('https://unstop.com/p/codesprint-20-enthusia-50-symbiosis-institute-of-technology-nagpur-1622481?lb=i9smS0vw&utm_medium=Share&utm_source=harshkum8980&utm_campaign=Online_coding_challenge', '_blank')}
                                className="relative group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Outer glow */}
                                <div className="absolute -inset-1 bg-red-600/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Main button container */}
                                <div className="relative bg-black border-2 border-red-600 px-16 py-6 transform -skew-x-6 overflow-hidden">
                                    {/* Animated background stripes */}
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(229,9,20,0.3)_10px,rgba(229,9,20,0.3)_20px)] animate-slide" />
                                    </div>

                                    {/* Scan line */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan pointer-events-none" />

                                    {/* Corner brackets */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />

                                    {/* Content */}
                                    <div className="relative skew-x-6 flex items-center gap-4">
                                        {/* Dali mask icon */}
                                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center overflow-hidden">
                                            <img src="/codesprint-app/images/mask.png" alt="Dali Mask" className="w-8 h-8 object-contain" />
                                        </div>

                                        <div className="flex flex-col items-start">
                                            <span className="text-[10px] text-red-500 font-mono tracking-[0.3em] uppercase">
                                                Operation Active
                                            </span>
                                            <span className="text-xl font-black text-white uppercase tracking-wider">
                                                JOIN THE HEIST
                                            </span>
                                        </div>

                                        {/* Arrow */}
                                        <motion.div
                                            className="ml-4"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    {/* Bottom progress bar */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600"
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            style={{ width: "50%" }}
                                        />
                                    </div>
                                </div>

                                {/* Glitch layers on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                                    <div className="absolute inset-0 bg-red-600/10 transform translate-x-1 -translate-y-1 -skew-x-6" />
                                    <div className="absolute inset-0 bg-cyan-500/10 transform -translate-x-1 translate-y-1 -skew-x-6" />
                                </div>
                            </motion.button>
                        </div>

                        {/* Add slide animation */}
                        <style>{`
                            @keyframes slide {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(20px); }
                            }
                            .animate-slide {
                                animation: slide 0.5s linear infinite;
                            }
                        `}</style>
                    </motion.div>
                </div>

                <HeistTicker speed={25} />
            </div>

            <div className="relative z-20 bg-zinc-900 border-t border-red-900">
                <div className="max-w-[1400px] mx-auto px-8 py-32">

                    <div className="mb-40 grid lg:grid-cols-2 gap-16 items-center" id="about">
                        <div className="bg-black p-10 border-l-8 border-red-600 shadow-2xl relative">
                            <h2 className="text-5xl font-black mb-6 text-white uppercase tracking-tighter italic">About Codesprint</h2>
                            <p className="text-lg text-zinc-400 leading-relaxed font-mono mb-6">
                                Money Heist × CodeSprint 2.0 is a story-driven competitive coding event where teams take on a high-stakes bank heist across four connected phases. Guided by the Professor’s plan, you’ll work in phases: gather intelligence and plan,                                 <br /><br />
                                <strong className="text-red-500">Phase I – Introduction:</strong> The Professor briefs teams on the mission and objectives.
                                <br /><br />
                                <strong className="text-red-500">Phase II – Planning:</strong> Teams solve time-bound coding and logic challenges to uncover layouts, security systems, and key intel.
                                <br /><br />
                                <strong className="text-red-500">Phase III – Execution:</strong> Using unlocked information, teams apply DSA, optimisation, and problem-solving to reach and unlock the vault.
                                <br /><br />
                                <strong className="text-red-500">Phase IV – Escape:</strong> A fast-paced, light Capture-the-Flag round tests quick thinking and coordination to escape successfully.
                            </p>
                        </div>

                        <div className=" h-[500px] border-4 border-white bg-black p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 grayscale hover:grayscale-0">
                            <SmartImage src="/codesprint-app/images/about_image.jpeg" alt="About" className="object-cover h-full w-full" />
                        </div>
                    </div>

                    {/* FACILITIES & PRIZES */}
                    <div className="mb-40" id="blueprint">
                        <h2 className="text-center text-6xl font-black mb-16 text-white uppercase tracking-tighter">Facilities</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-black border border-zinc-800 p-10 relative group hover:border-red-600 transition-colors">
                                <div className="absolute -top-4 left-10 bg-white text-black px-4 py-1 font-bold text-sm uppercase">Hideout Specs</div>
                                <h3 className="text-4xl font-bold text-red-600 mb-8 mt-4 uppercase">Facilities</h3>
                                <div className="space-y-3 font-mono text-zinc-400">
                                    {["Air-Conditioned Lab Hideouts", "High-Speed Gigabit Fibre Internet", "Mission-Ready PC Systems", "Power Backups", "Professor's Tech Support", "Structured Gameplay", "Themed Lab Hideouts"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-red-500">▶</span> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-black border border-zinc-800 p-10 relative group hover:border-red-600 transition-colors">
                                <div className="absolute -top-4 left-10 bg-red-600 text-white px-4 py-1 font-bold text-sm uppercase">The Loot</div>
                                <h3 className="text-4xl font-bold text-white mb-8 mt-4 uppercase">The Vault</h3>
                                <div className="space-y-3 font-mono text-zinc-400">
                                    {[
                                        { position: "1st", amount: "₹8,000", color: "text-yellow-400", bgColor: "bg-yellow-400/10", borderColor: "border-yellow-400/30" },
                                        { position: "2nd", amount: "₹5,000", color: "text-gray-300", bgColor: "bg-gray-300/10", borderColor: "border-gray-300/30" },
                                        { position: "3rd", amount: "₹2,000", color: "text-amber-600", bgColor: "bg-amber-600/10", borderColor: "border-amber-600/30" }
                                    ].map((prize, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-red-500">▶</span>
                                            <div className="flex items-center gap-3 flex-1">
                                                <span className="text-zinc-300">{prize.position} Place:</span>
                                                <div className={`px-3 py-1 rounded-lg border ${prize.bgColor} ${prize.borderColor} ${prize.color} font-bold text-lg shadow-lg`}>
                                                    {prize.amount}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {["Registration Fee: ₹213.00/- per team", "Swags", "Institute Certificates"].map((item, i) => (
                                        <div key={i + 3} className="flex items-center gap-3">
                                            <span className="text-red-500">▶</span> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HIGHLIGHTS MARQUEE */}
                    <div className="mb-40 overflow-hidden" id="evidence">
                        <h2 className="text-center text-6xl font-black mb-4 text-white uppercase tracking-tighter">Event Highlight</h2>
                        <div className="text-center font-mono text-red-600 mb-12 uppercase">/// Previous Operations ///</div>

                        <div className="w-full relative border-y-4 border-red-600 bg-red-600/10 py-8">
                            <motion.div
                                className="flex gap-8 w-max pl-4"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                            >
                                {MARQUEE_DATA.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="relative w-80 h-60 bg-white p-2 shadow-2xl flex-shrink-0 transform even:-rotate-2 odd:rotate-2"
                                    >
                                        <div className="h-full w-full relative overflow-hidden bg-black">
                                            <SmartImage src={`/codesprint-app/images/highlights/${img.index}.${img.ext}`} alt="Evidence" fit="cover" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* TEAM - Money Heist Themed Crew Cards */}
                    <CrewSection />

                    {/* FAQ SECTION - Money Heist Themed */}
                    <div className="mb-40" id="faq">
                        <div className="text-center mb-16">
                            <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-4">
                                <span className="text-red-600">FAQ'S</span>
                            </h2>
                            <p className="text-zinc-400 font-mono text-lg">/// CLASSIFIED INFORMATION ///</p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-4">
                            {[
                                {
                                    question: "What is Money Heist × CodeSprint 2.0?",
                                    answer: "It is a mission-based technical event inspired by a bank heist, where teams plan the heist, execute it through problem-solving challenges, and finally escape safely."
                                },
                                {
                                    question: "Who can participate in this event?",
                                    answer: "The event is open to all undergraduate students. Anyone interested in problem-solving, strategy, and team-based challenges can participate."
                                },
                                {
                                    question: "What is the team size?",
                                    answer: "Each team must consist of 3 members."
                                },
                                {
                                    question: "Will systems or laptops be provided?",
                                    answer: "Yes, PCs will be provided at the venue. Participants do not need to bring their own systems."
                                },
                                {
                                    question: "What should participants bring to the event?",
                                    answer: "Participants should bring a valid college ID. Systems and required resources will be provided."
                                },
                                {
                                    question: "How will winners be decided?",
                                    answer: "Winners are decided based on overall performance across all phases, including accuracy, strategy, and penalties incurred."
                                },
                                {
                                    question: "Is this event suitable for first-year students?",
                                    answer: "Yes. First-year students are welcome as long as they are comfortable working in teams and solving logical problems."
                                }
                            ].map((faq, i) => (
                                <div key={i} className="bg-black border border-zinc-800 hover:border-red-600 transition-colors group">
                                    <details className="group">
                                        <summary className="cursor-pointer p-6 flex justify-between items-center text-white font-mono font-bold hover:text-red-400 transition-colors list-none">
                                            <span>
                                                <span className="text-red-600 mr-4">0{i + 1}.</span>
                                                {faq.question}
                                            </span>
                                            <span className="transform transition-transform duration-300 group-open:rotate-180 text-red-600">▼</span>
                                        </summary>
                                        <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center py-20 border-t border-red-900">
                        <h2 className="text-5xl font-black text-white mb-8 uppercase italic">Ready to pull it off?</h2>
                        <motion.button
                            onClick={() => window.open('https://unstop.com/p/codesprint-20-enthusia-50-symbiosis-institute-of-technology-nagpur-1622481?lb=i9smS0vw&utm_medium=Share&utm_source=harshkum8980&utm_campaign=Online_coding_challenge', '_blank')}
                            className="relative group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Outer glow */}
                            <div className="absolute -inset-2 bg-red-600/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Main button */}
                            <div className="relative bg-black border-2 border-red-600 px-16 py-6 transform -skew-x-6 overflow-hidden">
                                {/* Animated stripes */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(229,9,20,0.5)_10px,rgba(229,9,20,0.5)_20px)] animate-slide" />
                                </div>

                                {/* Scan line */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan pointer-events-none" />

                                {/* Corner brackets */}
                                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-red-500" />
                                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-red-500" />
                                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-red-500" />
                                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-red-500" />

                                {/* Content */}
                                <div className="relative skew-x-6 flex items-center justify-center gap-4">
                                    {/* Mask icon */}
                                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center overflow-hidden">
                                        <img src="/codesprint-app/images/mask.png" alt="Dali Mask" className="w-10 h-10 object-contain" />
                                    </div>

                                    <div className="flex flex-col items-start">
                                        <span className="text-[10px] text-red-500 font-mono tracking-[0.3em] uppercase">
                                            Bella Ciao
                                        </span>
                                        <span className="text-2xl font-black text-white uppercase tracking-wider">
                                            REGISTER NOW
                                        </span>
                                    </div>

                                    {/* Arrow */}
                                    <motion.div
                                        className="ml-4"
                                        animate={{ x: [0, 8, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </motion.div>
                                </div>

                                {/* Bottom progress bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600"
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        style={{ width: "50%" }}
                                    />
                                </div>
                            </div>

                            {/* Glitch effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                                <div className="absolute inset-0 bg-red-600/10 transform translate-x-1 -translate-y-1 -skew-x-6" />
                                <div className="absolute inset-0 bg-cyan-500/10 transform -translate-x-1 translate-y-1 -skew-x-6" />
                            </div>
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
}

// --- 5. MOBILE COMPONENT ---
function CodeSprintMobile() {
    return (
        <section className="relative min-h-screen bg-black text-white pt-20 pb-20 px-4 font-sans overflow-hidden">
            <HeistTicker speed={15} />

            {/* MOBILE HERO */}
            <div className="relative h-[80vh] w-full overflow-hidden border-b-8 border-red-600 mb-12 mt-4">
                <HeroVideoBackground />
                <div className="absolute inset-0 flex flex-col justify-center px-6 z-10">
                    <div className="text-white bg-red-600 text-xs font-black tracking-[0.2em] uppercase mb-2 inline-block px-2 py-1 transform -skew-x-12 origin-left">OPERATION: CODESPRINT 2.0</div>
                    <h1 className="text-6xl font-black text-white mb-2 uppercase leading-none drop-shadow-xl italic">CODE<br />SPRINT 2.0</h1>
                    <p className="text-zinc-300 italic mt-2 text-lg font-mono">"One plan. No mistakes."</p>
                </div>
            </div>

            <div className="relative z-10">

                {/* Mobile Navigation Buttons */}
                <div className="mb-8 flex flex-col gap-3">
                    {/* JOIN THE HEIST Button - Mobile */}
                    <motion.button
                        onClick={() => window.open('https://unstop.com/p/codesprint-20-enthusia-50-symbiosis-institute-of-technology-nagpur-1622481?lb=i9smS0vw&utm_medium=Share&utm_source=harshkum8980&utm_campaign=Online_coding_challenge', '_blank')}
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="absolute -inset-1 bg-red-600/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-black border-2 border-red-600 px-8 py-4 transform -skew-x-6 overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(229,9,20,0.3)_8px,rgba(229,9,20,0.3)_16px)] animate-slide" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan pointer-events-none" />
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500" />
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500" />
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500" />
                            <div className="relative skew-x-6 flex items-center justify-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center overflow-hidden">
                                    <img src="/codesprint-app/images/mask.png" alt="Dali Mask" className="w-6 h-6 object-contain" />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="text-[8px] text-red-500 font-mono tracking-[0.2em] uppercase">Operation Active</span>
                                    <span className="text-lg font-black text-white uppercase tracking-wider">JOIN THE HEIST</span>
                                </div>
                                <motion.div
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </motion.div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    style={{ width: "50%" }}
                                />
                            </div>
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                            <div className="absolute inset-0 bg-red-600/10 transform translate-x-1 -translate-y-1 -skew-x-6" />
                            <div className="absolute inset-0 bg-cyan-500/10 transform -translate-x-1 translate-y-1 -skew-x-6" />
                        </div>
                    </motion.button>
                </div>


                {/* About - Enhanced Mobile Version */}
                <div className="mb-12 grid gap-6">
                    <div className="bg-zinc-900 border-l-4 border-red-600 p-6 shadow-xl">
                        <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter italic">The Master Plan</h2>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-4 font-mono">
                            Money Heist × CodeSprint 2.0 is a story-driven competitive coding event where teams take on a high-stakes bank heist across four connected phases.
                            <br /><br />
                            <strong className="text-red-500">Phase I – Introduction:</strong> The Professor briefs teams on the mission and objectives.
                            <br /><br />
                            <strong className="text-red-500">Phase II – Planning:</strong> Teams solve time-bound coding and logic challenges to uncover layouts, security systems, and key intel.
                            <br /><br />
                            <strong className="text-red-500">Phase III – Execution:</strong> Using unlocked information, teams apply DSA, optimisation, and problem-solving to reach and unlock the vault.
                            <br /><br />
                            <strong className="text-red-500">Phase IV – Escape:</strong> A fast-paced, light Capture-the-Flag round tests quick thinking and coordination to escape successfully.
                        </p>

                        <div className="flex justify-between text-xs font-bold font-mono text-red-500 border-t border-zinc-700 pt-4">
                            <span>STATUS: ACTIVE</span>
                            <span>RISK: EXTREME</span>
                        </div>
                    </div>
                    
                    {/* About Image - Mobile */}
                    <div className="relative">
                        <div className="h-64 border-4 border-white bg-black p-2 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 grayscale hover:grayscale-0">
                            <SmartImage src="/codesprint-app/images/about_image.jpeg" alt="About" className="object-cover h-full w-full" />
                        </div>
                    </div>
                </div>

                {/* FACILITIES & PRIZES - Mobile Version */}
                <div className="mb-12">
                    <h2 className="text-center text-4xl font-black text-white mb-8 uppercase tracking-tighter">Facilities</h2>
                    <div className="space-y-6">
                        <div className="bg-black border border-zinc-800 p-6 relative">
                            <div className="absolute -top-3 left-4 bg-white text-black px-3 py-1 font-bold text-xs uppercase">Hideout Specs</div>
                            <h3 className="text-2xl font-bold text-red-600 mb-4 mt-2 uppercase">Facilities</h3>
                            <div className="space-y-2 font-mono text-zinc-400 text-sm">
                                {["Air-Conditioned Lab Hideouts", "High-Speed Gigabit Fibre Internet", "Mission-Ready PC Systems", "Power Backups", "Professor's Tech Support", "Structured Gameplay", "Themed Lab Hideouts"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="text-red-500">▶</span> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-black border border-zinc-800 p-6 relative">
                            <div className="absolute -top-3 left-4 bg-red-600 text-white px-3 py-1 font-bold text-xs uppercase">The Loot</div>
                            <h3 className="text-2xl font-bold text-white mb-4 mt-2 uppercase">The Vault</h3>
                            <div className="space-y-2 font-mono text-zinc-400 text-sm">
                                {[
                                    { position: "1st", amount: "₹8,000", color: "text-yellow-400", bgColor: "bg-yellow-400/10", borderColor: "border-yellow-400/30" },
                                    { position: "2nd", amount: "₹5,000", color: "text-gray-300", bgColor: "bg-gray-300/10", borderColor: "border-gray-300/30" },
                                    { position: "3rd", amount: "₹2,000", color: "text-amber-600", bgColor: "bg-amber-600/10", borderColor: "border-amber-600/30" }
                                ].map((prize, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="text-red-500">▶</span>
                                        <div className="flex items-center gap-2 flex-1">
                                            <span className="text-zinc-300 text-xs">{prize.position}:</span>
                                            <div className={`px-2 py-1 rounded border ${prize.bgColor} ${prize.borderColor} ${prize.color} font-bold text-sm shadow-lg`}>
                                                {prize.amount}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {["Registration Fee: ₹213.00/- per team", "Consolation: Hampers", "Swags", "Institute Certificates"].map((item, i) => (
                                    <div key={i + 3} className="flex items-center gap-2">
                                        <span className="text-red-500">▶</span> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights */}
                <div className="mb-12 px-4">
                    <h2 className="text-center text-4xl font-black text-white mb-4 uppercase tracking-tighter">Event Highlight</h2>
                    <div className="text-center font-mono text-red-600 mb-8 uppercase text-sm">/// Previous Operations ///</div>
                    
                    {/* Mobile Grid Layout */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {HIGHLIGHTS_DATA.slice(0, 4).map((img, idx) => (
                            <div
                                key={idx}
                                className="relative bg-white p-1 shadow-lg transform even:-rotate-1 odd:rotate-1 hover:rotate-0 transition-transform duration-300"
                            >
                                <div className="aspect-[4/3] w-full bg-black overflow-hidden rounded-sm">
                                    <SmartImage 
                                        src={`/codesprint-app/images/highlights/${img.index}.${img.ext}`} 
                                        alt="Event Highlight" 
                                        fit="cover" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Show remaining image in center for odd number */}
                    {HIGHLIGHTS_DATA.length > 4 && (
                        <div className="mt-3 sm:mt-4 flex justify-center">
                            <div className="relative bg-white p-1 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 w-1/2">
                                <div className="aspect-[4/3] w-full bg-black overflow-hidden rounded-sm">
                                    <SmartImage 
                                        src={`/codesprint-app/images/highlights/${HIGHLIGHTS_DATA[4].index}.${HIGHLIGHTS_DATA[4].ext}`} 
                                        alt="Event Highlight" 
                                        fit="cover" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* TEAM - Money Heist Themed Crew Cards (Mobile) */}
                <div className="mb-12">
                    <CrewSection />
                </div>

                {/* FAQ SECTION - Mobile */}
                <div className="mb-12">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">
                            INTEL <span className="text-red-600">BRIEFING</span>
                        </h2>
                        <p className="text-zinc-400 font-mono text-sm">/// CLASSIFIED INFO ///</p>
                    </div>

                    <div className="space-y-3">
                        {[
                            {
                                question: "What is Money Heist × CodeSprint 2.0?",
                                answer: "It is a mission-based technical event inspired by a bank heist, where teams plan the heist, execute it through problem-solving challenges, and finally escape safely."
                            },
                            {
                                question: "Who can participate in this event?",
                                answer: "The event is open to all undergraduate students. Anyone interested in problem-solving, strategy, and team-based challenges can participate."
                            },
                            {
                                question: "What is the team size?",
                                answer: "Each team must consist of 3 members."
                            },
                            {
                                question: "Will systems or laptops be provided?",
                                answer: "Yes, PCs will be provided at the venue. Participants do not need to bring their own systems."
                            },
                            {
                                question: "What should participants bring to the event?",
                                answer: "Participants should bring a valid college ID. Systems and required resources will be provided."
                            },
                            {
                                question: "How will winners be decided?",
                                answer: "Winners are decided based on overall performance across all phases, including accuracy, strategy, and penalties incurred."
                            },
                            {
                                question: "Is this event suitable for first-year students?",
                                answer: "Yes. First-year students are welcome as long as they are comfortable working in teams and solving logical problems."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-black border border-zinc-800 hover:border-red-600 transition-colors">
                                <details className="group">
                                    <summary className="cursor-pointer p-4 flex justify-between items-center text-white font-mono text-sm font-bold hover:text-red-400 transition-colors list-none">
                                        <span>
                                            <span className="text-red-600 mr-2">0{i + 1}.</span>
                                            {faq.question}
                                        </span>
                                        <span className="transform transition-transform duration-300 group-open:rotate-180 text-red-600 text-xs">▼</span>
                                    </summary>
                                    <div className="px-4 pb-4 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800 pt-3">
                                        {faq.answer}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CONTACT INFORMATION - Mobile Version */}
                <div className="mb-12 px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">
                            GET IN <span className="text-red-600">TOUCH</span>
                        </h2>
                        <p className="text-zinc-400 font-mono text-sm">/// SECURE COMMUNICATION CHANNEL ///</p>
                    </div>

                    <div className="space-y-4">
                        {/* Email */}
                        <div className="bg-black border border-zinc-800 hover:border-red-600 transition-colors p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-600 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-red-500 font-mono uppercase tracking-wider">Email</div>
                                    <div className="text-white font-mono text-sm">enthusia@sitnagpur.siu.edu.in</div>
                                </div>
                            </div>
                        </div>

                        {/* Phone 1 */}
                        <div className="bg-black border border-zinc-800 hover:border-red-600 transition-colors p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-600 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-red-500 font-mono uppercase tracking-wider">Event Coordinator</div>
                                    <div className="text-white font-mono text-sm">+91 70207 78853</div>
                                    <div className="text-zinc-400 text-xs">Shlok Vij</div>
                                </div>
                            </div>
                        </div>

                        {/* Phone 2 */}
                        <div className="bg-black border border-zinc-800 hover:border-red-600 transition-colors p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-600 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-red-500 font-mono uppercase tracking-wider">Event Coordinator</div>
                                    <div className="text-white font-mono text-sm">+91 96047 35914</div>
                                    <div className="text-zinc-400 text-xs">Shruti Bawankar</div>
                                </div>
                            </div>
                        </div>

                        {/* Venue */}
                        <div 
                            onClick={() => window.open('https://maps.app.goo.gl/dGTgnQBC1hHf19pp8', '_blank')}
                            className="bg-black border border-zinc-800 hover:border-red-600 transition-colors p-4 rounded-lg cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-600 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-red-500 font-mono uppercase tracking-wider">Venue</div>
                                    <div className="text-white font-mono text-sm">Symbiosis Institute of Technology</div>
                                    <div className="text-zinc-400 text-xs">Nagpur, Maharashtra, India</div>
                                </div>
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FINAL CTA - Mobile Version */}
                <div className="mt-16 mb-12 text-center border-t border-red-900 pt-12">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase italic">Ready to pull it off?</h2>
                    <motion.button
                        onClick={() => window.open('https://unstop.com/p/codesprint-20-enthusia-50-symbiosis-institute-of-technology-nagpur-1622481?lb=i9smS0vw&utm_medium=Share&utm_source=harshkum8980&utm_campaign=Online_coding_challenge', '_blank')}
                        className="relative group w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Outer glow */}
                        <div className="absolute -inset-1 bg-red-600/40 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Main button */}
                        <div className="relative bg-black border-2 border-red-600 px-8 py-4 transform -skew-x-6 overflow-hidden">
                            {/* Animated stripes */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,rgba(229,9,20,0.5)_8px,rgba(229,9,20,0.5)_16px)] animate-slide" />
                            </div>

                            {/* Scan line */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan pointer-events-none" />

                            {/* Corner brackets */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500" />
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-500" />
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-500" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500" />

                            {/* Content */}
                            <div className="relative skew-x-6 flex items-center justify-center gap-3">
                                {/* Mask icon */}
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center overflow-hidden">
                                    <img src="/codesprint-app/images/mask.png" alt="Dali Mask" className="w-6 h-6 object-contain" />
                                </div>

                                <div className="flex flex-col items-start">
                                    <span className="text-[8px] text-red-500 font-mono tracking-[0.2em] uppercase">
                                        Bella Ciao
                                    </span>
                                    <span className="text-lg font-black text-white uppercase tracking-wider">
                                        REGISTER NOW
                                    </span>
                                </div>

                                {/* Arrow */}
                                <motion.div
                                    className="ml-2"
                                    animate={{ x: [0, 4, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </motion.div>
                            </div>

                            {/* Bottom progress bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    style={{ width: "50%" }}
                                />
                            </div>
                        </div>

                        {/* Glitch effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                            <div className="absolute inset-0 bg-red-600/10 transform translate-x-1 -translate-y-1 -skew-x-6" />
                            <div className="absolute inset-0 bg-cyan-500/10 transform -translate-x-1 translate-y-1 -skew-x-6" />
                        </div>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}

// --- 6. EXPORT ---
export default function CodeSprintPage() {
    const { isMobile } = useBreakpoint();

    return (
        <>
            <SEO title="CODE SPRINT 2.0 - The Heist" description="Join the resistance. Code the future." url="https://sitnovate.vercel.app" />
            <SoundToggle />
            <div className="flex min-h-svh flex-col bg-black text-white">
                {isMobile ? (
                    <>
                        <CodeSprintMobile />
                        <Footer />
                    </>
                ) : (
                    <>
                        <Sidebar />
                        <main className="w-full">
                            <CodeSprintDesktop />
                            <Footer />
                        </main>
                    </>
                )}
            </div>
        </>
    );
}