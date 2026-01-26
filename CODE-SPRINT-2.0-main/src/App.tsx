import { ThemeProvider } from "@/components/providers/theme-provider";
import { SvgFilters } from "@/components/ui/svg-filters";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { GlobalDrawer } from "@/components/drawer/global-drawer";
import { Routes, Route } from "react-router";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { useBreakpoint } from "@/hooks/useBreakpoint";
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

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SvgFilters />
      
      {/* Show app content directly */}
      <>
        {isMobile ? <MobileApp /> : <DesktopApp />}
        <GlobalDrawer />
      </>
    </ThemeProvider>
  );
}

export default App;

