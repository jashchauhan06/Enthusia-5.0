import { useState, useEffect, useCallback } from 'react'

interface Rect {
    top: number
    left: number
    width: number
    height: number
    bottom: number
    right: number
}

const initialRect: Rect = {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
}

export function useRect(): [(ref: HTMLElement | null) => void, Rect] {
    const [element, setElement] = useState<HTMLElement | null>(null)
    const [rect, setRect] = useState<Rect>(initialRect)

    const updateRect = useCallback(() => {
        if (!element) return

        const scrollY = window.scrollY || window.pageYOffset
        const boundingRect = element.getBoundingClientRect()

        setRect({
            top: boundingRect.top + scrollY,
            left: boundingRect.left,
            width: boundingRect.width,
            height: boundingRect.height,
            bottom: boundingRect.bottom + scrollY,
            right: boundingRect.right,
        })
    }, [element])

    useEffect(() => {
        if (!element) return

        updateRect()

        const resizeObserver = new ResizeObserver(updateRect)
        resizeObserver.observe(element)

        window.addEventListener('resize', updateRect)
        window.addEventListener('scroll', updateRect, { passive: true })

        return () => {
            resizeObserver.disconnect()
            window.removeEventListener('resize', updateRect)
            window.removeEventListener('scroll', updateRect)
        }
    }, [element, updateRect])

    return [setElement, rect]
}
