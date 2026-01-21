// Wrapper to load the standalone CodeSprint project
import { useEffect } from 'react';

export default function CodeSprintWrapper() {
    useEffect(() => {
        // Set document title for CodeSprint page
        document.title = 'CodeSprint 2.0 | Competitive Coding - ENTHUSIA 5.0';

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
            {/* Iframe loading the standalone CodeSprint project */}
            <iframe
                src="/codesprint-app/index.html"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    backgroundColor: '#050505'
                }}
                title="CodeSprint 2.0"
            />
        </div>
    );
}
