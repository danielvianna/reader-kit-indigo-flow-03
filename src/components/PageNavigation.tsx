import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageNavigation = () => {
  return (
    <div className="flex items-center justify-between py-4 border-t border-gray-200 mt-6">
      <Link to="/">
        <Button variant="ghost" className="flex items-center text-pearson-text hover:text-pearson-blue">
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="text-sm">Previous</span>
        </Button>
      </Link>
      
      <div className="flex flex-col items-center">
        <div className="text-sm text-pearson-text mb-2">
          <span className="font-medium">Page 1</span> of 42
        </div>
        <Button variant="ghost" size="sm" className="text-pearson-text hover:text-pearson-blue">
          <Bookmark className="h-4 w-4" />
          <span className="sr-only">Bookmark</span>
        </Button>
      </div>
      
      <Link to="/study-mode">
        <Button variant="ghost" className="flex items-center text-pearson-text hover:text-pearson-blue">
          <span className="text-sm">Next</span>
          <ChevronRight className="h-5 w-5 ml-1" />
        </Button>
      </Link>
    </div>
  );
};

export default PageNavigation;
