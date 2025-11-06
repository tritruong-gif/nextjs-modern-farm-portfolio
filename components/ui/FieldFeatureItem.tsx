// components/ui/FieldFeatureItem.tsx
// (Create this new file)

import React from 'react';
import Image from 'next/image';
import { FieldFeature } from '@/components/types';

interface FieldFeatureItemProps {
  feature: FieldFeature;
}

const FieldFeatureItem: React.FC<FieldFeatureItemProps> = ({ feature }) => {
  return (
    <div className="flex items-start gap-4 p-4">
      {/* Yellow Circle Icon */}
      <div className="shrink-0 bg-yellow-300 rounded-full p-3 w-14 h-14 flex items-center justify-center">
        <Image
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