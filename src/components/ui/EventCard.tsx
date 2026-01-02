"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

interface EventCardProps {
    title: string;
    description: string;
    category: string;
    slug: string;
    type: "techfest" | "cultural";
    date?: string;
    venue?: string;
    participants?: string;
    image?: string;
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    Hackathon: { bg: "bg-neon-blue/10", text: "text-neon-blue", border: "border-neon-blue/30" },
    Workshop: { bg: "bg-electric-purple/10", text: "text-electric-purple", border: "border-electric-purple/30" },
    Competition: { bg: "bg-magenta/10", text: "text-magenta", border: "border-magenta/30" },
    Gaming: { bg: "bg-aurora-green/10", text: "text-aurora-green", border: "border-aurora-green/30" },
    Dance: { bg: "bg-cyber-pink/10", text: "text-cyber-pink", border: "border-cyber-pink/30" },
    Music: { bg: "bg-neon-blue/10", text: "text-neon-blue", border: "border-neon-blue/30" },
    Art: { bg: "bg-electric-purple/10", text: "text-electric-purple", border: "border-electric-purple/30" },
    Drama: { bg: "bg-magenta/10", text: "text-magenta", border: "border-magenta/30" },
};

export function EventCard({
    title,
    description,
    category,
    slug,
    type,
    date,
    venue,
    participants,
    image,
}: EventCardProps) {
    const colors = categoryColors[category] || categoryColors.Competition;
    const href = type === "techfest" ? `/techfest/${slug}` : `/cultural/${slug}`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative"
        >
            <Link href={href} className="block">
                <div className="glass-card overflow-hidden h-full">
                    {/* Image Area */}
                    <div className="relative h-48 overflow-hidden">
                        {image ? (
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-electric-purple/20 to-magenta/20" />
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />

                        {/* Category Badge */}
                        <span
                            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}
                        >
                            {category}
                        </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <h3
                            className="text-xl font-bold text-text-primary mb-2 group-hover:text-neon-blue transition-colors"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            {title}
                        </h3>

                        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                            {description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-3 mb-4 text-xs text-text-muted">
                            {date && (
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {date}
                                </span>
                            )}
                            {venue && (
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {venue}
                                </span>
                            )}
                            {participants && (
                                <span className="flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    {participants}
                                </span>
                            )}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-neon-blue text-sm font-medium group-hover:gap-3 transition-all">
                            <span>View Details</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Bottom Glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </Link>
        </motion.div>
    );
}
