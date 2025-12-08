import { TransitionLayout } from './transition-layout';

export function CaseStudies() {
  return (
    <section 
      id="case-studies" 
      className="py-20 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title - Now gets pinned with the rest */}
        <div className="text-center mb-16">
          <h2 className="font-body text-lg font-light text-foreground mb-4">
            ABOUT SITNOVATE
          </h2>
          <p className="font-heading text-5xl text-foreground">
            24-Hour Innovation Hackathon
          </p>
        </div>
        <TransitionLayout />
      </div>
    </section>
  );
}
