'use client';
import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
const Navbar: React.FC = () => {
  useGSAP(() => {
    gsap.fromTo('.nav_item', { opacity: 0, scale: 0, transform: 'translateY(-100px)' },
      { opacity: 1, transform: 'translateY(0)', stagger: .5, delay: 4.5, scale: 1, duration: 1 })
  }, [])
  return (
    <div className='w-min-screen h-14 bg-transparent text-white l'>
      <div className="w-full flex items-baseline justify-center mx-4 py-3">
        <h2>
          <Link href="/" className='logo montserrat-nav nav_item'>
            <Image src={Logo} alt="logo" className='w-30 transform translate-y-[-50px]' />
          </Link>
        </h2>
        <ul className="flex justiify-between items-center">
          <li className="nav_item montserrat-nav px-2 ">
            <Link href='/myprojects'>
              My Projects
            </Link>
          </li>
          <li className="nav_item montserrat-nav">
            <Link href="/aboutme">
              About Me
            </Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar