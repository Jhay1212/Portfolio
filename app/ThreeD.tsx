'use client';
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useMemo } from 'react'
import * as THREE from 'three'


const createCircleTexture = () => {
    const canvas: HTMLCanvasElement = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')

    // Create radial gradient for smooth circular star
    if (ctx) {
        // Safe to use ctx now
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'white');
        gradient.addColorStop(0.2, 'white');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 64, 64)

    } else {
        console.error("2D context is not supported or failed to initialize.");
    }

    const texture = new THREE.CanvasTexture(canvas)
    return texture
}

const CustomStars = () => {
    const numStars = 3000
    const circleTexture = useMemo(() => createCircleTexture(), [])

    const starGeometry = useMemo(() => {
        const positions = new Float32Array(numStars * 3)
        const colors = new Float32Array(numStars * 3)

        for (let i = 0; i < numStars; i++) {
            const i3 = i * 3
            positions[i3 + 0] = (Math.random() - 0.5) * 100
            positions[i3 + 1] = (Math.random() - 0.5) * 100
            positions[i3 + 2] = (Math.random() - 0.5) * 100

            const temperature = Math.random()
            if (temperature < 0.3) {
                colors[i3 + 0] = 1
                colors[i3 + 1] = Math.random() * 0.5
                colors[i3 + 2] = Math.random() * 0.5
            } else if (temperature < 0.7) {
                colors[i3 + 0] = 1
                colors[i3 + 1] = 1
                colors[i3 + 2] = Math.random() * 0.5
            } else {
                colors[i3 + 0] = Math.random() * 0.5
                colors[i3 + 1] = Math.random() * 0.5
                colors[i3 + 2] = 1
            }
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        return geometry
    }, [numStars])

    return (
        <points geometry={starGeometry}>
            <pointsMaterial
                map={circleTexture}
                size={0.5}
                transparent
                depthWrite={false}
                vertexColors
                alphaTest={0.1}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

const ThreeD = () => {
    return (
    <div className="w-full h-full absolute top-0 pointer-evente-none">

        <Canvas camera={{ position: [0, 0, 5] }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls autoRotate={true} enableRotate={true} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 50, 10]} />
            <Stars
                radius={100}
                depth={80}
                count={2500}
                factor={4}
                saturation={0}
                fade={true}
                speed={1}
            />
    
            <CustomStars />
            <ambientLight intensity={3} />
        </Canvas>

    </div>

    )
}

export default ThreeD