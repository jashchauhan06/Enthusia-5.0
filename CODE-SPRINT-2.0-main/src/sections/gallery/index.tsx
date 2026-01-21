import { useState } from 'react';

const galleryCategories = [
  { id: 'all', name: 'All', count: 48 },
  { id: 'techfest', name: 'TechFest', count: 18 },
  { id: 'cultural', name: 'Cultural Fest', count: 15 },
  { id: 'celebrity', name: 'Celebrity Nights', count: 8 },
  { id: 'workshops', name: 'Workshops', count: 7 }
];

const galleryImages = [
  { id: 1, category: 'techfest', title: 'SITNovate 2.0 Finals', description: 'Innovation showcase' },
  { id: 2, category: 'cultural', title: 'Dance Performance', description: 'Cultural night highlights' },
  { id: 3, category: 'celebrity', title: 'Celebrity Guest', description: 'Special performance' },
  { id: 4, category: 'techfest', title: 'CodeSprint Competition', description: 'Programming marathon' },
  { id: 5, category: 'cultural', title: 'Music Concert', description: 'Live performances' },
  { id: 6, category: 'workshops', title: 'Tech Workshop', description: 'Learning sessions' },
  { id: 7, category: 'techfest', title: 'Robotics Demo', description: 'Innovation display' },
  { id: 8, category: 'celebrity', title: 'DJ Night', description: 'Party atmosphere' },
  { id: 9, category: 'cultural', title: 'Drama Performance', description: 'Theatrical excellence' }
];

const stats = [
  { label: 'Total Photos', value: '500+', icon: '📸' },
  { label: 'Video Highlights', value: '25+', icon: '🎥' },
  { label: 'Live Streams', value: '15+', icon: '📺' },
  { label: 'Social Reach', value: '1M+', icon: '📱' }
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section 
      id="gallery" 
      className="py-20 px-6 md:px-12 lg:px-16 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            MEMORIES & MOMENTS
          </h2>
          <p className="font-heading text-4xl md:text-5xl text-foreground mb-6">
            Gallery
          </p>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Relive the excitement, energy, and unforgettable moments from previous 
            editions of Enthusia through our curated photo and video gallery.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-foreground/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border text-foreground hover:bg-primary/10'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl opacity-50">📷</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {image.title}
                </h3>
                <p className="text-foreground/70 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Highlights Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Video Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <div className="text-foreground font-semibold">Enthusia 4.0 Highlights</div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Official Aftermovie</h4>
                <p className="text-foreground/70 text-sm">Complete highlights from last year's festival</p>
              </div>
            </div>
            <div className="bg-card border rounded-xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <div className="text-foreground font-semibold">Behind the Scenes</div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-foreground mb-2">Making of Enthusia</h4>
                <p className="text-foreground/70 text-sm">Exclusive behind-the-scenes footage</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Want to See More?
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Follow us on social media for live updates, behind-the-scenes content, 
            and exclusive photos from Enthusia 5.0.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              View Full Gallery
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Follow on Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}