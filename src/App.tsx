import { ThemeProvider } from "@/components/providers/theme-provider";
import { SvgFilters } from "@/components/ui/svg-filters";
import { GlobalDrawer } from "@/components/drawer/global-drawer";
import { Routes, Route } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { MobileHomePage } from "@/pages/MobileHomePage";
import { CaseStudyDetailPage } from "@/pages/CaseStudyDetailPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import { SchedulePage } from "@/pages/SchedulePage";
import { SignInPage } from "@/pages/SignInPage";
import { DashboardPage } from "@/pages/DashboardPage";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { TeamsPage } from "@/pages/dashboard/TeamsPage";
import { AnnouncementsPage } from "@/pages/dashboard/AnnouncementsPage";
import { SubmissionPage } from "@/pages/dashboard/SubmissionPage";
import { ContactPage } from "@/pages/dashboard/ContactPage";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminTeamsPage } from "@/pages/admin/AdminTeamsPage";
import { AdminTeamDetailPage } from "@/pages/admin/AdminTeamDetailPage";
import { AdminAnnouncementsPage } from "@/pages/admin/AdminAnnouncementsPage";
import { AdminSubmissionsPage } from "@/pages/admin/AdminSubmissionsPage";
import { AdminMessagesPage } from "@/pages/admin/AdminMessagesPage";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { SpeedInsights } from '@vercel/speed-insights/react';

function DesktopApp() {
  return (
    <SmoothScrollProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="teams" element={<TeamsPage />} />
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="submission" element={<SubmissionPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="teams" element={<AdminTeamsPage />} />
          <Route path="teams/:teamCode" element={<AdminTeamDetailPage />} />
          <Route path="announcements" element={<AdminAnnouncementsPage />} />
          <Route path="submissions" element={<AdminSubmissionsPage />} />
          <Route path="messages" element={<AdminMessagesPage />} />
        </Route>
      </Routes>
    </SmoothScrollProvider>
  );
}

function MobileApp() {
  return (
    <Routes>
      <Route path="/" element={<MobileHomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="teams" element={<TeamsPage />} />
        <Route path="announcements" element={<AnnouncementsPage />} />
        <Route path="submission" element={<SubmissionPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
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
