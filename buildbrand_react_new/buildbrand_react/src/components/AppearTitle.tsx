import { ReactNode, useRef, useEffect, useState } from 'react'
import clsx from 'clsx'
import './AppearTitle.scss'

interface AppearTitleProps {
    children: ReactNode
    className?: string
}

export default function AppearTitle({ children, className }: AppearTitleProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return (
        <span ref={ref} className={clsx('appear-title', isVisible && 'visible', className)}>
            {children}
        </span>
    )
}
