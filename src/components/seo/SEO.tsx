import type { FC, ReactNode } from 'react';

// Define proper type for JSON-LD structured data
type JsonLdType = {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
} | {
  '@context': string;
  '@graph': Array<Record<string, unknown>>;
};

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  twitterHandle?: string;
  jsonLd?: JsonLdType;
  children?: ReactNode;
}

export const SEO: FC<SEOProps> = ({
  title = "ENTHUSIA 5.0 - Innovation Challenge",
  description = "Join ENTHUSIA 5.0 - an intensive innovation hackathon where creativity meets collaboration. Register your team now!",
  keywords = "ENTHUSIA 5.0, Hackathon, Innovation Challenge, SIT Nagpur, TechFest, Cultural Fest, Student Competition",
  author = "ENTHUSIA 5.0 Team",
  image = "https://sitnovate.vercel.app/og-image.jpg",
  url = "https://sitnovate.vercel.app",
  type = "website",
  twitterHandle,
  jsonLd,
  children
}) => {
  // Construct the full title with branding
  const fullTitle = title === "ENTHUSIA 5.0 - Innovation Challenge" 
    ? title 
    : `${title} - SITNagpur`;

  return (
    <>
      {/* React 19 Native Metadata - These will be hoisted to <head> */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="ENTHUSIA 5.0" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data / JSON-LD */}
      {jsonLd && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      
      {children}
    </>
  );
};
