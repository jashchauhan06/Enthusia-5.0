import { useEffect, useRef, useState } from 'react'
import Renderer from './renderer'
import Particles from './Particles'
import Arm from './Arm'
import './Hand.scss'

export default function Hand() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [renderer, setRenderer] = useState<Renderer | null>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        if (!canvasRef.current) return

        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        })

        const rendererInstance = new Renderer()
        rendererInstance.initialize(canvasRef.current)
        rendererInstance.animate()
        setRenderer(rendererInstance)

        return () => {
            // Cleanup if needed
        }
    }, [])

    return (
        <div className="canvas-container">
            <div className="container">
                <canvas ref={canvasRef}>
                    {renderer && (
                        <>
                            <Particles
                                renderer={renderer}
                                width={dimensions.width}
                                height={dimensions.height}
                                depth={500}
                                count={100}
                                size={150}
                            />
                            <Arm renderer={renderer} />
                        </>
                    )}
                </canvas>
            </div>
        </div>
    )
}
