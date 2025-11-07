// components/ui/DownloadCard.tsx
import React from 'react';
import Button from './Button';
import CustomImage from './CustomImage';

// --- Icons ---
const PdfIcon = () => (
  <CustomImage 
    src="/images/icons/pdf-file.svg" 
    alt="PDF" 
    width={20} 
    height={20} 
  />
);
const WordIcon = () => (
  <CustomImage 
    src="/images/icons/word-file.svg" 
    alt="Word" 
    width={20} 
    height={20} 
  />
);
// ---

const DownloadCard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h3 className="text-xl font-bold text-dark-green mb-4">Company Profile</h3>
      <div className="flex flex-col gap-3">
        <Button 
          href="/files/profile.pdf" 
          variant="primary" 
          size="md"
          icon={<PdfIcon />}
          className="w-full justify-start"
        >
          DOWNLOAD PDF FILE
        </Button>
        <Button 
          href="/files/profile.doc" 
          variant="secondary" 
          size="md"
          icon={<WordIcon />}
          className="w-full justify-start border border-gray-300"
        >
          DOWNLOAD WORD FILE
        </Button>
      </div>
    </div>
  );
};

export default DownloadCard;