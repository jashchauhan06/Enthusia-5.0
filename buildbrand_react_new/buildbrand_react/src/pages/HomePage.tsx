import { useState, useRef, useEffect, useCallback } from 'react'
import clsx from 'clsx'
import { useTheme } from '@/contexts/ThemeContext'
import { useIntro } from '@/contexts/IntroContext'
import { useScroll } from '@/contexts/LenisContext'
import { useWindowSize, useIntersection } from '@/hooks'
import { clamp, mapRange } from '@/utils/maths'
import { faqs } from '@/content/faqs'
import Hand from '@/components/Hand'
import Button from '@/components/Button'
import Card from '@/components/Card'
import HeroTextIn from '@/components/HeroTextIn'
import FaqItem from '@/components/FaqItem'
import AppearTitle from '@/components/AppearTitle'
import Parallax from '@/components/Parallax'
import HorizontalSlides from '@/components/HorizontalSlides'
import { FeatureCards } from '@/components/FeatureCards'
import { Register } from '@/components/Icons'
import './HomePage.scss'

export default function HomePage() {
    const { theme, setTheme } = useTheme()
    const { introOut } = useIntro()
    const [size] = useWindowSize()

    const [hasScrolled, setHasScrolled] = useState(false)
    const [visible, setVisible] = useState(false)

    // Use ref to track theme without causing re-renders
    const themeRef = useRef(theme)
    themeRef.current = theme

    const zoomWrapperRef = useRef<HTMLElement>(null)
    const whyRef = useRef<HTMLElement>(null)
    const cardsRectRef = useRef<HTMLDivElement>(null)
    const whiteRectRef = useRef<HTMLElement>(null)
    const featuresRectRef = useRef<HTMLElement>(null)
    const [inuseRef, isInuseVisible] = useIntersection({ threshold: 0.2 })

    useEffect(() => {
        if (isInuseVisible) setVisible(true)
    }, [isInuseVisible])

    const handleScroll = useCallback(({ scroll }: { scroll: number }) => {
        setHasScrolled(scroll > 10)

        if (!zoomWrapperRef.current) return

        const rect = zoomWrapperRef.current.getBoundingClientRect()
        const wrapperTop = rect.top + scroll
        const start = wrapperTop + size.height * 0.5
        const end = wrapperTop + rect.height - size.height

        const center = 0.6
        const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)
        const progress1 = clamp(0, mapRange(0, center, progress, 0, 1), 1)
        const progress2 = clamp(0, mapRange(center - 0.055, 1, progress, 0, 1), 1)

        const newTheme = progress2 === 1 ? 'light' : 'dark'
        // Use ref to compare without adding theme to deps
        if (newTheme !== themeRef.current) {
            setTheme(newTheme)
        }

        zoomWrapperRef.current.style.setProperty('--progress1', String(progress1))
        zoomWrapperRef.current.style.setProperty('--progress2', String(progress2))

        if (progress === 1) {
            zoomWrapperRef.current.style.setProperty('background-color', 'currentColor')
        } else {
            zoomWrapperRef.current.style.removeProperty('background-color')
        }
    }, [size, setTheme])

    useScroll(handleScroll)

    return (
        <>
            <div className="canvas">
                <Hand />
            </div>

            {/* SIT Logo */}
            <div className={clsx('sit-logo-container', introOut && 'show')}>
                <img src="/buildbrand-app/SIT_LOGO.jpg" alt="SIT Nagpur" className="sit-logo" />
            </div>

            <section className="hero">
                <div className="layout-grid-inner">
                    <span className="sub">
                        <HeroTextIn>
                            <h2 className="h3 subtitle">BUILD BRAND</h2>
                        </HeroTextIn>
                        <HeroTextIn>
                            <h2 className="p-xs tm">SITNagpur Presents</h2>
                        </HeroTextIn>
                    </span>
                </div>

                <div className="bottom layout-grid">
                    <div className={clsx('hide-on-mobile', 'scroll-hint', hasScrolled && 'hide', introOut && 'show')}>
                        <div className="text">
                            <HeroTextIn><p>scroll</p></HeroTextIn>
                            <HeroTextIn><p>to explore</p></HeroTextIn>
                        </div>
                    </div>
                    <div className="cta-wrapper">
                        <Button
                            className={clsx('cta', introOut && 'in')}
                            arrow={true}
                            icon={<Register />}
                            href="https://unstop.com/p/build-brand-enthusia-50-symbiosis-institute-of-technology-nagpur-1626415?lb=i9smS0vw&utm_medium=Share&utm_source=harshkum8980&utm_campaign=Competitions"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Register Now
                        </Button>
                    </div>
                </div>
            </section>

            <section className="why" data-lenis-scroll-snap-align="start">
                <div className="layout-grid">
                    <h2 className="sticky h2">
                        <AppearTitle>What is Build Brand?</AppearTitle>
                    </h2>
                    <aside className="features" ref={whyRef as any}>
                        <div className="feature">
                            <p className="p">
                                Build Brand is a 8-hour off-line design hackathon, a collision of creativity and competition. Teams are on a time to develop a raw business concept into a finished, professional brand - strategy and visual identity, digital presence, and marketing materials.
                            </p>
                        </div>
                        <div className="feature">
                            <h3 className="title h4">Not Your Average Design Competition</h3>
                            <p className="p">
                                It is not an ordinary design competition. The purpose of Build Brand is to mimic the workings of a real branding agency and have tight deadlines, real-life briefs, and industry expectations. You do not simply design, you think, work and find solutions to the branding issues like the professionals do.
                            </p>
                        </div>
                        <div className="feature">
                            <h3 className="title h4">Build Work That Builds Your Portfolio</h3>
                            <p className="p">
                                At the conclusion of the sprint, there is something that really counts delivered by each and every team: a portfolio-ready brand case study. It could be logos, mockups, or creative social media, and all you produce is destined to present your talents to your prospective employer and customers.
                            </p>
                        </div>
                        <div className="feature">
                            <h3 className="title h4">A Launchpad for Creative Careers</h3>
                            <p className="p">
                                Build Brand is not just an event but a catapult to the creative career. It unites designers, strategists, and storytellers to challenge themselves, get mentored by the industry, and know what it is like to create an actual brand, up to the ground.
                            </p>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="rethink">
                <div className="layout-grid pre">
                    <div className="highlight" data-lenis-scroll-snap-align="start">
                        <Parallax speed={-0.5}>
                            <p className="h2">
                                <AppearTitle>What You'll Create</AppearTitle>
                            </p>
                        </Parallax>
                    </div>
                    <div className="comparison">
                        <Parallax speed={0.5}>
                            <p className="p comparison-text">
                                In 8 hours of rigorous work each team will have a full-fledged real world brand identity, not just a logo. You will start getting out of theory to practice in creating a unified system that determines how a brand will appear, speak, and perform itself in various platforms. All you do will be organized, written and prepared to be presented in your portfolio. It has some of the major aspects that you will develop in this process as highlighted below.
                            </p>
                        </Parallax>
                    </div>
                </div>
                <div className="cards" ref={cardsRectRef}>
                    <HorizontalSlides>
                        <Card
                            className="card feature-card"
                            index={0}
                            title="Brand Strategy"
                            description="Define your brand's purpose, audience, and positioning."
                        />
                        <Card
                            className="card feature-card"
                            index={1}
                            title="Visual Identity"
                            description="Create a cohesive logo, color palette, and typography system."
                        />
                        <Card
                            className="card feature-card"
                            index={2}
                            title="Brand Applications"
                            description="Design mockups showing your brand in real-world contexts."
                        />
                        <Card
                            className="card feature-card"
                            index={3}
                            title="Digital Presence"
                            description="Craft social media templates and digital marketing materials."
                        />
                        <Card
                            className="card feature-card"
                            index={4}
                            title="The Pitch"
                            description="Complete design process, case study deck and Presentation."
                        />
                    </HorizontalSlides>
                </div>
            </section>

            <section ref={zoomWrapperRef} className="solution">
                <div className="inner">
                    <div className="zoom">
                        <h2 className="first h1 vh">
                            SO WE<br />
                            <span className="contrast"> BUILT </span>
                        </h2>
                        <h2 className="enter h3 vh">
                            BUILD<br /> BRAND
                        </h2>
                        <h2 className="second h1 vh">As it should be</h2>
                    </div>
                </div>
            </section>

            <section className="theme-light featuring" ref={whiteRectRef as any}>
                <div className="inner">
                    <div className="layout-block intro">
                        <p className="p-l">
                            Build Brand is a branding sprint In Build Brand, high-intensity and real-world sessions, creative students are pushed through idea to execution in one time-bound sprint process, producing a complete, portfolio-ready brand case study demonstrating how you think, create, and deliver as a professional.
                        </p>
                    </div>
                </div>
                <div className="judging-heading">
                    <h2 className="h2">How We'll Judge Your Work</h2>
                </div>
                <section ref={featuresRectRef as any}>
                    <FeatureCards />
                </section>
            </section>

            <section
                ref={inuseRef as any}
                className={clsx('theme-light', 'in-use', visible && 'visible')}
            >
                <div className="layout-grid">
                    <aside className="title">
                        <p className="h3">
                            <AppearTitle>
                                FAQS<br />
                            </AppearTitle>
                        </p>
                    </aside>
                    <ul className="list">
                        {faqs.map((faq, i) => (
                            <li key={faq.question}>
                                <FaqItem question={faq.question} answer={faq.answer} index={i} visible={visible} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="register-cta">
                    <h2 className="cta-heading">Ready to Build Your Brand?</h2>
                    <p className="cta-subtext">Join us for an intense 8-hour branding sprint and create something extraordinary</p>
                    <Button
                        className="cta-button-large"
                        arrow={true}
                        icon={<Register />}
                        href="https://unstop.com/p/build-brand-enthusia-50-symbiosis-institute-of-technology-nagpur-1626415?lb=i9smS0vw&utm_medium=Share&utm_source=harshkum8980&utm_campaign=Competitions"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Register Now
                    </Button>
                </div>
            </section>
        </>
    )
}
