import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Volume } from 'lucide-react';
import { WeatherSVGs } from '../../assets/svg';
import './LessonPage.css';
import Card from '../../components/Card';
import ChildButton from '../../components/ChildButton';
import { useAppContext } from '../../context/AppContext';

// Define difficulty levels for weather
const WEATHER_DIFFICULTY = {
  easy: ['Sunny', 'Rainy', 'Cloudy'],
  medium: ['Snowy', 'Windy', 'Foggy'],
  hard: ['Stormy', 'Hail']
};

// Advanced Weather SVG Components
const AdvancedWeatherSVGs = {
  Sunny: ({ size = 200 }) => (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {/* Sun circle */}
      <circle cx="100" cy="100" r="50" fill="#FDB813" />
      
      {/* Sun rays - animated */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const x1 = 100 + 60 * Math.cos(angle);
        const y1 = 100 + 60 * Math.sin(angle);
        const x2 = 100 + 80 * Math.cos(angle);
        const y2 = 100 + 80 * Math.sin(angle);
        
        return (
          <motion.line 
            key={i}
            x1={x1} 
            y1={y1} 
            x2={x2} 
            y2={y2} 
            stroke="#FDB813" 
            strokeWidth="6" 
            strokeLinecap="round"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        );
      })}
      
      {/* Sun face */}
      <circle cx="80" cy="90" r="8" fill="#F8F8FF" />
      <circle cx="120" cy="90" r="8" fill="#F8F8FF" />
      <path d="M 80,120 Q 100,140 120,120" stroke="#F8F8FF" strokeWidth="5" fill="none" strokeLinecap="round" />
    </motion.svg>
  ),
  
  Rainy: ({ size = 200 }) => (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
    >
      {/* Cloud */}
      <motion.path 
        d="M 40,80 Q 30,60 50,50 Q 70,30 100,40 Q 130,30 150,50 Q 170,40 180,70 Q 190,90 170,100 Q 150,110 120,100 Q 90,120 60,100 Q 30,100 40,80" 
        fill="#A6AAAD"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Rain drops - animated */}
      {Array.from({ length: 10 }).map((_, i) => {
        const x = 50 + i * 15;
        const delay = i * 0.2;
        
        return (
          <motion.path 
            key={i}
            d={`M ${x},110 L ${x-5},140`} 
            stroke="#4D9DE0" 
            strokeWidth="4" 
            strokeLinecap="round"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 80, opacity: [0, 1, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: delay,
              repeatDelay: 0.5
            }}
          />
        );
      })}
    </motion.svg>
  ),
  
  Cloudy: ({ size = 200 }) => (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
    >
      {/* Background cloud */}
      <motion.path 
        d="M 30,100 Q 20,80 40,70 Q 60,50 90,60 Q 120,50 140,70 Q 160,60 170,90 Q 180,110 160,120 Q 140,130 110,120 Q 80,140 50,120 Q 20,120 30,100" 
        fill="#D3D3D3"
        initial={{ x: -10 }}
        animate={{ x: 10 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Foreground cloud */}
      <motion.path 
        d="M 70,130 Q 60,110 80,100 Q 100,80 130,90 Q 160,80 180,100 Q 200,90 210,120 Q 220,140 200,150 Q 180,160 150,150 Q 120,170 90,150 Q 60,150 70,130" 
        fill="#A6AAAD"
        initial={{ x: 10 }}
        animate={{ x: -10 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.svg>
  )
};

const WeatherLesson = () => {
  const { 
    getCurrentLessonDifficulty, 
    playSound, 
    completeLesson 
  } = useAppContext();
  
  const lessonDifficulty = getCurrentLessonDifficulty();
  const weatherTypes = WEATHER_DIFFICULTY[lessonDifficulty];
  
  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions] = useState(5); // 5 questions per lesson
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentWeather, setCurrentWeather] = useState('');
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
    
    // Randomly select a current weather type
    const randomWeatherIndex = Math.floor(Math.random() * weatherTypes.length);
    const selectedWeather = weatherTypes[randomWeatherIndex];
    setCurrentWeather(selectedWeather);
    
    // Generate answer choices, including the correct one
    let answerChoices = [selectedWeather];
    
    // Add other random weather types as options
    const allWeatherTypes = Object.keys(WeatherSVGs);
    while (answerChoices.length < 4) {
      const randomWeather = allWeatherTypes[Math.floor(Math.random() * allWeatherTypes.length)];
      if (!answerChoices.includes(randomWeather)) {
        answerChoices.push(randomWeather);
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
    const correct = answer === currentWeather;
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

  // Get the current weather's SVG component - use advanced SVG if available
  const CurrentWeatherSVG = AdvancedWeatherSVGs[currentWeather] || WeatherSVGs[currentWeather];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card color="green" interactive={false} style={{ marginBottom: '2rem' }}>
          <h2>What kind of weather is this?</h2>
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
            {CurrentWeatherSVG && <CurrentWeatherSVG size={200} />}
          </div>
        </Card>
      </motion.div>
      
      <h3>Select the correct weather type:</h3>
      
      <div 
        style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        {options.map((weather) => (
          <ChildButton 
            key={weather}
            onClick={() => handleAnswerSelect(weather)}
            color="primary"
            size="large"
            disabled={showFeedback}
            style={{ 
              fontWeight: 'bold',
              opacity: showFeedback && selectedAnswer !== weather ? 0.7 : 1
            }}
          >
            {weather}
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
                      ? `That's ${currentWeather} weather!` 
                      : `This is ${currentWeather} weather. Let's try another one!`
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

export default WeatherLesson; 