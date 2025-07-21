
import React from 'react';

interface AssessmentHeaderProps {
  index: number;
  userAttempts: number;
  attempts: number;
}

export const AssessmentHeader: React.FC<AssessmentHeaderProps> = ({
  index,
  userAttempts,
  attempts,
}) => {
  const topicNames = [
    "Wundt's Contribution to Psychology",
    "Titchener and Structuralism",
    "William James and Functionalism"
  ];
  
  const topicName = topicNames[index] || "Psychology Concepts";
  const formattedTitle = `Graded Question ${index + 1} – ${topicName}`;

  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-md font-semibold text-chalk-white">{formattedTitle}</h3>
      <span className="text-xs text-chalk-white text-opacity-80">
        Attempts: {userAttempts} of {attempts}
      </span>
    </div>
  );
};
