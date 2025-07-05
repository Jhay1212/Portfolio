'use client';
import { useThree } from "@react-three/fiber";
import Navbar from './components/Navbar'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
const page = () => {
  useGSAP(() => {
    const text = new SplitType(".name-head", { types: "chars" });
    gsap.fromTo('.char', { opacity: 0, stagger: 0.05, scale:5 }, { scale: 1, opacity: 1, stagger: .3,duration: 1 })
  }, [])
  const ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(ref.current, { opacity: 0, scale: 0 }, { opacity: 1,  delay: 5.5,scale: 1, duration: 1 })
  })

  return (
    <div className='h-screen w-screen overflow-x-hiddenmd:overflow-hidden'>
      <header className="relative w-full h-full z-100">
        <div className="absolute  top-0 left-0  z-10 flex wrapper justify-center items-center w-full h-full uppercase" >
          <div className="flex flex-col justify-center text-center">
            <h1 className='name-head font-thin  pb-3 mb-3 tracking-[2vw] text-center  text-5xl text-blue-500 leading-[10rem]'>jose Alfonso RIvera</h1>
            <div className="info" ref={ref}>
            <h2 className='text-center mb-3 '>Full Stack Web Developer/Software Developer</h2>
            <small className="text-white py-2 font-bold tracking-[3px]">Email: <a href="mailto:rjhay1070@gmail.com">rjhay1070@gmail.com</a></small>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default page