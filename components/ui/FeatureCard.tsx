// components/ui/FeatureCard.tsx (MODIFIED)

import React from "react";
import Image from "next/image";
import { Feature } from "@/components/types";
import Button from "@/components/ui/Button";

// Assuming this icon exists from our previous step
const PlaneArrowIcon = () => (
  <Image src="/images/icons/arrow.svg" alt="" width={20} height={20} />
);

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    // Updated styles: rounded-xl, shadow-md, padding
    <div className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-30 p-6 h-full">
      {/* Top: Icon + Title */}
      <div className="flex items-center gap-4">
        <div className="shrink-0 bg-yellow-300 rounded-full p-4 w-16 h-16 flex items-center justify-center">
          <Image
            src={feature.iconSrc}
            alt={feature.title}
            width={32}
            height={32}
          />
        </div>

        <h3 className="text-xl font-bold text-dark-green">{feature.title}</h3>
      </div>
      <hr className="my-4 border-gray-200" />
      {/* Description (no divider) */}
      <p className="text-gray-text text-base mt-4 grow">
        {feature.description}
      </p>

      {/* Button */}
      <div className="flex justify-end mt-4">
        <Button
          href={feature.href}
          variant="primary"
          size="icon"
          icon={<PlaneArrowIcon />}
          aria-label={`Learn more about ${feature.title}`}
        />
      </div>
    </div>
  );
};

export default FeatureCard;
