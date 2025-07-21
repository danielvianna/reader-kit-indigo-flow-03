
import React, { useState, useEffect } from 'react';

const HighlightTest: React.FC = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [status, setStatus] = useState("Ready to test");
  
  const testHighlight = () => {
    setStatus("Starting highlight test...");
    const paragraph = document.querySelector('.test-paragraph');
    if (!paragraph) {
      setStatus("No paragraph found");
      return;
    }
    
    const textContent = paragraph.textContent || '';
    const phraseToHighlight = "important concept";
    
    setStatus(`Looking for phrase: "${phraseToHighlight}" in paragraph`);
    
    const lowerText = textContent.toLowerCase();
    const lowerPhrase = phraseToHighlight.toLowerCase();
    const startIndex = lowerText.indexOf(lowerPhrase);
    
    if (startIndex === -1) {
      setStatus(`Phrase not found in: "${textContent.substring(0, 50)}..."`);
      return;
    }
    
    setStatus(`Found phrase at index ${startIndex}`);
    
    const before = textContent.substring(0, startIndex);
    const match = textContent.substring(startIndex, startIndex + phraseToHighlight.length);
    const after = textContent.substring(startIndex + phraseToHighlight.length);
    
    // Update the HTML with the highlighted span
    paragraph.innerHTML = `${before}<span class="highlight">${match}</span>${after}`;
    
    // Force a reflow
    const highlightElement = paragraph.querySelector('.highlight');
    if (highlightElement) {
      void (highlightElement as HTMLElement).offsetWidth;
      setStatus("Applied highlight span, triggering animation");
      
      // Add the active class to trigger the animation
      setTimeout(() => {
        highlightElement.classList.add('highlight-active');
        setStatus("Added highlight-active class");
        setIsHighlighted(true);
      }, 200);
    } else {
      setStatus("Failed to find highlight element after insertion");
    }
    
    // Scroll to paragraph
    paragraph.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  
  // Debug CSS - display the computed styles
  useEffect(() => {
    if (isHighlighted) {
      const highlightEl = document.querySelector('.highlight');
      if (highlightEl) {
        const styles = window.getComputedStyle(highlightEl);
        const beforePseudo = window.getComputedStyle(highlightEl, '::before');
        console.log('Highlight styles:', {
          position: styles.position,
          display: styles.display,
          backgroundColor: styles.backgroundColor,
          zIndex: styles.zIndex
        });
        console.log('::before styles:', {
          content: beforePseudo.content,
          position: beforePseudo.position,
          width: beforePseudo.width,
          height: beforePseudo.height,
          backgroundColor: beforePseudo.backgroundColor
        });
      }
    }
  }, [isHighlighted]);
  
  return (
    <div className="max-w-2xl mx-auto my-8 p-6 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Highlight Test</h2>
      
      <div className="mb-4 p-2 bg-gray-50 rounded border">
        <p className="text-sm font-mono">{status}</p>
      </div>
      
      <p className="content-paragraph test-paragraph mb-6 p-4 bg-gray-50 rounded text-left">
        This is a test paragraph with an <strong>important concept</strong> that should be highlighted when the button below is clicked.
      </p>
      
      <div className="assessment-kit p-4 border rounded bg-gray-100 mb-6">
        <h3>Test Assessment Component</h3>
        <p>This simulates an assessment component.</p>
      </div>
      
      <button 
        onClick={testHighlight}
        className="px-4 py-2 bg-pearson-indigo text-white rounded hover:bg-indigo-700 transition-colors mr-4"
      >
        Test Highlight Function
      </button>
      
      <button 
        onClick={() => {
          setIsHighlighted(false);
          setStatus("Reset test");
          const paragraph = document.querySelector('.test-paragraph');
          if (paragraph) {
            paragraph.innerHTML = 'This is a test paragraph with an <strong>important concept</strong> that should be highlighted when the button below is clicked.';
          }
        }}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
      >
        Reset
      </button>
      
      <div className="mt-8 p-4 bg-gray-50 rounded border">
        <h3 className="font-bold mb-2">CSS Verification:</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold mb-1">Expected .highlight CSS:</p>
            <pre className="text-xs bg-gray-100 p-2 rounded">
{`position: relative
display: inline-block
background-color: transparent
z-index: 1`}
            </pre>
          </div>
          <div>
            <p className="font-bold mb-1">Expected .highlight::before CSS:</p>
            <pre className="text-xs bg-gray-100 p-2 rounded">
{`content: ''
position: absolute
width: 0 (or 100% if active)
height: 100%
background-color: rgba(155, 135, 245, 0.3)
transition: width 1s ease
z-index: -1`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightTest;
