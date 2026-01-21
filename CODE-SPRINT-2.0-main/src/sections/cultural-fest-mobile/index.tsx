const culturalEvents = [
  {
    id: 'performances',
    title: 'Cultural Performances',
    description: 'Dance, Drama, Ramp Walk, Felicitation',
    icon: '🎭',
    category: 'Performances',
    time: 'Day 1 & 2'
  },
  {
    id: 'jamming',
    title: 'Jamming Night',
    description: 'Live music and collaborative performances',
    icon: '🎸',
    category: 'Music',
    time: 'Day 1 Evening'
  },
  {
    id: 'comedy',
    title: 'Stand-Up Comedy',
    description: 'Hilarious performances by comedians',
    icon: '🎤',
    category: 'Comedy',
    time: 'Day 2 Evening'
  },
  {
    id: 'celebrity',
    title: 'Celebrity Night',
    description: 'Special celebrity guest performances',
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

export function CulturalFestMobile() {
  return (
    <section 
      id="cultural-fest-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="max-w-sm mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            CELEBRATE CREATIVITY
          </h2>
          <p className="font-heading text-2xl text-foreground mb-4">
            Cultural Fest
          </p>
          <p className="text-foreground/80 text-center">
            Vibrant celebration of arts, music, dance, and entertainment.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {culturalEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-card border rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{event.icon}</div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="inline-block bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">
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
                    <span className="font-medium text-secondary text-sm">{event.time}</span>
                    <button className="text-secondary text-sm font-medium">
                      Details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-secondary/20 to-primary/20 p-6 rounded-xl">
            <h3 className="font-semibold text-foreground mb-3 text-center">
              Experience the Magic
            </h3>
            <p className="text-sm text-foreground/80 mb-4 text-center">
              Spectacular showcase of talent, creativity, and entertainment with 
              celebrity guests and world-class performances.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <span className="text-foreground/80">Professional stage setup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <span className="text-foreground/80">Celebrity guests</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                <span className="text-foreground/80">Student competitions</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="w-full bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold">
              Get Cultural Fest Pass
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-card p-4 rounded-lg border text-center">
              <div className="text-xl font-bold text-secondary mb-1">5</div>
              <div className="text-xs text-foreground/70">Major Events</div>
            </div>
            <div className="bg-card p-4 rounded-lg border text-center">
              <div className="text-xl font-bold text-secondary mb-1">3</div>
              <div className="text-xs text-foreground/70">Celebrity Nights</div>
            </div>
            <div className="bg-card p-4 rounded-lg border text-center">
              <div className="text-xl font-bold text-secondary mb-1">1000+</div>
              <div className="text-xs text-foreground/70">Performers</div>
            </div>
            <div className="bg-card p-4 rounded-lg border text-center">
              <div className="text-xl font-bold text-secondary mb-1">3</div>
              <div className="text-xs text-foreground/70">Days of Fun</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}