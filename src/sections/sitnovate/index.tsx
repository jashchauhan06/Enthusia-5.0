export function SITNovate() {
  return (
    <section 
      id="case-studies" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            ABOUT SITNOVATE
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground mb-8">
            24-Hour Innovation Hackathon
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <p className="font-body text-lg text-[#b3b3b3] leading-relaxed mb-6">
              SITNovate was a 24-hour coding challenge where <span className="text-foreground font-medium">49 teams</span> were tasked with developing innovative software solutions to real-world problems. Such events where the brightest minds compete in a 24-hour coding marathon gives breakthrough solutions, intense problem-solving, and an innovation-packed showdown.
            </p>
            <p className="font-body text-lg text-[#b3b3b3] leading-relaxed">
              From <span className="text-foreground font-medium">19 Feb 2025</span>, Symbiosis Institute of Technology (SIT), Nagpur, hosted SITNovate, a thrilling hackathon that brought together the best minds in tech. After 24 hours of non-stop coding, the results were declared on <span className="text-foreground font-medium">20 Feb 2025</span>.
            </p>
          </div>

          {/* Jury Members */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
              Honorable Jury Members
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <p className="font-body text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Mr. Tufan Kilicaslan</span><br />
                  Founder, Coding Event Software Solutions, Türkiye<br />
                  IEEE Senior Member
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <p className="font-body text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Mr. Dhiraj Motghare</span><br />
                  Director of Engineering – GlobalLogic
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <p className="font-body text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Mr. Mohit Vyas</span><br />
                  Software Engineer, Accenture, India
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <p className="font-body text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Ms. Nilima Rao</span><br />
                  Persistent, India
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <p className="font-body text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Ms. Nidhi Shingade</span><br />
                  Technical Consultant, Perficient Inc, Nagpur
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <p className="font-body text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Dr. Ravindra Jogekar</span><br />
                  Executive Member ACM Nagpur
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">•</span>
                <p className="font-body text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Mr. Bhushan Netke</span><br />
                  Consultant, Global Logic Software Technologies
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
            <p className="font-body text-lg text-[#b3b3b3] leading-relaxed">
              Despite the sleepless grind, participants pushed their limits to develop cutting-edge solutions. The event showcased the power of collaboration, innovation, and determination in solving real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
