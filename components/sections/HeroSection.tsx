// components/sections/HeroSection.tsx
'use client'; // This component MUST be a client component for state and effects

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';

// --- Define your hero images here ---
// Make sure these images exist in /public/images/
const heroImages = [
  '/images/hero-bg-1.jpg', // The one from the screenshot
  '/images/hero-bg-2.jpg', // A second image
  '/images/hero-bg-3.jpg', // A third image
];

// --- Define your button icon ---
const ArrowRightIcon = () => <Image src="/images/icons/arrow.svg" alt="" width={16} height={16} />;

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // This effect hook sets up the interval for the slider
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section 
      className="relative h-screen min-h-[700px] flex items-center text-white overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Farm background"
            layout="fill"
            objectFit="cover"
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0} // Load the first image quickly
          />
        ))}
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Static Text Content (Stays in place) */}
      <div className="container mx-auto relative z-20 p-4 text-left">
        <span className="inline-block bg-white/0 border border-white text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
          BELIEVE IN QUALITY
        </span>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Quality Trust: <br />
          Direct to the Farm
        </h1>
        <p className="text-lg md:text-xl max-w-lg mb-8 opacity-90">
          We all need a little space to grow. Give yourself the space you need to find your inner you.
        </p>
        
        {/* Using our Reusable Button Component */}
        <Button 
          href="/contact" 
          variant="secondary" // This is the 'white' variant
          size="md"
          icon={<ArrowRightIcon />} // Pass the icon component
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;