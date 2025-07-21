
import React from 'react';
import { RadioGroup } from "@/components/ui/radio-group";
import { AnswerOption } from './types';
import { AnswerOptionItem } from './AnswerOptionItem';

interface QuestionPromptProps {
  questionPrompt: string;
  options: AnswerOption[];
  selectedOption: string | null;
  handleOptionSelect: (optionId: string) => void;
  studyMode: boolean;
  userAttempts: number;
  attempts: number;
}

export const QuestionPrompt: React.FC<QuestionPromptProps> = ({
  questionPrompt,
  options,
  selectedOption,
  handleOptionSelect,
  studyMode,
  userAttempts,
  attempts,
}) => {
  if (studyMode) return null;

  return (
    <div className="mb-4">
      <p className="text-sm text-chalk-white font-medium mb-3">{questionPrompt}</p>
      
      <RadioGroup className="space-y-2" value={selectedOption || ""} onValueChange={handleOptionSelect}>
        {options.map((option) => (
          <AnswerOptionItem 
            key={option.id}
            option={option}
            selectedOption={selectedOption}
            handleOptionSelect={handleOptionSelect}
            disabled={studyMode || userAttempts >= attempts}
          />
        ))}
      </RadioGroup>
    </div>
  );
};
