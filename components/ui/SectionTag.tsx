// components/ui/SectionTag.tsx
// (Create this new file)

import React from 'react';

interface SectionTagProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

const SectionTag: React.FC<SectionTagProps> = ({ children, icon, className = '' }) => {
  return (
    <div 
      className={`flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-4 py-1.5 w-fit ${className}`}
    >
      {icon}
      <span className="text-sm font-semibold text-black">
        {children}
      </span>
    </div>
  );
};

export default SectionTag;