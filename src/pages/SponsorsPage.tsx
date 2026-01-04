import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion } from "framer-motion";
import { SponsorsHero3D, OrbitalRing, FlipCard, CinematicCTA, FloatingParticles } from "@/components/sponsors";

// Sponsor data - replace with actual sponsor info when available
const sponsorData = {
  diamond: [
    { name: 'Diamond Partner 1', logo: 'https://via.placeholder.com/150' },
    { name: 'Diamond Partner 2', logo: 'https://via.placeholder.com/150' },
    { name: 'Diamond Partner 3', logo: 'https://via.placeholder.com/150' }, // New
    { name: 'Diamond Partner 4', logo: 'https://via.placeholder.com/150' }, // New
  ],
  platinum: [
    { name: 'Platinum Partner 1' },
    { name: 'Platinum Partner 2' },
    { name: 'Platinum Partner 3' },
    { name: 'Platinum Partner 4' }, // Added
    { name: 'Platinum Partner 5' }, // Added
  ],
  gold: [
    { name: 'Gold Partner 1' },
    { name: 'Gold Partner 2' },
    { name: 'Gold Partner 3' },
    { name: 'Gold Partner 4' },
    { name: 'Gold Partner 5' }, // Added
    { name: 'Gold Partner 6' }, // Added
  ],
  silver: [
    { name: 'Silver Partner 1' },
    { name: 'Silver Partner 2' },
    { name: 'Silver Partner 3' },
    { name: 'Silver Partner 4' },
    { name: 'Silver Partner 5' },
  ],
};

const partnerCategories = [
  { id: 'tech', title: 'Tech Partner', icon: '🧑‍💻' },
  { id: 'food', title: 'Food Partner', icon: '🍔' },
  { id: 'media', title: 'Media Partner', icon: '📢' },
  { id: 'community', title: 'Community Partner', icon: '🤝' },
  { id: 'travel', title: 'Travel Partner', icon: '✈️' },
  { id: 'merchandise', title: 'Merchandise Partner', icon: '👕' },
];

function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden"
    >
      {/* 3D Cinematic Hero Section */}
      {/* 3D Cinematic Hero Section */}
      <SponsorsHero3D
        diamondSponsors={sponsorData.diamond}
        platinumSponsors={sponsorData.platinum}
        goldSponsors={sponsorData.gold}
      />

      {/* Additional Content Below Hero */}
      <div className="relative z-10 bg-[#0a0a0f] py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Partner Categories - Flip Cards */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="font-heading text-3xl md:text-5xl text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                🧩 PARTNER CATEGORIES
              </motion.h3>
              <motion.p
                className="font-body text-lg text-[#b3b3b3] max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Flip to discover the brands behind each category
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {partnerCategories.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FlipCard
                    icon={partner.icon}
                    title={partner.title}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cinematic CTA */}
          <CinematicCTA />
        </div>
      </div>
    </section>
  );
}

function SponsorsMobile() {
  return (
    <section
      id="sponsors-mobile"
      className="relative w-full py-16 px-4 overflow-hidden"
    >
      <FloatingParticles />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Hero Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-3xl text-foreground mb-4 leading-tight">
            SPONSORS & PARTNERS
          </h1>
          <h2 className="font-heading text-lg text-primary mb-4">
            ✨ Orbiting in the Enthusia Universe ✨
          </h2>
          <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
            Our sponsors power innovation as vital satellites in the Enthusia constellation.
          </p>
        </motion.div>

        {/* Mobile Orbital Display - Stacked */}
        <div className="space-y-20 mb-20">
          {/* Diamond Tier */}
          <OrbitalRing
            tier="diamond"
            sponsors={sponsorData.diamond}
            radius={140}
            duration={35}
          />

          {/* Platinum Tier */}
          <OrbitalRing
            tier="platinum"
            sponsors={sponsorData.platinum}
            radius={130}
            duration={30}
          />

          {/* Gold Tier */}
          <OrbitalRing
            tier="gold"
            sponsors={sponsorData.gold}
            radius={120}
            duration={25}
          />

          {/* Silver Tier */}
          <OrbitalRing
            tier="silver"
            sponsors={sponsorData.silver}
            radius={110}
            duration={20}
          />
        </div>

        {/* Partner Categories - Flip Cards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl text-foreground mb-4">
              🧩 PARTNER CATEGORIES
            </h3>
            <p className="font-body text-sm text-[#b3b3b3]">
              Tap to flip and discover partners
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {partnerCategories.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <FlipCard
                  icon={partner.icon}
                  title={partner.title}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cinematic CTA */}
        <CinematicCTA />
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
        <div className="flex min-h-svh flex-col bg-[#0a0a0f]">
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
      <div className="flex min-h-svh flex-col bg-[#0a0a0f]">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <Sponsors />
          <Footer />
        </main>
      </div>
    </>
  );
}