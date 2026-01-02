"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    Calendar,
    Clock,
    MapPin,
    Users,
    Trophy,
    Phone,
    Mail,
    User,
    CheckCircle,
    AlertCircle
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { TechFestEvent } from "@/data/techfest-events";
import { CulturalEvent } from "@/data/cultural-events";

interface EventDetailClientProps {
    event: TechFestEvent | CulturalEvent;
    type: "techfest" | "cultural";
}

const categoryGradients: Record<string, string> = {
    Hackathon: "from-neon-blue to-electric-purple",
    Workshop: "from-electric-purple to-magenta",
    Competition: "from-magenta to-cyber-pink",
    Gaming: "from-aurora-green to-neon-blue",
    Dance: "from-magenta to-cyber-pink",
    Music: "from-neon-blue to-electric-purple",
    Art: "from-electric-purple to-magenta",
    Drama: "from-magenta to-neon-blue",
    Literary: "from-neon-blue to-aurora-green",
};

export function EventDetailClient({ event, type }: EventDetailClientProps) {
    const backHref = type === "techfest" ? "/techfest" : "/cultural";
    const gradient = categoryGradients[event.category] || "from-neon-blue to-electric-purple";

    return (
        <div className="relative pt-24">
            {/* Hero Section */}
            <section className="relative py-16 px-4 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`} />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]" />

                <div className="max-w-5xl mx-auto relative z-10">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            href={backHref}
                            className="inline-flex items-center gap-2 text-text-secondary hover:text-neon-blue transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to {type === "techfest" ? "TechFest" : "Cultural Fest"} Events
                        </Link>
                    </motion.div>

                    {/* Event Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className={`inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full text-xs font-medium uppercase tracking-wider bg-gradient-to-r ${gradient} bg-opacity-10 text-white border border-white/20`}>
                            {event.category}
                        </span>

                        <h1
                            className="text-3xl sm:text-5xl font-bold text-text-primary mb-4"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            {event.title}
                        </h1>

                        <p className="text-text-secondary text-lg mb-8 max-w-3xl">
                            {event.longDescription}
                        </p>

                        {/* Quick Info */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 text-text-secondary">
                                <Calendar className="w-4 h-4 text-neon-blue" />
                                <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-secondary">
                                <Clock className="w-4 h-4 text-electric-purple" />
                                <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-secondary">
                                <MapPin className="w-4 h-4 text-magenta" />
                                <span>{event.venue}</span>
                            </div>
                            <div className="flex items-center gap-2 text-text-secondary">
                                <Users className="w-4 h-4 text-aurora-green" />
                                <span>{event.participants}</span>
                            </div>
                            {event.prizePool && (
                                <div className="flex items-center gap-2 text-text-secondary">
                                    <Trophy className="w-4 h-4 text-cyber-pink" />
                                    <span className="font-semibold text-gradient">{event.prizePool}</span>
                                </div>
                            )}
                        </div>

                        <GlowButton href="/register" size="lg">
                            Register for this Event
                        </GlowButton>
                    </motion.div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Rules */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <GlassCard className="p-6">
                                    <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                                        <AlertCircle className="w-5 h-5 text-neon-blue" />
                                        Rules & Guidelines
                                    </h2>
                                    <ul className="space-y-3">
                                        {event.rules.map((rule, index) => (
                                            <li key={index} className="flex items-start gap-3 text-text-secondary">
                                                <CheckCircle className="w-4 h-4 text-aurora-green mt-1 flex-shrink-0" />
                                                <span>{rule}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>

                            {/* Timeline */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <GlassCard className="p-6">
                                    <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                                        <Clock className="w-5 h-5 text-electric-purple" />
                                        Event Timeline
                                    </h2>
                                    <div className="space-y-4">
                                        {event.timeline.map((item, index) => (
                                            <div key={index} className="flex gap-4">
                                                <div className="w-24 flex-shrink-0 text-neon-blue font-medium text-sm">
                                                    {item.time}
                                                </div>
                                                <div className="relative pb-4">
                                                    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-electric-purple" />
                                                    {index !== event.timeline.length - 1 && (
                                                        <div className="absolute left-[3px] top-3.5 w-0.5 h-full bg-gradient-to-b from-electric-purple/50 to-transparent" />
                                                    )}
                                                    <p className="text-text-secondary pl-6">{item.activity}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>

                            {/* Requirements */}
                            {event.requirements && event.requirements.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <GlassCard className="p-6">
                                        <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                                            <CheckCircle className="w-5 h-5 text-magenta" />
                                            Requirements
                                        </h2>
                                        <ul className="space-y-3">
                                            {event.requirements.map((req, index) => (
                                                <li key={index} className="flex items-start gap-3 text-text-secondary">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-2 flex-shrink-0" />
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </GlassCard>
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Contact Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <GlassCard className="p-6" glow>
                                    <h3 className="text-lg font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
                                        Event Coordinator
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-text-secondary">
                                            <User className="w-4 h-4 text-neon-blue" />
                                            <span>{event.contactName}</span>
                                        </div>
                                        <a
                                            href={`tel:${event.contactPhone.replace(/\s/g, "")}`}
                                            className="flex items-center gap-3 text-text-secondary hover:text-neon-blue transition-colors"
                                        >
                                            <Phone className="w-4 h-4 text-electric-purple" />
                                            <span>{event.contactPhone}</span>
                                        </a>
                                        <a
                                            href={`mailto:${event.contactEmail}`}
                                            className="flex items-center gap-3 text-text-secondary hover:text-neon-blue transition-colors"
                                        >
                                            <Mail className="w-4 h-4 text-magenta" />
                                            <span>{event.contactEmail}</span>
                                        </a>
                                    </div>
                                </GlassCard>
                            </motion.div>

                            {/* CTA Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <GlassCard className="p-6 text-center">
                                    <h3 className="text-lg font-bold text-gradient mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                                        Ready to Participate?
                                    </h3>
                                    <p className="text-text-muted text-sm mb-4">
                                        Register now to secure your spot!
                                    </p>
                                    <GlowButton href="/register" className="w-full">
                                        Register Now
                                    </GlowButton>
                                </GlassCard>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
