import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Sponsor {
    name: string;
    logo?: string;
}

interface GoldOrbitProps {
    sponsors: Sponsor[];
    orbitRadius?: number;
    duration?: number;
}

export function GoldOrbit({ sponsors, orbitRadius = 450, duration = 20 }: GoldOrbitProps) {
    const [orbitAngle, setOrbitAngle] = useState(0);
    const animationRef = useRef<number | null>(null);
    const lastTimeRef = useRef<number>(0);

    // Responsive radius
    const [radius, setRadius] = useState(orbitRadius);

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 768) {
                setRadius(orbitRadius * 0.45);
            } else if (window.innerWidth < 1024) {
                setRadius(orbitRadius * 0.65);
            } else {
                setRadius(orbitRadius);
            }
        };
        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, [orbitRadius]);

    // Fast orbital animation
    useEffect(() => {
        const animate = (time: number) => {
            if (lastTimeRef.current === 0) {
                lastTimeRef.current = time;
            }
            const delta = time - lastTimeRef.current;
            lastTimeRef.current = time;

            setOrbitAngle((prev) => prev + (delta / 1000) * (360 / duration));

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [duration]);

    const angleStep = 360 / Math.max(sponsors.length, 1);

    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                perspective: '1400px',
                transformStyle: 'preserve-3d',
            }}
        >
            {sponsors.map((sponsor, index) => {
                const baseAngle = angleStep * index;
                const currentAngle = baseAngle + orbitAngle;
                const angleRad = (currentAngle * Math.PI) / 180;

                // Larger orbit with 3D depth
                const x = Math.cos(angleRad) * radius;
                const z = Math.sin(angleRad) * radius * 0.35;
                const y = Math.sin(angleRad) * 20;

                // Depth-based effects (more subtle since faster)
                const depthScale = 0.6 + (z + radius * 0.35) / (radius * 0.7) * 0.5;
                const depthOpacity = 0.5 + (z + radius * 0.35) / (radius * 0.7) * 0.5;
                const depthZ = Math.floor((z + radius * 0.35) / (radius * 0.15));

                // Motion blur based on speed (simulated)
                const motionBlur = 0.5;

                return (
                    <motion.div
                        key={sponsor.name}
                        className="absolute"
                        style={{
                            left: '50%',
                            top: '50%',
                            x: x,
                            y: y - 50,
                            zIndex: depthZ,
                            transform: `translate(-50%, -50%)`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: depthOpacity,
                            scale: depthScale,
                            filter: `blur(${motionBlur}px)`,
                        }}
                    >
                        <GoldCard sponsor={sponsor} />
                    </motion.div>
                );
            })}

            {/* Outer orbit ring visual */}
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/10 pointer-events-none"
                style={{
                    width: radius * 2,
                    height: radius * 0.7,
                    marginTop: -50,
                    boxShadow: '0 0 40px rgba(251, 191, 36, 0.08), inset 0 0 40px rgba(251, 191, 36, 0.04)',
                }}
            />
        </div>
    );
}

interface GoldCardProps {
    sponsor: Sponsor;
}

function GoldCard({ sponsor }: GoldCardProps) {
    return (
        <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
            {/* Golden glow */}
            <div
                className="absolute inset-[-8px] rounded-xl"
                style={{
                    boxShadow: '0 0 25px 8px rgba(251, 191, 36, 0.25), 0 0 50px 15px rgba(245, 158, 11, 0.1)',
                }}
            />

            {/* Card */}
            <div
                className="absolute inset-0 rounded-xl overflow-hidden"
                style={{
                    background: 'rgba(20, 18, 12, 0.7)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(251, 191, 36, 0.3)',
                    boxShadow: 'inset 0 0 20px rgba(251, 191, 36, 0.1)',
                }}
            >
                {/* Gold shimmer overlay */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, transparent 40%, rgba(251, 191, 36, 0.15) 50%, transparent 60%)',
                    }}
                    animate={{
                        x: ['-100%', '200%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-3">
                    {sponsor.logo ? (
                        <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="w-2/3 h-1/2 object-contain brightness-90"
                        />
                    ) : (
                        <div className="w-2/3 h-1/3 rounded-lg bg-gradient-to-br from-amber-400/20 to-yellow-500/20 flex items-center justify-center border border-amber-400/30">
                            <span className="text-amber-400/60 text-xs font-heading">LOGO</span>
                        </div>
                    )}

                    {/* Name always visible but subtle */}
                    <p className="text-amber-200/60 font-heading text-xs mt-2 truncate max-w-full px-1 text-center">
                        {sponsor.name}
                    </p>
                </div>
            </div>
        </div>
    );
}
