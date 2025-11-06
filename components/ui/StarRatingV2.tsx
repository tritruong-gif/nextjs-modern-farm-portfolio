import React from 'react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-5 h-5 ${
              starValue <= rating ? 'text-brand-yellow' : 'text-gray-300'
            }`}
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.799 2.318l-4.25 3.655 1.257 5.273c.27 1.139-1.009 2.01-1.962 1.44l-4.91-2.893-4.91 2.893c-.953.569-2.232-.302-1.962-1.44l1.257-5.273-4.25-3.655c-.837-.773-.366-2.225.799-2.318l5.404-.433L10.788 3.21z"
              clipRule="evenodd"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;