"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Cpu, Gamepad2, Wrench, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/ui/EventCard";
import { techfestEvents, TechFestEvent } from "@/data/techfest-events";

const categories = [
    { id: "all", name: "All Events", icon: Sparkles },
    { id: "Hackathon", name: "Hackathons", icon: Code },
    { id: "Workshop", name: "Workshops", icon: Wrench },
    { id: "Competition", name: "Competitions", icon: Cpu },
    { id: "Gaming", name: "Gaming", icon: Gamepad2 },
];

export default function TechFestPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredEvents = activeCategory === "all"
        ? techfestEvents
        : techfestEvents.filter((event) => event.category === activeCategory);

    return (
        <div className="relative pt-24">
            {/* Hero Section */}
            <section className="relative py-20 px-4 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-purple/15 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-medium uppercase tracking-wider bg-neon-blue/10 text-neon-blue border border-neon-blue/30">
                            <Code className="w-3 h-3" />
                            Technology Events
                        </span>

                        <h1
                            className="text-4xl sm:text-6xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                            <span className="text-gradient">TechFest</span>
                            <span className="text-text-primary"> Events</span>
                        </h1>

                        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                            Hackathons, workshops, competitions, and gaming tournaments -
                            showcase your technical prowess and compete with the best.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeCategory === category.id
                                        ? "bg-gradient-to-r from-neon-blue to-electric-purple text-white shadow-lg shadow-neon-blue/25"
                                        : "glass text-text-secondary hover:text-text-primary"
                                    }`}
                            >
                                <category.icon className="w-4 h-4" />
                                {category.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredEvents.map((event, index) => (
                            <motion.div
                                key={event.slug}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <EventCard
                                    title={event.title}
                                    description={event.description}
                                    category={event.category}
                                    slug={event.slug}
                                    type="techfest"
                                    date={event.date}
                                    venue={event.venue}
                                    participants={event.participants}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredEvents.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-text-muted text-lg">No events found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
