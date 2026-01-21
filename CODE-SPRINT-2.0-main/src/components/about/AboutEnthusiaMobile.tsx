import { Terminal, Music, Info, Globe, Lightbulb, Users } from "lucide-react";
import { TerminalSection } from "@/components/about/terminal-section";

export function AboutEnthusiaMobile() {
    return (
        <section
            id="about-enthusia-mobile"
            className="relative w-full pt-32 px-4 pb-24 overflow-hidden"
        >
            <div className="max-w-4xl mx-auto space-y-16">
                {/* Mobile Hero */}
                <div className="text-center space-y-6 relative z-10">
                    <div className="inline-block px-3 py-1 mb-2 rounded-full bg-cyan-900/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs">
                        SYSTEM_STATUS: ONLINE
                    </div>

                    <h1 className="font-heading text-4xl text-white leading-tight">
                        ENTER THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">PARALLEL UNIVERSE</span>
                    </h1>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                        Enthusia 5.0 is not just a fest. It is a reality distortion field where technology meets culture.
                    </p>

                    {/* Mobile Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                            <div className="text-xl font-heading text-cyan-400">3000+</div>
                            <div className="text-[10px] text-gray-500 tracking-wider">FOOTFALL</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                            <div className="text-xl font-heading text-pink-400">3 DAYS</div>
                            <div className="text-[10px] text-gray-500 tracking-wider">DURATION</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                            <div className="text-xl font-heading text-purple-400">10+</div>
                            <div className="text-[10px] text-gray-500 tracking-wider">EVENTS</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                            <div className="text-xl font-heading text-green-400">2L+</div>
                            <div className="text-[10px] text-gray-500 tracking-wider">PRIZE POOL</div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* 1. Theme Narrative */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                        <Info className="w-5 h-5" />
                        <span className="font-mono text-xs tracking-widest uppercase">The Theme</span>
                    </div>
                    <h2 className="font-heading text-2xl text-white">
                        WHERE LOGIC MEETS <span className="text-pink-500">CHAOS</span>
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Imagine a world where code compiles into art, and music generates algorithms. Enthusia 5.0 blurs the lines between the technical and the cultural, creating a singular singularity of experience.
                    </p>
                </div>

                {/* 2. Vision Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                        <Lightbulb className="w-5 h-5" />
                        <span className="font-mono text-xs tracking-widest uppercase">Our Vision</span>
                    </div>
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-purple-500/20">
                        <video
                            src="/SITNAGPUR.mp4"
                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed px-2 text-center pt-2">
                        Rooted in <span className="text-purple-400 font-bold">Vasudhaiva Kutumbakam</span> - The World is One Family.
                    </p>

                    {/* Vision Cards Grid */}
                    <div className="grid grid-cols-1 gap-3 pt-2">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-center gap-4">
                            <div className="p-2 bg-purple-500/20 rounded-md">
                                <Lightbulb className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">INNOVATE</h4>
                                <p className="text-xs text-gray-500">Encourage problem-solving</p>
                            </div>
                        </div>

                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-center gap-4">
                            <div className="p-2 bg-purple-500/20 rounded-md">
                                <Users className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">LEAD</h4>
                                <p className="text-xs text-gray-500">Promote entrepreneurship</p>
                            </div>
                        </div>

                        <div className="p-4 bg-white/5 border border-white/10 rounded-lg flex items-center gap-4">
                            <div className="p-2 bg-purple-500/20 rounded-md">
                                <Globe className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">UNITE</h4>
                                <p className="text-xs text-gray-500">Build collaboration</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Expanded Arenas (Tech & Cultural) */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h2 className="font-heading text-2xl text-white mb-2">CHOOSE YOUR ARENA</h2>
                        <p className="font-mono text-xs text-gray-500">SELECT_PATHWAY // ENTER_SIMULATION</p>
                    </div>

                    {/* TechFest */}
                    <div className="bg-gradient-to-br from-blue-900/10 to-black border border-blue-500/20 rounded-xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-3 opacity-20">
                            <Terminal className="w-12 h-12 text-blue-500" />
                        </div>
                        <h3 className="font-heading text-xl text-blue-400 mb-2">TECH_FEST</h3>
                        <p className="text-xs text-gray-500 mb-4">Compete. Build. Solve.</p>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-blue-300 font-bold"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> SITNovate 2.0</div>
                                <span className="text-xs text-gray-500 pl-4">24-Hour Hackathon. Build solutions under pressure.</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-blue-300 font-bold"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> CodeSprint 2.0</div>
                                <span className="text-xs text-gray-500 pl-4">Competitive Coding Arena for algorithmic masters.</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-blue-300 font-bold"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Stranger Tech</div>
                                <span className="text-xs text-gray-500 pl-4">Tech-based treasure hunt. Decode the clues.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Cultural Fest */}
                    <div className="bg-gradient-to-br from-pink-900/10 to-black border border-pink-500/20 rounded-xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-3 opacity-20">
                            <Music className="w-12 h-12 text-pink-500" />
                        </div>
                        <h3 className="font-heading text-xl text-pink-400 mb-2">CULTURAL_FEST</h3>
                        <p className="text-xs text-gray-500 mb-4">Express. Perform. Celebrate.</p>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-pink-300 font-bold"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full" /> Celebrity Night</div>
                                <span className="text-xs text-gray-500 pl-4">High-energy live performance by renowned artists.</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-pink-300 font-bold"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full" /> Ramp Walk</div>
                                <span className="text-xs text-gray-500 pl-4">Fashion showcase with futuristic themes.</span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-pink-300 font-bold"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full" /> DJ Night</div>
                                <span className="text-xs text-gray-500 pl-4">Electrifying beats and immersive lights.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 4. Interactive Terminal */}
                <div className="w-full relative shadow-2xl">
                    <TerminalSection />
                </div>

            </div>
        </section>
    );
}
