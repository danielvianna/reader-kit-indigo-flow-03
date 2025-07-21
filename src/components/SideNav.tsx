
import React from 'react';
import { Home, Bot, ListIcon, MonitorPlay, Search, BookText, FileText, Text } from 'lucide-react';

const SideNav = () => {
  const handleAIToolClick = () => {
    window.open('https://indigo-ai-self-assessment.lovable.app/', '_blank');
  };

  return (
    <aside className="w-14 fixed top-12 left-0 bottom-0 z-10 flex flex-col items-center py-4 space-y-6 border-r border-gray-200 bg-white">
      {/* Home icon */}
      <button className="text-[#061E4A] hover:text-pearson-blue transition-colors">
        <span className="sr-only">Home</span>
        <Home size={20} strokeWidth={1.5} />
      </button>
      
      {/* AI Tool / Bot icon */}
      <button 
        className="text-[#061E4A] hover:text-pearson-blue transition-colors"
        onClick={handleAIToolClick}
      >
        <span className="sr-only">AI Study Tool</span>
        <Bot size={20} strokeWidth={1.5} />
      </button>
      
      {/* Table of Contents icon */}
      <button className="text-[#061E4A] hover:text-pearson-blue transition-colors">
        <span className="sr-only">Table of Contents</span>
        <ListIcon size={20} strokeWidth={1.5} />
      </button>
      
      {/* Video Player icon */}
      <button className="text-[#061E4A] hover:text-pearson-blue transition-colors">
        <span className="sr-only">Video Player</span>
        <MonitorPlay size={20} strokeWidth={1.5} />
      </button>
      
      {/* Search icon */}
      <button className="text-[#061E4A] hover:text-pearson-blue transition-colors">
        <span className="sr-only">Search</span>
        <Search size={20} strokeWidth={1.5} />
      </button>
      
      {/* Notebook icon */}
      <button className="text-[#061E4A] hover:text-pearson-blue transition-colors">
        <span className="sr-only">Notebook</span>
        <BookText size={20} strokeWidth={1.5} />
      </button>
      
      {/* Flashcards icon */}
      <button className="text-[#061E4A] hover:text-pearson-blue transition-colors">
        <span className="sr-only">Flashcards</span>
        <FileText size={20} strokeWidth={1.5} />
      </button>
      
      {/* Text Settings / Display Settings icon */}
      <button className="text-[#061E4A] hover:text-pearson-blue transition-colors">
        <span className="sr-only">Display Settings</span>
        <Text size={20} strokeWidth={1.5} />
      </button>
    </aside>
  );
};

export default SideNav;
