import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

function ImagePlaceholder({ 
  width = 'w-full', 
  height = 'h-48', 
  caption = 'Event Photo',
  className = '' 
}: { 
  width?: string, 
  height?: string, 
  caption?: string,
  className?: string 
}) {
  return (
    <div className={`${width} ${height} bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center group hover:border-primary/50 transition-all duration-300 ${className}`}>
      <div className="text-4xl mb-2 opacity-60 group-hover:opacity-80 transition-opacity">📸</div>
      <span className="text-primary/60 font-body text-sm text-center px-2 group-hover:text-primary/80 transition-colors">{caption}</span>
    </div>
  );
}

function Gallery() {
  const festNumbers = [
    { number: '3000+', label: 'Footfall' },
    { number: 'Multiple', label: 'Institutes Participated' },
    { number: '3 Days', label: 'of Tech & Culture' },
    { number: 'One', label: 'Unforgettable Experience' }
  ];

  return (
    <section 
      id="gallery" 
      className="relative w-full py-24 px-4 md:px-8 lg:px-16 bg-black/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-tight">
            📸 GALLERY
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl text-primary mb-8">
            Relive the Experience
          </h2>
          <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed max-w-4xl mx-auto">
            Step back into the moments that define Enthusia — packed auditoriums, intense competitions, electric nights, and unforgettable celebrations. The gallery captures the energy, scale, and spirit of past editions.
          </p>
        </div>

        {/* TechFest Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              ⚙️ TECHFEST HIGHLIGHTS
            </h3>
            <p className="font-body text-lg text-[#b3b3b3]">
              (Grid / Masonry Section)
            </p>
          </div>

          <div className="bg-card/50 border border-border rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <ImagePlaceholder height="h-64" caption="Hackathon moments" />
              <ImagePlaceholder height="h-48" caption="Coding battles" />
              <ImagePlaceholder height="h-56" caption="Pitch desk interactions" />
              <ImagePlaceholder height="h-52" caption="Team collaboration" />
              <ImagePlaceholder height="h-60" caption="Judging sessions" />
              <ImagePlaceholder height="h-44" caption="Winner celebrations" />
            </div>
            <div className="text-center">
              <p className="text-[#b3b3b3] font-body text-sm">
                Hackathon moments • Coding battles • Pitch desk interactions • Team collaboration & judging
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Fest Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              🎭 CULTURAL FEST HIGHLIGHTS
            </h3>
            <p className="font-body text-lg text-[#b3b3b3]">
              (Grid / Slider Section)
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <ImagePlaceholder height="h-56" caption="Dance performances" />
              <ImagePlaceholder height="h-64" caption="Drama acts" />
              <ImagePlaceholder height="h-48" caption="Ramp walk" />
              <ImagePlaceholder height="h-60" caption="Stage performances" />
              <ImagePlaceholder height="h-52" caption="Student celebrations" />
              <ImagePlaceholder height="h-58" caption="Cultural moments" />
              <ImagePlaceholder height="h-50" caption="Audience energy" />
              <ImagePlaceholder height="h-54" caption="Behind the scenes" />
            </div>
            <div className="text-center">
              <p className="text-[#b3b3b3] font-body text-sm">
                Dance & drama performances • Ramp walk & stage acts • Student celebrations
              </p>
            </div>
          </div>
        </div>

        {/* Celebrity & DJ Night */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              🌟 CELEBRITY & DJ NIGHT
            </h3>
            <p className="font-body text-lg text-[#b3b3b3]">
              (Hero Slider Section)
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-8">
            {/* Hero Slider Placeholder */}
            <div className="mb-6">
              <ImagePlaceholder height="h-80 md:h-96" caption="Main Stage - Celebrity Performance" />
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <ImagePlaceholder height="h-32" caption="Live performance" />
              <ImagePlaceholder height="h-32" caption="Crowd energy" />
              <ImagePlaceholder height="h-32" caption="Stage lighting" />
              <ImagePlaceholder height="h-32" caption="DJ setup" />
            </div>
            
            <div className="text-center">
              <p className="text-[#b3b3b3] font-body text-sm">
                Live performances • Crowd energy • Stage lighting & visuals
              </p>
            </div>
          </div>
        </div>

        {/* Movie Night & Jamming Night */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              🎬 MOVIE NIGHT & JAMMING NIGHT
            </h3>
            <p className="font-body text-lg text-[#b3b3b3]">
              (Casual / Cozy Section)
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <ImagePlaceholder height="h-56" caption="Open-air screenings" />
              <ImagePlaceholder height="h-56" caption="Musical jam sessions" />
              <ImagePlaceholder height="h-56" caption="Campus bonding moments" />
              <ImagePlaceholder height="h-48" caption="Cozy movie setup" />
              <ImagePlaceholder height="h-48" caption="Acoustic performances" />
              <ImagePlaceholder height="h-48" caption="Student interactions" />
            </div>
            <div className="text-center">
              <p className="text-[#b3b3b3] font-body text-sm">
                Open-air screenings • Musical jam sessions • Campus bonding moments
              </p>
            </div>
          </div>
        </div>

        {/* Fest in Numbers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              📊 FEST IN NUMBERS
            </h3>
            <p className="font-body text-lg text-[#b3b3b3]">
              (Optional but powerful)
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {festNumbers.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-heading text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg md:text-xl font-body text-[#b3b3b3] group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
              🔘 CALL TO ACTION
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/techfest"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Join Enthusia 5.0
              </a>
              <a 
                href="/techfest"
                className="bg-gradient-to-r from-transparent to-transparent border-2 border-primary text-primary hover:bg-primary/10 font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryMobile() {
  const festNumbers = [
    { number: '3000+', label: 'Footfall' },
    { number: 'Multiple', label: 'Institutes' },
    { number: '3 Days', label: 'Tech & Culture' },
    { number: 'One', label: 'Experience' }
  ];

  return (
    <section 
      id="gallery-mobile" 
      className="relative w-full py-16 px-4 bg-black/30"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl text-foreground mb-6 leading-tight">
            📸 GALLERY
          </h1>
          <h2 className="font-heading text-lg text-primary mb-6">
            Relive the Experience
          </h2>
          <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
            Step back into the moments that define Enthusia — packed auditoriums, intense competitions, and unforgettable celebrations.
          </p>
        </div>

        {/* TechFest Highlights */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl text-foreground mb-2">
              ⚙️ TECHFEST HIGHLIGHTS
            </h3>
          </div>

          <div className="bg-card/50 border border-border rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <ImagePlaceholder height="h-32" caption="Hackathons" />
              <ImagePlaceholder height="h-40" caption="Coding battles" />
              <ImagePlaceholder height="h-36" caption="Pitch sessions" />
              <ImagePlaceholder height="h-32" caption="Team work" />
            </div>
            <p className="text-[#b3b3b3] font-body text-xs text-center">
              Hackathon moments • Coding battles • Team collaboration
            </p>
          </div>
        </div>

        {/* Cultural Fest Highlights */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl text-foreground mb-2">
              🎭 CULTURAL FEST HIGHLIGHTS
            </h3>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <ImagePlaceholder height="h-36" caption="Dance shows" />
              <ImagePlaceholder height="h-32" caption="Drama acts" />
              <ImagePlaceholder height="h-40" caption="Ramp walk" />
              <ImagePlaceholder height="h-34" caption="Celebrations" />
            </div>
            <p className="text-[#b3b3b3] font-body text-xs text-center">
              Dance & drama • Ramp walk • Student celebrations
            </p>
          </div>
        </div>

        {/* Celebrity & DJ Night */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl text-foreground mb-2">
              🌟 CELEBRITY & DJ NIGHT
            </h3>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-6">
            <div className="mb-4">
              <ImagePlaceholder height="h-48" caption="Main Stage Performance" />
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <ImagePlaceholder height="h-20" caption="Live show" />
              <ImagePlaceholder height="h-20" caption="Crowd" />
              <ImagePlaceholder height="h-20" caption="DJ setup" />
            </div>
            <p className="text-[#b3b3b3] font-body text-xs text-center">
              Live performances • Crowd energy • Stage visuals
            </p>
          </div>
        </div>

        {/* Movie & Jamming Night */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl text-foreground mb-2">
              🎬 MOVIE & JAMMING NIGHT
            </h3>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <ImagePlaceholder height="h-32" caption="Movie screenings" />
              <ImagePlaceholder height="h-32" caption="Jam sessions" />
              <ImagePlaceholder height="h-28" caption="Campus bonding" />
              <ImagePlaceholder height="h-28" caption="Acoustic sets" />
            </div>
            <p className="text-[#b3b3b3] font-body text-xs text-center">
              Open-air screenings • Musical jams • Campus bonding
            </p>
          </div>
        </div>

        {/* Fest in Numbers */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl text-foreground mb-2">
              📊 FEST IN NUMBERS
            </h3>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-6 text-center">
              {festNumbers.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-heading text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-body text-[#b3b3b3]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
            <h3 className="font-heading text-lg text-foreground mb-6">
              🔘 CALL TO ACTION
            </h3>
            <div className="space-y-4">
              <a 
                href="/techfest"
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-heading text-base px-6 py-3 rounded-lg transition-all duration-300"
              >
                Join Enthusia 5.0
              </a>
              <a 
                href="/techfest"
                className="w-full bg-gradient-to-r from-transparent to-transparent border-2 border-primary text-primary hover:bg-primary/10 font-heading text-base px-6 py-3 rounded-lg transition-all duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GalleryPage() {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return (
      <>
        <SEO 
          title="Gallery - Relive the Experience"
          description="Explore the Gallery of Enthusia 5.0. Relive the moments from TechFest, Cultural Fest, Celebrity nights, and unforgettable celebrations."
          url="https://sitnovate.vercel.app/gallery"
        />
        <div className="flex min-h-svh flex-col">
          <ProgressiveBlur
            direction="top"
            className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
            blurIntensity={1}
          />
          
          <Sidebar />
          
          <GalleryMobile />

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Gallery - Relive the Experience"
        description="Explore the Gallery of Enthusia 5.0. Relive the moments from TechFest, Cultural Fest, Celebrity nights, and unforgettable celebrations."
        url="https://sitnovate.vercel.app/gallery"
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <Gallery />
          <Footer />
        </main>
      </div>
    </>
  );
}