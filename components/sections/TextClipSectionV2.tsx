// components/sections/TextClipSection.tsx
import React from 'react';

// Define the variants for the marquee items' colors
type MarqueeItemVariant = 'default' | 'alternate';

// Reusable item for the marquee
const MarqueeItem: React.FC<{ text: string, variant: MarqueeItemVariant, className?: string }> = ({ text, variant, className }) => {
  // Define colors based on the variant
  const textColor = variant === 'default' ? 'text-dark-green' : 'text-light-cream';
  const starColor = variant === 'default' ? 'text-brand-yellow' : 'text-brand-yellow';

  return (
    <div
      className={`flex items-center text-4xl font-bold whitespace-nowrap px-6 ${textColor} ${className}`}
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

// Add the 'bgClassName' prop for the background and 'itemVariant' for item styling
interface TextClipSectionProps {
  bgClassName?: string;
  itemVariant?: MarqueeItemVariant;
  itemClassName?: string; // Optional for further customization of the marquee items
}

const TextClipSection: React.FC<TextClipSectionProps> = ({ 
  bgClassName = 'bg-light-cream', // Default background
  itemVariant = 'default',       // Default item variant
  itemClassName = ''             // Default item class
}) => {
  return (
    <div className={`py-16 overflow-hidden ${bgClassName}`}> {/* Apply background here */}
      <div className="relative flex">
        {/* We duplicate the content to create a seamless loop */}
        <div className="flex animate-marquee">
          {marqueeItems.map((item, i) => (
            <MarqueeItem key={`a-${i}`} text={item} variant={itemVariant} className={itemClassName} />
          ))}
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          {marqueeItems.map((item, i) => (
            <MarqueeItem key={`b-${i}`} text={item} variant={itemVariant} className={itemClassName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextClipSection;