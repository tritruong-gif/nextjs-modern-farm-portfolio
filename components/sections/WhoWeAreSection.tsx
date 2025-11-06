// components/sections/WhoWeAreSection.tsx (NEW)

import React from 'react';
import Image from 'next/image';
import InfoItem from '@/components/ui/InfoItem'; // Import sub-component
import SectionTag from '../ui/SectionTag';

// Define leaf icon
const LeafIcon = () => (
  <Image 
    src="/images/icons/leaf.svg" // A white version of your leaf icon
    alt="" 
    width={16} 
    height={16} 
  />
);
const WhoWeAreSection: React.FC = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto px-2 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Column: Image + Stats Box */}
          <div className="w-full lg:w-1/2 relative">
            <Image
              src="/images/farmer.jpg" // Add this image to /public/images
              alt="Farmer checking orange tree"
              width={500}
              height={500}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            {/* Stats Box Overlay */}
            <div className="absolute -bottom-8 -right-4 bg-yellow-300 p-6 rounded-xl shadow-md w-[200px]">
              <p className="text-4xl font-bold text-dark-green mb-1">
                * 435+
              </p>
              <p className="text-dark-green font-semibold">
                Growth Tons of Harvest
              </p>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-10 mt-12 lg:mt-0">
            <SectionTag icon={<LeafIcon />} className="mb-3">
              Who We Are
            </SectionTag>
            <h2 className="text-4xl font-bold text-dark-green leading-tight mb-6">
              Currently we are growing and selling organic food
            </h2>
            <p className="text-gray-text mb-8">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injected humour, or randomised words
              which don&apos;t look even.
            </p>
            {/* Info Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <InfoItem
                iconSrc="/images/icons/frame.svg"
                title="Eco Farms Worldwide"
                description="ages of lorem ipsum available majority have suffered."
              />
              <InfoItem
                iconSrc="/images/icons/lawn-mower.svg"
                title="Special Equipment"
                description="ages of lorem ipsum available majority have suffered."
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;