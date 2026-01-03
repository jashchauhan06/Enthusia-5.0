import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const techEvents = [
  {
    id: 'sitnovate',
    title: 'SITNovate 2.0',
    subtitle: '24-Hour Hackathon',
    description: 'Build innovative solutions to real-world problems in an intense 24-hour sprint.',
    icon: '🔹',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/40',
    glowColor: 'hover:shadow-blue-500/25',
    buttonText: 'Enter Hackathon',
    route: '/events/sitnovate'
  },
  {
    id: 'codesprint',
    title: 'CodeSprint 2.0',
    subtitle: 'Competitive Coding Challenge',
    description: 'Solve algorithmic problems that test logic, speed, and accuracy.',
    icon: '🔹',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/40',
    glowColor: 'hover:shadow-green-500/25',
    buttonText: 'Enter Coding Arena',
    route: '/events/codesprint'
  },
  {
    id: 'strangertech',
    title: 'Stranger Tech',
    subtitle: 'Tech-Based Treasure Hunt',
    description: 'Decode clues, solve puzzles, and race through tech-driven challenges.',
    icon: '🔹',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/40',
    glowColor: 'hover:shadow-purple-500/25',
    buttonText: 'Enter the Hunt',
    route: '/events/strangertech'
  },
  {
    id: 'sitank',
    title: 'SITank 2.0',
    subtitle: 'Pitch Desk Competition',
    description: 'Pitch innovative ideas and business models to an expert judging panel.',
    icon: '🔹',
    color: 'from-orange-500/20 to-yellow-500/20',
    borderColor: 'border-orange-500/40',
    glowColor: 'hover:shadow-orange-500/25',
    buttonText: 'Enter the Pitch Room',
    route: '/events/sitank'
  },
  {
    id: 'buildbrand',
    title: 'BuildBrand',
    subtitle: 'Brand Advertisement Challenge (12 Hours)',
    description: 'Design a creative and strategic advertising campaign for a given brand.',
    icon: '🔹',
    color: 'from-red-500/20 to-rose-500/20',
    borderColor: 'border-red-500/40',
    glowColor: 'hover:shadow-red-500/25',
    buttonText: 'Enter the Creative Zone',
    route: '/events/buildbrand'
  }
];

function TechFest() {
  return (
    <section 
      id="techfest" 
      className="relative w-full py-24 px-4 md:px-8 lg:px-16 bg-black/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-foreground mb-8 leading-tight">
            TECHFEST
          </h1>
          <h2 className="font-heading text-2xl md:text-4xl text-primary mb-8">
            Choose Your Challenge. Enter the Game.
          </h2>
          <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed max-w-4xl mx-auto">
            The TechFest of Enthusia 5.0 is a high-intensity arena built for innovators, coders, strategists, and creators. Inspired by game-like challenges and real-world problem solving, the TechFest pushes participants to think fast, build smart, and perform under pressure.
          </p>
          <p className="font-body text-lg md:text-xl text-primary mt-6 font-medium">
            Each event is a different level — testing logic, creativity, teamwork, execution, and leadership.
          </p>
        </div>

        {/* Events Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              🚀 TECHFEST EVENTS
            </h3>
            <p className="font-body text-lg text-[#b3b3b3]">
              (Click an event to enter its page)
            </p>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techEvents.map((event) => (
              <div
                key={event.id}
                className={`group relative bg-gradient-to-br ${event.color} border-2 ${event.borderColor} rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${event.glowColor} hover:shadow-2xl cursor-pointer transform hover:-translate-y-2`}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{event.icon}</span>
                    <h4 className="font-heading text-xl md:text-2xl text-foreground">{event.title}</h4>
                  </div>
                  
                  <p className="font-body text-sm md:text-base text-primary font-medium mb-4">
                    {event.subtitle}
                  </p>
                  
                  <p className="font-body text-sm md:text-base text-[#b3b3b3] leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/40 rounded-xl py-3 px-6 font-heading text-primary hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    onClick={() => {
                      // Navigate to event page
                      window.location.href = event.route;
                    }}
                  >
                    👉 {event.buttonText}
                  </button>
                </div>

                {/* Ripple Effect on Hover */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Participate */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🎯</span>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground">Why Participate in TechFest?</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "National-level competitive exposure",
                "Industry-aligned challenges",
                "Hands-on learning beyond classrooms",
                "Opportunities to innovate, pitch, and perform",
                "Certificates, recognition & prizes"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-1 text-xl">•</span>
                  <p className="font-body text-lg text-[#b3b3b3]">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-3xl">⏳</span>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground">TechFest Timeline</h3>
            </div>
            <div className="space-y-4">
              <p className="font-body text-xl md:text-2xl text-foreground">
                📅 19 – 20 February 2026
              </p>
              <p className="font-body text-xl md:text-2xl text-foreground">
                📍 Symbiosis Institute of Technology, Nagpur
              </p>
              <p className="font-body text-base text-[#b3b3b3] mt-4">
                (Detailed schedule available on individual event pages)
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <div className="text-center">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
              🔘 CALL TO ACTION
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                Register for TechFest
              </button>
              <button className="bg-gradient-to-r from-transparent to-transparent border-2 border-primary text-primary hover:bg-primary/10 font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                View Event Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechFestMobile() {
  return (
    <section 
      id="techfest-mobile" 
      className="relative w-full py-16 px-4 bg-black/50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl text-foreground mb-6 leading-tight">
            TECHFEST
          </h1>
          <h2 className="font-heading text-lg text-primary mb-6">
            Choose Your Challenge. Enter the Game.
          </h2>
          <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-4">
            High-intensity arena for innovators, coders, strategists, and creators. Game-like challenges meet real-world problem solving.
          </p>
          <p className="font-body text-base text-primary font-medium">
            Each event is a different level.
          </p>
        </div>

        {/* Events Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl text-foreground mb-2">
              🚀 TECHFEST EVENTS
            </h3>
            <p className="font-body text-sm text-[#b3b3b3]">
              (Click an event to enter its page)
            </p>
          </div>

          {/* Event Cards */}
          <div className="space-y-6">
            {techEvents.map((event) => (
              <div
                key={event.id}
                className={`group relative bg-gradient-to-br ${event.color} border-2 ${event.borderColor} rounded-2xl p-6 transition-all duration-500 hover:scale-102 ${event.glowColor} hover:shadow-xl cursor-pointer`}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{event.icon}</span>
                    <h4 className="font-heading text-lg text-foreground">{event.title}</h4>
                  </div>
                  
                  <p className="font-body text-sm text-primary font-medium mb-3">
                    {event.subtitle}
                  </p>
                  
                  <p className="font-body text-sm text-[#b3b3b3] leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/40 rounded-lg py-2 px-4 font-heading text-sm text-primary hover:bg-primary/20 hover:border-primary/60 transition-all duration-300"
                    onClick={() => {
                      window.location.href = event.route;
                    }}
                  >
                    👉 {event.buttonText}
                  </button>
                </div>

                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Participate */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🎯</span>
              <h3 className="font-heading text-lg text-foreground">Why Participate?</h3>
            </div>
            <ul className="space-y-2">
              {[
                "National-level competitive exposure",
                "Industry-aligned challenges",
                "Hands-on learning beyond classrooms",
                "Certificates, recognition & prizes"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 text-sm">•</span>
                  <p className="font-body text-sm text-[#b3b3b3]">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xl">⏳</span>
              <h3 className="font-heading text-lg text-foreground">Timeline</h3>
            </div>
            <div className="space-y-2">
              <p className="font-body text-base text-foreground">📅 19 – 20 Feb 2026</p>
              <p className="font-body text-base text-foreground">📍 SIT Nagpur</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16">
          <div className="text-center">
            <h3 className="font-heading text-lg text-foreground mb-6">
              🔘 CALL TO ACTION
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-heading text-base px-6 py-3 rounded-lg transition-all duration-300">
                Register for TechFest
              </button>
              <button className="w-full bg-gradient-to-r from-transparent to-transparent border-2 border-primary text-primary hover:bg-primary/10 font-heading text-base px-6 py-3 rounded-lg transition-all duration-300">
                View Event Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechFestPage() {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return (
      <>
        <SEO 
          title="TechFest - Choose Your Challenge. Enter the Game."
          description="Join the TechFest arena of Enthusia 5.0. High-intensity challenges for innovators, coders, and creators. 5 epic events await."
          url="https://sitnovate.vercel.app/techfest"
        />
        <div className="flex min-h-svh flex-col">
          <ProgressiveBlur
            direction="top"
            className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
            blurIntensity={1}
          />
          
          <Sidebar />
          
          <TechFestMobile />

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="TechFest - Choose Your Challenge. Enter the Game."
        description="Join the TechFest arena of Enthusia 5.0. High-intensity challenges for innovators, coders, and creators. 5 epic events await."
        url="https://sitnovate.vercel.app/techfest"
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <TechFest />
          <Footer />
        </main>
      </div>
    </>
  );
}