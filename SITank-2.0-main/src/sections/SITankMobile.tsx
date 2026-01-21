import {
    FilmGrain,
    StockTicker,
    HeroVideoBackground,
    MarketWatchSection,
    SmartImage,
    MARQUEE_DATA,
    STUDENT_DATA,
    JURY_DATA,
    FAQSection,
    PosterSection
} from "../shared";

export const SITankMobile = () => {
    const handleGoBack = () => {
        window.location.href = "https://enthusia5-0.vercel.app/#techfest-events";
    };

    return (
        <section className="relative min-h-screen bg-[#120f0d] text-[#e8d5b5] font-serif overflow-hidden selection:bg-[#d4b483] selection:text-black">
            <FilmGrain />

            {/* MOBILE HERO WITH VIDEO BG */}
            <div className="relative min-h-screen flex flex-col pt-0 overflow-hidden">
                <HeroVideoBackground />
                <StockTicker speed={15} />
                
                {/* Go Back Button - Bottom Left of Hero */}
                <button
                    onClick={handleGoBack}
                    className="absolute bottom-20 left-4 z-50 px-6 py-3 bg-[#d4b483] text-[#120f0d] font-mono font-bold tracking-widest hover:bg-[#c2a270] transition-colors border-2 border-[#d4b483] shadow-[4px_4px_0px_#5c4d3c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none text-sm"
                >
                    ← Go Back
                </button>

                <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-6">
                    <div className="mb-4 inline-block border border-[#d4b483] px-3 py-1 text-[10px] font-mono tracking-[0.3em] uppercase bg-[#2c241b]/80 backdrop-blur-sm">
                        The Big Bull of Tech
                    </div>

                    <h1 className="text-[18vw] leading-[0.8] font-bold text-[#d4b483] drop-shadow-[4px_4px_0px_#5c4d3c] mb-8 tracking-tighter whitespace-nowrap">
                        SITank <span className="text-[18vw]">2.0</span>
                    </h1>
                </div>

                <StockTicker direction="right" speed={20} />
            </div>

            <MarketWatchSection />

            <div className="relative z-20 bg-[#120f0d] border-t border-[#5c4d3c]">
                <div className="px-4 py-16">

                {/* Highlights (Mobile Marquee) */}
                <div className="mb-12 -mx-4 overflow-hidden">
                    <h2 className="text-2xl font-bold text-[#d4b483] mb-6 font-mono border-l-4 border-green-500 pl-3 ml-4">Event Highlights</h2>
                    <div className="bg-black py-6 border-y-2 border-[#2c241b] min-h-[200px] relative">
                        <div
                            className="flex gap-4 will-change-transform"
                            style={{
                                width: 'max-content',
                                animation: 'scroll 20s linear infinite',
                                transform: 'translateZ(0)', // Force hardware acceleration
                            }}
                        >
                            {MARQUEE_DATA.map((img, idx) => (
                                <div
                                    key={`mobile-highlight-${idx}-${img.index}`}
                                    className="w-64 aspect-video bg-white p-1 flex-shrink-0"
                                    style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}
                                >
                                    <div className="h-full w-full bg-[#2c241b] border border-[#5c4d3c] relative overflow-hidden">
                                        <img 
                                            src={`/images/sitank/${img.index}.${img.ext}`} 
                                            alt={`Event Highlight ${img.index}`} 
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                            style={{ transform: 'translateZ(0)' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <style dangerouslySetInnerHTML={{
                            __html: `
                                @keyframes scroll {
                                    0% {
                                        transform: translateX(0) translateZ(0);
                                    }
                                    100% {
                                        transform: translateX(-50%) translateZ(0);
                                    }
                                }
                            `
                        }} />
                    </div>
                </div>

                {/* JURY PANEL */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#d4b483] mb-6 font-mono border-l-4 border-yellow-500 pl-3">Jury Panel</h2>
                    <div className="space-y-6">
                        {JURY_DATA.map((jury, i) => (
                            <div key={i} className="bg-[#1a1612] p-6 border border-[#5c4d3c] shadow-[8px_8px_0px_#2c241b] relative">
                                {/* Featured Badge for Pitch to Get Rich participants */}
                                {(jury.name.includes("Rohit Chinchanikar") || jury.name.includes("Abhishek Sharma")) && (
                                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider transform rotate-12 shadow-[3px_3px_0px_rgba(0,0,0,0.8)] border-2 border-red-800">
                                        ⭐ Featured in Pitch to Get Rich
                                    </div>
                                )}
                                
                                <div className="flex flex-col items-center text-center mb-4">
                                    <div className="w-32 h-32 bg-[#2c241b] border-4 border-[#d4b483] overflow-hidden flex items-center justify-center mb-3">
                                        {jury.image ? (
                                            <SmartImage src={jury.image} alt={jury.name} fit="cover" className="w-full h-full" disableEffects />
                                        ) : (
                                            <span className="text-4xl font-bold text-[#d4b483]">{jury.name.charAt(0)}</span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#d4b483]">{jury.name}</h3>
                                    <p className="text-xs text-[#d4b483] font-mono uppercase tracking-wider mt-1">{jury.title}</p>
                                </div>
                                <p className="text-sm text-[#a89070] leading-relaxed font-mono mb-4 text-justify min-h-[200px]">{jury.bio}</p>
                                <div className="flex gap-3 justify-center">
                                    {jury.linkedin && (
                                        <a
                                            href={jury.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-[#0077b5] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#005885] transition-all border-2 border-[#0077b5] shadow-[3px_3px_0px_rgba(0,0,0,0.8)]"
                                        >
                                            LinkedIn
                                        </a>
                                    )}
                                    {jury.instagram && (
                                        <a
                                            href={jury.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all border-2 border-[#dc2743] shadow-[3px_3px_0px_rgba(0,0,0,0.8)]"
                                        >
                                            Instagram
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Events under SITank 2.0 */}
                <div id="events-mobile" className="mb-12">
                    <h2 className="text-2xl font-bold text-[#d4b483] mb-6 font-mono border-l-4 border-blue-500 pl-3">Events under SITank 2.0</h2>
                    <div className="space-y-6">
                        <div className="bg-[#1a1612] p-6 border border-[#5c4d3c] shadow-[8px_8px_0px_#2c241b]">
                            <h3 className="text-2xl font-bold mb-2 text-[#d4b483] uppercase tracking-widest border-b border-[#5c4d3c] pb-3">Dalal Street</h3>
                            <p className="text-lg text-[#a89070] font-mono mb-4 italic">(Pitch to Win)</p>
                            <div className="text-base text-[#a89070] leading-relaxed font-mono mb-4">
                                <ul className="flex gap-2 flex-col list-disc pl-5">
                                    <li>Investment Opportunity</li>
                                    <li>Potential Seed Funding</li>
                                    <li>Participation Certificate</li>
                                    <li>Incubation Assistance</li>
                                    <li>Mentoring and networking opportunity</li>
                                </ul>
                            </div>
                            
                            <button
                                onClick={() => window.open("https://unstop.com/p/the-dalal-street-enthusia-50-symbiosis-institute-of-technology-nagpur-1625298", "_blank")}
                                className="w-full px-6 py-3 bg-[#d4b483] text-[#120f0d] font-mono font-bold uppercase tracking-widest hover:bg-[#c2a270] transition-all border-2 border-[#d4b483] shadow-[4px_4px_0px_rgba(0,0,0,0.8)]"
                            >
                                Register Now
                            </button>
                        </div>
                        
                        <div className="bg-[#1a1612] p-6 border border-[#5c4d3c] shadow-[8px_8px_0px_#2c241b]">
                            <h3 className="text-2xl font-bold mb-2 text-[#d4b483] uppercase tracking-widest border-b border-[#5c4d3c] pb-3">The Boardroom Battle</h3>
                            <p className="text-lg text-[#a89070] font-mono mb-4 italic">(Ideathon)</p>
                            <div className="text-base text-[#a89070] leading-relaxed font-mono mb-4">
                                <ul className="flex gap-2 flex-col list-disc pl-5">
                                    <li>Build solutions for realworld problem statements</li>
                                    <li>Convert ideas into Minimum Viable Products</li>
                                    <li>Compete on innovation + execution</li>
                                    <li>Learn how startups are actually built</li>
                                </ul>
                            </div>
                            
                            {/* Problem Statements Section */}
                            <div className="mb-4 bg-gradient-to-br from-[#2c241b] to-[#1a1612] p-4 border-2 border-[#d4b483] relative overflow-hidden shadow-[6px_6px_0px_rgba(0,0,0,0.5)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#d4b483] to-transparent"></div>
                                
                                <div className="relative z-10">
                                    <h4 className="text-lg font-bold text-[#d4b483] mb-3 uppercase tracking-wider font-mono border-b-2 border-[#d4b483] pb-2 flex items-center gap-2">
                                        <span className="text-lg">📋</span>
                                        Problem Statements
                                    </h4>
                                    <div className="bg-[#1a1612] p-3 rounded border border-[#5c4d3c] shadow-inner">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-[#d4b483] font-mono text-xs font-bold uppercase tracking-wider">Problem Statements are Live</span>
                                        </div>
                                        <a 
                                            href="https://drive.google.com/drive/folders/1RxdLbIw8zekfkaVHBSkidO1xcerwLSqB?usp=sharing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 text-[#a89070] hover:text-[#d4b483] transition-all duration-300 font-mono text-sm leading-relaxed p-2 bg-[#2c241b] rounded border border-[#5c4d3c] hover:border-[#d4b483] hover:shadow-[3px_3px_0px_rgba(212,180,131,0.3)]"
                                        >
                                            <span className="text-lg group-hover:scale-110 transition-transform duration-300">📁</span>
                                            <span className="flex-1">View Problem Statements</span>
                                            <span className="text-[#d4b483] group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => window.open("https://unstop.com/p/the-boardroom-battle-enthusia-50-symbiosis-institute-of-technology-nagpur-1623743", "_blank")}
                                className="w-full px-6 py-3 bg-[#d4b483] text-[#120f0d] font-mono font-bold uppercase tracking-widest hover:bg-[#c2a270] transition-all border-2 border-[#d4b483] shadow-[4px_4px_0px_rgba(0,0,0,0.8)]"
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* IN COLLABORATION WITH */}
                <div className="mb-12">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-[#d4b483] tracking-tighter">In Collaboration with</h2>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-[#1a1612] p-6 border-2 border-[#d4b483] shadow-[6px_6px_0px_#2c241b]">
                            <div className="aspect-video bg-[#2c241b] border border-[#5c4d3c] flex items-center justify-center mb-3">
                                <SmartImage src="/images/sponsor/Harrier.webp" alt="Harrier Information Systems" fit="contain" className="w-full h-full p-4" />
                            </div>
                            <h3 className="text-base font-bold text-[#d4b483] text-center font-mono">Harrier Information Systems<br />Pvt. Ltd.</h3>
                        </div>
                        <div className="bg-[#1a1612] p-6 border-2 border-[#d4b483] shadow-[6px_6px_0px_#2c241b]">
                            <div className="aspect-video bg-[#2c241b] border border-[#5c4d3c] flex items-center justify-center mb-3">
                                <SmartImage src="/images/sponsor/Incubein Foundation.webp" alt="INCUBEIN FOUNDATION" fit="contain" className="w-full h-full p-4" />
                            </div>
                            <h3 className="text-base font-bold text-[#d4b483] text-center font-mono">INCUBEIN FOUNDATION</h3>
                        </div>
                    </div>
                </div>

                {/* Team */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#d4b483] mb-6 font-mono border-l-4 border-red-500 pl-3">Our Team</h2>
                    <div className="space-y-3">
                        {STUDENT_DATA.map((f, i) => (
                            <div key={i} className="bg-[#e8d5b5] text-[#120f0d] p-4 shadow-[6px_6px_0px_#5c4d3c] border-2 border-[#120f0d] flex items-center gap-4">
                                <div className="w-24 h-24 bg-[#120f0d] border-4 border-[#120f0d] overflow-hidden flex items-center justify-center text-2xl font-bold text-[#d4b483] flex-shrink-0">
                                    {f.image ? (
                                        <SmartImage src={f.image} alt={f.name} fit="cover" className="w-full h-full" disableEffects />
                                    ) : (
                                        f.name.charAt(0)
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-bold uppercase">{f.name}</h3>
                                    <p className="text-xs font-mono font-bold mt-1 uppercase">{f.role}</p>
                                    <p className="text-xs font-mono mt-1 text-[#120f0d]/80">{f.phone}</p>
                                    <p className="text-[9px] font-mono mt-1 text-[#120f0d]/70 break-all leading-tight">{f.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-12">
                    <FAQSection />
                </div>

                {/* POSTER */}
                <div className="mb-12">
                    <PosterSection />
                </div>

                {/* CONTACT US */}
                <div className="py-12 border-t border-[#5c4d3c]">
                    <h2 className="text-3xl font-bold text-[#d4b483] mb-3 tracking-tighter text-center font-serif">GET IN TOUCH</h2>
                    <p className="text-center text-[#a89070] font-mono text-xs mb-8 tracking-widest">WE'D LOVE TO HEAR FROM YOU</p>
                    
                    <div className="space-y-8">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* Location */}
                            <a 
                                href="https://maps.app.goo.gl/y2X4JBUimM2TxSU99"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-3 items-start group cursor-pointer bg-[#1a1612] p-4 border border-[#5c4d3c]"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-[#d4b483]/20 border-2 border-[#d4b483] flex items-center justify-center text-[#d4b483]">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                    </svg>
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-xs font-bold text-[#d4b483] mb-1 uppercase tracking-widest font-mono">Location</h3>
                                    <p className="text-sm text-[#a89070] group-hover:text-[#d4b483] transition-colors leading-relaxed font-serif">
                                        Symbiosis Institute of Technology<br />
                                        Nagpur, Maharashtra, India
                                    </p>
                                </div>
                            </a>

                            {/* Email */}
                            <div className="flex gap-3 items-start bg-[#1a1612] p-4 border border-[#5c4d3c]">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#d4b483]/20 border-2 border-[#d4b483] flex items-center justify-center text-[#d4b483]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-xs font-bold text-[#d4b483] mb-1 uppercase tracking-widest font-mono">Email</h3>
                                    <a 
                                        href="mailto:ecell@sitnagpur.siu.edu.in" 
                                        className="text-sm text-[#a89070] hover:text-[#d4b483] transition-colors font-serif break-all"
                                    >
                                        ecell@sitnagpur.siu.edu.in
                                    </a>
                                </div>
                            </div>

                            {/* Connect */}
                            <div className="flex gap-3 items-start bg-[#1a1612] p-4 border border-[#5c4d3c]">
                                <div className="flex-shrink-0 w-12 h-12 bg-[#d4b483]/20 border-2 border-[#d4b483] flex items-center justify-center text-[#d4b483]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-xs font-bold text-[#d4b483] mb-1 uppercase tracking-widest font-mono">Connect</h3>
                                    <div className="text-sm text-[#a89070] space-y-1">
                                        <p><span className="font-serif">Krutik Gajbhiye:</span> <span className="font-sans">+91 9960225056</span></p>
                                        <p><span className="font-serif">Tanay Kothari:</span> <span className="font-sans">+91 9975578363</span></p>
                                        <p><span className="font-serif">Ojas Charjan:</span> <span className="font-sans">+91 9529319989</span></p>
                                        <p><span className="font-serif">Kunjal Pise:</span> <span className="font-sans">+91 7709728775</span></p>
                                        <p><span className="font-serif">Varun Mundhada:</span> <span className="font-sans">+91 9347355900</span></p>
                                        <p><span className="font-serif">Parth Tiwaskar:</span> <span className="font-sans">+91 9112374118</span></p>
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-[#5c4d3c]">
                                        <p className="text-xs text-[#d4b483] font-mono uppercase tracking-wider mb-1">Website Related Queries</p>
                                        <p className="text-sm text-[#a89070]"><span className="font-serif">Jash Chauhan:</span> <span className="font-sans">+91 9370587848</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-[#1a1612] p-6 border border-[#d4b483]">
                            <form 
                                action="https://formsubmit.co/ecell@sitnagpur.siu.edu.in" 
                                method="POST"
                                className="space-y-4"
                            >
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_subject" value="New Contact Form Submission - SITank 2.0" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_next" value="https://sitank-2-0.vercel.app/" />
                                
                                <div>
                                    <label className="block text-xs text-[#d4b483] font-mono uppercase tracking-wider mb-2">Your Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Your Name" 
                                        required
                                        className="w-full bg-transparent border-b-2 border-[#5c4d3c] px-0 py-2 text-[#e8d5b5] font-serif focus:border-[#d4b483] focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-[#d4b483] font-mono uppercase tracking-wider mb-2">Your Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Email ID" 
                                        required
                                        className="w-full bg-transparent border-b-2 border-[#5c4d3c] px-0 py-2 text-[#e8d5b5] font-serif focus:border-[#d4b483] focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-[#d4b483] font-mono uppercase tracking-wider mb-2">Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject"
                                        placeholder="Subject..." 
                                        required
                                        className="w-full bg-transparent border-b-2 border-[#5c4d3c] px-0 py-2 text-[#e8d5b5] font-serif focus:border-[#d4b483] focus:outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-[#d4b483] font-mono uppercase tracking-wider mb-2">Your Message</label>
                                    <textarea 
                                        rows={4}
                                        name="message"
                                        placeholder="Write your message here..." 
                                        required
                                        className="w-full bg-transparent border-b-2 border-[#5c4d3c] px-0 py-2 text-[#e8d5b5] font-serif focus:border-[#d4b483] focus:outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full px-6 py-3 bg-[#d4b483] text-[#120f0d] font-mono font-bold uppercase tracking-widest hover:bg-[#c2a270] transition-all border-2 border-[#d4b483] shadow-[4px_4px_0px_rgba(0,0,0,0.8)]"
                                >
                                    ✉ Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};
