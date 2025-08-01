'use client';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

import Home from "@/app/assets/nexus/home.png";
import About from "@/app/assets/nexus/about.png";
import Course from "@/app/assets/nexus/course.png";
import LightCourse from "@/app/assets/nexus/light-courses.png";
import Process from "@/app/assets/nexus/process.png";
import LIGHTHOME from "@/app/assets/nexus/light-home.png";

interface SlideData {
  id: number;
  images: StaticImageData;
  description: string;
}

const slides: SlideData[] = [
  { id: 1, images: Home, description: "Nexus Homepage" },
  { id: 2, images: About, description: "About Page" },
  { id: 3, images: Course, description: "Course Page" },
  { id: 4, images: LightCourse, description: "Light Courses" },
  { id: 5, images: Process, description: "Process Page" },
  { id: 6, images: LIGHTHOME, description: "Light Home Page" },
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

      <div className="relative w-[80%] max-w-7xl overflow-hidden border border-white rounded-xl shadow-lg">
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
  className="absolute z-50 left-4 top-1/2 transform -translate-y-1/2 
             bg-black bg-opacity-30 hover:bg-opacity-70 text-white p-2 rounded-full"
>
  &lt;
</button>
<button
  onClick={nextSlide}
  className="absolute z-50 right-4 top-1/2 transform -translate-y-1/2 
             bg-white bg-opacity-30 hover:bg-opacity-70 text-black p-2 rounded-full"
>
  &gt;
</button> */}
      </div>
    </main>
  );
};

export default Page;
