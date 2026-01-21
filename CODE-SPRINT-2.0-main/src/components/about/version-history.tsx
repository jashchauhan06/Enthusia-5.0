import { cn } from "@/lib/utils";

const versions = [
    { ver: "v5.0", title: "THE PARALLEL UNIVERSE", year: "2026", active: true, desc: "Current Build. Reality distortion field active." },
    { ver: "v4.0", title: "THE NEON UPDATE", year: "2024", active: false, desc: "Introduced Cyberpunk aesthetics and expanded TechFest modules." },
    { ver: "v3.0", title: "SYSTEM REBOOT", year: "2023", active: false, desc: "Post-pandemic re-initialization. Core systems restored." },
    { ver: "v2.0", title: "EXPANSION PACK", year: "2022", active: false, desc: "Scaled up cultural subroutines. Multiplayer nodes added." },
    { ver: "v1.0", title: "GENESIS", year: "2010", active: false, desc: "Initial Commit. The start of the legacy." },
];

export function VersionHistory() {
    return (
        <div className="w-full py-24 bg-black relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="font-heading text-3xl md:text-5xl text-center text-white mb-16">
                    LEGACY_PROTOCOL
                </h2>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12">
                    {versions.map((v) => (
                        <div key={v.ver} className="relative pl-8 md:pl-12 group">
                            {/* Timeline Dot */}
                            <div className={cn(
                                "absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-all duration-300",
                                v.active
                                    ? "bg-cyan-500 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                                    : "bg-black border-gray-600 group-hover:border-white"
                            )} />

                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                                <h3 className={cn(
                                    "font-heading text-2xl md:text-3xl",
                                    v.active ? "text-cyan-400" : "text-white/60 group-hover:text-white"
                                )}>
                                    {v.ver}
                                </h3>
                                <span className="font-mono text-sm text-gray-500">// {v.year}</span>
                            </div>

                            <h4 className="font-body font-bold text-lg text-white mt-1 mb-2">{v.title}</h4>
                            <p className="text-gray-400 max-w-xl leading-relaxed text-sm md:text-base">
                                {v.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        </div>
    );
}
