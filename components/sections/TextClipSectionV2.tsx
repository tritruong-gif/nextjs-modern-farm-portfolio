// components/sections/TextClipSection.tsx
import React from 'react';

// Define the variants
type MarqueeVariant = 'default' | 'alternate' | 'about';

// Reusable item for the marquee
const MarqueeItem: React.FC<{ text: string, variant: MarqueeVariant }> = ({ text, variant }) => {
  let textColor, starColor;

  switch (variant) {
    case 'alternate': // Green BG, Yellow Text/Star
      textColor = 'text-brand-yellow';
      starColor = 'text-brand-yellow';
      break;
    case 'about':     // Light BG, Green Text, Yellow Star
      textColor = 'text-brand-green';
      starColor = 'text-brand-yellow';
      break;
    default:          // Light BG, Dark Text, Green Star
      textColor = 'text-dark-green';
      starColor = 'text-brand-green';
  }

  return (
    <div
      className={`flex items-center text-4xl font-bold opacity-20 whitespace-nowrap px-6 ${textColor}`}
    >
      {text}
      <span className={`mx-4 ${starColor}`}>*</span>
    </div>
  );
};

// List of words for the marquee
const marqueeItems = [
  "Agriculture", "Farming", "Organic", "Vegetables", "Products", "Quality"
];

interface TextClipSectionProps {
  bgClassName?: string;
  itemVariant?: MarqueeVariant;
}

const TextClipSection: React.FC<TextClipSectionProps> = ({ 
  bgClassName = 'bg-light-cream', // Default background
  itemVariant = 'default',       // Default item variant
}) => {
  return (
    <div className={`py-16 overflow-hidden ${bgClassName}`}> {/* Apply background here */}
      <div className="relative flex">
        {/* We duplicate the content to create a seamless loop */}
        <div className="flex animate-marquee">
          {marqueeItems.map((item, i) => (
            <MarqueeItem key={`a-${i}`} text={item} variant={itemVariant} />
          ))}
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          {marqueeItems.map((item, i) => (
            <MarqueeItem key={`b-${i}`} text={item} variant={itemVariant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextClipSection;