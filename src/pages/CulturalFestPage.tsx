import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const culturalEvents = [
  {
    id: 'cultural-program',
    title: 'Cultural Program (Auditorium)',
    subtitle: 'Dance • Drama • Ramp Walk • Felicitation',
    description: 'A showcase of student talent through curated stage performances and ceremonies.',
    icon: '🎭',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/40',
    glowColor: 'hover:shadow-purple-500/25',
    buttonText: 'Enter the Auditorium',
    route: '/events/cultural-program'
  },
  {
    id: 'jamming-night',
    title: 'Jamming Night',
    subtitle: 'Open Musical Evening',
    description: 'An open musical evening filled with vocals, instruments, and spontaneous collaborations.',
    icon: '🎸',
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/40',
    glowColor: 'hover:shadow-orange-500/25',
    buttonText: 'Enter the Jam',
    route: '/events/jamming-night'
  },
  {
    id: 'standup-comedy',
    title: 'Stand-Up Comedy',
    subtitle: 'Laughter-Packed Session',
    description: 'A laughter-packed session featuring witty performances and relatable humor.',
    icon: '🎤',
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/40',
    glowColor: 'hover:shadow-yellow-500/25',
    buttonText: 'Enter the Comedy Zone',
    route: '/events/standup-comedy'
  },
  {
    id: 'celebrity-night',
    title: 'Celebrity Night',
    subtitle: 'Artist to be revealed soon',
    description: 'The most awaited night of the fest — a high-energy live performance by a renowned artist.',
    icon: '🌟',
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-500/40',
    glowColor: 'hover:shadow-pink-500/25',
    buttonText: 'Enter the Main Stage',
    route: '/events/celebrity-night'
  },
  {
    id: 'dj-night',
    title: 'DJ Night',
    subtitle: 'Electrifying Beats & Immersive Lights',
    description: 'Electrifying beats, immersive lights, and a vibrant dance floor to close the fest on a high note.',
    icon: '🎧',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/40',
    glowColor: 'hover:shadow-cyan-500/25',
    buttonText: 'Enter the Final Level',
    route: '/events/dj-night'
  }
];

function CulturalFest() {
  return (
    <section 
      id="cultural-fest" 
      className="relative w-full py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black/80 to-purple-900/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-foreground mb-8 leading-tight">
            🎭 CULTURAL FEST
          </h1>
          <h2 className="font-heading text-2xl md:text-4xl text-pink-400 mb-8">
            Feel the Vibe. Own the Night.
          </h2>
          <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed max-w-4xl mx-auto mb-6">
            The Cultural Fest of Enthusia 5.0 is where expression takes over and the campus transforms into a stage of music, performance, laughter, and celebration. After intense competitions, the Cultural Fest offers students a space to express freely, connect deeply, and celebrate together.
          </p>
          <p className="font-body text-lg md:text-xl text-pink-400 font-medium">
            Inspired by fictional worlds and festival-scale energy, each cultural segment is designed as a moment, not just an event.
          </p>
        </div>

        {/* Cultural Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              🌟 CULTURAL HIGHLIGHTS
            </h3>
            <p className="font-body text-lg text-[#b3b3b3]">
              (Click to explore)
            </p>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalEvents.map((event) => (
              <div
                key={event.id}
                className={`group relative bg-gradient-to-br ${event.color} border-2 ${event.borderColor} rounded-3xl p-8 transition-all duration-700 hover:scale-105 ${event.glowColor} hover:shadow-2xl cursor-pointer transform hover:-translate-y-3`}
              >
                {/* Stage Spotlight Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`}></div>
                
                {/* Warm Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{event.icon}</span>
                    <h4 className="font-heading text-xl md:text-2xl text-foreground">{event.title}</h4>
                  </div>
                  
                  <p className="font-body text-sm md:text-base text-pink-400 font-medium mb-4">
                    {event.subtitle}
                  </p>
                  
                  <p className="font-body text-sm md:text-base text-[#b3b3b3] leading-relaxed mb-6">
                    {event.description}
                  </p>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 rounded-xl py-3 px-6 font-heading text-pink-400 hover:bg-pink-500/30 hover:border-pink-500/60 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/25"
                    onClick={() => {
                      window.location.href = event.route;
                    }}
                  >
                    👉 {event.buttonText}
                  </button>
                </div>

                {/* Stage Light Sweep Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Cultural Fest */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">✨</span>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground">Why Cultural Fest?</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "High-energy evening experiences",
                "Inclusive & high-participation events",
                "Perfect balance to the TechFest",
                "Unforgettable campus memories"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-rose-400 mt-1 text-xl">•</span>
                  <p className="font-body text-lg text-[#b3b3b3]">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-3xl">⏳</span>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground">Cultural Fest Timeline</h3>
            </div>
            <div className="space-y-4">
              <p className="font-body text-xl md:text-2xl text-foreground">
                📅 19 – 21 February 2026
              </p>
              <p className="font-body text-xl md:text-2xl text-foreground">
                📍 Symbiosis Institute of Technology, Nagpur
              </p>
              <p className="font-body text-base text-[#b3b3b3] mt-4">
                (Detailed timings available in the Schedule section)
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
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
                View Event Schedule
              </button>
              <button className="bg-gradient-to-r from-transparent to-transparent border-2 border-pink-500 text-pink-400 hover:bg-pink-500/10 font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                Register for Cultural Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CulturalFestMobile() {
  return (
    <section 
      id="cultural-fest-mobile" 
      className="relative w-full py-16 px-4 bg-gradient-to-b from-black/80 to-purple-900/20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl text-foreground mb-6 leading-tight">
            🎭 CULTURAL FEST
          </h1>
          <h2 className="font-heading text-lg text-pink-400 mb-6">
            Feel the Vibe. Own the Night.
          </h2>
          <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-4">
            Where expression takes over and the campus transforms into a stage of music, performance, laughter, and celebration.
          </p>
          <p className="font-body text-base text-pink-400 font-medium">
            Each cultural segment is designed as a moment, not just an event.
          </p>
        </div>

        {/* Cultural Highlights */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl text-foreground mb-2">
              🌟 CULTURAL HIGHLIGHTS
            </h3>
            <p className="font-body text-sm text-[#b3b3b3]">
              (Click to explore)
            </p>
          </div>

          {/* Event Cards */}
          <div className="space-y-6">
            {culturalEvents.map((event) => (
              <div
                key={event.id}
                className={`group relative bg-gradient-to-br ${event.color} border-2 ${event.borderColor} rounded-2xl p-6 transition-all duration-500 hover:scale-102 ${event.glowColor} hover:shadow-xl cursor-pointer`}
              >
                {/* Stage Spotlight Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg`}></div>
                
                {/* Warm Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{event.icon}</span>
                    <h4 className="font-heading text-lg text-foreground">{event.title}</h4>
                  </div>
                  
                  <p className="font-body text-sm text-pink-400 font-medium mb-3">
                    {event.subtitle}
                  </p>
                  
                  <p className="font-body text-sm text-[#b3b3b3] leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <button 
                    className="w-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 rounded-lg py-2 px-4 font-heading text-sm text-pink-400 hover:bg-pink-500/30 hover:border-pink-500/60 transition-all duration-300"
                    onClick={() => {
                      window.location.href = event.route;
                    }}
                  >
                    👉 {event.buttonText}
                  </button>
                </div>

                {/* Stage Light Sweep */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Cultural Fest */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">✨</span>
              <h3 className="font-heading text-lg text-foreground">Why Cultural Fest?</h3>
            </div>
            <ul className="space-y-2">
              {[
                "High-energy evening experiences",
                "Inclusive & high-participation events",
                "Perfect balance to the TechFest",
                "Unforgettable campus memories"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-rose-400 mt-1 text-sm">•</span>
                  <p className="font-body text-sm text-[#b3b3b3]">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xl">⏳</span>
              <h3 className="font-heading text-lg text-foreground">Timeline</h3>
            </div>
            <div className="space-y-2">
              <p className="font-body text-base text-foreground">📅 19 – 21 Feb 2026</p>
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
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-heading text-base px-6 py-3 rounded-lg transition-all duration-300">
                View Event Schedule
              </button>
              <button className="w-full bg-gradient-to-r from-transparent to-transparent border-2 border-pink-500 text-pink-400 hover:bg-pink-500/10 font-heading text-base px-6 py-3 rounded-lg transition-all duration-300">
                Register for Cultural Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CulturalFestPage() {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return (
      <>
        <SEO 
          title="Cultural Fest - Feel the Vibe. Own the Night."
          description="Experience the Cultural Fest of Enthusia 5.0. Music, performance, laughter, and celebration. 5 amazing cultural events await."
          url="https://sitnovate.vercel.app/cultural-fest"
        />
        <div className="flex min-h-svh flex-col">
          <ProgressiveBlur
            direction="top"
            className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
            blurIntensity={1}
          />
          
          <Sidebar />
          
          <CulturalFestMobile />

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Cultural Fest - Feel the Vibe. Own the Night."
        description="Experience the Cultural Fest of Enthusia 5.0. Music, performance, laughter, and celebration. 5 amazing cultural events await."
        url="https://sitnovate.vercel.app/cultural-fest"
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <CulturalFest />
          <Footer />
        </main>
      </div>
    </>
  );
}