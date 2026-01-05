import { motion } from 'framer-motion';
import { useState } from 'react';

interface FlipCardProps {
    icon: string;
    title: string;
    sponsorLogo?: string;
    sponsorName?: string;
}

export function FlipCard({ icon, title, sponsorLogo, sponsorName }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            className="relative w-full h-48 md:h-56 cursor-pointer"
            style={{ perspective: 1000 }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            onTouchStart={() => setIsFlipped(!isFlipped)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="absolute inset-0"
                style={{
                    transformStyle: 'preserve-3d',
                }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                    }}
                >
                    <div
                        className="w-full h-full flex flex-col items-center justify-center p-6"
                        style={{
                            background: 'rgba(20, 20, 30, 0.7)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <motion.span
                            className="text-5xl md:text-6xl mb-4"
                            animate={{
                                scale: isFlipped ? 0.8 : 1,
                                opacity: isFlipped ? 0.5 : 1
                            }}
                        >
                            {icon}
                        </motion.span>
                        <h4 className="font-heading text-lg md:text-xl text-white text-center">
                            {title}
                        </h4>

                        {/* Subtle glow effect */}
                        <div
                            className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                            }}
                        />
                    </div>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                    }}
                >
                    <div
                        className="w-full h-full flex flex-col items-center justify-center p-6"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            boxShadow: '0 8px 32px rgba(139, 92, 246, 0.2)',
                        }}
                    >
                        {sponsorLogo ? (
                            <img
                                src={sponsorLogo}
                                alt={sponsorName}
                                className="w-24 h-24 object-contain mb-4"
                            />
                        ) : (
                            <div className="w-24 h-16 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 mb-4">
                                <span className="text-white/40 text-xs font-body">Logo</span>
                            </div>
                        )}

                        {sponsorName && (
                            <p className="text-white font-heading text-sm mb-3">{sponsorName}</p>
                        )}

                        <motion.button
                            className="px-4 py-2 rounded-full text-sm font-heading"
                            style={{
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5))',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: 'white',
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Partner With Us
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
