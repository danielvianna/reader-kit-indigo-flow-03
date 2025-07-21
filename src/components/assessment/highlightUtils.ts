
export const highlightRelevantConcept = (index: number): void => {
  console.log('Starting highlight process for index:', index);
  
  // Find all assessment kits
  const assessmentKits = document.querySelectorAll('.assessment-kit');
  if (assessmentKits.length === 0 || index >= assessmentKits.length) {
    console.log('Assessment kit not found for index:', index);
    return;
  }
  
  // Get the target assessment kit based on index
  const targetKit = assessmentKits[index];
  console.log('Found target assessment kit:', targetKit);
  
  // Find all paragraphs
  const allParagraphs = document.querySelectorAll('.content-paragraph');
  const paragraphsArray = Array.from(allParagraphs);
  
  // Get the position of the target kit
  const kitRect = targetKit.getBoundingClientRect();
  const kitTop = kitRect.top + window.scrollY;
  
  // Find the paragraph immediately above the kit
  let targetParagraph = null;
  
  // Start from the end and find the first paragraph that is above the kit
  for (let i = paragraphsArray.length - 1; i >= 0; i--) {
    const paragraphRect = paragraphsArray[i].getBoundingClientRect();
    const paragraphBottom = paragraphRect.bottom + window.scrollY;
    
    if (paragraphBottom < kitTop) {
      targetParagraph = paragraphsArray[i];
      break;
    }
  }
  
  if (targetParagraph) {
    console.log('Found paragraph above assessment kit:', targetParagraph);
    
    const paragraphText = targetParagraph.innerHTML || '';
    
    // Find the first sentence only
    const firstSentenceMatch = targetParagraph.textContent?.match(/^[^.]+\./);
    if (firstSentenceMatch && firstSentenceMatch[0]) {
      const firstSentence = firstSentenceMatch[0];
      console.log('First sentence identified:', firstSentence);
      
      // Use replace to only modify the first occurrence of the sentence
      // This preserves any HTML structure within the paragraph
      targetParagraph.innerHTML = paragraphText.replace(
        firstSentence,
        `<span class="highlight">${firstSentence}</span>`
      );
      
      console.log('Applied highlight span to paragraph');
      
      // Force repaint and then add the active class to trigger animation
      const highlightElement = targetParagraph.querySelector('.highlight');
      if (highlightElement) {
        console.log('Found highlight element, preparing animation');
        
        // Force a repaint before adding the active class
        void highlightElement.offsetWidth;
        
        // Add the active class after a brief delay to ensure the animation works
        setTimeout(() => {
          highlightElement.classList.add('highlight-active');
          console.log('Added highlight-active class to trigger animation');
        }, 50);
      } else {
        console.log('Could not find highlight element after insertion');
      }
      
      // Scroll the paragraph into view
      targetParagraph.scrollIntoView({ behavior: 'smooth', block: 'center' });
      console.log('Scrolled paragraph into view');
    } else {
      console.log('Could not find first sentence in paragraph');
    }
  } else {
    console.log('No paragraph found above assessment kit');
  }
};
