
import React from 'react';
import { X } from "lucide-react";

interface VideoPlayerInlineProps {
  onClose: () => void;
}

export const VideoPlayerInline: React.FC<VideoPlayerInlineProps> = ({ onClose }) => {
  const handleThumbnailClick = () => {
    window.open('https://www.pearson.com/channels/psychology/learn/hannah/biological-psychology/cells-of-the-nervous-system#assetId=340c1a41', '_blank');
  };

  const handleCloseClick = () => {
    console.log('VideoPlayerInline close button clicked');
    onClose();
  };

  return (
    <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="flex justify-between items-center p-3 border-b">
        <h3 className="font-semibold text-pearson-text">Study Prep Video</h3>
        <button onClick={handleCloseClick} className="text-gray-500 hover:text-gray-700">
          <X size={18} />
        </button>
      </div>
      
      <div className="relative aspect-video bg-gray-800">
        <img 
          src="/lovable-uploads/6cfd7e13-50e7-42a8-a5f9-1225b0726bc2.png" 
          alt="Neurons vs. Glial Cells study video thumbnail"
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleThumbnailClick}
        />
        <div className="absolute bottom-4 left-4">
          <h4 className="text-white font-medium drop-shadow-md">Neurons vs. Glial Cells</h4>
        </div>
      </div>
      
      <div className="p-3">
        <h4 className="font-medium text-pearson-text">Neurons vs. Glial Cells</h4>
        <p className="text-xs text-gray-600 mt-1">
          This video explains the two main types of cells in the nervous system and their specialized functions,
          including how neurons communicate and how glial cells support neuronal activity.
        </p>
      </div>
    </div>
  );
};
