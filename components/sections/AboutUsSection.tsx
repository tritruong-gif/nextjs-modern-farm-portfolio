// components/sections/AboutUsSection.tsx (NEW PARENT)

import React from 'react';
import FeatureHighlightSection from './FeatureHighlightSection';
import WhoWeAreSection from './WhoWeAreSection';
import TextClipSection from './TextClipSection';

const AboutUsSection: React.FC = () => {
  return (
    // This parent provides the light-cream background for all its children
    <section className="bg-[#F9F9F7]" id="about">
      <FeatureHighlightSection />
      <WhoWeAreSection />
      <TextClipSection />
    </section>
  );
};

export default AboutUsSection;