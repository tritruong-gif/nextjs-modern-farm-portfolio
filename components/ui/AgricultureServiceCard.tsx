// components/ui/HomePageServiceCard.tsx
// (Create this new file)

import React from 'react';
import { Service } from '@/components/types'; // Assumed to exist from homepage prompt
import Button from '@/components/ui/Button';
import CategoryTag from '@/components/ui/CategoryTag';
import CustomImage from './CustomImage';

// Icon for the button
const DiagonalArrowIcon = () => (
  <CustomImage 
    src="/images/icons/arrow.svg" // Assumed from homepage prompt
    alt="" 
    width={16} 
    height={16} 
  />
);

interface HomePageServiceCardProps {
  service: Service;
}

const HomePageServiceCard: React.FC<HomePageServiceCardProps> = ({ service }) => {
  return (
    // Card container with relative positioning
    <div className="bg-white rounded-2xl p-6 h-full text-left relative shadow-md">
      
      {/* Yellow Button on top-right */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          href={service.href}
          variant="primary" // This is your 'brand-yellow' button
          size="icon"
          icon={<DiagonalArrowIcon />}
          aria-label={`Learn more about ${service.title}`}
        />
      </div>

      {/* Circular Image */}
      <div className="mb-6">
        <CustomImage
          src={service.imageUrl}
          alt={service.title}
          width={150} // You can adjust this size
          height={150}
          className="rounded-full object-cover" // Creates the circular frame
        />
      </div>
      
      {/* Content Area */}
      <div className="flex-grow text-left">
        {/* Category Tag (reused from homepage) */}
        <CategoryTag categoryName={service.category} />
        
        {/* Title */}
        <h3 className="text-xl font-bold text-dark-green mb-1">
          {service.title}
        </h3>
        
        {/* Description is not present in this design */}
      </div>
    </div>
  );
};

export default HomePageServiceCard;