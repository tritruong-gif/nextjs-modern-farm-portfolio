// components/sections/FaqSection.tsx
import React from 'react';
import SectionTag from '../ui/SectionTag';
import AccordionItem from '../ui/AccordionItem';
import CustomImage from '../ui/CustomImage';
import { generalFaqs, otherFaqs, happyFaqs } from '@/components/data/faqs';

// --- Leaf Icon ---
const LeafIcon = () => (
  <CustomImage 
    src="/images/icons/leaf.svg" 
    alt="" 
    width={16} 
    height={16} 
  />
);
// ---

const FaqSection: React.FC = () => {
  return (
    <section className="bg-light-cream py-20 px-4">
      <div className="container mx-auto">
        
        {/* Top: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: General Questions */}
          <div className="flex flex-col gap-4">
            <SectionTag 
              icon={<LeafIcon />} 
              className="text-dark-green bg-white"
            >
              Most Ask
            </SectionTag>
            <h2 className="text-4xl font-bold text-dark-green">General Questions</h2>
            {generalFaqs.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                index={index}
                variant={index === 0 ? 'green' : 'white'} // First item is green
                defaultOpen={index === 0} // First item is open
              />
            ))}
          </div>
          
          {/* Column 2: Other Questions */}
          <div className="flex flex-col gap-4">
            <SectionTag 
              icon={<LeafIcon />} 
              className="text-dark-green bg-white"
            >
              People Know
            </SectionTag>
            <h2 className="text-4xl font-bold text-dark-green">Other Questions</h2>
            {otherFaqs.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                index={index}
                variant={index === 0 ? 'green' : 'white'} // First item is green
                defaultOpen={index === 0} // First item is open
              />
            ))}
          </div>
        </div>

        {/* Bottom: Full-Width Section */}
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          <SectionTag 
            icon={<LeafIcon />} 
            className="text-dark-green bg-white"
          >
            Contact Us Now
          </SectionTag>
          <h2 className="text-4xl font-bold text-dark-green text-center">
            Happy to Answer All Your Questions
          </h2>
          <div className="w-full mt-8 flex flex-col gap-4">
            {happyFaqs.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                index={index}
                variant={index === 0 ? 'green' : 'white'} // First item is green
                defaultOpen={index === 0} // First item is open
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;