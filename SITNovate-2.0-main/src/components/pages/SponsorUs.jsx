import React, { useState, useEffect } from 'react';

const SponsorUs = () => {
    const [selectedTier, setSelectedTier] = useState(null);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    // Reset body overflow for this page
    useEffect(() => {
        // Store original styles
        const originalBodyOverflow = document.body.style.overflow;
        const originalHtmlOverflow = document.documentElement.style.overflow;
        const originalRootOverflow = document.getElementById('root').style.overflow;
        
        // Set scrollable styles for this page
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.getElementById('root').style.overflow = 'auto';
        
        return () => {
            // Restore original styles when leaving the page
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow = originalHtmlOverflow;
            document.getElementById('root').style.overflow = originalRootOverflow;
        };
    }, []);

    // Hide scroll indicator when user scrolls
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScrollIndicator(false);
            } else {
                setShowScrollIndicator(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sponsorshipTiers = [
        {
            name: "Title Sponsor",
            price: "₹5,00,000+",
            color: "#d4af37",
            benefits: [
                "Event naming rights (SITNovate 2.0 presented by [Company])",
                "Logo on all marketing materials and merchandise",
                "Dedicated booth space (premium location)",
                "Opening ceremony speaking opportunity",
                "Social media mentions throughout the event",
                "Access to participant database",
                "Branding on stage and backdrop",
                "VIP hospitality for 10 representatives"
            ]
        },
        {
            name: "Platinum Sponsor",
            price: "₹3,00,000",
            color: "#e5e7eb",
            benefits: [
                "Prominent logo placement on all materials",
                "Dedicated booth space",
                "Speaking opportunity during event",
                "Social media promotion",
                "Access to participant resumes",
                "Branding on event merchandise",
                "VIP hospitality for 6 representatives"
            ]
        },
        {
            name: "Gold Sponsor",
            price: "₹2,00,000",
            color: "#fbbf24",
            benefits: [
                "Logo on marketing materials",
                "Standard booth space",
                "Social media mentions",
                "Access to participant database",
                "Event merchandise branding",
                "VIP hospitality for 4 representatives"
            ]
        },
        {
            name: "Silver Sponsor",
            price: "₹1,00,000",
            color: "#9ca3af",
            benefits: [
                "Logo on select marketing materials",
                "Shared booth space",
                "Social media acknowledgment",
                "Event merchandise inclusion",
                "VIP hospitality for 2 representatives"
            ]
        }
    ];

    const eventStats = [
        { number: "1000+", label: "Expected Participants" },
        { number: "50+", label: "Colleges" },
        { number: "24H", label: "Hackathon Duration" },
        { number: "20+", label: "Events & Competitions" }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white sponsor-page" style={{ height: 'auto', overflow: 'visible' }}>
            {/* Hero Section */}
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#050505]"></div>
                <div className="absolute inset-0 bg-black/30"></div>
                
                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-20">
                    <h1 className="text-5xl md:text-8xl font-cinzel text-[#d4af37] tracking-[0.2em] uppercase mb-6 drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                        Sponsor Us
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed mb-12">
                        Partner with SITNovate 2.0's 24-hour hackathon and connect with the brightest minds in technology
                    </p>
                </div>
                
                {/* Scroll Indicator - Fixed to viewport */}
                {showScrollIndicator && (
                    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 scroll-indicator">
                        <div className="flex flex-col items-center text-[#d4af37]">
                            <span className="text-xs md:text-sm mb-3 opacity-70 font-light tracking-widest uppercase">Scroll to explore</span>
                            <div className="w-6 h-10 border-2 border-[#d4af37]/60 rounded-full flex justify-center relative bg-black/20 backdrop-blur-sm">
                                <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Event Stats */}
            <div className="py-20 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-cinzel text-[#d4af37] mb-4">
                            Event at a Glance
                        </h2>
                        <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {eventStats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-gradient-to-br from-[#d4af37]/20 to-transparent p-8 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-300 hover:scale-105">
                                    <div className="text-4xl md:text-6xl font-bold text-[#d4af37] mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-300 uppercase tracking-wider text-sm font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Sponsor Section */}
            <div className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-cinzel text-[#d4af37] mb-6">
                            Why Sponsor SITNovate 2.0?
                        </h2>
                        <div className="w-32 h-1 bg-[#d4af37] mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Join us in shaping the future of technology and innovation during our intensive 24-hour hackathon while gaining unprecedented access to emerging talent.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-[#d4af37]/10 to-transparent p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105 group">
                            <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#d4af37]">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-cinzel text-[#d4af37] mb-4">Targeted Reach</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Connect directly with 1000+ tech enthusiasts, innovators, and future industry leaders from top engineering colleges during our intensive 24-hour hackathon.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#d4af37]/10 to-transparent p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105 group">
                            <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#d4af37]">
                                    <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                                    <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                                    <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-cinzel text-[#d4af37] mb-4">Brand Visibility</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Gain extensive brand exposure through our multi-channel marketing approach, social media presence, and event coverage.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#d4af37]/10 to-transparent p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover:scale-105 group">
                            <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#d4af37]">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-cinzel text-[#d4af37] mb-4">Talent Acquisition</h3>
                            <p className="text-gray-300 leading-relaxed">
                                Early access to exceptional talent through direct interaction, networking sessions, and access to participant databases.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sponsorship Tiers */}
            <div className="py-20 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-cinzel text-[#d4af37] mb-6">
                            Sponsorship Packages
                        </h2>
                        <div className="w-32 h-1 bg-[#d4af37] mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Choose the perfect sponsorship tier that aligns with your business objectives and budget.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sponsorshipTiers.map((tier, index) => (
                            <div 
                                key={index}
                                className={`relative bg-gradient-to-br from-[#d4af37]/10 to-transparent p-6 rounded-2xl border cursor-pointer transition-all duration-300 hover:scale-105 ${
                                    selectedTier === index 
                                        ? 'border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.3)]' 
                                        : 'border-[#d4af37]/30 hover:border-[#d4af37]/60'
                                }`}
                                onClick={() => setSelectedTier(selectedTier === index ? null : index)}
                            >
                                {index === 0 && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#d4af37] text-black px-4 py-1 rounded-full text-xs font-bold uppercase">
                                        Most Popular
                                    </div>
                                )}
                                
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-cinzel mb-3" style={{ color: tier.color }}>
                                        {tier.name}
                                    </h3>
                                    <div className="text-3xl font-bold text-white mb-2">
                                        {tier.price}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {index === 0 ? 'Premium Package' : index === 1 ? 'Popular Choice' : index === 2 ? 'Great Value' : 'Starter Package'}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {tier.benefits.slice(0, selectedTier === index ? tier.benefits.length : 4).map((benefit, benefitIndex) => (
                                        <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                                            <div className="text-[#d4af37] mr-3 mt-1 flex-shrink-0">
                                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                                                    <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                    {tier.benefits.length > 4 && selectedTier !== index && (
                                        <li className="text-[#d4af37] text-sm cursor-pointer hover:text-[#b8941f] transition-colors">
                                            Click to see +{tier.benefits.length - 4} more benefits...
                                        </li>
                                    )}
                                </ul>

                                <button className="w-full py-3 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 rounded-lg font-semibold uppercase tracking-wider">
                                    Choose {tier.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom Sponsorship */}
            <div className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-cinzel text-[#d4af37] mb-6">
                        Custom Sponsorship Solutions
                    </h2>
                    <div className="w-32 h-1 bg-[#d4af37] mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                        Have specific requirements? We'll create a tailored sponsorship package that meets your unique business objectives and marketing goals.
                    </p>
                    <div className="bg-gradient-to-br from-[#d4af37]/10 to-transparent p-8 rounded-2xl border border-[#d4af37]/30">
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="group">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#d4af37]/30 transition-colors">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#d4af37]">
                                            <path d="M22 10V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V10M22 10L18 14L14 10M22 10H14M2 10L6 14L10 10M2 10H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6 20H18C19.1046 20 20 19.1046 20 18V16M4 16V18C4 19.1046 4.89543 20 6 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-[#d4af37] font-semibold text-lg">Workshop Sponsorship</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed">Sponsor specific workshops, masterclasses, and technical sessions to showcase your expertise.</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#d4af37]/30 transition-colors">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#d4af37]">
                                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-[#d4af37] font-semibold text-lg">Prize Sponsorship</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed">Sponsor prizes for competitions, hackathons, and innovation challenges to increase brand visibility.</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#d4af37]/30 transition-colors">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#d4af37]">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                            <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h4 className="text-[#d4af37] font-semibold text-lg">Hospitality Sponsorship</h4>
                                </div>
                                <p className="text-gray-300 leading-relaxed">Sponsor meals, refreshments, and networking sessions to create positive brand associations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-cinzel text-[#d4af37] mb-6">
                            Ready to Partner With Us?
                        </h2>
                        <div className="w-32 h-1 bg-[#d4af37] mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Let's discuss how we can create a mutually beneficial partnership for SITNovate 2.0.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-[#d4af37]/10 to-transparent p-8 rounded-2xl border border-[#d4af37]/30">
                            <h3 className="text-2xl font-cinzel text-[#d4af37] mb-8">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center group">
                                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#d4af37]/30 transition-colors">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#d4af37]">
                                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                                            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-gray-400 text-sm">Email</div>
                                        <div className="text-white font-medium">enthusia@sitnagpur.siu.edu.in</div>
                                    </div>
                                </div>
                                <div className="flex items-center group">
                                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#d4af37]/30 transition-colors">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#d4af37]">
                                            <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C10.4 21 2 12.6 2 2.08C2 1.48 2.48 1 3.08 1H6.08C6.68 1 7.16 1.48 7.16 2.08C7.16 3.08 7.32 4.04 7.64 4.92C7.8 5.32 7.68 5.76 7.36 6.08L5.84 7.6C7.24 10.36 9.64 12.76 12.4 14.16L13.92 12.64C14.24 12.32 14.68 12.2 15.08 12.36C15.96 12.68 16.92 12.84 17.92 12.84C18.52 12.84 19 13.32 19 13.92V16.92C19 17.52 18.52 18 17.92 18C17.32 18 16.84 17.52 16.84 16.92V16.92Z" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-gray-400 text-sm">Phone</div>
                                        <div className="text-white font-medium">+91 98765 43210</div>
                                    </div>
                                </div>
                                <div className="flex items-center group">
                                    <div className="w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#d4af37]/30 transition-colors">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#d4af37]">
                                            <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2"/>
                                            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-gray-400 text-sm">Location</div>
                                        <div className="text-white font-medium">Symbiosis Institute of Technology, Nagpur</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#d4af37]/10 to-transparent p-8 rounded-2xl border border-[#d4af37]/30">
                            <h3 className="text-2xl font-cinzel text-[#d4af37] mb-8">Quick Inquiry</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">Company Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter your company name"
                                        className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email address"
                                        className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">Sponsorship Interest</label>
                                    <select className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all">
                                        <option value="">Select Sponsorship Tier</option>
                                        {sponsorshipTiers.map((tier, index) => (
                                            <option key={index} value={tier.name}>{tier.name} - {tier.price}</option>
                                        ))}
                                        <option value="custom">Custom Package</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">Message (Optional)</label>
                                    <textarea 
                                        placeholder="Tell us about your sponsorship goals and requirements..."
                                        rows="4"
                                        className="w-full p-4 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 resize-none transition-all"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full py-4 bg-[#d4af37] text-black font-bold rounded-lg hover:bg-[#b8941f] transition-all duration-300 uppercase tracking-wider transform hover:scale-105"
                                >
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <div className="py-16 text-center bg-[#050505]">
                <button 
                    onClick={() => window.history.back()}
                    className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] px-12 py-4 rounded-lg font-semibold hover:bg-[#d4af37] hover:text-black transition-all duration-300 uppercase tracking-wider transform hover:scale-105"
                >
                    ← Back to Home
                </button>
            </div>
        </div>
    );
};

export default SponsorUs;