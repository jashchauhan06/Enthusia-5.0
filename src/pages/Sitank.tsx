import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router";
import {
    SmartImage,
    MARQUEE_DATA,
    STUDENT_DATA,
    StockTicker,
    HeroVideoBackground,
    FilmGrain,
    MarketWatchSection,
    FAQSection
} from "@/sections/sitank/shared";
import { SITankMobile } from "@/sections/sitank-mobile";
import { useEffect, useState } from "react";

// --- 4. DESKTOP COMPONENT ---
function SITankDesktop() {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    const textY = useTransform(scrollY, [0, 500], [0, 100]);
    const [timeRemaining, SetTimeRemaining] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        sec: 0
    })


    const handleTimeout = () => {

        const registrationOpensOn: Date = new Date(2026, 0, 14, 23, 59, 59)
        const currentDate = new Date(Date.now())
        SetTimeRemaining({
            days: registrationOpensOn.getDate() - currentDate.getDate(),
            hours: registrationOpensOn.getHours() - currentDate.getHours(),
            minutes: registrationOpensOn.getMinutes() - currentDate.getMinutes(),
            sec: registrationOpensOn.getSeconds() - currentDate.getSeconds()
        })

    }

    useEffect(() => {
        const id = setInterval(handleTimeout, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])


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
                            SITANK 2.0
                        </h1>

                        {/* <p className="text-2xl text-[#a89070] font-serif italic mb-12 bg-[#120f0d]/60 px-6 py-2 inline-block rounded-lg backdrop-blur-sm">
                            
                        </p> */}

                        <div className="flex gap-6 justify-center">
                            <button
                                onClick={() => navigate('/register')}
                                className="px-10 py-4 bg-[#d4b483] text-[#120f0d] font-mono font-bold tracking-widest hover:bg-[#c2a270] transition-colors border-2 border-[#d4b483] shadow-[4px_4px_0px_#5c4d3c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                            >
                                INVEST NOW
                            </button>
                            <button
                                onClick={() => navigate('https://enthusia-5-0.netlify.app/#techfest-events')}
                                className="px-10 py-4 bg-[#d4b483] text-[#120f0d] font-mono font-bold tracking-widest hover:bg-[#c2a270] transition-colors border-2 border-[#d4b483] shadow-[4px_4px_0px_#5c4d3c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                            >
                                Go Back
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
                    <div className="flex flex-col mb-40">
                        <div className="mb-20 grid lg:grid-cols-2 gap-16 items-center">
                            <div className="bg-[#1a1612] p-10 border border-[#5c4d3c] shadow-[10px_10px_0px_#2c241b] relative">
                                <div className="absolute top-4 right-4 text-red-500 border-2 border-red-500 px-2 py-1 font-mono text-sm font-bold rotate-12 opacity-80">CONFIDENTIAL</div>
                                <h2 className="text-4xl font-bold mb-6 text-[#d4b483] uppercase tracking-widest border-b border-[#5c4d3c] pb-4">The Master Plan</h2>
                                <p className="text-lg text-[#a89070] leading-relaxed font-mono mb-6">


                                    SITank 2.0 is a dynamic Pitch Deck competition organized by the E-Cell of Symbiosis Institute of Technology, Nagpur aimed at providing startups with a platform to present their innovative ideas to potential investors. This event offers entrepreneurs the unique opportunity to gain exposure, secure funding, and receive invaluable mentorship from industry leaders. By connecting startups with investors, mentors, and partners, SITank fosters a thriving entrepreneurial ecosystem at SIT and beyond, encouraging the growth of groundbreaking businesses and empowering the next generation of innovators. It’s not just a competition; it’s a gateway to transforming ideas into impactful ventures.
                                </p>
                            </div>

                            <div className="relative h-[400px] border-4 border-[#2c241b] bg-[#1a1612] p-2 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                <SmartImage src="/images/sitank/1.JPG" alt="About" fit="cover" className="w-full h-full" />
                            </div>
                        </div>


                        <div >
                            <p className="text-center text-5xl font-bold text-[#d4b483] tracking-tighter mb-10 " style={{fontFamily: "''"}}>Events under SITank 2.0</p>
                            <div className="bg-[#1a1612] mx-20 p-10 border border-[#5c4d3c] shadow-[10px_10px_0px_#2c241b] relative">
                                <div className="flex gap-3">
                                    <div className="w-full">
                                        <h2 className="text-4xl font-bold mb-6 text-[#d4b483] uppercase tracking-widest border-b border-[#5c4d3c] pb-4">Pitch to win</h2>
                                        <p className="text-lg text-[#a89070] leading-relaxed font-mono mb-6">
                                            <span id="flex event-1 w-full">
                                                <ul className="flex gap-2 flex-col list-disc ">

                                                    <li>

                                                        Present your startup to a
                                                        panel of judges
                                                    </li>
                                                    <li>

                                                        Focus on market fit,
                                                        scalability & revenue
                                                    </li>
                                                    <li>

                                                        Real VC-style pitching
                                                        experience
                                                    </li>
                                                    <li>

                                                        Opportunity for
                                                        mentorship & investment
                                                        exposure
                                                    </li>
                                                </ul>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="h-full w-1 bg-[#a89070]"></div>
                                    <div className="w-full">
                                        <h2 className="text-4xl font-bold mb-6 text-[#d4b483] uppercase tracking-widest border-b border-[#5c4d3c] pb-4">Ideathon</h2>
                                        <p className="text-lg text-[#a89070] leading-relaxed font-mono mb-6">
                                            <span id="flex event-1">
                                                <ul className="flex gap-2 flex-col list-disc">

                                                    <li>

                                                        Build solutions for realworld problem statements
                                                    </li>
                                                    <li>

                                                        Convert ideas into
                                                        Minimum Viable Products
                                                    </li>
                                                    <li>

                                                        Compete on innovation +
                                                        execution
                                                    </li>
                                                    <li>

                                                        Learn how startups are
                                                        actually built
                                                    </li>
                                                </ul>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                        <h2 className="text-center text-5xl font-bold mb-4 text-[#d4b483] uppercase tracking-tighter">Event Highlights</h2>
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
                                            <SmartImage src={`/images/sitank/${img.index}.${img.ext}`} alt="Trend" fit="cover" />
                                        </div>
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#d4b483]/80 opacity-80 rotate-1"></div>

                                    </div>
                                ))}
                            </motion.div>

                            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-[#120f0d] to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#120f0d] to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>



                    {/* TEAM */}
                    <div className="mb-40">
                        <h2 className="text-center text-5xl font-bold mb-16 text-[#d4b483] uppercase tracking-tighter">Our Team</h2>
                        <div className="flex flex-wrap justify-center gap-10 mb-20">
                            {STUDENT_DATA.map((f, i) => (
                                <div key={i} className="w-80 bg-[#e8d5b5] text-[#120f0d] p-6 shadow-[8px_8px_0px_#5c4d3c] border-2 border-[#120f0d] text-center">
                                    <div className="w-24 h-24 mx-auto rounded-full bg-[#120f0d] border-4 border-[#120f0d] overflow-hidden flex items-center justify-center text-4xl font-bold text-[#d4b483] mb-4">
                                        {f.image ? (
                                            <SmartImage src={f.image} alt={f.name} fit="cover" className="w-full h-full" />
                                        ) : (
                                            f.name.charAt(0)
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold uppercase">{f.name}</h3>
                                    <p className="text-xs font-mono font-bold mt-1 uppercase border-t border-black pt-2">{f.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                    <FAQSection />

                    {/* CTA */}
                    <div className="text-center py-20 border-t border-[#5c4d3c]">
                        <h2 className="text-4xl font-bold text-[#d4b483] mb-8">Ready to Close the Deal?</h2>
                        {/* <button
                            onClick={() => navigate('/register')}
                            className="px-12 py-5 bg-[#22c55e] text-[#120f0d] font-mono font-bold tracking-widest uppercase hover:bg-[#16a34a] transition-colors shadow-[6px_6px_0px_#120f0d]"
                        >
                            Register Now
                        </button> */}
                        <button
                            disabled
                            onClick={() => navigate('/register')}
                            className="px-12 py-5 bg-[#57ff95] cursor-no-drop w-80 text-[#120f0d] font-mono font-bold tracking-widest uppercase transition-colors shadow-[6px_6px_0px_#120f0d] rounded"
                        >
                            Registeration Opens in:
                            <span className="text-red-800">
                                {`${timeRemaining.days} Days ${timeRemaining.hours} hours ${timeRemaining.minutes} min ${timeRemaining.sec} sec`}
                            </span>
                        </button>
                    </div>

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
            <SEO title="SITANK 2.0 - The Big Bull" description="Risk Hai Toh Ishq Hai. Join the hackathon." url="https://sitnovate.vercel.app" />
            <div className="flex min-h-svh flex-col bg-[#120f0d] text-[#e8d5b5]">
                {isMobile ? (
                    <>
                        <ProgressiveBlur direction="top" className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none" blurIntensity={1} />
                        <Sidebar />
                        <SITankMobile />
                        <Footer event_name={"SITank"}/>
                    </>
                ) : (
                    <>
                        <NavBar />
                        <main className="w-full">
                            <SITankDesktop />
                            <Footer event_name={"SITank 2.0"}/>
                        </main>
                    </>
                )}
            </div>
        </>
    );
}