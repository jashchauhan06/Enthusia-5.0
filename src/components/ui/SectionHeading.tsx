"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    badge?: string;
    align?: "left" | "center" | "right";
    children?: ReactNode;
}

export function SectionHeading({
    title,
    subtitle,
    badge,
    align = "center",
    children,
}: SectionHeadingProps) {
    const alignClasses = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${alignClasses[align]} mb-12`}
        >
            {badge && (
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full text-xs font-medium uppercase tracking-wider bg-neon-blue/10 text-neon-blue border border-neon-blue/30"
                >
                    {badge}
                </motion.span>
            )}

            <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
                style={{ fontFamily: "var(--font-orbitron)" }}
            >
                {title.split(" ").map((word, index) => (
                    <span key={index}>
                        {index % 2 === 0 ? (
                            <span className="text-gradient">{word}</span>
                        ) : (
                            <span className="text-text-primary">{word}</span>
                        )}
                        {" "}
                    </span>
                ))}
            </h2>

            {subtitle && (
                <p className="text-text-secondary text-lg max-w-2xl">
                    {subtitle}
                </p>
            )}

            {/* Underline Glow */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 h-1 w-24 bg-gradient-to-r from-neon-blue via-electric-purple to-magenta rounded-full"
                style={{
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)",
                }}
            />

            {children}
        </motion.div>
    );
}
