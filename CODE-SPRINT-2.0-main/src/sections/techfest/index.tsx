const techEvents = [
  {
    id: 'sitnovate',
    title: 'SITNovate 2.0',
    description: 'Innovation and entrepreneurship competition showcasing groundbreaking ideas',
    icon: '💡',
    category: 'Innovation',
    prizes: '₹50,000'
  },
  {
    id: 'codesprint',
    title: 'CodeSprint 2.0',
    description: 'Competitive programming marathon testing algorithmic skills',
    icon: '💻',
    category: 'Programming',
    prizes: '₹30,000'
  },
  {
    id: 'stranger-tech',
    title: 'Stranger Tech',
    description: 'Mystery tech challenge with unknown problems and creative solutions',
    icon: '🔮',
    category: 'Mystery',
    prizes: '₹25,000'
  },
  {
    id: 'sitank',
    title: 'SITank 2.0',
    description: 'Pitch your startup ideas to industry experts and investors',
    icon: '🚀',
    category: 'Startup',
    prizes: '₹40,000'
  },
  {
    id: 'buildbrand',
    title: 'BuildBrand',
    description: 'Brand building and marketing strategy competition',
    icon: '🎯',
    category: 'Marketing',
    prizes: '₹20,000'
  }
];

export function TechFest() {
  return (
    <section 
      id="techfest" 
      className="py-20 px-6 md:px-12 lg:px-16 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            TECHNICAL EXCELLENCE
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            TechFest
          </p>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Unleash your technical prowess and innovative thinking through our 
            cutting-edge competitions and challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => {/* TODO: Handle event selection */}}
            >
              <div className="text-4xl mb-4">{event.icon}</div>
              <div className="mb-2">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {event.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                {event.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-primary">{event.prizes}</span>
                <button className="text-primary hover:text-primary/80 font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Showcase Your Skills?
            </h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Join thousands of participants from across the country in our technical 
              competitions. Test your limits, learn from the best, and win exciting prizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Register for TechFest
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                View Schedule
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl font-bold text-primary mb-2">₹1.65L</div>
              <div className="text-foreground/70">Total Prize Pool</div>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl font-bold text-primary mb-2">2000+</div>
              <div className="text-foreground/70">Expected Participants</div>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-foreground/70">Major Competitions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}