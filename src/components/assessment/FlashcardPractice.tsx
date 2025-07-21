
import React from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface Flashcard {
  question: string;
  answer: string;
  isUserGenerated?: boolean;
  id?: string;
  created_at?: string;
}

interface FlashcardPracticeProps {
  currentCard: Flashcard;
  currentCardIndex: number;
  totalCards: number;
  showAnswer: boolean;
  onClose: () => void;
  onToggleAnswer: () => void;
  onNextCard: () => void;
  onPrevCard: () => void;
}

export const FlashcardPractice: React.FC<FlashcardPracticeProps> = ({
  currentCard,
  currentCardIndex,
  totalCards,
  showAnswer,
  onClose,
  onToggleAnswer,
  onNextCard,
  onPrevCard
}) => {
  return (
    <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Psychology Concepts</p>
          <p className="text-xs text-gray-400">
            Card {currentCardIndex + 1} of {totalCards}
          </p>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={18} />
        </button>
      </div>
      
      <div className="bg-white rounded-xl p-6 mb-4 border border-gray-200 min-h-[200px] flex flex-col">
        <p className="text-lg font-medium mb-4">
          {currentCard?.question}
        </p>
        
        {showAnswer ? (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="font-medium text-green-600">{currentCard?.answer}</p>
          </div>
        ) : (
          <Button 
            onClick={onToggleAnswer} 
            variant="outline" 
            className="mt-auto mx-auto"
          >
            Show Answer
          </Button>
        )}
      </div>
      
      {showAnswer && (
        <div className="mb-6">
          <p className="mb-2 text-sm text-center text-gray-600">How well did you know this?</p>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <button 
                className="w-10 h-10 rounded-full bg-red-400 text-white flex items-center justify-center hover:bg-red-500 transition-colors"
                onClick={onNextCard}
              >
                1
              </button>
              <span className="mt-2 text-xs text-center leading-tight">No clue</span>
            </div>
            <div className="flex flex-col items-center">
              <button 
                className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors"
                onClick={onNextCard}
              >
                2
              </button>
              <span className="mt-2 text-xs text-center leading-tight">Not really</span>
            </div>
            <div className="flex flex-col items-center">
              <button 
                className="w-10 h-10 rounded-full bg-purple-300 text-white flex items-center justify-center hover:bg-purple-400 transition-colors"
                onClick={onNextCard}
              >
                3
              </button>
              <span className="mt-2 text-xs text-center leading-tight">Almost</span>
            </div>
            <div className="flex flex-col items-center">
              <button 
                className="w-10 h-10 rounded-full bg-teal-400 text-white flex items-center justify-center hover:bg-teal-500 transition-colors"
                onClick={onNextCard}
              >
                4
              </button>
              <span className="mt-2 text-xs text-center leading-tight">Nailed it</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-between mt-4">
        <Button 
          variant="outline" 
          onClick={onPrevCard}
          disabled={currentCardIndex === 0}
          size="sm"
        >
          Previous
        </Button>
        
        <Button 
          variant="outline"
          onClick={onNextCard}
          size="sm"
        >
          {currentCardIndex === totalCards - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </div>
  );
};
