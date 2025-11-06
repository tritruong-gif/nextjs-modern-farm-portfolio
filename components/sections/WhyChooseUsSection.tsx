// components/sections/WhyChooseUsSection.tsx
import React from 'react';
import Image from 'next/image';

// This component structure is highly tailored to the image layout
const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="bg-accent py-16 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10 p-4">
        <p className="text-primary font-semibold text-lg mb-2">Grow Naturally</p>
        <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-12">
          Choose What&apos;s Perfect For Your Field
        </h2>

        {/* Central Corn Image */}
        <div className="relative w-full max-w-md mx-auto mb-12 lg:mb-0">
          <Image
            src="/images/golden-corn.png" // Replace with actual image
            alt="Golden Corn"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Information Blocks - positioned relatively or with grid for responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Example Info Block 1 (Top Left in image) */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right p-4">
            <div className="bg-secondary p-3 rounded-full mb-3">
                {/* Icon Placeholder */}
                <Image src="/images/icons/hand-leaf.svg" alt="Organic" width={30} height={30} />
            </div>
            <h3 className="text-xl font-semibold text-dark-green mb-2">100% Organic</h3>
            <p className="text-gray-text max-w-xs">Naturally grown without chemicals.</p>
          </div>

          {/* Example Info Block 2 (Top Right in image) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-4">
            <div className="bg-secondary p-3 rounded-full mb-3">
                {/* Icon Placeholder */}
                <Image src="/images/icons/truck.svg" alt="Fast Delivery" width={30} height={30} />
            </div>
            <h3 className="text-xl font-semibold text-dark-green mb-2">Fast Delivery</h3>
            <p className="text-gray-text max-w-xs">Quick and fresh produce delivery.</p>
          </div>

          {/* Additional info blocks would go here, following the same pattern */}
          {/* For the layout in the image, you'd likely use a combination of absolute positioning
              and responsive grids for the info blocks relative to the corn image.
              For simplicity, I've shown a responsive grid approach here. */}
        </div>
      </div>

      {/* Background images/patterns (optional, but visible in image) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10"
           style={{ backgroundImage: "url('/images/pattern-dots.svg')" }}
      ></div>
    </section>
  );
};

export default WhyChooseUsSection;