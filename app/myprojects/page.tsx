'use client';
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';
import Navbar from '../components/Navbar';
import WebsiteShowCase from '../components/WebsiteShowCase';
import Home from '../assets/nexus/home.png';
import EpHome from '../assets/ephsm/home.jpg';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import "../assets/projects.main.css";
const page = () => {
  const quantity = 3;
  return (
    <div className='w-screen h-screen overscroll-none z-10'>
    <div className="flex justify-center w-full h-full relative">
      <div className="slider h-3/5 w-3/4 text-center">
        <Image src={Home} alt='nexus homepage'/>
        <h2>Nexus Cloud Website</h2>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, consequuntur? Doloremque dolorum voluptate ratione nisi ea, aperiam tempora rem atque eveniet, obcaecati modi distinctio officia impedit minus suscipit assumenda perferendis!</p>
      </div>
        <div className="slider h-3/5 w-3/4 text-center">
          <Image src={Home} alt='nexus homepage' />
          <h2>Nexus Cloud Website</h2>
          <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, consequuntur? Doloremque dolorum voluptate ratione nisi ea, aperiam tempora rem atque eveniet, obcaecati modi distinctio officia impedit minus suscipit assumenda perferendis!</p>
        </div>

      
    </div>

    </div>
  )
}

export default page