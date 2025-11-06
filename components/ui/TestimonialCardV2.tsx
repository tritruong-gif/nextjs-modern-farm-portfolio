import React from 'react';
import { Testimonial } from '@/components/types';
import StarRating from '@/components/ui/StarRating';
import CustomImage from './CustomImage';

const QuoteIcon = () => (
  <CustomImage 
    src="/images/icons/quote.svg"
    alt="Quote" 
    width={40} 
    height={40}
    className="opacity-10"
  />
);

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col h-full text-left shadow-md">
      <div className="flex justify-between items-center mb-4">
        <QuoteIcon />
        <StarRating rating={testimonial.rating} />
      </div>
      <p className="flex-grow text-gray-text text-lg italic mb-6">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="flex items-center gap-4">
        <CustomImage
          src={testimonial.avatarSrc}
          alt={testimonial.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="text-lg font-bold text-dark-green">{testimonial.name}</h4>
          <p className="text-gray-text text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;