import { useEffect } from 'react'
import { raf } from '@/utils/tempus'

export function useFrame(callback: (time?: number, deltaTime?: number) => void) {
    useEffect(() => {
        raf.add(callback, 0)

        return () => {
            raf.remove(callback)
        }
    }, [callback])
}
