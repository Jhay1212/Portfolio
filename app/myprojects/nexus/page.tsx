// 'use client';
// import React from 'react'
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// const Page = () => {
//   const division ={x: 3, y: 3};
//   const totalAmount = division.x * division.y;
//   const len = totalAmount * 1.1;
//   const r = len / (Math.PI * 2);
//   const segAngle= (Math.PI *2 ) / len / 1.1

//   const Segment = () => {
//     const gs = [];
//     for(const i=0; i < totalAmount; i++){
//       const x  =  i % division.x;
//       const y = Math.floor(i / division.x);

//     }
//     return(
//       <mesh>
//       <meshBasicMaterial color="white" />
//       <cylinderGeometry args={[r, r, 1, 10,1 , true, 0, segAngle]} />
//       </mesh>
//     )
//   }
//   return (
//     <div className='w-screen h-screen'>
//       <div className="h-full  w-full flex justify-center items-center ">
//         <Canvas  camera={{ position: [0, 0, 5] }}>
//           <OrbitControls enableRotate={true} enablePan={true} enableDamping={true} enableZoom={true} />
//           <Segment />
//           </Canvas>
//       </div>
//     </div>
//   )
// }

// export default Page

import React from 'react'

const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page