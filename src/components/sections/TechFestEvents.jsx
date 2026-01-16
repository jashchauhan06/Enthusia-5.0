import React, { forwardRef, useState, useImperativeHandle, useRef, useEffect } from 'react';
import { Rocket, Terminal, Search, Briefcase, Lightbulb } from 'lucide-react';
import ElectricBorder from '../ElectricBorder';

const TechFestEvents = forwardRef((props, ref) => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [cardsVisible, setCardsVisible] = useState(false);
    const [viewState, setViewState] = useState(1);
    const [scrollTop, setScrollTop] = useState(0);
    const SCROLL_STEP = 150;

    useImperativeHandle(ref, () => ({
        next: () => {
            if (containerRef.current && sectionRef.current) {
                const viewportHeight = sectionRef.current.clientHeight;
                const contentHeight = containerRef.current.scrollHeight;
                const maxScroll = Math.max(0, contentHeight - viewportHeight + 180); // 180px buffer for mobile padding/header
                if (scrollTop < maxScroll) {
                    setScrollTop(prev => Math.min(prev + SCROLL_STEP, maxScroll));
                    return true;
                }
            }
            return false;
        },
        prev: () => {
            if (scrollTop > 0) {
                setScrollTop(prev => Math.max(prev - SCROLL_STEP, 0));
                return true;
            }
            return false;
        },
        isFinished: () => {
            if (!containerRef.current || !sectionRef.current) return true;
            const viewportHeight = sectionRef.current.clientHeight;
            const contentHeight = containerRef.current.scrollHeight;
            const maxScroll = Math.max(0, contentHeight - viewportHeight + 180);
            return scrollTop >= maxScroll;
        },
        isAtStart: () => {
            return scrollTop <= 0;
        },
        reset: (toStart) => {
            setViewState(1);
            setCardsVisible(true);
            if (toStart) {
                setScrollTop(0);
            } else {
                const viewportHeight = sectionRef.current?.clientHeight || 0;
                const contentHeight = containerRef.current?.scrollHeight || 0;
                const maxScroll = Math.max(0, contentHeight - viewportHeight + 180);
                setScrollTop(maxScroll);
            }
        },
        el: sectionRef.current
    }));

    useEffect(() => {
        if (viewState === 1) setCardsVisible(true);
        else setCardsVisible(false);
    }, [viewState]);

    const events = [
        {
            id: 1,
            title: "SITNOVATE",
            subtitle: "2.0",
            icon: <Rocket />,
            desc: "24HR HACKATHON",
            borderColor: "#ec4899",
            iconColor: "#ec4899",
            link: "https://sitnovate.vercel.app/"
        },
        {
            id: 2,
            title: "CODESPRINT",
            subtitle: "2.0",
            icon: <Terminal />,
            desc: "COMPETITIVE CODING",
            borderColor: "#22d3ee",
            iconColor: "#22d3ee",
            link: "https://code-sprint-2-0.vercel.app/"
        },
        {
            id: 3,
            title: "STRANGER",
            subtitle: "TECH",
            icon: <Search />,
            desc: "TECH TREASURE HUNT",
            borderColor: "#facc15",
            iconColor: "#facc15",
            link: "https://stranger-tech-csi.vercel.app/"
        },
        {
            id: 4,
            title: "SITANK",
            subtitle: "2.0",
            icon: <Briefcase />,
            desc: "PITCH DECK COMPETITION",
            borderColor: "#4ade80",
            iconColor: "#4ade80",
            link: "https://sitank-2-0.vercel.app/"
        },
        {
            id: 5,
            title: "BUILDBRAND",
            subtitle: "",
            icon: <Lightbulb />,
            desc: "AD CHALLENGE",
            borderColor: "#a855f7",
            iconColor: "#a855f7",
            link: "https://build-brand.vercel.app/"
        }
    ];

    return (
        <section className="section" id="techfest-events" ref={sectionRef}>
            <style>{`
                /* ==========================================
                   TECH EVENTS - NEON CARD DESIGN (REFIT)
                ========================================== */
                
                .tech-events-section {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 80px 40px 60px 220px;
                    box-sizing: border-box;
                    perspective: 1000px;
                    overflow: hidden;
                }

                .tech-events-scroll-wrapper {
                    width: 100%;
                    height: auto;
                    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }

                .tech-events-header {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .tech-events-title {
                    font-family: var(--font-heading);
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    margin: 0;
                    text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
                }

                .tech-events-container {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: center;
                    gap: 1rem;
                    max-width: 100%;
                    width: 100%;
                }

                /* ==========================================
                   SCI-FI CARD STYLES
                ========================================== */
                
                .scifi-card {
                    position: relative;
                    flex: 1; /* Allow cards to share space equally */
                    max-width: 210px; /* Scaled down 20% */
                    height: 320px;    /* Scaled down 20% */
                    background: rgba(5, 5, 16, 0.5); /* Transparent bg 0.5 */
                    backdrop-filter: blur(5px);
                    border-radius: 4px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.5rem 0.8rem;
                    cursor: pointer;
                    transition: all 0.4s ease;
                    /* Main Border Color handled via var */
                    border: 1px solid var(--card-border-color);
                    box-shadow: 0 0 15px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.8);
                    
                    /* Sci-Fi Shape Config */
                    --notch-size: 12px;
                    clip-path: polygon(
                        0% var(--notch-size), 
                        var(--notch-size) 0%, 
                        calc(100% - var(--notch-size)) 0%, 
                        100% var(--notch-size), 
                        100% calc(100% - var(--notch-size)), 
                        calc(100% - var(--notch-size)) 100%, 
                        var(--notch-size) 100%, 
                        0% calc(100% - var(--notch-size))
                    );
                }

                /* Circuit Pattern */
                .scifi-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 16px 16px;
                    opacity: 0.5;
                    pointer-events: none;
                }

                /* Inner Glowing Border (Pseudo) */
                .scifi-card::after {
                    content: '';
                    position: absolute;
                    inset: 3px;
                    border: 1px solid var(--card-border-color);
                    border-radius: 2px;
                    opacity: 0.5;
                    pointer-events: none;
                    clip-path: polygon(
                        0% var(--notch-size), 
                        var(--notch-size) 0%, 
                        calc(100% - var(--notch-size)) 0%, 
                        100% var(--notch-size), 
                        100% calc(100% - var(--notch-size)), 
                        calc(100% - var(--notch-size)) 100%, 
                        var(--notch-size) 100%, 
                        0% calc(100% - var(--notch-size))
                    );
                }

                .scifi-card:hover {
                    box-shadow: 0 0 30px var(--card-border-color), inset 0 0 20px var(--card-border-color);
                    transform: translateY(-8px);
                    z-index: 10;
                }

                .scifi-card:hover::after {
                    opacity: 1;
                    box-shadow: 0 0 10px var(--card-border-color);
                }

                /* Content z-index adjustment */
                .scifi-card > * {
                    position: relative;
                    z-index: 2;
                }

                /* ICON */
                .scifi-icon {
                    margin-top: 0.8rem;
                    color: var(--card-icon-color);
                    filter: drop-shadow(0 0 5px var(--card-icon-color));
                    transition: transform 0.3s ease;
                }
                
                .scifi-card:hover .scifi-icon {
                    transform: scale(1.1);
                    filter: drop-shadow(0 0 15px var(--card-icon-color));
                }

                /* HEADER GROUP */
                .scifi-header {
                    text-align: center;
                    margin: 0.8rem 0;
                }

                .scifi-title {
                    font-family: var(--font-heading);
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: #ffffff;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    margin: 0;
                    line-height: 1.1;
                }

                .scifi-subtitle {
                    display: block;
                    font-family: var(--font-heading);
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #ffffff;
                    margin-top: 0.2rem;
                    opacity: 0.9;
                }

                /* DESC */
                .scifi-desc {
                    font-family: monospace;
                    font-size: 0.65rem;
                    color: rgba(255, 255, 255, 0.7);
                    text-align: center;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: auto;
                    padding: 0 0.5rem;
                    margin-top: 0.5rem;
                }

                /* BUTTON */
                .scifi-btn {
                    margin-top: 1.5rem;
                    margin-bottom: 0.5rem;
                    padding: 0.6rem 2rem;
                    background: transparent;
                    border: 1px solid var(--card-border-color);
                    color: #fff;
                    font-family: var(--font-heading);
                    font-size: 0.7rem;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    text-decoration: none;
                    position: relative;
                    transition: all 0.3s ease;
                    clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
                }

                .scifi-btn::before {
                    content: '';
                    position: absolute;
                    top: 2px; left: 2px; right: 2px; bottom: 2px;
                    border: 1px solid var(--card-border-color);
                    opacity: 0.3;
                    clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
                    pointer-events: none;
                }

                .scifi-btn:hover {
                    background: var(--card-border-color);
                    color: #000;
                    box-shadow: 0 0 20px var(--card-border-color);
                }
                
                /* Responsive */
                @media (max-width: 1200px) {
                    .tech-events-section { padding-left: 180px; }
                }
                @media (max-width: 900px) {
                    .tech-events-section { padding: 80px 20px 60px 20px; }
                    .tech-events-header { 
                        margin-bottom: 1.2rem !important;
                        padding-right: 60px !important;
                        text-align: left !important;
                    }
                    .tech-events-title { font-size: 2.2rem !important; }
                    .tech-events-container { flex-wrap: wrap; gap: 1rem; }
                    .scifi-card { width: 45%; max-width: none; height: 280px; }
                }
                @media (max-width: 600px) {
                    .tech-events-container {
                        display: grid !important;
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 0.6rem !important;
                        padding: 0 0.4rem !important;
                    }
                    .scifi-card { 
                        width: 100% !important; 
                        max-width: none !important; 
                        height: 155px !important; 
                        padding: 0.5rem 0.4rem !important;
                    }
                    /* Ensure 5th card doesn't stretch or look weird */
                    .scifi-card:nth-child(5) {
                        grid-column: span 2;
                        max-width: 155px !important;
                        margin: 0 auto;
                    }
                    .scifi-title { font-size: 0.75rem !important; }
                    .scifi-subtitle { font-size: 0.65rem !important; }
                    .scifi-icon svg { width: 24px !important; height: 24px !important; }
                    .scifi-desc { font-size: 0.5rem !important; }
                    .scifi-btn { padding: 0.3rem 0.8rem !important; font-size: 0.55rem !important; margin-top: 0.3rem !important; }
                }
            `}</style>

            <div className="tech-events-section">
                <div className="tech-events-scroll-wrapper" style={{ transform: `translateY(${-scrollTop}px)` }}>
                    <div className="tech-events-container-wrapper" ref={containerRef}>
                        <div className={`tech-events-header ${cardsVisible ? 'visible' : ''}`}>
                            <h2 className="tech-events-title">Tech Events</h2>
                        </div>

                        <div className="tech-events-container">
                            {events.map((event, index) => (
                                <div
                                    key={event.id}
                                    className={`scifi-card ${cardsVisible ? 'visible' : ''}`}
                                    style={{
                                        '--card-border-color': event.borderColor,
                                        '--card-icon-color': event.iconColor,
                                        transitionDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div className="scifi-icon">
                                        {React.cloneElement(event.icon, { size: 40, strokeWidth: 1.5 })}
                                    </div>

                                    <div className="scifi-header">
                                        <h3 className="scifi-title">{event.title}</h3>
                                        {event.subtitle && <span className="scifi-subtitle">{event.subtitle}</span>}
                                    </div>

                                    <p className="scifi-desc">{event.desc}</p>

                                    <a
                                        href={event.link}
                                        target={event.link === '#' ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        className="scifi-btn"
                                    >
                                        ACCESS
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
});

export default TechFestEvents;
