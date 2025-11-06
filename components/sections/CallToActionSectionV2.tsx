import React from 'react';
import IconBadge from '@/components/ui/IconBadge';
import CustomImage from '../ui/CustomImage';

const PhoneIcon = () => (
  <CustomImage 
    src="/images/icons/phone-dark.svg" 
    alt="Phone" 
    width={20} 
    height={20} 
  />
);
const EmailIcon = () => (
  <CustomImage 
    src="/images/icons/email-dark.svg" 
    alt="Email" 
    width={20} 
    height={20} 
  />
);
const DotIcon = () => (
  <div className="w-1.5 h-1.5 bg-dark-green rounded-full opacity-50"></div>
);

const ctaLinks = ['FARMERS', 'ORGANIC', 'FOODS', 'PRODUCT'];

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-cta-yellow py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {ctaLinks.map((link, index) => (
            <React.Fragment key={link}>
              <span className="text-sm font-bold text-dark-green tracking-wider">
                {link}
              </span>
              {index < ctaLinks.length - 1 && <DotIcon />}
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-3">
            <IconBadge>
              <PhoneIcon />
            </IconBadge>
            <span className="font-semibold text-dark-green">
              +1(232) 255-511
            </span>
          </div>
          <div className="flex items-center gap-3">
            <IconBadge>
              <EmailIcon />
            </IconBadge>
            <span className="font-semibold text-dark-green">
              nonzy@domaintech.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;