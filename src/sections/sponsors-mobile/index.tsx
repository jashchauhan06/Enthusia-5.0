const sponsorshipTiers = [
  {
    tier: 'Title Sponsor',
    amount: '₹10L+',
    benefits: ['Event naming rights', 'Prime logo placement', 'Dedicated booth (20x20 ft)', 'Speaking opportunity'],
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    tier: 'Platinum',
    amount: '₹5L+',
    benefits: ['Logo on all materials', 'Booth (15x15 ft)', 'Product demo opportunity', 'Main venue branding'],
    color: 'from-gray-300 to-gray-500'
  },
  {
    tier: 'Gold Sponsor',
    amount: '₹2.5L+',
    benefits: ['Logo on select materials', 'Booth (10x10 ft)', 'Event-specific branding', 'Social media coverage'],
    color: 'from-yellow-300 to-yellow-500'
  },
  {
    tier: 'Silver Sponsor',
    amount: '₹1L+',
    benefits: ['Website & banner logo', 'Booth (8x8 ft)', 'Social media mentions', 'Networking access'],
    color: 'from-gray-200 to-gray-400'
  }
];

const previousSponsors = [
  'Microsoft', 'Google', 'Amazon', 'IBM', 'Infosys', 'TCS', 'Wipro', 'Accenture'
];

export function SponsorsMobile() {
  return (
    <section 
      id="sponsors-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="max-w-sm mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            PARTNERSHIP OPPORTUNITIES
          </h2>
          <p className="font-heading text-2xl text-foreground mb-4">
            Sponsors
          </p>
          <p className="text-foreground/80 text-center">
            Partner with us to reach thousands of talented students and showcase your brand.
          </p>
        </div>

        {/* Why Sponsor Section */}
        <div className="mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
          <h3 className="font-semibold text-foreground mb-4 text-center">
            Why Sponsor Enthusia 5.0?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-medium text-foreground mb-1 text-sm">Targeted Reach</h4>
              <p className="text-xs text-foreground/70">5000+ students</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-medium text-foreground mb-1 text-sm">Brand Visibility</h4>
              <p className="text-xs text-foreground/70">Extensive marketing</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🤝</div>
              <h4 className="font-medium text-foreground mb-1 text-sm">Talent Access</h4>
              <p className="text-xs text-foreground/70">Top engineering talent</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💡</div>
              <h4 className="font-medium text-foreground mb-1 text-sm">Innovation</h4>
              <p className="text-xs text-foreground/70">Showcase products</p>
            </div>
          </div>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-8">
          <h3 className="font-semibold text-foreground mb-6 text-center">
            Sponsorship Packages
          </h3>
          <div className="space-y-4">
            {sponsorshipTiers.map((tier, index) => (
              <div 
                key={index}
                className="bg-card border rounded-lg p-4"
              >
                <div className={`bg-gradient-to-r ${tier.color} text-white px-3 py-1 rounded text-sm inline-block mb-3`}>
                  {tier.tier}
                </div>
                <div className="text-xl font-bold text-foreground mb-3">{tier.amount}</div>
                <ul className="space-y-1">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80 text-xs">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Sponsors */}
        <div className="mb-8">
          <h3 className="font-semibold text-foreground mb-4 text-center">
            Our Previous Partners
          </h3>
          <div className="bg-card p-4 rounded-lg border">
            <div className="grid grid-cols-2 gap-3">
              {previousSponsors.map((sponsor, index) => (
                <div 
                  key={index}
                  className="text-center p-3 bg-background rounded border text-sm font-medium text-foreground/80"
                >
                  {sponsor}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl">
          <h3 className="font-semibold text-foreground mb-3">
            Ready to Partner with Us?
          </h3>
          <p className="text-sm text-foreground/80 mb-4">
            Join us in creating an unforgettable experience while showcasing your brand.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold">
              Become a Sponsor
            </button>
            <button className="w-full border border-primary text-primary py-3 rounded-lg font-semibold">
              Download Brochure
            </button>
          </div>
          <div className="mt-4 text-xs text-foreground/70">
            <p>sponsors@sitnagpur.siu.edu.in</p>
            <p>+91 9876543210</p>
          </div>
        </div>
      </div>
    </section>
  );
}