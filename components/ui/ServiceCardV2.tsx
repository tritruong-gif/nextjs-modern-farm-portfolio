import React from 'react';
import { Service } from '@/components/types';
import Button from '@/components/ui/Button';
import CategoryTag from '@/components/ui/CategoryTag';
import CustomImage from './CustomImage';

const DiagonalArrowIcon = () => (
  <CustomImage 
    src="/images/icons/arrow.svg"
    alt="" 
    width={16} 
    height={16} 
  />
);

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col h-full text-left">
      <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
        <CustomImage
          src={service.imageUrl}
          alt={service.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-grow">
        <CategoryTag categoryName={service.category} />
        <h3 className="text-xl font-bold text-dark-green mb-3">
          {service.title}
        </h3>
        <p className="text-gray-text text-sm">
          {service.description}
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <Button
          href={service.href}
          variant="primary"
          size="icon"
          icon={<DiagonalArrowIcon />}
          aria-label={`Learn more about ${service.title}`}
        />
      </div>
    </div>
  );
};

export default ServiceCard;