import { create } from 'zustand';

// Desktop Section IDs
type DesktopSectionId = 'home' | 'about' | 'blueprint' | 'evidence' | 'team';

// Mobile Section IDs  
type MobileSectionId = 'home' | 'about' | 'blueprint' | 'evidence' | 'team';

// Combined Section IDs
type SectionId = DesktopSectionId | MobileSectionId;

// Navigation item names from the constants
type NavigationItem = "Home" | "About" | "Blueprint" | "Evidence" | "Team";

// Mapping from desktop section IDs to navigation item names
const DESKTOP_SECTION_TO_NAV_MAP: Record<DesktopSectionId, NavigationItem> = {
  'home': "Home",
  'about': "About",
  'blueprint': "Blueprint",
  'evidence': "Evidence",
  'team': "Team",
};

// Mapping from mobile section IDs to navigation item names
const MOBILE_SECTION_TO_NAV_MAP: Record<MobileSectionId, NavigationItem> = {
  'home': "Home",
  'about': "About",
  'blueprint': "Blueprint",
  'evidence': "Evidence",
  'team': "Team",
};


// Helper function to detect if we're on mobile
const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

interface NavigationState {
  activeSection: SectionId | null;
  isNavigating: boolean;
  setActiveSection: (sectionId: SectionId | null) => void;
  setIsNavigating: (navigating: boolean) => void;
  getActiveNavigationItem: () => NavigationItem | null;
}

export const useNavigationStore = create<NavigationState>((set, get) => ({
  activeSection: null,
  isNavigating: false,

  setActiveSection: (sectionId: SectionId | null) => {
    set({ activeSection: sectionId });
  },

  setIsNavigating: (navigating: boolean) => {

    set({ isNavigating: navigating });
  },

  getActiveNavigationItem: () => {
    const { activeSection } = get();
    if (!activeSection) return null;

    // Check if it's a mobile section
    if (activeSection.includes('-mobile')) {
      return MOBILE_SECTION_TO_NAV_MAP[activeSection as MobileSectionId] || null;
    }

    // Otherwise it's a desktop section
    return DESKTOP_SECTION_TO_NAV_MAP[activeSection as DesktopSectionId] || null;
  },
}));

// Export mappings and helper functions for use in other components
export {
  DESKTOP_SECTION_TO_NAV_MAP,
  MOBILE_SECTION_TO_NAV_MAP,
  isMobile
};
export type { SectionId, NavigationItem, DesktopSectionId, MobileSectionId };
