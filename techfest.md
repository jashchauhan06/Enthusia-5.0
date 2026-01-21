import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Terminal, Search, Briefcase, Lightbulb, Zap, Crosshair } from 'lucide-react';

const TechFest = () => {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setCardsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setHasViewed(true);
        }
      },
      { 
        threshold: 0.15 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      id: 1,
      title: "SITNovate 2.0",
      icon: <Rocket className="w-6 h-6" />,
      desc: "24hr Hackathon",
      color: "text-pink-500",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.3)]",
      decor: "border-pink-500/50"
    },
    {
      id: 2,
      title: "CodeSprint 2.0",
      icon: <Terminal className="w-6 h-6" />,
      desc: "Competitive Coding",
      color: "text-cyan-400",
      glow: "shadow-[0_0_15px_rgba(34,211,238,0.3)]",
      decor: "border-cyan-400/50"
    },
    {
      id: 3,
      title: "Stranger Tech",
      icon: <Search className="w-6 h-6" />,
      desc: "Tech Treasure Hunt",
      color: "text-yellow-400",
      glow: "shadow-[0_0_15px_rgba(250,204,21,0.3)]",
      decor: "border-yellow-400/50"
    },
    {
      id: 4,
      title: "SITank 2.0",
      icon: <Briefcase className="w-6 h-6" />,
      desc: "Pitch Deck Comp",
      color: "text-green-500",
      glow: "shadow-[0_0_15px_rgba(34,197,94,0.3)]",
      decor: "border-green-500/50"
    },
    {
      id: 5,
      title: "BuildBrand",
      icon: <Lightbulb className="w-6 h-6" />,
      desc: "Ad Challenge",
      color: "text-purple-500",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
      decor: "border-purple-500/50"
    }
  ];

  return (
    <div className="w-full font-mono overflow-x-hidden">
      <style>{`
        /* ENTRY ANIMATION */
        @keyframes cyber-deal {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.8) skewX(-10deg);
            filter: blur(4px);
          }
          60% {
             transform: translateY(-10px) scale(1.02) skewX(5deg);
             filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) skewX(0);
          }
        }

        /* EXIT ANIMATION (Reverse) */
        @keyframes cyber-undeal {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1) skewX(0);
          }
          40% {
             transform: translateY(-10px) scale(1.02) skewX(5deg);
          }
          100% {
            opacity: 0;
            transform: translateY(100px) scale(0.8) skewX(-10deg);
            filter: blur(4px);
          }
        }
        
        .animate-deal {
          animation: cyber-deal 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-undeal {
          animation: cyber-undeal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* CARD SHAPE */
        .cyber-card-shape {
          clip-path: polygon(
            0 0, 
            100% 0, 
            100% calc(100% - 20px), 
            calc(100% - 20px) 100%, 
            0 100%
          );
        }

        /* TECH CORNERS */
        .tech-corner {
          position: absolute;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .group:hover .tech-corner {
          width: 100%;
          height: 100%;
          opacity: 0.1;
        }
      `}</style>

      {/* --- SCROLL SPACER (Allows you to scroll down to trigger animation) --- */}
      <div className="h-screen w-full flex flex-col items-center justify-center text-gray-500 space-y-4 border-b border-gray-800">
         <p className="text-xl tracking-widest uppercase opacity-50">Website Content Here</p>
         <div className="animate-bounce text-cyan-500">↓ SCROLL TO INITIATE ↓</div>
      </div>

      {/* --- EVENTS CONTAINER --- */}
      <div 
        ref={sectionRef}
        className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto px-4 py-20 min-h-[50vh]"
      >
        
        {events.map((event, index) => (
          <div 
            key={event.id}
            className={`
              relative w-full sm:w-64 h-80 group
              ${cardsVisible 
                ? 'animate-deal' 
                : (hasViewed ? 'animate-undeal' : 'opacity-0')}
            `}
            style={{
              // Stagger delay: Standard for entry, reversed for exit
              animationDelay: cardsVisible ? `${index * 100}ms` : `${(events.length - index - 1) * 50}ms`
            }}
          >
            
            {/* --- CYBERPUNK BORDER DECORATIONS --- */}
            
            {/* Top Left Corner */}
            <div className={`absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 ${event.decor} z-20`}></div>
            {/* Top Right Corner */}
            <div className={`absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 ${event.decor} z-20`}></div>
            {/* Bottom Left Corner */}
            <div className={`absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 ${event.decor} z-20`}></div>
            
            {/* The Cut Corner Border (Bottom Right) */}
            <div className={`absolute bottom-0 right-0 w-[20px] h-[20px] bg-transparent border-t border-l ${event.decor} origin-bottom-right rotate-45 translate-y-[6px] translate-x-[6px] z-20`}></div>
            
            {/* Hover Glow Background */}
            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-${event.color.split('-')[1]}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cyber-card-shape`}></div>

            {/* --- CARD CONTENT --- */}
            <div className="relative h-full flex flex-col items-center justify-between p-6 bg-black/40 backdrop-blur-md border border-white/5 hover:border-white/20 transition-all duration-300 cyber-card-shape overflow-hidden">
              
              {/* Scanline Effect inside card */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

              {/* ID Header */}
              <div className="w-full flex justify-between items-center relative z-10 border-b border-white/5 pb-2">
                <span className="text-[10px] tracking-widest text-gray-500">SYS.0{event.id}</span>
                <Crosshair className="w-3 h-3 text-gray-600 group-hover:animate-spin" />
              </div>

              {/* Icon & Title */}
              <div className="flex flex-col items-center gap-4 relative z-10 my-4">
                <div className={`p-4 rounded-sm border border-white/10 group-hover:border-white/40 transition-all duration-300 ${event.color} ${event.glow} bg-black/50`}>
                  {event.icon}
                </div>
                
                <div className="text-center">
                  <h3 className={`text-xl font-black uppercase tracking-wider text-white mb-1`}>
                    {event.title}
                  </h3>
                  <div className={`h-[2px] w-0 group-hover:w-full transition-all duration-300 mx-auto ${event.color.replace('text-', 'bg-')}`}></div>
                </div>
              </div>

              {/* Description / Action */}
              <div className="w-full relative z-10 mt-auto">
                <p className="text-gray-400 text-[10px] uppercase tracking-widest text-center mb-4 leading-relaxed">
                  {event.desc}
                </p>
                
                <button className={`w-full py-2 bg-transparent border border-white/10 hover:bg-${event.color.split('-')[1]}-500/10 hover:border-${event.color.split('-')[1]}-500/50 text-xs text-gray-400 hover:text-white uppercase transition-all duration-300 flex items-center justify-between px-4 group/btn`}>
                  <span className="tracking-widest">Access</span>
                  <Zap size={12} className={`group-hover/btn:text-${event.color.split('-')[1]}-400 transition-colors`} />
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default TechFest;
