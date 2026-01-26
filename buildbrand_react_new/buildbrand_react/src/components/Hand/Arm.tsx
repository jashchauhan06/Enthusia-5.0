import { useEffect, useRef, useCallback } from 'react'
import {
    AmbientLight,
    Color,
    DirectionalLight,
    Euler,
    Group,
    MathUtils,
    Scene,
    Vector3
} from 'three'
import type Renderer from './renderer'
import { useScroll } from '@/contexts/LenisContext'
import { useMediaQuery } from '@/hooks'
import { mapRange } from '@/utils/maths'
import { steps } from './steps'
import { loadGLB } from './loadGLB'

const material = {
    color: '#b0b0b0',
    roughness: { min: 0, max: 1, value: 0.4 },
    metalness: { min: 0, max: 1, value: 1 },
    wireframe: false
}

const lights = {
    light1: { step: 1, value: [-200, 150, 50] as const },
    light2: { step: 1, value: [300, -100, 150] as const },
    light1Intensity: { min: 0, value: 1, max: 1 },
    light2Intensity: { min: 0, value: 1, max: 1 },
    lightsColor: '#ff98a2',
    ambientColor: '#0E0E0E'
}

interface ArmProps {
    renderer: Renderer
}

export default function Arm({ renderer }: ArmProps) {
    const isMobile = useMediaQuery('(max-width: 800px)')
    const parentRef = useRef<Group | null>(null)
    const groupRef = useRef<Group | null>(null)
    const rocketRef = useRef<Scene | null>(null)
    const offset = useRef(Math.random() * 10000)
    const thresholds = useRef<number[]>([0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000])

    const updateArmMaterial = useCallback((arm: Scene) => {
        if (arm) {
            const color = new Color(material.color)
            arm.traverse((node: any) => {
                if (node.isMesh) {
                    node.material.color = color
                    node.material.roughness = material.roughness.value
                    node.material.metalness = material.metalness.value
                    node.material.wireframe = material.wireframe
                    node.material.needsUpdate = true
                }
            })
        }
    }, [])

    useEffect(() => {
        const init = async () => {
            const gltf: any = await loadGLB('/buildbrand-app/models/Space_Station.glb')
            const rocket = gltf.scene.children[0]

            rocket.scale.set(1, 1, 1)
            updateArmMaterial(rocket)
            rocketRef.current = rocket

            const ambientLight1 = new AmbientLight(new Color(lights.ambientColor))

            const groupLight1 = new Group()
            groupLight1.position.set(...lights.light1.value)
            const directionalLight1 = new DirectionalLight(
                new Color(lights.lightsColor),
                lights.light1Intensity.value
            )

            const groupLight2 = new Group()
            groupLight2.position.set(...lights.light2.value)
            const directionalLight2 = new DirectionalLight(
                new Color(lights.lightsColor),
                lights.light2Intensity.value
            )

            groupLight1.add(directionalLight1)
            groupLight2.add(directionalLight2)

            parentRef.current = new Group()
            groupRef.current = new Group()

            groupRef.current.add(rocket)
            parentRef.current.add(groupRef.current)

            renderer?.scene?.add(ambientLight1)
            renderer?.scene?.add(groupLight1)
            renderer?.scene?.add(groupLight2)
            renderer?.scene?.add(parentRef.current)

            const speed = 1
            const rotationIntensity = 1
            const floatIntensity = 1
            const floatingRange = [-0.1, 0.1]

            const unsubscribe = renderer.onFrame((state) => {
                if (!parentRef.current) return

                const t = offset.current + state.clock.getElapsedTime()
                parentRef.current.rotation.x = (Math.cos((t / 4) * speed) / 8) * rotationIntensity
                parentRef.current.rotation.y = (Math.sin((t / 4) * speed) / 8) * rotationIntensity
                parentRef.current.rotation.z = (Math.sin((t / 4) * speed) / 20) * rotationIntensity

                let yPosition = Math.sin((t / 4) * speed) / 10
                yPosition = MathUtils.mapLinear(
                    yPosition,
                    -0.1,
                    0.1,
                    floatingRange[0],
                    floatingRange[1]
                )

                parentRef.current.position.y = yPosition * floatIntensity
            })

            return unsubscribe
        }

        let cleanup: (() => void) | undefined
        init().then(unsub => { cleanup = unsub })

        return () => {
            cleanup?.()
        }
    }, [renderer, updateArmMaterial])

    const onScroll = useCallback(({ scroll }: { scroll: number }) => {
        if (!groupRef.current) return

        const current = thresholds.current.findIndex((v) => scroll < v) - 1
        if (current < 0) return

        const start = thresholds.current[current]
        const end = thresholds.current[current + 1]
        const progress = mapRange(start, end, scroll, 0, 1)

        const from = steps[current]
        const to = steps[current + 1]

        if (!to || !from) return

        groupRef.current.visible = from?.type === to?.type

        const _scale = mapRange(0, 1, progress, from.scale, to.scale)
        const _position = new Vector3(
            renderer.viewport.width * mapRange(0, 1, progress, from.position[0], to.position[0]),
            renderer.viewport.height * mapRange(0, 1, progress, from.position[1], to.position[1]),
            0
        )
        const _rotation = new Euler().fromArray(
            [0, 1, 2].map((i) => mapRange(0, 1, progress, from.rotation[i], to.rotation[i])) as [number, number, number]
        )

        groupRef.current.scale.setScalar(renderer.viewport.height * _scale * (isMobile ? 0.7 : 1))
        groupRef.current.position.copy(_position)
        groupRef.current.rotation.copy(_rotation)
    }, [renderer, isMobile])

    useScroll(onScroll)

    return null
}
