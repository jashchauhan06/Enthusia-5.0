import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
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
                    Privacy Policy
                </h1>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="prose prose-invert prose-lg max-w-none">
                    
                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">1. Information We Collect</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We collect information you provide directly to us, such as when you register for events, contact us, or subscribe to our newsletter:
                        </p>
                        <ul className="text-gray-300 space-y-2 ml-6">
                            <li>• Personal information (name, email address, phone number)</li>
                            <li>• Educational information (institution, course, year of study)</li>
                            <li>• Event participation data</li>
                            <li>• Communication preferences</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">2. How We Use Your Information</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="text-gray-300 space-y-2 ml-6">
                            <li>• Process event registrations and manage participation</li>
                            <li>• Send important updates about events and activities</li>
                            <li>• Provide customer support and respond to inquiries</li>
                            <li>• Improve our services and user experience</li>
                            <li>• Send newsletters and promotional materials (with consent)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">3. Information Sharing</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                        </p>
                        <ul className="text-gray-300 space-y-2 ml-6">
                            <li>• With event sponsors and partners (only with explicit consent)</li>
                            <li>• To comply with legal obligations</li>
                            <li>• To protect our rights and safety</li>
                            <li>• With service providers who assist in our operations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">4. Data Security</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We implement appropriate security measures to protect your personal information:
                        </p>
                        <ul className="text-gray-300 space-y-2 ml-6">
                            <li>• Secure data transmission using SSL encryption</li>
                            <li>• Regular security assessments and updates</li>
                            <li>• Limited access to personal information</li>
                            <li>• Secure storage of data on protected servers</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">5. Cookies and Tracking</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Our website uses cookies to enhance your browsing experience:
                        </p>
                        <ul className="text-gray-300 space-y-2 ml-6">
                            <li>• Essential cookies for website functionality</li>
                            <li>• Analytics cookies to understand user behavior</li>
                            <li>• Preference cookies to remember your settings</li>
                            <li>• You can control cookie settings through your browser</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">6. Your Rights</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            You have the following rights regarding your personal information:
                        </p>
                        <ul className="text-gray-300 space-y-2 ml-6">
                            <li>• Access: Request a copy of your personal data</li>
                            <li>• Correction: Update or correct inaccurate information</li>
                            <li>• Deletion: Request deletion of your personal data</li>
                            <li>• Portability: Request transfer of your data</li>
                            <li>• Opt-out: Unsubscribe from marketing communications</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">7. Data Retention</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law. Event participation data may be retained for historical records and future event planning.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">8. Third-Party Links</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">9. Children's Privacy</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">10. Policy Updates</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-cinzel text-[#d4af37] mb-4">11. Contact Us</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="text-gray-300 ml-6">
                            <p>Email: enthusia@sitnagpur.siu.edu.in</p>
                            <p>Phone: +91 [Phone Number]</p>
                            <p>Address: Symbiosis Institute of Technology, Nagpur</p>
                            <p>Data Protection Officer: [Name and Contact]</p>
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

export default PrivacyPolicy;