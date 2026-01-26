import { useState } from "react";
import { useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
import {
  MorphingPopover,
  MorphingPopoverContent,
  MorphingPopoverTrigger,
} from "@/components/ui/morphing-popover";
import { navigationItems } from "@/constants/index";
import { useNavigationStore, type MobileSectionId } from "@/stores/navigationStore";
import { useDrawerStore } from "@/stores/drawerStore";
import RainbowButton from '@/components/magicui/rainbow-button';
import DevLogo from "@/assets/dev-logo.svg";

// Mapping from mobile href to section IDs
const MOBILE_HREF_TO_SECTION_MAP: Record<string, MobileSectionId> = {
  '#home': 'home',
  '#about': 'about',
  '#blueprint': 'blueprint',
  '#evidence': 'evidence',
  '#team': 'team',
};

// ============================================================================
// MOBILE NAV COMPONENT
// ============================================================================
interface MobileNavProps {
  onNavigationClick: () => void;
}

function MobileNav({ onNavigationClick }: MobileNavProps) {
  const navigate = useNavigate();
  const { setIsNavigating, setActiveSection } = useNavigationStore();
  const { open: openDrawer } = useDrawerStore();

  const handleNavClick = (item: typeof navigationItems[0]) => {
    if (item.name === "Contact Us") {
      openDrawer();
      onNavigationClick();
      return;
    }
    
    const mobileHref = item.mobileLink;
    if (!mobileHref.startsWith('#')) {
      navigate(mobileHref);
      onNavigationClick();
      return;
    }
    
    if (mobileHref.startsWith('#')) {
      const targetId = mobileHref.substring(1);
      const targetElement = document.getElementById(targetId);
      const targetSectionId = MOBILE_HREF_TO_SECTION_MAP[mobileHref];
      
      if (targetElement && targetSectionId) {
        setIsNavigating(true);
        setActiveSection(targetSectionId);
        
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        setTimeout(() => {
          setIsNavigating(false);
        }, 1000);
        
        onNavigationClick();
      }
    }
  };

  return (
    <nav className="flex flex-col gap-2 flex-1 p-4">
      {navigationItems.map((item) => {
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

// ============================================================================
// SIDEBAR COMPONENT (EXPORTED)
// ============================================================================
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Logo - Left side */}
      <div className="fixed top-7 left-6 z-50 md:hidden">
        <img 
          src={DevLogo} 
          alt="Stavros Symeonidis Logo" 
          className="w-12 h-12" 
        />
      </div>

      {/* Mobile Hamburger Menu - Right side */}
      <div className="fixed top-7 right-6 z-50 md:hidden">
        <MorphingPopover open={isOpen} onOpenChange={setIsOpen}>
          <MorphingPopoverTrigger 
            className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-105 active:scale-95 rounded-full border border-border hover:border-ring"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6 text-foreground" />
          </MorphingPopoverTrigger>
          
          <MorphingPopoverContent 
            className="fixed rounded-2xl shadow-xl flex flex-col"
            style={{
              top: '10px',
              left: '10px',
              right: '10px'
            }}
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between">
              <h2 className="text-xs font-heading text-[#b3b3b3] mt-0.5 flex items-center gap-2">
                <span className="w-1 h-1 bg-[#b3b3b3] rounded-full"></span>
                MENU
              </h2>
              
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-1.5 bg-black border border-border rounded-md hover:bg-gray-900 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" style={{ color: '#b3b3b3' }} />
                <span className="text-sm font-body" style={{ color: '#b3b3b3' }}>
                  Close
                </span>
              </button>
            </div>
            
            <MobileNav onNavigationClick={handleNavigationClick} />
          </MorphingPopoverContent>
        </MorphingPopover>
      </div>
    </>
  );
}
