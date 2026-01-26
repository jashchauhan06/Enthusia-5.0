import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { faqs } from '@/content/faqs'
import FaqItem from './FaqItem'
import Button from './Button'
import './Footer.scss'

const teamMembers = [
    {
        name: "Sunidhi Haware",
        role: "President",
        image: "/buildbrand-app/team/Sunidhi.jpg",
        linkedin: "https://www.linkedin.com/in/sunidhi-haware-797a97323/"
    },
    {
        name: "Prathmesh Raipurkar",
        role: "Vice President",
        image: "/buildbrand-app/team/Prathmesh.png",
        linkedin: "https://linkedin.com/in/prathmesh-raipurkar"
    },
    {
        name: "Jash Chauhan",
        role: "Web Development Team Lead",
        image: "/buildbrand-app/team/Jash.jpg",
        linkedin: "https://linkedin.com/in/jashchauhan06"
    },
    {
        name: "Jivesh Chawla",
        role: "Event Lead",
        image: "/buildbrand-app/team/Jiwesh Chawla.png",
        linkedin: "https://www.linkedin.com/in/jivesh-chawla-134324299/"
    },
    {
        name: "Karan Deshmukh",
        role: "Event Lead",
        image: "/buildbrand-app/team/Karan Deshmukh.png",
        linkedin: "https://www.linkedin.com/in/karan-deshmukh-cse/"
    },
    {
        name: "Harsh Kumar",
        role: "Sponsorship",
        image: "/buildbrand-app/team/harsh.png",
        linkedin: "https://www.linkedin.com/in/harsh-2227-kumar/"
    }
]

export default function Footer() {
    const location = useLocation()
    const isContactPage = location.pathname === '/contact'
    const [currentSlide, setCurrentSlide] = useState(0)
    const isHoveredRef = useRef(false)
    const cardsPerView = 3
    const maxSlides = 2
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    const showArrows = teamMembers.length > cardsPerView

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed')
                }
            })
        }, { threshold: 0.1 })

        cardsRef.current.forEach(card => {
            if (card) observer.observe(card)
        })

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (teamMembers.length <= cardsPerView) return

        const interval = setInterval(() => {
            if (!isHoveredRef.current) {
                setCurrentSlide(prev => prev >= maxSlides ? 0 : prev + 1)
            }
        }, 3000)

        return () => clearInterval(interval)
    }, []) // Empty deps - use ref for hover state

    const nextSlide = () => {
        if (currentSlide < maxSlides) setCurrentSlide(prev => prev + 1)
    }

    const prevSlide = () => {
        if (currentSlide > 0) setCurrentSlide(prev => prev - 1)
    }

    return (
        <footer className={clsx('theme-light', 'footer', isContactPage && 'contact-footer')} style={isContactPage ? { display: 'none' } : {}}>
            {!isContactPage && (
                <div className="layout-grid top">
                    <div
                        className="team-section"
                        onMouseEnter={() => isHoveredRef.current = true}
                        onMouseLeave={() => isHoveredRef.current = false}
                    >
                        {showArrows && (
                            <button className="nav-arrow prev" onClick={prevSlide} disabled={currentSlide === 0}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                </svg>
                            </button>
                        )}

                        <div className="team-cards-container">
                            <div
                                className="team-cards"
                                style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
                            >
                                {teamMembers.map((member, i) => (
                                    <div
                                        key={member.name}
                                        ref={el => cardsRef.current[i] = el}
                                        className="team-card"
                                        style={{ '--index': i } as React.CSSProperties}
                                    >
                                        <div className="card-image">
                                            <img src={member.image} alt={member.name} />
                                        </div>
                                        <div className="card-content">
                                            <h3 className="member-name">{member.name}</h3>
                                            <p className="member-role">{member.role}</p>
                                            <a href={member.linkedin} className="linkedin-btn" target="_blank" rel="noopener noreferrer">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                                LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {showArrows && (
                            <button className="nav-arrow next" onClick={nextSlide} disabled={currentSlide === maxSlides}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                                </svg>
                            </button>
                        )}
                    </div>

                    <div className="shameless-plug">
                        <p className="h4">Our Team</p>
                        <p className="p-s">
                            Building amazing <br /> experiences together
                        </p>
                    </div>
                </div>
            )}

            <div className="bottom">
                <div className="links">
                    {!isContactPage && (
                        <Link className="link p-xs contact-link-btn" to="/contact">
                            Contact Us
                        </Link>
                    )}
                </div>
            </div>
        </footer>
    )
}
