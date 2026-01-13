import { ContactMethods } from '../contact-methods';

export function FooterHero({event_name} : {event_name: string}) {
  return (
    <div className="flex flex-col">
      <h2 className="font-heading text-4xl [@media(min-width:1055px)]:text-5xl [@media(min-width:1275px)]:text-6xl text-foreground mb-4 text-center [@media(min-width:1024px)]:text-left">
        Get In Touch
      </h2>
      <p className="font-body text-lg [@media(min-width:1045px)]:text-xl [@media(min-width:1275px)]:text-2xl font-light text-muted-foreground leading-relaxed text-center [@media(min-width:1024px)]:text-left">
        Have questions about {`${event_name? event_name : "ENTHUSIA 5.0"}`}?<br className="hidden [@media(min-width:1024px)]:inline" />
        {' '}Reach out to us for more information.
      </p>
      <div className="hidden [@media(min-width:1024px)]:block">
        <ContactMethods />
      </div>
    </div>
  );
}
