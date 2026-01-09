import React, { useState, useEffect } from "react";
import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

// --- 1. UTILITIES ---

const SmartImage = ({ src, alt, className, fit = "cover" }: { src: string, alt: string, className?: string, fit?: "cover" | "contain" }) => {
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden bg-[#1a1612] ${className}`}>
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

// --- 2. DATA ---
const HIGHLIGHTS_DATA = [
    { index: 1, ext: 'JPG' }, { index: 2, ext: 'JPG' }, { index: 3, ext: 'jpg' },
    { index: 4, ext: 'jpg' }, { index: 5, ext: 'png' }, { index: 6, ext: 'png' }
];
const MARQUEE_DATA = [...HIGHLIGHTS_DATA, ...HIGHLIGHTS_DATA];

const SPONSORS_DATA = [
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
const STUDENT_DATA = [
    { name: "Sunidhi Haware", role: "President" },
    { name: "Prathmesh", role: "Vice President" },
    { name: "Parth Choudhari", role: "Lead" },
    { name: "Jash Chauhan", role: "Web Development Team Lead" },
    { name: "Soumya Mishra", role: "Developer" },
];

// --- 3. THEMED COMPONENTS ---

// Stock Ticker
const StockTicker = ({ direction = "left", speed = 20 }) => (
    <div className="w-full overflow-hidden bg-[#2c241b] border-y border-[#5c4d3c] py-2 relative z-30">
        <motion.div
            className="flex whitespace-nowrap gap-12 font-mono text-sm tracking-widest text-[#d4b483]"
            animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        >
            {[...Array(10)].map((_, i) => (
                <React.Fragment key={i}>
                    <span>SITANK <span className="text-green-500">▲ 500.00</span></span>
                    <span>ROI <span className="text-green-500">▲ 100%</span></span>
                    <span>PITCH <span className="text-green-500">▲ 24H</span></span>
                    <span>RISK <span className="text-red-500">▼ 0.00</span></span>
                </React.Fragment>
            ))}
        </motion.div>
    </div>
);

// --- NEW COMPONENT: HERO VIDEO BACKGROUND ---
const HeroVideoBackground = () => (
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
const FilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.08] mix-blend-overlay"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/noise.png")` }}>
    </div>
);

// --- MARKET WATCH SECTION (Secondary Video) ---
const MarketWatchSection = () => {
    return (
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden border-y-4 border-[#5c4d3c] bg-black">
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
                        <SmartImage src="/images/ashneer-grover.png" alt="Market Watch" fit="cover" />
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-600 px-3 py-1 text-white font-mono text-xs font-bold animate-pulse shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            LIVE BROADCAST
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/80 px-4 py-2 border border-[#d4b483] text-[#d4b483] font-mono text-xs md:text-sm">
                            Ashneer Grover
                        </div>
                    </div>
                </motion.div>



                <div className="bg-[#1a1612] p-10 border border-[#5c4d3c] shadow-[10px_10px_0px_#2c241b] relative">
                    <h2 className="text-4xl font-bold mb-6 text-[#d4b483] uppercase tracking-widest border-b border-[#5c4d3c] pb-4">About</h2>
                    <p className="text-lg text-[#a89070] leading-relaxed font-mono mb-6">
                        About...
                    </p>
                    <p className="text-[#d4b483] italic text-xl">
                        "----"
                    </p>
                </div>
                </div>

            </div>
        </div>
    );
};

// --- 4. DESKTOP COMPONENT ---
function SITankDesktop() {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const textY = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <section className="relative w-full min-h-screen bg-[#120f0d] text-[#e8d5b5] font-serif overflow-hidden selection:bg-[#d4b483] selection:text-black">
            <FilmGrain />

            {/* HERO SECTION WITH CUSTOM VIDEO BACKGROUND */}
            <div className="relative min-h-screen flex flex-col pt-20 overflow-hidden">

                {/* REPLACED SVG BACKGROUND WITH VIDEO */}
                <HeroVideoBackground />

                <StockTicker speed={25} />

                <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4">
                    <motion.div style={{ y: textY }}>
                        <div className="mb-4 inline-block border border-[#d4b483] px-4 py-1 text-xs font-mono tracking-[0.3em] uppercase bg-[#2c241b]/80 backdrop-blur-sm">
                            The Big Bull of Tech
                        </div>

                        <h1 className="text-[12vw] leading-[0.8] font-bold text-[#d4b483] drop-shadow-[4px_4px_0px_#5c4d3c] mb-6 tracking-tighter">
                            SITANK
                        </h1>

                        <p className="text-2xl text-[#a89070] font-serif italic mb-12 bg-[#120f0d]/60 px-6 py-2 inline-block rounded-lg backdrop-blur-sm">
                            "Risk Hai Toh Ishq Hai"
                        </p>

                        <div className="flex gap-6 justify-center">
                            <button
                                onClick={() => navigate('/register')}
                                className="px-10 py-4 bg-[#d4b483] text-[#120f0d] font-mono font-bold tracking-widest hover:bg-[#c2a270] transition-colors border-2 border-[#d4b483] shadow-[4px_4px_0px_#5c4d3c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                            >
                                INVEST NOW
                            </button>
                        </div>
                    </motion.div>
                </div>

                <StockTicker direction="right" speed={30} />
            </div>

            <MarketWatchSection />

            <div className="relative z-20 bg-[#120f0d] border-t border-[#5c4d3c]">
                <div className="max-w-[1400px] mx-auto px-8 py-32">

                    {/* ABOUT */}
                    <div className="mb-40 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-[#1a1612] p-10 border border-[#5c4d3c] shadow-[10px_10px_0px_#2c241b] relative">
                            <div className="absolute top-4 right-4 text-red-500 border-2 border-red-500 px-2 py-1 font-mono text-sm font-bold rotate-12 opacity-80">CONFIDENTIAL</div>
                            <h2 className="text-4xl font-bold mb-6 text-[#d4b483] uppercase tracking-widest border-b border-[#5c4d3c] pb-4">The Master Plan</h2>
                            <p className="text-lg text-[#a89070] leading-relaxed font-mono mb-6">
                                SITANK is the biggest IPO in the tech world. A 24-hour high-stakes trading floor where developers, like brokers, bid with their code.
                            </p>
                            <p className="text-[#d4b483] italic text-xl">
                                "Success kya hai? Failure ke baad ka chapter."
                            </p>
                        </div>

                        <div className="relative h-[400px] border-4 border-[#2c241b] bg-[#1a1612] p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <SmartImage src="/images/sitnovate/about.jpg" alt="About" fit="cover" />
                        </div>
                    </div>

                    {/* FACILITIES & PRIZES */}
                    <div className="mb-40">
                        <h2 className="text-center text-5xl font-bold mb-16 text-[#d4b483] uppercase tracking-tighter">Market Assets</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-[#1a1612] border border-[#5c4d3c] p-10 relative group hover:bg-[#201c18] transition-colors">
                                <div className="absolute -top-3 -left-3 bg-[#d4b483] text-[#120f0d] px-3 py-1 font-mono font-bold text-sm shadow-[4px_4px_0px_black]">INFRASTRUCTURE</div>
                                <h3 className="text-3xl font-bold text-[#d4b483] mb-8 mt-4">Infrastructure</h3>
                                <div className="grid grid-cols-2 gap-6 font-mono text-[#a89070]">
                                    {["High-Speed WiFi", "Power Grid", "24/7 Rations", "Rest Cabins"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-green-500">✔</span> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-[#1a1612] border border-[#5c4d3c] p-10 relative group hover:bg-[#201c18] transition-colors">
                                <div className="absolute -top-3 -left-3 bg-[#d4b483] text-[#120f0d] px-3 py-1 font-mono font-bold text-sm shadow-[4px_4px_0px_black]">RETURNS</div>
                                <h3 className="text-3xl font-bold text-[#d4b483] mb-8 mt-4">Dividends</h3>
                                <div className="grid grid-cols-2 gap-6 font-mono text-[#a89070]">
                                    {["₹1 Lakh+ Pool", "Mentorship", "Stocks (Swag)", "Certificates"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-green-500">▲</span> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HIGHLIGHTS MARQUEE */}
                    <div className="mb-40 overflow-hidden">
                        <h2 className="text-center text-5xl font-bold mb-4 text-[#d4b483] uppercase tracking-tighter">Market Trends '25</h2>
                        <div className="text-center font-mono text-[#5c4d3c] mb-12">HISTORICAL DATA REEL</div>

                        <div className="w-full relative border-y-4 border-[#2c241b] bg-black py-8 group">
                            <motion.div
                                className="flex gap-8 w-max pl-4"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                                style={{ cursor: "grab" }}
                                whileHover={{ animationPlayState: "paused" }}
                            >
                                {MARQUEE_DATA.map((img, idx) => (
                                    <div key={idx} className="relative w-80 aspect-[4/3] bg-white p-2 shadow-[5px_5px_15px_rgba(0,0,0,0.5)] flex-shrink-0">
                                        <div className="h-full w-full relative overflow-hidden bg-black">
                                            <SmartImage src={`/images/sitnovate/${img.index}.${img.ext}`} alt="Trend" fit="cover" />
                                        </div>
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#d4b483]/80 opacity-80 rotate-1"></div>
                                        <p className="text-black font-mono text-xs text-center mt-1">FIG_0{img.index}.DAT</p>
                                    </div>
                                ))}
                            </motion.div>

                            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#120f0d] to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#120f0d] to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* SPONSORS */}
                    <div className="mb-40">
                        <h2 className="text-center text-5xl font-bold mb-16 text-[#d4b483] uppercase tracking-tighter">Institutional Investors</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {SPONSORS_DATA.map((sp, i) => (
                                <div key={i} className="bg-[#1a1612] border border-[#5c4d3c] p-6 flex flex-col items-center justify-center hover:border-[#d4b483] transition-colors group">
                                    <div className="w-full h-20 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img src={`/images/sponsors/${sp.logo}`} alt={sp.name} className="w-full h-full object-contain" loading="lazy" />
                                    </div>
                                    <h4 className="text-[#d4b483] font-bold font-mono text-xs uppercase">{sp.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TEAM */}
                    <div className="mb-40">
                        <h2 className="text-center text-5xl font-bold mb-16 text-[#d4b483] uppercase tracking-tighter">Board of Directors</h2>
                        <div className="flex flex-wrap justify-center gap-10 mb-20">
                            {STUDENT_DATA.map((f, i) => (
                                <div key={i} className="w-80 bg-[#e8d5b5] text-[#120f0d] p-6 shadow-[8px_8px_0px_#5c4d3c] border-2 border-[#120f0d] text-center">
                                    <div className="w-24 h-24 mx-auto rounded-full bg-[#120f0d] border-4 border-[#120f0d] flex items-center justify-center text-4xl font-bold text-[#d4b483] mb-4">
                                        {f.name.charAt(0)}
                                    </div>
                                    <h3 className="text-xl font-bold uppercase">{f.name}</h3>
                                    <p className="text-xs font-mono font-bold mt-1 uppercase border-t border-black pt-2">{f.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center py-20 border-t border-[#5c4d3c]">
                        <h2 className="text-4xl font-bold text-[#d4b483] mb-8">Ready to Close the Deal?</h2>
                        <button
                            onClick={() => navigate('/register')}
                            className="px-12 py-5 bg-[#22c55e] text-[#120f0d] font-mono font-bold tracking-widest uppercase hover:bg-[#16a34a] transition-colors shadow-[6px_6px_0px_#120f0d]"
                        >
                            OPEN DEMAT ACCOUNT
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

// --- 5. MOBILE COMPONENT ---
function SITankMobile() {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-screen bg-[#120f0d] text-[#e8d5b5] pt-20 pb-20 px-4 font-serif overflow-hidden">
            <FilmGrain />
            <StockTicker speed={15} />

            {/* MOBILE HERO WITH VIDEO BG */}
            <div className="relative h-[80vh] w-full overflow-hidden border-b-4 border-[#5c4d3c] mb-12">
                <HeroVideoBackground />
                <div className="absolute inset-0 flex flex-col justify-center px-6 z-10">
                    <div className="text-[#5c4d3c] text-xs font-mono tracking-[0.2em] uppercase mb-2 bg-[#d4b483] inline-block px-2">BSE: STNK</div>
                    <h1 className="text-6xl font-bold text-[#d4b483] mb-2 uppercase leading-none drop-shadow-md">SITANK</h1>
                    <p className="text-[#a89070] italic mt-2 text-lg bg-black/60 inline-block px-2">"Locha, Lafda aur Jalebi Fafda"</p>
                </div>
            </div>

            <div className="relative z-10">
                {/* Market Watch (Secondary Video) */}
                <div className="mb-12 border-4 border-[#5c4d3c] bg-black shadow-xl">
                    <MarketWatchSection />
                </div>

                {/* About */}
                <div className="mb-12 bg-[#e8d5b5] text-[#120f0d] p-6 shadow-[5px_5px_0px_#2c241b] relative rotate-1">
                    <div className="absolute -top-3 left-0 bg-red-600 text-white text-[10px] px-2 py-1 font-bold font-mono">TOP SECRET</div>
                    <h2 className="text-xl font-bold mb-4 font-mono uppercase border-b-2 border-black pb-2">The Scheme</h2>
                    <p className="text-sm leading-relaxed mb-4 font-mono">
                        SITANK is the ultimate 24-hour trading session for coders. High risk, high reward.
                    </p>
                    <div className="flex justify-between text-xs font-bold font-mono">
                        <span>ASSETS: WIFI, FOOD</span>
                        <span>ROI: 100%</span>
                    </div>
                </div>

                {/* Highlights (Mobile Marquee) */}
                <div className="mb-12 -mx-4 overflow-hidden">
                    <h2 className="text-xl font-bold text-[#d4b483] mb-6 font-mono border-l-4 border-green-500 pl-3 ml-4">PAST TRENDS</h2>
                    <div className="bg-black py-6 border-y-2 border-[#2c241b]">
                        <motion.div
                            className="flex gap-4 w-max pl-4"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                        >
                            {MARQUEE_DATA.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="w-64 aspect-video bg-white p-1 pb-4 shadow-lg flex-shrink-0"
                                >
                                    <div className="h-full w-full bg-black">
                                        <SmartImage src={`/images/sitnovate/${img.index}.${img.ext}`} alt="Trend" fit="cover" />
                                    </div>
                                    <p className="text-black font-mono text-[10px] text-center mt-1">REC_{img.index}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Sponsors */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-[#d4b483] mb-6 font-mono border-l-4 border-blue-500 pl-3">SYNDICATE</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {SPONSORS_DATA.map((sp, i) => (
                            <div key={i} className="bg-[#1a1612] p-3 border border-[#5c4d3c] text-center">
                                <div className="h-10 w-full flex items-center justify-center mb-2 grayscale opacity-70">
                                    <img src={`/images/sponsors/${sp.logo}`} alt={sp.name} className="w-full h-full object-contain" />
                                </div>
                                <p className="text-[10px] text-[#5c4d3c] font-mono">{sp.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div>
                    <h2 className="text-xl font-bold text-[#d4b483] mb-6 font-mono border-l-4 border-red-500 pl-3">BOARD MEMBERS</h2>
                    <div className="space-y-2">
                        {STUDENT_DATA.map((f, i) => (
                            <div key={i} className="bg-[#1a1612] p-3 flex justify-between items-center border-b border-[#2c241b]">
                                <span className="text-sm font-bold text-[#d4b483]">{f.name}</span>
                                <span className="text-[10px] text-[#5c4d3c] uppercase">{f.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 mb-12 text-center">
                    <button
                        onClick={() => navigate('/register')}
                        className="w-full px-8 py-4 bg-[#22c55e] text-[#120f0d] font-mono font-bold tracking-widest shadow-[4px_4px_0px_#d4b483] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                        BUY STOCKS
                    </button>
                </div>
            </div>
        </section>
    );
}

// --- 6. EXPORT ---
export default function SITank() {
    const { isMobile } = useBreakpoint();

    return (
        <>
            <SEO title="SITANK 2026 - The Big Bull" description="Risk Hai Toh Ishq Hai. Join the hackathon." url="https://sitnovate.vercel.app" />
            <div className="flex min-h-svh flex-col bg-[#120f0d] text-[#e8d5b5]">
                {isMobile ? (
                    <>
                        <ProgressiveBlur direction="top" className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none" blurIntensity={1} />
                        <Sidebar />
                        <SITankMobile />
                        <Footer />
                    </>
                ) : (
                    <>
                        <NavBar />
                        <main className="w-full">
                            <SITankDesktop />
                            <Footer />
                        </main>
                    </>
                )}
            </div>
        </>
    );
}