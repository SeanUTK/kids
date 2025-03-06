import React from 'react';
import { motion } from 'framer-motion';

export const MathIcon = ({ interactive = false, size = 100 }) => {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      whileHover={interactive ? { scale: 1.1, rotate: 5 } : {}}
      whileTap={interactive ? { scale: 0.9 } : {}}
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="#3B82F6" />
      
      {/* Numbers and symbols animation */}
      {interactive && (
        <>
          <motion.text 
            x="30" 
            y="40" 
            textAnchor="middle" 
            fill="white" 
            fontFamily="Comic Sans MS, cursive" 
            fontWeight="bold" 
            fontSize="18"
            animate={{ 
              y: [40, 30, 40],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          >
            1
          </motion.text>
          
          <motion.text 
            x="50" 
            y="40" 
            textAnchor="middle" 
            fill="white" 
            fontFamily="Comic Sans MS, cursive" 
            fontWeight="bold" 
            fontSize="18"
            animate={{ 
              y: [40, 25, 40],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2.2,
              repeat: Infinity,
              delay: 0.3
            }}
          >
            2
          </motion.text>
          
          <motion.text 
            x="70" 
            y="40" 
            textAnchor="middle" 
            fill="white" 
            fontFamily="Comic Sans MS, cursive" 
            fontWeight="bold" 
            fontSize="18"
            animate={{ 
              y: [40, 30, 40],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 1.8,
              repeat: Infinity,
              delay: 0.6
            }}
          >
            3
          </motion.text>
        </>
      )}
      
      {/* Static elements */}
      <text x="30" y="40" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">1</text>
      <text x="50" y="40" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">2</text>
      <text x="70" y="40" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">3</text>
      
      <text x="40" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="24">+</text>
      <text x="60" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="24">=</text>
      
      {/* Bottom line */}
      <rect x="25" y="75" width="50" height="5" rx="2.5" fill="white" />
    </motion.svg>
  );
};

export const ScienceIcon = ({ interactive = false, size = 100 }) => {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      whileHover={interactive ? { scale: 1.1, rotate: -5 } : {}}
      whileTap={interactive ? { scale: 0.9 } : {}}
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="#10B981" />
      
      {/* Beaker */}
      <path d="M35,25 L35,65 C35,75 65,75 65,65 L65,25 Z" fill="white" stroke="#10B981" strokeWidth="2" />
      <path d="M30,25 L70,25" stroke="white" strokeWidth="4" strokeLinecap="round" />
      
      {/* Bubble animations */}
      {interactive && (
        <>
          <motion.circle 
            cx="45" 
            cy="55" 
            r="5" 
            fill="#10B981"
            animate={{ 
              y: [-20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          
          <motion.circle 
            cx="55" 
            cy="50" 
            r="3" 
            fill="#10B981"
            animate={{ 
              y: [-15, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.5
            }}
          />
          
          <motion.circle 
            cx="50" 
            cy="60" 
            r="4" 
            fill="#10B981"
            animate={{ 
              y: [-18, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.2,
              repeat: Infinity,
              repeatType: "loop",
              delay: 1
            }}
          />
        </>
      )}
      
      {/* Static bubbles */}
      <circle cx="45" cy="55" r="5" fill="#10B981" />
      <circle cx="55" cy="50" r="3" fill="#10B981" />
      <circle cx="50" cy="60" r="4" fill="#10B981" />
    </motion.svg>
  );
};

export const VocabularyIcon = ({ interactive = false, size = 100 }) => {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      whileHover={interactive ? { scale: 1.1, rotate: 3 } : {}}
      whileTap={interactive ? { scale: 0.9 } : {}}
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="#8B5CF6" />
      
      {/* Book */}
      <rect x="25" y="25" width="50" height="50" rx="2" fill="white" stroke="#8B5CF6" strokeWidth="2" />
      <path d="M50,25 L50,75" stroke="#8B5CF6" strokeWidth="2" />
      <path d="M25,25 C35,35 35,35 50,25" fill="#8B5CF6" opacity="0.3" />
      <path d="M50,25 C65,35 65,35 75,25" fill="#8B5CF6" opacity="0.3" />
      
      {/* Text lines */}
      <rect x="30" y="35" width="15" height="3" rx="1.5" fill="#8B5CF6" />
      <rect x="30" y="45" width="12" height="3" rx="1.5" fill="#8B5CF6" />
      <rect x="30" y="55" width="15" height="3" rx="1.5" fill="#8B5CF6" />
      <rect x="30" y="65" width="10" height="3" rx="1.5" fill="#8B5CF6" />
      
      <rect x="55" y="35" width="15" height="3" rx="1.5" fill="#8B5CF6" />
      <rect x="55" y="45" width="12" height="3" rx="1.5" fill="#8B5CF6" />
      <rect x="55" y="55" width="15" height="3" rx="1.5" fill="#8B5CF6" />
      <rect x="55" y="65" width="10" height="3" rx="1.5" fill="#8B5CF6" />
      
      {/* Page flip animation */}
      {interactive && (
        <motion.path 
          d="M50,25 C65,35 65,35 75,25 L75,75 C65,65 65,65 50,75"
          fill="#8B5CF6" 
          opacity="0.2"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      )}
    </motion.svg>
  );
};

export const CountingIcon = ({ interactive = false, size = 100 }) => {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      whileHover={interactive ? { scale: 1.1 } : {}}
      whileTap={interactive ? { scale: 0.9 } : {}}
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="#3B82F6" opacity="0.9" />
      
      {/* Number circles */}
      <circle cx="25" cy="50" r="15" fill="white" />
      <circle cx="50" cy="50" r="15" fill="white" />
      <circle cx="75" cy="50" r="15" fill="white" />
      
      {/* Numbers */}
      <text x="25" y="55" textAnchor="middle" fill="#3B82F6" fontWeight="bold" fontSize="16">1</text>
      <text x="50" y="55" textAnchor="middle" fill="#3B82F6" fontWeight="bold" fontSize="16">2</text>
      <text x="75" y="55" textAnchor="middle" fill="#3B82F6" fontWeight="bold" fontSize="16">3</text>
      
      {/* Animation for interactive state */}
      {interactive && (
        <>
          <motion.circle 
            cx="25" 
            cy="50" 
            r="15" 
            fill="white" 
            opacity="0.7"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
          />
          <motion.circle 
            cx="50" 
            cy="50" 
            r="15" 
            fill="white" 
            opacity="0.7"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle 
            cx="75" 
            cy="50" 
            r="15" 
            fill="white" 
            opacity="0.7"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
          />
        </>
      )}
    </motion.svg>
  );
};

export const AnimalsIcon = ({ interactive = false, size = 100 }) => {
  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      whileHover={interactive ? { scale: 1.1 } : {}}
      whileTap={interactive ? { scale: 0.9 } : {}}
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="#F472B6" />
      
      {/* Cat face */}
      <circle cx="50" cy="50" r="30" fill="white" />
      
      {/* Ears */}
      <path d="M30,30 L40,45 L20,45 Z" fill="#F472B6" />
      <path d="M70,30 L80,45 L60,45 Z" fill="#F472B6" />
      
      {/* Eyes */}
      <circle cx="40" cy="45" r="5" fill="#F472B6" />
      <circle cx="60" cy="45" r="5" fill="#F472B6" />
      <circle cx="40" cy="45" r="2" fill="black" />
      <circle cx="60" cy="45" r="2" fill="black" />
      
      {/* Nose and mouth */}
      <path d="M50,55 L45,60 L55,60 Z" fill="#F472B6" />
      <path d="M50,60 Q40,70 30,65" fill="none" stroke="black" strokeWidth="1.5" />
      <path d="M50,60 Q60,70 70,65" fill="none" stroke="black" strokeWidth="1.5" />
      
      {/* Whiskers */}
      <path d="M45,58 L30,55" fill="none" stroke="black" strokeWidth="1" />
      <path d="M45,60 L30,60" fill="none" stroke="black" strokeWidth="1" />
      <path d="M45,62 L30,65" fill="none" stroke="black" strokeWidth="1" />
      
      <path d="M55,58 L70,55" fill="none" stroke="black" strokeWidth="1" />
      <path d="M55,60 L70,60" fill="none" stroke="black" strokeWidth="1" />
      <path d="M55,62 L70,65" fill="none" stroke="black" strokeWidth="1" />
      
      {/* Animation for interactive state */}
      {interactive && (
        <>
          <motion.circle 
            cx="40" 
            cy="45" 
            r="2" 
            fill="black"
            animate={{ scaleY: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.circle 
            cx="60" 
            cy="45" 
            r="2" 
            fill="black"
            animate={{ scaleY: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </>
      )}
    </motion.svg>
  );
};

// Export all icons as a named object for easy import
export const SubjectIcons = {
  math: MathIcon,
  science: ScienceIcon,
  vocabulary: VocabularyIcon,
  counting: CountingIcon,
  animals: AnimalsIcon
}; 