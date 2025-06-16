'use client';
import { useGLTF } from '@react-three/drei';

import React from 'react'


const Andromeda = () => {
    const scene = useGLTF("/andromeda/scene.gltf");
  return (
    <primitive object={scene} scale={1} rotation={[0, 0, 0]} position={[0, 0, 0]} />
  )
}

export default Andromeda