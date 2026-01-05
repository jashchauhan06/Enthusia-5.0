import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { DiamondCarousel } from './DiamondCarousel';
import { RotatingCarousel } from './RotatingCarousel';
import { PlatinumCard } from './PlatinumCard';
import { GoldCard } from './GoldCard';
import { SpaceBackground } from './SpaceBackground';

interface Sponsor {
    name: string;
    logo?: string;
}

interface SponsorsHero3DProps {
    diamondSponsors: Sponsor[];
    platinumSponsors: Sponsor[];
    goldSponsors: Sponsor[];
}

export function SponsorsHero3D({
    diamondSponsors,
    platinumSponsors,
    goldSponsors,
}: SponsorsHero3DProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    // Relaxed margin to trigger earlier, or immediately if even slightly visible
    const isInView = useInView(containerRef, { once: true, margin: '0px 0px -10% 0px' });

    const [radiusConfig, setRadiusConfig] = useState({
        diamond: { x: 400, z: 140 },
        platinum: { x: 350, z: 120 },
        gold: { x: 300, z: 100 }
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                // Mobile
                setRadiusConfig({
                    diamond: { x: 160, z: 60 },
                    platinum: { x: 140, z: 50 },
                    gold: { x: 120, z: 40 }
                });
            } else if (width < 1024) {
                // Tablet
                setRadiusConfig({
                    diamond: { x: 300, z: 100 },
                    platinum: { x: 250, z: 90 },
                    gold: { x: 200, z: 80 }
                });
            } else {
                // Desktop
                setRadiusConfig({
                    diamond: { x: 400, z: 140 },
                    platinum: { x: 350, z: 120 },
                    gold: { x: 300, z: 100 }
                });
            }
        };

        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20"
        >
            {/* Space background */}
            <SpaceBackground />

            {/* Page Title - Clean & Commanding */}
            <motion.div
                className="relative z-10 text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white tracking-tight mb-2">
                    OUR SPONSORS
                </h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
                <p className="font-body text-sm md:text-base text-cyan-200/40 mt-3 tracking-[0.2em] uppercase">
                    Powering The Future
                </p>
            </motion.div>

            {/* Main Content Container */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center gap-16 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                // Fallback to visible if isInView detection errs
                animate={isInView ? "visible" : "hidden"}
            >
                {/* TIER 1: Diamond Carousel (Center Top) */}
                <motion.div
                    className="z-30 w-full flex justify-center mb-0 md:-mb-4 focus:outline-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="scale-75 md:scale-90 lg:scale-100">
                        <DiamondCarousel
                            sponsors={diamondSponsors}
                            radiusX={radiusConfig.diamond.x}
                            radiusZ={radiusConfig.diamond.z}
                        />
                    </div>
                </motion.div>

                {/* TIER 2: Platinum Carousel */}
                <motion.div
                    variants={itemVariants}
                    className="w-full flex flex-col items-center z-20 mt-0 md:-mt-10"
                >
                    {/* Platinum Label */}
                    <div className="flex items-center gap-4 text-slate-400/30 text-xs font-bold tracking-widest uppercase mb-4">
                        <div className="h-[1px] w-12 bg-slate-400/20" />
                        <span>Platinum Partners</span>
                        <div className="h-[1px] w-12 bg-slate-400/20" />
                    </div>

                    <div className="scale-80 md:scale-100">
                        <RotatingCarousel
                            sponsors={platinumSponsors}
                            renderCard={(sponsor, index) => (
                                <PlatinumCard sponsor={sponsor} index={index} />
                            )}
                            radiusX={radiusConfig.platinum.x}
                            radiusZ={radiusConfig.platinum.z}
                            rotationSpeed={0.006} // Faster than Diamond
                            baseScale={0.9}
                        />
                    </div>
                </motion.div>

                {/* TIER 3: Gold Carousel */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center w-full z-10 mt-0 md:-mt-10"
                >
                    <div className="flex items-center gap-4 text-amber-500/30 text-xs font-bold tracking-widest uppercase mb-4">
                        <div className="h-[1px] w-12 bg-amber-500/20" />
                        <span>Gold Partners</span>
                        <div className="h-[1px] w-12 bg-amber-500/20" />
                    </div>

                    <div className="scale-80 md:scale-100">
                        <RotatingCarousel
                            sponsors={goldSponsors}
                            renderCard={(sponsor, index) => (
                                <GoldCard sponsor={sponsor} index={index} />
                            )}
                            radiusX={radiusConfig.gold.x}
                            radiusZ={radiusConfig.gold.z}
                            rotationSpeed={0.008} // Fastest
                            baseScale={0.8}
                        />
                    </div>
                </motion.div>

            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.5 } : {}}
                transition={{ delay: 2, duration: 1 }}
            >
                <motion.div
                    className="flex flex-col items-center gap-2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <span className="text-[10px] text-white/40 tracking-[0.3em] font-body">SCROLL</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}
