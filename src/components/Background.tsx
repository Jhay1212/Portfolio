import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { Mesh } from 'three';

const RotatingBox: React.FC = () => {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color="#ff0000" />
    </mesh>
  );
};

const Scene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 50 }} style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls />
      <Sparkles size={10} count={100} speed={0.2} scale={[30, 30, 30]} />
      <RotatingBox />
    </Canvas>
  );
};

export default Scene;
