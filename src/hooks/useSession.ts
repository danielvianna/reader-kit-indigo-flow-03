
import { useState, useEffect } from 'react';

export const useSession = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    // Check if session ID already exists in localStorage
    const existingSessionId = localStorage.getItem('flashcard_session_id');
    
    if (existingSessionId) {
      setSessionId(existingSessionId);
    } else {
      // Generate new session ID
      const newSessionId = generateSessionId();
      localStorage.setItem('flashcard_session_id', newSessionId);
      setSessionId(newSessionId);
    }
  }, []);

  const generateSessionId = (): string => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const clearSession = () => {
    localStorage.removeItem('flashcard_session_id');
    const newSessionId = generateSessionId();
    localStorage.setItem('flashcard_session_id', newSessionId);
    setSessionId(newSessionId);
  };

  return { sessionId, clearSession };
};
