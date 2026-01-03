import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

function AboutSITNagpur() {
  return (
    <section 
      id="about-sit-nagpur" 
      className="relative w-full py-24 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            ABOUT SIT NAGPUR
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground mb-8">
            Building Engineers for a Global Future
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Introduction */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-3xl p-8">
              <p className="font-body text-lg text-[#b3b3b3] leading-relaxed mb-6">
                Symbiosis Institute of Technology, Nagpur is a premier engineering institute established in <span className="text-foreground font-medium">2021</span> under Symbiosis International (Deemed) University, Pune. The institute is dedicated to delivering industry-oriented technical education, fostering innovation, and nurturing globally competent professionals.
              </p>
              <p className="font-body text-lg text-[#b3b3b3] leading-relaxed">
                Located on a sprawling <span className="text-foreground font-medium">75-acre state-of-the-art campus</span>, SIT Nagpur is one of the largest campuses under the Symbiosis umbrella. The campus offers a dynamic academic environment supported by modern infrastructure, advanced laboratories, innovation spaces, auditoriums, sports facilities, and residential amenities.
              </p>
            </div>
          </div>

          {/* Right Column - Vision & Philosophy */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌍</span>
                <h3 className="font-heading text-xl text-foreground">Vision & Philosophy</h3>
              </div>
              <p className="font-body text-lg text-[#b3b3b3] leading-relaxed mb-4">
                Guided by the philosophy of <span className="text-primary font-medium">Vasudhaiva Kutumbakam</span> — "The World is One Family", SIT Nagpur emphasizes holistic education, ethical leadership, interdisciplinary learning, and real-world problem solving.
              </p>
              <p className="font-body text-lg text-[#b3b3b3] leading-relaxed">
                The institute strives to create engineers who are not only technically skilled but also socially responsible and globally aware.
              </p>
            </div>
          </div>
        </div>

        {/* Academic Excellence */}
        <div className="mb-16">
          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🎓</span>
              <h3 className="font-heading text-2xl text-foreground">Academic Excellence</h3>
            </div>
            <p className="font-body text-lg text-[#b3b3b3] leading-relaxed mb-6">
              SIT Nagpur offers undergraduate engineering programs in emerging and high-demand domains:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                "Artificial Intelligence & Machine Learning",
                "Cyber Security", 
                "Internet of Things (IoT)",
                "Data Science",
                "Cloud Computing"
              ].map((program, index) => (
                <div key={index} className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <p className="font-body text-foreground font-medium">{program}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-lg text-[#b3b3b3] leading-relaxed">
              These programs are designed with a strong focus on innovation, research, and industry alignment, preparing students for future technologies and global careers.
            </p>
          </div>
        </div>

        {/* Why SIT Nagpur */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-green-500/10 to-green-400/5 border border-green-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🌱</span>
              <h3 className="font-heading text-2xl text-foreground">Why SIT Nagpur?</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Industry-aligned curriculum",
                "Experienced faculty & mentors",
                "Focus on innovation, startups & research",
                "Pollution-free, architecturally unique campus",
                "Active technical, cultural & professional communities"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <p className="font-body text-lg text-[#b3b3b3]">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-center">
            <p className="font-body text-lg text-[#b3b3b3] leading-relaxed mb-6">
              SIT Nagpur has rapidly emerged as a hub of academic excellence, innovation, and student-driven initiatives in central India.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xl">🔗</span>
              <div>
                <p className="font-heading text-lg text-foreground mb-2">Learn More</p>
                <a 
                  href="https://sitnagpur.edu.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-primary hover:text-primary/80 transition-colors"
                >
                  🌐 https://sitnagpur.edu.in/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSITNagpurMobile() {
  return (
    <section 
      id="about-sit-nagpur-mobile" 
      className="relative w-full py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            ABOUT SIT NAGPUR
          </h2>
          <p className="font-heading text-3xl text-foreground mb-6">
            Building Engineers for a Global Future
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-4">
              Symbiosis Institute of Technology, Nagpur is a premier engineering institute established in <span className="text-foreground font-medium">2021</span> under Symbiosis International (Deemed) University, Pune.
            </p>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
              Located on a sprawling <span className="text-foreground font-medium">75-acre state-of-the-art campus</span>, SIT Nagpur offers a dynamic academic environment with modern infrastructure and advanced facilities.
            </p>
          </div>

          {/* Vision & Philosophy */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🌍</span>
              <h3 className="font-heading text-lg text-foreground">Vision & Philosophy</h3>
            </div>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-3">
              Guided by <span className="text-primary font-medium">Vasudhaiva Kutumbakam</span> — "The World is One Family", SIT Nagpur emphasizes holistic education and real-world problem solving.
            </p>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
              Creating engineers who are technically skilled, socially responsible, and globally aware.
            </p>
          </div>

          {/* Academic Excellence */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🎓</span>
              <h3 className="font-heading text-lg text-foreground">Academic Excellence</h3>
            </div>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-4">
              Undergraduate engineering programs in emerging domains:
            </p>
            <div className="space-y-2 mb-4">
              {[
                "AI & Machine Learning",
                "Cyber Security", 
                "AI of Things (AIoT)",
                "Data Science",
                "Cloud Computing"
              ].map((program, index) => (
                <div key={index} className="bg-muted/50 rounded-lg p-3 border border-border/50">
                  <p className="font-body text-foreground font-medium text-sm">{program}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
              Programs focused on innovation, research, and industry alignment.
            </p>
          </div>

          {/* Why SIT Nagpur */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-400/5 border border-green-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🌱</span>
              <h3 className="font-heading text-lg text-foreground">Why SIT Nagpur?</h3>
            </div>
            <ul className="space-y-2 mb-4">
              {[
                "Industry-aligned curriculum",
                "Experienced faculty & mentors",
                "Focus on innovation & research",
                "Unique campus architecture",
                "Active student communities"
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-400 mt-1 text-sm">•</span>
                  <p className="font-body text-base text-[#b3b3b3]">{point}</p>
                </li>
              ))}
            </ul>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
              A hub of academic excellence and innovation in central India.
            </p>
          </div>

          {/* Learn More */}
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-lg">🔗</span>
              <p className="font-heading text-lg text-foreground">Learn More</p>
            </div>
            <a 
              href="https://sitnagpur.edu.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-primary hover:text-primary/80 transition-colors text-sm"
            >
              🌐 sitnagpur.edu.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSITNagpurPage() {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return (
      <>
        <SEO 
          title="About SIT Nagpur - ENTHUSIA 5.0"
          description="Learn about Symbiosis Institute of Technology, Nagpur - Building Engineers for a Global Future. Premier engineering institute established in 2021."
          url="https://sitnovate.vercel.app/about-sit-nagpur"
        />
        <div className="flex min-h-svh flex-col">
          {/* Global Progressive Blur at top of screen */}
          <ProgressiveBlur
            direction="top"
            className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
            blurIntensity={1}
          />
          
          {/* Add the existing Sidebar component */}
          <Sidebar />
          
          {/* Mobile About SIT Nagpur Section */}
          <AboutSITNagpurMobile />

          {/* Mobile Footer Section */}
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="About SIT Nagpur - ENTHUSIA 5.0"
        description="Learn about Symbiosis Institute of Technology, Nagpur - Building Engineers for a Global Future. Premier engineering institute established in 2021."
        url="https://sitnovate.vercel.app/about-sit-nagpur"
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <AboutSITNagpur />
          <Footer />
        </main>
      </div>
    </>
  );
}