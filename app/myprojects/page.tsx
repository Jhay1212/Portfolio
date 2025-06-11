'use client';
import React from 'react'
import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';

const page = () => {
  return (
    <div className='w-screen h-screen overscroll-none'>
              <Canvas camera={{ position: [0, 0, 5] }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <OrbitControls />
                {/* <Stars radius={50} depth={100} count={100}/> */}
                <Stars />
                </Canvas>
            
    </div>
  )
}

export default page