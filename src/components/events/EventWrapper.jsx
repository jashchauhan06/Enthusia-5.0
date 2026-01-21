import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EventWrapper = ({ src, title }) => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Reset scroll position when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLoad = () => {
        setIsLoading(false);
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, backgroundColor: '#050510' }}>
            {/* Back Button Overlay */}
            <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10000 }}>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: 'rgba(255,255,255,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        fontFamily: 'serif', // Fallback for cinzel
                        letterSpacing: '0.05em'
                    }}
                    className="font-cinzel" // Keep class for font if it loads
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 12H5" />
                        <path d="M12 19l-7-7 7-7" />
                    </svg>
                    BACK TO HUB
                </button>
            </div>

            {/* Loading State */}
            {isLoading && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#050510', zIndex: 9998 }}>
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                        <div className="text-purple-400 font-cinzel tracking-[0.2em] animate-pulse">
                            LOADING {title}...
                        </div>
                    </div>
                </div>
            )}

            {/* Iframe */}
            <iframe
                src={src}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                title={title}
                onLoad={handleLoad}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default EventWrapper;
