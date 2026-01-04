import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface Sponsor {
    name: string;
    logo?: string;
}

interface PlatinumCardProps {
    sponsor: Sponsor;
    index?: number;
}

export function PlatinumCard({ sponsor, index = 0 }: PlatinumCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse movement for subtle parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 300, damping: 30 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] cursor-pointer"
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            // Subtle float animation
            animate={{
                y: [0, -8, 0],
            }}
            transition={{
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5, // Stagger floats slightly
                }
            }}
        >
            {/* Glow effect - Subtle and clean */}
            <motion.div
                className="absolute inset-[-10px] rounded-2xl"
                style={{
                    background: 'transparent',
                    boxShadow: isHovered
                        ? '0 0 40px 10px rgba(226, 232, 240, 0.3), 0 0 60px 20px rgba(168, 180, 200, 0.1)'
                        : '0 0 20px 5px rgba(226, 232, 240, 0.05)',
                }}
                transition={{ duration: 0.4 }}
            />

            {/* Frosted glass card */}
            <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                    background: 'rgba(20, 25, 40, 0.7)', // Slightly lighter/more visible
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: `1px solid rgba(226, 232, 240, ${isHovered ? 0.5 : 0.3})`, // Brighter border
                    boxShadow: isHovered
                        ? 'inset 0 0 50px rgba(226, 232, 240, 0.25)'
                        : 'inset 0 0 30px rgba(226, 232, 240, 0.1)', // More inner glow
                }}
            >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
                    {sponsor.logo ? (
                        <div className="w-full h-3/5 flex items-center justify-center mb-2">
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-w-full max-h-full object-contain"
                                style={{
                                    filter: isHovered ? 'brightness(1.2)' : 'brightness(0.9) grayscale(0.2)',
                                    transition: 'filter 0.3s ease',
                                }}
                            />
                        </div>
                    ) : (
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-300/10 to-gray-400/10 flex items-center justify-center border border-slate-300/20 mb-3">
                            <span className="text-slate-300/40 text-xs font-heading">LOGO</span>
                        </div>
                    )}

                    {/* Name */}
                    <motion.div
                        className="text-center"
                        animate={{
                            opacity: isHovered ? 1 : 0.7,
                            y: isHovered ? -2 : 0,
                        }}
                    >
                        <h3 className="text-white font-heading text-sm md:text-base tracking-wide truncate max-w-full">
                            {sponsor.name}
                        </h3>
                        <motion.div
                            className="h-[1px] bg-white/30 mx-auto mt-2"
                            initial={{ width: 0 }}
                            animate={{ width: isHovered ? '100%' : '0%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Platinum Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0f141e] border border-slate-400/30 rounded-full">
                <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">Platinum</span>
            </div>
        </motion.div>
    );
}
