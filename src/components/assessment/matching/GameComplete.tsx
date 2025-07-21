
import React from 'react';
import { Button } from "@/components/ui/button";

interface GameCompleteProps {
  onPlayAgain: () => void;
}

export const GameComplete: React.FC<GameCompleteProps> = ({ onPlayAgain }) => {
  return (
    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
      <p className="text-green-800 font-medium">🎉 Congratulations! You matched all pairs!</p>
      <Button 
        onClick={onPlayAgain} 
        className="mt-2 bg-green-600 hover:bg-green-700"
        size="sm"
      >
        Play Again
      </Button>
    </div>
  );
};
