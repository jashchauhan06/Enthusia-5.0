import { useRef, useEffect } from "react";
import gsap from "gsap";
import type { ProjectData } from "../types";

interface RightBarProps {
  projectData: ProjectData;
}

export function RightBar({ projectData }: RightBarProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const prevProjectDataRef = useRef<ProjectData | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    
    // Check if the projectData has actually changed
    const hasChanged = prevProjectDataRef.current && 
      prevProjectDataRef.current.title !== projectData.title;

    if (hasChanged) {
      // Animate content transition
      const tl = gsap.timeline();
      
      tl
        // Fade out and slide up current content
        .to(content, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.out"
        })
        // Update content happens here (React will re-render)
        .call(() => {
          // Force a re-render by updating the key or triggering a state change
          // The content change happens automatically via React
        })
        // Fade in and slide down new content
        .fromTo(content, 
          { 
            opacity: 0, 
            y: 20 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          }
        );
    } else if (!prevProjectDataRef.current) {
      // Initial render - just fade in
      gsap.fromTo(content, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // Update the previous data reference
    prevProjectDataRef.current = projectData;
  }, [projectData]);

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      <div ref={contentRef} className="flex flex-col h-full">
        {/* Header - Hidden on screens < 1390px */}
        <div className="mb-6 hidden [@media(min-width:1390px)]:block">
          <h3 className="font-heading text-2xl text-foreground mb-2">
            {projectData.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            {projectData.description}
          </p>
        </div>

        {/* Dynamic Sections - Hidden on screens < 1390px */}
        <div className="flex-1 hidden [@media(min-width:1390px)]:block">
          {projectData.sections.map((section, index) => (
            <div key={`${projectData.title}-${section.title}-${index}`} className={index === projectData.sections.length - 1 ? "" : "mb-6"}>
              <h4 className="font-heading text-lg text-foreground mb-2">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={`${projectData.title}-${section.title}-${itemIndex}`} className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Buttons removed */}
        <div className="">
        </div>
      </div>
    </div>
  );
}
