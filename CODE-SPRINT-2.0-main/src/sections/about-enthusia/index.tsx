export function AboutEnthusia() {
  return (
    <section 
      id="about-enthusia" 
      className="py-20 px-6 md:px-12 lg:px-16 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            DISCOVER
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Enthusia 5.0
          </p>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Where Reality Meets Fiction - A Journey Through Parallel Universes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">What is Enthusia?</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Enthusia is SIT Nagpur's flagship annual techno-cultural festival that brings 
                together the brightest minds, innovative technologies, and vibrant cultural 
                expressions. Now in its 5th edition, Enthusia has evolved into a celebration 
                of creativity, innovation, and excellence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                To create a platform where technology meets artistry, where students can 
                showcase their talents, learn from industry experts, and build connections 
                that last a lifetime. Enthusia is more than a festival - it's a launchpad 
                for future innovators.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Theme: Fictional Universe</h3>
              <p className="text-foreground/80 leading-relaxed">
                This year, we explore the boundaries between reality and imagination. 
                Dive into parallel universes where technology creates new possibilities, 
                where fiction becomes reality, and where every idea has the power to 
                reshape our world.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <div className="text-foreground/70">Expected Participants</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-foreground/70">Events & Competitions</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-foreground/70">Days of Innovation</div>
              </div>
              <div className="bg-card p-6 rounded-lg border text-center">
                <div className="text-3xl font-bold text-primary mb-2">₹10L+</div>
                <div className="text-foreground/70">Prize Pool</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-primary/10 px-8 py-4 rounded-full">
            <div className="text-2xl">📅</div>
            <div>
              <div className="font-semibold text-foreground">February 12-14, 2026</div>
              <div className="text-foreground/70">SIT Nagpur Campus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}