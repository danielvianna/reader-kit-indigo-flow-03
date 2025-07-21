
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface StudyPackDisplayProps {
  studyPackAdded: boolean;
  questionPrompt: string;
  correctAnswerText: string;
}

export const StudyPackDisplay: React.FC<StudyPackDisplayProps> = ({
  studyPackAdded,
  questionPrompt,
  correctAnswerText,
}) => {
  if (!studyPackAdded) return null;

  return (
    <div className="mt-6 mb-2">
      <div className="flex items-center gap-2 mb-3">
        <BookOpen className="h-5 w-5 text-chalk-white" />
        <h4 className="text-md font-semibold text-chalk-white">📘 Study Pack</h4>
      </div>
      <Card className="border border-white border-opacity-20 bg-white bg-opacity-10">
        <CardContent className="p-4">
          <div className="mb-3">
            <h5 className="text-sm font-medium text-chalk-white mb-2">Question:</h5>
            <p className="text-sm text-chalk-white text-opacity-80">{questionPrompt}</p>
          </div>
          <div>
            <h5 className="text-sm font-medium text-chalk-white mb-2">Correct Answer:</h5>
            <p className="text-sm text-accent-mentor font-medium">{correctAnswerText}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
