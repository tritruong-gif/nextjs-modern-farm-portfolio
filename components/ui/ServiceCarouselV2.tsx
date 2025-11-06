"use client"; 

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React, { useState } from 'react';

interface ServiceCarouselProps {
  tag: React.ReactNode;
  title: string;
  children: React.ReactNode;
  theme?: 'dark' | 'light';
}

const ServiceCarousel: React.FC<ServiceCarouselProps> = ({ 
  tag, 
  title, 
  children, 
  theme = 'dark' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; 
  const services = React.Children.toArray(children);
  const totalItems = services.length;
  const maxIndex = totalItems > itemsPerPage ? totalItems - itemsPerPage : 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  const titleColor = theme === 'dark' ? 'text-white' : 'text-dark-green';
  const buttonStyles = theme === 'dark' 
    ? 'border-white border-opacity-30 text-white hover:bg-white hover:text-dark-green'
    : 'border-gray-300 text-dark-green hover:bg-dark-green hover:text-white';

  return (
    <>
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
          ><ChevronLeftIcon className="hover:text-amber-300 size-10" />
          
          </button>
          <button 
            aria-label="Next" 
            className={`w-12 h-12 flex items-center justify-center rounded-lg border transition-colors
                       disabled:opacity-40 disabled:cursor-not-allowed ${buttonStyles}`}
            onClick={handleNext}
            disabled={isNextDisabled}
          ><ChevronRightIcon className="hover:text-amber-300 size-10" />
                    
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {services.map((child, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-full lg:w-1/3 px-4"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCarousel;