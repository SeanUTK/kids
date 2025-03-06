import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Volume } from 'lucide-react';
import { ColorSVGs } from '../../assets/svg';
import './LessonPage.css';
import Card from '../../components/Card';
import ChildButton from '../../components/ChildButton';
import { useAppContext } from '../../context/AppContext';

// Define difficulty levels for colors
const COLOR_DIFFICULTY = {
  easy: ['Red', 'Blue', 'Green', 'Yellow'],
  medium: ['Orange', 'Purple', 'Pink', 'Brown'],
  hard: ['Black', 'White', 'Gray']
};

// Advanced Color SVG Components with interactive elements
const AdvancedColorSVGs = {
  Red: ({ size = 200 }) => (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      whileHover={{ scale: 1.05 }}
    >
      {/* Background */}
      <rect x="0" y="0" width="200" height="200" rx="20" fill="#FFEEEE" />
      
      {/* Main color circle */}
      <motion.circle 
        cx="100" 
        cy="100" 
        r="60" 
        fill="#FF0000"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Color name */}
      <text 
        x="100" 
        y="100" 
        fontSize="24" 
        fontWeight="bold" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fill="#FFFFFF"
      >
        Red
      </text>
      
      {/* Small circles around */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45) * Math.PI / 180;
        const x = 100 + 90 * Math.cos(angle);
        const y = 100 + 90 * Math.sin(angle);
        
        return (
          <motion.circle 
            key={i}
            cx={x} 
            cy={y} 
            r="10" 
            fill="#FF0000"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        );
      })}
    </motion.svg>
  ),
  
  Blue: ({ size = 200 }) => (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      whileHover={{ scale: 1.05 }}
    >
      {/* Background */}
      <rect x="0" y="0" width="200" height="200" rx="20" fill="#EEEEFF" />
      
      {/* Water waves */}
      {Array.from({ length: 5 }).map((_, i) => {
        const y = 80 + i * 20;
        
        return (
          <motion.path 
            key={i}
            d={`M 20,${y} Q 50,${y-15} 80,${y} Q 110,${y+15} 140,${y} Q 170,${y-15} 180,${y}`}
            stroke="#0000FF"
            strokeWidth="8"
            fill="none"
            initial={{ x: 0 }}
            animate={{ x: [0, 10, 0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          />
        );
      })}
      
      {/* Color name */}
      <text 
        x="100" 
        y="50" 
        fontSize="24" 
        fontWeight="bold" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fill="#0000FF"
      >
        Blue
      </text>
    </motion.svg>
  ),
  
  Green: ({ size = 200 }) => (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      whileHover={{ scale: 1.05 }}
    >
      {/* Background */}
      <rect x="0" y="0" width="200" height="200" rx="20" fill="#EEFFEE" />
      
      {/* Tree trunk */}
      <rect x="90" y="120" width="20" height="60" fill="#8B4513" />
      
      {/* Tree leaves */}
      <motion.path 
        d="M 100,40 L 50,120 L 150,120 Z" 
        fill="#008000"
        initial={{ scale: 0.9, y: 0 }}
        animate={{ scale: 1, y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <motion.path 
        d="M 100,70 L 60,130 L 140,130 Z" 
        fill="#00A000"
        initial={{ scale: 0.9, y: 0 }}
        animate={{ scale: 1, y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      
      {/* Color name */}
      <text 
        x="100" 
        y="170" 
        fontSize="24" 
        fontWeight="bold" 
        textAnchor="middle" 
        dominantBaseline="middle"
        fill="#008000"
      >
        Green
      </text>
    </motion.svg>
  )
};

const ColorsLesson = () => {
  const { 
    getCurrentLessonDifficulty, 
    playSound, 
    completeLesson 
  } = useAppContext();
  
  const lessonDifficulty = getCurrentLessonDifficulty();
  const colors = COLOR_DIFFICULTY[lessonDifficulty];
  
  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions] = useState(5); // 5 questions per lesson
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentColor, setCurrentColor] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinalQuestion, setIsFinalQuestion] = useState(false);

  // Initialize lesson
  useEffect(() => {
    setupQuestion();
  }, []);

  // Set up a new question
  const setupQuestion = () => {
    // Check if this is the final question
    setIsFinalQuestion(currentQuestion + 1 >= totalQuestions);
    
    // Randomly select a current color
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomColorIndex];
    setCurrentColor(selectedColor);
    
    // Generate answer choices, including the correct one
    let answerChoices = [selectedColor];
    
    // Add other random colors as options
    const allColors = Object.keys(ColorSVGs);
    while (answerChoices.length < 4) {
      const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
      if (!answerChoices.includes(randomColor)) {
        answerChoices.push(randomColor);
      }
    }
    
    // Shuffle the options
    setOptions(answerChoices.sort(() => Math.random() - 0.5));
    
    // Reset state
    setShowFeedback(false);
    setSelectedAnswer(null);
  };

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentColor;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Update score and play sound
    if (correct) {
      setScore(score + 1);
      playSound('correct');
    } else {
      playSound('incorrect');
    }
  };

  // Handle continuing to the next question
  const handleNextQuestion = () => {
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setupQuestion();
    } else {
      // Play completion sound
      playSound('completion');
      
      // Calculate success rate (0-1)
      const successRate = score / totalQuestions;
      
      // Complete the lesson immediately - this will navigate to the feedback page
      completeLesson(successRate);
    }
  };

  // Get the current color's SVG component - use advanced SVG if available
  const CurrentColorSVG = AdvancedColorSVGs[currentColor] || ColorSVGs[currentColor];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card color="green" interactive={false} style={{ marginBottom: '2rem' }}>
          <h2>What color is this?</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span>Question {currentQuestion + 1} of {totalQuestions}</span>
            <div className="badge" style={{ backgroundColor: '#10B981' }}>
              Score: {score}
            </div>
            <div className="badge" style={{ backgroundColor: '#8B5CF6' }}>
              Difficulty: {lessonDifficulty}
            </div>
          </div>
          
          <div 
            style={{ 
              padding: '2rem', 
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {CurrentColorSVG && <CurrentColorSVG size={200} />}
          </div>
        </Card>
      </motion.div>
      
      <h3>Select the correct color:</h3>
      
      <div 
        style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        {options.map((color) => (
          <ChildButton 
            key={color}
            onClick={() => handleAnswerSelect(color)}
            color="primary"
            size="large"
            disabled={showFeedback}
            style={{ 
              fontWeight: 'bold',
              opacity: showFeedback && selectedAnswer !== color ? 0.7 : 1
            }}
          >
            {color}
          </ChildButton>
        ))}
      </div>
      
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            id="feedback-section"
          >
            <Card 
              color={isCorrect ? 'green' : 'red'}
              interactive={false}
              style={{ marginBottom: '2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {isCorrect ? 
                  <CheckCircle size={32} color="#10B981" /> : 
                  <XCircle size={32} color="#EF4444" />
                }
                <div>
                  <h3>
                    {isCorrect ? 'Correct! Great job!' : 'Not quite right.'}
                  </h3>
                  <p>
                    {isCorrect 
                      ? `That's the color ${currentColor}!` 
                      : `This color is ${currentColor}. Let's try another one!`
                    }
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <ChildButton 
                  onClick={handleNextQuestion}
                  color="primary"
                  size="large"
                  icon={<CheckCircle size={18} />}
                >
                  {!isFinalQuestion ? 'Next Question' : 'Finish Lesson'}
                </ChildButton>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorsLesson; 