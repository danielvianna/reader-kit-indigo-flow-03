import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Play, Book } from "lucide-react";
import { FlashcardsInline } from './assessment/FlashcardsInline';
import { VideoPlayerInline } from './assessment/VideoPlayerInline';

interface AnswerOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface StudyModeAssessmentKitProps {
  title: string;
  attempts: number;
  questionPrompt: string;
  options: AnswerOption[];
  index: number;
  completedDate: string;
}

const StudyModeAssessmentKit: React.FC<StudyModeAssessmentKitProps> = ({
  title,
  attempts,
  questionPrompt,
  options,
  index,
  completedDate,
}) => {
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const flashcardsRef = useRef<HTMLDivElement>(null);

  console.log('StudyModeAssessmentKit render - showVideo:', showVideo, 'showFlashcards:', showFlashcards);

  const correctOption = options.find(option => option.isCorrect);
  const correctAnswerText = correctOption?.text || '';

  // Topic names for each assignment
  const topicNames = [
    "Wundt's Contribution to Psychology",
    "Titchener and Structuralism",
    "William James and Functionalism [Updated]"
  ];

  const topicName = topicNames[index] || "Psychology Concepts";
  const formattedTitle = `Graded Question ${index + 1} – ${topicName}`;

  // Scroll into view when flashcards open
  useEffect(() => {
    if (showFlashcards && flashcardsRef.current) {
      // Small delay to ensure the component is fully rendered
      setTimeout(() => {
        flashcardsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }, 100);
    }
  }, [showFlashcards]);

  const handleVideoOpen = () => {
    console.log('handleVideoOpen called');
    setShowVideo(true);
    setShowFlashcards(false);
  };

  const handleVideoClose = () => {
    console.log('handleVideoClose called - current showVideo state:', showVideo);
    setShowVideo(false);
    console.log('handleVideoClose - setShowVideo(false) called');
    // Force a re-render by updating state in a callback
    setTimeout(() => {
      console.log('handleVideoClose - setTimeout callback, showVideo should now be:', false);
    }, 0);
  };

  const handleFlashcardsOpen = () => {
    console.log('handleFlashcardsOpen called');
    setShowFlashcards(true);
    setShowVideo(false);
  };

  const handleFlashcardsClose = () => {
    console.log('handleFlashcardsClose called');
    setShowFlashcards(false);
  };

  // Determine if kit should be expanded
  const isExpanded = showFlashcards || showVideo;

  return (
    <div className={`my-5 border-0 rounded-xl bg-tile-indigo p-6 assessment-kit study-mode-card font-open-sans transition-all duration-300 ${isExpanded
        ? 'w-full max-w-none mx-0'
        : 'w-3/4 mx-auto'
      }`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold text-chalk-white">{formattedTitle}</h3>
      </div>

      {/* Green Completion Banner */}
      <div className="p-4 rounded-xl mb-4 transition-all duration-500 ease-in-out font-open-sans bg-accent-mentor text-chalk-white">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5" />
          <p className="text-sm font-medium">
            You answered this question correctly on {completedDate}. <span className="text-xs text-chalk-white/80">Attempts: {attempts}</span>
          </p>
        </div>
      </div>

      {/* Question and Answer in Study Pack Style */}
      <div className="mb-6">
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

      {/* Updated Card-style Resources Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Watch Study Prep Video Card */}
        <Card
          className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02] rounded-2xl"
          onClick={handleVideoOpen}
        >
          <CardContent className="p-4 flex flex-col items-center text-center h-full">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3">
              <Play className="h-6 w-6 text-white fill-white" />
            </div>
            <h4 className="text-lg font-semibold text-slate-800 mb-2">Watch Study Prep Video</h4>
            <p className="text-sm text-gray-600 leading-relaxed">View a short video explaining this concept</p>
          </CardContent>
        </Card>

        {/* Review Flashcards Card */}
        <Card
          className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02] rounded-2xl"
          onClick={handleFlashcardsOpen}
        >
          <CardContent className="p-4 flex flex-col items-center text-center h-full">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-3">
              <Book className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-slate-800 mb-2">Review Flashcards</h4>
            <p className="text-sm text-gray-600 leading-relaxed">Practice AI-generated flashcards related to this concept</p>
          </CardContent>
        </Card>
      </div>

      {showFlashcards && (
        <div ref={flashcardsRef}>
          <FlashcardsInline onClose={handleFlashcardsClose} />
        </div>
      )}

      {showVideo && (
        <VideoPlayerInline onClose={handleVideoClose} />
      )}
    </div>
  );
};

export default StudyModeAssessmentKit;
