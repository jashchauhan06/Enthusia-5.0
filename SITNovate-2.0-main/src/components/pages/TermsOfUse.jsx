import React, { useEffect } from 'react';

const TermsOfUse = () => {
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

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Header */}
            <div className="relative h-64 bg-gradient-to-b from-[#1a1a1a] to-[#050505] flex items-center justify-center">
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="relative z-10 text-4xl md:text-6xl font-cinzel text-[#d4af37] tracking-[0.2em] uppercase text-shadow-glow">
                    Terms of Use
                </h1>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="prose prose-invert prose-lg max-w-none">
                    
                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            By accessing and using the Enthusia 5.0 website and participating in our events, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">2. Event Participation</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Participation in Enthusia 5.0 events is subject to the following conditions:
                        </p>
                        <ul className="text-gray-300 space-y-2 ml-6">
                            <li>• Participants must register through official channels only</li>
                            <li>• All participants must provide accurate and complete information during registration</li>
                            <li>• Participants are responsible for their own safety and conduct during events</li>
                            <li>• The organizing committee reserves the right to disqualify participants for misconduct</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">3. Intellectual Property</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            All content, including but not limited to text, graphics, logos, images, and software, is the property of Enthusia 5.0 or its content suppliers and is protected by copyright and other intellectual property laws.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">4. Code of Conduct</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            All participants are expected to maintain professional and respectful behavior:
                        </p>
                        <ul className="text-gray-300 space-y-2 ml-6">
                            <li>• Respect fellow participants, organizers, and volunteers</li>
                            <li>• No harassment, discrimination, or inappropriate behavior</li>
                            <li>• Follow all venue rules and regulations</li>
                            <li>• Maintain academic integrity in all competitions</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">5. Liability and Disclaimers</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Enthusia 5.0 and its organizers shall not be liable for any direct, indirect, incidental, or consequential damages arising from participation in events or use of this website. Participants attend events at their own risk.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">6. Privacy and Data Protection</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We are committed to protecting your privacy. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">7. Modifications</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Enthusia 5.0 reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Continued use of the service constitutes acceptance of modified terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">8. Contact Information</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            For questions regarding these Terms of Use, please contact us at:
                        </p>
                        <div className="text-gray-300 ml-6">
                            <p>Email: enthusia@sitnagpur.siu.edu.in</p>
                            <p>Phone: +91 [Phone Number]</p>
                            <p>Address: Symbiosis Institute of Technology, Nagpur</p>
                        </div>
                    </section>

                    <div className="border-t border-gray-700 pt-8 mt-12">
                        <p className="text-gray-400 text-sm">
                            Last updated: January 2026
                        </p>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-12 text-center">
                    <button 
                        onClick={() => window.history.back()}
                        className="bg-[#d4af37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#b8941f] transition-colors duration-300"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;