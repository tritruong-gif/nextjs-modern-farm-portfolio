// components/ui/ServiceCard.tsx
// (Create this new file)

import React from 'react';
import Image from 'next/image';
import { Service } from '@/components/types';
import Button from '@/components/ui/Button'; // Our reusable button
import { SunIcon } from '@heroicons/react/16/solid';
import CategoryTag from './CategoryTag';

// --- Define your icons ---
// You will need to add these SVGs to /public/images/icons/
const DiagonalArrowIcon = () => (
  <Image 
    src="/images/icons/arrow.svg" // This is the 'X' or arrow in the yellow button
    alt="" 
    width={16} 
    height={16} 
  />
);

// ---

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    // Card container
    <div className="bg-white rounded-2xl p-6 flex flex-col h-full text-left">
      {/* Image */}
      <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
        <Image
          src={service.imageUrl}
          alt={service.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Area (grows to fill space) */}
      <div className="grow">
        {/* Category */}
        <CategoryTag categoryName={service.category} />
        
        {/* Title */}
        <h3 className="text-xl font-bold text-green-900 mb-3">
          {service.title}
        </h3>
        
      <hr className="my-4 border-gray-200" />
        {/* Description */}
        <p className="text-gray-500 text-sm">
          {service.description}
        </p>
      </div>

      {/* Button Area (pushed to the bottom) */}
      <div className="flex justify-end mt-4">
        <Button
          href={service.href}
          variant="primary" // This uses your yellow 'brand-yellow' color
          size="icon"
          icon={<DiagonalArrowIcon />}
          aria-label={`Learn more about ${service.title}`}
        />
      </div>
    </div>
  );
};

export default ServiceCard;