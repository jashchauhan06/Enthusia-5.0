
import React, { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';

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

    const maxRadius = 260;

    useEffect(() => {
        // Animate on mount/visibility
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger animation when section becomes visible
                        setTimeout(() => {
                            outerRef.current?.classList.add('active');
                            innerRef.current?.classList.add('active');
                            textRef.current?.classList.add('visible');

                            // Animate members to their positions
                            memberRefs.current.forEach((member, i) => {
                                if (!member) return;
                                const angle = i * (Math.PI / 4);
                                const x = maxRadius * Math.cos(angle);
                                const y = maxRadius * Math.sin(angle);
                                member.style.transform = `translate(${x}px, ${y}px)`;
                            });
                        }, 100);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useImperativeHandle(ref, () => ({
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
