import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Volume } from 'lucide-react';
import { AnimalSVGs } from '../../assets/svg';
import animalSounds from '../../data/animalSounds';
import './LessonPage.css';
import Card from '../../components/Card';
import ChildButton from '../../components/ChildButton';
import { useAppContext } from '../../context/AppContext';

// Define difficulty levels for animals
const ANIMAL_DIFFICULTY = {
  easy: ['Cat', 'Dog', 'Fish', 'Bird', 'Rabbit'],
  medium: ['Cow', 'Pig', 'Horse', 'Chicken', 'Sheep'],
  hard: ['Lion', 'Elephant', 'Giraffe', 'Monkey', 'Tiger', 'Zebra', 'Kangaroo']
};

const AnimalsLesson = () => {
  const { 
    getCurrentLessonDifficulty, 
    playSound, 
    completeLesson 
  } = useAppContext();
  
  const lessonDifficulty = getCurrentLessonDifficulty();
  const animals = ANIMAL_DIFFICULTY[lessonDifficulty];
  
  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestions] = useState(5); // 5 questions per lesson
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentAnimal, setCurrentAnimal] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinalQuestion, setIsFinalQuestion] = useState(false);

  // Initialize lesson
  useEffect(() => {
    setupQuestion();
  }, []);

  // Play animal sound
  const playAnimalSound = (animal) => {
    if (animalSounds[animal]) {
      try {
        playSound('correct'); // Use a general sound for now
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }
  };

  // Set up a new question
  const setupQuestion = () => {
    // Check if this is the final question
    setIsFinalQuestion(currentQuestion + 1 >= totalQuestions);
    
    // Randomly select a current animal
    const randomAnimalIndex = Math.floor(Math.random() * animals.length);
    const selectedAnimal = animals[randomAnimalIndex];
    setCurrentAnimal(selectedAnimal);
    
    // Generate answer choices, including the correct one
    let answerChoices = [selectedAnimal];
    
    // Add other random animals as options
    const allAnimals = Object.keys(AnimalSVGs);
    while (answerChoices.length < 4) {
      const randomAnimal = allAnimals[Math.floor(Math.random() * allAnimals.length)];
      if (!answerChoices.includes(randomAnimal)) {
        answerChoices.push(randomAnimal);
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
    const correct = answer === currentAnimal;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    // Update score and play sound
    if (correct) {
      setScore(score + 1);
      playSound('correct');
      playAnimalSound(currentAnimal);
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

  // Get the current animal's SVG component
  const CurrentAnimalSVG = AnimalSVGs[currentAnimal];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card color="green" interactive={false} style={{ marginBottom: '2rem' }}>
          <h2>What animal is this?</h2>
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
            {CurrentAnimalSVG && <CurrentAnimalSVG size={200} />}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <ChildButton 
              onClick={() => playAnimalSound(currentAnimal)}
              color="secondary"
              icon={<Volume size={18} />}
            >
              Play Sound
            </ChildButton>
          </div>
        </Card>
      </motion.div>
      
      <h3>Select the correct animal:</h3>
      
      <div 
        style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        {options.map((animal) => (
          <ChildButton 
            key={animal}
            onClick={() => handleAnswerSelect(animal)}
            color="primary"
            size="large"
            disabled={showFeedback}
            style={{ 
              fontWeight: 'bold',
              opacity: showFeedback && selectedAnswer !== animal ? 0.7 : 1
            }}
          >
            {animal}
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
                      ? `That's a ${currentAnimal}!` 
                      : `This is a ${currentAnimal}. Let's try another one!`
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

export default AnimalsLesson; 