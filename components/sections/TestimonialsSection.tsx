// components/sections/TestimonialsSection.tsx
// (Create this new file)

import React from 'react';
import { testimonials } from '@/components/data/testimonials';
import TestimonialCard from '@/components/ui/TestimonialCard';
import SectionTag from '@/components/ui/SectionTag';
import ServiceCarousel from '@/components/ui/ServiceCarousel'; // <-- Reusing this!
import Image from 'next/image';

// --- Define your icon ---
const LeafIcon = () => (
  <Image src="/images/icons/leaf.svg" alt="" width={16} height={16} />
);

const TestimonialsSection: React.FC = () => {
  return (
    // This section uses the light-cream background
    <section className="bg-[#F9F9F7] text-dark-green py-20 overflow-hidden">
      <div className="container mx-auto relative z-10 px-2 md:px-20">
        
        {/* We reuse ServiceCarousel perfectly.
          It doesn't care WHAT the children are, only how to slide them.
        */}
        <ServiceCarousel
        theme="light"
          tag={
            <SectionTag 
              icon={<LeafIcon />} 
              className="text-green-800 bg-white" // Different style for this tag
            >
              Testimonial
            </SectionTag>
          }
          title="What Our Client Say"
        >
          {/* These TestimonialCard components are rendered ON THE SERVER
            and passed as children to the client carousel.
          */}
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </ServiceCarousel>

      </div>
    </section>
  );
};

export default TestimonialsSection;