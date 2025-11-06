// components/sections/TextClipSection.tsx (NEW)

import React from 'react';

// Reusable item for the marquee
const MarqueeItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center text-4xl font-bold text-brand-green opacity-20 whitespace-nowrap px-6">
    {text}
    <span className="text-brand-yellow mx-4">*</span>
  </div>
);

// List of words for the marquee
const marqueeItems = [
  "Agriculture", "Farming", "Organic", "Vegetables", "Products", "Quality"
];

const TextClipSection: React.FC = () => {
  return (
    <div className="py-16 overflow-hidden">
      <div className="relative flex">
        {/* We duplicate the content to create a seamless loop */}
        <div className="flex animate-marquee">
          {marqueeItems.map((item, i) => <MarqueeItem key={`a-${i}`} text={item} />)}
        </div>
        {/* The second copy for the loop */}
        <div className="flex animate-marquee" aria-hidden="true">
          {marqueeItems.map((item, i) => <MarqueeItem key={`b-${i}`} text={item} />)}
        </div>
      </div>
    </div>
  );
};

export default TextClipSection;