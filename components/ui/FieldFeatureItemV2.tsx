import React from 'react';
import { FieldFeature } from '@/components/types';
import CustomImage from './CustomImage';

interface FieldFeatureItemProps {
  feature: FieldFeature;
}

const FieldFeatureItem: React.FC<FieldFeatureItemProps> = ({ feature }) => {
  return (
    <div className="flex items-start gap-4 p-4">
      <div className="flex-shrink-0 bg-brand-yellow rounded-full p-3 w-14 h-14 flex items-center justify-center">
        <CustomImage
          src={feature.iconSrc}
          alt={feature.title}
          width={28}
          height={28}
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-dark-green mb-1">{feature.title}</h3>
        <p className="text-gray-text text-base">{feature.description}</p>
      </div>
    </div>
  );
};

export default FieldFeatureItem;