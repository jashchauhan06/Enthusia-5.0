"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    ChevronDown,
    User,
    Building
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        value: "enthusia@sitnagpur.edu.in",
        href: "mailto:enthusia@sitnagpur.edu.in",
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+91 98765 43210",
        href: "tel:+919876543210",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "SIT Nagpur Campus, Maharashtra",
        href: "https://maps.google.com",
    },
];

const faqs = [
    {
        question: "Who can participate in ENTHUSIA 5.0?",
        answer: "ENTHUSIA 5.0 is open to all college students across India. Some events may have specific eligibility criteria mentioned in their respective event pages.",
    },
    {
        question: "Is there a registration fee?",
        answer: "Registration fees vary by event. Some events are free while others have nominal fees. Check individual event pages for details.",
    },
    {
        question: "Will accommodation be provided?",
        answer: "Yes, limited accommodation is available on a first-come-first-served basis for outstation participants. Contact us for details.",
    },
    {
        question: "Can I participate in multiple events?",
        answer: "Yes! You can register for multiple events as long as their timings don't clash. Plan your schedule accordingly.",
    },
    {
        question: "How do I get to SIT Nagpur?",
        answer: "SIT Nagpur is well-connected by road, rail, and air. The nearest airport is Dr. Babasaheb Ambedkar International Airport, Nagpur.",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        college: "",
        subject: "",
        message: "",
    });
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", college: "", subject: "", message: "" });

        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="relative pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-electric-purple/15 rounded-full blur-[150px]" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-medium uppercase tracking-wider bg-neon-blue/10 text-neon-blue border border-neon-blue/30">
                            <MessageSquare className="w-3 h-3" />
                            Get in Touch
                        </span>

                        <h1
                            className="text-4xl sm:text-6xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            <span className="text-gradient">Contact</span>
                            <span className="text-text-primary"> Us</span>
                        </h1>

                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Have questions? We&apos;d love to hear from you. Send us a message
                            and we&apos;ll respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-8 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-3 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={info.title}
                                href={info.href}
                                target={info.title === "Visit Us" ? "_blank" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard className="p-6 text-center h-full" hover glow>
                                    <info.icon className="w-8 h-8 mx-auto mb-3 text-neon-blue" />
                                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                                        {info.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm">{info.value}</p>
                                </GlassCard>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & FAQs */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-text-primary mb-6" style={{ fontFamily: "var(--font-orbitron)" }}>
                                Send us a Message
                            </h2>

                            <GlassCard className="p-6 md:p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-text-secondary text-sm mb-2">Your Name</label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    required
                                                    className="w-full bg-white/5 border border-glass-border rounded-xl py-3 pl-10 pr-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-text-secondary text-sm mb-2">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    required
                                                    className="w-full bg-white/5 border border-glass-border rounded-xl py-3 pl-10 pr-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-text-secondary text-sm mb-2">College/Institution</label>
                                        <div className="relative">
                                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                            <input
                                                type="text"
                                                value={formData.college}
                                                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                                className="w-full bg-white/5 border border-glass-border rounded-xl py-3 pl-10 pr-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors"
                                                placeholder="Your college name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-text-secondary text-sm mb-2">Subject</label>
                                        <input
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            required
                                            className="w-full bg-white/5 border border-glass-border rounded-xl py-3 px-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-text-secondary text-sm mb-2">Message</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            rows={4}
                                            className="w-full bg-white/5 border border-glass-border rounded-xl py-3 px-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                                            placeholder="Your message..."
                                        />
                                    </div>

                                    <GlowButton type="submit" className="w-full" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : submitted ? (
                                            "Message Sent! ✓"
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Send Message
                                            </>
                                        )}
                                    </GlowButton>
                                </form>
                            </GlassCard>
                        </motion.div>

                        {/* FAQs */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            id="faqs"
                        >
                            <h2 className="text-2xl font-bold text-text-primary mb-6" style={{ fontFamily: "var(--font-orbitron)" }}>
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <GlassCard key={index} className="overflow-hidden">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full flex items-center justify-between p-4 text-left"
                                        >
                                            <span className="font-medium text-text-primary pr-4">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: openFaq === index ? "auto" : 0,
                                                opacity: openFaq === index ? 1 : 0,
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-4 pb-4 text-text-secondary">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    </GlassCard>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
