import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { flashcardService } from '@/services/flashcardService';
import { useToast } from "@/hooks/use-toast";
import { useSession } from "@/hooks/useSession";

interface StudyModeCardsProps {
  studyPackAdded: boolean;
  handleAddToStudyPack: () => void;
  questionPrompt: string;
  correctAnswer: string;
  onToolActivated: () => void;
}

export const StudyModeCards: React.FC<StudyModeCardsProps> = ({
  studyPackAdded,
  handleAddToStudyPack,
  questionPrompt,
  correctAnswer,
  onToolActivated,
}) => {
  const [flashcardsAdded, setFlashcardsAdded] = useState(false);
  const [isAddingFlashcard, setIsAddingFlashcard] = useState(false);
  const { toast } = useToast();
  const { sessionId } = useSession();

  const handleAddToFlashcards = async () => {
    if (flashcardsAdded || isAddingFlashcard || !sessionId) return;
    
    setIsAddingFlashcard(true);
    
    try {
      await flashcardService.addFlashcard(
        questionPrompt,
        correctAnswer,
        "Psychology Concepts", // Default topic for now
        sessionId
      );
      
      setFlashcardsAdded(true);
      toast({
        title: "Flashcard Added",
        description: "Practice this question in Flashcards",
      });
    } catch (error) {
      console.error('Error adding flashcard:', error);
      toast({
        title: "Error",
        description: "Failed to add flashcard. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAddingFlashcard(false);
    }
  };

  return (
    <div className="space-y-2">
      <Button
        onClick={handleAddToStudyPack}
        variant="ghost"
        className="w-full text-xs text-left justify-start hover:bg-tile-indigo-hover p-2 h-auto text-chalk-white/80"
      >
        <div className="flex items-center gap-2 w-full">
          <div className={`w-4 h-4 border border-chalk-white/40 rounded-sm flex items-center justify-center ${
            studyPackAdded ? 'bg-accent-mentor border-accent-mentor' : ''
          }`}>
            {studyPackAdded && <Check className="h-3 w-3 text-white" />}
          </div>
          <div className="flex-1">
            <p className="font-medium mb-0.5 text-chalk-white/80">Add to My Study Pack</p>
            <p className="text-xs text-chalk-white/60">Save this question for later review.</p>
          </div>
        </div>
      </Button>
      
      <Button
        onClick={handleAddToFlashcards}
        variant="ghost"
        disabled={isAddingFlashcard || !sessionId}
        className="w-full text-xs text-left justify-start hover:bg-tile-indigo-hover p-2 h-auto text-chalk-white/80 disabled:opacity-50"
      >
        <div className="flex items-center gap-2 w-full">
          <div className={`w-4 h-4 border border-chalk-white/40 rounded-sm flex items-center justify-center ${
            flashcardsAdded ? 'bg-accent-mentor border-accent-mentor' : ''
          }`}>
            {flashcardsAdded && <Check className="h-3 w-3 text-white" />}
          </div>
          <div className="flex-1">
            <p className="font-medium mb-0.5 text-chalk-white/80">
              {isAddingFlashcard ? 'Adding...' : 'Add to My Flashcards'}
            </p>
            <p className="text-xs text-chalk-white/60">Create flashcards from this content for this session.</p>
          </div>
        </div>
      </Button>
    </div>
  );
};
