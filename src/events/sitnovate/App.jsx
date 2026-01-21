import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/ui/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhatWeProvide from './components/sections/WhatWeProvide';
import EventHighlights from './components/sections/EventHighlights';
import Sponsors from './components/sections/Sponsors';
import OurTeam from './components/sections/OurTeam';
import GetInTouch from './components/sections/GetInTouch';
import MobileView from './components/layout/MobileView';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [[activeSection, direction], setActivePage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);
  const isScrolling = useRef(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const touchStartY = useRef(0);
  const TOTAL_SECTIONS = 7;

  // Sections Array for cleaner rendering
  const sections = [
    <Hero key="hero" />,
    <About key="about" />,
    <WhatWeProvide key="provide" />,
    <EventHighlights key="highlights" />,
    <Sponsors key="sponsors" />,
    <OurTeam key="team" />,
    <GetInTouch key="contact" />
  ];

  // Animation Variants
  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)",
      zIndex: 1
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      zIndex: 2,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
    exit: (direction) => ({
      y: direction > 0 ? -30 : 30,
      opacity: 0,
      scale: 1.05,
      filter: "blur(10px)",
      zIndex: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    })
  };

  const handleScroll = (scrollDir) => {
    if (isScrolling.current) return;

    if (scrollDir === 'down' && activeSection < TOTAL_SECTIONS - 1) {
      scrollToSection(activeSection + 1);
    } else if (scrollDir === 'up' && activeSection > 0) {
      scrollToSection(activeSection - 1);
    }
  };

  const scrollToSection = (index) => {
    if (index < 0 || index >= TOTAL_SECTIONS) return;

    isScrolling.current = true;
    const newDirection = index > activeSection ? 1 : -1;
    setActivePage([index, newDirection]);

    setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  // Wheel Listener
  useEffect(() => {
    if (isMobile) return;
    const onWheel = (e) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) > 30) {
        handleScroll(e.deltaY > 0 ? 'down' : 'up');
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [activeSection, isMobile]);

  // Touch Listener
  useEffect(() => {
    if (isMobile) return;
    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchMove = (e) => {
      e.preventDefault();
      const diff = touchStartY.current - e.touches[0].clientY;
      if (Math.abs(diff) > 50) {
        handleScroll(diff > 0 ? 'down' : 'up');
      }
    };
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [activeSection, isMobile]);

  // Keyboard Navigation
  useEffect(() => {
    if (isMobile) return;
    const onKeyDown = (e) => {
      if (['ArrowDown', 'PageDown', 'Space'].includes(e.code)) {
        e.preventDefault();
        handleScroll('down');
      } else if (['ArrowUp', 'PageUp'].includes(e.code)) {
        e.preventDefault();
        handleScroll('up');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeSection, isMobile]);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={handleLoadComplete} />}
      
      {!isLoading && (
        <>
          {isMobile ? (
            <MobileView />
          ) : (
            <>
              <Navbar currentSection={activeSection} onNavigate={scrollToSection} />

              <main className="fixed inset-0 w-full h-full overflow-hidden bg-[#050505] relative">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeSection}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                  >
                    {sections[activeSection]}
                  </motion.div>
                </AnimatePresence>
              </main>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
