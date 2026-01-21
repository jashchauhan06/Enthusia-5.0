import { useRef, useEffect } from "react";
import gsap from "gsap";

// Event images from ENTHUSIA 4.0
const galleryImages = [
  {
    src: "/images/enthusia/1.png",
    alt: "ENTHUSIA 4.0 Event Photo 1"
  },
  {
    src: "/images/enthusia/2.png",
    alt: "ENTHUSIA 4.0 Event Photo 2"
  },
  {
    src: "/images/enthusia/3.png",
    alt: "ENTHUSIA 4.0 Event Photo 3"
  },
  {
    src: "/images/enthusia/4.png",
    alt: "ENTHUSIA 4.0 Event Photo 4"
  },
  {
    src: "/images/enthusia/5.png",
    alt: "ENTHUSIA 4.0 Event Photo 5"
  },
  {
    src: "/images/enthusia/6.png",
    alt: "ENTHUSIA 4.0 Event Photo 6"
  },
  {
    src: "/images/enthusia/7.png",
    alt: "ENTHUSIA 4.0 Event Photo 7"
  }
];

export function BottomBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;
    
    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    
    // Initial fade in
    gsap.fromTo(container, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // Auto-scroll animation - right to left only
    const scrollWidth = scrollElement.scrollWidth;
    const containerWidth = scrollElement.clientWidth;
    const scrollDistance = scrollWidth - containerWidth;

    if (scrollDistance > 0) {
      // Create infinite right-to-left scrolling
      gsap.fromTo(scrollElement, 
        { scrollLeft: 0 },
        {
          scrollLeft: scrollDistance,
          duration: 20,
          ease: "none",
          repeat: -1,
          repeatDelay: 0,
          onComplete: () => {
            // Reset to start position instantly
            gsap.set(scrollElement, { scrollLeft: 0 });
          }
        }
      );
    }
  }, []);

  return (
    <div className="w-full flex items-start justify-start p-2">
      <div ref={containerRef} className="w-full max-w-full">
        
        {/* Horizontal Scrolling Gallery */}
        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide max-w-full"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-32 h-20 object-cover rounded-lg shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
