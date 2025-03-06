import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Home, ArrowRight, Award, TrendingUp, TrendingDown, Trophy, Medal } from 'lucide-react';

import Card from '../components/Card';
import ChildButton from '../components/ChildButton';
import { useAppContext } from '../context/AppContext';
import CharacterMascot from '../components/CharacterMascot';

// Firework component for perfect scores
const Firework = ({ x, delay, size, colors }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: '50%',
        width: 5,
        height: 5,
        borderRadius: '50%',
        backgroundColor: colors[0]
      }}
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -300,
        opacity: [1, 1, 0]
      }}
      transition={{
        duration: 2,
        delay: delay,
        times: [0, 0.7, 1]
      }}
      onAnimationComplete={() => {}}
    >
      <AnimatePresence>
        <motion.div
          key="explosion"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.7 + delay, duration: 0.3 }}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            backgroundImage: `radial-gradient(circle, ${colors.join(', ')})`,
            boxShadow: `0 0 20px ${colors[0]}, 0 0 40px ${colors[1]}`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </AnimatePresence>
    </motion.div>
  );
};

const FeedbackPage = () => {
  const { 
    feedbackType, 
    feedbackMessage, 
    stars,
    returnHome, 
    continueAfterFeedback,
    playSound,
    getCurrentLessonDifficulty,
    currentLesson,
    currentSubject
  } = useAppContext();
  
  // Create a ref for the feedback card
  const feedbackRef = useRef(null);
  
  // State for perfect score celebration
  const [isPerfectScore, setIsPerfectScore] = useState(false);
  
  // Auto-scroll to the feedback section when the component mounts
  useEffect(() => {
    // Wait a short delay to ensure the component is fully rendered
    const timer = setTimeout(() => {
      if (feedbackRef.current) {
        // Try to use smooth scrolling first
        try {
          feedbackRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        } catch (error) {
          // Fallback for browsers that don't support smooth scrolling
          window.scrollTo({
            top: feedbackRef.current.offsetTop,
            left: 0,
            behavior: 'smooth'
          });
        }
        
        // Additional fallback for mobile devices
        setTimeout(() => {
          window.scrollTo(0, feedbackRef.current.offsetTop);
        }, 100);
      }
    }, 300); // Small delay for component to render
    
    // Check if this is a perfect score
    if (feedbackType === 'positive' && feedbackMessage.includes('Amazing') || feedbackMessage.includes('highest level')) {
      setIsPerfectScore(true);
    }
    
    return () => clearTimeout(timer);
  }, [feedbackType, feedbackMessage]);
  
  // Play appropriate sound when feedback page is shown
  useEffect(() => {
    // Only play one sound to avoid overlapping
    if (feedbackType === 'positive') {
      playSound('winning');
    } else {
      playSound('cheering');
    }
  }, [feedbackType, playSound]);
  
  // Determine the number of stars to show based on feedback type
  const starsToShow = feedbackType === 'positive' ? 3 : feedbackType === 'encouragement' ? 2 : 1;
  
  // Get current lesson difficulty
  const currentDifficulty = getCurrentLessonDifficulty();
  
  // Determine difficulty direction
  const getDifficultyDirection = () => {
    if (!feedbackMessage) return null;
    
    if (feedbackMessage.includes('challenge')) {
      return 'up';
    } else if (feedbackMessage.includes('easier')) {
      return 'down';
    }
    return null;
  };
  
  const difficultyDirection = getDifficultyDirection();
  
  // Animation variants for stars
  const starContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };
  
  const starVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };
  
  // Enhanced confetti animation for positive feedback
  const renderConfetti = () => {
    // More confetti for perfect scores
    const confettiCount = isPerfectScore ? 100 : feedbackType === 'positive' ? 50 : 20;
    
    return Array.from({ length: confettiCount }).map((_, i) => {
      const size = Math.random() * 10 + 5;
      const color = [
        '#FCD34D', // yellow
        '#F87171', // red
        '#60A5FA', // blue
        '#34D399', // green
        '#A78BFA'  // purple
      ][Math.floor(Math.random() * 5)];
      
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;
      
      return (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            top: '-5%',
            left: `${Math.random() * 100}%`,
            zIndex: 10
          }}
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: `${Math.random() * 100 + 100}vh`,
            rotate: Math.random() * 360,
            opacity: 0
          }}
          transition={{
            duration: duration,
            ease: "linear",
            delay: delay
          }}
        />
      );
    });
  };
  
  // Render fireworks for perfect scores
  const renderFireworks = () => {
    if (!isPerfectScore) return null;
    
    const fireworkColors = [
      ['#FF5252', '#FF8A80', '#FFCDD2'],
      ['#536DFE', '#8C9EFF', '#C5CAE9'],
      ['#66BB6A', '#A5D6A7', '#E8F5E9'],
      ['#FFA726', '#FFCC80', '#FFF3E0'],
      ['#AB47BC', '#CE93D8', '#F3E5F5']
    ];
    
    return Array.from({ length: 10 }).map((_, i) => {
      const x = Math.random() * 100;
      const delay = Math.random() * 3;
      const size = Math.random() * 100 + 50;
      const colorSet = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
      
      return (
        <Firework 
          key={i} 
          x={x} 
          delay={delay} 
          size={size} 
          colors={colorSet} 
        />
      );
    });
  };
  
  // Trophy animation for perfect scores
  const renderTrophy = () => {
    if (!isPerfectScore) return null;
    
    return (
      <motion.div
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20
        }}
      >
        <Trophy size={100} color="#FFD700" />
      </motion.div>
    );
  };
  
  return (
    <div className="app-container">
      <div className="cloud-pattern" />
      <div className="bubble-pattern" />
      
      {/* Render confetti based on feedback type */}
      {(feedbackType === 'positive' || feedbackType === 'encouragement') && renderConfetti()}
      
      {/* Render fireworks for perfect scores */}
      {renderFireworks()}
      
      {/* Render trophy for perfect scores */}
      {renderTrophy()}
      
      <div className="content-container" id="feedback-page-container">
        <motion.div
          ref={feedbackRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '70vh'
          }}
        >
          {/* Total stars display */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ 
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(251, 191, 36, 0.2)',
              borderRadius: '16px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Star size={32} color="#F59E0B" fill="#F59E0B" />
            <span style={{ 
              fontSize: '1.75rem', 
              fontWeight: 'bold',
              color: '#92400E' 
            }}>
              {stars} Total Stars
            </span>
          </motion.div>
          
          <Card 
            color={isPerfectScore ? 'purple' : feedbackType === 'positive' ? 'green' : 'yellow'} 
            interactive={false}
            padding="large"
            style={{ 
              maxWidth: '600px', 
              width: '100%',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background glow for perfect scores */}
            {isPerfectScore && (
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%)',
                  zIndex: 0
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            )}
            
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{ 
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}
            >
              {isPerfectScore ? 'Outstanding!' : feedbackType === 'positive' ? 'Great Job!' : 'Good Effort!'}
            </motion.h1>
            
            {/* Perfect score badge */}
            {isPerfectScore && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.4
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  margin: '0 auto 1.5rem auto',
                  padding: '0.5rem 1rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(139, 92, 246, 0.2)',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <Medal size={24} color="#8B5CF6" />
                <span style={{ 
                  fontWeight: 'bold',
                  color: '#8B5CF6'
                }}>
                  Perfect Score!
                </span>
              </motion.div>
            )}
            
            {/* Current lesson completed badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.4
              }}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                margin: '0 auto 1.5rem auto',
                borderRadius: '12px',
                backgroundColor: isPerfectScore ? 'rgba(139, 92, 246, 0.2)' : feedbackType === 'positive' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '0.5rem' 
              }}>
                <Award size={18} color={isPerfectScore ? '#8B5CF6' : feedbackType === 'positive' ? '#059669' : '#D97706'} />
                <span style={{ 
                  fontWeight: 'bold',
                  color: isPerfectScore ? '#8B5CF6' : feedbackType === 'positive' ? '#059669' : '#D97706'
                }}>
                  {currentLesson?.name} Completed
                </span>
              </div>
            </motion.div>
            
            {/* Feedback message */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ 
                fontSize: '1.25rem', 
                marginBottom: '1.5rem',
                color: isPerfectScore ? '#6D28D9' : feedbackType === 'positive' ? '#065F46' : '#92400E',
                padding: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '8px',
                position: 'relative',
                zIndex: 1
              }}
            >
              <p style={{ margin: 0 }}>{feedbackMessage}</p>
              
              {/* Difficulty adjustment notification */}
              {difficultyDirection && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: 0.8 }}
                  style={{
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    backgroundColor: difficultyDirection === 'up' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)'
                  }}
                >
                  {difficultyDirection === 'up' ? (
                    <TrendingUp size={18} color="#059669" />
                  ) : (
                    <TrendingDown size={18} color="#D97706" />
                  )}
                  <span style={{ 
                    fontWeight: 'bold',
                    color: difficultyDirection === 'up' ? '#059669' : '#D97706'
                  }}>
                    Difficulty set to: {currentDifficulty}
                  </span>
                </motion.div>
              )}
            </motion.div>
            
            {/* Stars earned */}
            <motion.div
              variants={starContainerVariants}
              initial="hidden"
              animate="visible"
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1rem',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
              }}
            >
              {Array.from({ length: starsToShow }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={starVariants}
                  className="pulse"
                  style={{
                    filter: isPerfectScore ? 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.7))' : 'none'
                  }}
                >
                  <Star 
                    size={isPerfectScore ? 70 : 60} 
                    color="#F59E0B" 
                    fill="#F59E0B" 
                    strokeWidth={1}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Navigation buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1rem',
                flexWrap: 'wrap',
                position: 'relative',
                zIndex: 1
              }}
            >
              <ChildButton
                onClick={returnHome}
                color="white"
                size="large"
                icon={<Home size={20} />}
              >
                Go Home
              </ChildButton>
              
              <ChildButton
                onClick={continueAfterFeedback}
                color={isPerfectScore ? 'purple' : 'primary'}
                size="large"
                icon={<ArrowRight size={20} />}
              >
                More Lessons
              </ChildButton>
            </motion.div>
          </Card>
        </motion.div>
      </div>
      
      <CharacterMascot position="bottom-right" animation={isPerfectScore ? 'celebrating' : feedbackType === 'positive' ? 'happy' : 'encouraging'} />
    </div>
  );
};

export default FeedbackPage; 