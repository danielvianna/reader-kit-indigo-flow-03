
import React, { useState, useEffect } from 'react';
import { AssessmentContainer } from './assessment/AssessmentContainer';
import { AssessmentHeader } from './assessment/AssessmentHeader';
import { AssessmentContent } from './assessment/AssessmentContent';
import { highlightRelevantConcept } from './assessment/highlightUtils';
import { AssessmentKitProps } from './assessment/types';

const AssessmentKit: React.FC<AssessmentKitProps> = ({
  title,
  attempts,
  questionPrompt,
  options,
  index,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [userAttempts, setUserAttempts] = useState(0);
  const [studyMode, setStudyMode] = useState(false);
  const [studyPackAdded, setStudyPackAdded] = useState(false);
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const correctOption = options.find(option => option.isCorrect);
  const correctAnswerText = correctOption?.text || '';
  
  // Auto-open resources when incorrect answer is given
  useEffect(() => {
    if (showFeedback && !isCorrect) {
      setShowResources(true);
    }
  }, [showFeedback, isCorrect]);
  
  const handleOptionSelect = (optionId: string) => {
    if (!studyMode && userAttempts < attempts) {
      setSelectedOption(optionId);
      if (showFeedback && !isCorrect) {
        setShowFeedback(false);
        setShowResources(false);
      }
    }
  };
  
  const handleSubmit = () => {
    if (!selectedOption || studyMode) return;
    
    const selected = options.find(option => option.id === selectedOption);
    const correct = !!selected?.isCorrect;
    setIsCorrect(correct);
    setShowFeedback(true);
    setUserAttempts(prev => prev + 1);
    
    if (correct) {
      setStudyMode(true);
    }
  };
  
  const handleResourcesToggle = () => {
    setShowResources(!showResources);
  };
  
  const handleAddToStudyPack = () => {
    setStudyPackAdded(true);
  };
  
  const handleHighlightConcept = () => {
    setShowResources(false);
    highlightRelevantConcept(index);
  };
  
  const handleVideoOpen = () => {
    setShowResources(false);
    setShowVideo(true);
    setShowFlashcards(false);
  };
  
  const handleFlashcardsOpen = () => {
    setShowResources(false);
    setShowFlashcards(true);
    setShowVideo(false);
  };

  const handleToolActivated = () => {
    setIsExpanded(true);
  };
  
  return (
    <AssessmentContainer
      studyMode={studyMode}
      isExpanded={isExpanded}
      showFlashcards={showFlashcards}
      showVideo={showVideo}
    >
      <AssessmentHeader
        index={index}
        userAttempts={userAttempts}
        attempts={attempts}
      />
      
      <AssessmentContent
        questionPrompt={questionPrompt}
        options={options}
        selectedOption={selectedOption}
        handleOptionSelect={handleOptionSelect}
        studyMode={studyMode}
        userAttempts={userAttempts}
        attempts={attempts}
        showFeedback={showFeedback}
        isCorrect={isCorrect}
        studyPackAdded={studyPackAdded}
        handleAddToStudyPack={handleAddToStudyPack}
        onToolActivated={handleToolActivated}
        handleSubmit={handleSubmit}
        handleResourcesToggle={handleResourcesToggle}
        showResources={showResources}
        handleHighlightConcept={handleHighlightConcept}
        handleVideoOpen={handleVideoOpen}
        handleFlashcardsOpen={handleFlashcardsOpen}
        showFlashcards={showFlashcards}
        showVideo={showVideo}
        correctAnswerText={correctAnswerText}
      />
    </AssessmentContainer>
  );
};

export default AssessmentKit;
