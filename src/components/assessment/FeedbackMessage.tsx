
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeedbackMessageProps {
  showFeedback: boolean;
  isCorrect: boolean;
}

export const FeedbackMessage: React.FC<FeedbackMessageProps> = ({ 
  showFeedback,
  isCorrect 
}) => {
  if (!showFeedback) return null;
  
  return (
    <div className={`p-4 rounded-xl mb-4 transition-all duration-500 ease-in-out font-open-sans ${
      isCorrect 
        ? 'bg-accent-mentor text-chalk-white' 
        : 'bg-[#FFF2F2] text-[#B80000] px-4 py-3'
    }`}>
      {isCorrect && (
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="h-5 w-5" />
          <p className="text-sm font-semibold">Congratulations!</p>
        </div>
      )}
      <p className="text-sm font-medium">
        {isCorrect 
          ? 'Nice work! You\'ve earned credit for this graded question.' 
          : 'Not quite right. Take another look at the content or try using the resources below for help.'}
      </p>
    </div>
  );
};
