import { useEffect, useRef, RefObject, useState } from 'react'

interface IntersectionOptions {
    threshold?: number
    rootMargin?: string
}

export function useIntersection(
    options: IntersectionOptions = {}
): [RefObject<HTMLElement | null>, boolean] {
    const ref = useRef<HTMLElement>(null)
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true)
                }
            },
            {
                threshold: options.threshold ?? 0,
                rootMargin: options.rootMargin ?? '0px',
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [options.threshold, options.rootMargin])

    return [ref, isIntersecting]
}
