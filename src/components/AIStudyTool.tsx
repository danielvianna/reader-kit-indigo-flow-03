
import React from 'react';

type AIStudyToolProps = {
  onClose: () => void;
};

const AIStudyTool: React.FC<AIStudyToolProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 h-3/4 flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-pearson-text">AI Study Tool</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
            <span className="sr-only">Close</span>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 mb-1">You asked</p>
            <p className="text-pearson-text">Can you explain Adam Neumann's leadership style and its impact on WeWork?</p>
          </div>
          
          <div className="bg-pearson-indigo bg-opacity-5 p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500 mb-1">AI Study Tool</p>
            <div className="space-y-3">
              <p className="text-pearson-text">
                Adam Neumann's leadership style at WeWork can be characterized by:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-pearson-text">
                <li>Charismatic and visionary approach that drove impressive growth</li>
                <li>Willingness to take bold risks in pursuit of expansion</li>
                <li>Entrepreneurial mindset that helped reimagine workspace concepts</li>
                <li>Unorthodox decision-making that sometimes led to impulsive choices</li>
                <li>Creating ambiguity within the organization's structure</li>
              </ul>
              <p className="text-pearson-text">
                The impact of this leadership style was both positive and negative. On one hand, 
                it fueled WeWork's rapid expansion and innovative approach to coworking spaces. 
                On the other hand, it contributed to organizational challenges, particularly around
                the "work hard, party hard" culture that became problematic for some employees.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ask a follow-up question..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pearson-indigo focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pearson-indigo">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up">
                <path d="m12 19-7-7 7-7"/>
                <path d="M5 12h14"/>
              </svg>
              <span className="sr-only">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStudyTool;
