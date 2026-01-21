import { Globe, Lightbulb, Users } from "lucide-react";

export function VisionSection() {
    return (
        <section className="relative py-24 bg-black px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Layout: Typography */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="font-mono text-purple-500 tracking-widest text-sm">OUR_PHILOSOPHY</h3>
                            <h2 className="font-heading text-3xl md:text-5xl text-white">
                                VASUDHAIVA <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                    KUTUMBAKAM
                                </span>
                            </h2>
                        </div>

                        <p className="text-xl text-gray-300 italic font-serif">
                            "The World is One Family"
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            Rooted in this ancient philosophy, Enthusia 5.0 unites students from different backgrounds,
                            disciplines, and institutes into one shared experience. We believe that learning, innovation,
                            and culture thrive best when experienced together.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                            <VisionCard icon={Lightbulb} title="INNOVATE" desc="Encourage problem-solving" />
                            <VisionCard icon={Users} title="LEAD" desc="Promote entrepreneurship" />
                            <VisionCard icon={Globe} title="UNITE" desc="Build collaboration" />
                        </div>
                    </div>

                    {/* Right Layout: Video Visual */}
                    <div className="relative h-[400px] md:h-[500px] w-full bg-black rounded-2xl overflow-hidden border border-purple-500/20 group">
                        <video
                            src="/SITNAGPUR.mp4"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 duration-1000"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Overlay Gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

                        {/* Optional: Add a subtle 'Live Feed' indicator */}
                        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-xs font-mono text-red-400">LIVE_FEED</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function VisionCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
            <Icon className="w-6 h-6 text-purple-400 mb-3" />
            <h4 className="font-bold text-white mb-1">{title}</h4>
            <p className="text-xs text-gray-500">{desc}</p>
        </div>
    )
}
