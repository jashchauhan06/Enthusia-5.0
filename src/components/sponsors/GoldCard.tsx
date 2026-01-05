import { motion } from 'framer-motion';
import { useState } from 'react';

interface Sponsor {
    name: string;
    logo?: string;
}

interface GoldCardProps {
    sponsor: Sponsor;
    index?: number;
}

export function GoldCard({ sponsor, index: _index = 0 }: GoldCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative w-[130px] h-[130px] md:w-[150px] md:h-[150px] cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Golden glow - only on hover */}
            <motion.div
                className="absolute inset-[-5px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
                    filter: 'blur(10px)',
                }}
            />

            {/* Glass Card */}
            <div
                className="absolute inset-0 rounded-xl overflow-hidden"
                style={{
                    background: 'rgba(20, 15, 5, 0.7)', // Lighter warmer background
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: `1px solid rgba(245, 158, 11, ${isHovered ? 0.6 : 0.4})`, // Brighter border
                    boxShadow: isHovered
                        ? 'inset 0 0 30px rgba(245, 158, 11, 0.25)'
                        : 'inset 0 0 15px rgba(245, 158, 11, 0.15)', // Brighter inner glow
                }}
            >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
                    {sponsor.logo ? (
                        <div className="w-full h-3/5 flex items-center justify-center mb-1">
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-w-full max-h-full object-contain"
                                style={{
                                    filter: isHovered ? 'brightness(1.1) sepia(0)' : 'brightness(0.8) sepia(0.4)',
                                    transition: 'filter 0.3s ease',
                                }}
                            />
                        </div>
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 mb-2">
                            <span className="text-amber-500/40 text-[10px] font-heading">LOGO</span>
                        </div>
                    )}

                    {/* Name */}
                    <div className="text-center w-full">
                        <p className={`text-xs font-body tracking-wide truncate transition-colors duration-300 ${isHovered ? 'text-amber-200' : 'text-amber-200/60'}`}>
                            {sponsor.name}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-amber-500/50 rounded-full transition-all duration-300 ${isHovered ? 'w-2/3 opacity-100' : 'w-1/3 opacity-30'}`} />
        </motion.div>
    );
}
