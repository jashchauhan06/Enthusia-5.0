export function AboutEnthusiaMobile() {
  return (
    <section 
      id="about-enthusia-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="max-w-sm mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            DISCOVER
          </h2>
          <p className="font-heading text-2xl text-foreground mb-4">
            Enthusia 5.0
          </p>
          <p className="text-foreground/80">
            Where Reality Meets Fiction
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-xl text-center">
            <h3 className="font-semibold text-foreground mb-3">Theme: Fictional Universe</h3>
            <p className="text-sm text-foreground/80">
              Explore parallel universes where technology creates new possibilities 
              and fiction becomes reality.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">What is Enthusia?</h3>
              <p className="text-sm text-foreground/70">
                SIT Nagpur's flagship annual techno-cultural festival celebrating 
                creativity, innovation, and excellence.
              </p>
            </div>
            
            <div className="bg-card p-4 rounded-lg border">
              <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-sm text-foreground/70">
                A platform where technology meets artistry, connecting students 
                with industry experts and future opportunities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-1">5000+</div>
              <div className="text-xs text-foreground/70">Participants</div>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-xs text-foreground/70">Events</div>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <div className="text-xs text-foreground/70">Days</div>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary mb-1">₹10L+</div>
              <div className="text-xs text-foreground/70">Prize Pool</div>
            </div>
          </div>

          <div className="text-center bg-card p-4 rounded-lg border">
            <div className="text-lg">📅</div>
            <div className="font-semibold text-foreground">February 12-14, 2026</div>
            <div className="text-sm text-foreground/70">SIT Nagpur Campus</div>
          </div>
        </div>
      </div>
    </section>
  );
}