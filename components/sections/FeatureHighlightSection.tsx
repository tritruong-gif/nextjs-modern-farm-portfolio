// components/sections/FeatureHighlightSection.tsx (MODIFIED)

import React from 'react';
import { features } from '@/components/data/features';
import FeatureCard from '@/components/ui/FeatureCard';

const FeatureHighlightSection: React.FC = () => {
  return (
    // This section is part of the larger 'AboutUsSection'
    // It will get its background color from the parent
    // We add padding for the top and for the content
    <div className="py-6">
      <div className="mx-auto px-2 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlightSection;