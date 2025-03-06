import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { useAppContext } from '../context/AppContext';

const LessonCard = ({ lesson, index, subjectColor, subjectId, onClick }) => {
  const { getCurrentLessonDifficulty } = useAppContext();
  
  // Get the difficulty for this specific lesson
  const lessonDifficulty = getCurrentLessonDifficulty(subjectId, lesson.id);
  
  // Function to display the difficulty badge
  const getDifficultyBadge = (difficultyLevel) => {
    const colors = {
      easy: '#10B981',
      medium: '#F59E0B',
      hard: '#EF4444'
    };
    
    return (
      <div 
        className="badge" 
        style={{ 
          backgroundColor: colors[difficultyLevel],
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}
      >
        {difficultyLevel === 'easy' && <span>🌱 Easy</span>}
        {difficultyLevel === 'medium' && <span>🌟 Medium</span>}
        {difficultyLevel === 'hard' && <span>🔥 Hard</span>}
      </div>
    );
  };
  
  // Item variants for animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  
  return (
    <motion.div variants={itemVariants}>
      <Card 
        color={subjectColor}
        onClick={onClick}
        fullWidth
      >
        <div className="flex-row justify-between align-center keep-row-mobile gap-medium">
          <div className="flex-column gap-small">
            <div className="flex-row align-center gap-small keep-row-mobile">
              {lesson.icon}
              <h3 style={{ margin: 0 }}>{lesson.name}</h3>
            </div>
            
            <p style={{ marginBottom: '0.75rem' }}>{lesson.description}</p>
            
            <div className="flex-row align-center gap-small keep-row-mobile">
              <span>Skill level:</span>
              {getDifficultyBadge(lessonDifficulty)}
            </div>
            
            <p style={{ fontSize: '0.9rem', color: '#4B5563', marginTop: '0.5rem' }}>
              {lesson.difficulty[lessonDifficulty]}
            </p>
          </div>
          
          <div className="float">
            <div style={{ 
              backgroundColor: subjectColor === 'blue' ? '#3B82F6' : 
                              subjectColor === 'green' ? '#10B981' : '#8B5CF6',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}>
              {index + 1}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default LessonCard; 