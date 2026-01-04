import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { DiamondSponsor } from './DiamondSponsor';

interface Sponsor {
    name: string;
    logo?: string;
}

interface DiamondCarouselProps {
    sponsors: Sponsor[];
}

export function DiamondCarousel({ sponsors }: DiamondCarouselProps) {
    const [angle, setAngle] = useState(0);
    const requestRef = useRef<number | null>(null);
    const previousTimeRef = useRef<number | null>(null);

    // Config
    const rotationSpeed = 0.004; // Faster rotation
    const radiusX = 400; // Wider orbit
    const radiusZ = 140; // Deeper orbit for more 3D impact

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
    }, []);

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

        const scale = 0.6 + (normalizedZ * 0.4); // 0.6 at back, 1.0 at front
        const opacity = 0.4 + (normalizedZ * 0.6); // 0.4 at back, 1.0 at front
        const zIndex = Math.floor(normalizedZ * 100);

        return { x, z, scale, opacity, zIndex };
    };

    return (
        <div className="relative w-[800px] h-[500px] flex items-center justify-center pointer-events-none">
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
                            willChange: "transform, opacity",
                        }}
                    >
                        {/* Render the actual card */}
                        <DiamondSponsor sponsor={sponsor} />
                    </motion.div>
                );
            })}

            {/* Optional: Floor reflection or shadow for the "sphere" feel could go here */}
        </div>
    );
}
