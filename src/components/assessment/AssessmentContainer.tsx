
import React from 'react';

interface AssessmentContainerProps {
  studyMode: boolean;
  isExpanded: boolean;
  showFlashcards: boolean;
  showVideo: boolean;
  children: React.ReactNode;
}

export const AssessmentContainer: React.FC<AssessmentContainerProps> = ({
  studyMode,
  isExpanded,
  showFlashcards,
  showVideo,
  children,
}) => {
  return (
    <div className={`my-5 border-0 rounded-xl bg-tile-indigo p-6 assessment-kit transition-all duration-300 ease-in-out font-open-sans mx-auto ${
      studyMode ? 'study-mode-card' : ''
    } ${
      (studyMode && isExpanded) || showFlashcards || showVideo
        ? 'max-w-screen-lg w-full' 
        : 'w-3/4'
    }`}>
      {children}
    </div>
  );
};
