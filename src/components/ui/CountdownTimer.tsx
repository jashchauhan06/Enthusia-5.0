"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
    targetDate: Date;
    className?: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const difference = target - now;

    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <motion.div
                key={value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="relative"
            >
                <div className="glass-card px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px] flex items-center justify-center border border-glass-border hover:border-neon-blue/30 transition-colors">
                    <span
                        className="text-3xl sm:text-5xl font-bold text-gradient"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                        {value.toString().padStart(2, "0")}
                    </span>
                </div>
                {/* Glow effect under the card */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent blur-sm" />
            </motion.div>
            <span className="mt-3 text-xs sm:text-sm text-text-secondary uppercase tracking-widest">
                {label}
            </span>
        </div>
    );
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTimeLeft(calculateTimeLeft(targetDate));

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!mounted) {
        return (
            <div className={`flex items-center justify-center gap-3 sm:gap-6 ${className}`}>
                {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
                    <TimeUnit key={label} value={0} label={label} />
                ))}
            </div>
        );
    }

    return (
        <div className={`flex items-center justify-center gap-3 sm:gap-6 ${className}`}>
            <TimeUnit value={timeLeft.days} label="Days" />
            <span className="text-3xl sm:text-5xl text-neon-blue font-light mt-[-20px]">:</span>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <span className="text-3xl sm:text-5xl text-electric-purple font-light mt-[-20px]">:</span>
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <span className="text-3xl sm:text-5xl text-magenta font-light mt-[-20px]">:</span>
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
}
