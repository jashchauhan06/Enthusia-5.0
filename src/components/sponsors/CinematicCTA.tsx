import { motion } from 'framer-motion';

export function CinematicCTA() {
    return (
        <motion.section
            className="relative overflow-hidden py-24 md:py-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 25%, #0d1b2a 50%, #1a0f1a 75%, #0f0f1a 100%)',
                        backgroundSize: '400% 400%',
                        animation: 'gradientShift 15s ease infinite',
                    }}
                />

                {/* Floating Light Streaks */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px"
                        style={{
                            width: `${150 + i * 50}px`,
                            background: `linear-gradient(90deg, transparent, rgba(139, 92, 246, ${0.3 + i * 0.05}), transparent)`,
                            top: `${15 + i * 15}%`,
                            left: '-10%',
                        }}
                        animate={{
                            x: ['0%', '120vw'],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            delay: i * 1.5,
                            ease: 'linear',
                        }}
                    />
                ))}

                {/* Glowing Orbs */}
                <motion.div
                    className="absolute w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
                        top: '-20%',
                        right: '-10%',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute w-80 h-80 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 60%)',
                        bottom: '-15%',
                        left: '-5%',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.6, 0.4, 0.6],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.h2
                    className="font-heading text-4xl md:text-6xl lg:text-7xl text-white mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    WANT TO PARTNER WITH US?
                </motion.h2>

                <motion.p
                    className="font-body text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    Join the brands that power Enthusia 5.0. Reach thousands of innovative minds
                    and make your mark on the future of tech.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    {/* Primary Glowing Button */}
                    <motion.button
                        className="relative px-10 py-4 rounded-xl font-heading text-lg text-black overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, #a855f7, #6366f1, #06b6d4)',
                            backgroundSize: '200% 200%',
                            animation: 'gradientShift 4s ease infinite',
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Glow effect */}
                        <motion.div
                            className="absolute inset-0 rounded-xl"
                            style={{
                                background: 'linear-gradient(135deg, #a855f7, #6366f1, #06b6d4)',
                                filter: 'blur(20px)',
                                opacity: 0.5,
                            }}
                            animate={{
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                        <span className="relative z-10">BECOME A SPONSOR</span>
                    </motion.button>

                    {/* Animated Border Button */}
                    <motion.button
                        className="relative px-10 py-4 rounded-xl font-heading text-lg text-white overflow-hidden group"
                        style={{
                            background: 'transparent',
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-xl">
                            <div
                                className="absolute inset-0 rounded-xl"
                                style={{
                                    background: 'linear-gradient(90deg, #a855f7, #6366f1, #06b6d4, #a855f7)',
                                    backgroundSize: '300% 100%',
                                    animation: 'borderFlow 3s linear infinite',
                                    padding: '2px',
                                }}
                            >
                                <div className="w-full h-full rounded-xl bg-[#0f0f1a]" />
                            </div>
                        </div>
                        <span className="relative z-10 group-hover:text-white/90 transition-colors">
                            CONTACT SPONSORSHIP TEAM
                        </span>
                    </motion.button>
                </motion.div>
            </div>

            {/* CSS for animations */}
            <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
        </motion.section>
    );
}
