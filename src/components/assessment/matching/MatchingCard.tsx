
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from 'lucide-react';
import { MatchingCard as MatchingCardType } from './types';

interface MatchingCardProps {
  card: MatchingCardType;
  onCardClick: (cardId: string) => void;
  isChecking: boolean;
}

export const MatchingCard: React.FC<MatchingCardProps> = ({ card, onCardClick, isChecking }) => {
  const getCardStyle = () => {
    if (card.isCorrect) {
      return "bg-emerald-50 border-2 border-emerald-500 text-emerald-800";
    }
    if (card.isIncorrect) {
      return "bg-red-50 border-2 border-red-500 text-red-800";
    }
    if (card.isSelected) {
      return "bg-blue-50 border-2 border-blue-500 text-blue-800";
    }
    
    // Different background colors for questions vs answers
    if (card.type === 'answer') {
      return "bg-slate-100 border border-slate-300 hover:border-slate-400 cursor-pointer text-slate-800";
    } else {
      return "bg-white border border-slate-200 hover:border-slate-300 cursor-pointer text-slate-700";
    }
  };

  const getCardIcon = () => {
    if (card.isCorrect) {
      return <Check className="h-4 w-4 text-emerald-600" />;
    }
    if (card.isIncorrect) {
      return <X className="h-4 w-4 text-red-600" />;
    }
    return null;
  };

  return (
    <Card 
      className={`transition-all duration-200 ${getCardStyle()} ${
        isChecking ? 'cursor-default' : ''
      } min-h-[120px] relative`}
      onClick={() => onCardClick(card.id)}
    >
      <CardContent className="p-4 h-full flex flex-col">
        <div className="flex items-start justify-end mb-2">
          {getCardIcon() && (
            <div>
              {getCardIcon()}
            </div>
          )}
        </div>
        <p className="text-sm font-medium leading-tight flex-grow">
          {card.content}
        </p>
      </CardContent>
    </Card>
  );
};
