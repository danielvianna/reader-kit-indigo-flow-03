
import React from 'react';
import { Button } from "@/components/ui/button";
import { RotateCcw } from 'lucide-react';

interface GameHeaderProps {
  matchedPairs: number;
  totalPairs: number;
  onReset: () => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({ matchedPairs, totalPairs, onReset }) => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div className="flex-1 pr-4">
        <h3 className="text-lg font-semibold">The History of Psychology</h3>
        <p className="text-sm text-gray-600">
          Progress: {matchedPairs} of {totalPairs} matches found
        </p>
      </div>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={onReset}
        className="flex items-center gap-2 flex-shrink-0"
      >
        <RotateCcw className="h-4 w-4" />
        Reset
      </Button>
    </div>
  );
};
