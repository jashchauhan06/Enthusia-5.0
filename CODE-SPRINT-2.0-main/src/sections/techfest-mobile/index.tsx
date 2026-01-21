const techEvents = [
  {
    id: 'sitnovate',
    title: 'SITNovate 2.0',
    description: 'Innovation and entrepreneurship competition',
    icon: '💡',
    category: 'Innovation',
    prizes: '₹50,000'
  },
  {
    id: 'codesprint',
    title: 'CodeSprint 2.0',
    description: 'Competitive programming marathon',
    icon: '💻',
    category: 'Programming',
    prizes: '₹30,000'
  },
  {
    id: 'stranger-tech',
    title: 'Stranger Tech',
    description: 'Mystery tech challenge',
    icon: '🔮',
    category: 'Mystery',
    prizes: '₹25,000'
  },
  {
    id: 'sitank',
    title: 'SITank 2.0',
    description: 'Startup pitch competition',
    icon: '🚀',
    category: 'Startup',
    prizes: '₹40,000'
  },
  {
    id: 'buildbrand',
    title: 'BuildBrand',
    description: 'Brand building competition',
    icon: '🎯',
    category: 'Marketing',
    prizes: '₹20,000'
  }
];

export function TechFestMobile() {
  return (
    <section 
      id="techfest-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="max-w-sm mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            TECHNICAL EXCELLENCE
          </h2>
          <p className="font-heading text-2xl text-foreground mb-4">
            TechFest
          </p>
          <p className="text-foreground/80 text-center">
            Unleash your technical prowess through cutting-edge competitions.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {techEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-card border rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{event.icon}</div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-3">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-primary text-sm">{event.prizes}</span>
                    <button className="text-primary text-sm font-medium">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl text-center">
            <h3 className="font-semibold text-foreground mb-3">
              Ready to Showcase Your Skills?
            </h3>
            <p className="text-sm text-foreground/80 mb-4">
              Join thousands of participants in our technical competitions.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold">
                Register for TechFest
              </button>
              <button className="w-full border border-primary text-primary py-3 rounded-lg font-semibold">
                View Schedule
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-card p-4 rounded-lg border text-center">
              <div className="text-xl font-bold text-primary mb-1">₹1.65L</div>
              <div className="text-xs text-foreground/70">Prize Pool</div>
            </div>
            <div className="bg-card p-4 rounded-lg border text-center">
              <div className="text-xl font-bold text-primary mb-1">2000+</div>
              <div className="text-xs text-foreground/70">Participants</div>
            </div>
            <div className="bg-card p-4 rounded-lg border text-center">
              <div className="text-xl font-bold text-primary mb-1">5</div>
              <div className="text-xs text-foreground/70">Competitions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}