"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About SIT", href: "/about-sit" },
    { name: "About Enthusia", href: "/about-enthusia" },
    { name: "TechFest", href: "/techfest" },
    { name: "Cultural Fest", href: "/cultural" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "py-3 bg-bg-primary/80 backdrop-blur-xl border-b border-glass-border"
                        : "py-5 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <motion.div
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                <Sparkles className="w-8 h-8 text-neon-blue" />
                                <div className="absolute inset-0 blur-lg bg-neon-blue/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>
                            <span
                                className="text-xl font-bold tracking-wider"
                                style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                                <span className="text-gradient">ENTHUSIA</span>
                                <span className="text-text-secondary ml-1">5.0</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${pathname === item.href
                                            ? "text-neon-blue"
                                            : "text-text-secondary hover:text-text-primary"
                                        }`}
                                >
                                    {item.name}
                                    {pathname === item.href && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neon-blue"
                                            style={{ boxShadow: "0 0 10px var(--neon-blue)" }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Register Button & Mobile Menu Toggle */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/register"
                                className="hidden sm:block btn-primary text-sm"
                            >
                                Register Now
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-bg-primary/95 backdrop-blur-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-bg-secondary/50 backdrop-blur-xl border-l border-glass-border p-8 pt-24"
                        >
                            <div className="flex flex-col gap-2">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all ${pathname === item.href
                                                    ? "text-neon-blue bg-neon-blue/10 border border-neon-blue/30"
                                                    : "text-text-secondary hover:text-text-primary hover:bg-glass-bg"
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.05 }}
                                    className="mt-4"
                                >
                                    <Link
                                        href="/register"
                                        className="block w-full btn-primary text-center text-lg"
                                    >
                                        Register Now
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
