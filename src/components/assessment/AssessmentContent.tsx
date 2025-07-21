
import React from 'react';
import { QuestionPrompt } from './QuestionPrompt';
import { FeedbackMessage } from './FeedbackMessage';
import { StudyModeCards } from './StudyModeCards';
import { AssessmentActions } from './AssessmentActions';
import { ResourcesHelp } from './ResourcesHelp';
import { FlashcardsInline } from './FlashcardsInline';
import { VideoPlayerInline } from './VideoPlayerInline';
import { StudyPackDisplay } from './StudyPackDisplay';
import { AnswerOption } from './types';

interface AssessmentContentProps {
  questionPrompt: string;
  options: AnswerOption[];
  selectedOption: string | null;
  handleOptionSelect: (optionId: string) => void;
  studyMode: boolean;
  userAttempts: number;
  attempts: number;
  showFeedback: boolean;
  isCorrect: boolean;
  studyPackAdded: boolean;
  handleAddToStudyPack: () => void;
  onToolActivated: () => void;
  handleSubmit: () => void;
  handleResourcesToggle: () => void;
  showResources: boolean;
  handleHighlightConcept: () => void;
  handleVideoOpen: () => void;
  handleFlashcardsOpen: () => void;
  showFlashcards: boolean;
  showVideo: boolean;
  correctAnswerText: string;
}

export const AssessmentContent: React.FC<AssessmentContentProps> = ({
  questionPrompt,
  options,
  selectedOption,
  handleOptionSelect,
  studyMode,
  userAttempts,
  attempts,
  showFeedback,
  isCorrect,
  studyPackAdded,
  handleAddToStudyPack,
  onToolActivated,
  handleSubmit,
  handleResourcesToggle,
  showResources,
  handleHighlightConcept,
  handleVideoOpen,
  handleFlashcardsOpen,
  showFlashcards,
  showVideo,
  correctAnswerText,
}) => {
  return (
    <>
      <QuestionPrompt 
        questionPrompt={questionPrompt}
        options={options}
        selectedOption={selectedOption}
        handleOptionSelect={handleOptionSelect}
        studyMode={studyMode}
        userAttempts={userAttempts}
        attempts={attempts}
      />
      
      <FeedbackMessage 
        showFeedback={showFeedback}
        isCorrect={isCorrect}
      />
      
      {studyMode ? (
        <StudyModeCards 
          studyPackAdded={studyPackAdded}
          handleAddToStudyPack={handleAddToStudyPack}
          questionPrompt={questionPrompt}
          correctAnswer={correctAnswerText}
          onToolActivated={onToolActivated}
        />
      ) : (
        <AssessmentActions
          selectedOption={selectedOption}
          userAttempts={userAttempts}
          attempts={attempts}
          handleSubmit={handleSubmit}
          handleResourcesToggle={handleResourcesToggle}
        />
      )}
      
      <StudyPackDisplay
        studyPackAdded={studyPackAdded}
        questionPrompt={questionPrompt}
        correctAnswerText={correctAnswerText}
      />
      
      <ResourcesHelp
        showResources={showResources && !studyMode}
        handleHighlightConcept={handleHighlightConcept}
        handleVideoOpen={handleVideoOpen}
      />
      
      {showFlashcards && !studyMode && (
        <FlashcardsInline onClose={() => handleFlashcardsOpen()} />
      )}
      
      {showVideo && !studyMode && (
        <VideoPlayerInline onClose={() => handleVideoOpen()} />
      )}
    </>
  );
};
