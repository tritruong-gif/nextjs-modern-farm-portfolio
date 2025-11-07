// components/ui/AccordionItem.tsx
"use client";

import React, { useState } from 'react';
import { FaqItem } from '@/components/types';
import CustomImage from './CustomImage';

// --- Chevron Icon ---
const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
  <CustomImage
    src="/images/icons/arrow.svg"
    alt="Toggle answer"
    width={20}
    height={20}
    className={`transition-transform duration-300 ${className}`}
  />
);
// ---

interface AccordionItemProps {
  item: FaqItem;
  index: number;
  variant?: 'green' | 'white';
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  index,
  variant = 'white',
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Style based on variant
  const headerStyles = variant === 'green'
    ? 'bg-brand-green text-white'
    : 'bg-white text-dark-green shadow-sm';
  
  const iconColor = variant === 'green' ? 'filter invert' : '';

  // Handle rounded corners when open
  const openHeaderStyles = isOpen ? 'rounded-b-none' : '';

  return (
    <div className="w-full">
      {/* Header Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`flex justify-between items-center w-full p-5 rounded-lg transition-all ${headerStyles} ${openHeaderStyles}`}
      >
        <span className="text-left font-semibold">
          {/* Format index: 0 -> "01." */}
          <span className="mr-2">{(index + 1).toString().padStart(2, '0')}.</span>
          {item.question}
        </span>
        <ChevronDownIcon className={`${isOpen ? 'rotate-180' : ''} ${iconColor} flex-shrink-0`} />
      </button>

      {/* Body Content */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 border-t border-gray-200">
          <p className="text-gray-text">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;