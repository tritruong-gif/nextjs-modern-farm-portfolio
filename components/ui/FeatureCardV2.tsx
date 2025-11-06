import React from 'react';
import { Feature } from '@/components/types';
import Button from '@/components/ui/Button';
import CustomImage from './CustomImage';

const PlaneArrowIcon = () => (
  <CustomImage 
    src="/images/icons/plane-arrow.svg" 
    alt="" 
    width={20} 
    height={20} 
  />
);

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-xl shadow-md h-full overflow-hidden">
      <div className="p-6 flex-grow">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 bg-brand-yellow rounded-full p-4 w-16 h-16 flex items-center justify-center">
            <CustomImage
              src={feature.iconSrc}
              alt={feature.title}
              width={32}
              height={32}
            />
          </div>
          <h3 className="text-xl font-bold text-dark-green">
            {feature.title}
          </h3>
        </div>
        <p className="text-gray-text text-base">
          {feature.description}
        </p>
      </div>

      <div 
        className="absolute -bottom-8 -right-8 w-28 h-28 bg-light-cream rounded-full 
                   flex items-end justify-start pr-6 pb-6 pt-0 pl-0
                   transform translate-x-1/4 translate-y-1/4"
      >
        <Button
          href={feature.href}
          variant="text"
          size="icon"
          icon={<PlaneArrowIcon />}
          aria-label={`Learn more about ${feature.title}`}
          className="bg-white rounded-full p-3 shadow-sm"
        />
      </div>
    </div>
  );
};

export default FeatureCard;