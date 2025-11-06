// components/sections/GrowNaturallySection.tsx
// (Create this new file)

import React from "react";
import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag"; // Reusable tag
import FieldFeatureItem from "@/components/ui/FieldFeatureItem";
import { fieldFeatures } from "@/components/data/field-features";

// --- Icon components ---
const LeafIcon = () => (
  <Image src="/images/icons/leaf.svg" alt="" width={16} height={16} /> // Assuming a green leaf for this section
);
// ---

const GrowNaturallySection: React.FC = () => {
  // Split features into two columns for the layout
  const leftFeatures = fieldFeatures.slice(0, 2);
  const rightFeatures = fieldFeatures.slice(2, 4);

  return (
    <section className="bg-[#F9F9F7] py-20">
      <div className="container mx-auto px-2 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 ">
          <SectionTag
            icon={<LeafIcon />}
            className="mx-auto mb-4 text-dark-green bg-white"
          >
            Grow Naturally
          </SectionTag>
          <h2 className="text-4xl font-bold text-dark-green leading-tight">
            Choose What&apos;s Perfect <br className="hidden sm:inline" /> For
            Your Field
          </h2>
        </div>

        {/* Main Content: Features + Corn Image */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 mb-20">
          {/* Left Features */}
          <div className="w-full lg:w-1/3 space-y-4 lg:text-right">
            {leftFeatures.map((feature) => (
              <FieldFeatureItem key={feature.id} feature={feature} />
            ))}
          </div>

          {/* Central Corn Image */}
          <div className="w-full lg:w-1/3 flex justify-center py-8 lg:py-0">
            <Image
              src="/images/fields/field-corn.png" // Add this image to /public/images
              alt="Corn stalks"
              width={350} // Adjust based on actual image size and desired visual
              height={400} // ratio, these are approximations.
              className="object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="w-full lg:w-1/3 space-y-4 lg:text-left">
            {rightFeatures.map((feature) => (
              <FieldFeatureItem key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto">
        {/* Bottom Images */}
        <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
          {/* Image 1 (Smaller) */}
          <div className="w-1/5 md:w-1/6 shrink-0">
            <Image
              src="/images/fields/field-01.png" // Add this image
              alt="Farmer with child"
              width={200} // Smaller size
              height={200}
              className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-square" // aspect-square for consistent ratio
            />
          </div>

          {/* Image 2 (Larger) */}
          <div className="w-2/5 md:w-1/4 shrink-0">
            <Image
              src="/images/fields/field-02.jpg" // Add this image
              alt="Picking fresh produce"
              width={350} // Larger size
              height={350}
              className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-square"
            />
          </div>

          {/* Image 3 (Larger) */}
          <div className="w-2/5 md:w-1/4 shrink-0">
            <Image
              src="/images/fields/field-03.png" // Add this image
              alt="Man in VR headset"
              width={350} // Larger size
              height={350}
              className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-square"
            />
          </div>

          {/* Image 4 (Smaller) */}
          <div className="w-1/5 md:w-1/6 shrink-0">
            <Image
              src="/images/fields/field-04.png" // Add this image
              alt="Greenhouse"
              width={200} // Smaller size
              height={200}
              className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowNaturallySection;
