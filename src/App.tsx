import { ThemeProvider } from "@/components/providers/theme-provider";
import { SvgFilters } from "@/components/ui/svg-filters";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { GlobalDrawer } from "@/components/drawer/global-drawer";
import { Routes, Route } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { MobileHomePage } from "@/pages/MobileHomePage";
import AboutSITNagpurPage from "@/pages/AboutSITNagpurPage";
import { AboutEnthusiaPage } from "@/pages/AboutEnthusiaPage";
import { TechFestPage } from "@/pages/TechFestPage";
import { CulturalFestPage } from "@/pages/CulturalFestPage";
import { SITNovatePage } from "@/pages/SITNovatePage";
import { SponsorsPage } from "@/pages/SponsorsPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { ContactPage } from "@/pages/ContactPage";
import { CaseStudyDetailPage } from "@/pages/CaseStudyDetailPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import { SchedulePage } from "@/pages/SchedulePage";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { SpeedInsights } from '@vercel/speed-insights/react';

function DesktopApp() {
  return (
    <SmoothScrollProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-sit-nagpur" element={<AboutSITNagpurPage />} />
        <Route path="/about-enthusia" element={<AboutEnthusiaPage />} />
        <Route path="/techfest" element={<TechFestPage />} />
        <Route path="/sitnovate" element={<SITNovatePage />} />
        <Route path="/cultural-fest" element={<CulturalFestPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </SmoothScrollProvider>
  );
}

function MobileApp() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MobileHomePage />} />
        <Route path="/about-sit-nagpur" element={<AboutSITNagpurPage />} />
        <Route path="/about-enthusia" element={<AboutEnthusiaPage />} />
        <Route path="/techfest" element={<TechFestPage />} />
        <Route path="/sitnovate" element={<SITNovatePage />} />
        <Route path="/cultural-fest" element={<CulturalFestPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </>
  );
}

function App() {
  const { isMobile } = useBreakpoint();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SvgFilters />
      {isMobile ? <MobileApp /> : <DesktopApp />}
      <GlobalDrawer />
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default App;
