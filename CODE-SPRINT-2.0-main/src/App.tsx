import { useState } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SvgFilters } from "@/components/ui/svg-filters";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { GlobalDrawer } from "@/components/drawer/global-drawer";
import { Routes, Route } from "react-router";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LoadingScreen } from "@/components/ui/loading-screen";
import CodeSprintPage from "./pages/CodeSprint";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";

function DesktopApp() {
  return (
    <SmoothScrollProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CodeSprintPage />} />
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
        <Route path="/" element={<CodeSprintPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </>
  );
}

function App() {
  const { isMobile } = useBreakpoint();
  const [showApp, setShowApp] = useState(false);

  const handleLoadingComplete = () => {
    setShowApp(true);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SvgFilters />
      
      {/* Show loading screen initially */}
      {!showApp && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      
      {/* Show app content after loading */}
      {showApp && (
        <>
          {isMobile ? <MobileApp /> : <DesktopApp />}
          <GlobalDrawer />
        </>
      )}
      
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default App;

