// components/sections/AboutWhoWeAreSection.tsx
import React from 'react';
import CustomImage from '../ui/CustomImage';
import SectionTag from '../ui/SectionTag';

// Icon for the SectionTag
const LeafIcon = () => (
  <CustomImage 
    src="/images/icons/leaf.svg" 
    alt="" 
    width={16} 
    height={16} 
  />
);

const AboutWhoWeAreSection: React.FC = () => {
  return (
    <section className="bg-light-cream py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 relative">
            <CustomImage
              src="/images/farmer.jpg" // As specified in prompt
              alt="Farmer checking orange tree"
              width={600}
              height={550}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            {/* Stats Box Overlay from mock-up */}
            <div 
              className="absolute -bottom-8 -right-4 lg:right-[-2rem] 
                         bg-brand-yellow p-6 rounded-xl shadow-md w-[200px]"
            >
              <p className="text-4xl font-bold text-dark-green mb-1">
                * 435+
              </p>
              <p className="text-dark-green font-semibold">
                Growth Tons of Harvest
              </p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <SectionTag 
              icon={<LeafIcon />} 
              className="mb-4 text-dark-green bg-white"
            >
              About Us
            </SectionTag>

            {/* --- NEW TEXT --- */}
            <h2 className="text-4xl font-bold text-dark-green leading-tight mb-6">
              Local farmers with genuine care from seed, soil, to food on your table
            </h2>

            <p className="text-gray-text mb-8">
              Our journey commenced with a single farming enthusiast founder, Will. He initially
              established small garden beds in his backyard to cultivate vegetables, driven by
              the desire to provide high-quality, organic produce for his family. As his harvest
              exceeded his family&apos;s requirements, he began selling the surplus at the local
              farmers market on weekends. This local market presence has since expanded,
              allowing us to now serve the wider public.
            </p>
            {/* --- END NEW TEXT --- */}

            {/* Info blocks are omitted as requested */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAreSection;