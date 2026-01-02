"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Rocket,
    User,
    Mail,
    Phone,
    Building,
    GraduationCap,
    CheckCircle,
    Sparkles,
    AlertCircle
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { techfestEvents } from "@/data/techfest-events";
import { culturalEvents } from "@/data/cultural-events";

const allEvents = [
    ...techfestEvents.map((e) => ({ ...e, type: "techfest" as const })),
    ...culturalEvents.map((e) => ({ ...e, type: "cultural" as const })),
];

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        events: [] as string[],
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const toggleEvent = (eventSlug: string) => {
        setFormData((prev) => ({
            ...prev,
            events: prev.events.includes(eventSlug)
                ? prev.events.filter((e) => e !== eventSlug)
                : [...prev.events, eventSlug],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="relative pt-24 min-h-screen flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <GlassCard className="p-12 max-w-md mx-auto">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-aurora-green to-neon-blue flex items-center justify-center"
                        >
                            <CheckCircle className="w-10 h-10 text-white" />
                        </motion.div>
                        <h2
                            className="text-2xl font-bold text-text-primary mb-4"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            Registration <span className="text-gradient">Successful!</span>
                        </h2>
                        <p className="text-text-secondary mb-6">
                            Thank you for registering for ENTHUSIA 5.0! We&apos;ve sent a confirmation
                            email with further details.
                        </p>
                        <GlowButton href="/" variant="outline">
                            Back to Home
                        </GlowButton>
                    </GlassCard>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="relative pt-24">
            {/* Hero Section */}
            <section className="relative py-16 px-4 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-magenta/15 rounded-full blur-[150px]" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-medium uppercase tracking-wider bg-electric-purple/10 text-electric-purple border border-electric-purple/30">
                            <Rocket className="w-3 h-3" />
                            Join Us
                        </span>

                        <h1
                            className="text-4xl sm:text-6xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            <span className="text-gradient">Register</span>
                            <span className="text-text-primary"> Now</span>
                        </h1>

                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Secure your spot at ENTHUSIA 5.0 and be part of the Parallel Universe experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Registration Form */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <GlassCard className="p-6 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Details */}
                            <div>
                                <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                                    <User className="w-5 h-5 text-neon-blue" />
                                    Personal Details
                                </h2>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-text-secondary text-sm mb-2">Full Name *</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                                className="w-full bg-white/5 border border-glass-border rounded-xl py-3 pl-10 pr-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-text-secondary text-sm mb-2">Email Address *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                className="w-full bg-white/5 border border-glass-border rounded-xl py-3 pl-10 pr-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-text-secondary text-sm mb-2">Phone Number *</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                                className="w-full bg-white/5 border border-glass-border rounded-xl py-3 pl-10 pr-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-text-secondary text-sm mb-2">College/Institution *</label>
                                        <div className="relative">
                                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                            <input
                                                type="text"
                                                value={formData.college}
                                                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                                required
                                                className="w-full bg-white/5 border border-glass-border rounded-xl py-3 pl-10 pr-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors"
                                                placeholder="Your college name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-text-secondary text-sm mb-2">Year of Study *</label>
                                        <div className="relative">
                                            <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                            <select
                                                value={formData.year}
                                                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                                                required
                                                className="w-full bg-white/5 border border-glass-border rounded-xl py-3 pl-10 pr-4 text-text-primary focus:outline-none focus:border-neon-blue/50 transition-colors appearance-none"
                                            >
                                                <option value="" className="bg-bg-primary">Select Year</option>
                                                <option value="1" className="bg-bg-primary">1st Year</option>
                                                <option value="2" className="bg-bg-primary">2nd Year</option>
                                                <option value="3" className="bg-bg-primary">3rd Year</option>
                                                <option value="4" className="bg-bg-primary">4th Year</option>
                                                <option value="pg" className="bg-bg-primary">Post Graduate</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Event Selection */}
                            <div>
                                <h2 className="text-xl font-bold text-text-primary mb-2 flex items-center gap-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                                    <Sparkles className="w-5 h-5 text-electric-purple" />
                                    Select Events
                                </h2>
                                <p className="text-text-muted text-sm mb-6">
                                    Choose the events you&apos;d like to participate in (you can select multiple)
                                </p>

                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {allEvents.map((event) => (
                                        <motion.button
                                            key={event.slug}
                                            type="button"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => toggleEvent(event.slug)}
                                            className={`p-4 rounded-xl text-left transition-all border ${formData.events.includes(event.slug)
                                                    ? "bg-gradient-to-br from-neon-blue/20 to-electric-purple/20 border-neon-blue/50"
                                                    : "bg-white/5 border-glass-border hover:border-white/20"
                                                }`}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <span className={`text-xs font-medium uppercase ${event.type === "techfest" ? "text-neon-blue" : "text-magenta"
                                                        }`}>
                                                        {event.type === "techfest" ? "Tech" : "Cultural"}
                                                    </span>
                                                    <h3 className="font-semibold text-text-primary mt-1">
                                                        {event.title}
                                                    </h3>
                                                    <p className="text-xs text-text-muted mt-1">{event.category}</p>
                                                </div>
                                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.events.includes(event.slug)
                                                        ? "border-neon-blue bg-neon-blue"
                                                        : "border-text-muted"
                                                    }`}>
                                                    {formData.events.includes(event.slug) && (
                                                        <CheckCircle className="w-3 h-3 text-white" />
                                                    )}
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>

                                {formData.events.length > 0 && (
                                    <p className="mt-4 text-sm text-neon-blue">
                                        {formData.events.length} event(s) selected
                                    </p>
                                )}
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-glass-border">
                                <AlertCircle className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
                                <p className="text-text-muted text-sm">
                                    By registering, you agree to receive communications about ENTHUSIA 5.0
                                    and confirm that the information provided is accurate. Event-specific
                                    fees (if any) will be collected separately.
                                </p>
                            </div>

                            {/* Submit Button */}
                            <GlowButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    "Submitting Registration..."
                                ) : (
                                    <>
                                        <Rocket className="w-5 h-5" />
                                        Complete Registration
                                    </>
                                )}
                            </GlowButton>
                        </form>
                    </GlassCard>
                </div>
            </section>
        </div>
    );
}
