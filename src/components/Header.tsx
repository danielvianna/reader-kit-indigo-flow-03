import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface HeaderProps {
  title?: string;
  isStudyMode?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title = "The History of Psychology", isStudyMode = false }) => {
  const [completedCount, setCompletedCount] = useState(0);
  const totalAssessments = 3;
  
  const progressPercentage = isStudyMode ? 100 : (completedCount / totalAssessments) * 100;

  useEffect(() => {
    if (!isStudyMode) {
      const checkCompletionStatus = () => {
        let count = 0;
        
        document.querySelectorAll('.assessment-kit').forEach(kit => {
          if (kit.classList.contains('study-mode-card')) {
            count++;
          }
        });
        
        setCompletedCount(count);
      };
      
      checkCompletionStatus();
      
      const observer = new MutationObserver(checkCompletionStatus);
      observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
      
      return () => observer.disconnect();
    }
  }, [isStudyMode]);

  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center px-8 fixed top-0 left-0 right-0 z-10 font-open-sans">
      <div className="flex items-center justify-between w-full max-w-full">
        <h1 className="text-lg font-semibold text-ink-black flex-shrink-0 pl-16">{title}</h1>
        
        <div className="flex flex-col items-center gap-2 min-w-80 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-2.5 rounded-full border border-indigo-100 ml-8">
          <div className="flex items-center gap-8 w-full justify-between">
            <span className="text-sm font-semibold text-tile-indigo whitespace-nowrap">
              {isStudyMode ? "You've completed this assignment" : `Progress: ${completedCount}/${totalAssessments} complete (${Math.round(progressPercentage)}%)`}
            </span>
            <span className="text-xs font-medium text-white bg-gradient-wave px-3 py-1.5 rounded-full whitespace-nowrap">
              {isStudyMode ? "Last completed on: May 20, 2025" : "Due: May 30, 2025"}
            </span>
          </div>
          
          <div className="w-full">
            <Progress 
              value={progressPercentage} 
              className="h-2 bg-indigo-100"
              indicatorClassName="bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
