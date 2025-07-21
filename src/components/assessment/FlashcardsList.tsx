
import React from 'react';
import { Trash2 } from "lucide-react";
import { UserFlashcard } from '@/services/flashcardService';

interface FlashcardsListProps {
  userFlashcards: UserFlashcard[];
  onDeleteFlashcard: (cardId: number) => void;
}

export const FlashcardsList: React.FC<FlashcardsListProps> = ({
  userFlashcards,
  onDeleteFlashcard
}) => {
  if (userFlashcards.length === 0) return null;

  return (
    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
      <h4 className="text-sm font-medium text-blue-900 mb-2">Recently added Flashcard(s)</h4>
      <div className="space-y-2 max-h-32 overflow-y-auto">
        {userFlashcards
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .map((card) => (
          <div key={card.id} className="flex items-start justify-between p-2 bg-white rounded border">
            <div className="flex-1 pr-2">
              <p className="text-xs font-medium text-gray-900 line-clamp-2">{card.question}</p>
              <p className="text-xs text-gray-500 mt-1">
                Added: {new Date(card.created_at).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => onDeleteFlashcard(card.id)}
              className="text-red-500 hover:text-red-700 flex-shrink-0"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
