
import { UserFlashcard } from '@/services/flashcardService';

export interface MatchingCard {
  id: string;
  content: string;
  type: 'question' | 'answer';
  pairId: string;
  isMatched: boolean;
  isSelected: boolean;
  isCorrect?: boolean;
  isIncorrect?: boolean;
}

export interface FlashcardPair {
  id: string;
  question: string;
  answer: string;
}

export interface MatchingGameProps {
  userFlashcards: UserFlashcard[];
}
