// components/sections/ContactInfoSection.tsx
import React from 'react';
import ContactInfoCard from '../ui/ContactInfoCard';
import CustomImage from '../ui/CustomImage';

// --- Define Icons ---
const EmailIcon = () => (
  <CustomImage 
    src="/images/icons/email-dark.svg" 
    alt="Email" 
    width={28} 
    height={28} 
  />
);
const PhoneIcon = () => (
  <CustomImage 
    src="/images/icons/phone-dark.svg" 
    alt="Phone" 
    width={28} 
    height={28} 
  />
);
const LocationIcon = () => (
  <CustomImage 
    src="/images/icons/location-dark.svg" 
    alt="Location" 
    width={28} 
    height={28} 
  />
);
// ---

const ContactInfoSection: React.FC = () => {
  return (
    <section className="bg-light-cream py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContactInfoCard
            icon={<EmailIcon />}
            title="Mail us 24/7"
            line1="info@adgrimo.com"
            line2="jobs@adgrimo.com"
            href="mailto:info@adgrimo.com"
          />
          <ContactInfoCard
            icon={<PhoneIcon />}
            title="Call Us 24/7"
            line1="Phone: (+123) 554 - 5418"
            line2="Mobile: (+123) 545 - 5418"
            href="tel:+1235545418"
          />
          <ContactInfoCard
            icon={<LocationIcon />}
            title="Our Locations"
            line1="4821 Ride Top, Anch St, Alaska"
            line2="99501, USA Gaim, usa"
            href="#map" // Link to the map section
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;