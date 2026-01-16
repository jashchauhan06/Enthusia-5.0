import React, { useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  MotionValue,
} from "framer-motion";

// --- Utility: Simulate cn (classnames) ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// --- Component 1: Individual Card with Cyberpunk Styling ---
const Card = ({
  className,
  children,
  style,
  zIndex,
}: {
  className?: string;
  children?: React.ReactNode;
  style?: any;
  zIndex?: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Snappier, more robotic spring physics
  const springConfig = {
    stiffness: 250,
    damping: 25,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-15, 15]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-1000"
      style={{ zIndex }}
    >
      <motion.div
        ref={cardRef}
        style={{
          ...style,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative flex flex-col items-center justify-start",
          "w-60 sm:w-64 h-auto aspect-[3/4] bg-neutral-900",
          // Cyberpunk Border Effect:
          "border-2 border-transparent", 
          className
        )}
      >
        {/* Main Content Container with Cut Corners */}
        <div 
            className="w-full h-full relative overflow-hidden bg-black/80 backdrop-blur-sm"
            style={{ 
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)", // The "Tech" Cut
            }}
        >
            {children}
            
            {/* Scanline Effect Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[5] bg-[length:100%_4px,6px_100%]" />
            
            {/* Glitchy Hover Highlight */}
            <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-100 pointer-events-none mix-blend-overlay" />
        </div>

        {/* Decorative corner borders (pseudo-elements via divs for React) */}
        <div className="absolute -top-[2px] -left-[2px] w-4 h-4 border-t-2 border-l-2 border-current opacity-70" />
        <div className="absolute -top-[2px] -right-[2px] w-4 h-4 border-t-2 border-r-2 border-current opacity-70" />
        <div className="absolute -bottom-[2px] -left-[2px] w-4 h-4 border-b-2 border-l-2 border-current opacity-70" />
        {/* Bottom right is cut, so we place the border slightly differently or omit it */}
        <div className="absolute bottom-[15%] -right-[2px] w-[2px] h-4 bg-current opacity-70" />
        <div className="absolute -bottom-[2px] right-[15%] w-4 h-[2px] bg-current opacity-70" />

      </motion.div>
    </div>
  );
};

// --- Helper: Grid Position Logic ---
const getGridPosition = (index: number) => {
    const ROW_OFFSET = 340; 
    const COL_OFFSET = 300; 
    
    if (index < 3) {
        return { x: (index - 1) * COL_OFFSET, y: -ROW_OFFSET * 0.5 };
    } else {
        return { x: (index - 3 - 0.5) * COL_OFFSET, y: ROW_OFFSET * 0.5 };
    }
};

type CardItem = {
    id: number | string;
    title: string;
    image: string;
};

// --- Component 2: Main Stack Logic ---
export const CardStack = ({
  categories,
  offset = 400,
  className,
}: {
  categories: {
      diamond: CardItem[];
      platinum: CardItem[];
      gold: CardItem[];
  };
  offset?: number;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full bg-black", className)} // Force black bg
      style={{ height: `${offset}vh` }}
    >
      {/* Background Grid for Cyberpunk feel */}
      <div className="fixed inset-0 pointer-events-none opacity-20" 
           style={{ 
               backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
               backgroundSize: '40px 40px' 
           }} 
      />

      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        {/* --- PHASE 1: DIAMOND (Cyan/Blue Theme) - Starts Visible, Goes Inside --- */}
        {categories.diamond.map((item, index) => {
            const gridPos = getGridPosition(index);
            const x = useTransform(scrollYProgress, [0, 0.3], [gridPos.x, 0]);
            const y = useTransform(scrollYProgress, [0, 0.3], [gridPos.y, 0]);
            // Glitchy scale effect on exit
            const scale = useTransform(scrollYProgress, [0, 0.28, 0.3], [1, 1.1, 0]); 
            const opacity = useTransform(scrollYProgress, [0.25, 0.3], [1, 0]);

            return (
                <Card 
                    key={item.id} 
                    style={{ x, y, scale, opacity, zIndex: 10 }}
                    className="border-cyan-500 text-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                    <CardContent item={item} label="DIAMOND" color="bg-cyan-500" subtext="CLASS_S" />
                </Card>
            );
        })}

        {/* --- PHASE 2: PLATINUM (Fuchsia/Pink Theme) - Explodes Out, Then Fades --- */}
        {categories.platinum.map((item, index) => {
             const gridPos = getGridPosition(index);
             const x = useTransform(scrollYProgress, [0.2, 0.5], [0, gridPos.x]);
             const y = useTransform(scrollYProgress, [0.2, 0.5], [0, gridPos.y]);
             
             // Mechanical Snap Scale
             const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
             const opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
             const rotate = useTransform(scrollYProgress, [0.2, 0.5], [index % 2 === 0 ? -90 : 90, 0]);

             return (
                 <Card 
                    key={item.id} 
                    style={{ x, y, scale, opacity, rotate, zIndex: 20 }}
                    className="border-fuchsia-500 text-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.3)]"
                >
                     <CardContent item={item} label="PLATINUM" color="bg-fuchsia-500" subtext="CLASS_A" />
                 </Card>
             );
        })}

        {/* --- PHASE 3: GOLD (Yellow Theme) - Shuffles/Deals Out --- */}
        {categories.gold.map((item, index) => {
            const gridPos = getGridPosition(index);
            const x = useTransform(scrollYProgress, [0.7, 1], [0, gridPos.x]);
            const y = useTransform(scrollYProgress, [0.7, 1], [0, gridPos.y]);
            
            // Random chaotic rotation -> Straight
            const randomRot = (index * 13) % 20 - 10; 
            const rotate = useTransform(scrollYProgress, [0.7, 1], [randomRot * 3, 0]);
            
            const opacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
            const scale = useTransform(scrollYProgress, [0.65, 0.75], [0.8, 1]);

            return (
                <Card 
                    key={item.id} 
                    style={{ x, y, rotate, opacity, scale, zIndex: 30 + (5-index) }}
                    className="border-yellow-400 text-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                >
                    <CardContent item={item} label="GOLD" color="bg-yellow-400" subtext="CLASS_B" />
                </Card>
            );
        })}

        {/* HUD Progress Indicator */}
        <div className="fixed bottom-10 left-10 md:left-20 flex flex-col space-y-4 font-mono text-xs z-50">
            <PhaseIndicator progress={scrollYProgress} range={[0, 0.3]} label="SECTOR: DIAMOND" color="bg-cyan-500" />
            <PhaseIndicator progress={scrollYProgress} range={[0.3, 0.65]} label="SECTOR: PLATINUM" color="bg-fuchsia-500" />
            <PhaseIndicator progress={scrollYProgress} range={[0.65, 1]} label="SECTOR: GOLD" color="bg-yellow-400" />
        </div>
      </div>
    </div>
  );
};

// --- Subcomponent: Cyberpunk Card Content ---
const CardContent = ({ item, label, color, subtext }: { item: CardItem, label: string, color: string, subtext: string }) => (
    <div className="relative w-full h-full group">
        {/* Image with filters */}
        <div className="absolute inset-0 m-[2px] mb-[15%] overflow-hidden bg-neutral-800">
            <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
            />
        </div>
        
        {/* HUD Overlay Lines */}
        <div className="absolute top-4 left-0 w-full h-[1px] bg-current opacity-30" />
        <div className="absolute bottom-[20%] right-0 w-1/2 h-[1px] bg-current opacity-30" />
        
        {/* Label Tag */}
        <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold text-black ${color} clip-tag`}>
            {label}
        </div>

        {/* Text Content Area */}
        <div className="absolute bottom-0 left-0 right-0 h-[15%] flex items-center justify-between px-4 bg-neutral-900 border-t border-current/20">
            <div className="flex flex-col">
                <span className="text-[10px] opacity-50 font-mono leading-none mb-1">{subtext} // {item.id}</span>
                <h3 className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-md truncate max-w-[140px]">
                    {item.title}
                </h3>
            </div>
            {/* Tech Decoration */}
            <div className="flex space-x-1">
                <div className={`w-1 h-1 ${color} animate-pulse`} />
                <div className={`w-1 h-1 ${color} opacity-50`} />
                <div className={`w-1 h-1 ${color} opacity-25`} />
            </div>
        </div>
    </div>
);

// --- Subcomponent: HUD Bar Indicator ---
const PhaseIndicator = ({ progress, range, label, color }: { progress: MotionValue<number>, range: [number, number], label: string, color: string }) => {
    // Fill width based on progress within range
    const width = useTransform(progress, [range[0], range[1]], ["0%", "100%"]);
    const active = useTransform(progress, (v) => v >= range[0] && v <= range[1] ? 1 : 0.3);
    
    return (
        <motion.div style={{ opacity: active }} className="flex items-center space-x-3 w-48">
            <div className="w-1 h-full bg-current" />
            <div className="flex-1 flex flex-col">
                <span className="mb-1 text-white tracking-widest">{label}</span>
                <div className="h-1 w-full bg-neutral-800 relative overflow-hidden">
                    <motion.div 
                        style={{ width }} 
                        className={`absolute top-0 left-0 h-full ${color}`} 
                    />
                </div>
            </div>
        </motion.div>
    );
};

// --- Example Usage ---
export default function App() {
  const categories = {
      diamond: [
        { id: '01', title: "Neural Link", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600" },
        { id: '02', title: "Cyber Arm", image: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?q=80&w=600" },
        { id: '03', title: "Neon City", image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=600" },
        { id: '04', title: "Data Stream", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600" },
        { id: '05', title: "AI Core", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600" },
      ],
      platinum: [
        { id: '06', title: "Bio Hack", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=600" },
        { id: '07', title: "Tech Wear", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600" },
        { id: '08', title: "Night Raid", image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=600" },
        { id: '09', title: "Droid", image: "https://images.unsplash.com/photo-1535378437327-b7107b7706ab?q=80&w=600" },
        { id: '10', title: "Mainframe", image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=600" },
      ],
      gold: [
        { id: '11', title: "Waste Land", image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=600" },
        { id: '12', title: "Scavenger", image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600" },
        { id: '13', title: "Old Tech", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600" },
        { id: '14', title: "Wires", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=600" },
        { id: '15', title: "Glitch", image: "https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=600" },
      ]
  };

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black">
         {/* Global CSS for Clip Tag */}
         <style>{`
            .clip-tag {
                clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 20%);
            }
        `}</style>
        <CardStack categories={categories} />
    </div>
  );
}