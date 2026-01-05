import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function AvailabilityStatus() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const indiaTime = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(now);
      setCurrentTime(indiaTime);
    };

    // Update immediately
    updateTime();
    
    // Update every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-sm font-body text-white whitespace-nowrap">
      {/* Animated green dot */}
      <div className="relative">
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Mobile version (< 768px) */}
      <div className="flex items-center gap-2 md:hidden text-xs font-light text-white">
        <span>SIT Nagpur</span>
        <span>•</span>
        <span>Feb 12-14, 2026</span>
        <span>•</span>
        <span>{currentTime}</span>
      </div>

      {/* Desktop version (>= 768px) */}
      <div className="hidden md:flex items-center gap-2 text-white">
        <span>Registration are not opened yet!</span>
        <span>•</span>
        <span>SIT Nagpur</span>
        <span>•</span>
        <span>{currentTime}</span>
        <span>•</span>
        <span>Feb 12-14, 2026</span>
      </div>
    </div>
  );
}
