// components/ui/HistoryEventCard.tsx
// (MODIFIED)

import React from 'react';
import { HistoryEvent } from "@/components/types"; // Make sure this type is imported

interface HistoryEventCardProps {
  event: HistoryEvent;
}

const HistoryEventCard: React.FC<HistoryEventCardProps> = ({ event }) => {
  return (
    <div className="text-left px-4">
      {/* Content */}
      <h4 className="text-[#3A4D39] text-xl font-bold mb-3">{event.title}</h4>
      <p className="text-[#555555] text-sm">{event.description}</p>
    </div>
  );
};

export default HistoryEventCard;