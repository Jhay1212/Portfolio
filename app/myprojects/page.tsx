'use client';
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';
import Navbar from '../components/Navbar';
import WebsiteShowCase from '../components/WebsiteShowCase';
import Home from '../assets/nexus/home.png';
import Link from 'next/link';
import Image from 'next/image';
// import {promises as ps} from "fs";
//  async function Projects() {
//     const file = ps.readFile(process.cwd() + '/public/constants.json', 'utf-8');
//     const data = JSON.parse(await file);

//  return (
//    <h2>{data}</h2>
//  )
// }
const page = () => {
  return (
    <div className='w-screen h-screen overscroll-none'>
      <div className=" w-full  h-full flex justify-center items-center">

        <div className="flex h-[80%]  gap-2      w-full  max-auto justify-center md:justify-around items-center">
          <Link href="/myprojects/nexus">
          <div className="w-full container mx-auto  h-1/2" >

            <Image src={Home} alt="" className='block' />
            
          </div>
          </Link>
          <div className="w-full container mx-auto  h-1/2" >

            <Image src={Home} alt="" className='block' />
          </div>

          <div className="w-full container mx-auto  h-1/2" >

            <Image src={Home} alt="" className='block' />
          </div>


        </div>
      </div>


    </div>
  )
}

export default page