
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shuffle } from 'lucide-react';
import { UserFlashcard } from '@/services/flashcardService';

interface GameStartProps {
  userFlashcards: UserFlashcard[];
  onStartGame: () => void;
}

export const GameStart: React.FC<GameStartProps> = ({ userFlashcards, onStartGame }) => {
  return (
    <div className="bg-white rounded-lg p-8 flex flex-col items-center justify-center min-h-64">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">Matching Exercise</h3>
        <p className="text-gray-600 text-sm mb-4">
          Match questions with their correct answers. We'll use your flashcards 
          {userFlashcards.length > 0 && ` (${userFlashcards.length} available)`}
          {userFlashcards.length < 3 && ` plus some premade questions`} 
          to create 3 matching pairs.
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
            Your cards: {userFlashcards.length}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded">
            Premade: {Math.max(0, 3 - userFlashcards.length)}
          </span>
        </div>
      </div>
      <Button 
        onClick={onStartGame}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all text-white font-medium py-2 px-6 rounded-lg flex items-center gap-2"
      >
        <Shuffle className="h-4 w-4" />
        Start Matching
      </Button>
    </div>
  );
};
