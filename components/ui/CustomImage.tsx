"use client";

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

interface CustomImageProps extends ImageProps {
  fallbackSrc?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ 
  src, 
  fallbackSrc = '/images/image-not-found.jpg', 
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default CustomImage;