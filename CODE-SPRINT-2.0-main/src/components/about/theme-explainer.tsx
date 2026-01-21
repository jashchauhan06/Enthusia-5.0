import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GlitchText } from "../ui/glitch-text";

gsap.registerPlugin(ScrollTrigger);

export function ThemeExplainer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
            },
        });

        tl.from(textRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-[60vh] flex items-center justify-center bg-black py-20 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50" />
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div ref={textRef} className="relative z-10 max-w-4xl text-center space-y-8">
                <h2 className="font-heading text-4xl md:text-6xl text-white">
                    <GlitchText text="ENTER THE PARALLEL UNIVERSE" className="text-cyan-400" />
                </h2>

                <p className="font-body text-lg md:text-xl text-gray-300 leading-relaxed">
                    Enthusia 5.0 is not just a college fest. It is a <span className="text-white font-bold">Reality Distortion Field</span>.
                </p>

                <p className="font-body text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                    Inspired by fictional worlds and game-like realities, we transform the SIT Nagpur campus into a
                    parallel world of challenges and performances.
                    From <span className="text-cyan-400">24-hour hackathons</span> to <span className="text-pink-500">celebrity nights</span>,
                    every participant chooses a path, levels up skills, and creates unforgettable memories.
                </p>

                <div className="pt-8">
                    <div className="inline-block px-6 py-2 border border-cyan-500/30 rounded-full bg-cyan-900/10 text-cyan-400 font-mono text-sm animate-pulse">
                        System Status: REALITY_OVERWRITTEN
                    </div>
                </div>
            </div>
        </section>
    );
}
