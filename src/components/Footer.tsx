"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Sparkles,
    Mail,
    Phone,
    MapPin,
    Instagram,
    Twitter,
    Facebook,
    Youtube,
    Linkedin
} from "lucide-react";

const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", href: "/" },
            { name: "About Enthusia", href: "/about-enthusia" },
            { name: "TechFest", href: "/techfest" },
            { name: "Cultural Fest", href: "/cultural" },
            { name: "Register", href: "/register" },
        ],
    },
    {
        title: "Events",
        links: [
            { name: "Hackathons", href: "/techfest#hackathons" },
            { name: "Workshops", href: "/techfest#workshops" },
            { name: "Competitions", href: "/techfest#competitions" },
            { name: "Performances", href: "/cultural#performances" },
            { name: "Art & Design", href: "/cultural#art" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "About SIT", href: "/about-sit" },
            { name: "Sponsors", href: "/sponsors" },
            { name: "Gallery", href: "/gallery" },
            { name: "Contact", href: "/contact" },
            { name: "FAQs", href: "/contact#faqs" },
        ],
    },
];

const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export function Footer() {
    return (
        <footer className="relative mt-20 border-t border-glass-border bg-bg-secondary/50">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Sparkles className="w-8 h-8 text-neon-blue" />
                            <span
                                className="text-2xl font-bold tracking-wider"
                                style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                                <span className="text-gradient">ENTHUSIA</span>
                                <span className="text-text-secondary ml-1">5.0</span>
                            </span>
                        </Link>
                        <p className="text-text-secondary mb-6 max-w-sm">
                            Experience the Parallel Universe at ENTHUSIA 5.0 - The flagship
                            TechFest and Cultural Festival of Symbiosis Institute of
                            Technology, Nagpur.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href="mailto:enthusia@sitnagpur.edu.in"
                                className="flex items-center gap-3 text-text-secondary hover:text-neon-blue transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                <span>enthusia@sitnagpur.edu.in</span>
                            </a>
                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-3 text-text-secondary hover:text-neon-blue transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span>+91 98765 43210</span>
                            </a>
                            <div className="flex items-start gap-3 text-text-secondary">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span>
                                    Symbiosis Institute of Technology, Nagpur Campus, Maharashtra,
                                    India
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3
                                className="text-text-primary font-semibold mb-4"
                                style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-text-secondary hover:text-neon-blue transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Links & Copyright */}
                <div className="mt-12 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-neon-blue hover:border-neon-blue/50 transition-colors"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-text-muted text-sm text-center md:text-right">
                        <p>
                            © {new Date().getFullYear()} ENTHUSIA 5.0. All rights reserved.
                        </p>
                        <p className="mt-1">
                            Symbiosis Institute of Technology, Nagpur
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-electric-purple/10 to-transparent pointer-events-none" />
        </footer>
    );
}
