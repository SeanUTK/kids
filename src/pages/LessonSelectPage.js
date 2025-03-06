import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Award, Puzzle, Zap, Brain } from 'lucide-react';

import ChildButton from '../components/ChildButton';
import { useAppContext } from '../context/AppContext';
import { SubjectIcons } from '../assets/svg/SubjectIcons';
import LessonCard from '../components/LessonCard';
import SubjectHeader from '../components/SubjectHeader';

// The data for all available lessons
const LESSONS = {
  math: [
    {
      id: 'counting',
      name: 'Counting Fun',
      description: 'Learn to count objects from 1 to 10',
      difficulty: {
        easy: 'Count up to 5',
        medium: 'Count up to 10',
        hard: 'Count up to 20'
      },
      icon: <Puzzle size={24} />
    },
    {
      id: 'addition',
      name: 'Addition Adventure',
      description: 'Add numbers together to solve puzzles',
      difficulty: {
        easy: 'Add numbers up to 5',
        medium: 'Add numbers up to 10',
        hard: 'Add numbers up to 20'
      },
      icon: <Zap size={24} />
    },
    {
      id: 'shapes',
      name: 'Shape Explorer',
      description: 'Learn to recognize different shapes',
      difficulty: {
        easy: 'Basic shapes',
        medium: 'More shapes',
        hard: 'Complex shapes'
      },
      icon: <Brain size={24} />
    }
  ],
  science: [
    {
      id: 'animals',
      name: 'Animal Kingdom',
      description: 'Learn about different animals',
      difficulty: {
        easy: 'Common pets',
        medium: 'Farm animals',
        hard: 'Wild animals'
      },
      icon: <Puzzle size={24} />
    },
    {
      id: 'weather',
      name: 'Weather Watch',
      description: 'Explore different weather types',
      difficulty: {
        easy: 'Basic weather',
        medium: 'Seasons',
        hard: 'Weather patterns'
      },
      icon: <Zap size={24} />
    },
    {
      id: 'colors',
      name: 'Color Magic',
      description: 'Discover the world of colors',
      difficulty: {
        easy: 'Primary colors',
        medium: 'Secondary colors',
        hard: 'Color mixing'
      },
      icon: <Brain size={24} />
    }
  ],
  vocabulary: [
    {
      id: 'letters',
      name: 'Letter Land',
      description: 'Learn the alphabet letters',
      difficulty: {
        easy: 'First 8 letters',
        medium: 'All 26 letters',
        hard: 'Capital and lowercase'
      },
      icon: <Puzzle size={24} />
    },
    {
      id: 'words',
      name: 'Word Builder',
      description: 'Build simple words',
      difficulty: {
        easy: '3-letter words',
        medium: '4-letter words',
        hard: '5-letter words'
      },
      icon: <Zap size={24} />
    },
    {
      id: 'sounds',
      name: 'Sound Safari',
      description: 'Match sounds to pictures',
      difficulty: {
        easy: 'Animal sounds',
        medium: 'Object sounds',
        hard: 'Word sounds'
      },
      icon: <Brain size={24} />
    }
  ]
};

// Colors for each subject
const SUBJECT_COLORS = {
  math: 'blue',
  science: 'green',
  vocabulary: 'purple'
};

// Icons for each subject
const SUBJECT_ICONS = {
  math: SubjectIcons.math,
  science: SubjectIcons.science,
  vocabulary: SubjectIcons.vocabulary
};

// Description for each subject
const SUBJECT_DESCRIPTIONS = {
  math: 'Explore numbers, shapes, and fun math activities!',
  science: 'Discover the world of science through fun experiments!',
  vocabulary: 'Build your vocabulary with exciting word games!'
};

const LessonSelectPage = () => {
  const { 
    currentSubject, 
    navigateToLesson, 
    returnHome,
    stars
  } = useAppContext();
  
  // Get the subject data
  const subjectData = LESSONS[currentSubject] || [];
  const SubjectIcon = SUBJECT_ICONS[currentSubject];
  const subjectColor = SUBJECT_COLORS[currentSubject];
  const subjectDescription = SUBJECT_DESCRIPTIONS[currentSubject];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const handleLessonSelect = (lesson) => {
    navigateToLesson(lesson);
  };
  
  return (
    <div className="app-container">
      <div className="cloud-pattern" />
      <div className="bubble-pattern" />
      
      <div className="content-container">
        {/* Page header with back button and title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-row justify-between align-center gap-medium flex-row-tablet-column"
          style={{ marginBottom: '1.5rem' }}
        >
          <div className="flex-row align-center gap-medium keep-row-mobile">
            <ChildButton
              onClick={returnHome}
              color="white"
              size="small"
              icon={<ArrowLeft size={18} />}
            >
              Back
            </ChildButton>
            
            <h1 className="flex-row align-center gap-small keep-row-mobile" style={{ margin: 0 }}>
              {SubjectIcon && <SubjectIcon size={40} />}
              <span className="mobile-full-width">
                {currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)} Lessons
              </span>
            </h1>
          </div>
          
          <div className="flex-row gap-small align-center keep-row-mobile">
            <Star size={24} color="#F59E0B" fill="#F59E0B" />
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#F59E0B' }}>
              {stars} Stars
            </span>
          </div>
        </motion.div>
        
        {/* Subject header card */}
        <SubjectHeader 
          subjectName={currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)}
          SubjectIcon={SubjectIcon}
          subjectColor={subjectColor}
          description={subjectDescription}
        />
        
        <h2 style={{ marginBottom: '1.5rem' }}>Available Lessons</h2>
        
        {/* Lesson list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-column gap-medium"
        >
          {subjectData.map((lesson, index) => (
            <LessonCard 
              key={lesson.id}
              lesson={lesson}
              index={index}
              subjectColor={subjectColor}
              subjectId={currentSubject}
              onClick={() => handleLessonSelect(lesson)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LessonSelectPage; 