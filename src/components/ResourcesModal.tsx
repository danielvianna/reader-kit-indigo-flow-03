
import React, { useState } from 'react';
import VideoModal from './VideoModal';
import { highlightRelevantConcept } from './assessment/highlightUtils';

type ResourcesModalProps = {
  onClose: () => void;
  questionIndex: number;
};

const ResourcesModal: React.FC<ResourcesModalProps> = ({ onClose, questionIndex }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleHighlightConcept = () => {
    // We'll close the modal and then highlight the relevant content
    onClose();
    
    // Use our centralized highlight function
    setTimeout(() => {
      highlightRelevantConcept(questionIndex);
    }, 100);
  };

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  // If showing video, render that instead of resources modal
  if (showVideo) {
    return <VideoModal onClose={() => {
      setShowVideo(false);
      onClose();
    }} />;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-pearson-text">Study Resources</h3>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <button
                onClick={handleHighlightConcept}
                className="w-full p-4 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-pearson-indigo transition-colors"
              >
                <h4 className="text-pearson-text font-medium mb-1">Highlight the relevant concept</h4>
                <p className="text-sm text-gray-600">
                  Navigate back to the text and highlight the specific concept related to this question.
                </p>
              </button>
            </div>
            
            <div>
              <button
                onClick={handleWatchVideo}
                className="w-full p-4 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-pearson-indigo transition-colors"
              >
                <h4 className="text-pearson-text font-medium mb-1">Watch a Study & Exam Prep Video</h4>
                <p className="text-sm text-gray-600">
                  View a short video explaining this concept and how it might appear on exams.
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesModal;
