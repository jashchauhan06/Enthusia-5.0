import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { Footer } from "@/sections/footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Sidebar } from "@/components/navigation/sidebar/sidebar";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion } from "framer-motion";
import { useState } from "react";

function PhotoCard({ 
  title, 
  category, 
  span = "col-span-1", 
  height = "h-64",
  gradient = "from-blue-500/20 to-purple-500/20",
  index = 0
}: { 
  title: string;
  category: string;
  span?: string;
  height?: string;
  gradient?: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`${span} ${height} group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]`}
    >
      <div className="w-full h-full relative flex flex-col justify-end p-6 bg-black/40 hover:bg-black/20 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="relative z-10">
          <div className="text-xs font-mono text-white/60 mb-2 uppercase tracking-wider">{category}</div>
          <h3 className="font-heading text-lg text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
        </div>
        <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
}

function StatsCard({ number, label, delay = 0 }: { number: string; label: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
      className="text-center group"
    >
      <div className="text-4xl md:text-6xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <div className="text-sm md:text-base font-body text-zinc-400 group-hover:text-white transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  );
}

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'tech', label: 'TechFest' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'celebrity', label: 'Celebrity Night' },
    { id: 'campus', label: 'Campus Life' }
  ];

  const photos = [
    { title: "Opening Ceremony", category: "tech", span: "col-span-2", height: "h-80", gradient: "from-blue-500/30 to-cyan-500/20" },
    { title: "Hackathon Arena", category: "tech", span: "col-span-1", height: "h-64", gradient: "from-green-500/30 to-emerald-500/20" },
    { title: "Coding Marathon", category: "tech", span: "col-span-1", height: "h-64", gradient: "from-purple-500/30 to-pink-500/20" },
    { title: "Dance Competition", category: "cultural", span: "col-span-1", height: "h-72", gradient: "from-pink-500/30 to-rose-500/20" },
    { title: "DJ Night Crowd", category: "celebrity", span: "col-span-2", height: "h-64", gradient: "from-orange-500/30 to-yellow-500/20" },
    { title: "Pitch Presentations", category: "tech", span: "col-span-1", height: "h-56", gradient: "from-indigo-500/30 to-blue-500/20" },
    { title: "Cultural Performances", category: "cultural", span: "col-span-1", height: "h-72", gradient: "from-violet-500/30 to-purple-500/20" },
    { title: "Team Collaborations", category: "tech", span: "col-span-1", height: "h-56", gradient: "from-teal-500/30 to-cyan-500/20" },
    { title: "Award Ceremony", category: "tech", span: "col-span-2", height: "h-64", gradient: "from-amber-500/30 to-orange-500/20" },
    { title: "Campus Moments", category: "campus", span: "col-span-1", height: "h-64", gradient: "from-emerald-500/30 to-green-500/20" },
    { title: "Night Events", category: "celebrity", span: "col-span-1", height: "h-64", gradient: "from-purple-500/30 to-indigo-500/20" },
    { title: "Innovation Showcase", category: "tech", span: "col-span-1", height: "h-72", gradient: "from-blue-500/30 to-purple-500/20" }
  ];

  const filteredPhotos = activeFilter === 'all' ? photos : photos.filter(photo => photo.category === activeFilter);

  return (
    <section className="relative w-full py-24 px-4 md:px-8 lg:px-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-tight tracking-tight">
            GALLERY
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-8" />
          <p className="font-body text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-4xl mx-auto">
            Moments that define innovation. Memories that inspire greatness.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {filteredPhotos.map((photo, index) => (
            <PhotoCard
              key={`${photo.title}-${activeFilter}`}
              title={photo.title}
              category={photo.category.toUpperCase()}
              span={photo.span}
              height={photo.height}
              gradient={photo.gradient}
              index={index}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-r from-zinc-900/50 to-black/50 border border-white/10 rounded-3xl p-12 mb-20"
        >
          <h3 className="font-heading text-3xl md:text-4xl text-center text-white mb-12">
            SITNovate 2025 Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCard number="49" label="Teams Competed" delay={0.1} />
            <StatsCard number="24" label="Hours Non-Stop" delay={0.2} />
            <StatsCard number="500+" label="Participants" delay={0.3} />
            <StatsCard number="7" label="Industry Experts" delay={0.4} />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 rounded-3xl p-12">
            <h3 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
              Join SITNovate 2026 and be part of the next chapter in innovation history.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/techfest"
                className="bg-primary text-black font-heading text-lg px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                Register for SITNovate 2026
              </a>
              <a 
                href="/contact"
                className="border-2 border-primary text-primary font-heading text-lg px-8 py-4 rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryMobile() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'tech', label: 'Tech' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'celebrity', label: 'Celebrity' }
  ];

  const photos = [
    { title: "Opening Ceremony", category: "tech", gradient: "from-blue-500/30 to-cyan-500/20" },
    { title: "Hackathon Arena", category: "tech", gradient: "from-green-500/30 to-emerald-500/20" },
    { title: "Dance Competition", category: "cultural", gradient: "from-pink-500/30 to-rose-500/20" },
    { title: "DJ Night Crowd", category: "celebrity", gradient: "from-orange-500/30 to-yellow-500/20" },
    { title: "Pitch Presentations", category: "tech", gradient: "from-indigo-500/30 to-blue-500/20" },
    { title: "Cultural Shows", category: "cultural", gradient: "from-violet-500/30 to-purple-500/20" },
    { title: "Team Work", category: "tech", gradient: "from-teal-500/30 to-cyan-500/20" },
    { title: "Award Ceremony", category: "tech", gradient: "from-amber-500/30 to-orange-500/20" }
  ];

  const filteredPhotos = activeFilter === 'all' ? photos : photos.filter(photo => photo.category === activeFilter);

  return (
    <section className="relative w-full py-16 px-4 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl text-white mb-4 tracking-tight">
            GALLERY
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-6" />
          <p className="font-body text-base text-zinc-400 leading-relaxed">
            Moments that define innovation. Memories that inspire greatness.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-black'
                  : 'bg-white/10 text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={`${photo.title}-${activeFilter}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`${index % 3 === 0 ? 'h-48' : index % 3 === 1 ? 'h-40' : 'h-44'} group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br ${photo.gradient} border border-white/10 hover:border-white/20 transition-all duration-300`}
            >
              <div className="w-full h-full relative flex flex-col justify-end p-4 bg-black/40 hover:bg-black/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="relative z-10">
                  <div className="text-xs font-mono text-white/60 mb-1 uppercase">{photo.category}</div>
                  <h3 className="font-heading text-sm text-white group-hover:text-primary transition-colors">{photo.title}</h3>
                </div>
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-zinc-900/50 to-black/50 border border-white/10 rounded-2xl p-6 mb-12"
        >
          <h3 className="font-heading text-xl text-center text-white mb-6">
            SITNovate 2025 Impact
          </h3>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-2xl font-heading text-primary mb-1">49</div>
              <div className="text-xs font-body text-zinc-400">Teams</div>
            </div>
            <div>
              <div className="text-2xl font-heading text-primary mb-1">24</div>
              <div className="text-xs font-body text-zinc-400">Hours</div>
            </div>
            <div>
              <div className="text-2xl font-heading text-primary mb-1">500+</div>
              <div className="text-xs font-body text-zinc-400">Participants</div>
            </div>
            <div>
              <div className="text-2xl font-heading text-primary mb-1">7</div>
              <div className="text-xs font-body text-zinc-400">Experts</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 rounded-2xl p-6">
            <h3 className="font-heading text-lg text-white mb-4">
              Ready to Create Your Story?
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Join SITNovate 2026 and be part of the next chapter.
            </p>
            <div className="space-y-3">
              <a 
                href="/techfest"
                className="block bg-primary text-black font-heading text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                Register for SITNovate 2026
              </a>
              <a 
                href="/contact"
                className="block border border-primary text-primary font-heading text-sm px-6 py-3 rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
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
          description="Explore the Gallery of SITNovate. Relive the moments from hackathons, coding battles, and innovation showcases."
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
        description="Explore the Gallery of SITNovate. Relive the moments from hackathons, coding battles, and innovation showcases."
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