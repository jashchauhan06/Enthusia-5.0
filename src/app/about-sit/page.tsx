"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Users,
    Award,
    Building2,
    Globe,
    Lightbulb,
    BookOpen,
    Rocket,
    Target
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

const stats = [
    { icon: GraduationCap, value: "5000+", label: "Students" },
    { icon: Users, value: "200+", label: "Faculty Members" },
    { icon: Award, value: "50+", label: "Awards Won" },
    { icon: Building2, value: "10+", label: "Research Labs" },
];

const programs = [
    { name: "B.Tech Programs", description: "CSE, AI&ML, Electronics, Mechanical, Civil" },
    { name: "M.Tech Programs", description: "Advanced specializations in emerging technologies" },
    { name: "Ph.D. Programs", description: "Research opportunities across disciplines" },
    { name: "Industry Partnerships", description: "Collaborations with 100+ companies" },
];

const values = [
    { icon: Lightbulb, title: "Innovation", description: "Fostering creative thinking and breakthrough ideas" },
    { icon: Globe, title: "Global Outlook", description: "Preparing students for international careers" },
    { icon: Target, title: "Excellence", description: "Pursuing the highest standards in education" },
    { icon: Rocket, title: "Entrepreneurship", description: "Nurturing the next generation of founders" },
];

export default function AboutSITPage() {
    return (
        <div className="relative pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-blue/15 rounded-full blur-[150px]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-medium uppercase tracking-wider bg-neon-blue/10 text-neon-blue border border-neon-blue/30">
                                <BookOpen className="w-3 h-3" />
                                About the Institute
                            </span>

                            <h1
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                                style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                                <span className="text-gradient">Symbiosis</span>
                                <br />
                                <span className="text-text-primary">Institute of Technology</span>
                            </h1>

                            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                                Symbiosis Institute of Technology (SIT), Nagpur is a premier engineering
                                institution under the Symbiosis International (Deemed University).
                                Established with a vision to provide world-class technical education,
                                SIT Nagpur is committed to nurturing innovative minds and future leaders.
                            </p>

                            <p className="text-text-muted mb-8">
                                Our state-of-the-art campus, experienced faculty, and industry-aligned
                                curriculum create the perfect environment for students to thrive and
                                achieve their full potential.
                            </p>

                            <GlowButton href="https://www.sitnagpur.siu.edu.in" variant="outline">
                                <Globe className="w-4 h-4" />
                                Visit Official Website
                            </GlowButton>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <GlassCard className="p-8 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-electric-purple/10" />
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
                                        Our Vision
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed mb-6">
                                        &ldquo;To be a globally recognized institute of excellence in engineering
                                        education, research, and innovation that produces ethical, socially
                                        responsible, and industry-ready professionals.&rdquo;
                                    </p>
                                    <h3 className="text-2xl font-bold text-text-primary mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
                                        Our Mission
                                    </h3>
                                    <ul className="space-y-3 text-text-secondary">
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-2" />
                                            <span>Provide quality education with emphasis on innovation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-electric-purple mt-2" />
                                            <span>Foster research and development in cutting-edge technologies</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-magenta mt-2" />
                                            <span>Develop industry-academia partnerships</span>
                                        </li>
                                    </ul>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlassCard className="p-6 text-center" glow>
                                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-neon-blue" />
                                    <div
                                        className="text-3xl sm:text-4xl font-bold text-gradient mb-1"
                                        style={{ fontFamily: "var(--font-orbitron)" }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-text-secondary">{stat.label}</div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        badge="Academics"
                        title="Programs Offered"
                        subtitle="Comprehensive programs designed for the industry of tomorrow"
                    />

                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlassCard className="p-6" hover>
                                    <h3 className="text-xl font-bold text-text-primary mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                                        {program.name}
                                    </h3>
                                    <p className="text-text-secondary">{program.description}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        badge="Core Values"
                        title="What We Stand For"
                        subtitle="The principles that guide our institution"
                    />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlassCard className="p-6 text-center h-full" hover glow>
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-neon-blue to-electric-purple flex items-center justify-center">
                                        <value.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-text-primary mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                                        {value.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm">{value.description}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
