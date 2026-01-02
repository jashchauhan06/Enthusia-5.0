"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface GlowButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit";
}

const variants = {
    primary: `
    bg-gradient-to-r from-neon-blue via-electric-purple to-magenta
    text-white font-semibold
    hover:shadow-[0_0_30px_rgba(0,212,255,0.4),0_0_60px_rgba(139,92,246,0.3)]
  `,
    outline: `
    bg-transparent border-2 border-neon-blue text-neon-blue
    hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]
  `,
    ghost: `
    bg-white/5 text-text-secondary border border-white/10
    hover:bg-white/10 hover:text-text-primary hover:border-white/20
  `,
};

const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
};

export function GlowButton({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md",
    className = "",
    disabled = false,
    type = "button",
}: GlowButtonProps) {
    const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    font-medium transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

    const content = (
        <>
            {/* Shimmer Effect */}
            <span className="absolute inset-0 overflow-hidden rounded-inherit">
                <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </span>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </>
    );

    if (href) {
        return (
            <Link href={href}>
                <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={baseClasses}
                >
                    {content}
                </motion.span>
            </Link>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={baseClasses}
        >
            {content}
        </motion.button>
    );
}
