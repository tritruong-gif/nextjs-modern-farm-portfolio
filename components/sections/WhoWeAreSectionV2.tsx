import React from 'react';
import CustomImage from '../ui/CustomImage';
import InfoItem from '@/components/ui/InfoItem';
import SectionTag from '@/components/ui/SectionTag';
import { infoItems } from '@/components/data/whoWeAre';

const LeafIcon = () => <CustomImage src="/images/icons/leaf.svg" alt="" width={16} height={16} />;

const WhoWeAreSection: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <CustomImage
              src="/images/farmer.jpg"
              alt="Farmer checking orange tree"
              width={500}
              height={500}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -right-4 bg-brand-yellow p-6 rounded-xl shadow-md w-[200px]">
              <p className="text-4xl font-bold text-dark-green mb-1">
                * 435+
              </p>
              <p className="text-dark-green font-semibold">
                Growth Tons of Harvest
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-10 mt-12 lg:mt-0">
            <SectionTag 
              icon={<LeafIcon />} 
              className="mb-3 text-brand-green bg-white"
            >
              Who We Are
            </SectionTag>
            <h2 className="text-4xl font-bold text-dark-green leading-tight mb-6">
              Currently we are growing and selling organic food
            </h2>
            <p className="text-gray-text mb-8">
              There are many variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {infoItems.map((item) => (
                <InfoItem
                  key={item.id}
                  iconSrc={item.iconSrc}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;