'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import Home from '../assets/nexus/home.png';
import SocMedHome from '../assets/socmed/home.png';
import EpHome from '../assets/ephsm/home.jpg';
import PortFolioHome from '../assets/portfolio/portfolio-home.png';
import '../assets/projects.main.css';

interface SlideData {
  id: number;
  image: StaticImageData;
  title: string;
  link: string;
  description: string;
}

const Page: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Project data with proper typing
  const slides: SlideData[] = [
    {
      id: 1,
      image: Home,
      title: 'Nexus Cloud Website',
      link: 'https://github.com/JesnerPerillo/NexusCloud-1',
      description: 'Created using React and ExpressJS. Built for the company of my ojt in web development.'
    },
    {
      id: 2,
      image: EpHome,
      link: 'https://github.com/Jhay1212/Philippines-History-Supplementary-Module',
      title: 'EPHSM Platform',
      description: 'A E-learning module platform for Philippine History. It has a user authentication system, post creation and management, and a like and comment system and interactive learning that includes pictures games and videos of Philippine History.'
    },
    {
      id: 3,
      image: PortFolioHome,
      title: 'Portfolio Website',
      description: 'My portfolio website. Created using NextJS with GSAP and Tailwindcss!',
      link: 'https://github.com/Jhay1212/Portfolio'
    },
    {
      id: 4,
      image: SocMedHome,
      title: 'Social Media Clone Website',
      description: 'A social media website clone developed using Django and ReactJS. It has a user authentication system, post creation and management, and a like and comment system.',
      link: 'https://github.com/Jhay1212/SocMed'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="w-screen h-screen overflow-hidden relative  translate-y-[-50px] md:translate-y-0 z-50 ">

      {/* Main Content */}
      <div className="flex justify-center items-center w-full h-full pt-16 pb-20 px-2 sm:px-4 lg:px-8">
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-full flex items-center justify-center">

          {/* Slides Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out w-full touch-pan-y"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${slides.length * 100}%`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 flex justify-center items-center px-1 sm:px-2 lg:px-4"
              >
                <div className="slider w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl border border-white/20">

                  {/* Image Container */}
                  <div className="relative w-full h-36 xs:h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 mb-3 sm:mb-4 lg:mb-6 overflow-hidden rounded-lg sm:rounded-xl">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                      sizes="(max-width: 375px) 300px, (max-width: 640px) 400px, (max-width: 768px) 500px, (max-width: 1024px) 600px, 800px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Title */}
                  <h2 className="text-white text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 text-center leading-tight">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="text-white/90 text-xs xs:text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 lg:mb-6 text-center px-1 sm:px-2 line-clamp-3 sm:line-clamp-none">
                    {slide.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    <Link
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 xs:px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent text-xs xs:text-sm sm:text-base touch-manipulation"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-1 md:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full hover:bg-white/30 active:bg-white/40 transition-all duration-300 border border-white/20 z-30 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-1 md:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full hover:bg-white/30 active:bg-white/40 transition-all duration-300 border border-white/20 z-30 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 touch-manipulation ${index === currentSlide
                ? 'bg-white w-4 sm:w-6 lg:w-8 h-1.5 sm:h-2'
                : 'bg-white/40 hover:bg-white/60 active:bg-white/80 w-1.5 sm:w-2 h-1.5 sm:h-2'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Swipe Instruction for Mobile */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 sm:hidden">
        <p className="text-white/60 text-xs text-center">
          Swipe left or right to navigate
        </p>
      </div>

      {/* Empty div for potential WebsiteShowCase component */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        {/* WebsiteShowCase Component can be added here */}
      </div>
    </div>
  );
};

export default Page;