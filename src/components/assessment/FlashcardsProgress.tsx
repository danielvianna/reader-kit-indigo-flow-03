
import React from 'react';

interface FlashcardsProgressProps {
  totalCards: number;
}

export const FlashcardsProgress: React.FC<FlashcardsProgressProps> = ({
  totalCards
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 text-center">
      {/* Progress chart on left side */}
      <div className="w-full md:w-1/2">
        <div className="relative mb-6 max-w-[180px] mx-auto">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="8"/>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#7A5AF8" strokeWidth="8" strokeDasharray="0 283" strokeDashoffset="0"/>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">0%</span>
            <span className="text-sm font-medium">Learned</span>
          </div>
        </div>
      </div>
      
      {/* Legend on right side */}
      <div className="w-full md:w-1/2">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-teal-400"></span>
            <span className="text-xs text-left">Nailed it: 0</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-purple-300"></span>
            <span className="text-xs text-left">Almost there: 0</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-amber-600"></span>
            <span className="text-xs text-left">Not really: 2</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="text-xs text-left">No clue: 1</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-gray-400"></span>
            <span className="text-xs text-left">Not rated: {totalCards - 3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
