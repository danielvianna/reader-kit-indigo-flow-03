
export type AnswerOption = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type AssessmentKitProps = {
  title: string;
  attempts: number;
  questionPrompt: string;
  options: AnswerOption[];
  index: number;
};
