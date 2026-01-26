import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import './FeatureCards.scss'

const features = [
    {
        number: "01",
        title: "Brand Clarity",
        description: "Clarity of the brand's purpose, audience, and positioning."
    },
    {
        number: "02",
        title: "Core Idea",
        description: "Strength and originality of the core brand idea."
    },
    {
        number: "03",
        title: "Visual Design",
        description: "Quality of logo, colors, and typography."
    },
    {
        number: "04",
        title: "Consistency",
        description: "Consistency across all brand visuals and applications."
    },
    {
        number: "05",
        title: "Craft & Polish",
        description: "Craft and polish of the final designs."
    },
    {
        number: "06",
        title: "Real-World Usage",
        description: "Effectiveness of mockups and real-world brand usage."
    },
    {
        number: "07",
        title: "Design Process",
        description: "How clearly the design process and thinking are shown."
    },
    {
        number: "08",
        title: "Brand Story",
        description: "How well the brand story is communicated."
    },
    {
        number: "09",
        title: "Presentation",
        description: "Confidence and clarity of the final presentation."
    }
]

export default function FeatureCards() {
    const containerRef = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const container = containerRef.current
            const slider = sliderRef.current

            if (!container || !slider) return

            const cards = Array.from(slider.children) as HTMLElement[]
            if (cards.length === 0) return

            // Function to calculate movement limits (same as HorizontalSlides)
            const getScrollValues = () => {
                const containerCenter = container.clientWidth / 2
                const firstCard = cards[0]
                const lastCard = cards[cards.length - 1]

                // Calculate center points of first and last cards relative to the slider
                const firstCardCenter = firstCard.offsetLeft + firstCard.offsetWidth / 2
                const lastCardCenter = lastCard.offsetLeft + lastCard.offsetWidth / 2

                // Calculate the X offsets needed to center these cards
                const startX = containerCenter - firstCardCenter
                const endX = containerCenter - lastCardCenter

                // Total distance to move
                const totalMove = Math.abs(endX - startX)

                return { startX, endX, totalMove }
            }

            // How much extra spacing to wait after scroll finishes (in pixels)
            const pauseAmount = window.innerHeight * 0.75

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    // The total scroll distance is movement + pause
                    end: () => {
                        const { totalMove } = getScrollValues()
                        return `+=${totalMove + pauseAmount}`
                    },
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            })

            // Use fromTo to explicitly control start and end positions
            tl.fromTo(slider,
                {
                    x: () => getScrollValues().startX
                },
                {
                    x: () => getScrollValues().endX,
                    ease: 'none',
                    duration: 1,
                }
            )

            // Add a pause of proportional duration
            tl.to({}, {
                duration: () => {
                    const { totalMove } = getScrollValues()
                    return pauseAmount / totalMove
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="feature-cards" ref={containerRef}>
            <div className="feature-cards-slider" ref={sliderRef}>
                {features.map((feature, i) => (
                    <div key={feature.number} className="feature-card card" style={{ '--index': i } as React.CSSProperties}>
                        <div className="feature-number">{feature.number}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
