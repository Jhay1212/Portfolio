'use client';
import { useGLTF } from "@react-three/drei";
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
