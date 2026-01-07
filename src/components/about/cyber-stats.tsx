import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GlitchText } from "@/components/ui/glitch-text";

function MetricCard({ label, value, unit, delay = 0 }: { label: string, value: number, unit?: string, delay?: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return (
        <div className="relative p-6 border border-cyan-900/50 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden group hover:border-cyan-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-2 opacity-50">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            </div>
            <div className="text-4xl md:text-5xl font-heading text-white mb-2 tracking-tighter">
                {count}{unit && <span className="text-2xl text-cyan-400 ml-1">{unit}</span>}
            </div>
            <div className="text-cyan-500/80 font-mono text-sm uppercase tracking-widest">
                {label}
            </div>
            {/* Decorative Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 animate-shine pointer-events-none" />
        </div>
    );
}

export function CyberStats() {
    return (
        <div className="w-full py-24 border-t border-white/5 bg-black relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-4">
                    <div>
                        <h3 className="text-2xl font-heading text-white mb-2">SYSTEM_VITALS</h3>
                        <p className="font-mono text-xs text-green-500">STATUS: OPTIMAL // MONITORING_ACTIVE</p>
                    </div>
                    <div className="hidden md:block font-mono text-xs text-gray-500 text-right">
                        <div>UPTIME: 15Y 03M 12D</div>
                        <div>SERVER: REGION_NAGPUR</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <MetricCard label="ACTIVE_NODES" value={5000} unit="+" />
                    <MetricCard label="DATA_PACKETS" value={3} unit="L+" delay={200} />
                    <MetricCard label="MODULES_LOADED" value={45} unit="" delay={400} />
                    <MetricCard label="SYSTEM_VERSION" value={5} unit=".0" delay={600} />
                </div>
            </div>
        </div>
    );
}
