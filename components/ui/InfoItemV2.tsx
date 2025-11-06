import React from 'react';
import CustomImage from './CustomImage';

interface InfoItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <CustomImage src={iconSrc} alt="" width={40} height={40} />
      </div>
      <div>
        <h4 className="text-lg font-bold text-dark-green mb-1">{title}</h4>
        <p className="text-gray-text text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InfoItem;