"use client";

import { motion } from "framer-motion";
import { Building2, Award, Star, Sparkles, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

const sponsorTiers = [
    {
        tier: "Platinum",
        icon: Star,
        color: "from-cyan-400 to-blue-500",
        borderColor: "border-cyan-400/30",
        glowColor: "shadow-cyan-400/20",
        sponsors: [
            { name: "TechCorp Global", logo: null },
            { name: "InnovateTech", logo: null },
        ],
    },
    {
        tier: "Gold",
        icon: Award,
        color: "from-yellow-400 to-orange-500",
        borderColor: "border-yellow-400/30",
        glowColor: "shadow-yellow-400/20",
        sponsors: [
            { name: "FutureSoft", logo: null },
            { name: "DataDynamics", logo: null },
            { name: "CloudNine Solutions", logo: null },
        ],
    },
    {
        tier: "Silver",
        icon: Building2,
        color: "from-gray-300 to-gray-400",
        borderColor: "border-gray-400/30",
        glowColor: "shadow-gray-400/20",
        sponsors: [
            { name: "StartupHub", logo: null },
            { name: "DevTools Inc", logo: null },
            { name: "CyberSecure", logo: null },
            { name: "AI Solutions", logo: null },
        ],
    },
];

const sponsorshipBenefits = [
    "Brand visibility to 10,000+ tech-savvy students",
    "Logo placement on all marketing materials",
    "Dedicated booth space at the venue",
    "Speaking opportunity at opening ceremony",
    "Access to participant database (opt-in)",
    "Social media promotion",
];

export default function SponsorsPage() {
    return (
        <div className="relative pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-blue/15 rounded-full blur-[150px]" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-medium uppercase tracking-wider bg-electric-purple/10 text-electric-purple border border-electric-purple/30">
                            <Sparkles className="w-3 h-3" />
                            Our Partners
                        </span>

                        <h1
                            className="text-4xl sm:text-6xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            <span className="text-gradient">Sponsors</span>
                            <span className="text-text-primary"> & Partners</span>
                        </h1>

                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            ENTHUSIA 5.0 is made possible by the generous support of our sponsors.
                            Join hands with us to empower the next generation of innovators.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sponsor Tiers */}
            {sponsorTiers.map((tierData, tierIndex) => (
                <section key={tierData.tier} className="py-12 px-4">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: tierIndex * 0.1 }}
                            className="text-center mb-8"
                        >
                            <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r ${tierData.color} bg-opacity-10 text-white mb-4`}>
                                <tierData.icon className="w-5 h-5" />
                                <span className="font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
                                    {tierData.tier} Sponsors
                                </span>
                            </div>
                        </motion.div>

                        <div className={`grid ${tierData.tier === "Platinum"
                                ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
                                : tierData.tier === "Gold"
                                    ? "grid-cols-2 sm:grid-cols-3 max-w-4xl"
                                    : "grid-cols-2 sm:grid-cols-4 max-w-5xl"
                            } gap-6 mx-auto`}>
                            {tierData.sponsors.map((sponsor, index) => (
                                <motion.div
                                    key={sponsor.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <GlassCard
                                        className={`p-8 flex items-center justify-center h-32 ${tierData.borderColor} hover:${tierData.glowColor}`}
                                        hover
                                    >
                                        <div className="text-center">
                                            <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${tierData.color} flex items-center justify-center text-white font-bold text-xl`}>
                                                {sponsor.name.charAt(0)}
                                            </div>
                                            <span className="text-text-secondary text-sm font-medium">
                                                {sponsor.name}
                                            </span>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Become a Sponsor CTA */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <GlassCard className="p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-magenta/10" />

                        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2
                                    className="text-2xl sm:text-3xl font-bold text-text-primary mb-4"
                                    style={{ fontFamily: "var(--font-orbitron)" }}
                                >
                                    Become a <span className="text-gradient">Sponsor</span>
                                </h2>
                                <p className="text-text-secondary mb-6">
                                    Partner with ENTHUSIA 5.0 and connect with 10,000+ students,
                                    innovators, and future tech leaders.
                                </p>
                                <GlowButton href="/contact" size="lg">
                                    Get in Touch
                                    <ArrowRight className="w-4 h-4" />
                                </GlowButton>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-text-primary mb-4">
                                    Sponsorship Benefits
                                </h3>
                                <ul className="space-y-3">
                                    {sponsorshipBenefits.map((benefit, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-2 text-text-secondary"
                                        >
                                            <Star className="w-4 h-4 text-neon-blue mt-1 flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </section>
        </div>
    );
}
