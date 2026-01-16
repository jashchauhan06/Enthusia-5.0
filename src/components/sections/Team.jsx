
import React, { forwardRef, useState, useRef, useImperativeHandle, useEffect } from 'react';
import { gsap } from 'gsap';

const teamMembers = [
    { name: "Jash Chauhan", role: "Web Dev Lead", img: "/team/Jash.jpg" },
    { name: "Saksham Wadhankar", role: "Developer", img: "/team/saksham.png" },
    { name: "Om Rai", role: "Developer", img: "/team/om.png" },
    { name: "Harsh", role: "Core Team", img: "/team/harsh.png?v=1" },
    { name: "Parth Choudhari", role: "Core Team", img: "/team/parth.jpg" },
    { name: "Member", role: "Core Team", img: "/team/member_placeholder.png" },
    { name: "Sunidhi Haware", role: "SRC President", img: "/team/1.jpg" },
    { name: "Prathamesh", role: "SRC Vice President", img: "/team/prathamesh.png" }
];

const Team = forwardRef((props, ref) => {
    const sectionRef = useRef(null);
    const memberRefs = useRef([]);
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const textRef = useRef(null);

    // Logic State
    const [progress, setProgress] = useState(0);
    const isAnimating = useRef(false);

    const maxRadius = 260; // Reduced to 260 to fix header overlap
    const currentRadius = useRef(0);

    const updateVisuals = (newProgress, immediate = false) => {
        const targetRadius = newProgress * maxRadius;

        // Classes
        if (newProgress > 0.1) {
            outerRef.current?.classList.add('active');
            innerRef.current?.classList.add('active');
        } else {
            outerRef.current?.classList.remove('active');
            innerRef.current?.classList.remove('active');
        }

        if (newProgress > 0.7) {
            textRef.current?.classList.add('visible');
        } else {
            textRef.current?.classList.remove('visible');
        }

        const duration = immediate ? 0 : 0.6;

        gsap.to(currentRadius, {
            current: targetRadius,
            duration: duration,
            ease: 'power2.out',
            onUpdate: () => {
                const r = currentRadius.current;
                memberRefs.current.forEach((member, i) => {
                    if (!member) return;
                    const angle = i * (Math.PI / 4); // 8 members -> 45 deg
                    const x = r * Math.cos(angle);
                    const y = r * Math.sin(angle);
                    member.style.transform = `translate(${x}px, ${y}px)`;
                });
            }
        });
    };

    useImperativeHandle(ref, () => ({
        next: () => {
            if (progress >= 1) return false;
            // Complete animation in one step
            const newP = 1;
            setProgress(newP);
            updateVisuals(newP);
            return true;
        },
        prev: () => {
            if (progress <= 0) return false;
            // Reverse animation in one step
            const newP = 0;
            setProgress(newP);
            updateVisuals(newP);
            return true;
        },
        isFinished: () => progress >= 1,
        isAtStart: () => progress <= 0,
        reset: (toStart) => {
            const newP = toStart ? 0 : 1;
            setProgress(newP);
            updateVisuals(newP, true);
        },
        type: 'TEAM',
        el: sectionRef.current
    }));

    return (
        <section className="team-section section" id="team" ref={sectionRef}>
            <div className="team-container">
                <div className="team-circle-outer" id="teamOuter" ref={outerRef}>
                    <div className="team-circle-inner" id="teamInner" ref={innerRef}>
                        <div className="team-circle-gradient">
                            <div className="team-circle-content" id="teamContent">
                                {teamMembers.map((m, i) => (
                                    <div
                                        key={i}
                                        className="team-member"
                                        ref={el => memberRefs.current[i] = el}
                                        data-angle={i * (Math.PI / 4)}
                                    >
                                        <img src={m.img} alt={m.name} />
                                        <div className="member-info">
                                            <span className="member-name">{m.name}</span>
                                            <span className="member-role">{m.role}</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="team-center-text" id="teamCenterText" ref={textRef}>
                                    <h2>Meet</h2>
                                    <h2 className="gradient-text">Our Team</h2>
                                    <p>The passionate minds building the future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Team;
