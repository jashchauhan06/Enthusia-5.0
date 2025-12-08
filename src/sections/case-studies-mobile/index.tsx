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
            ABOUT SITNOVATE
          </h2>
          <p className="font-heading text-3xl text-foreground">
            24-Hour Innovation Hackathon
          </p>
        </div>
        
        {/* Hackathon Description */}
        <div className="space-y-6">
          {/* SITNovate 2026 - Upcoming */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading text-xl text-primary">SITNovate 2026</span>
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-heading rounded-full">UPCOMING</span>
            </div>
            <p className="font-body text-base text-foreground leading-relaxed mb-4">
              Get ready for the next edition! SITNovate 2026 will bring together the brightest minds for another 24-hour innovation marathon.
            </p>
            <div className="space-y-2">
              <p className="font-body text-sm text-[#b3b3b3]">
                <span className="text-foreground font-medium">Date:</span> To be announced
              </p>
              <p className="font-body text-sm text-[#b3b3b3]">
                <span className="text-foreground font-medium">Venue:</span> Symbiosis Institute of Technology, Nagpur
              </p>
              <p className="font-body text-sm text-[#b3b3b3]">
                <span className="text-foreground font-medium">Expected Teams:</span> 50+ teams
              </p>
            </div>
          </div>

          {/* SITNovate 2025 - Past Event */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading text-xl text-foreground">SITNovate 2025</span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-heading rounded-full">COMPLETED</span>
            </div>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-4">
              A 24-hour coding challenge where <span className="text-foreground font-medium">49 teams</span> developed innovative software solutions to real-world problems.
            </p>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
              Held from <span className="text-foreground font-medium">19 Feb 2025</span> to <span className="text-foreground font-medium">20 Feb 2025</span> at Symbiosis Institute of Technology (SIT), Nagpur.
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

          {/* Rounds Information */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-heading text-xl text-foreground mb-4">
              Competition Rounds
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-heading text-base text-foreground mb-2">Round 1: Initial Screening</h4>
                <p className="font-body text-sm text-[#b3b3b3]">
                  Teams submit their project proposals and ideas. Judges review submissions based on innovation, feasibility, and impact.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-base text-foreground mb-2">Round 2: Technical Evaluation</h4>
                <p className="font-body text-sm text-[#b3b3b3]">
                  Selected teams present their technical implementation and demonstrate their working prototypes to the judging panel.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-base text-foreground mb-2">Round 3: Final Presentation</h4>
                <p className="font-body text-sm text-[#b3b3b3]">
                  Finalists pitch their complete solutions. Winners are announced based on overall execution, presentation, and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
