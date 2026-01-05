import { TransitionLayout } from './transition-layout';

export function CaseStudies() {
  return (
    <section 
      id="case-studies" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            🌌 WHAT IS ENTHUSIA?
          </h2>
          <p className="font-heading text-5xl text-foreground mb-6">
            The Annual Flagship Fest
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-lg text-[#b3b3b3] leading-relaxed mb-6">
              Enthusia 5.0 is the annual flagship techno-cultural fest of SIT Nagpur. 
              Inspired by fictional universes and game-like challenges, Enthusia transforms 
              the campus into a parallel world of ideas, energy, and expression.
            </p>
            <p className="font-body text-lg text-[#b3b3b3] leading-relaxed">
              From 24-hour hackathons and pitch battles to jamming nights and celebrity performances — 
              Enthusia is not just an event, it's an experience.
            </p>
          </div>
        </div>
        <TransitionLayout />
      </div>
    </section>
  );
}
