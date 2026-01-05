import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";

import { motion } from "framer-motion";
import { SponsorsHero3D, FlipCard, CinematicCTA } from "@/components/sponsors";

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


export function SponsorsPage() {
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