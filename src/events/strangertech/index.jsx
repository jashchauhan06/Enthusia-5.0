// Wrapper to load the standalone Stranger Tech project
import { useEffect } from 'react';

export default function StrangerTechPage() {
    useEffect(() => {
        document.title = 'Stranger Tech | The Upside Down Challenge - ENTHUSIA 5.0';
        window.scrollTo(0, 0);
        return () => {
            document.title = 'ENTHUSIA 5.0 | The Ultimate Tech & Cultural Fest - SIT NAGPUR';
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#0a0a0a',
            zIndex: 9999
        }}>
            <iframe
                src="/strangertech-app/index.html"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    backgroundColor: '#0a0a0a'
                }}
                title="Stranger Tech"
            />
        </div>
    );
}
