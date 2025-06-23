'use client';
import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
const page = () => {
  let division ={x: 3, y: 3};
  let totalAmount = division.x * division.y;
  let len = totalAmount * 1.1;
  let r = len / (Math.PI * 2);
  let segAngle= (Math.PI *2 ) / len / 1.1

  const Segment = () => {
    let gs = [];
    for(let i=0; i < totalAmount; i++){
      let x  =  i % division.x;
      let y = Math.floor(i / division.x);
      
    }
    return(
      <mesh>
      <meshBasicMaterial color="white" />
      <cylinderGeometry args={[r, r, 1, 10,1 , true, 0, segAngle]} />
      </mesh>
    )
  }
  return (
    <div className='w-screen h-screen'>
      <div className="h-full  w-full flex justify-center items-center ">
        <Canvas  camera={{ position: [0, 0, 5] }}>
          <OrbitControls enableRotate={true} enablePan={true} enableDamping={true} enableZoom={true} />
          <Segment />
          </Canvas>
      </div>
    </div>
  )
}

export default page