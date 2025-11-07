// components/sections/ContactFormSection.tsx
import React from 'react';
import CustomImage from '../ui/CustomImage';
import SectionTag from '../ui/SectionTag';
import ContactForm from '../ui/ContactForm';

// --- Leaf Icon ---
const LeafIcon = () => (
  <CustomImage 
    src="/images/icons/leaf.svg" 
    alt="" 
    width={16} 
    height={16} 
  />
);
// ---

const ContactFormSection: React.FC = () => {
  return (
    // Continuing on the light-cream background, so just add bottom padding
    <section className="bg-light-cream pb-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image */}
            <div>
              <CustomImage
                src="/images/contact-farmer.jpg"
                alt="Farmer holding a crate of tomatoes"
                width={500}
                height={600}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            
            {/* Right Column: Form */}
            <div>
              <SectionTag 
                icon={<LeafIcon />} 
                className="text-dark-green bg-light-cream" // Light theme for tag
              >
                Get In Touch!
              </SectionTag>
              <h2 className="text-4xl font-bold text-dark-green my-4">
                Have any Questions? <br />
                Get in Touch!
              </h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;