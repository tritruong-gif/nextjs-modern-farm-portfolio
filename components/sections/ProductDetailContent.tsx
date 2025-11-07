// components/sections/ServiceDetailContent.tsx
import React from 'react';
import { Service } from '@/components/types';
import CustomImage from '../ui/CustomImage';
import AccordionItem from '../ui/AccordionItem';
import NumberedInfoBlock from '../ui/NumberedInfoBlock';

// --- Icon ---
const CheckIcon = () => (
  <CustomImage 
    src="/images/icons/check-green.svg" // A green checkmark
    alt="Check"
    width={20}
    height={20}
    className="flex-shrink-0"
  />
);
// ---

interface ServiceDetailContentProps {
  product: Service;
}

const ProductDetailContent: React.FC<ServiceDetailContentProps> = ({ product }) => {
  return (
    <article className="bg-white p-8 rounded-lg shadow-md">
      {/* Main Image */}
      <CustomImage
        src={product.mainImageUrl}
        alt={product.title}
        width={800}
        height={450}
        className="rounded-xl mb-8 w-full h-auto object-cover"
      />
      
      {/* Main Description */}
      <h2 className="text-3xl font-bold text-dark-green mb-4">Why Choose Our Products</h2>
      <p className="text-gray-text leading-relaxed mb-10">{product.longDescription}</p>

      {/* 3-Column Numbered Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* This data should ideally come from the service object, but for simplicity: */}
        <NumberedInfoBlock
          number="01"
          title="Schedule Your Experience"
          description="Corrupti ut consequatur magni minus! Iusto eos consectetur."
        />
        <NumberedInfoBlock
          number="02"
          title="Get Professional Advice"
          description="Consequatur magni minus! Iusto eos consectetur similique."
        />
        <NumberedInfoBlock
          number="03"
          title="Meet Our Expert People"
          description="Magni minus! Iusto eos consectetur similique culpa odio."
        />
      </div>

      {/* Work Points */}
      <h3 className="text-2xl font-bold text-dark-green mb-6">High Quality Products</h3>
      <ul className="space-y-4 mb-12">
        {product.workPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-gray-text">{point}</span>
          </li>
        ))}
      </ul>

      {/* FAQs */}
      <h3 className="text-2xl font-bold text-dark-green mb-6">Frequently asked questions</h3>
      <div className="space-y-4">
        {product.faqs.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            item={faq}
            index={index}
            variant={index === 0 ? 'green' : 'white'}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </article>
  );
};

export default ProductDetailContent;