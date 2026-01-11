import React, { useState, useEffect } from "react";
import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";
import { STUDENT_DATA } from "@/sections/sitank/shared";

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
                className={`w-full h-full transition-all duration-700 grayscale hover:grayscale-0 contrast-125 ${fit === "contain" ? "object-contain p-2" : "object-cover"
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
    { index: 1, ext: 'JPG' }, { index: 2, ext: 'JPG' }, { index: 3, ext: 'jpg' },
    { index: 4, ext: 'jpg' }, { index: 5, ext: 'png' }, { index: 6, ext: 'png' }
];
const MARQUEE_DATA = [...HIGHLIGHTS_DATA, ...HIGHLIGHTS_DATA];

const SPONSORS_DATA = [
    { name: "Pizza Hut", logo: "pizzahut.png", category: "Food Partner" },
    { name: "MIA by Tanishq", logo: "MIA.png", category: "Jewelry Partner" },
    { name: "Insterra", logo: "Insterra.webp", category: "Tech Partner" },
    { name: "PB Creation", logo: "PB.png", category: "Creative Partner" },
    { name: "Devfolio", logo: "dev.png", category: "Platform Partner" },
    { name: "ETH India", logo: "eth.png", category: "Blockchain Partner" },
    { name: "Polygon", logo: "poly.png", category: "Web3 Partner" },
    { name: "Unstop", logo: "un.png", category: "Hiring Partner" },
    { name: "UCN", logo: "R.png", category: "Media Partner" }
];


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
                    <span>CODE SPRINT <span className="text-black">⚠ IN PROGRESS</span></span>
                    <span>BELLA CIAO <span className="text-black">♫</span></span>
                    <span>TIME REMAINING <span className="text-black">24:00:00</span></span>
                    <span>SYSTEM HACKED <span className="text-black">⚠</span></span>
                </React.Fragment>
            ))}
        </motion.div>
    </div>
);

// Hero Video Background (Dark & Red)
const HeroVideoBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
            style={{ filter: "grayscale(100%) contrast(1.5) brightness(0.4)" }}
        >
            {/* Placeholder: Abstract red/dark footage */}
            <source src="https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-red-900/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
    </div>
);

// --- MARKET WATCH SECTION (CCTV STYLE) ---

// --- 4. DESKTOP COMPONENT ---
function CodeSprintDesktop() {
    const navigate = useNavigate();
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
                            CODE SPRINT
                        </h1>

                        <p className="text-2xl text-red-500 font-mono mb-12 bg-black/80 px-6 py-2 inline-block">
                            "The plan is designed to survive."
                        </p>

                        <div className="flex gap-6 justify-center">
                            <button
                                onClick={() => navigate('/register')}
                                className="px-12 py-5 bg-red-600 text-white font-black tracking-widest hover:bg-red-700 transition-colors border-b-4 border-red-900 active:border-b-0 active:translate-y-1"
                            >
                                JOIN THE HEIST
                            </button>
                        </div>
                    </motion.div>
                </div>

                <HeistTicker speed={25} />
            </div>

            <div className="relative z-20 bg-zinc-900 border-t border-red-900">
                <div className="max-w-[1400px] mx-auto px-8 py-32">

                    <div className="mb-40 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-black p-10 border-l-8 border-red-600 shadow-2xl relative">
                            <h2 className="text-5xl font-black mb-6 text-white uppercase tracking-tighter italic">The Master Plan</h2>
                            <p className="text-lg text-zinc-400 leading-relaxed font-mono mb-6">
                                CODE SPRINT is not just a hackathon. It's a calculated operation. 24 hours. One objective. Complete the code before they catch us.
                            </p>
                            <p className="text-red-500 italic text-xl font-bold">
                                "O Bella Ciao, Bella Ciao, Bella Ciao Ciao Ciao!"
                            </p>
                        </div>

                        <div className=" h-[500px] border-4 border-white bg-black p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 grayscale hover:grayscale-0">
                            <SmartImage src="/images/sitnovate/about.jpg" alt="About" className="object-cover h-full w-full" />
                        </div>
                    </div>

                    {/* FACILITIES & PRIZES */}
                    <div className="mb-40">
                        <h2 className="text-center text-6xl font-black mb-16 text-white uppercase tracking-tighter">The Blueprint</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-black border border-zinc-800 p-10 relative group hover:border-red-600 transition-colors">
                                <div className="absolute -top-4 left-10 bg-white text-black px-4 py-1 font-bold text-sm uppercase">Hideout Specs</div>
                                <h3 className="text-4xl font-bold text-red-600 mb-8 mt-4 uppercase">Facilities</h3>
                                <div className="grid grid-cols-2 gap-6 font-mono text-zinc-400">
                                    {["Secure WiFi", "Power Grid", "Rations (Food)", "Bunks"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-red-500">▶</span> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-black border border-zinc-800 p-10 relative group hover:border-red-600 transition-colors">
                                <div className="absolute -top-4 left-10 bg-red-600 text-white px-4 py-1 font-bold text-sm uppercase">The Loot</div>
                                <h3 className="text-4xl font-bold text-white mb-8 mt-4 uppercase">The Vault</h3>
                                <div className="grid grid-cols-2 gap-6 font-mono text-zinc-400">
                                    {["₹1 Lakh+ Cash", "Mentorship", "Masks & Swag", "Certificates"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <span className="text-red-500">▶</span> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HIGHLIGHTS MARQUEE */}
                    <div className="mb-40 overflow-hidden">
                        <h2 className="text-center text-6xl font-black mb-4 text-white uppercase tracking-tighter">Evidence Board</h2>
                        <div className="text-center font-mono text-red-600 mb-12 uppercase">/// Previous Operations ///</div>

                        <div className="w-full relative border-y-4 border-red-600 bg-red-600/10 py-8 group">
                            <motion.div
                                className="flex gap-8 w-max pl-4"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                                style={{ cursor: "grab" }}
                                whileHover={{ animationPlayState: "paused" }}
                            >
                                {MARQUEE_DATA.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="relative w-80 aspect-[4/3] bg-white p-2 shadow-2xl flex-shrink-0 transform even:-rotate-2 odd:rotate-2"
                                    >
                                        <div className="h-full w-full relative overflow-hidden bg-black">
                                            <SmartImage src={`/images/sitnovate/${img.index}.${img.ext}`} alt="Evidence" fit="cover" />
                                        </div>
                                        <p className="text-black font-mono text-xs text-center mt-1 uppercase font-bold">Exhibit_{String(img.index).padStart(2, '0')}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* SPONSORS */}
                    <div className="mb-40">
                        <h2 className="text-center text-6xl font-black mb-16 text-white uppercase tracking-tighter">The Royal Mint</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {SPONSORS_DATA.map((sp, i) => (
                                <div key={i} className="bg-black border border-zinc-800 p-6 flex flex-col items-center justify-center hover:bg-white hover:text-black transition-colors group duration-500">
                                    <div className="w-full h-20 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                        <img src={`/images/sponsors/${sp.logo}`} alt={sp.name} className="w-full h-full object-contain" loading="lazy" />
                                    </div>
                                    <h4 className="text-zinc-500 group-hover:text-black font-bold font-mono text-xs uppercase">{sp.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TEAM */}
                    <div className="mb-40">
                        <h2 className="text-center text-6xl font-black mb-16 text-white uppercase tracking-tighter">The Resistance</h2>

                        <div className="flex flex-wrap justify-center gap-10 mb-20">
                            {STUDENT_DATA.map((f, i) => (
                                <div key={i} className="w-80 bg-[#e50914] text-white p-6 shadow-[10px_10px_0px_white] border-2 border-white text-center transform hover:-translate-y-2 transition-transform">
                                    <div className="h-24 w-24 mx-auto rounded-full bg-black border-4 border-white flex items-center justify-center text-4xl font-black text-red-600 mb-4">
                                        <SmartImage src={f.image!} alt={`profile-${i}`} className="object-cover h-full w-full rounded-full"/>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase italic">{f.role}</h3>
                                    <p className="text-xs font-mono font-bold mt-2 uppercase border-t border-white/30 pt-2 text-black">{f.name}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="text-center py-20 border-t border-red-900">
                        <h2 className="text-5xl font-black text-white mb-8 uppercase italic">Ready to pull it off?</h2>
                        <button
                            onClick={() => navigate('/register')}
                            className="px-16 py-6 bg-white text-red-600 font-black tracking-widest uppercase hover:bg-zinc-200 transition-colors shadow-[0_0_50px_rgba(229,9,20,0.5)] text-xl skew-x-[-10deg]"
                        >
                            ENTER THE MINT
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

// --- 5. MOBILE COMPONENT ---
function CodeSprintMobile() {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-screen bg-black text-white pt-20 pb-20 px-4 font-sans overflow-hidden">
            <HeistTicker speed={15} />

            {/* MOBILE HERO */}
            <div className="relative h-[80vh] w-full overflow-hidden border-b-8 border-red-600 mb-12 mt-4">
                <HeroVideoBackground />
                <div className="absolute inset-0 flex flex-col justify-center px-6 z-10">
                    <div className="text-white bg-red-600 text-xs font-black tracking-[0.2em] uppercase mb-2 inline-block px-2 py-1 transform -skew-x-12 origin-left">OPERATION: SPRINT</div>
                    <h1 className="text-6xl font-black text-white mb-2 uppercase leading-none drop-shadow-xl italic">CODE<br />SPRINT</h1>
                    <p className="text-zinc-300 italic mt-2 text-lg font-mono">"One plan. No mistakes."</p>
                </div>
            </div>

            <div className="relative z-10">


                {/* About */}
                <div className="mb-12 bg-zinc-900 border-l-4 border-red-600 p-6 shadow-xl">
                    <h2 className="text-3xl font-black text-white mb-4 uppercase italic">The Plan</h2>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4 font-mono">
                        CODE SPRINT is the heist of the century. 24 hours to crack the code and open the vault.
                    </p>
                    <div className="flex justify-between text-xs font-bold font-mono text-red-500">
                        <span>STATUS: ACTIVE</span>
                        <span>RISK: EXTREME</span>
                    </div>
                </div>

                {/* Highlights */}
                <div className="mb-12 -mx-4 overflow-hidden">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase pl-8 italic">Evidence</h2>
                    <div className="bg-red-900/20 py-6 border-y border-red-600">
                        <motion.div
                            className="flex gap-4 w-max pl-4"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                        >
                            {MARQUEE_DATA.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="w-64 aspect-video bg-white p-1 pb-4 shadow-lg flex-shrink-0 transform rotate-1"
                                >
                                    <div className="h-full w-full bg-black">
                                        <SmartImage src={`/images/sitnovate/${img.index}.${img.ext}`} alt="Trend" fit="cover" />
                                    </div>
                                    <p className="text-black font-mono text-[10px] text-center mt-1 uppercase font-bold">FILE_0{img.index}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Sponsors */}
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase italic">Funders</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {SPONSORS_DATA.map((sp, i) => (
                            <div key={i} className="bg-white p-3 border-b-4 border-red-600 text-center">
                                <div className="h-10 w-full flex items-center justify-center mb-2">
                                    <img src={`/images/sponsors/${sp.logo}`} alt={sp.name} className="w-full h-full object-contain" />
                                </div>
                                <p className="text-[10px] text-black font-bold uppercase">{sp.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div>
                    <h2 className="text-3xl font-black text-white mb-6 uppercase italic">The Gang</h2>

                    <div className="mb-6">
                        <h3 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-3 border-b border-white/20 pb-1">Masterminds</h3>
                        <div className="space-y-2">
                            {STUDENT_DATA.map((f, i) => (
                                <div key={i} className="bg-zinc-900 p-4 flex justify-between items-center border-l-2 border-red-600">
                                    <span className="text-sm font-black text-white uppercase italic">{f.role}</span>
                                    <span className="text-[10px] text-zinc-500 uppercase">{f.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 mb-12 text-center">
                    <button
                        onClick={() => navigate('/register')}
                        className="w-full px-8 py-4 bg-red-600 text-white font-black tracking-widest shadow-[4px_4px_0px_white] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase"
                    >
                        JOIN THE HEIST
                    </button>
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
            <SEO title="CODE SPRINT 2026 - The Heist" description="Join the resistance. Code the future." url="https://sitnovate.vercel.app" />
            <div className="flex min-h-svh flex-col bg-black text-white">
                {isMobile ? (
                    <>
                        <ProgressiveBlur direction="top" className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none" blurIntensity={1} />
                        <Sidebar />
                        <CodeSprintMobile />
                        <Footer />
                    </>
                ) : (
                    <>
                        <NavBar />
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