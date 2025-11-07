// components/ui/DownloadCard.tsx
import React from 'react';
import Button from './Button';
import CustomImage from './CustomImage';
import Link from 'next/link';

// --- Icons ---
const PdfIcon = () => (
  <CustomImage 
    src="/images/icons/pdf.svg" 
    alt="PDF" 
    width={20} 
    height={20} 
  />
);
const DownloadIconWhite = () => (
  <CustomImage 
    src="/images/icons/download-white.svg" 
    alt="Word" 
    width={20} 
    height={20} 
  />
);
const DownloadIconDark = () => (
  <CustomImage 
    src="/images/icons/download-dark.svg" 
    alt="Word" 
    width={20} 
    height={20} 
  />
);
// ---

// --- Icons ---
// You will need to add/update these icons in /public/images/icons/
const LeafIcon = () => (
  <CustomImage 
    src="/images/icons/leaf-small.svg" 
    alt="" 
    width={20} 
    height={20} 
    className="text-brand-green"
  />
);


const DownloadIcon = ({ className = "" }: { className?: string }) => (
  <CustomImage 
    src="/images/icons/download.svg" // A simple download arrow
    alt="Download" 
    width={20} 
    height={20} 
    className={className}
  />
);
// ---

const DownloadCard: React.FC = () => {
  return (
    // Container (no longer a white card)
    <div className="mt-8">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <LeafIcon />
        <h3 className="text-xl font-bold text-dark-green">Company Profile</h3>
      </div>
      
      {/* Buttons */}
      <div className="flex flex-col gap-3">
        
        {/* Button 1: PDF File */}
        <Link
          href="/files/profile.pdf"
          className="flex justify-between items-center bg-white p-3 pr-4 rounded-full shadow-sm 
                     hover:shadow-md transition-shadow"
        >
          {/* Left Side */}
          <div className="flex items-center gap-3">
            <PdfIcon />
            <span className="font-semibold text-dark-green text-sm">
              DOWNLOAD PDF FILE
            </span>
          </div>
          {/* Right Side (Icon Circle) */}
          <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
            <DownloadIconWhite />
          </div>
        </Link>

        {/* Button 2: Word File */}
        <Link
          href="/files/profile.doc"
          className="flex justify-between items-center bg-brand-yellow p-3 pr-4 rounded-full shadow-sm 
                     hover:shadow-md transition-shadow"
        >
          {/* Left Side */}
          <div className="flex items-center gap-3">
            <PdfIcon /> {/* Mock-up reuses the PDF icon */}
            <span className="font-semibold text-dark-green text-sm">
              DOWNLOAD WORD FILE
            </span>
          </div>
          {/* Right Side (Icon Circle) */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <DownloadIconDark />
          </div>
        </Link>

      </div>
    </div>
  );
};

export default DownloadCard;