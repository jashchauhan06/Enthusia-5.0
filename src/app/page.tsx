"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  Rocket,
  Palette,
  Trophy,
  Users,
  Calendar,
  ArrowRight,
  Zap,
  Music,
  Code,
  Gamepad2
} from "lucide-react";

import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { GlowButton } from "@/components/ui/GlowButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/ui/EventCard";
import { techfestEvents } from "@/data/techfest-events";
import { culturalEvents } from "@/data/cultural-events";

// Festival date - March 14-16, 2026
const festivalDate = new Date("2026-03-14T09:00:00");

const highlights = [
  { icon: Users, value: "10,000+", label: "Participants Expected", color: "text-neon-blue" },
  { icon: Trophy, value: "₹5L+", label: "Prize Pool", color: "text-electric-purple" },
  { icon: Calendar, value: "3 Days", label: "Of Excitement", color: "text-magenta" },
  { icon: Zap, value: "50+", label: "Events", color: "text-aurora-green" },
];

const categories = [
  { icon: Code, title: "Hackathons", description: "Code your way to glory", href: "/techfest#hackathons", color: "from-neon-blue to-electric-purple" },
  { icon: Gamepad2, title: "Gaming", description: "Battle for supremacy", href: "/techfest#gaming", color: "from-electric-purple to-magenta" },
  { icon: Music, title: "Performances", description: "Unleash your talent", href: "/cultural#performances", color: "from-magenta to-cyber-pink" },
  { icon: Palette, title: "Art & Design", description: "Create masterpieces", href: "/cultural#art", color: "from-cyber-pink to-neon-blue" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="relative">
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/30 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.3, 0.4],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-electric-purple/30 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magenta/20 rounded-full blur-[150px]"
          />

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-text-secondary">March 14-16, 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-aurora-green animate-pulse" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            <span className="text-gradient">ENTHUSIA</span>
            <br />
            <span className="text-text-primary">5.0</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-text-secondary mb-4 max-w-2xl mx-auto"
          >
            Experience the{" "}
            <span className="text-neon-blue font-semibold">Parallel Universe</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg text-text-muted mb-12 max-w-xl mx-auto"
          >
            The flagship TechFest + Cultural Festival of Symbiosis Institute of Technology, Nagpur
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <GlowButton href="/register" size="lg">
              <Rocket className="w-5 h-5" />
              Register Now
            </GlowButton>
            <GlowButton href="/about-enthusia" variant="outline" size="lg">
              Explore Events
              <ArrowRight className="w-5 h-5" />
            </GlowButton>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-text-muted text-sm mb-4 uppercase tracking-widest">
              Event Starts In
            </p>
            <CountdownTimer targetDate={festivalDate} />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-neon-blue"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== HIGHLIGHTS SECTION ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 text-center" glow>
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
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

      {/* ===== CATEGORIES SECTION ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Explore"
            title="Event Categories"
            subtitle="From intense hackathons to spectacular performances, find your calling"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={category.href}>
                  <GlassCard className="p-8 text-center group cursor-pointer h-full" hover glow>
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-xl font-bold text-text-primary mb-2 group-hover:text-neon-blue transition-colors"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      {category.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {category.description}
                    </p>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED TECHFEST EVENTS ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="TechFest"
            title="Featured Tech Events"
            subtitle="Showcase your technical prowess in these flagship events"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {techfestEvents.slice(0, 3).map((event) => (
              <EventCard
                key={event.slug}
                title={event.title}
                description={event.description}
                category={event.category}
                slug={event.slug}
                type="techfest"
                date={event.date}
                venue={event.venue}
                participants={event.participants}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <GlowButton href="/techfest" variant="outline">
              View All Tech Events
              <ArrowRight className="w-4 h-4" />
            </GlowButton>
          </div>
        </div>
      </section>

      {/* ===== FEATURED CULTURAL EVENTS ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Cultural Fest"
            title="Featured Cultural Events"
            subtitle="Celebrate art, music, dance, and creativity at its finest"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {culturalEvents.slice(0, 3).map((event) => (
              <EventCard
                key={event.slug}
                title={event.title}
                description={event.description}
                category={event.category}
                slug={event.slug}
                type="cultural"
                date={event.date}
                venue={event.venue}
                participants={event.participants}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <GlowButton href="/cultural" variant="outline">
              View All Cultural Events
              <ArrowRight className="w-4 h-4" />
            </GlowButton>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-purple/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2
            className="text-3xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Ready to Enter the{" "}
            <span className="text-gradient">Parallel Universe</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of participants from across the country for three days
            of innovation, creativity, and unforgettable experiences.
          </p>
          <GlowButton href="/register" size="lg">
            <Sparkles className="w-5 h-5" />
            Register for ENTHUSIA 5.0
          </GlowButton>
        </motion.div>
      </section>
    </div>
  );
}
