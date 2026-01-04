import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

interface Sponsor {
  name: string;
  logo?: string;
}

interface DiamondSponsorProps {
  sponsor: Sponsor;
}

export function DiamondSponsor({ sponsor }: DiamondSponsorProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations - slightly gentler
  const springConfig = { stiffness: 120, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Clean soft halo behind Diamond sponsor - "Single soft halo" */}
      <motion.div
        className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(6, 182, 212, 0.03) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Diamond Card */}
      <motion.div
        ref={cardRef}
        className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] cursor-pointer"
        style={{
          perspective: 1200,
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        // Circular revolution path (Orbiting its own center)
        animate={{
          y: [-12, 0, 12, 0, -12],
          x: [0, 12, 0, -12, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      >
        {/* Subtle border glow */}
        <motion.div
          className="absolute inset-[-1px] rounded-[32px] opacity-60"
          style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.6), transparent 50%, rgba(59, 130, 246, 0.4))',
            filter: 'blur(2px)',
          }}
        />

        {/* Clean glassmorphic square */}
        <motion.div
          className="absolute inset-0 rounded-[30px] overflow-hidden"
          style={{
            background: 'rgba(10, 15, 25, 0.65)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(6, 182, 212, 0.25)',
            boxShadow: isHovered
              ? '0 20px 50px -10px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(6, 182, 212, 0.15)'
              : '0 20px 50px -10px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.05)',
          }}
        >
          {/* Subtle sheen */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-10">
            {sponsor.logo ? (
              <motion.div
                className="w-4/5 h-1/2 flex items-center justify-center"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.15))',
                  }}
                />
              </motion.div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center border border-cyan-500/20 mb-6">
                <span className="text-cyan-400/50 text-xl font-heading">LOGO</span>
              </div>
            )}

            {/* Sponsor info */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 text-xs font-bold tracking-widest uppercase">Diamond Partner</span>
              </div>

              <h2 className="text-white font-heading text-2xl md:text-3xl tracking-wide">
                {sponsor.name}
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
