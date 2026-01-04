import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface Sponsor {
    name: string;
    logo?: string;
}

interface RotatingCarouselProps {
    sponsors: Sponsor[];
    renderCard: (sponsor: Sponsor, index: number) => ReactNode;
    radiusX?: number;
    radiusZ?: number;
    rotationSpeed?: number;
    baseScale?: number;
}

export function RotatingCarousel({
    sponsors,
    renderCard,
    radiusX = 300,
    radiusZ = 100,
    rotationSpeed = 0.005,
    baseScale = 1
}: RotatingCarouselProps) {
    const [angle, setAngle] = useState(0);
    const requestRef = useRef<number | null>(null);
    const previousTimeRef = useRef<number | null>(null);

    const animate = (time: number) => {
        if (previousTimeRef.current !== null) {
            setAngle(prevAngle => (prevAngle + rotationSpeed) % (Math.PI * 2));
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [rotationSpeed]);

    // Helper to calculate position for a sponsor at a specific index
    const getPosition = (index: number) => {
        const theta = angle + (index * (2 * Math.PI) / sponsors.length);

        // Horizontal circle (Sphere-ish)
        const x = Math.cos(theta) * radiusX;
        const z = Math.sin(theta) * radiusZ;

        // Scale and Opacity based on Z (depth)
        // z ranges from -radiusZ (back) to +radiusZ (front)
        // Normalized z from 0 (back) to 1 (front)
        const normalizedZ = (z + radiusZ) / (2 * radiusZ);

        const scale = (0.6 + (normalizedZ * 0.4)) * baseScale; // Adjust scale based on depth and baseScale
        const opacity = 0.4 + (normalizedZ * 0.6); // 0.4 at back, 1.0 at front
        const zIndex = Math.floor(normalizedZ * 100);

        return { x, z, scale, opacity, zIndex };
    };

    return (
        <div
            className="relative flex items-center justify-center pointer-events-none"
            style={{ width: radiusX * 2.5, height: radiusZ * 3 }} // Dynamic sizing container
        >
            {sponsors.map((sponsor, index) => {
                const pos = getPosition(index);

                return (
                    <motion.div
                        key={index}
                        className="absolute flex items-center justify-center pointer-events-auto"
                        style={{
                            x: pos.x,
                            zIndex: pos.zIndex,
                            scale: pos.scale,
                            opacity: pos.opacity,
                            // Blur removed to prevent flickering/blinking on heavy glassmorphism
                            willChange: "transform, opacity",
                        }}
                    >
                        {renderCard(sponsor, index)}
                    </motion.div>
                );
            })}
        </div>
    );
}
