export function CaseStudiesMobile() {
  return (
    <section 
      id="case-studies-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            ABOUT ENTHUSIA 5.0
          </h2>
          <p className="font-heading text-3xl text-foreground">
            Three-Day Techno-Cultural Fest
          </p>
        </div>
        
        {/* Hackathon Description */}
        <div className="space-y-6">
          {/* ENTHUSIA 5.0 - Upcoming */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading text-xl text-primary">ENTHUSIA 5.0</span>
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-heading rounded-full">UPCOMING</span>
            </div>
            <p className="font-body text-base text-foreground leading-relaxed mb-4">
              Enter the Parallel Fest Universe! ENTHUSIA 5.0 is the annual flagship techno-cultural fest bringing together technology, creativity, competition, and celebration.
            </p>
            <div className="space-y-2">
              <p className="font-body text-sm text-[#b3b3b3]">
                <span className="text-foreground font-medium">Date:</span> 19-21 February 2026
              </p>
              <p className="font-body text-sm text-[#b3b3b3]">
                <span className="text-foreground font-medium">Venue:</span> Symbiosis Institute of Technology, Nagpur
              </p>
              <p className="font-body text-sm text-[#b3b3b3]">
                <span className="text-foreground font-medium">Expected Participants:</span> 1000+ participants
              </p>
            </div>
          </div>

          {/* ENTHUSIA 4.0 - Past Event */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading text-xl text-foreground">ENTHUSIA 4.0</span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-heading rounded-full">COMPLETED</span>
            </div>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-4">
              A three-day techno-cultural experience where <span className="text-foreground font-medium">1000+ participants</span> engaged in technical competitions, cultural performances, and celebration.
            </p>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
              Held from <span className="text-foreground font-medium">19 Feb 2025</span> to <span className="text-foreground font-medium">21 Feb 2025</span> at Symbiosis Institute of Technology (SIT), Nagpur.
            </p>
          </div>

          {/* Jury Members */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-heading text-xl text-foreground mb-4">
              Honorable Jury Members
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-primary text-lg mt-1">•</span>
                <p className="font-body text-sm text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Mr. Tufan Kilicaslan</span><br />
                  Founder, Coding Event Software Solutions, Türkiye
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-lg mt-1">•</span>
                <p className="font-body text-sm text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Mr. Dhiraj Motghare</span><br />
                  Director of Engineering – GlobalLogic
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-lg mt-1">•</span>
                <p className="font-body text-sm text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Mr. Mohit Vyas</span><br />
                  Software Engineer, Accenture, India
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-lg mt-1">•</span>
                <p className="font-body text-sm text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Ms. Nilima Rao</span><br />
                  Persistent, India
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-lg mt-1">•</span>
                <p className="font-body text-sm text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Ms. Nidhi Shingade</span><br />
                  Technical Consultant, Perficient Inc
                </p>
              </div>
            </div>
          </div>

          {/* Event Gallery */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-heading text-xl text-foreground mb-4">
              Event Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/enthusia/1.png"
                alt="ENTHUSIA 4.0 Event Photo 1"
                className="w-full h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/enthusia/2.png"
                alt="ENTHUSIA 4.0 Event Photo 2"
                className="w-full h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/enthusia/3.png"
                alt="ENTHUSIA 4.0 Event Photo 3"
                className="w-full h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/enthusia/4.png"
                alt="ENTHUSIA 4.0 Event Photo 4"
                className="w-full h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
