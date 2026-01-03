const sponsorshipTiers = [
  {
    tier: 'Title Sponsor',
    amount: '₹10,00,000+',
    benefits: [
      'Event naming rights',
      'Prime logo placement on all materials',
      'Dedicated booth space (20x20 ft)',
      'Speaking opportunity at inauguration',
      'Social media promotion',
      'Database access of participants'
    ],
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    tier: 'Platinum Sponsor',
    amount: '₹5,00,000+',
    benefits: [
      'Logo on all promotional materials',
      'Booth space (15x15 ft)',
      'Product demonstration opportunity',
      'Branding at main venues',
      'Social media mentions',
      'Recruitment opportunities'
    ],
    color: 'from-gray-300 to-gray-500'
  },
  {
    tier: 'Gold Sponsor',
    amount: '₹2,50,000+',
    benefits: [
      'Logo on select materials',
      'Booth space (10x10 ft)',
      'Branding at specific events',
      'Social media coverage',
      'Networking opportunities',
      'Certificate of participation'
    ],
    color: 'from-yellow-300 to-yellow-500'
  },
  {
    tier: 'Silver Sponsor',
    amount: '₹1,00,000+',
    benefits: [
      'Logo on website and banners',
      'Booth space (8x8 ft)',
      'Event-specific branding',
      'Social media mentions',
      'Networking access',
      'Participation certificate'
    ],
    color: 'from-gray-200 to-gray-400'
  }
];

const previousSponsors = [
  'Microsoft', 'Google', 'Amazon', 'IBM', 'Infosys', 'TCS', 'Wipro', 'Accenture',
  'Deloitte', 'PwC', 'KPMG', 'EY', 'Cognizant', 'HCL', 'Tech Mahindra', 'Capgemini'
];

export function Sponsors() {
  return (
    <section 
      id="sponsors" 
      className="py-20 px-6 md:px-12 lg:px-16 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            PARTNERSHIP OPPORTUNITIES
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Sponsors
          </p>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Partner with us to reach thousands of talented students, showcase your brand, 
            and contribute to the future of technology and innovation.
          </p>
        </div>

        {/* Why Sponsor Section */}
        <div className="mb-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
          <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
            Why Sponsor Enthusia 5.0?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-semibold text-foreground mb-2">Targeted Reach</h4>
              <p className="text-sm text-foreground/70">
                Connect with 5000+ engineering students and tech enthusiasts
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-semibold text-foreground mb-2">Brand Visibility</h4>
              <p className="text-sm text-foreground/70">
                Extensive marketing across digital and physical platforms
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold text-foreground mb-2">Talent Acquisition</h4>
              <p className="text-sm text-foreground/70">
                Direct access to top engineering talent for recruitment
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h4 className="font-semibold text-foreground mb-2">Innovation</h4>
              <p className="text-sm text-foreground/70">
                Showcase products and engage with innovative minds
              </p>
            </div>
          </div>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Sponsorship Packages
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sponsorshipTiers.map((tier, index) => (
              <div 
                key={index}
                className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${tier.color} text-white px-4 py-2 rounded-lg inline-block mb-4`}>
                  <h4 className="font-semibold">{tier.tier}</h4>
                </div>
                <div className="text-2xl font-bold text-foreground mb-4">{tier.amount}</div>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Sponsors */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Our Previous Partners
          </h3>
          <div className="bg-card p-8 rounded-xl border">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {previousSponsors.map((sponsor, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-background rounded-lg border hover:shadow-md transition-shadow"
                >
                  <div className="font-medium text-foreground/80">{sponsor}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Partner with Us?
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Join us in creating an unforgettable experience for thousands of students 
            while showcasing your brand to the next generation of innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Become a Sponsor
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Download Brochure
            </button>
          </div>
          <div className="mt-6 text-foreground/70">
            <p>For sponsorship inquiries: <a href="mailto:sponsors@enthusia.sit.edu" className="text-primary hover:underline">sponsors@enthusia.sit.edu</a></p>
            <p>Contact: +91 9876543210</p>
          </div>
        </div>
      </div>
    </section>
  );
}