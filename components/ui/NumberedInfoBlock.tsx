// components/ui/NumberedInfoBlock.tsx
import React from 'react';

interface NumberedInfoBlockProps {
  number: string;
  title: string;
  description: string;
}

const NumberedInfoBlock: React.FC<NumberedInfoBlockProps> = ({ number, title, description }) => {
  return (
    <div className="relative">
      <span 
        className="text-7xl font-bold text-gray-200 opacity-70
                   absolute -top-4 left-0 z-0"
      >
        {number}
      </span>
      <div className="relative z-10 pt-8 pl-4">
        <h4 className="text-xl font-bold text-dark-green mb-3">{title}</h4>
        <p className="text-gray-text">{description}</p>
      </div>
    </div>
  );
};

export default NumberedInfoBlock;