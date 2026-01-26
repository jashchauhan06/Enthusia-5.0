import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useImagePreloader } from '@/hooks/useImagePreloader';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const { progress, isLoading } = useImagePreloader();
  const [isComplete, setIsComplete] = useState(false);
  const [showGlitch, setShowGlitch] = useState(false);

  useEffect(() => {
    if (!isLoading && progress >= 100) {
      setShowGlitch(true);
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onLoadingComplete, 800);
      }, 1000);
    }
  }, [isLoading, progress, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            filter: "brightness(0)",
            scale: 0.8
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black overflow-hidden"
        >
          {/* Animated background grid */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 opacity-20 animate-grid-move"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          {/* Scanlines effect */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30 animate-scanlines"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(220, 38, 38, 0.03) 2px,
                rgba(220, 38, 38, 0.03) 4px
              )`
            }}
          />

          {/* Main content */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="text-center">
              
              {/* Dali Mask Icon */}
              <motion.div
                initial={{ scale: 0, rotateY: -180 }}
                animate={{ 
                  scale: 1, 
                  rotateY: 0,
                  ...(showGlitch && {
                    x: [0, -2, 2, -1, 1, 0],
                    filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
                  })
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  ...(showGlitch && { repeat: 3, duration: 0.1 })
                }}
                className="mb-8 relative"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-24 h-24 mx-auto bg-red-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  
                  {/* Main mask container */}
                  <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-full flex items-center justify-center shadow-2xl border-2 border-red-400/30">
                    <img 
                      src="/codesprint-app/images/mask.png" 
                      alt="Dali Mask" 
                      className="w-16 h-16 object-contain filter drop-shadow-lg"
                    />
                    
                    {/* Rotating border */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-red-300 animate-spin" />
                  </div>
                </div>
              </motion.div>

              {/* Title with glitch effect */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  ...(showGlitch && {
                    textShadow: [
                      "0 0 0 transparent",
                      "2px 0 0 #ff0000, -2px 0 0 #00ff00",
                      "0 0 0 transparent"
                    ]
                  })
                }}
                transition={{ 
                  delay: 0.3, 
                  duration: 0.8,
                  ...(showGlitch && { repeat: 5, duration: 0.1 })
                }}
                className="mb-4"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-wider font-mono">
                  CODE SPRINT 2.0
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-4" />
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-red-400 text-xl mb-12 font-mono tracking-wide"
              >
                INITIALIZING HEIST PROTOCOL...
              </motion.p>

              {/* Progress section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="w-80 mx-auto"
              >
                {/* Progress bar container */}
                <div className="relative mb-6">
                  <div className="bg-gray-900 rounded-full h-3 overflow-hidden border border-red-900/50 shadow-inner">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full relative overflow-hidden"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine transform -skew-x-12" />
                    </motion.div>
                  </div>
                  
                  {/* Progress percentage */}
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-red-400 text-sm font-mono">LOADING</span>
                    <span className="text-white text-sm font-mono font-bold">
                      {progress}%
                    </span>
                  </div>
                </div>

                {/* Loading status */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.3 }}
                  className="flex justify-center items-center space-x-2"
                >
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="w-2 h-2 bg-red-500 rounded-full"
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm font-mono ml-3">
                    ACCESSING MAINFRAME
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 text-red-500 font-mono text-xs opacity-60">
            [SECURE_CONNECTION]
          </div>
          <div className="absolute top-4 right-4 text-red-500 font-mono text-xs opacity-60">
            [ENCRYPTED]
          </div>
          <div className="absolute bottom-4 left-4 text-red-500 font-mono text-xs opacity-60">
            [PROTOCOL_ACTIVE]
          </div>
          <div className="absolute bottom-4 right-4 text-red-500 font-mono text-xs opacity-60">
            [STANDBY]
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}