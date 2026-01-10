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
    { index: 1, ext: 'JPG' }, { index: 2, ext: 'JPG' }, { index: 3, ext: 'jpg' },
    { index: 4, ext: 'jpg' }, { index: 5, ext: 'png' }, { index: 6, ext: 'png' }
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
    { name: "Sunidhi Haware", role: "President" },
    { name: "Prathmesh Raipurkar", role: "Vice President" },
    { name: "Parth Choudhari", role: "Lead" },
    { name: "Jash Chauhan", role: "Web Development Team Lead" },
    { name: "Soumya Mishra", role: "Developer" },
];

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
                            Indian businessman Ashneer Grover is the former co-founder and managing director (MD) of the Indian fintech company BharatPe which he co-founded along with Shashvat Nakrani and Bhavik Koladiya in 2018. Grover also appeared as an investor on the reality TV show called 'Shark Tank India'.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};
