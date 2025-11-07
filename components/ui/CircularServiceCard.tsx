// components/ui/CircularServiceCard.tsx
import React from 'react';
import { Service } from '@/components/types'; // Assuming Service type is updated
import CustomImage from './CustomImage';

interface CircularServiceCardProps {
  service: Service;
  index: number;
}

const CircularServiceCard: React.FC<CircularServiceCardProps> = ({ service, index }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      {/* Circular Image with Number */}
      <div className="relative mb-6">
        <CustomImage
          src={service.imageUrl} // Use the main image for the circle
          alt={service.title}
          width={180}
          height={180}
          className="rounded-full object-cover"
        />
        {/* Number Badge */}
        <div 
          className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center
                     bg-white rounded-full border-2 border-brand-yellow"
        >
          <span className="text-dark-green font-bold text-sm">
            {index.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-dark-green mb-2">{service.title}</h3>
      <p className="text-gray-text text-sm max-w-xs">{service.description}</p>
    </div>
  );
};

export default CircularServiceCard;