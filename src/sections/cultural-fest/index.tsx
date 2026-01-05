const culturalEvents = [
  {
    id: 'performances',
    title: 'Cultural Performances',
    description: 'Dance, Drama, Ramp Walk, and Felicitation ceremonies',
    icon: '🎭',
    category: 'Performances',
    time: 'Day 1 & 2'
  },
  {
    id: 'jamming',
    title: 'Jamming Night',
    description: 'Live music sessions and collaborative performances',
    icon: '🎸',
    category: 'Music',
    time: 'Day 1 Evening'
  },
  {
    id: 'comedy',
    title: 'Stand-Up Comedy',
    description: 'Hilarious performances by renowned comedians',
    icon: '🎤',
    category: 'Comedy',
    time: 'Day 2 Evening'
  },
  {
    id: 'celebrity',
    title: 'Celebrity Night',
    description: 'Special performances by celebrity guests',
    icon: '⭐',
    category: 'Celebrity',
    time: 'Day 2 Night'
  },
  {
    id: 'dj',
    title: 'DJ Night',
    description: 'High-energy dance party with top DJs',
    icon: '🎧',
    category: 'Party',
    time: 'Day 3 Night'
  }
];

export function CulturalFest() {
  return (
    <section 
      id="cultural-fest" 
      className="py-20 px-6 md:px-12 lg:px-16 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            CELEBRATE CREATIVITY
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Cultural Fest
          </p>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Immerse yourself in a vibrant celebration of arts, music, dance, and 
            entertainment that brings our community together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {culturalEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{event.icon}</div>
              <div className="mb-2">
                <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {event.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                {event.title}
              </h3>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                {event.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="font-medium text-secondary">{event.time}</span>
                <button className="text-secondary hover:text-secondary/80 font-medium">
                  Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-foreground">
              Experience the Magic
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our Cultural Fest is a spectacular showcase of talent, creativity, and 
              entertainment. From mesmerizing dance performances to soul-stirring music, 
              from hilarious comedy acts to star-studded celebrity nights - we have 
              something for everyone.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground/80">Professional stage setup with world-class sound and lighting</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground/80">Celebrity guests and renowned artists</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground/80">Student performances and competitions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground/80">Food courts and entertainment zones</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Highlights</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Celebrity Performances</span>
                  <span className="font-semibold text-secondary">3 Nights</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Student Competitions</span>
                  <span className="font-semibold text-secondary">15+ Events</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Live Music Sessions</span>
                  <span className="font-semibold text-secondary">Daily</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Food & Entertainment</span>
                  <span className="font-semibold text-secondary">24/7</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Get Cultural Fest Pass
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-card p-6 rounded-lg border">
            <div className="text-3xl font-bold text-secondary mb-2">5</div>
            <div className="text-foreground/70">Major Events</div>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <div className="text-3xl font-bold text-secondary mb-2">3</div>
            <div className="text-foreground/70">Celebrity Nights</div>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
            <div className="text-foreground/70">Performers</div>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <div className="text-3xl font-bold text-secondary mb-2">3</div>
            <div className="text-foreground/70">Days of Fun</div>
          </div>
        </div>
      </div>
    </section>
  );
}