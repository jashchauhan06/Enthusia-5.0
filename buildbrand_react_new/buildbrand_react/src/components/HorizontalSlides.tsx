import { ReactNode, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import './HorizontalSlides.scss'

interface HorizontalSlidesProps {
    children: ReactNode
}

export default function HorizontalSlides({ children }: HorizontalSlidesProps) {
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

            // Function to calculate movement limits
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
            // 75% of viewport height gives a nice "pause" feeling
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

            // Use fromTo to explicitely control start and end positions
            // We use a function for the values to ensure they recalculate on refresh/resize
            tl.fromTo(slider,
                {
                    x: () => getScrollValues().startX
                },
                {
                    x: () => getScrollValues().endX,
                    ease: 'none',
                    duration: 1, // Represents "1" unit of time in the timeline
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
        <div className="horizontal-slides" ref={containerRef}>
            <div className="slider" ref={sliderRef}>
                {children}
            </div>
        </div>
    )
}
