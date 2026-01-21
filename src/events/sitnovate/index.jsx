// Wrapper to load the standalone SITNovate project
import { useEffect } from 'react';

export default function SITNovateWrapper() {
    useEffect(() => {
        // Set document title for SITNovate page
        document.title = 'SITNOVATE 2.0 | 24HR Hackathon - ENTHUSIA 5.0';

        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        // Cleanup: restore Enthusia title when leaving
        return () => {
            document.title = 'ENTHUSIA 5.0 | The Ultimate Tech & Cultural Fest - SIT NAGPUR';
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#050505',
            zIndex: 9999
        }}>
            {/* Iframe loading the standalone SITNovate project */}
            <iframe
                src="/sitnovate-app/index.html"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    backgroundColor: '#050505'
                }}
                title="SITNOVATE 2.0"
            />
        </div>
    );
}
