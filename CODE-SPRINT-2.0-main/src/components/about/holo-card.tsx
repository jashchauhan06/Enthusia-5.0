import React from "react";
import { cn } from "@/lib/utils";

interface HoloCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export function HoloCard({ children, className, title }: HoloCardProps) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] group",
                className
            )}
        >
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(6,182,212,0.05)_50%,transparent_100%)] bg-[length:100%_4px] animate-scanline pointer-events-none opacity-0 group-hover:opacity-100" />

            <div className="p-6 relative z-10">
                {title && (
                    <h3 className="font-heading text-xl text-cyan-400 mb-4 tracking-wider uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                        {title}
                    </h3>
                )}
                <div className="text-gray-300 font-body leading-relaxed">
                    {children}
                </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/0 transition-all duration-300 group-hover:border-cyan-500/50 rounded-tl-xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/0 transition-all duration-300 group-hover:border-cyan-500/50 rounded-br-xl" />
        </div>
    );
}
