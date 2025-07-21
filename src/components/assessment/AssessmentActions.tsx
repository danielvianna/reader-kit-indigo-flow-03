
import React from 'react';
import { Button } from "@/components/ui/button";

interface AssessmentActionsProps {
  selectedOption: string | null;
  userAttempts: number;
  attempts: number;
  handleSubmit: () => void;
  handleResourcesToggle: () => void;
}

export const AssessmentActions: React.FC<AssessmentActionsProps> = ({
  selectedOption,
  userAttempts,
  attempts,
  handleSubmit,
  handleResourcesToggle,
}) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <Button
        onClick={handleSubmit}
        disabled={!selectedOption || (userAttempts >= attempts)}
        size="sm"
        className={`text-sm font-bold ${
          !selectedOption || (userAttempts >= attempts)
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
            : 'bg-[#FFD60A] text-black hover:bg-[#FFD60A]/90 border-none'
        } px-6 py-3 rounded-lg`}
      >
        Submit
      </Button>
      
      <Button
        onClick={handleResourcesToggle}
        variant="outline"
        size="sm"
        className="text-xs text-white border-chalk-white/20 hover:border-chalk-white/40 hover:opacity-90 font-normal flex-grow text-left justify-start bg-gradient-wave"
      >
        Need help answering this question?
      </Button>
    </div>
  );
};
