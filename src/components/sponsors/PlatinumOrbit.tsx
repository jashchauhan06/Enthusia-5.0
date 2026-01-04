import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Sponsor {
    name: string;
    logo?: string;
}

interface PlatinumOrbitProps {
    sponsors: Sponsor[];
    orbitRadius?: number;
    duration?: number;
}

export function PlatinumOrbit({ sponsors, orbitRadius = 300, duration = 35 }: PlatinumOrbitProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [orbitAngle, setOrbitAngle] = useState(0);
    const animationRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number>(0);

    // Responsive radius
    const [radius, setRadius] = useState(orbitRadius);

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 768) {
                setRadius(orbitRadius * 0.5);
            } else if (window.innerWidth < 1024) {
                setRadius(orbitRadius * 0.7);
            } else {
                setRadius(orbitRadius);
            }
        };
        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, [orbitRadius]);

    // Custom animation loop for orbit
    useEffect(() => {
        const animate = (time: number) => {
            if (lastTimeRef.current === 0) {
                lastTimeRef.current = time;
            }
            const delta = time - lastTimeRef.current;
            lastTimeRef.current = time;

            // Only animate if nothing is hovered
            if (hoveredIndex === null) {
                setOrbitAngle((prev) => prev + (delta / 1000) * (360 / duration));
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [duration, hoveredIndex]);

    const angleStep = 360 / Math.max(sponsors.length, 1);

    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d',
            }}
        >
            {sponsors.map((sponsor, index) => {
                const baseAngle = angleStep * index;
                const currentAngle = baseAngle + orbitAngle;
                const angleRad = (currentAngle * Math.PI) / 180;

                // 3D orbit calculation
                const x = Math.cos(angleRad) * radius;
                const z = Math.sin(angleRad) * radius * 0.4; // Elliptical depth
                const y = Math.sin(angleRad) * 30; // Slight vertical movement

                // Depth-based effects
                const depthScale = 0.7 + (z + radius * 0.4) / (radius * 0.8) * 0.5;
                const depthBlur = Math.max(0, (radius * 0.4 - z) / (radius * 0.4) * 3);
                const depthOpacity = 0.6 + (z + radius * 0.4) / (radius * 0.8) * 0.4;
                const depthZ = Math.floor((z + radius * 0.4) / (radius * 0.2));

                const isHovered = hoveredIndex === index;
                const isInFront = z > 0;

                return (
                    <motion.div
                        key={sponsor.name}
                        className="absolute pointer-events-auto cursor-pointer"
                        style={{
                            left: '50%',
                            top: '50%',
                            x: x,
                            y: y - 20,
                            zIndex: isHovered ? 100 : depthZ + 10,
                            transform: `translate(-50%, -50%)`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: depthOpacity,
                            scale: isHovered ? 1.3 : depthScale,
                            filter: isHovered ? 'blur(0px)' : `blur(${depthBlur}px)`,
                        }}
                        transition={{
                            opacity: { duration: 0.3 },
                            scale: { type: 'spring', stiffness: 300, damping: 25 },
                            filter: { duration: 0.3 },
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <PlatinumCard
                            sponsor={sponsor}
                            isHovered={isHovered}
                            isInFront={isInFront}
                            selfRotation={currentAngle}
                        />
                    </motion.div>
                );
            })}

            {/* Orbit ring visual */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 pointer-events-none"
                style={{
                    width: radius * 2,
                    height: radius * 0.8,
                    boxShadow: '0 0 30px rgba(226, 232, 240, 0.1), inset 0 0 30px rgba(226, 232, 240, 0.05)',
                }}
            />
        </div>
    );
}

interface PlatinumCardProps {
    sponsor: Sponsor;
    isHovered: boolean;
    isInFront: boolean;
    selfRotation: number;
}

function PlatinumCard({ sponsor, isHovered, isInFront, selfRotation }: PlatinumCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 300, damping: 30 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px]"
            style={{
                transformStyle: 'preserve-3d',
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : -selfRotation * 0.3,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glow effect */}
            <motion.div
                className="absolute inset-[-10px] rounded-2xl"
                style={{
                    background: 'transparent',
                    boxShadow: isHovered
                        ? '0 0 50px 15px rgba(226, 232, 240, 0.4), 0 0 80px 30px rgba(168, 180, 200, 0.2)'
                        : isInFront
                            ? '0 0 30px 8px rgba(226, 232, 240, 0.2)'
                            : '0 0 20px 5px rgba(226, 232, 240, 0.1)',
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Frosted glass card */}
            <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                    background: 'rgba(15, 20, 30, 0.6)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: `1px solid rgba(226, 232, 240, ${isHovered ? 0.4 : 0.2})`,
                    boxShadow: isHovered
                        ? 'inset 0 0 40px rgba(226, 232, 240, 0.15)'
                        : 'inset 0 0 20px rgba(226, 232, 240, 0.05)',
                }}
            >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
                    {sponsor.logo ? (
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="w-2/3 h-1/2 object-contain"
                            style={{
                                filter: isHovered ? 'brightness(1.2)' : 'brightness(0.9)',
                                transition: 'filter 0.3s ease',
                            }}
                        />
                    ) : (
                        <div className="w-2/3 h-1/3 rounded-lg bg-gradient-to-br from-slate-300/20 to-gray-400/20 flex items-center justify-center border border-slate-300/30">
                            <span className="text-slate-300/60 text-xs font-heading">LOGO</span>
                        </div>
                    )}

                    {/* Name reveal on hover */}
                    <motion.div
                        className="absolute bottom-3 left-0 right-0 text-center px-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 10,
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <p className="text-white font-heading text-sm truncate">{sponsor.name}</p>
                        <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-body mt-1"
                            style={{
                                background: 'linear-gradient(135deg, rgba(226, 232, 240, 0.3), rgba(168, 180, 200, 0.3))',
                                border: '1px solid rgba(226, 232, 240, 0.3)',
                            }}
                        >
                            ⚪ Platinum
                        </span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
