import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { SponsorCard3D } from './SponsorCard3D';

interface Sponsor {
    name: string;
    logo?: string;
}

interface OrbitalRingProps {
    tier: 'diamond' | 'platinum' | 'gold' | 'silver';
    sponsors: Sponsor[];
    radius?: number;
    duration?: number;
}

const tierConfig = {
    diamond: {
        glowColor: 'rgba(6, 182, 212, 0.5)',
        gradientColor: 'from-cyan-400 to-blue-500',
        label: 'Diamond',
        icon: '💎',
        size: 'lg' as const,
    },
    platinum: {
        glowColor: 'rgba(226, 232, 240, 0.5)',
        gradientColor: 'from-slate-300 to-gray-400',
        label: 'Platinum',
        icon: '⚪',
        size: 'md' as const,
    },
    gold: {
        glowColor: 'rgba(251, 191, 36, 0.5)',
        gradientColor: 'from-yellow-400 to-amber-500',
        label: 'Gold',
        icon: '🥇',
        size: 'md' as const,
    },
    silver: {
        glowColor: 'rgba(156, 163, 175, 0.5)',
        gradientColor: 'from-gray-300 to-gray-500',
        label: 'Silver',
        icon: '🥈',
        size: 'sm' as const,
    },
};

export function OrbitalRing({ tier, sponsors, radius = 280, duration = 30 }: OrbitalRingProps) {
    const config = tierConfig[tier];
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const angleStep = (2 * Math.PI) / Math.max(sponsors.length, 1);

    // Responsive radius
    const [responsiveRadius, setResponsiveRadius] = useState(radius);

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 768) {
                setResponsiveRadius(radius * 0.55);
            } else if (window.innerWidth < 1024) {
                setResponsiveRadius(radius * 0.75);
            } else {
                setResponsiveRadius(radius);
            }
        };
        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, [radius]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex flex-col items-center"
        >
            {/* Tier Label */}
            <motion.div
                className="mb-8 text-center z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <span className={`inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r ${config.gradientColor} text-white font-heading text-lg md:text-xl shadow-lg`}>
                    <span>{config.icon}</span>
                    <span>{config.label} Sponsor</span>
                </span>
            </motion.div>

            {/* Orbital Container */}
            <div
                ref={containerRef}
                className="relative"
                style={{
                    width: responsiveRadius * 2 + 120,
                    height: responsiveRadius * 2 + 120,
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Orbit Ring Path */}
                <div
                    className="absolute rounded-full border border-white/10"
                    style={{
                        width: responsiveRadius * 2,
                        height: responsiveRadius * 2,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: `0 0 40px ${config.glowColor}, inset 0 0 40px ${config.glowColor}`,
                    }}
                />

                {/* Center Glow */}
                <div
                    className="absolute rounded-full"
                    style={{
                        width: 80,
                        height: 80,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: `radial-gradient(circle, ${config.glowColor} 0%, transparent 70%)`,
                        filter: 'blur(20px)',
                    }}
                />

                {/* Rotating Cards Container */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                >
                    {sponsors.map((sponsor, index) => {
                        const angle = angleStep * index - Math.PI / 2;
                        const x = Math.cos(angle) * responsiveRadius + responsiveRadius + 60;
                        const y = Math.sin(angle) * responsiveRadius + responsiveRadius + 60;

                        return (
                            <motion.div
                                key={sponsor.name}
                                className="absolute"
                                style={{
                                    left: x,
                                    top: y,
                                    transform: 'translate(-50%, -50%)',
                                }}
                                animate={{ rotate: -360 }}
                                transition={{
                                    duration,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                <SponsorCard3D
                                    name={sponsor.name}
                                    logo={sponsor.logo}
                                    tier={config.label}
                                    glowColor={config.glowColor}
                                    size={config.size}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.div>
    );
}
