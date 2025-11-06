// components/sections/WhatWeDoSection.tsx
// (Create this new file)

import React from 'react';
import Image from 'next/image';
import SectionTag from '@/components/ui/SectionTag'; // Reusable tag
import CircularProgress from '@/components/ui/CircularProgress'; // New component

// --- Define your icon ---
const LeafIcon = () => (
  <Image src="/images/icons/leaf.svg" alt="" width={16} height={16} />
);

const WhatWeDoSection: React.FC = () => {
  return (
    // This section uses the light-cream background
    <section className="bg-[#F9F9F7] py-20 px-4">
      <div className="container mx-auto  relative z-10 px-2 md:px-20">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/what-we-do-farmer.jpg" // Add this image
              alt="Farmer looking at tablet in a field"
              width={600}
              height={500}
              className="rounded-l-2xl w-full h-auto object-cover"
            />
          </div>
          
          {/* Right Column: Content Card */}
          <div 
            className="w-full lg:w-1/2 bg-[#EDDD5E] rounded-r-2xl p-10 lg:p-8 relative overflow-hidden"
            // This adds the faint barn background image
            style={{
              backgroundImage: "url('/images/barn-watermark.png')", // Add this image
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom right',
              backgroundSize: '60% auto',
            }}
          >
            {/* Tag */}
            <SectionTag 
              icon={<LeafIcon />} 
              className="mb-4 text-[#3A4D39] bg-white" // Light theme for the tag
            >
              What We Do
            </SectionTag>

            {/* Title */}
            <h2 className="text-4xl font-bold text-[#3A4D39] leading-tight mb-6">
              Healthy life with fresh products
            </h2>

            {/* Description */}
            <p className="text-[#3A4D39] opacity-80 mb-10">
              There are many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which don&apos;t look even.
            </p>

            {/* Stats */}
            <div className="flex items-start gap-8">
              <CircularProgress 
                percentage={90} 
                label="Eco Farms Worldwide" 
              />
              <CircularProgress 
                percentage={78} 
                label="Special Equipment" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;