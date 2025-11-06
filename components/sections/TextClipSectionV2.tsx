import React from 'react';

const MarqueeItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center text-4xl font-bold text-brand-green opacity-20 whitespace-nowrap px-6">
    {text}
    <span className="text-brand-yellow mx-4">*</span>
  </div>
);

const marqueeItems = [
  "Agriculture", "Farming", "Organic", "Vegetables", "Products", "Quality"
];

const TextClipSection: React.FC = () => {
  return (
    <div className="py-16 overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-marquee">
          {marqueeItems.map((item, i) => <MarqueeItem key={`a-${i}`} text={item} />)}
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          {marqueeItems.map((item, i) => <MarqueeItem key={`b-${i}`} text={item} />)}
        </div>
      </div>
    </div>
  );
};

export default TextClipSection;