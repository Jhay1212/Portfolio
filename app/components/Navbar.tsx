'use client';
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
const Navbar: React.FC = () => {
  useGSAP(() => {
    gsap.fromTo('.nav_item', { opacity: 0, scale: 0, transform: 'translateY(-100px)' },
      { opacity: 1, transform: 'translateY(0)', stagger: .5, delay: 4.5, scale: 1, duration: 1 })
  }, [])
  return (
    <div className='translate-x-[-10px] w-min-screen h-14 bg-transparent text-white pt-5 '>
      <div className="w-full flex items-baseline justify-center mx-4 py-3">

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