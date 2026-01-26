import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type Renderer from './renderer'
// @ts-ignore
import vertexShader from './particles/vertex.glsl'
// @ts-ignore
import fragmentShader from './particles/fragment.glsl'

interface ParticlesProps {
    renderer: Renderer
    width: number
    height: number
    depth: number
    count: number
    size: number
}

export default function Particles({ renderer, width, height, depth, count, size }: ParticlesProps) {
    const meshRef = useRef<THREE.Points | null>(null)

    useEffect(() => {
        if (!renderer) return

        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(count * 3)
        const sizes = new Float32Array(count)

        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            positions[i3] = (Math.random() - 0.5) * width
            positions[i3 + 1] = (Math.random() - 0.5) * height
            positions[i3 + 2] = (Math.random() - 0.5) * depth

            sizes[i] = Math.random() * size
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
            },
            transparent: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
        })

        const mesh = new THREE.Points(geometry, material)
        meshRef.current = mesh
        renderer.scene?.add(mesh)

        const unsubscribe = renderer.onFrame((state) => {
            material.uniforms.uTime.value = state.clock.getElapsedTime()
        })

        return () => {
            unsubscribe?.()
            renderer.scene?.remove(mesh)
            geometry.dispose()
            material.dispose()
        }
    }, [renderer, width, height, depth, count, size])

    return null
}
