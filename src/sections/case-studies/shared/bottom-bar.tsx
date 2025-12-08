import { useRef, useEffect } from "react";
import gsap from "gsap";

interface BottomBarProps {
  techStack?: any[];
}

const rounds = [
  {
    title: "Round 1: Initial Screening",
    description: "Teams submit their project proposals and ideas. Judges review submissions based on innovation, feasibility, and impact."
  },
  {
    title: "Round 2: Technical Evaluation",
    description: "Selected teams present their technical implementation and demonstrate their working prototypes to the judging panel."
  },
  {
    title: "Round 3: Final Presentation",
    description: "Finalists pitch their complete solutions. Winners are announced based on overall execution, presentation, and innovation."
  }
];

export function BottomBar({ techStack: _techStack }: BottomBarProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const content = contentRef.current;
    
    // Initial render - fade in
    gsap.fromTo(content, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 [@media(min-width:1390px)]:p-6">
      <div ref={contentRef} className="w-full">
        
        {/* Desktop Layout (screens ≥600px) - Three columns */}
        <div className="hidden min-[600px]:grid grid-cols-3 gap-6 w-full">
          {rounds.map((round, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="font-heading text-lg text-foreground">
                {round.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {round.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Layout (screens <600px) - Stacked */}
        <div className="flex min-[600px]:hidden flex-col gap-6 w-full">
          {rounds.map((round, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="font-heading text-base text-foreground">
                {round.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {round.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
