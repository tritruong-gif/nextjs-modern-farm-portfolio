// components/sections/CallToActionSection.tsx
// (Create this new file)

import React from 'react';
import Image from 'next/image';
import IconBadge from '@/components/ui/IconBadge'; // Import new component

// --- Define your icons ---
// You will need to add these dark-colored icons
const PhoneIcon = () => (
  <Image 
    src="/images/icons/phone-dark.svg" 
    alt="Phone" 
    width={20} 
    height={20} 
  />
);
const EmailIcon = () => (
  <Image 
    src="/images/icons/email-dark.svg" 
    alt="Email" 
    width={20} 
    height={20} 
  />
);
const DotIcon = () => (
  <div className="w-1.5 h-1.5 bg-[#3A4D39] rounded-full opacity-50"></div>
);
// ---

const ctaLinks = ['FARMERS', 'ORGANIC', 'FOODS', 'PRODUCT'];

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-[#E6D15A] py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Links */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {ctaLinks.map((link, index) => (
            <React.Fragment key={link}>
              <span className="text-sm font-bold text-[#3A4D39] tracking-wider">
                {link}
              </span>
              {/* Show dot if it's not the last item */}
              {index < ctaLinks.length - 1 && <DotIcon />}
            </React.Fragment>
          ))}
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Phone */}
          <div className="flex items-center gap-3">
            <IconBadge>
              <PhoneIcon />
            </IconBadge>
            <span className="font-semibold text-[#3A4D39]">
              +1(232) 255-511
            </span>
          </div>
          {/* Email */}
          <div className="flex items-center gap-3">
            <IconBadge>
              <EmailIcon />
            </IconBadge>
            <span className="font-semibold text-[#3A4D39]">
              nonzy@domaintech.com
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CallToActionSection;