import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
}

export function FloatingParticles() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

    useEffect(() => {
        const newParticles: Particle[] = [];
        const count = window.innerWidth < 768 ? 30 : 50;

        for (let i = 0; i < count; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                duration: Math.random() * 20 + 15,
                delay: Math.random() * 10,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none overflow-hidden z-0"
            style={{ y }}
        >
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        background: `radial-gradient(circle, rgba(139, 92, 246, ${particle.opacity}) 0%, rgba(59, 130, 246, ${particle.opacity * 0.5}) 100%)`,
                        boxShadow: `0 0 ${particle.size * 2}px rgba(139, 92, 246, ${particle.opacity})`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Larger ambient orbs */}
            <motion.div
                className="absolute w-64 h-64 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
                    top: '10%',
                    left: '10%',
                    filter: 'blur(40px)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute w-80 h-80 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.04) 0%, transparent 70%)',
                    bottom: '20%',
                    right: '15%',
                    filter: 'blur(50px)',
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    x: [0, -40, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </motion.div>
    );
}
