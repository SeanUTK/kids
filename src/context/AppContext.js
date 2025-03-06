import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

// Create the context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// Provider component
export const AppProvider = ({ children }) => {
  // App state
  const [currentScreen, setCurrentScreen] = useState('home');
  const [currentSubject, setCurrentSubject] = useState('');
  const [currentLesson, setCurrentLesson] = useState(null);
  const [stars, setStars] = useState(() => {
    // Initialize from localStorage if available
    const savedStars = localStorage.getItem('learningAppStars');
    return savedStars ? parseInt(savedStars) : 0;
  });
  const [badges, setBadges] = useState(() => {
    // Initialize from localStorage if available
    const savedBadges = localStorage.getItem('learningAppBadges');
    return savedBadges ? JSON.parse(savedBadges) : { 
      math: false, 
      science: false, 
      vocabulary: false 
    };
  });
  const [difficulty, setDifficulty] = useState(() => {
    // Initialize from localStorage if available
    const savedDifficulty = localStorage.getItem('learningAppDifficulty');
    return savedDifficulty || 'medium';
  });
  
  // Lesson-specific difficulty settings
  const [lessonDifficulties, setLessonDifficultiesState] = useState(() => {
    // Initialize from localStorage if available
    const savedLessonDifficulties = localStorage.getItem('learningAppLessonDifficulties');
    return savedLessonDifficulties ? JSON.parse(savedLessonDifficulties) : {};
  });
  
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [characterAnimation, setCharacterAnimation] = useState('idle');
  const [soundEnabled, setSoundEnabled] = useState(true);
  // Toggle music separately from sound effects
  const [musicEnabled, setMusicEnabled] = useState(true);
  
  // Audio references
  const bgMusicRef = useRef(null);
  const correctSoundRef = useRef(null);
  const incorrectSoundRef = useRef(null);
  const cheeringSoundRef = useRef(null);
  const winningSoundRef = useRef(null);
  
  // Sound file paths
  const soundPaths = {
    bgMusic: process.env.PUBLIC_URL + '/sounds/bg_music.mp3',
    correct: process.env.PUBLIC_URL + '/sounds/Correct.mp3',
    incorrect: process.env.PUBLIC_URL + '/sounds/Incorrect.mp3',
    cheering: process.env.PUBLIC_URL + '/sounds/Cheering.mp3',
    winning: process.env.PUBLIC_URL + '/sounds/Winning.mp3'
  };
  
  // Initialize audio on component mount
  useEffect(() => {
    // Create audio elements with absolute paths
    bgMusicRef.current = new Audio(soundPaths.bgMusic);
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = 0.5; // Medium volume
    
    correctSoundRef.current = new Audio(soundPaths.correct);
    incorrectSoundRef.current = new Audio(soundPaths.incorrect);
    cheeringSoundRef.current = new Audio(soundPaths.cheering);
    winningSoundRef.current = new Audio(soundPaths.winning);
    
    // Preload sounds
    const preloadAudio = (audioElement) => {
      if (audioElement) {
        audioElement.load();
      }
    };
    
    preloadAudio(bgMusicRef.current);
    preloadAudio(correctSoundRef.current);
    preloadAudio(incorrectSoundRef.current);
    preloadAudio(cheeringSoundRef.current);
    preloadAudio(winningSoundRef.current);
    
    // Try to play background music immediately
    if (musicEnabled) {
      setTimeout(() => {
        if (bgMusicRef.current) {
          const playPromise = bgMusicRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.log("Autoplay prevented by browser, user interaction needed:", error);
              
              // Add a one-time click handler to the document to enable music on first interaction
              const enableAudio = () => {
                if (bgMusicRef.current && musicEnabled) {
                  bgMusicRef.current.play().catch(e => console.log('Audio playback still prevented:', e));
                }
                document.removeEventListener('click', enableAudio);
              };
              document.addEventListener('click', enableAudio);
            });
          }
        }
      }, 300);
    }
    
    // Clean up on unmount
    return () => {
      if (bgMusicRef.current) {
        bgMusicRef.current.pause();
        bgMusicRef.current = null;
      }
    };
  }, []);
  
  // Handle music enable/disable (separate from sound effects)
  useEffect(() => {
    if (musicEnabled && bgMusicRef.current) {
      const playPromise = bgMusicRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.log('Audio playback error:', e));
      }
    } else if (bgMusicRef.current) {
      bgMusicRef.current.pause();
    }
  }, [musicEnabled]);
  
  // Toggle music function
  const toggleMusic = () => {
    setMusicEnabled(prev => !prev);
    playSound('correct'); // Play a sound effect when toggling
  };
  
  // Toggle sound function (only affects sound effects, not background music)
  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };
  
  // Play sound effect function
  const playSound = (soundType) => {
    if (!soundEnabled) return;
    
    try {
      let soundRef = null;
      
      switch(soundType) {
        case 'correct':
          soundRef = correctSoundRef.current;
          break;
        case 'incorrect':
          soundRef = incorrectSoundRef.current;
          break;
        case 'cheering':
          soundRef = cheeringSoundRef.current;
          break;
        case 'winning':
          soundRef = winningSoundRef.current;
          break;
        case 'completion':
          // Play both winning and cheering sounds
          if (cheeringSoundRef.current) {
            cheeringSoundRef.current.currentTime = 0;
            cheeringSoundRef.current.play().catch(e => console.log('Audio playback error:', e));
          }
          if (winningSoundRef.current) {
            winningSoundRef.current.currentTime = 0;
            winningSoundRef.current.play().catch(e => console.log('Audio playback error:', e));
          }
          return;
        default:
          return;
      }
      
      if (soundRef) {
        soundRef.currentTime = 0;
        const playPromise = soundRef.play();
        if (playPromise !== undefined) {
          playPromise.catch(e => {
            console.log('Audio playback error:', e);
            // Try to reload and play again
            soundRef.load();
            soundRef.play().catch(err => console.log('Second attempt failed:', err));
          });
        }
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };
  
  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('learningAppStars', stars.toString());
    localStorage.setItem('learningAppBadges', JSON.stringify(badges));
    localStorage.setItem('learningAppDifficulty', difficulty);
    localStorage.setItem('learningAppLessonDifficulties', JSON.stringify(lessonDifficulties));
  }, [stars, badges, difficulty, lessonDifficulties]);

  // Reset stars function
  const resetStars = () => {
    setStars(0);
    // Also reset badges
    setBadges({ 
      math: false, 
      science: false, 
      vocabulary: false 
    });
    localStorage.setItem('learningAppStars', '0');
    localStorage.setItem('learningAppBadges', JSON.stringify({ 
      math: false, 
      science: false, 
      vocabulary: false 
    }));
    
    // Play sound for feedback
    playSound('correct');
  };
  
  // Set lesson-specific difficulty
  const setLessonDifficulty = (lessonId, difficultyLevel) => {
    const newLessonDifficulties = {
      ...lessonDifficulties,
      [lessonId]: difficultyLevel
    };
    setLessonDifficultiesState(newLessonDifficulties);
  };
  
  // Directly update the lessonDifficulties state with a new object
  const updateAllLessonDifficulties = (newDifficulties) => {
    setLessonDifficultiesState(newDifficulties);
  };
  
  // Get difficulty for current lesson
  const getCurrentLessonDifficulty = (subjectId = null, lessonId = null) => {
    // If specific subject and lesson are provided, use those
    if (subjectId && lessonId) {
      const lessonKey = `${subjectId}_${lessonId}`;
      return lessonDifficulties[lessonKey] || difficulty;
    }
    
    // If only subject is provided, find any lessons for this subject and return their difficulty
    // or the global difficulty if none found
    if (subjectId) {
      // Look for any lessons in this subject with a custom difficulty
      const subjectLessons = Object.keys(lessonDifficulties).filter(key => key.startsWith(`${subjectId}_`));
      if (subjectLessons.length > 0) {
        // Return the difficulty of the first lesson found
        return lessonDifficulties[subjectLessons[0]];
      }
      // If no lessons found, return global difficulty
      return difficulty;
    }
    
    // Otherwise use the current lesson from context
    if (!currentLesson) return difficulty;
    const lessonKey = `${currentSubject}_${currentLesson.id}`;
    return lessonDifficulties[lessonKey] || difficulty;
  };

  // Navigation functions
  const navigateToSubject = (subject) => {
    setCurrentSubject(subject);
    setCurrentScreen('lessonSelect');
    
    // Play sound for navigation
    playSound('correct');
  };

  const navigateToLesson = (lesson) => {
    setCurrentLesson(lesson);
    setCurrentScreen('lesson');
    
    // Play sound for navigation
    playSound('correct');
  };

  const returnHome = () => {
    setShowFeedback(false);
    setCurrentScreen('home');
    setCurrentSubject('');
    setCurrentLesson(null);
    
    // Play sound for navigation
    playSound('correct');
  };

  const continueAfterFeedback = () => {
    setShowFeedback(false);
    setCurrentScreen('lessonSelect');
  };

  // Handle lesson completion and rewards
  const completeLesson = (success) => {
    // Play completion sounds
    playSound('completion');
    
    // Calculate reward (1-3 stars based on performance)
    const newStars = success > 0.8 ? 3 : success > 0.5 ? 2 : 1;
    setStars(stars + newStars);
    
    // Get the lesson's unique key
    const lessonKey = `${currentSubject}_${currentLesson.id}`;
    
    // Get current difficulty
    const currentDiff = getCurrentLessonDifficulty(currentSubject, currentLesson.id);
    
    // Set adaptive difficulty for this specific lesson - only move one level at a time
    if (success < 0.5 && currentDiff !== 'easy') {
      // If performance is poor and not already at easy, decrease one level
      const newDifficulty = currentDiff === 'hard' ? 'medium' : 'easy';
      setLessonDifficulty(lessonKey, newDifficulty);
      setFeedbackMessage('Next time we\'ll try something a bit easier!');
    } else if (success > 0.8 && currentDiff !== 'hard') {
      // If performance is excellent and not already at hard, increase one level
      const newDifficulty = currentDiff === 'easy' ? 'medium' : 'hard';
      setLessonDifficulty(lessonKey, newDifficulty);
      setFeedbackMessage('Wow! You\'re ready for a challenge next time!');
    } else if (success >= 0.5 && success <= 0.8) {
      // If performance is good but not excellent, keep the same level
      setFeedbackMessage('Great job!');
    } else {
      // Already at max/min level for their performance
      if (currentDiff === 'easy') {
        setFeedbackMessage('Keep practicing, you\'re doing great!');
      } else if (currentDiff === 'hard') {
        setFeedbackMessage('Amazing work at the highest level!');
      }
    }

    // Award badge if performance is excellent
    if (success > 0.9) {
      setBadges({ ...badges, [currentSubject]: true });
    }
    
    // Show the feedback screen
    setFeedbackType(success > 0.7 ? 'positive' : 'encouragement');
    setShowFeedback(true);
    
    // Set character animation based on performance
    if (success > 0.8) {
      setCharacterAnimation('celebrating');
    } else if (success > 0.5) {
      setCharacterAnimation('happy');
    } else {
      setCharacterAnimation('encouraging');
    }
    
    // Navigate to feedback page
    setCurrentScreen('feedback');
    
    // Reset animation after delay
    setTimeout(() => setCharacterAnimation('idle'), 2000);
  };

  // Reset the entire app
  const resetApp = () => {
    // Reset all state to initial values
    setCurrentSubject('');
    setCurrentLesson(null);
    setStars(0);
    
    // Reset badges
    const resetBadges = { 
      math: false, 
      science: false, 
      vocabulary: false 
    };
    setBadges(resetBadges);
    
    // Reset lesson difficulties to match global difficulty
    const resetLessonDifficulties = {};
    setLessonDifficultiesState(resetLessonDifficulties);
    
    // Reset to home page
    setCurrentScreen('home');
    
    // Reset localStorage
    localStorage.setItem('learningAppStars', '0');
    localStorage.setItem('learningAppBadges', JSON.stringify(resetBadges));
    localStorage.setItem('learningAppLessonDifficulties', JSON.stringify(resetLessonDifficulties));
    
    // Play a sound to confirm reset
    playSound('completion');
  };

  return (
    <AppContext.Provider 
      value={{
        // State
        currentScreen,
        currentSubject,
        currentLesson,
        stars,
        badges,
        difficulty,
        showFeedback,
        feedbackType,
        feedbackMessage,
        characterAnimation,
        soundEnabled,
        musicEnabled,
        lessonDifficulties,
        
        // Update actions
        setDifficulty,
        setLessonDifficulty,
        updateAllLessonDifficulties,
        
        // Navigation functions
        navigateToSubject,
        navigateToLesson,
        returnHome,
        continueAfterFeedback,
        
        // Game functions
        completeLesson,
        resetStars,
        
        // Utils
        toggleSound,
        toggleMusic,
        getCurrentLessonDifficulty,
        playSound,
        resetApp
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider; 