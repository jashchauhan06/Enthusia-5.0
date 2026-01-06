import { motion } from "framer-motion";

export const DobbyCharacter = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Magical aura */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating animation wrapper */}
      <motion.div
        className="relative"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-2xl">
          <defs>
            {/* Gradients */}
            <linearGradient id="elfGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="fabricGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Head */}
          <motion.ellipse
            cx="100"
            cy="80"
            rx="45"
            ry="55"
            fill="url(#elfGradient)"
            animate={{ ry: [55, 57, 55] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Large ears - Dobby's characteristic feature */}
          <motion.ellipse
            cx="55"
            cy="70"
            rx="20"
            ry="35"
            fill="url(#elfGradient)"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "55px 70px" }}
          />
          <motion.ellipse
            cx="145"
            cy="70"
            rx="20"
            ry="35"
            fill="url(#elfGradient)"
            animate={{ rotate: [2, -2, 2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "145px 70px" }}
          />
          
          {/* Large glowing eyes */}
          <motion.circle
            cx="85"
            cy="75"
            r="8"
            fill="#4ade80"
            filter="url(#glow)"
            animate={{ opacity: [1, 0.6, 1], r: [8, 9, 8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="115"
            cy="75"
            r="8"
            fill="#4ade80"
            filter="url(#glow)"
            animate={{ opacity: [1, 0.6, 1], r: [8, 9, 8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Eye highlights */}
          <circle cx="83" cy="73" r="3" fill="#fff" opacity="0.8" />
          <circle cx="113" cy="73" r="3" fill="#fff" opacity="0.8" />
          
          {/* Nose */}
          <ellipse cx="100" cy="90" rx="4" ry="6" fill="#64748b" opacity="0.6" />
          
          {/* Smile */}
          <path
            d="M 90 100 Q 100 105 110 100"
            stroke="#64748b"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          
          {/* Body - pillowcase clothing */}
          <motion.rect
            x="70"
            y="130"
            width="60"
            height="80"
            rx="5"
            fill="url(#fabricGradient)"
            stroke="#94a3b8"
            strokeWidth="2"
            animate={{ height: [80, 82, 80] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Fabric texture */}
          <line x1="75" y1="145" x2="125" y2="145" stroke="#94a3b8" strokeWidth="1" opacity="0.3" />
          <line x1="75" y1="165" x2="125" y2="165" stroke="#94a3b8" strokeWidth="1" opacity="0.3" />
          <line x1="75" y1="185" x2="125" y2="185" stroke="#94a3b8" strokeWidth="1" opacity="0.3" />
          
          {/* Arms */}
          <motion.line
            x1="70"
            y1="150"
            x2="50"
            y2="170"
            stroke="url(#elfGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            animate={{ x2: [50, 45, 50], y2: [170, 175, 170] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="130"
            y1="150"
            x2="150"
            y2="170"
            stroke="url(#elfGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            animate={{ x2: [150, 155, 150], y2: [170, 175, 170] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Hands */}
          <motion.circle
            cx="50"
            cy="170"
            r="6"
            fill="url(#elfGradient)"
            animate={{ cx: [50, 45, 50], cy: [170, 175, 170] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="150"
            cy="170"
            r="6"
            fill="url(#elfGradient)"
            animate={{ cx: [150, 155, 150], cy: [170, 175, 170] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Legs */}
          <motion.line
            x1="85"
            y1="210"
            x2="80"
            y2="250"
            stroke="url(#elfGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            animate={{ x2: [80, 78, 80] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="115"
            y1="210"
            x2="120"
            y2="250"
            stroke="url(#elfGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            animate={{ x2: [120, 122, 120] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Feet */}
          <ellipse cx="80" cy="255" rx="10" ry="5" fill="url(#elfGradient)" />
          <ellipse cx="120" cy="255" rx="10" ry="5" fill="url(#elfGradient)" />
        </svg>
        
        {/* Magical sparkles around Dobby */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
            }}
            animate={{
              x: [0, Math.cos(i * 45 * Math.PI / 180) * 100, 0],
              y: [0, Math.sin(i * 45 * Math.PI / 180) * 100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Magical text bubble */}
      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
      >
        <p className="text-xs text-blue-300 font-serif italic whitespace-nowrap">
          "Dobby is free to code!"
        </p>
      </motion.div>
    </div>
  );
};
