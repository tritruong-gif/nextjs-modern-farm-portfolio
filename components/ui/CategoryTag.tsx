import React from 'react';
import CustomImage from './CustomImage';

const CategoryIcon = () => (
  <CustomImage 
    src="/images/icons/yellow-dot.svg"
    alt=""
    width={10}
    height={10}
  />
);

interface CategoryTagProps {
  categoryName: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ categoryName }) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <CategoryIcon />
      <span className="text-brand-yellow text-xs font-bold uppercase tracking-wider">
        {categoryName}
      </span>
    </div>
  );
};

export default CategoryTag;