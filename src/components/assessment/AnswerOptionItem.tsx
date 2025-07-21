
import React from 'react';
import { RadioGroupItem } from "@/components/ui/radio-group";
import { AnswerOption } from './types';

interface AnswerOptionItemProps {
  option: AnswerOption;
  selectedOption: string | null;
  handleOptionSelect: (optionId: string) => void;
  disabled: boolean;
}

export const AnswerOptionItem: React.FC<AnswerOptionItemProps> = ({
  option,
  selectedOption,
  handleOptionSelect,
  disabled,
}) => {
  return (
    <div 
      className={`flex items-start p-3 border rounded-xl cursor-pointer transition-colors duration-200 ${
        selectedOption === option.id 
          ? 'border-chalk-white bg-tile-indigo-hover' 
          : 'border-chalk-white border-opacity-30 hover:border-chalk-white hover:bg-tile-indigo-hover'
      }`}
      onClick={() => handleOptionSelect(option.id)}
    >
      <RadioGroupItem id={option.id} value={option.id} className="mr-3 border-chalk-white text-chalk-white" />
      <label htmlFor={option.id} className="text-sm text-chalk-white cursor-pointer font-open-sans">{option.text}</label>
    </div>
  );
};
