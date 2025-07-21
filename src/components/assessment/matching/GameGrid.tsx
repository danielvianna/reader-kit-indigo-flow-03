
import React from 'react';
import { MatchingCard } from './MatchingCard';
import { MatchingCard as MatchingCardType } from './types';

interface GameGridProps {
  cards: MatchingCardType[];
  onCardClick: (cardId: string) => void;
  isChecking: boolean;
}

export const GameGrid: React.FC<GameGridProps> = ({ cards, onCardClick, isChecking }) => {
  const visibleCards = cards.filter(card => !card.isMatched);

  return (
    <div className="bg-slate-50 rounded-lg p-6">
      <div className={`grid gap-4 ${
        visibleCards.length <= 2 ? 'grid-cols-1 max-w-md mx-auto' :
        visibleCards.length <= 4 ? 'grid-cols-2' : 
        'grid-cols-3'
      }`}>
        {visibleCards.map((card) => (
          <MatchingCard 
            key={card.id}
            card={card}
            onCardClick={onCardClick}
            isChecking={isChecking}
          />
        ))}
      </div>
    </div>
  );
};
