// components/ui/CategoryTag.tsx
// (Create this new file)

import React from 'react';
import { SunIcon } from '@heroicons/react/16/solid';


interface CategoryTagProps {
  categoryName: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ categoryName }) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      
          <SunIcon className='text-yellow-300 size-4'/>
      <span className="text-gray-300 text-xs font-bold uppercase tracking-wider">
        {categoryName}
      </span>
    </div>
  );
};

export default CategoryTag;