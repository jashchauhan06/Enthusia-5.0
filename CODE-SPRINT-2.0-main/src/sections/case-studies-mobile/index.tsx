import { useState, useEffect } from 'react';

export function CaseStudiesMobile() {
  const [currentVersion, setCurrentVersion] = useState<'4.0' | '5.0'>('4.0');

  // Scroll listener to change version
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Change to 5.0 after scrolling past 50% of viewport height
      if (scrollY > windowHeight * 0.5) {
        setCurrentVersion('5.0');
      } else {
        setCurrentVersion('4.0');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic content based on version
  const versionContent = {
    '4.0': {
      sectionTitle: 'ABOUT ENTHUSIA',
      sectionSubtitle: 'Three-day Techno-Cultural Fest',
      upcomingTitle: 'ENTHUSIA 4.0',
      upcomingYear: '2025',
      upcomingStatus: 'COMPLETED',
      upcomingDescription: 'A three-day techno-cultural experience where innovation, creativity, competition, and celebration collided.',
      upcomingDate: '19-21 February 2025',
      upcomingParticipants: '800+ participants',
      pastTitle: 'ENTHUSIA 3.0',
      pastYear: '2024', 
      pastStatus: 'COMPLETED',
      pastDescription: 'A successful three-day fest where 600+ participants experienced the perfect blend of technology and culture.',
      pastDate: '19 Feb 2024 to 21 Feb 2024'
    },
    '5.0': {
      sectionTitle: 'ABOUT ENTHUSIA',
      sectionSubtitle: 'Three-day Techno-Cultural Fest',
      upcomingTitle: 'ENTHUSIA 5.0',
      upcomingYear: '2026',
      upcomingStatus: 'UPCOMING',
      upcomingDescription: 'A three-day techno-cultural experience where innovation, creativity, competition, and celebration will collide.',
      upcomingDate: '12-14 February 2026',
      upcomingParticipants: '1000+ expected participants',
      pastTitle: 'ENTHUSIA 4.0',
      pastYear: '2025',
      pastStatus: 'COMPLETED', 
      pastDescription: 'A three-day fest where 800+ participants experienced the perfect blend of technology and culture.',
      pastDate: '19 Feb 2025 to 21 Feb 2025'
    }
  };

  const content = versionContent[currentVersion];
  return (
    <section 
      id="case-studies-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            {content.sectionTitle}
          </h2>
          <p className="font-heading text-3xl text-foreground">
            {content.sectionSubtitle}
          </p>
        </div>
        
        {/* Event Description */}
        <div className="space-y-6">
          {/* Upcoming Event */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading text-xl text-primary">{content.upcomingTitle}</span>
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-heading rounded-full">{content.upcomingStatus}</span>
            </div>
            <p className="font-body text-base text-foreground leading-relaxed mb-4">
              {content.upcomingDescription}
            </p>
            <div className="space-y-2">
              <p className="font-body text-sm text-[#b3b3b3]">
                <span className="text-foreground font-medium">Date:</span> {content.upcomingDate}
              </p>
              <p className="font-body text-sm text-[#b3b3b3]">
                <span className="text-foreground font-medium">Venue:</span> Symbiosis Institute of Technology, Nagpur
              </p>
              <p className="font-body text-sm text-[#b3b3b3]">
                <span className="text-foreground font-medium">Participants:</span> {content.upcomingParticipants}
              </p>
            </div>
          </div>

          {/* Past Event */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading text-xl text-foreground">{content.pastTitle}</span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-heading rounded-full">{content.pastStatus}</span>
            </div>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed mb-4">
              {content.pastDescription}
            </p>
            <p className="font-body text-base text-[#b3b3b3] leading-relaxed">
              Held from <span className="text-foreground font-medium">{content.pastDate}</span> at Symbiosis Institute of Technology (SIT), Nagpur.
            </p>
          </div>

          {/* Jury Members */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-heading text-xl text-foreground mb-4">
              Honorable Jury Members
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-primary text-lg mt-1">•</span>
                <p className="font-body text-sm text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Mr. Tufan Kilicaslan</span><br />
                  Founder, Coding Event Software Solutions, Türkiye
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-lg mt-1">•</span>
                <p className="font-body text-sm text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Mr. Dhiraj Motghare</span><br />
                  Director of Engineering – GlobalLogic
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-lg mt-1">•</span>
                <p className="font-body text-sm text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Mr. Mohit Vyas</span><br />
                  Software Engineer, Accenture, India
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-lg mt-1">•</span>
                <p className="font-body text-sm text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Ms. Nilima Rao</span><br />
                  Persistent, India
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary text-lg mt-1">•</span>
                <p className="font-body text-sm text-[#b3b3b3]">
                  <span className="text-foreground font-medium">Ms. Nidhi Shingade</span><br />
                  Technical Consultant, Perficient Inc
                </p>
              </div>
            </div>
          </div>

          {/* Event Gallery */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-heading text-xl text-foreground mb-4">
              Event Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/enthusia/1.png"
                alt="SITNovate 2025 Event Photo 1"
                className="w-full h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/enthusia/2.png"
                alt="SITNovate 2025 Event Photo 2"
                className="w-full h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/enthusia/3.png"
                alt="SITNovate 2025 Event Photo 3"
                className="w-full h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/enthusia/4.png"
                alt="SITNovate 2025 Event Photo 4"
                className="w-full h-20 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
