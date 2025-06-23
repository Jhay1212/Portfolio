'use client';
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
const BlackHole = () => {
  const { scene } = useGLTF("/scene.gltf");
  return (
    <primitive
      object={scene}
      scale={0.5}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
    />
  );
};

export default BlackHole;
