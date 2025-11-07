// components/sections/ServicesSection.tsx
// (MODIFIED)

import React from 'react';
import { services } from '@/components/data/services'; // Assumed to exist
import ServiceCarousel from '@/components/ui/AgricultureServiceCarousel';
import HomePageServiceCard from '@/components/ui/AgricultureServiceCard'; // <-- The NEW card
import SectionTag from '@/components/ui/SectionTag';
import CustomImage from '../ui/CustomImage';

// Icon for the SectionTag
const LeafIcon = () => (
  <CustomImage src="/images/icons/leaf.svg" alt="" width={16} height={16} />
);

const ServicesSection: React.FC = () => {
  // To make the 4-card carousel work, let's assume you have at least 4 services.
  // If you have more (e.g., 8), the carousel will have 2 pages.
  const allServices = services; // Pass all your services

  return (
    // Swapped to light-cream background
    <section className="bg-light-cream py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <ServiceCarousel
          theme="light" // <-- Use light theme
          itemsPerPage={4} // <-- Show 4 cards
          tag={
            <SectionTag 
              icon={<LeafIcon />} 
              className="text-dark-green bg-white" // <-- Light theme tag
            >
              Our Services
            </SectionTag>
          }
          title="Best Agriculture Services"
        >
          {/* Map over services and pass to the new HomePageServiceCard */}
          {allServices.map((service, index) => (
            <HomePageServiceCard 
              key={`${service.id}-${index}`} 
              service={service} 
            />
          ))}
        </ServiceCarousel>
      </div>
    </section>
  );
};

export default ServicesSection;