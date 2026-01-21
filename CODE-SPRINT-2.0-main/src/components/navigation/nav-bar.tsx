import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { navigationItems } from "@/constants/index";
import { Tab } from "./tab";
import { Cursor } from "./cursor";
import { Sidebar } from "./sidebar/sidebar";
import { useNavigationStore } from "@/stores/navigationStore";
import type { Position } from "./types";

export function NavBar() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Get active navigation item using optimized selector
  const activeNavigationItem = useNavigationStore(state => state.getActiveNavigationItem());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top or scrolling up
      if (currentScrollY < 100 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile, visible on md+ */}
      <nav className={`fixed top-7 left-1/2 -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        {/* Hover trigger area - invisible area above navbar */}
        <div 
          className="absolute -top-8 left-0 right-0 h-8 bg-transparent"
          onMouseEnter={() => setIsVisible(true)}
        />
        
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className="glass-texture rounded-full flex items-center justify-center gap-2 px-2 py-2 relative"
        >
          {navigationItems.map((item) => (
            <Tab 
              key={item.name} 
              setPosition={setPosition} 
              href={item.link}
              isActive={activeNavigationItem === item.name}
            >
              {item.name === "Contact" && <Globe className="w-4 h-4" />}
              {item.name}
            </Tab>
          ))}
          
          <Cursor position={position} />
        </ul>
      </nav>

      <Sidebar />
    </>
  );
}
