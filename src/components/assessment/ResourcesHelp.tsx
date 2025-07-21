
import React from 'react';
import { Button } from "@/components/ui/button";

interface ResourcesHelpProps {
  showResources: boolean;
  handleHighlightConcept: () => void;
  handleVideoOpen: () => void;
}

export const ResourcesHelp: React.FC<ResourcesHelpProps> = ({
  showResources,
  handleHighlightConcept,
  handleVideoOpen,
}) => {
  if (!showResources) return null;

  return (
    <div className="mt-3 space-y-2 pt-3 border-t border-gray-100">
      <Button
        onClick={handleHighlightConcept}
        variant="ghost"
        className="w-full text-xs text-left justify-start hover:bg-tile-indigo-hover p-2 h-auto text-chalk-white/80"
      >
        <div>
          <p className="font-medium mb-0.5 text-chalk-white/80">Highlight the relevant concept</p>
          <p className="text-xs text-chalk-white/60">Navigate to the specific concept related to this question.</p>
        </div>
      </Button>
      
      <Button
        onClick={handleVideoOpen}
        variant="ghost"
        className="w-full text-xs text-left justify-start hover:bg-tile-indigo-hover p-2 h-auto text-chalk-white/80"
      >
        <div>
          <p className="font-medium mb-0.5 text-chalk-white/80">Watch Study Prep Video</p>
          <p className="text-xs text-chalk-white/60">View a short video explaining this concept.</p>
        </div>
      </Button>
    </div>
  );
};
