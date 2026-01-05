import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

function AboutEnthusia() {
  return (
    <section 
      id="about-enthusia" 
      className="relative w-full py-24 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <h2 className="font-body text-lg font-light text-foreground mb-6">
            ABOUT ENTHUSIA 5.0
          </h2>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-tight">
            Enter the Parallel<br />Fest Universe
          </h1>
          <p className="font-body text-xl md:text-2xl text-[#b3b3b3] leading-relaxed max-w-4xl mx-auto">
            Enthusia 5.0 is the annual flagship techno-cultural fest of Symbiosis Institute of Technology, Nagpur — a three-day experience where technology, creativity, competition, and celebration collide.
          </p>
        </div>

        {/* Main Description */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-8 md:p-12">
            <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed text-center">
              Inspired by fictional worlds and game-like realities, Enthusia transforms the campus into a parallel universe of challenges and performances, where every participant chooses a path, levels up skills, and creates unforgettable memories.
            </p>
          </div>
        </div>

        {/* What is Enthusia */}
        <div className="mb-20">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🌌</span>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground">What is Enthusia?</h3>
            </div>
            <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed mb-8">
              Enthusia is more than just a college fest. It is a platform where:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                "innovators build under pressure",
                "creators perform on grand stages", 
                "leaders pitch bold ideas",
                "students celebrate expression and community"
              ].map((item, index) => (
                <div key={index} className="bg-muted/30 rounded-xl p-6 border border-border/50">
                  <p className="font-body text-lg text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed">
              From 24-hour hackathons and coding battles to cultural showcases and celebrity nights, Enthusia brings together diverse talents on one immersive stage.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🎯</span>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground">Vision of Enthusia 5.0</h3>
            </div>
            <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed mb-8">
              At the heart of Enthusia lies the belief that learning, innovation, and culture thrive best when experienced together.
            </p>
            <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed mb-8">
              Enthusia 5.0 aims to:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Encourage innovation and problem-solving",
                "Promote entrepreneurship and leadership",
                "Celebrate art, culture, and self-expression",
                "Build collaboration across disciplines and institutes"
              ].map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1 text-xl">•</span>
                  <p className="font-body text-lg md:text-xl text-[#b3b3b3]">{goal}</p>
                </li>
              ))}
            </ul>
            <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed">
              Rooted in the philosophy of <span className="text-blue-400 font-medium">Vasudhaiva Kutumbakam</span> — "The World is One Family", Enthusia unites students from different backgrounds into one shared experience.
            </p>
          </div>
        </div>

        {/* Choose Your Arena */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl">⚔️</span>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground">Choose Your Arena</h3>
            </div>
            <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed">
              Participants can explore multiple arenas within the fest:
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TechFest Arena */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⚙️</span>
                <h4 className="font-heading text-2xl text-foreground">TechFest</h4>
              </div>
              <p className="font-body text-lg text-[#b3b3b3] leading-relaxed">
                Hackathons, coding competitions, pitch battles, strategy challenges, and innovation sprints designed to simulate real-world problem solving.
              </p>
            </div>

            {/* Cultural Fest Arena */}
            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🎭</span>
                <h4 className="font-heading text-2xl text-foreground">Cultural Fest</h4>
              </div>
              <p className="font-body text-lg text-[#b3b3b3] leading-relaxed">
                Music, dance, drama, comedy, celebrity performances, and DJ nights that bring the campus alive after sunset.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed">
              Each arena offers its own challenges, rewards, and unforgettable moments.
            </p>
          </div>
        </div>

        {/* When & Where */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-3xl">📅</span>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground">When & Where</h3>
            </div>
            <div className="space-y-4">
              <p className="font-body text-xl md:text-2xl text-foreground">
                📍 Symbiosis Institute of Technology, Nagpur
              </p>
              <p className="font-body text-xl md:text-2xl text-foreground">
                📅 12 – 14 February 2026
              </p>
            </div>
          </div>
        </div>

        {/* Why Enthusia Stands Out */}
        <div className="mb-20">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">✨</span>
              <h3 className="font-heading text-3xl md:text-4xl text-foreground">Why Enthusia Stands Out</h3>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "National-level technical & cultural events",
                "High student participation & engagement",
                "A unique fictional, immersive theme",
                "A perfect balance of competition and celebration"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">•</span>
                  <p className="font-body text-lg md:text-xl text-[#b3b3b3]">{point}</p>
                </li>
              ))}
            </ul>
            <p className="font-body text-xl md:text-2xl text-foreground text-center font-medium">
              Enthusia 5.0 is not just an event you attend — it's an experience you enter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutEnthusiaMobile() {
  return (
    <section 
      id="about-enthusia-mobile" 
      className="relative w-full py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            ABOUT ENTHUSIA 5.0
          </h2>
          <h1 className="font-heading text-4xl text-foreground mb-6 leading-tight">
            Enter the Parallel<br />Fest Universe
          </h1>
          <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
            Enthusia 5.0 is the annual flagship techno-cultural fest of Symbiosis Institute of Technology, Nagpur — a three-day experience where technology, creativity, competition, and celebration collide.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Description */}
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed text-center">
              Inspired by fictional worlds and game-like realities, Enthusia transforms the campus into a parallel universe of challenges and performances.
            </p>
          </div>

          {/* What is Enthusia */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🌌</span>
              <h3 className="font-heading text-lg text-foreground">What is Enthusia?</h3>
            </div>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-4">
              Enthusia is more than just a college fest. It is a platform where innovators build, creators perform, leaders pitch, and students celebrate.
            </p>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
              From hackathons to cultural showcases, Enthusia brings together diverse talents on one immersive stage.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🎯</span>
              <h3 className="font-heading text-lg text-foreground">Vision of Enthusia 5.0</h3>
            </div>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-4">
              Rooted in <span className="text-blue-400 font-medium">Vasudhaiva Kutumbakam</span>, Enthusia unites students from different backgrounds into one shared experience.
            </p>
          </div>

          {/* Arenas */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-xl">⚔️</span>
                <h3 className="font-heading text-lg text-foreground">Choose Your Arena</h3>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">⚙️</span>
                <h4 className="font-heading text-base text-foreground">TechFest</h4>
              </div>
              <p className="font-body text-sm text-[#b3b3b3] leading-relaxed">
                Hackathons, coding competitions, and innovation sprints.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🎭</span>
                <h4 className="font-heading text-base text-foreground">Cultural Fest</h4>
              </div>
              <p className="font-body text-sm text-[#b3b3b3] leading-relaxed">
                Music, dance, drama, and celebrity performances.
              </p>
            </div>
          </div>

          {/* When & Where */}
          <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xl">📅</span>
              <h3 className="font-heading text-lg text-foreground">When & Where</h3>
            </div>
            <div className="space-y-2">
              <p className="font-body text-base text-foreground">📍 SIT Nagpur</p>
              <p className="font-body text-base text-foreground">📅 12 – 14 Feb 2026</p>
            </div>
          </div>

          {/* Why Stands Out */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">✨</span>
              <h3 className="font-heading text-lg text-foreground">Why Enthusia Stands Out</h3>
            </div>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-4">
              National-level events, high engagement, unique immersive theme, and perfect balance of competition and celebration.
            </p>
            <p className="font-body text-base text-foreground text-center font-medium">
              It's an experience you enter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutEnthusiaPage() {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return (
      <>
        <SEO 
          title="About Enthusia 5.0 - Enter the Parallel Fest Universe"
          description="Discover Enthusia 5.0, the annual flagship techno-cultural fest of SIT Nagpur. A three-day immersive experience of technology, creativity, and celebration."
          url="https://sitnovate.vercel.app/about-enthusia"
        />
        <div className="flex min-h-svh flex-col">
          <ProgressiveBlur
            direction="top"
            className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
            blurIntensity={1}
          />
          
          <Sidebar />
          
          <AboutEnthusiaMobile />

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="About Enthusia 5.0 - Enter the Parallel Fest Universe"
        description="Discover Enthusia 5.0, the annual flagship techno-cultural fest of SIT Nagpur. A three-day immersive experience of technology, creativity, and celebration."
        url="https://sitnovate.vercel.app/about-enthusia"
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <AboutEnthusia />
          <Footer />
        </main>
      </div>
    </>
  );
}