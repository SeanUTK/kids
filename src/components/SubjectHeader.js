import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { useAppContext } from '../context/AppContext';

const SubjectHeader = ({ subjectName, SubjectIcon, subjectColor, description }) => {
  const { getCurrentLessonDifficulty } = useAppContext();
  
  // Get the default difficulty for this subject by checking any lesson
  const subjectId = subjectName.toLowerCase();
  const subjectDefaultDifficulty = getCurrentLessonDifficulty(subjectId);
  
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
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      style={{ marginBottom: '2rem' }}
    >
      <Card 
        color={subjectColor} 
        interactive={false}
      >
        <div className="flex-row align-center gap-large flex-row-tablet-column">
          <div className="flex-row justify-center">
            {SubjectIcon && <SubjectIcon size={80} interactive />}
          </div>
          
          <div className="flex-column gap-small">
            <h2 style={{ marginBottom: '0.5rem' }}>
              {subjectName} Adventures
            </h2>
            <p style={{ marginBottom: '0.5rem' }}>
              {description}
            </p>
            <div className="flex-row align-center gap-small keep-row-mobile">
              <span>Default difficulty:</span>
              {getDifficultyBadge(subjectDefaultDifficulty)}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default SubjectHeader; 