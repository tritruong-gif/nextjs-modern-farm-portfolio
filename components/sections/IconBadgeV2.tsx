import React from 'react';

interface IconBadgeProps {
  children: React.ReactNode;
}

const IconBadge: React.FC<IconBadgeProps> = ({ children }) => {
  return (
    <div 
      className="flex-shrink-0 w-12 h-12 bg-white rounded-full 
                 flex items-center justify-center shadow-md"
    >
      {children}
    </div>
  );
};

export default IconBadge;