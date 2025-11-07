import React from 'react';
import { DotIcon } from 'lucide-react';

interface CategoryTagProps {
  categoryName: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ categoryName }) => {
  return (
    <div className="flex items-center mb-2">
      <DotIcon className='text-brand-yellow'/>
      <span className="text-brand-yellow text-xs font-bold uppercase tracking-wider">
        {categoryName}
      </span>
    </div>
  );
};

export default CategoryTag;