import { NavBar } from "@/components/navigation/nav-bar";
import { SEO } from "@/components/seo/SEO";
import { getPersonStructuredData, getWebSiteStructuredData } from "@/utils/structured-data";
import { Home } from "@/sections/home";
import { HowIWork } from "@/sections/how-i-work";
import { CaseStudies } from "@/sections/case-studies";
import { Countdown } from "@/sections/countdown";
import { AboutMe } from "@/sections/about-me";
import { Footer } from "@/sections/footer";
import { useSectionTracker } from "@/hooks/useSectionTracker";

export function HomePage() {
  useSectionTracker();

  // Combine structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getPersonStructuredData(),
      getWebSiteStructuredData()
    ]
  };

  return (
    <>
      <SEO 
        title="ENTHUSIA 5.0 - Enter the Parallel Fest Universe"
        description="Join ENTHUSIA 5.0 - A three-day techno-cultural experience at SIT Nagpur. 12-14 February 2026. Where innovation, creativity, competition, and celebration collide."
        url="https://sitnovate.vercel.app"
        jsonLd={structuredData}
      />
      <div className="flex min-h-svh flex-col">
        <NavBar />
        <main className="w-full max-w-[1550px] mx-auto">
          <Home />
          <HowIWork />
          <CaseStudies />
          <Countdown />
          <AboutMe />
          <Footer />
        </main>
      </div>
    </>
  );
}
