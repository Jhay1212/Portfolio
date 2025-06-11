'use client';
import React from 'react'
import Navbar from './components/Navbar'
import { Canvas } from "@react-three/fiber";
import { Stars, PerspectiveCamera, OrbitControls } from "@react-three/drei";
const page = () => {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <nav className="sticky top-0 left-0 bg-">
        <Navbar />
      </nav>
      <header className="relative w-full h-full">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls />
          {/* <Stars radius={50} depth={100} count={100}/> */}
          <Stars />
          </Canvas>
      
        <div className="absolute  top-0 left-0  z-10 flex wrapper justify-center items-center w-full h-full uppercase">
          <div className="flex flex-col justify-center text-center">

          <h1 className='font-thin pb-3 mb-3 tracking-[2vw] text-center  text-5xl text-blue-500 leading-[10rem]'>jose Alfonso RIvera</h1>
          <h2 className='text-center mb-3 '>Full Stack Web Developer/Software Developer</h2>
          <small className="text-white py-2 font-bold">Email: <a href="mailto:rjhay1070@gmail.com">rjhay1070@gmail.com</a></small>
          </div>
        </div>

      </header>
    </div>
  )
}

export default page