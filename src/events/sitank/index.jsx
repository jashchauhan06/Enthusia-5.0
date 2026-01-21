// Wrapper to load the standalone SITank project
import { useEffect } from 'react';

export default function SITankWrapper() {
  useEffect(() => {
    // Set document title for SITank page
    document.title = 'SITank 2.0 | The Big Bull of Tech - ENTHUSIA 5.0';
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Cleanup: restore Enthusia title when leaving SITank
    return () => {
      document.title = 'ENTHUSIA 5.0 | The Ultimate Tech & Cultural Fest - SIT NAGPUR';
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#120f0d',
      zIndex: 9999
    }}>
      {/* Iframe loading the standalone SITank project */}
      <iframe
        src="/sitank-app/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          backgroundColor: '#120f0d'
        }}
        title="SITank 2.0"
      />
    </div>
  );
}
