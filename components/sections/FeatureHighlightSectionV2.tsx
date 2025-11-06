import React from 'react';
import { features } from '@/components/data/features';
import FeatureCard from '@/components/ui/FeatureCard';

const FeatureHighlightSection: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
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