import { useState } from 'react';

const galleryCategories = [
  { id: 'all', name: 'All', count: 48 },
  { id: 'techfest', name: 'Tech', count: 18 },
  { id: 'cultural', name: 'Cultural', count: 15 },
  { id: 'celebrity', name: 'Celebrity', count: 8 }
];

const galleryImages = [
  { id: 1, category: 'techfest', title: 'SITNovate Finals', description: 'Innovation showcase' },
  { id: 2, category: 'cultural', title: 'Dance Performance', description: 'Cultural highlights' },
  { id: 3, category: 'celebrity', title: 'Celebrity Guest', description: 'Special performance' },
  { id: 4, category: 'techfest', title: 'CodeSprint', description: 'Programming marathon' },
  { id: 5, category: 'cultural', title: 'Music Concert', description: 'Live performances' },
  { id: 6, category: 'celebrity', title: 'DJ Night', description: 'Party atmosphere' }
];

const stats = [
  { label: 'Photos', value: '500+', icon: '📸' },
  { label: 'Videos', value: '25+', icon: '🎥' },
  { label: 'Streams', value: '15+', icon: '📺' },
  { label: 'Reach', value: '1M+', icon: '📱' }
];

export function GalleryMobile() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section 
      id="gallery-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="max-w-sm mx-auto">
        <div className="mb-8 text-center">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            MEMORIES & MOMENTS
          </h2>
          <p className="font-heading text-2xl text-foreground mb-4">
            Gallery
          </p>
          <p className="text-foreground/80 text-center">
            Relive the excitement and unforgettable moments from previous Enthusia editions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card p-3 rounded-lg border text-center">
              <div className="text-xl mb-1">{stat.icon}</div>
              <div className="text-lg font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-foreground/70 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border text-foreground'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="bg-card border rounded-lg overflow-hidden"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-3xl opacity-50">📷</div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-foreground mb-1 text-sm">
                  {image.title}
                </h3>
                <p className="text-foreground/70 text-xs">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Highlights Section */}
        <div className="mb-8">
          <h3 className="font-semibold text-foreground mb-4 text-center">
            Video Highlights
          </h3>
          <div className="space-y-4">
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎥</div>
                  <div className="text-foreground font-medium text-sm">Enthusia 4.0</div>
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-medium text-foreground mb-1 text-sm">Official Aftermovie</h4>
                <p className="text-foreground/70 text-xs">Complete highlights from last year</p>
              </div>
            </div>
            <div className="bg-card border rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🎬</div>
                  <div className="text-foreground font-medium text-sm">Behind Scenes</div>
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-medium text-foreground mb-1 text-sm">Making of Enthusia</h4>
                <p className="text-foreground/70 text-xs">Exclusive behind-the-scenes</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl">
          <h3 className="font-semibold text-foreground mb-3">
            Want to See More?
          </h3>
          <p className="text-sm text-foreground/80 mb-4">
            Follow us for live updates and exclusive content from Enthusia 5.0.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold">
              View Full Gallery
            </button>
            <button className="w-full border border-primary text-primary py-3 rounded-lg font-semibold">
              Follow on Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}