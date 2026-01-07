import React from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className }: Omit<GlitchTextProps, "as">) {
    return (
        <span className={cn("relative inline-block group", className)}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-1 group-hover:translate-x-[2px]">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 group-hover:animate-glitch-2 group-hover:-translate-x-[2px]">
                {text}
            </span>
        </span>
    );
}
