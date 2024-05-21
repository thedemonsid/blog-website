"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Carouselcompo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slides = [
    'New series announcement',
    'Another Announcement',
    'Yet another one',
    'This weekend on vdsidously',
  ];
  const backgrounds = [
    'bg-gradient-to-l from-gray-700 via-gray-500 to-red-400',
    'bg-gradient-to-l from-gray-400 via-gray-700 to-gray-800',
    'bg-gradient-to-l from-gray-800 via-red-400 to-gray-800',
    'bg-gradient-to-l from-gray-400 via-red-400 to-gray-700',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((currentIndex + 1) % slides.length);
      }
    }, 3000); // Change the interval duration as desired (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <div
      className="relative w-full overflow-hidden border-2 border-yellow-400 rounded-md h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex flex-col items-center justify-center w-full h-full text-yellow-200 transition-transform duration-700 transform scale-100 ${backgrounds[currentIndex]}`}
        style={{ transition: 'transform 0.7s, background 0.7s' }}
      >
        <Link  className="mb-4 text-3xl text-center transition-transform transform sm:text-6xl font-cool hover:scale-105" href="/blogs" >
         
            {slides[currentIndex]}
          
        </Link>
      </div>
    </div>
  );
}

export default Carouselcompo;
