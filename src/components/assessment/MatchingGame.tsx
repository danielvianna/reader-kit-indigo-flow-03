
import React, { useState } from 'react';
import { UserFlashcard } from '@/services/flashcardService';
import { MatchingCard, FlashcardPair, MatchingGameProps } from './matching/types';
import { PREMADE_FLASHCARDS } from './matching/constants';
import { GameStart } from './matching/GameStart';
import { GameHeader } from './matching/GameHeader';
import { GameComplete } from './matching/GameComplete';
import { GameGrid } from './matching/GameGrid';

export const MatchingGame: React.FC<MatchingGameProps> = ({ userFlashcards }) => {
  const [gameCards, setGameCards] = useState<MatchingCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const prepareGameData = () => {
    // Convert user flashcards to pairs
    const userPairs: FlashcardPair[] = userFlashcards.map(card => ({
      id: `user-${card.id}`,
      question: card.question,
      answer: card.answer
    }));

    // Calculate how many premade pairs we need
    const neededPairs = Math.max(0, 3 - userPairs.length);
    const selectedPremade = PREMADE_FLASHCARDS.slice(0, neededPairs);

    // Combine user and premade pairs, limit to 3 total
    const allPairs = [...userPairs, ...selectedPremade].slice(0, 3);

    // Create cards for questions and answers
    const questions: MatchingCard[] = allPairs.map(pair => ({
      id: `q-${pair.id}`,
      content: pair.question,
      type: 'question',
      pairId: pair.id,
      isMatched: false,
      isSelected: false
    }));

    const answers: MatchingCard[] = allPairs.map(pair => ({
      id: `a-${pair.id}`,
      content: pair.answer,
      type: 'answer',
      pairId: pair.id,
      isMatched: false,
      isSelected: false
    }));

    // Shuffle all cards together
    const allCards = [...questions, ...answers];
    const shuffledCards = allCards.sort(() => Math.random() - 0.5);

    return shuffledCards;
  };

  const startGame = () => {
    const cards = prepareGameData();
    setGameCards(cards);
    setSelectedCards([]);
    setMatchedPairs(0);
    setGameStarted(true);
    setGameCompleted(false);
    setIsChecking(false);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameCompleted(false);
    setSelectedCards([]);
    setMatchedPairs(0);
    setGameCards([]);
    setIsChecking(false);
  };

  const handleCardClick = (cardId: string) => {
    if (isChecking || selectedCards.length >= 2) return;

    const card = gameCards.find(c => c.id === cardId);
    if (!card || card.isMatched || card.isSelected) return;

    const newSelectedCards = [...selectedCards, cardId];
    setSelectedCards(newSelectedCards);

    // Update card selection state
    setGameCards(prev => prev.map(c => 
      c.id === cardId ? { ...c, isSelected: true } : c
    ));

    // Check for match when two cards are selected
    if (newSelectedCards.length === 2) {
      setIsChecking(true);
      setTimeout(() => {
        checkForMatch(newSelectedCards);
      }, 1000);
    }
  };

  const checkForMatch = (selectedCardIds: string[]) => {
    const [card1Id, card2Id] = selectedCardIds;
    const card1 = gameCards.find(c => c.id === card1Id);
    const card2 = gameCards.find(c => c.id === card2Id);

    if (card1 && card2 && card1.pairId === card2.pairId && card1.type !== card2.type) {
      // Match found! Mark cards as matched and show success feedback
      setGameCards(prev => prev.map(c => 
        c.id === card1Id || c.id === card2Id 
          ? { ...c, isMatched: true, isSelected: false, isCorrect: true }
          : { ...c, isSelected: false }
      ));
      
      const newMatchedPairs = matchedPairs + 1;
      setMatchedPairs(newMatchedPairs);
      
      if (newMatchedPairs === 3) {
        setGameCompleted(true);
      }
    } else {
      // No match - show incorrect feedback briefly then deselect
      setGameCards(prev => prev.map(c => 
        c.id === card1Id || c.id === card2Id 
          ? { ...c, isIncorrect: true, isSelected: false }
          : { ...c, isSelected: false }
      ));
      
      // Clear incorrect feedback after a brief moment
      setTimeout(() => {
        setGameCards(prev => prev.map(c => 
          ({ ...c, isIncorrect: false })
        ));
      }, 1000);
    }

    setSelectedCards([]);
    setIsChecking(false);
  };

  if (!gameStarted) {
    return <GameStart userFlashcards={userFlashcards} onStartGame={startGame} />;
  }

  return (
    <div className="bg-white rounded-lg p-6">
      <GameHeader 
        matchedPairs={matchedPairs} 
        totalPairs={3} 
        onReset={resetGame} 
      />

      {gameCompleted && <GameComplete onPlayAgain={resetGame} />}

      <GameGrid 
        cards={gameCards}
        onCardClick={handleCardClick}
        isChecking={isChecking}
      />

      {selectedCards.length > 0 && !gameCompleted && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {selectedCards.length === 1 
              ? "Select another card to check for a match" 
              : isChecking 
                ? "Checking for match..." 
                : ""}
          </p>
        </div>
      )}
    </div>
  );
};
