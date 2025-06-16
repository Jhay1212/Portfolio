'use client';
import React, { Suspense } from 'react'

import { Canvas } from   '@react-three/fiber'
import { Stars, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import BlackHole from './components/BlackHole';
import Andromeda from './components/Andromeda';
const ThreeD = () => {
    return (<div className="w-full h-full absolute top-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls autoRotate={true}  enablePan={true} enableDamping={true} enableRotate={true}/>
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
            <Stars
            radius={100}
            count={2500}
            depth={80}
            factor={3}
            saturation={1}
            fade={true}
            speed={2}
            />
            <ambientLight intensity={3} />
                <Andromeda />
        </Canvas>
    </div>

  )
}

export default ThreeD