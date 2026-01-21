import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
    FilmGrain,
    StockTicker,
    HeroVideoBackground,
    MarketWatchSection,
    SmartImage,
    MARQUEE_DATA,
    SPONSORS_DATA,
    STUDENT_DATA
} from "../sitank/shared";

// --- 5. MOBILE COMPONENT ---
export function SITankMobile() {
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
                    <h1 className="text-6xl font-bold text-[#d4b483] mb-2 uppercase leading-none drop-shadow-md">SITANK 2.0</h1>
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
                        SITANK 2.0 is the ultimate 24-hour trading session for coders. High risk, high reward.
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
        </section >
    );
}
