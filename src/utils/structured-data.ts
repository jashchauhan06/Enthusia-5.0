export const getPersonStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SITNovate",
    "url": "https://sitnovate.vercel.app",
    "logo": "https://sitnovate.vercel.app/dev-logo.svg",
    "description": "SITNovate 24-Hour Hackathon - An intensive innovation challenge where creativity meets collaboration"
  });
  
  export const getWebSiteStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SITNovate 24-Hour Hackathon",
    "url": "https://sitnovate.vercel.app",
    "description": "Join the SITNovate 24-Hour Hackathon - an intensive innovation hackathon where creativity meets collaboration",
    "publisher": {
      "@type": "Organization",
      "name": "SITNovate"
    }
  });
  
  export const getEventStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "SITNovate 24-Hour Hackathon",
    "description": "An intensive 24-hour innovation hackathon where creativity meets collaboration",
    "url": "https://sitnovate.vercel.app",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "organizer": {
      "@type": "Organization",
      "name": "SITNovate"
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
      "name": "SITNovate"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SITNovate"
    }
  });
