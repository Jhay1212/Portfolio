'use client';
import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  useGSAP(() => {
    gsap.fromTo('.nav_item', { opacity: 0, scale: 0, transform: 'translateY(-100px)' }, { opacity: 1 , transform: 'translateY(0)', stagger: .5,  delay: 5.5,scale: 1, duration: 1 })
  }, [])
  return (
    <div className='w-min-screen h-14 bg-transparent text-white l'>
      <div className="w-full flex items-baseline justify-center mx-4 py-3">
        <h2><a href="/" className='logo montserrat-nav nav_item'>Logo</a></h2>
        <ul className="flex justiify-between items-center">
          <li className="nav_item montserrat-nav "><a href='/myprojects'>My Projects</a></li>
          <li className="nav_item montserrat-nav"><a href="/aboutme">About Me</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar