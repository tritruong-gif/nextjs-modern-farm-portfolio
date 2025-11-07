import React from 'react';
import CustomImage from '../ui/CustomImage';
import SectionTag from '../ui/SectionTagV2';
import Button from '../ui/Button';

// --- Icons ---
// Assuming a small leaf icon for the tag
const LeafIcon = () => (
  <CustomImage 
    src="/images/icons/leaf.svg" 
    alt="" 
    width={16} 
    height={16} 
  />
);

// Icon for the info points
const InfoPointIcon = () => (
  <CustomImage 
    src="/images/icons/yellow-dot.svg" // Using the yellow dot from CategoryTag
    alt="" 
    width={10} 
    height={10} 
  />
);

// Icon for the button
const ArrowRightIcon = () => (
  <CustomImage 
    src="/images/icons/arrow.svg" // A dark arrow for the yellow button
    alt="" 
    width={16} 
    height={16} 
  />
);
// ---

// Data for the info points
const infoPoints = [
  "Garlic Farming",
  "Fertilizer Distribution",
  "Lavender Farming",
  "Poultry Farming",
  "Organic Mushrooms",
  "Organic Fertilizers"
];

const HistoryAboutSection: React.FC = () => {
  return (
    <section className="bg-light-cream py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2">
            <CustomImage
              src="/images/history-farmers-harvest.jpg"
              alt="Two farmers smiling and holding a crate of fresh vegetables"
              width={600}
              height={550}
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2">
            <SectionTag 
              icon={<LeafIcon />} 
              className="mb-4 text-dark-green bg-white"
            >
              About Us
            </SectionTag>

            <h2 className="text-4xl font-bold text-dark-green leading-tight mb-6">
              We&apos;re Best Agriculture & Organic Farms
            </h2>

            <p className="text-gray-text mb-8">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form by injected humour, or randomised
              words which don&apos;t look even.
            </p>

            {/* Informational Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {infoPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <InfoPointIcon />
                  <span className="font-semibold text-dark-green">{point}</span>
                </div>
              ))}
            </div>

            <Button 
              href="/about" 
              variant="primary" 
              size="md"
              icon={<ArrowRightIcon />}
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryAboutSection;