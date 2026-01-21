import { useState, useEffect } from 'react';
import { AchievementCard } from '../about-me/achievement-card';
import { FeatureCard } from '../about-me/feature-card';
import { SimpleTextCard } from '../about-me/simple-text-card';
import { TrustIndicator } from '../about-me/trust-indicator';
import { QuoteCard } from '../about-me/quote-card';
import { TeamSection } from '../about-me/team-section';

// Import SVG assets
import zapIcon from '../../assets/zapIcon.svg';
import rocketIcon from '../../assets/rocketIcon.svg';
import { ExperienceMobile } from './experience-mobile';

export function AboutMeMobile() {
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
      eventTitle: <>ENTHUSIA<br />4.0<br />Success</>,
      participants: "800+ Participants",
      experts: "12+ Events",
      hackathonTitle: <>24-Hour Hackathon</>,
      hackathonDesc: "Innovation & Competition"
    },
    '5.0': {
      eventTitle: <>ENTHUSIA<br />5.0<br />Upcoming</>,
      participants: "1000+ Expected",
      experts: "15+ Events", 
      hackathonTitle: <>3-Day TechnoCultural Fest</>,
      hackathonDesc: "Innovation & Celebration"
    }
  };

  const content = versionContent[currentVersion];
  return (
    <section 
      id="about-me-mobile" 
      className="w-full px-2.5 mt-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Top row: 3 achievement cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <AchievementCard 
            title={content.eventTitle}
            description={content.participants}
          />
          <AchievementCard 
            title={<>Total<br />Events<br />Lineup</>}
            description={content.experts}
          />
        </div>

        {/* Bottom row: 1 achievement card */}
        <div className="grid grid-cols-1 mb-4">
          <AchievementCard 
            title={content.hackathonTitle}
            description={content.hackathonDesc}
          />
        </div>

        {/* Team Section */}
        <div className="w-full mb-4">
          <TeamSection />
        </div>

        {/* Feature Cards - stacked on small screens, side by side on 663px+ */}
        <div className="grid grid-cols-1 [@media(min-width:663px)]:grid-cols-2 gap-4 mb-4">
          <FeatureCard 
            icon={rocketIcon} 
            text={<>Networking <br className="[@media(min-width:477px)]:hidden" />Opportunities</>}
            altText="Networking Opportunities"
            variant="text-right-icon-left"
          />
          <FeatureCard 
            icon={zapIcon} 
            text={<>Expert <br className="[@media(min-width:477px)]:hidden" />Mentorship</>}
            altText="Expert Mentorship"
            variant="text-left-icon-right"
          />
        </div>

        {/* Simple Text Card */}
        <div className="w-full mb-4">
          <SimpleTextCard text="Student-Focused Event" />
        </div>

        {/* First row: SimpleTextCard and TrustIndicator */}
        <div className="grid grid-cols-1 [@media(min-width:510px)]:grid-cols-2 gap-4 mb-4">
          <TrustIndicator />
          <SimpleTextCard text="Innovation Driven" />
        </div>

        {/* Mission Statement */}
        <div className="w-full mb-4">
          <QuoteCard />
        </div>

        {/* Experience/Skills Section */}
        <div className="bento-square w-full">
          <ExperienceMobile />
        </div>
      </div>
    </section>
  );
}
