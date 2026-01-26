import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { useLenis } from '@/contexts/LenisContext'
import { useIntro } from '@/contexts/IntroContext'
import { useMediaQuery } from '@/hooks'
import './Intro.scss'

export default function Intro() {
    const lenis = useLenis()
    const { setIntroOut } = useIntro()
    const isMobile = useMediaQuery('(max-width: 800px)')

    const [isLoaded, setIsLoaded] = useState(false)
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        if (isMobile) {
            document.documentElement.classList.toggle('intro', false)
        }
    }, [isMobile])

    useEffect(() => {
        if (lenis) {
            if (scroll) {
                lenis.start()
                document.documentElement.classList.toggle('intro', false)
            } else {
                setTimeout(() => {
                    lenis?.stop()
                }, 0)
                document.documentElement.classList.toggle('intro', true)
            }
        }
    }, [lenis, scroll])

    useEffect(() => {
        if (!scroll) {
            document.documentElement.classList.toggle('intro', true)
        }
    }, [scroll])

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 1000)

        if (isMobile) {
            setScroll(true)
            setIntroOut(true)
        }

        return () => clearTimeout(timer)
    }, [isMobile, setIntroOut])

    const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        const target = e.currentTarget
        target.classList.forEach((value) => {
            if (value.includes('out')) {
                setScroll(true)
            }
            setIntroOut(true)
        })
    }

    return (
        <div
            className={clsx('wrapper', isLoaded && 'out')}
            onTransitionEnd={handleTransitionEnd}
        >
            <div className={clsx(isLoaded && 'relative')}>
                <h1 className={clsx('intro-text', isLoaded && 'show')}>ENTHUSIA 5.0</h1>
            </div>
        </div>
    )
}
