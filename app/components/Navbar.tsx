'use client';
import React from 'react'
import {Canvas} from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei';

const Navbar = () => {
  return (
    <div className='w-min-screen h-14 bg-transparent text-white l'>
      <div className="w-full flex items-baseline justify-center mx-4 py-3">
        <h2>LOGO</h2>
        <ul className="flex justiify-between items-center">
          <li className="nav_item"><a href='/myprojects'>My Projects</a></li>
          <li className="nav_item">About Me</li>
          <li className="nav_item">Contacts</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar