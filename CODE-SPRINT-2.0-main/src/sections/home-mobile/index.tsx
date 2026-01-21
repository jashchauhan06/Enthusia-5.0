import { useRef } from "react";
import { useNavigate } from "react-router";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { ShineBorder } from "@/components/magicui/shine-border";
import { AvailabilityStatus } from "@/sections/home/content/availability-status";
import { HomeMobileBeams } from "./home-mobile-beams";

export function MobileHome() {
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Main home page should always show ENTHUSIA 5.0 (current event)
    // No scroll-based switching needed here

    const handleRegisterClick = () => {
      navigate('/techfest');
    };

    const handleTechFestClick = () => {
      navigate('/techfest');
    };

    const handleCulturalFestClick = () => {
      navigate('/cultural-fest');
    };

    // Dynamic content - always show ENTHUSIA 5.0 for main home page
    const content = {
      title: 'ENTHUSIA 5.0', 
      subtitle: 'Three-day techno-cultural fest',
      date: '12 – 14 February 2026 • SIT Nagpur',
      description: 'A three-day experience where innovation, creativity, competition, and celebration collide.'
    };

    return (
      <section 
        id="home-mobile" 
        className="relative w-full flex flex-col items-center justify-top mt-26 px-2.5"
      >
        {/* Container with CSS class for pseudo-element background */}
        <div 
          ref={containerRef}
          className="mobile-home-container relative w-full mx-4 p-8 pb-14 flex flex-col items-center"
        >
          {/* Animated Beams Component */}
          <HomeMobileBeams containerRef={containerRef} />

          {/* Header */}
          <h1 className="font-heading text-center text-[clamp(1.8rem,6vw,2.5rem)] leading-[1] mb-1 relative z-10">
              <TextShimmer 
                  as="span"
                  className="block dark:[--base-color:#f2f2f2] dark:[--base-gradient-color:#B2B2B2]"
                  duration={1.5}
                  spread={5}
              >
                  {content.title}
              </TextShimmer>
          </h1>
    
          {/* Title */}
          <h2 className="font-body font-light text-[#b3b3b3] text-center text-[clamp(0.6rem,2.5vw,0.9rem)] tracking-[0.3em] mb-2 uppercase relative z-10">
            {content.subtitle}
          </h2>

          {/* Date and Location */}
          <p className="font-body font-light text-[#b3b3b3] text-center text-[clamp(0.6rem,2.5vw,0.9rem)] mb-6 relative z-10">
            {content.date}
          </p>
    
          {/* Description Paragraph */}
          <p className="font-body text-center text-sm leading-relaxed text-[#b3b3b3] max-w-xs mb-8 relative z-10">
            {content.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 mb-8 relative z-10">
            <button 
              onClick={handleTechFestClick}
              className="relative overflow-hidden rounded-full backdrop-blur-sm font-heading border px-8 py-2 text-foreground"
            >
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <div className="mt-0.5">explore techfest</div>
            </button>

            <button 
              onClick={handleCulturalFestClick}
              className="relative overflow-hidden rounded-full backdrop-blur-sm font-heading border px-8 py-2 text-foreground"
            >
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <div className="mt-0.5">explore cultural fest</div>
            </button>

            <button 
              onClick={handleRegisterClick}
              className="relative overflow-hidden rounded-full backdrop-blur-sm font-heading border px-10 py-2 text-foreground"
            >
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <div className="mt-0.5">register now</div>
            </button>
          </div>

          {/* Availability Status */}
          <div className="relative z-10">
            <AvailabilityStatus />
          </div>
        </div>
      </section>
    );
}
