// components/sections/ServicesSection.tsx
// (Create this new file)

import React from 'react';
import { services } from '@/components/data/services';
import ServiceCard from '@/components/ui/ServiceCard';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import SectionTag from '../ui/SectionTag';
import ServiceCarousel from '../ui/ServiceCarousel';

// --- Define your icons ---
// You will need to add these SVGs to /public/images/icons/
const LeafIcon = () => (
  <Image 
    src="/images/icons/leaf.svg" // A white version of your leaf icon
    alt="" 
    width={16} 
    height={16} 
  />
);

// ---

const ServicesSection: React.FC = () => {
  return (
    <section 
      className="bg-green-600 text-white py-20 relative overflow-hidden"
      style={{
        // We apply the background image and pattern here
        backgroundImage: "url('/images/crop-pattern.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: '100% auto'
      }}
    >
      <div className="container mx-auto relative z-10 px-2 md:px-20">
        
        {/* All the interactive logic is now inside ServiceCarousel.
          We pass the static title, tag, and the server-rendered
          ServiceCard components as children.
        */}
        <ServiceCarousel
          tag={<SectionTag icon={<LeafIcon />}>Our Services</SectionTag>}
          title="Best Agriculture Services"
        >
          {/* These ServiceCard components are rendered ON THE SERVER
            and passed as children to the client component.
          */}
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </ServiceCarousel>

      </div>
    </section>
  );
};

export default ServicesSection;