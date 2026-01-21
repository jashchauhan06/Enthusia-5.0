import { navigationItems } from "@/constants/index";
import { useNavigate } from "react-router";
import { useNavigationStore, type MobileSectionId } from "@/stores/navigationStore";
import { useDrawerStore } from "@/stores/drawerStore";
import RainbowButton from '@/components/magicui/rainbow-button';

interface MobileNavProps {
  onNavigationClick: () => void; // Callback to close sidebar
}

// Mapping from mobile href to section IDs
const MOBILE_HREF_TO_SECTION_MAP: Record<string, MobileSectionId> = {
  '#home': 'home',
  '#about': 'about',
  '#blueprint': 'blueprint',
  '#evidence': 'evidence',
  '#team': 'team',
};

export function MobileNav({ onNavigationClick }: MobileNavProps) {
  const navigate = useNavigate();
  const { setIsNavigating, setActiveSection } = useNavigationStore();
  const { open: openDrawer } = useDrawerStore();

  const handleNavClick = (item: typeof navigationItems[0]) => {
    // Handle Contact button specifically
    if (item.name === "Contact Us") {
      openDrawer();
      onNavigationClick(); // Close sidebar
      return;
    }
    
    // Handle page routes (non-anchor links)
    const mobileHref = item.mobileLink;
    if (!mobileHref.startsWith('#')) {
      navigate(mobileHref);
      onNavigationClick(); // Close sidebar
      return;
    }
    
    // Handle section navigation for anchor links using mobile links
    if (mobileHref.startsWith('#')) {
      const targetId = mobileHref.substring(1); // Remove the #
      const targetElement = document.getElementById(targetId);
      const targetSectionId = MOBILE_HREF_TO_SECTION_MAP[mobileHref];
      
      if (targetElement && targetSectionId) {
        // Start navigation state (pauses section tracking)
        setIsNavigating(true);
        
        // Immediately set the target section for better UX
        setActiveSection(targetSectionId);
        
        // Start smooth scroll
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // End navigation state after scroll completes
        setTimeout(() => {
          setIsNavigating(false);
        }, 1000); // 1 second should be enough for smooth scroll
        
        // Close sidebar after navigation
        onNavigationClick();
      }
    }
  };

  return (
    <nav className="flex flex-col gap-2 flex-1 p-4">
      {navigationItems.map((item) => {
        // Special handling for Contact item
        if (item.name === "Contact Us") {
          return (
            <RainbowButton
              key={item.name}
              onClick={() => handleNavClick(item)}
              size="lg"
              className="w-full font-heading pt-0.5 text-md mt-4"
              variant="outline"
            >
              {item.name}
            </RainbowButton>
          );
        }

        // Regular navigation items
        return (
          <button
            key={item.name}
            onClick={() => handleNavClick(item)}
            className="flex items-center gap-3 py-3 text-xl font-heading text-foreground rounded-lg transition-all hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none border-b rounded-s-none rounded-e-none text-left cursor-pointer"
          >
            <span>{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
}
