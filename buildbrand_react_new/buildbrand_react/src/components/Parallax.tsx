import { ReactNode, useRef, useCallback } from 'react'
import clsx from 'clsx'
import { useScroll } from '@/contexts/LenisContext'
import './Parallax.scss'

interface ParallaxProps {
    children: ReactNode
    speed?: number
    className?: string
}

export default function Parallax({ children, speed = 0.5, className }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLDivElement>(null)

    const handleScroll = useCallback(({ scroll }: { scroll: number }) => {
        if (!ref.current || !innerRef.current) return

        const rect = ref.current.getBoundingClientRect()
        const elementTop = rect.top + scroll
        const offset = scroll - elementTop
        const parallaxOffset = offset * speed

        innerRef.current.style.transform = `translateY(${parallaxOffset}px)`
    }, [speed])

    useScroll(handleScroll)

    return (
        <div ref={ref} className={clsx('parallax', className)}>
            <div
                ref={innerRef}
                className="parallax-inner"
            >
                {children}
            </div>
        </div>
    )
}
