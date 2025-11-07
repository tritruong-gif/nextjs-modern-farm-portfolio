// components/sections/AgricultureMattersSection.tsx
import React from 'react';
import CustomImage from '../ui/CustomImage';
import SectionTag from '../ui/SectionTag';
import Button from '../ui/Button';
import NumberedInfoItem from '../ui/NumberedInfoItem';

// Icon for the SectionTag
const LeafIcon = () => (
  <CustomImage src="/images/icons/leaf.svg" alt="" width={16} height={16} />
);

// Data for the numbered blocks
const numberedItems = [
  {
    number: '01',
    title: 'Schedule Your Experience',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet.',
  },
  {
    number: '02',
    title: 'Meet Our Expert People',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet.',
  },
  {
    number: '03',
    title: 'Hire Get a Best',
    description: 'Nullam porta enim vel tellus commodo, eget laoreet.',
  },
];

const AgricultureMattersSection: React.FC = () => {
  return (
    <section className="bg-section-green py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 relative">
            <CustomImage
              src="/images/farmers-field.jpg" // As specified in prompt
              alt="Two farmers in a field"
              width={600}
              height={550}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            {/* Yellow button overlay from mock-up */}
            <div className="absolute bottom-6 left-6">
              <Button href="/services" variant="primary" size="lg">
                View Services
              </Button>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2">
            <SectionTag 
              icon={<LeafIcon />} 
              className="mb-4" // Default dark theme tag
            >
              Why Choose Us
            </SectionTag>

            <h2 className="text-4xl font-bold text-white leading-tight mb-6">
              Agriculture matters to the future of development
            </h2>

            <p className="text-gray-300 mb-10">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form by injected humour, or randomised
              words which don&apos;t look even.
            </p>

            {/* Numbered Informational Blocks */}
            <div className="space-y-4">
              {numberedItems.map((item) => (
                <NumberedInfoItem 
                  key={item.number}
                  number={item.number}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureMattersSection;