// components/sections/PartnerLogosSection.tsx
// (Create this new file)

import React from 'react';
import Image from 'next/image';

// --- Define your logo assets ---
// You will need to add these logo files to /public/images/logos/
const partnerLogos = [
  { id: 1, src: '/images/partners/organic-rice.png', alt: 'Organic Rice' },
  { id: 2, src: '/images/partners/since-1926-farm.png', alt: 'Farm Since 1926' },
  { id: 3, src: '/images/partners/farm-fresh.png', alt: 'Farm Fresh' },
  { id: 4, src: '/images/partners/food.png', alt: 'Food Logo' },
  { id: 5, src: '/images/partners/eco-product.png', alt: 'Eco Product' },
  { id: 6, src: '/images/partners/tractor-farm-fresh.png', alt: 'Tractor Farm Fresh' },
];

const PartnerLogosSection: React.FC = () => {
  return (
    <section className="bg-[#F9F9F7] py-20 overflow-hidden">
      <div className="container mx-auto relative z-10 px-2 md:px-20">
        <div className="relative flex">
          {/* We duplicate the content to create a seamless loop */}
          {/* We'll slow down the animation a bit for logos */}
          <div className="flex animate-marquee" style={{ animationDuration: '50s' }}>
            {partnerLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="shrink-0 w-64 flex justify-center items-center mx-10"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150} // Adjust width as needed
                  height={50}  // Adjust height as needed
                  className="object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
          {/* The second copy for the loop */}
          <div className="flex animate-marquee" style={{ animationDuration: '50s' }} aria-hidden="true">
            {partnerLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="shrink-0 w-64 flex justify-center items-center mx-10"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  className="object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogosSection;