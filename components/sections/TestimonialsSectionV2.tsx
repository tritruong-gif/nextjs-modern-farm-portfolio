import React from 'react';
import { testimonials } from '@/components/data/testimonials';
// import TestimonialCard from '@/components/ui/TestimonialCard';
import TestimonialCard from '@/components/ui/TestimonialCardV2';
// import SectionTag from '@/components/ui/SectionTag';
import SectionTag from '@/components/ui/SectionTagV2';
// import ServiceCarousel from '@/components/ui/ServiceCarousel';
import ServiceCarousel from '@/components/ui/ServiceCarouselV2';
import CustomImage from '../ui/CustomImage';

const LeafIcon = () => (
  <CustomImage src="/images/icons/leaf.svg" alt="" width={16} height={16} />
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-light-cream text-dark-green py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ServiceCarousel
          theme="light"
          tag={
            <SectionTag 
              icon={<LeafIcon />} 
              className="text-dark-green bg-white"
            >
              What Our Client Say
            </SectionTag>
          }
          title="Trusted By Our Client"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </ServiceCarousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;