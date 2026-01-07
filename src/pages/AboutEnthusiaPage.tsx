import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { ImageSequenceScroll } from "@/components/ImageSequenceScroll";

import { GlitchText } from "@/components/ui/glitch-text";
import { HoloCard } from "@/components/about/holo-card";
import { TerminalSection } from "@/components/about/terminal-section";
import { ThemeExplainer } from "@/components/about/theme-explainer";
import { VisionSection } from "@/components/about/vision-section";
import { ExpandedArenas } from "@/components/about/expanded-arenas";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutEnthusia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Sync text animations with the pinned scroll sequence of ImageSequenceScroll
      // We know ImageSequenceScroll pins 'image-sequence' for 400%
      // But since we are outside, we can just create a parallel ScrollTrigger on the SAME pinned container wrapper
      // OR we can rely on absolute position text inside the Scroll and identifying they are pinned.

      // Wait! The text elements are INSIDE ImageSequenceScroll in the JSX below. 
      // So they are ALREADY pinned. We just need to toggle their Opacity based on scroll progress.
      // We can use a ScrollTrigger that watches the main container but with 'start' and 'end' matched to the same scrub.
      // Or simpler: Trigger based on the scroll position relative to the viewport.

      // Since the component ImageSequenceScroll pins itself, the "scroll progress" is effectively how far we have scrolled *past* the start.

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // This wrapper contains the pinned element
          start: "top top",
          end: "+=400%", // Must match ImageSequenceScroll pin duration
          scrub: true,
        }
      });

      // 0-20%: Text 1 visible
      tl.fromTo(textRef1.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.1 }, 0)
        .to(textRef1.current, { opacity: 0, y: -50, duration: 0.1 }, 0.2);

      // 30-50%: Text 2 visible
      tl.fromTo(textRef2.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.1 }, 0.3)
        .to(textRef2.current, { opacity: 0, scale: 1.2, duration: 0.1 }, 0.5);

      // 60-80%: Text 3 visible
      tl.fromTo(textRef3.current, { opacity: 0, letterSpacing: "0em" }, { opacity: 1, letterSpacing: "0.2em", duration: 0.1 }, 0.6)
        .to(textRef3.current, { opacity: 0, duration: 0.1 }, 0.8);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full relative">
      <ImageSequenceScroll className="h-screen">
        {/* Scroll-tied Narrative Layer */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center">

          {/* Text Phase 1 */}
          <div ref={textRef1} className="absolute text-center opacity-0">
            <h1 className="font-heading text-6xl md:text-8xl text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              <GlitchText text="INITIATING" />
            </h1>
            <p className="font-mono text-xl text-cyan-400 tracking-widest">SEQUENCE_5.0_START</p>
          </div>

          {/* Text Phase 2 */}
          <div ref={textRef2} className="absolute text-center opacity-0 max-w-4xl px-4">
            <h2 className="font-heading text-4xl md:text-6xl text-white mb-6 uppercase">
              Where Logic Meets <span className="text-pink-500">Chaos</span>
            </h2>
            <p className="font-body text-xl md:text-2xl text-gray-300">
              A parallel universe where reality glitches and imagination takes control.
            </p>
          </div>

          {/* Text Phase 3 */}
          <div ref={textRef3} className="absolute text-center opacity-0">
            <h2 className="font-heading text-5xl md:text-7xl text-white uppercase tracking-tighter">
              <GlitchText text="TWO WORLDS" />
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
                COLLIDE
              </span>
            </h2>
          </div>

        </div>
      </ImageSequenceScroll>

      {/* Post-Scroll Grid Section */}
      <div className="relative z-10 bg-black py-32 px-4 border-t border-white/10 min-h-screen flex items-center">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center mb-24">
            <h2 className="font-heading text-4xl md:text-6xl text-white mb-6">
              <GlitchText text="CHOOSE YOUR ARENA" />
            </h2>
            <p className="font-mono text-cyan-500/80 text-lg">SELECT_PATHWAY // ENTER_SIMULATION</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <HoloCard title="TECHFEST // CORE_SYSTEM" className="bg-gradient-to-br from-cyan-900/20 to-black">
              <div className="space-y-4">
                <p className="text-lg">Compete in high-stakes hackathons, debug reality, and engineer the future.</p>
                <ul className="font-mono text-sm text-cyan-300/80 space-y-2">
                  <li>{">"} HACKATHONS_LOADED</li>
                  <li>{">"} ROBOWARS_READY</li>
                  <li>{">"} CODE_BATTLES_ACTIVE</li>
                </ul>
              </div>
            </HoloCard>

            <HoloCard title="CULTURAL // GLITCH_ART" className="bg-gradient-to-br from-pink-900/20 to-black hover:border-pink-500/50 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]">
              <div className="space-y-4">
                <p className="text-lg">Experience the symphony of chaos. Dance, music, and art that defies logic.</p>
                <ul className="font-mono text-sm text-pink-300/80 space-y-2">
                  <li>{">"} CONCERT_SYNCED</li>
                  <li>{">"} DANCE_BATTLE_INIT</li>
                  <li>{">"} FASHION_RENDERED</li>
                </ul>
              </div>
            </HoloCard>
          </div>
        </div>
      </div>

      {/* Narrative & Theme */}
      {/* Narrative & Theme */}
      <ThemeExplainer />

      {/* Vision */}
      <VisionSection />

      {/* Deep Dive into Arenas (Tech & Cultural) */}
      <ExpandedArenas />

      {/* Interactive Terminal */}
      <TerminalSection />
    </div>
  );
}

import { AboutEnthusiaMobile } from "@/components/about/AboutEnthusiaMobile";

export function AboutEnthusiaPage() {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return (
      <>
        <SEO
          title="About Enthusia 5.0 - Enter the Parallel Fest Universe"
          description="Discover Enthusia 5.0, the annual flagship techno-cultural fest of SIT Nagpur. A three-day immersive experience of technology, creativity, and celebration."
          url="https://sitnovate.vercel.app/about-enthusia"
        />
        <div className="flex min-h-svh flex-col">
          <ProgressiveBlur
            direction="top"
            className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
            blurIntensity={1}
          />

          <Sidebar />

          <AboutEnthusiaMobile />

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="About Enthusia 5.0 - Enter the Parallel Fest Universe"
        description="Discover Enthusia 5.0, the annual flagship techno-cultural fest of SIT Nagpur. A three-day immersive experience of technology, creativity, and celebration."
        url="https://sitnovate.vercel.app/about-enthusia"
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <AboutEnthusia />
          <Footer />
        </main>
      </div>
    </>
  );
}