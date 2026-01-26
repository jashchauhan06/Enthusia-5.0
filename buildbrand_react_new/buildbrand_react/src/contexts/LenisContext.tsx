import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { raf } from '@/utils/tempus'

gsap.registerPlugin(ScrollTrigger)

interface LenisContextType {
    lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })

export function LenisProvider({ children }: { children: ReactNode }) {
    const [lenis, setLenis] = useState<Lenis | null>(null)
    const lenisRef = useRef<Lenis | null>(null)
    const location = useLocation()
    const isContactPage = location.pathname === '/contact'

    useEffect(() => {
        // Don't initialize Lenis on contact page
        if (isContactPage) {
            if (lenisRef.current) {
                lenisRef.current.destroy()
                lenisRef.current = null
                setLenis(null)
            }
            return
        }

        // Merge rafs
        gsap.ticker.remove(gsap.updateRoot)
        raf.add((time?: number) => {
            gsap.updateRoot((time ?? 0) / 1000)
        }, 0)

        window.history.scrollRestoration = 'manual'
        window.scrollTo(0, 0)

        const lenisInstance = new Lenis()
        lenisRef.current = lenisInstance
        setLenis(lenisInstance)

        ScrollTrigger.defaults({ markers: false })

        // Subscribe to scroll for ScrollTrigger
        lenisInstance.on('scroll', ScrollTrigger.update)

        // RAF loop for Lenis
        const rafCallback = (time?: number) => {
            lenisInstance.raf(time ?? 0)
        }
        raf.add(rafCallback, 0)

        return () => {
            lenisInstance.destroy()
            raf.remove(rafCallback)
        }
    }, [isContactPage])

    useEffect(() => {
        if (lenis && !isContactPage) {
            ScrollTrigger.refresh()
            lenis.start()
        }
    }, [lenis, isContactPage])

    return (
        <LenisContext.Provider value={{ lenis }}>
            {children}
        </LenisContext.Provider>
    )
}

export function useLenis() {
    const context = useContext(LenisContext)
    return context.lenis
}

// Custom hook to subscribe to scroll events
export function useScroll(callback: (args: { scroll: number; limit: number; velocity: number; direction: number; progress: number }) => void) {
    const lenis = useLenis()

    useEffect(() => {
        if (!lenis) return

        lenis.on('scroll', callback)
        // @ts-ignore
        lenis.emit()

        return () => {
            lenis.off('scroll', callback)
        }
    }, [lenis, callback])
}
