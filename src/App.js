import React from 'react';
import { AnimatePresence } from 'framer-motion';

// Import context provider
import { AppProvider, useAppContext } from './context/AppContext';

// Import pages
import HomePage from './pages/HomePage';
import LessonSelectPage from './pages/LessonSelectPage';
import LessonPage from './pages/LessonPage';
import FeedbackPage from './pages/FeedbackPage';

// Import global styles
import './styles/globals.css';

// Main App Component
const AppContent = () => {
  const { currentScreen, showFeedback } = useAppContext();
  
  return (
    <AnimatePresence mode="wait">
      {currentScreen === 'home' && <HomePage />}
      
      {currentScreen === 'lessonSelect' && <LessonSelectPage />}
      
      {currentScreen === 'lesson' && <LessonPage />}
      
      {showFeedback && <FeedbackPage />}
    </AnimatePresence>
  );
};

// Wrap the app with the context provider
const App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
