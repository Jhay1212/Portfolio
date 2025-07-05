'use client';
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Your project data
  const slides = [
    {
      id: 1,
      image: Home,
      title: "Nexus Cloud Website",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, consequuntur? Doloremque dolorum voluptate ratione nisi ea, aperiam tempora rem atque eveniet, obcaecati modi distinctio officia impedit minus suscipit assumenda perferendis!"
    },
    {
      id: 2,
      image: EpHome,
      title: "EPHSM Platform",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, consequuntur? Doloremque dolorum voluptate ratione nisi ea, aperiam tempora rem atque eveniet, obcaecati modi distinctio officia impedit minus suscipit assumenda perferendis!"
    },
    {
      id: 3,
      image: Home,
      title: "Portfolio Website",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, consequuntur? Doloremque dolorum voluptate ratione nisi ea, aperiam tempora rem atque eveniet, obcaecati modi distinctio officia impedit minus suscipit assumenda perferendis!"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-screen h-screen overscroll-none z-10'>
       <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="flex justify-center w-full h-full relative z-20 top-[-20%]">
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center overflow-hidden">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${slides.length * 100}%`
            }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id} className="w-full flex-shrink-0 flex justify-center items-center px-8">
                <div className="slider h-3/5 w-3/4 text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">

                  {/* Image Container */}
                  <div className="relative w-full h-64 mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Title */}
                  <h2 className="text-white text-2xl font-bold mb-4">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="text-white text-sm leading-relaxed mb-6">
                    {slide.description}
                  </p>

                  {/* Action Button */}
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20 z-30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20 z-30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full border border-white/30 ${index === currentSlide
                ? 'bg-white w-8 h-2'
                : 'bg-white/40 hover:bg-white/60 w-2 h-2'
              }`}
          />
        ))}
      </div>

      {/* WebsiteShowCase Component */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <WebsiteShowCase />
      </div>
    </div>
  );
};

export default page;