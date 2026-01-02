"use client";

import { motion } from "framer-motion";
import {
    Sparkles,
    History,
    Star,
    Rocket,
    Users,
    Trophy,
    Calendar,
    Zap,
    Globe,
    Heart
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

const timeline = [
    { year: "2022", title: "ENTHUSIA 1.0", description: "The journey begins with 2000+ participants" },
    { year: "2023", title: "ENTHUSIA 2.0", description: "Expanded to 30+ events and 4000+ footfall" },
    { year: "2024", title: "ENTHUSIA 3.0", description: "Introduced hackathons with ₹2L+ prizes" },
    { year: "2025", title: "ENTHUSIA 4.0", description: "Record 8000+ participants, national recognition" },
    { year: "2026", title: "ENTHUSIA 5.0", description: "The Parallel Universe - our biggest edition yet!" },
];

const features = [
    { icon: Zap, title: "50+ Events", description: "Technical and cultural events spanning 3 days" },
    { icon: Trophy, title: "₹5L+ Prizes", description: "Compete for substantial cash prizes and goodies" },
    { icon: Users, title: "10,000+ Expected", description: "Participants from colleges across India" },
    { icon: Globe, title: "Nationwide", description: "Open to students from all over the country" },
];

const themes = [
    {
        title: "Parallel Universe",
        description: "This year's theme explores the concept of alternate realities and infinite possibilities. Just as parallel universes represent endless variations of existence, ENTHUSIA 5.0 offers countless paths to success, creativity, and innovation.",
        color: "from-neon-blue to-electric-purple"
    },
];

export default function AboutEnthusiaPage() {
    return (
        <div className="relative pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-magenta/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-medium uppercase tracking-wider bg-electric-purple/10 text-electric-purple border border-electric-purple/30">
                            <Sparkles className="w-3 h-3" />
                            The Festival
                        </span>

                        <h1
                            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            <span className="text-gradient">ENTHUSIA</span>
                            <span className="text-text-primary"> 5.0</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-text-secondary mb-4">
                            Experience the <span className="text-magenta font-semibold">Parallel Universe</span>
                        </p>

                        <p className="text-text-muted text-lg mb-10 max-w-2xl mx-auto">
                            ENTHUSIA is the flagship annual TechFest and Cultural Festival of
                            Symbiosis Institute of Technology, Nagpur. A celebration of technology,
                            innovation, art, and culture that brings together the brightest minds
                            from across the nation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <GlowButton href="/register" size="lg">
                                <Rocket className="w-5 h-5" />
                                Register Now
                            </GlowButton>
                            <GlowButton href="/techfest" variant="outline" size="lg">
                                Explore Events
                            </GlowButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Theme Section */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    {themes.map((theme, index) => (
                        <motion.div
                            key={theme.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <GlassCard className="p-8 md:p-12 text-center relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-10`} />
                                <div className="relative z-10">
                                    <Star className="w-12 h-12 mx-auto mb-6 text-magenta" />
                                    <h2
                                        className="text-3xl sm:text-4xl font-bold text-gradient mb-6"
                                        style={{ fontFamily: "var(--font-orbitron)" }}
                                    >
                                        Theme: {theme.title}
                                    </h2>
                                    <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
                                        {theme.description}
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlassCard className="p-6 text-center h-full" glow>
                                    <feature.icon className="w-8 h-8 mx-auto mb-3 text-neon-blue" />
                                    <div
                                        className="text-xl font-bold text-text-primary mb-1"
                                        style={{ fontFamily: "var(--font-orbitron)" }}
                                    >
                                        {feature.title}
                                    </div>
                                    <div className="text-sm text-text-secondary">{feature.description}</div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading
                        badge="Our Journey"
                        title="The ENTHUSIA Story"
                        subtitle="Five years of growth, innovation, and unforgettable memories"
                    />

                    <div className="relative mt-12">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-electric-purple to-magenta" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-neon-blue to-magenta z-10">
                                    <div className="absolute inset-0 rounded-full animate-ping bg-neon-blue/30" />
                                </div>

                                {/* Content */}
                                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                    <GlassCard className="p-6" hover>
                                        <span className="text-sm text-neon-blue font-semibold">{item.year}</span>
                                        <h3 className="text-xl font-bold text-text-primary mt-1" style={{ fontFamily: "var(--font-orbitron)" }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-text-secondary mt-2">{item.description}</p>
                                    </GlassCard>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heart className="w-12 h-12 mx-auto mb-6 text-magenta" />
                        <h2
                            className="text-3xl sm:text-4xl font-bold text-text-primary mb-6"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            Be Part of Something <span className="text-gradient">Extraordinary</span>
                        </h2>
                        <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                            Whether you&apos;re a coder, artist, performer, or innovator -
                            ENTHUSIA 5.0 has something special waiting for you.
                        </p>
                        <GlowButton href="/register" size="lg">
                            <Sparkles className="w-5 h-5" />
                            Join ENTHUSIA 5.0
                        </GlowButton>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
