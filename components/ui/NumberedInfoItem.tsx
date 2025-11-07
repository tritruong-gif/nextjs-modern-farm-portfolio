// components/ui/NumberedInfoItem.tsx
import React from 'react';

interface NumberedInfoItemProps {
  number: string;
  title: string;
  description: string;
}

const NumberedInfoItem: React.FC<NumberedInfoItemProps> = ({ number, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-white bg-opacity-10 rounded-lg">
      <span className="text-2xl font-bold text-brand-yellow">{number}</span>
      <div>
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default NumberedInfoItem;