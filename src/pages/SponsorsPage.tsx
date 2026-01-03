import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const sponsorshipTiers = [
  {
    id: 'diamond',
    title: 'Diamond Sponsor',
    icon: '💎',
    size: 'large',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/40',
    glowColor: 'hover:shadow-cyan-500/25'
  },
  {
    id: 'platinum',
    title: 'Platinum Sponsor',
    icon: '🥇',
    size: 'medium',
    color: 'from-gray-400/20 to-slate-400/20',
    borderColor: 'border-gray-400/40',
    glowColor: 'hover:shadow-gray-400/25'
  },
  {
    id: 'gold',
    title: 'Gold Sponsor',
    icon: '🥈',
    size: 'medium',
    color: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/40',
    glowColor: 'hover:shadow-yellow-500/25'
  },
  {
    id: 'silver',
    title: 'Silver Sponsor',
    icon: '🥉',
    size: 'small',
    color: 'from-gray-300/20 to-gray-400/20',
    borderColor: 'border-gray-300/40',
    glowColor: 'hover:shadow-gray-300/25'
  },
  {
    id: 'bronze',
    title: 'Bronze Sponsor',
    icon: '🔸',
    size: 'small',
    color: 'from-orange-600/20 to-amber-700/20',
    borderColor: 'border-orange-600/40',
    glowColor: 'hover:shadow-orange-600/25'
  }
];

const partnerCategories = [
  { id: 'beverage', title: 'Beverage Partner', icon: '🥤' },
  { id: 'food', title: 'Food Partner', icon: '🍔' },
  { id: 'health', title: 'Health Partner', icon: '🏥' },
  { id: 'music', title: 'Music & Sound Partner', icon: '🎵' },
  { id: 'travel', title: 'Travel Partner', icon: '✈️' },
  { id: 'tech', title: 'Tech Partner', icon: '🧑‍💻' },
  { id: 'media', title: 'Media Partner', icon: '📢' },
  { id: 'merchandise', title: 'Merchandise Partner', icon: '👕' },
  { id: 'community', title: 'Community Partner', icon: '🤝' }
];

function LogoPlaceholder({ size = 'medium', className = '' }: { size?: 'small' | 'medium' | 'large', className?: string }) {
  const sizeClasses = {
    small: 'w-24 h-16 md:w-32 md:h-20',
    medium: 'w-32 h-20 md:w-40 md:h-24',
    large: 'w-40 h-24 md:w-56 md:h-32'
  };

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center ${className}`}>
      <span className="text-primary/60 font-body text-xs md:text-sm">Logo</span>
    </div>
  );
}

function Sponsors() {
  return (
    <section 
      id="sponsors" 
      className="relative w-full py-24 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-8 leading-tight">
            SPONSORS & PARTNERS
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl text-primary mb-8">
            Powering Enthusia 5.0
          </h2>
          <p className="font-body text-lg md:text-xl text-[#b3b3b3] leading-relaxed max-w-4xl mx-auto">
            Enthusia 5.0 is proudly supported by brands and partners who believe in innovation, youth culture, and creative expression. Their support helps us create a larger-than-life fest experience.
          </p>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              🏆 SPONSORSHIP TIERS
            </h3>
          </div>

          <div className="space-y-8">
            {sponsorshipTiers.map((tier) => (
              <div
                key={tier.id}
                className={`bg-gradient-to-br ${tier.color} border-2 ${tier.borderColor} rounded-3xl p-8 transition-all duration-500 ${tier.glowColor} hover:shadow-xl`}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{tier.icon}</span>
                    <h4 className="font-heading text-xl md:text-2xl text-foreground">{tier.title}</h4>
                  </div>
                  <div className="flex-1 flex justify-center md:justify-end">
                    <LogoPlaceholder size={tier.size as 'small' | 'medium' | 'large'} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              🧩 PARTNER CATEGORIES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCategories.map((partner) => (
              <div
                key={partner.id}
                className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{partner.icon}</span>
                  <h4 className="font-heading text-lg text-foreground">{partner.title}</h4>
                </div>
                <div className="flex justify-center">
                  <LogoPlaceholder size="medium" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Sponsors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              ⭐ PREVIOUS SPONSORS
            </h3>
            <p className="font-body text-lg text-[#b3b3b3]">
              (Logo showcase section)
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
              {Array.from({ length: 12 }, (_, index) => (
                <LogoPlaceholder key={index} size="small" className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
              ))}
            </div>
            <p className="text-center text-[#b3b3b3] font-body text-sm mt-6">
              Grid of logos from previous editions
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-8">
              📩 WANT TO PARTNER WITH US?
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                👉 Become a Sponsor
              </button>
              <button className="bg-gradient-to-r from-transparent to-transparent border-2 border-primary text-primary hover:bg-primary/10 font-heading text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                👉 Contact the Sponsorship Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SponsorsMobile() {
  return (
    <section 
      id="sponsors-mobile" 
      className="relative w-full py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl text-foreground mb-6 leading-tight">
            SPONSORS & PARTNERS
          </h1>
          <h2 className="font-heading text-lg text-primary mb-6">
            Powering Enthusia 5.0
          </h2>
          <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
            Proudly supported by brands who believe in innovation, youth culture, and creative expression.
          </p>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl text-foreground mb-2">
              🏆 SPONSORSHIP TIERS
            </h3>
          </div>

          <div className="space-y-4">
            {sponsorshipTiers.map((tier) => (
              <div
                key={tier.id}
                className={`bg-gradient-to-br ${tier.color} border-2 ${tier.borderColor} rounded-2xl p-6`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{tier.icon}</span>
                    <h4 className="font-heading text-base text-foreground">{tier.title}</h4>
                  </div>
                  <LogoPlaceholder size="small" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Categories */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl text-foreground mb-2">
              🧩 PARTNER CATEGORIES
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {partnerCategories.map((partner) => (
              <div
                key={partner.id}
                className="bg-card border border-border rounded-2xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{partner.icon}</span>
                    <h4 className="font-heading text-sm text-foreground">{partner.title}</h4>
                  </div>
                  <LogoPlaceholder size="small" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl text-foreground mb-2">
              ⭐ PREVIOUS SPONSORS
            </h3>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
              {Array.from({ length: 9 }, (_, index) => (
                <LogoPlaceholder key={index} size="small" className="opacity-70" />
              ))}
            </div>
            <p className="text-center text-[#b3b3b3] font-body text-xs mt-4">
              Previous edition logos
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
            <h3 className="font-heading text-lg text-foreground mb-6">
              📩 WANT TO PARTNER WITH US?
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-heading text-base px-6 py-3 rounded-lg transition-all duration-300">
                👉 Become a Sponsor
              </button>
              <button className="w-full bg-gradient-to-r from-transparent to-transparent border-2 border-primary text-primary hover:bg-primary/10 font-heading text-base px-6 py-3 rounded-lg transition-all duration-300">
                👉 Contact Sponsorship Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SponsorsPage() {
  const { isMobile } = useBreakpoint();

  if (isMobile) {
    return (
      <>
        <SEO 
          title="Sponsors & Partners - Powering Enthusia 5.0"
          description="Meet our sponsors and partners who support Enthusia 5.0. Join us as a sponsor and be part of the innovation and celebration."
          url="https://sitnovate.vercel.app/sponsors"
        />
        <div className="flex min-h-svh flex-col">
          <ProgressiveBlur
            direction="top"
            className="fixed top-0 left-0 w-full h-32 z-40 pointer-events-none"
            blurIntensity={1}
          />
          
          <Sidebar />
          
          <SponsorsMobile />

          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Sponsors & Partners - Powering Enthusia 5.0"
        description="Meet our sponsors and partners who support Enthusia 5.0. Join us as a sponsor and be part of the innovation and celebration."
        url="https://sitnovate.vercel.app/sponsors"
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <Sponsors />
          <Footer />
        </main>
      </div>
    </>
  );
}