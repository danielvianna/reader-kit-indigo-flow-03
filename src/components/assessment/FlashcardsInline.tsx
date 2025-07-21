import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, SquareStack, Grid2x2 } from "lucide-react";
import { flashcardService, UserFlashcard } from '@/services/flashcardService';
import { useToast } from "@/hooks/use-toast";
import { useSession } from "@/hooks/useSession";
import { MatchingGame } from './MatchingGame';
import { FlashcardPractice } from './FlashcardPractice';
import { FlashcardsList } from './FlashcardsList';
import { FlashcardsProgress } from './FlashcardsProgress';

interface FlashcardsInlineProps {
  onClose: () => void;
}

interface Flashcard {
  question: string;
  answer: string;
  isUserGenerated?: boolean;
  id?: string;
  created_at?: string;
}

export const FlashcardsInline: React.FC<FlashcardsInlineProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("flashcards");
  const [isPracticing, setIsPracticing] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userFlashcards, setUserFlashcards] = useState<UserFlashcard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { sessionId } = useSession();
  
  // Sample flashcard data
  const sampleFlashcards: Flashcard[] = [
    {
      question: "What does the magnified view of heart tissue in the mouse illustrate?",
      answer: "Structure fits function at all levels of organization"
    },
    {
      question: "Which of the following is NOT one of the themes of biology?",
      answer: "Genetic information stored in RNA"
    },
    {
      question: "The scientific method involves which of the following steps?",
      answer: "Observation, Question, Hypothesis, Prediction, Test, Analysis"
    }
  ];

  // Combine and prioritize user flashcards first, ordered by creation time (newest first)
  const allFlashcards: Flashcard[] = [
    // User flashcards first, sorted by created_at descending (newest first)
    ...userFlashcards
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .map(card => ({
        question: card.question,
        answer: card.answer,
        isUserGenerated: true,
        id: card.id.toString(),
        created_at: card.created_at
      })),
    // Then sample flashcards
    ...sampleFlashcards
  ];
  
  useEffect(() => {
    if (sessionId) {
      loadUserFlashcards();
    }
  }, [sessionId]);

  const loadUserFlashcards = async () => {
    if (!sessionId) return;
    
    try {
      setIsLoading(true);
      const cards = await flashcardService.getUserFlashcards(sessionId);
      setUserFlashcards(cards);
    } catch (error) {
      console.error('Error loading user flashcards:', error);
      toast({
        title: "Error",
        description: "Failed to load your flashcards for this session.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteFlashcard = async (cardId: number) => {
    try {
      await flashcardService.deleteFlashcard(cardId);
      await loadUserFlashcards();
      toast({
        title: "Flashcard Deleted",
        description: "Your flashcard has been removed from this session.",
      });
    } catch (error) {
      console.error('Error deleting flashcard:', error);
      toast({
        title: "Error",
        description: "Failed to delete flashcard.",
        variant: "destructive",
      });
    }
  };
  
  const handleStartPractice = () => {
    setIsPracticing(true);
    setCurrentCardIndex(0);
    setShowAnswer(false);
  };
  
  const handleClosePractice = () => {
    setIsPracticing(false);
    setShowAnswer(false);
  };
  
  const handleNextCard = () => {
    if (currentCardIndex < allFlashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    } else {
      handleClosePractice();
    }
  };
  
  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
    }
  };
  
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  
  if (isPracticing) {
    const currentCard = allFlashcards[currentCardIndex];
    return (
      <FlashcardPractice
        currentCard={currentCard}
        currentCardIndex={currentCardIndex}
        totalCards={allFlashcards.length}
        showAnswer={showAnswer}
        onClose={handleClosePractice}
        onToggleAnswer={toggleAnswer}
        onNextCard={handleNextCard}
        onPrevCard={handlePrevCard}
      />
    );
  }

  return (
    <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <select className="text-sm font-medium border border-gray-300 rounded-md py-1 px-2 pr-8 focus:outline-none focus:ring-2 focus:ring-pearson-indigo focus:border-pearson-indigo">
            <option>Psychology Concepts</option>
          </select>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={18} />
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Include:</p>
        <div className="flex gap-2 mb-3 flex-wrap">
          <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-md">Pearson+ cards</span>
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-md">Your cards ({userFlashcards.length})</span>
          <span className="bg-white text-gray-700 border border-gray-300 text-xs px-3 py-1 rounded-md">Key term cards</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <a href="#" className="text-xs text-pearson-indigo">View All</a>
        </div>
      </div>

      <FlashcardsList 
        userFlashcards={userFlashcards}
        onDeleteFlashcard={handleDeleteFlashcard}
      />
      
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab("flashcards")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg border transition-colors ${
            activeTab === "flashcards"
              ? "bg-purple-600 text-white border-purple-600"
              : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
          }`}
        >
          <SquareStack className="h-5 w-5" />
          Flashcards
        </button>
        <button
          onClick={() => setActiveTab("matching")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg border transition-colors ${
            activeTab === "matching"
              ? "bg-purple-600 text-white border-purple-600"
              : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
          }`}
        >
          <Grid2x2 className="h-5 w-5" />
          Matching
        </button>
      </div>
      
      <div className={activeTab === "flashcards" ? "block" : "hidden"}>
        <FlashcardsProgress totalCards={allFlashcards.length} />
        
        <p className="text-sm text-gray-700 mb-6 text-center px-4">
          Practice in this adaptive experience that shows you the cards you most need to practice based on your confidence.
        </p>
        
        <Button 
          className="w-full max-w-xs mx-auto block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all text-white font-medium py-2 px-4 rounded-lg"
          onClick={handleStartPractice}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Practice'}
        </Button>
      </div>
      
      <div className={activeTab === "matching" ? "block" : "hidden"}>
        <MatchingGame userFlashcards={userFlashcards} />
      </div>
    </div>
  );
};
