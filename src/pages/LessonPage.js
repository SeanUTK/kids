import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Volume, Mic, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

import Card from '../components/Card';
import ChildButton from '../components/ChildButton';
import { useAppContext } from '../context/AppContext';
// Import science lessons
import { AnimalsLesson, WeatherLesson, ColorsLesson } from './lessons';

// Sample counting items (apple SVG)
const AppleSVG = ({ x = 0, y = 0, size = 40, key }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    width={size} 
    height={size}
    x={x}
    y={y}
    className="float"
    key={key}
    whileHover={{ scale: 1.2 }}
    style={{ display: 'inline-block' }}
  >
    <circle cx="50" cy="50" r="40" fill="#EF4444" />
    <circle cx="50" cy="30" r="5" fill="#422006" />
    <path d="M50,30 C60,10 70,20 70,40" stroke="#422006" strokeWidth="4" fill="none" />
  </motion.svg>
);

// Another sample item (balloon SVG)
const BalloonSVG = ({ x = 0, y = 0, size = 40, key }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    width={size} 
    height={size}
    x={x}
    y={y}
    className="float"
    key={key}
    whileHover={{ scale: 1.2 }}
    style={{ display: 'inline-block' }}
  >
    <path d="M50,20 C30,20 25,40 30,60 C35,80 65,80 70,60 C75,40 70,20 50,20" fill="#8B5CF6" />
    <path d="M50,60 L50,90" stroke="#8B5CF6" strokeWidth="2" />
    <path d="M46,90 L54,90" stroke="#8B5CF6" strokeWidth="2" />
  </motion.svg>
);

// Item choices by difficulty
const COUNTING_ITEMS = {
  easy: {
    max: 5,
    choices: [1, 2, 3, 4, 5],
    itemSvg: AppleSVG
  },
  medium: {
    max: 10,
    choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    itemSvg: AppleSVG
  },
  hard: {
    max: 20,
    choices: [5, 10, 15, 20],
    itemSvg: BalloonSVG
  }
};

const ADDITION_MAX = {
  easy: 5,
  medium: 10,
  hard: 20
};

const SHAPES = {
  easy: [
    { name: 'Circle', path: <circle cx="50" cy="50" r="40" fill="#3B82F6" /> },
    { name: 'Square', path: <rect x="10" y="10" width="80" height="80" fill="#10B981" /> },
    { name: 'Triangle', path: <polygon points="50,10 90,90 10,90" fill="#F59E0B" /> }
  ],
  medium: [
    { name: 'Circle', path: <circle cx="50" cy="50" r="40" fill="#3B82F6" /> },
    { name: 'Square', path: <rect x="10" y="10" width="80" height="80" fill="#10B981" /> },
    { name: 'Triangle', path: <polygon points="50,10 90,90 10,90" fill="#F59E0B" /> },
    { name: 'Rectangle', path: <rect x="10" y="30" width="80" height="40" fill="#EC4899" /> },
    { name: 'Oval', path: <ellipse cx="50" cy="50" rx="45" ry="30" fill="#8B5CF6" /> }
  ],
  hard: [
    { name: 'Circle', path: <circle cx="50" cy="50" r="40" fill="#3B82F6" /> },
    { name: 'Square', path: <rect x="10" y="10" width="80" height="80" fill="#10B981" /> },
    { name: 'Triangle', path: <polygon points="50,10 90,90 10,90" fill="#F59E0B" /> },
    { name: 'Rectangle', path: <rect x="10" y="30" width="80" height="40" fill="#EC4899" /> },
    { name: 'Pentagon', path: <polygon points="50,10 90,40 75,90 25,90 10,40" fill="#EF4444" /> },
    { name: 'Hexagon', path: <polygon points="30,10 70,10 90,50 70,90 30,90 10,50" fill="#F97316" /> },
    { name: 'Diamond', path: <polygon points="50,10 90,50 50,90 10,50" fill="#0EA5E9" /> }
  ]
};

const LessonPage = () => {
  const { currentLesson, currentSubject, returnHome, completeLesson } = useAppContext();
  
  // If we don't have a lesson, go back home
  useEffect(() => {
    if (!currentLesson) {
      returnHome();
    }
  }, [currentLesson, returnHome]);
  
  // Don't render anything if there's no lesson
  if (!currentLesson) return null;
  
  return (
    <div className="app-container">
      <div className="cloud-pattern" />
      <div className="bubble-pattern" />
      
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-row align-center"
          style={{ marginBottom: '1.5rem' }}
        >
          <ChildButton
            onClick={returnHome}
            color="purple"
            size="medium"
            icon={<ArrowLeft size={18} />}
          >
            EXIT LESSON
          </ChildButton>
          
          <h1 style={{ margin: '0 0 0 12px' }}>
            {currentLesson.name}
          </h1>
        </motion.div>
        
        {/* Render the appropriate lesson based on subject and lesson ID */}
        {currentSubject === 'math' && currentLesson.id === 'counting' && (
          <CountingLesson lessonData={currentLesson} onComplete={completeLesson} />
        )}
        
        {currentSubject === 'math' && currentLesson.id === 'addition' && (
          <AdditionLesson lessonData={currentLesson} onComplete={completeLesson} />
        )}
        
        {currentSubject === 'math' && currentLesson.id === 'shapes' && (
          <ShapesLesson lessonData={currentLesson} onComplete={completeLesson} />
        )}
        
        {/* Science lessons */}
        {currentSubject === 'science' && currentLesson.id === 'animals' && (
          <AnimalsLesson />
        )}
        
        {currentSubject === 'science' && currentLesson.id === 'weather' && (
          <WeatherLesson />
        )}
        
        {currentSubject === 'science' && currentLesson.id === 'colors' && (
          <ColorsLesson />
        )}
      </div>
    </div>
  );
};

const CountingLesson = ({ lessonData, onComplete }) => {
  const { getCurrentLessonDifficulty, playSound } = useAppContext();
  const lessonDifficulty = getCurrentLessonDifficulty();
  
  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions] = useState(5); // 5 questions per lesson
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [choices, setChoices] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinalQuestion, setIsFinalQuestion] = useState(false);
  
  // Audio references
  const correctSoundRef = useRef(null);
  const incorrectSoundRef = useRef(null);
  const countingSoundRef = useRef(null);
  
  // Set up a new question
  const setupQuestion = () => {
    // Check if this is the final question
    setIsFinalQuestion(currentQuestion + 1 >= totalQuestions);
    
    const { max, choices: difficultyChoices, itemSvg } = COUNTING_ITEMS[lessonDifficulty];
    // Generate a random count between 1 and the max for this difficulty
    const count = Math.floor(Math.random() * max) + 1;
    setItemCount(count);
    
    // Create answer choices, including the correct one
    let answerChoices = [...difficultyChoices];
    // Shuffle the answer choices
    answerChoices = answerChoices.sort(() => Math.random() - 0.5).slice(0, 4);
    if (!answerChoices.includes(count)) {
      answerChoices[0] = count;
    }
    // Shuffle again to place the correct answer randomly
    setChoices(answerChoices.sort(() => Math.random() - 0.5));
    
    // Reset state
    setShowFeedback(false);
    setSelectedAnswer(null);
  };
  
  // Initialize lesson
  useEffect(() => {
    setupQuestion();
    
    // Set up audio files
    correctSoundRef.current = new Audio('/sounds/correct.mp3');
    incorrectSoundRef.current = new Audio('/sounds/incorrect.mp3');
    countingSoundRef.current = new Audio('/sounds/counting.mp3');
    
    // Clean up audio on unmount
    return () => {
      if (correctSoundRef.current) correctSoundRef.current.pause();
      if (incorrectSoundRef.current) incorrectSoundRef.current.pause();
      if (countingSoundRef.current) countingSoundRef.current.pause();
    };
  }, []);
  
  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    const correct = answer === itemCount;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Update score
    if (correct) {
      setScore(prev => prev + 1);
      playSound('correct');
    } else {
      playSound('incorrect');
    }
  };
  
  // Handle next question
  const handleNextQuestion = () => {
    if (isFinalQuestion) {
      // Complete the lesson
      onComplete(score >= Math.ceil(totalQuestions / 2)); // Succeed if at least half correct
    } else {
      // Go to next question
      setCurrentQuestion(prev => prev + 1);
      setupQuestion();
    }
  };
  
  // Play counting sound
  const playCountingSound = () => {
    // Play sound effect
    if (countingSoundRef.current) {
      countingSoundRef.current.currentTime = 0;
      countingSoundRef.current.play().catch(e => console.log('Audio playback error:', e));
    }
  };
  
  // Render items for counting
  const renderItems = () => {
    const { itemSvg: ItemSvg } = COUNTING_ITEMS[lessonDifficulty];
    
    // Use a flex layout instead of SVG positioning
    return (
      <div className="flex flex-wrap justify-center" style={{ gap: '12px' }}>
        {Array.from({ length: itemCount }).map((_, i) => (
          <div key={i} style={{ display: 'inline-block' }}>
            <svg 
              viewBox="0 0 100 100" 
              width={50} 
              height={50}
              className="hover:scale-110 transition-transform"
            >
              <circle cx="50" cy="50" r="40" fill="#EF4444" />
              <circle cx="50" cy="30" r="5" fill="#422006" />
              <path d="M50,30 C60,10 70,20 70,40" stroke="#422006" strokeWidth="4" fill="none" />
            </svg>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card color="blue" interactive={false} style={{ 
          marginBottom: '2rem', 
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
          <div className="flex-row justify-between align-center" style={{ marginBottom: '1rem' }}>
            <h2>How many items are there?</h2>
            <div className="flex-row align-center gap-small">
              <span>Question {currentQuestion + 1} of {totalQuestions}</span>
              <div className="badge" style={{ backgroundColor: '#3B82F6' }}>
                Score: {score}
              </div>
              <div className="badge" style={{ backgroundColor: '#8B5CF6' }}>
                Difficulty: {lessonDifficulty}
              </div>
            </div>
          </div>
          
          <div className="flex-column align-center">
            <div 
              style={{ 
                padding: '1.5rem', 
                backgroundColor: 'white', 
                borderRadius: '12px',
                width: '100%',
                minHeight: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {renderItems()}
            </div>
           
            <div className="flex-row justify-center" style={{ marginTop: '1rem' }}>
              <ChildButton 
                onClick={playCountingSound}
                color="success"
                icon={<Volume size={18} />}
              >
                COUNT WITH ME
              </ChildButton>
            </div>
          </div>
        </Card>
      </motion.div>
      
      {!showFeedback && (
        <>
          <h3>Select the correct answer:</h3>
          
          <div className="grid grid-cols-2 gap-medium" style={{ marginBottom: '2rem' }}>
            {choices.map((choice) => (
              <ChildButton 
                key={choice}
                onClick={() => handleAnswerSelect(choice)}
                color="primary"
                size="large"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem'
                }}
              >
                {choice}
              </ChildButton>
            ))}
          </div>
        </>
      )}
      
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
              <div className="flex-row align-center gap-medium">
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
                      ? 'You counted correctly!' 
                      : `The correct answer is ${itemCount}. Let's try counting again.`
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex-row justify-center" style={{ marginTop: '1rem' }}>
                <ChildButton
                  onClick={handleNextQuestion}
                  color="primary"
                  size="large"
                  icon={<ArrowRight size={18} />}
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

const AdditionLesson = ({ lessonData, onComplete }) => {
  const { getCurrentLessonDifficulty, playSound } = useAppContext();
  const lessonDifficulty = getCurrentLessonDifficulty();
  
  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions] = useState(5); // 5 questions per lesson
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [choices, setChoices] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinalQuestion, setIsFinalQuestion] = useState(false);
  
  // Set up a new question
  const setupQuestion = () => {
    // Check if this is the final question
    setIsFinalQuestion(currentQuestion + 1 >= totalQuestions);
    
    const max = ADDITION_MAX[lessonDifficulty];
    
    // Generate random numbers
    const n1 = Math.floor(Math.random() * max) + 1;
    const n2 = Math.floor(Math.random() * max) + 1;
    setNum1(n1);
    setNum2(n2);
    
    // Calculate correct answer
    const correctAnswer = n1 + n2;
    
    // Create answer choices, including the correct one
    let answerChoices = [correctAnswer];
    
    // Add some incorrect choices
    while (answerChoices.length < 4) {
      const wrongAnswer = Math.floor(Math.random() * (max * 2)) + 1;
      if (wrongAnswer !== correctAnswer && !answerChoices.includes(wrongAnswer)) {
        answerChoices.push(wrongAnswer);
      }
    }
    
    // Shuffle the choices
    setChoices(answerChoices.sort(() => Math.random() - 0.5));
    
    // Reset state
    setShowFeedback(false);
    setSelectedAnswer(null);
  };
  
  // Initialize lesson
  useEffect(() => {
    setupQuestion();
  }, []);
  
  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    const correct = answer === (num1 + num2);
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Update score
    if (correct) {
      setScore(prev => prev + 1);
      playSound('correct');
    } else {
      playSound('incorrect');
    }
  };
  
  // Handle next question
  const handleNextQuestion = () => {
    if (isFinalQuestion) {
      // Complete the lesson
      onComplete(score >= Math.ceil(totalQuestions / 2)); // Succeed if at least half correct
    } else {
      // Go to next question
      setCurrentQuestion(prev => prev + 1);
      setupQuestion();
    }
  };
  
  // Render number blocks for visual representation
  const renderNumberBlocks = (num, color) => {
    const blocks = [];
    for (let i = 0; i < num; i++) {
      blocks.push(
        <div 
          key={i}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: color,
            margin: '2px',
            borderRadius: '3px'
          }}
        />
      );
    }
    
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '120px', justifyContent: 'center' }}>
        {blocks}
      </div>
    );
  };
  
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card color="blue" interactive={false} style={{ 
          marginBottom: '2rem', 
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
          <div className="flex-row justify-between align-center" style={{ marginBottom: '1rem' }}>
            <h2>Addition Challenge</h2>
            <div className="flex-row align-center gap-small">
              <span>Question {currentQuestion + 1} of {totalQuestions}</span>
              <div className="badge" style={{ backgroundColor: '#3B82F6' }}>
                Score: {score}
              </div>
              <div className="badge" style={{ backgroundColor: '#8B5CF6' }}>
                Difficulty: {lessonDifficulty}
              </div>
            </div>
          </div>
          
          <div className="flex-column align-center" style={{ 
              padding: '1.5rem', 
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              borderRadius: '12px',
            }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              {num1} + {num2} = ?
            </div>
            
            <div className="flex-row align-center gap-large justify-center">
              <div className="flex-column align-center">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{num1}</div>
                {renderNumberBlocks(num1, '#3B82F6')}
              </div>
              
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>+</div>
              
              <div className="flex-column align-center">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{num2}</div>
                {renderNumberBlocks(num2, '#F59E0B')}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
      
      {!showFeedback && (
        <>
          <h3>What's the answer?</h3>
          
          <div className="grid grid-cols-2 gap-medium" style={{ marginBottom: '2rem' }}>
            {choices.map((choice) => (
              <ChildButton 
                key={choice}
                onClick={() => handleAnswerSelect(choice)}
                color="primary"
                size="large"
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem'
                }}
              >
                {choice}
              </ChildButton>
            ))}
          </div>
        </>
      )}
      
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
              <div className="flex-row align-center gap-medium">
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
                      ? `${num1} + ${num2} = ${num1 + num2}. You're a math whiz!` 
                      : `${num1} + ${num2} = ${num1 + num2}. Let's try another one!`
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex-row justify-center" style={{ marginTop: '1rem' }}>
                <ChildButton
                  onClick={handleNextQuestion}
                  color="primary"
                  size="large"
                  icon={<ArrowRight size={18} />}
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

const ShapesLesson = ({ lessonData, onComplete }) => {
  const { getCurrentLessonDifficulty, playSound } = useAppContext();
  const lessonDifficulty = getCurrentLessonDifficulty();
  
  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions] = useState(5); // 5 questions per lesson
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentShape, setCurrentShape] = useState(null);
  const [choices, setChoices] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinalQuestion, setIsFinalQuestion] = useState(false);
  
  // Set up a new question
  const setupQuestion = () => {
    // Check if this is the final question
    setIsFinalQuestion(currentQuestion + 1 >= totalQuestions);
    
    const availableShapes = SHAPES[lessonDifficulty];
    
    // Select a random shape
    const shapeIndex = Math.floor(Math.random() * availableShapes.length);
    const shape = availableShapes[shapeIndex];
    setCurrentShape(shape);
    
    // Create answer choices, including the correct one
    let answerChoices = availableShapes.map(s => s.name);
    
    // If we're on easy mode, limit choices to 3
    if (lessonDifficulty === 'easy') {
      answerChoices = answerChoices.slice(0, 3);
    }
    
    // Ensure the correct answer is included
    if (!answerChoices.includes(shape.name)) {
      answerChoices[0] = shape.name;
    }
    
    // Shuffle the choices
    setChoices(answerChoices.sort(() => Math.random() - 0.5));
    
    // Reset state
    setShowFeedback(false);
    setSelectedAnswer(null);
  };
  
  // Initialize lesson
  useEffect(() => {
    setupQuestion();
  }, []);
  
  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    if (showFeedback) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentShape.name;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Update score
    if (correct) {
      setScore(prev => prev + 1);
      playSound('correct');
    } else {
      playSound('incorrect');
    }
  };
  
  // Handle next question
  const handleNextQuestion = () => {
    if (isFinalQuestion) {
      // Complete the lesson
      onComplete(score >= Math.ceil(totalQuestions / 2)); // Succeed if at least half correct
    } else {
      // Go to next question
      setCurrentQuestion(prev => prev + 1);
      setupQuestion();
    }
  };
  
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card color="blue" interactive={false} style={{ 
          marginBottom: '2rem', 
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
          <div className="flex-row justify-between align-center" style={{ marginBottom: '1rem' }}>
            <h2>What Shape Is This?</h2>
            <div className="flex-row align-center gap-small">
              <span>Question {currentQuestion + 1} of {totalQuestions}</span>
              <div className="badge" style={{ backgroundColor: '#3B82F6' }}>
                Score: {score}
              </div>
              <div className="badge" style={{ backgroundColor: '#8B5CF6' }}>
                Difficulty: {lessonDifficulty}
              </div>
            </div>
          </div>
          
          {currentShape && (
            <div className="flex-column align-center" style={{ 
                padding: '2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                borderRadius: '12px',
              }}>
              <svg 
                viewBox="0 0 100 100" 
                width="150" 
                height="150"
              >
                {currentShape.path}
              </svg>
            </div>
          )}
        </Card>
      </motion.div>
      
      {!showFeedback && (
        <>
          <h3>What shape is this?</h3>
          
          <div className="grid grid-cols-2 gap-medium" style={{ marginBottom: '2rem' }}>
            {choices.map((choice) => (
              <ChildButton 
                key={choice}
                onClick={() => handleAnswerSelect(choice)}
                color="primary"
                size="large"
                style={{
                  fontWeight: 'bold'
                }}
              >
                {choice}
              </ChildButton>
            ))}
          </div>
        </>
      )}
      
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
              <div className="flex-row align-center gap-medium">
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
                      ? `This is indeed a ${currentShape.name}!` 
                      : `This shape is a ${currentShape.name}. Let's try another one!`
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex-row justify-center" style={{ marginTop: '1rem' }}>
                <ChildButton
                  onClick={handleNextQuestion}
                  color="primary"
                  size="large"
                  icon={<ArrowRight size={18} />}
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

export default LessonPage; 