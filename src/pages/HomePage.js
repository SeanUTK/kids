import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Settings, Star, Award, RefreshCw, Sliders, Music, Headphones, RotateCcw } from 'lucide-react';

import Card from '../components/Card';
import ChildButton from '../components/ChildButton';
import { useAppContext } from '../context/AppContext';
import { SubjectIcons } from '../assets/svg/SubjectIcons';
import RestartAnimation from '../components/RestartAnimation';

const HomePage = () => {
  const { 
    navigateToSubject, 
    soundEnabled, 
    toggleSound,
    musicEnabled,
    toggleMusic,
    stars, 
    badges,
    difficulty,
    setDifficulty,
    resetStars,
    playSound,
    lessonDifficulties,
    setLessonDifficulty,
    updateAllLessonDifficulties,
    resetApp
  } = useAppContext();
  
  const [showSettings, setShowSettings] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showRestartAnimation, setShowRestartAnimation] = useState(false);
  
  // Subject data
  const subjects = [
    {
      id: 'math',
      name: 'Math',
      icon: <SubjectIcons.math interactive size={80} />,
      color: 'blue',
      lessons: [
        { id: 'counting', name: 'Counting' },
        { id: 'addition', name: 'Addition' },
        { id: 'shapes', name: 'Shapes' }
      ]
    },
    {
      id: 'science',
      name: 'Science',
      icon: <SubjectIcons.science interactive size={80} />,
      color: 'green',
      lessons: [
        { id: 'animals', name: 'Animals' },
        { id: 'weather', name: 'Weather' },
        { id: 'colors', name: 'Colors' }
      ]
    },
    {
      id: 'vocabulary',
      name: 'Vocabulary',
      icon: <SubjectIcons.vocabulary interactive size={80} />,
      color: 'purple',
      lessons: [
        { id: 'letters', name: 'Letters' },
        { id: 'words', name: 'Words' },
        { id: 'sounds', name: 'Sounds' }
      ]
    }
  ];
  
  // Homepage animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  const handleResetStars = () => {
    if (showResetConfirm) {
      resetStars();
      setShowResetConfirm(false);
      playSound('completion'); // Play a sound for confirmation
    } else {
      setShowResetConfirm(true);
    }
  };
  
  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    
    // Reset all lesson-specific difficulties to match the global setting
    const newLessonDifficulties = {};
    
    // Apply the new difficulty to all lessons in all subjects
    subjects.forEach(subject => {
      subject.lessons.forEach(lesson => {
        const lessonKey = `${subject.id}_${lesson.id}`;
        newLessonDifficulties[lessonKey] = level;
      });
    });
    
    // Update the lesson difficulties state
    updateAllLessonDifficulties(newLessonDifficulties);
    
    // Play sound effect
    playSound('correct');
  };
  
  const handleRestartApp = () => {
    if (showRestartAnimation) {
      // Show restart animation
      setShowRestartAnimation(false);
      
      // Play a sound for confirmation
      playSound('completion');
      
      // Delay the actual reset to allow animation to play
      setTimeout(() => {
        resetApp();
      }, 2500);
    } else {
      setShowRestartAnimation(true);
    }
  };
  
  const renderBadges = () => {
    return (
      <div className="flex-row gap-medium" style={{ marginBottom: '1rem' }}>
        {Object.entries(badges).map(([subject, earned]) => (
          <div 
            key={subject}
            className={`badge badge-${subject} ${earned ? 'pulse' : ''}`}
            style={{ 
              opacity: earned ? 1 : 0.4,
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            <Award size={16} />
            {subject.charAt(0).toUpperCase() + subject.slice(1)}
          </div>
        ))}
      </div>
    );
  };
  
  const renderStars = () => {
    return (
      <div className="flex-row gap-small" style={{ alignItems: 'center', marginBottom: '1.5rem' }}>
        <Star size={24} color="#F59E0B" fill="#F59E0B" />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#F59E0B' }}>
          {stars} Stars
        </span>
      </div>
    );
  };
  
  // Get lesson difficulty or default
  const getLessonDifficulty = (subjectId, lessonId) => {
    const lessonKey = `${subjectId}_${lessonId}`;
    return lessonDifficulties[lessonKey] || difficulty;
  };
  
  return (
    <div className="app-container">
      <div className="cloud-pattern" />
      <div className="bubble-pattern" />
      
      {/* Restart Animation */}
      <AnimatePresence>
        {showRestartAnimation && (
          <RestartAnimation 
            isVisible={showRestartAnimation} 
            onComplete={() => {}}
          />
        )}
      </AnimatePresence>
      
      <div className="content-container">
        <div className="flex-row justify-between align-center gap-medium keep-row-mobile" style={{ 
          marginBottom: '2rem'
        }}>
          <motion.h1 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="wiggle"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span 
              role="img" 
              aria-label="Rocket" 
              style={{ display: 'inline-block' }}
            >
              🚀
            </span> 
            Learning Adventure
          </motion.h1>
          
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex-row gap-small keep-row-mobile"
          >
            <ChildButton 
              size="small" 
              color="warning"
              onClick={toggleSound}
              icon={soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            >
              {soundEnabled ? 'Sound On' : 'Sound Off'}
            </ChildButton>
            
            <ChildButton 
              size="small" 
              color="success"
              onClick={toggleMusic}
              icon={<Music size={18} />}
            >
              {musicEnabled ? 'Music On' : 'Music Off'}
            </ChildButton>
          </motion.div>
        </div>
        
        {renderStars()}
        {renderBadges()}
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3"
          style={{ gap: '1.5rem', marginBottom: '2rem' }}
        >
          {subjects.map(subject => (
            <motion.div key={subject.id} variants={itemVariants}>
              <Card
                color={subject.color}
                onClick={() => navigateToSubject(subject.id)}
                fullWidth
              >
                <div className="flex-column align-center" style={{ gap: '0.5rem', textAlign: 'center' }}>
                  {subject.icon}
                  <h2 style={{ marginTop: '0.5rem' }}>{subject.name}</h2>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {subject.lessons.length} lessons
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex-row justify-center gap-medium mobile-stack-buttons">
          <ChildButton
            color="primary"
            onClick={() => setShowSettings(!showSettings)}
            icon={<Settings size={20} />}
          >
            Settings
          </ChildButton>
        </div>
        
        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex-column gap-medium"
              style={{ 
                marginTop: '2rem', 
                padding: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 'var(--border-radius)',
                overflow: 'hidden'
              }}
            >
              <h2 className="mobile-center">Settings</h2>
              
              <div className="flex-column gap-medium">
                <div className="flex-row justify-between align-center keep-row-mobile">
                  <div>
                    <h3>Global Difficulty</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Set the difficulty for all lessons</p>
                  </div>
                  
                  <div className="flex-row gap-small keep-row-mobile">
                    <ChildButton 
                      size="small" 
                      color={difficulty === 'easy' ? 'success' : 'white'}
                      onClick={() => handleDifficultyChange('easy')}
                    >
                      Easy
                    </ChildButton>
                    <ChildButton 
                      size="small" 
                      color={difficulty === 'medium' ? 'success' : 'white'}
                      onClick={() => handleDifficultyChange('medium')}
                    >
                      Medium
                    </ChildButton>
                    <ChildButton 
                      size="small" 
                      color={difficulty === 'hard' ? 'success' : 'white'}
                      onClick={() => handleDifficultyChange('hard')}
                    >
                      Hard
                    </ChildButton>
                  </div>
                </div>
                
                <div className="flex-row justify-between align-center keep-row-mobile">
                  <div>
                    <h3>Reset Progress</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Clear all earned stars</p>
                  </div>
                  
                  <ChildButton 
                    size="small" 
                    color="danger"
                    onClick={handleResetStars}
                  >
                    {showResetConfirm ? 'Confirm Reset' : 'Reset Stars'}
                  </ChildButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage; 