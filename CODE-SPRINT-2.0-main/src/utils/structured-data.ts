export const getPersonStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CODE SPRINT 2.0",
  "url": "https://sitnovate.vercel.app",
  "logo": "https://sitnovate.vercel.app/dev-logo.svg",
  "description": "CODE SPRINT 2.0 - An intensive innovation challenge where creativity meets collaboration"
});

export const getWebSiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CODE SPRINT 2.0",
  "url": "https://sitnovate.vercel.app",
  "description": "Join CODE SPRINT 2.0 - an intensive innovation hackathon where creativity meets collaboration",
  "publisher": {
    "@type": "Organization",
    "name": "CODE SPRINT 2.0"
  }
});

export const getEventStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "CODE SPRINT 2.0",
  "description": "An intensive innovation hackathon where creativity meets collaboration",
  "url": "https://sitnovate.vercel.app",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "organizer": {
    "@type": "Organization",
    "name": "CODE SPRINT 2.0"
  }
});

export const getCaseStudyStructuredData = (caseStudy: {
  title: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": caseStudy.title,
  "description": caseStudy.description,
  "image": caseStudy.image,
  "url": caseStudy.url,
  "datePublished": caseStudy.datePublished,
  "author": {
    "@type": "Organization",
    "name": "CODE SPRINT 2.0"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODE SPRINT 2.0"
  }
});
