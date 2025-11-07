// components/ui/ContactInfoCard.tsx
import React from 'react';
import Button from '@/components/ui/Button';
import CustomImage from './CustomImage';

// Icon for the button
const DiagonalArrowIcon = () => (
  <CustomImage 
    src="/images/icons/arrow.svg" 
    alt="" 
    width={16} 
    height={16} 
  />
);

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2?: string;
  href: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ 
  icon, 
  title, 
  line1, 
  line2, 
  href 
}) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-6">
      {/* Button on top-right */}
      <div className="absolute top-4 right-4 z-10">
        <Button
          href={href}
          variant="primary" // Yellow button
          size="icon"
          icon={<DiagonalArrowIcon />}
          aria-label={`Learn more about ${title}`}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        {/* Icon in yellow circle */}
        <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mb-5">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-dark-green mb-2">{title}</h3>
        
        <p className="text-gray-text text-sm">{line1}</p>
        {line2 && <p className="text-gray-text text-sm">{line2}</p>}
      </div>
    </div>
  );
};

export default ContactInfoCard;