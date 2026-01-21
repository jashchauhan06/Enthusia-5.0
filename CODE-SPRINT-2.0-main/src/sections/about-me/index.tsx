import { useState, useEffect } from 'react';
import { SimpleTextCard } from './simple-text-card';
import { AchievementCard } from './achievement-card';
import { TrustIndicator } from './trust-indicator';
import { QuoteCard } from './quote-card';
import { ExperienceSection } from './experience-section';
import { TeamSection } from './team-section';
import { FeatureCard } from './feature-card';
import { AvailabilityCard } from './availability-card';

// Import SVG assets
import zapIcon from '../../assets/zapIcon.svg';
import rocketIcon from '../../assets/rocketIcon.svg';

export function AboutMe() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1381);
    };

    // Check initial size
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isLargeScreen) {
    // Original 5x6 bento grid layout for screens >= 1381px
    return (
      <section 
        id="about-me" 
        className="py-20 px-6 md:px-12 lg:px-16"
      >
        <div className="w-full max-w-7xl mx-auto">
          {/* 5x6 Bento Grid */}
          <div className="grid grid-cols-5 gap-4">

            {/* Column 1, Row 1 - Parallel Fest Universe */}
            <SimpleTextCard text="Parallel Fest Universe" />

            {/* Column 2, Rows 1-2 - Enthusia 2025 */}
            <AchievementCard 
              title={<>Enthusia<br />4.0<br />Success</>}
              description="Biggest Fest Yet"
              className="row-span-2"
            />

            {/* Column 3, Rows 1-2 - Three Days */}
            <AchievementCard 
              title={<>Three-Day<br />Techno-Cultural<br />Experience</>}
              description="Innovation + Celebration"
              className="row-span-2"
            />

            {/* Column 4, Rows 1-2 - SIT Nagpur */}
            <AchievementCard 
              title={<>SIT Nagpur<br />Flagship<br />Event</>}
              description="Annual Celebration"
              className="row-span-2"
            />

            {/* Column 5, Rows 1-3 - Mission Statement */}
            <QuoteCard />

            {/* Column 1, Row 2 - Organized by SIT */}
            <TrustIndicator />

            {/* Column 1, Rows 3-6 - Past Events */}
            <ExperienceSection />

            {/* Columns 2-4, Rows 3-5 - Team Members */}
            <TeamSection />

            {/* Column 5, Row 4 - Mentorship */}
            <FeatureCard 
              icon={zapIcon} 
              text={<>Expert<br/>Mentorship</>}
              altText="Expert Mentorship"
              variant="text-left-icon-right"
            />

            {/* Column 5, Row 5 - Networking */}
            <FeatureCard 
              icon={rocketIcon} 
              text={<>Networking<br/>Opportunities</>}
              altText="Networking Opportunities"
              variant="text-right-icon-left"
            />

            {/* Columns 2-4, Row 6 - Registration Open */}
            <AvailabilityCard />

            {/* Column 5, Row 6 - Techno-Cultural Fusion */}
            <SimpleTextCard text="Techno-Cultural Fusion" />
            
          </div>
        </div>
      </section>
    );
  }

  // Compact layout for screens < 1381px
  return (
    <section 
      id="about-me" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          
          {/* Row 1: 3 AchievementCards */}
          <div className="grid grid-cols-3 gap-4">
            <AchievementCard 
              title={<>Enthusia<br />4.0<br />Success</>}
              description="Biggest Fest Yet"
            />
            <AchievementCard 
              title={<>Three-Day<br />Techno-Cultural<br />Experience</>}
              description="Innovation + Celebration"
            />
            <AchievementCard 
              title={<>SIT Nagpur<br />Flagship<br />Event</>}
              description="Annual Celebration"
            />
          </div>

          {/* Row 2: Team Section */}
          <div className="w-full">
            <TeamSection />
          </div>

          {/* Row 3: 2 FeatureCards + 1 SimpleTextCard */}
          <div className="flex flex-col gap-4">
            {/* FeatureCards row */}
            <div className="grid grid-cols-2 [@media(min-width:1175px)]:grid-cols-3 gap-4">
              <FeatureCard 
                icon={rocketIcon} 
                text={<>Networking<br/>Opportunities</>}
                altText="Networking Opportunities"
                variant="text-right-icon-left"
              />
              <FeatureCard 
                icon={zapIcon} 
                text={<>Expert<br/>Mentorship</>}
                altText="Expert Mentorship"
                variant="text-left-icon-right"
              />
              {/* SimpleTextCard only shows in this row on screens >= 1175px */}
              <div className="hidden [@media(min-width:1175px)]:block">
                <SimpleTextCard text="Techno-Cultural Fusion" />
              </div>
            </div>
            
            {/* SimpleTextCard on its own row for screens < 1175px */}
            <div className="[@media(min-width:1175px)]:hidden">
              <SimpleTextCard text="Techno-Cultural Fusion" />
            </div>
          </div>

          {/* Row 4: Complex 2x3 grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {/* Column 1, Row 1 */}
            <div className="col-start-1 row-start-1">
              <SimpleTextCard text="Parallel Fest Universe" />
            </div>
            
            {/* Column 1, Row 2 */}
            <div className="col-start-1 row-start-2">
              <TrustIndicator />
            </div>
            
            {/* Columns 2-3, Rows 1-2 */}
            <div className="col-start-2 col-span-2 row-start-1 row-span-2">
              <QuoteCard />
            </div>
          </div>

          {/* Row 5: ExperienceSection */}
          <div className="w-full">
            <ExperienceSection />
          </div>

        </div>
      </div>
    </section>
  );
}
