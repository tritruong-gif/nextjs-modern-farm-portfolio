// components/sections/AboutUsSection.tsx (NEW PARENT)

import React from 'react';
// import FeatureHighlightSection from './FeatureHighlightSection';
import FeatureHighlightSection from './FeatureHighlightSectionV2';
// import WhoWeAreSection from './WhoWeAreSection';
import WhoWeAreSection from './WhoWeAreSectionV2';
// import TextClipSection from './TextClipSection';
import TextClipSection from './TextClipSectionV2';

const AboutUsSection: React.FC = () => {
  return (
    // This parent provides the light-cream background for all its children
    <section className="bg-light-cream" id="about">
      <FeatureHighlightSection />
      <WhoWeAreSection />
      <TextClipSection 
        bgClassName="bg-light-cream" 
        itemVariant="about" 
      />
    </section>
  );
};

export default AboutUsSection;