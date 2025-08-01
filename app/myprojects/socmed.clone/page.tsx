'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

import Home from "@/app/assets/socmed/home.png";
import Register from "@/app/assets/socmed/register.png"
import Login from "@/app/assets/socmed/login.png";
import Profile from "@/app/assets/socmed/profile.png"

interface SlideData {
  id: number;
  images: StaticImageData;
  description: string;
}

const slides: SlideData[] = [
  { id: 1, images: Home, description: "Socmed Homepage" },
  { id: 2, images: Register, description: "Socmed  Lesson Page" },
  { id: 3, images: Login, description: "Socmed Login and Authentication Page" },
  { id: 4, images: Profile, description: "Socmed Profile" },

];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  //   alert('click')
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  // };

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // change slide every 4 seconds
  
    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <main className="h-screen w-screen   text-white flex items-center justify-center translate-y-[-50px] z-50">
      <div className="relative w-[80%] max-w-5xl overflow-hidden border border-white rounded-xl shadow-lg">
        {/* Image */}
        <Image
          src={slides[currentIndex].images}
          alt={slides[currentIndex].description}
          className="w-full object-cover"
        />

        <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 w-full text-center py-2 text-sm">
          {slides[currentIndex].description}
        </div>

        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50
           bg-white bg-opacity-30 hover:bg-opacity-70 text-black p-2 rounded-full "
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-999 right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-70 text-black p-2 rounded-full"
        >
         &gt;
        </button> */}
      </div>
    </main>
  );
};

export default Page;
