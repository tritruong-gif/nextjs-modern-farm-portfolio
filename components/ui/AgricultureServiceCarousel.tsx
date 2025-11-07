// components/ui/ServiceCarousel.tsx
// (MODIFIED)

"use client"; 

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React, { useState } from 'react';

interface ServiceCarouselProps {
  tag: React.ReactNode;
  title: string;
  children: React.ReactNode;
  theme?: 'dark' | 'light';
  itemsPerPage?: number; // <-- ADDED THIS PROP
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ 
  tag, 
  title, 
  children, 
  theme = 'dark',
  itemsPerPage = 3 // <-- Default to 3
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = React.Children.toArray(children);
  const totalItems = items.length;
  
  // Calculate total "pages" or "slides"
  const totalSlides = Math.ceil(totalItems / itemsPerPage);
  const maxIndex = totalSlides - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  // --- Conditional Styles (unchanged) ---
  const titleColor = theme === 'dark' ? 'text-white' : 'text-dark-green';
  const buttonStyles = theme === 'dark' 
    ? 'border-white border-opacity-30 text-white hover:bg-white hover:text-dark-green'
    : 'border-gray-300 text-dark-green hover:bg-dark-green hover:text-white';
  
  // --- Dot Styles (NEW) ---
  const dotStyles = theme === 'dark' ? 'bg-white' : 'bg-gray-400';
  const activeDotStyles = theme === 'dark' ? 'bg-white scale-125' : 'bg-brand-yellow scale-125';

  return (
    <>
      {/* Header (unchanged) */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <div className="mb-3">{tag}</div>
          <h2 className={`text-4xl font-bold ${titleColor}`}> 
            {title}
          </h2>
        </div>
        
        <div className="hidden md:flex items-center gap-3 mt-4 md:mt-0">
          <button 
            aria-label="Previous" 
            className={`w-12 h-12 flex items-center justify-center rounded-lg border transition-colors
                       disabled:opacity-40 disabled:cursor-not-allowed ${buttonStyles}`}
            onClick={handlePrev}
            disabled={isPrevDisabled}
          >
            <ChevronLeftIcon className="hover:text-amber-300 size-10" />
          </button>
          <button 
            aria-label="Next" 
            className={`w-12 h-12 flex items-center justify-center rounded-lg border transition-colors
                       disabled:opacity-40 disabled:cursor-not-allowed ${buttonStyles}`}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <ChevronRightIcon className="hover:text-amber-300 size-10" />
          </button>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="overflow-hidden">
        <div 
          className="flex -mx-4 transition-transform duration-500 ease-in-out" // Added -mx-4 for padding compensation
          style={{ 
            // This logic works for any number of items per page
            transform: `translateX(-${currentIndex * (100 / (totalSlides || 1))}%)`,
          }}
        >
          {items.map((child, index) => (
            // The item now correctly takes its width based on the itemsPerPage prop
            <div 
              key={index} 
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerPage}%`, padding: '0 1rem' }} // Use padding for gap
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      
      {/* Carousel Dots (NEW) */}
      <div className="flex justify-center gap-2 mt-12">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? activeDotStyles : `${dotStyles} opacity-30`
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ServiceCarousel;