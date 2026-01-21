import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useRef } from 'react';

interface SponsorCard3DProps {
  logo?: string;
  name: string;
  tier: string;
  glowColor: string;
  size?: 'sm' | 'md' | 'lg';
}

export function SponsorCard3D({ 
  logo, 
  name, 
  tier, 
  glowColor,
  size = 'md' 
}: SponsorCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const sizeClasses = {
    sm: 'w-28 h-28 md:w-32 md:h-32',
    md: 'w-36 h-36 md:w-44 md:h-44',
    lg: 'w-44 h-44 md:w-56 md:h-56'
  };

  return (
    <motion.div
      ref={cardRef}
      className={`${sizeClasses[size]} relative cursor-pointer`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        z: isHovered ? 50 : 0,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl"
        style={{
          background: glowColor,
          opacity: isHovered ? 0.6 : 0.2,
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0.2,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glassmorphism Card */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(20, 20, 30, 0.6)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: `1px solid rgba(255, 255, 255, 0.1)`,
          boxShadow: isHovered 
            ? `0 0 40px ${glowColor}, inset 0 0 20px rgba(255,255,255,0.05)`
            : '0 4px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Neon border overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: `2px solid transparent`,
            borderImage: `linear-gradient(135deg, ${glowColor}, transparent, ${glowColor}) 1`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0.3,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
          {logo ? (
            <img 
              src={logo} 
              alt={name} 
              className="w-2/3 h-2/3 object-contain filter brightness-100"
              style={{
                filter: isHovered ? 'brightness(1.2) contrast(1.1)' : 'brightness(0.9)',
              }}
            />
          ) : (
            <div className="w-2/3 h-1/2 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
              <span className="text-white/40 text-xs font-body">Logo</span>
            </div>
          )}
          
          {/* Name & Tier Badge (visible on hover) */}
          <motion.div
            className="absolute bottom-2 left-0 right-0 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10
            }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-white font-heading text-sm truncate px-2">{name}</p>
            <span 
              className="inline-block px-2 py-0.5 rounded-full text-xs font-body mt-1"
              style={{
                background: `linear-gradient(135deg, ${glowColor}, transparent)`,
                color: 'white',
              }}
            >
              {tier}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
