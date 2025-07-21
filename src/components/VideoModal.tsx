
import React from 'react';

type VideoModalProps = {
  onClose: () => void;
};

const VideoModal: React.FC<VideoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl mx-4">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-pearson-text">Study & Exam Prep Video</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
            <span className="sr-only">Close</span>
          </button>
        </div>
        
        <div className="p-6">
          <div className="relative w-full aspect-video bg-gray-100 rounded-lg mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-pearson-indigo bg-opacity-90 rounded-full flex items-center justify-center text-white hover:bg-opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </button>
            </div>
            <div className="absolute bottom-4 left-4">
              <h4 className="text-white font-medium drop-shadow-md">Leadership Styles in Modern Organizations</h4>
            </div>
          </div>
          
          <h4 className="font-medium text-pearson-text mb-2">Leadership Styles in Modern Organizations</h4>
          <p className="text-sm text-gray-600 mb-4">
            This video explains different leadership styles and their impact on organizational culture,
            with specific examples including WeWork and other modern companies.
          </p>
          
          <div className="flex justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-gray-100 text-pearson-text rounded-md hover:bg-gray-200">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
