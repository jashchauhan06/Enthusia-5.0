import { useEffect, useRef, useState } from 'react'
import { useLenis } from '@/contexts/LenisContext'
import './Scrollbar.scss'

export default function Scrollbar() {
    const lenis = useLenis()
    const thumbRef = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (!lenis) return

        const handleScroll = ({ progress }: { progress: number }) => {
            setProgress(progress)
        }

        lenis.on('scroll', handleScroll)

        return () => {
            lenis.off('scroll', handleScroll)
        }
    }, [lenis])

    useEffect(() => {
        if (thumbRef.current) {
            thumbRef.current.style.transform = `scaleY(${progress})`
        }
    }, [progress])

    return (
        <div className="scrollbar">
            <div className="track">
                <div ref={thumbRef} className="thumb" />
            </div>
        </div>
    )
}
