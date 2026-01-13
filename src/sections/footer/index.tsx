import { ContactForm } from './contact-form';
import { FooterHero } from './footer-hero';
import { FooterBottom } from './footer-bottom';

export function Footer({event_name}: {event_name: string}) {
  return (
    <section 
      id="footer" 
      className="pt-20 pb-8 px-6 md:px-12 lg:px-16"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Hero Content */}
          <FooterHero event_name={event_name}/>

          {/* Right Column - Contact Form */}
          <ContactForm event_name={event_name}/>
        </div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </section>
  );
}
