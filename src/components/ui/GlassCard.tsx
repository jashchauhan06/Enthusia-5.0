"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
    glowColor?: "blue" | "purple" | "magenta" | "multi";
}

const glowStyles = {
    blue: "hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]",
    purple: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    magenta: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    multi: "hover:shadow-[0_0_20px_rgba(0,212,255,0.3),0_0_40px_rgba(139,92,246,0.2)]",
};

export function GlassCard({
    children,
    className = "",
    hover = true,
    glow = false,
    glowColor = "multi",
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={hover ? { y: -5 } : undefined}
            transition={{ duration: 0.3 }}
            className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-white/[0.05] to-white/[0.02]
        backdrop-blur-xl border border-white/10
        ${glow ? glowStyles[glowColor] : ""}
        ${hover ? "transition-all duration-300 hover:border-white/20" : ""}
        ${className}
      `}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-magenta/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
