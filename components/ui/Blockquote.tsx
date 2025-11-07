// components/ui/Blockquote.tsx
import React from 'react';
import CustomImage from './CustomImage';

interface BlockquoteProps {
  text: string;
  author: string;
}

const Blockquote: React.FC<BlockquoteProps> = ({ text, author }) => {
  return (
    <div className="bg-brand-yellow bg-opacity-20 p-8 rounded-xl relative mt-12">
      <CustomImage
        src="/images/icons/quote.svg"
        alt="Quote"
        width={50}
        height={50}
        className="absolute top-8 left-8 opacity-20"
      />
      <p className="text-2xl italic font-semibold text-dark-green z-10 relative pl-16">
        {text}
      </p>
      <span className="block text-right font-bold text-dark-green mt-4 z-10 relative">
        - {author}
      </span>
    </div>
  );
};

export default Blockquote;