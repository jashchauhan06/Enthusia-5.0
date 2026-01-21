import { Terminal, Music, Cpu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExpandedArenas() {
    return (
        <section className="relative py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 space-y-32">

                {/* TechFest Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Placeholder for Tech Visual */}
                        <div className="aspect-video bg-blue-950/30 rounded-xl border border-blue-500/30 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine opacity-0 group-hover:opacity-100" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Cpu className="w-24 h-24 text-blue-500/50" />
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs">
                            <Terminal className="w-3 h-3" />
                            <span>PROTOCOL: TECH_FEST</span>
                        </div>

                        <h2 className="font-heading text-4xl md:text-5xl text-white">
                            COMPETE. BUILD. <span className="text-blue-500">SOLVE.</span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            A battlefield for innovators, coders, strategists, and creators.
                            Testing logic, creativity, teamwork, execution, and leadership.
                        </p>

                        <ul className="space-y-4 pt-4">
                            <ArenaItem
                                title="SITNovate 2.0"
                                desc="24-Hour Hackathon. Build solutions under pressure."
                                color="blue"
                            />
                            <ArenaItem
                                title="CodeSprint 2.0"
                                desc="Competitive Coding Arena for algorithmic masters."
                                color="blue"
                            />
                            <ArenaItem
                                title="Stranger Tech"
                                desc="Tech-based treasure hunt. Decode the clues."
                                color="blue"
                            />
                        </ul>
                    </div>
                </div>

                {/* Cultural Fest Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-mono text-xs">
                            <Music className="w-3 h-3" />
                            <span>PROTOCOL: CULTURAL_FEST</span>
                        </div>

                        <h2 className="font-heading text-4xl md:text-5xl text-white">
                            EXPRESS. PERFORM. <span className="text-pink-500">CELEBRATE.</span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            When the sun sets, the fest transforms. A stage for music,
                            dance, fashion, and unforgettable nights.
                        </p>

                        <ul className="space-y-4 pt-4">
                            <ArenaItem
                                title="Celebrity Night"
                                desc="High-energy live performance by renowned artists."
                                color="pink"
                            />
                            <ArenaItem
                                title="Ramp Walk"
                                desc="Fashion showcase with futuristic themes."
                                color="pink"
                            />
                            <ArenaItem
                                title="DJ Night"
                                desc="Electrifying beats and immersive lights."
                                color="pink"
                            />
                        </ul>
                    </div>

                    <div className="relative">
                        {/* Placeholder for Cultural Visual */}
                        <div className="aspect-video bg-pink-950/30 rounded-xl border border-pink-500/30 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(236,72,153,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine opacity-0 group-hover:opacity-100" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Sparkles className="w-24 h-24 text-pink-500/50" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function ArenaItem({ title, desc, color }: { title: string, desc: string, color: "blue" | "pink" }) {
    const colorClasses = {
        blue: "bg-blue-500",
        pink: "bg-pink-500"
    };

    return (
        <li className="flex items-start gap-4">
            <div className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", colorClasses[color])} />
            <div>
                <h4 className="text-white font-bold">{title}</h4>
                <p className="text-gray-500 text-sm">{desc}</p>
            </div>
        </li>
    );
}
