// components/ui/TestimonialCard.tsx
// (MODIFIED)

import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/components/types';
import StarRating from '@/components/ui/StarRating'; // <-- Import
import { Quote } from 'lucide-react';


interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col h-full text-left shadow-md">
      {/* Header: Quote and Stars */}
      <div className="flex justify-between items-center mb-4">
        <StarRating rating={testimonial.rating} /> {/* <-- USE THE COMPONENT */}
        <div className='rounded-full bg-amber-300 p-4'><Quote /></div>
      </div>

      {/* Quote */}
      <p className="grow text-gray-text text-lg italic mb-6">
        &quot;{testimonial.quote}&quot;
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <Image
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