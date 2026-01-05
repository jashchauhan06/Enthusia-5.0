import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    twinkleDelay: number;
}

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    color: string;
}

export function SpaceBackground() {
    const [stars, setStars] = useState<Star[]>([]);
    const [particles, setParticles] = useState<Particle[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll();
    const driftY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const driftX = useTransform(scrollYProgress, [0, 1], [0, 50]);

    useEffect(() => {
        // Generate star field
        const starCount = window.innerWidth < 768 ? 80 : 150;
        const newStars: Star[] = [];
        for (let i = 0; i < starCount; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.6 + 0.2,
                twinkleDelay: Math.random() * 5,
            });
        }
        setStars(newStars);

        // Generate floating particles
        const particleCount = window.innerWidth < 768 ? 20 : 40;
        const colors = [
            'rgba(6, 182, 212, 0.6)',    // Cyan
            'rgba(59, 130, 246, 0.5)',   // Blue
            'rgba(139, 92, 246, 0.4)',   // Purple
            'rgba(251, 191, 36, 0.3)',   // Gold
        ];
        const newParticles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 4 + 2,
                duration: Math.random() * 20 + 15,
                delay: Math.random() * 10,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none"
        >
            {/* Deep space gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, #0d1117 0%, #010409 50%, #000000 100%)',
                }}
            />

            {/* Nebula glow - primary (behind Diamond) */}
            <motion.div
                className="absolute"
                style={{
                    width: '60vw',
                    height: '60vw',
                    maxWidth: '800px',
                    maxHeight: '800px',
                    left: '50%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(59, 130, 246, 0.04) 40%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Secondary nebula */}
            <motion.div
                className="absolute"
                style={{
                    width: '40vw',
                    height: '40vw',
                    maxWidth: '500px',
                    maxHeight: '500px',
                    right: '10%',
                    top: '20%',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 60%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    scale: [1.1, 1, 1.1],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Tertiary nebula */}
            <motion.div
                className="absolute"
                style={{
                    width: '35vw',
                    height: '35vw',
                    maxWidth: '450px',
                    maxHeight: '450px',
                    left: '5%',
                    bottom: '30%',
                    background: 'radial-gradient(circle, rgba(251, 191, 36, 0.04) 0%, transparent 60%)',
                    filter: 'blur(50px)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Star field with drift */}
            <motion.div
                className="absolute inset-0"
                style={{ y: driftY, x: driftX }}
            >
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size,
                            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`,
                        }}
                        animate={{
                            opacity: [star.opacity, star.opacity * 1.8, star.opacity],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: star.twinkleDelay,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </motion.div>

            {/* Floating particles */}
            <motion.div className="absolute inset-0" style={{ y: driftY }}>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                            background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
                            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, Math.random() * 30 - 15, 0],
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </motion.div>

            {/* Ambient light orbs */}
            <motion.div
                className="absolute w-[300px] h-[300px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, transparent 60%)',
                    top: '60%',
                    right: '20%',
                    filter: 'blur(40px)',
                }}
                animate={{
                    scale: [1, 1.4, 1],
                    x: [0, -40, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}
