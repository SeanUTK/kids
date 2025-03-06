import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const CharacterMascot = ({ size = 150, position = 'bottom-right', animation = null }) => {
  const { characterAnimation: contextAnimation } = useAppContext();
  
  // Use the provided animation or fall back to the context animation
  const characterAnimation = animation || contextAnimation;
  
  // Position styles based on placement
  const positionStyles = {
    'bottom-right': { bottom: '20px', right: '20px' },
    'bottom-left': { bottom: '20px', left: '20px' },
    'top-right': { top: '20px', right: '20px' },
    'top-left': { top: '20px', left: '20px' },
    'center': { bottom: '50%', right: '50%', transform: 'translate(50%, 50%)' }
  };
  
  // Animation variants based on character state
  const characterVariants = {
    idle: {
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }
    },
    excited: {
      rotate: [-5, 5, -5, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.8
      }
    },
    curious: {
      rotate: [0, 10, 0],
      x: [0, 10, 0],
      transition: {
        duration: 0.8
      }
    },
    celebrating: {
      y: [0, -30, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    },
    happy: {
      rotate: [-5, 5, -5, 5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.8,
        repeat: 2
      }
    },
    encouraging: {
      y: [0, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.6,
        repeat: 2
      }
    },
    waving: {
      rotate: [0, 5, 0, 5, 0],
      transition: {
        duration: 1
      }
    }
  };
  
  // Color schemes
  const colors = {
    body: "#5B8CFB", // Main blue color for the body
    face: "#83B1FF", // Lighter blue for the face
    ears: "#4A71CB", // Darker blue for ears
    cheeks: "#FF9999", // Pink for cheeks
    hat: "#FFC857", // Yellow for hat
    hatDetail: "#FF6B6B", // Red for hat details
    eyes: "#333333", // Dark for eyes
    smile: "#333333", // Dark for smile
    nose: "#FF6B6B", // Red for nose
    shadow: "rgba(0, 0, 0, 0.2)" // Shadow
  };
  
  // Expressions based on animation state
  const getExpression = () => {
    switch(characterAnimation) {
      case 'celebrating':
        return (
          <>
            {/* Celebrating - big smile with starry eyes */}
            <ellipse cx="35" cy="40" rx="5" ry="7" fill={colors.eyes} />
            <ellipse cx="65" cy="40" rx="5" ry="7" fill={colors.eyes} />
            <path d="M35,65 Q50,80 65,65" stroke={colors.smile} fill="none" strokeWidth="3" strokeLinecap="round" />
            <path d="M32,40 L38,40" stroke="white" strokeWidth="2" />
            <path d="M62,40 L68,40" stroke="white" strokeWidth="2" />
            <circle cx="35" cy="40" r="1.5" fill="white" />
            <circle cx="65" cy="40" r="1.5" fill="white" />
            <circle cx="37" cy="57" r="8" fill={colors.cheeks} opacity="0.6" />
            <circle cx="63" cy="57" r="8" fill={colors.cheeks} opacity="0.6" />
          </>
        );
      case 'happy':
        return (
          <>
            {/* Happy - closed eyes with smile */}
            <path d="M30,40 Q35,35 40,40" stroke={colors.eyes} fill="none" strokeWidth="3" strokeLinecap="round" />
            <path d="M60,40 Q65,35 70,40" stroke={colors.eyes} fill="none" strokeWidth="3" strokeLinecap="round" />
            <path d="M35,60 Q50,70 65,60" stroke={colors.smile} fill="none" strokeWidth="3" strokeLinecap="round" />
            <circle cx="37" cy="52" r="7" fill={colors.cheeks} opacity="0.6" />
            <circle cx="63" cy="52" r="7" fill={colors.cheeks} opacity="0.6" />
          </>
        );
      case 'encouraging':
        return (
          <>
            {/* Encouraging - determined look */}
            <circle cx="35" cy="40" r="5" fill={colors.eyes} />
            <circle cx="65" cy="40" r="5" fill={colors.eyes} />
            <path d="M35,60 Q50,65 65,60" stroke={colors.smile} fill="none" strokeWidth="3" strokeLinecap="round" />
            <path d="M30,35 L40,32" stroke={colors.eyes} strokeWidth="2" strokeLinecap="round" />
            <path d="M60,32 L70,35" stroke={colors.eyes} strokeWidth="2" strokeLinecap="round" />
            <circle cx="35" cy="40" r="1.5" fill="white" />
            <circle cx="65" cy="40" r="1.5" fill="white" />
          </>
        );
      case 'curious':
        return (
          <>
            {/* Curious - raised eyebrow and slight smile */}
            <circle cx="35" cy="40" r="5" fill={colors.eyes} />
            <circle cx="65" cy="40" r="5" fill={colors.eyes} />
            <path d="M40,60 Q50,63 60,60" stroke={colors.smile} fill="none" strokeWidth="3" strokeLinecap="round" />
            <path d="M30,32 L40,36" stroke={colors.eyes} strokeWidth="2" strokeLinecap="round" />
            <circle cx="35" cy="40" r="1.5" fill="white" />
            <circle cx="65" cy="40" r="1.5" fill="white" />
          </>
        );
      case 'excited':
        return (
          <>
            {/* Excited - wide eyes and open mouth */}
            <circle cx="35" cy="40" r="6" fill={colors.eyes} />
            <circle cx="65" cy="40" r="6" fill={colors.eyes} />
            <ellipse cx="50" cy="65" rx="10" ry="8" fill={colors.smile} />
            <ellipse cx="50" cy="65" rx="6" ry="4" fill="#FF6B6B" />
            <circle cx="35" cy="40" r="2" fill="white" />
            <circle cx="65" cy="40" r="2" fill="white" />
          </>
        );
      case 'waving':
        return (
          <>
            {/* Waving - friendly expression */}
            <circle cx="35" cy="40" r="5" fill={colors.eyes} />
            <circle cx="65" cy="40" r="5" fill={colors.eyes} />
            <path d="M35,60 Q50,70 65,60" stroke={colors.smile} fill="none" strokeWidth="3" strokeLinecap="round" />
            <circle cx="35" cy="40" r="1.5" fill="white" />
            <circle cx="65" cy="40" r="1.5" fill="white" />
            {/* Waving hand */}
            <motion.g
              animate={{
                rotate: [0, 20, 0, 20, 0],
              }}
              transition={{
                duration: 1,
                repeat: 3,
              }}
              style={{ originX: 0.5, originY: 0 }}
              transform="translate(85, 55)"
            >
              <circle cx="0" cy="10" r="10" fill={colors.face} />
              <path d="M-6,10 L6,10" stroke={colors.eyes} strokeWidth="1.5" />
            </motion.g>
          </>
        );
      default: // idle
        return (
          <>
            {/* Idle - normal expression */}
            <circle cx="35" cy="40" r="5" fill={colors.eyes} />
            <circle cx="65" cy="40" r="5" fill={colors.eyes} />
            <path d="M40,60 Q50,67 60,60" stroke={colors.smile} fill="none" strokeWidth="3" strokeLinecap="round" />
            <circle cx="35" cy="40" r="1.5" fill="white" />
            <circle cx="65" cy="40" r="1.5" fill="white" />
            <circle cx="37" cy="50" r="6" fill={colors.cheeks} opacity="0.4" />
            <circle cx="63" cy="50" r="6" fill={colors.cheeks} opacity="0.4" />
          </>
        );
    }
  };
  
  return (
    <motion.div
      className="character-mascot"
      style={{
        position: 'fixed',
        zIndex: 1000,
        ...positionStyles[position]
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={characterAnimation}
        variants={characterVariants}
      >
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 100 120"
          style={{ 
            filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25))',
            overflow: 'visible'
          }}
        >
          {/* Shadow */}
          <ellipse
            cx="50" 
            cy="115" 
            rx="30" 
            ry="5" 
            fill={colors.shadow}
            opacity="0.5"
          />
          
          {/* Ears */}
          <circle cx="20" cy="40" r="10" fill={colors.ears} />
          <circle cx="80" cy="40" r="10" fill={colors.ears} />
          <circle cx="20" cy="40" r="5" fill={colors.face} opacity="0.6" />
          <circle cx="80" cy="40" r="5" fill={colors.face} opacity="0.6" />
          
          {/* Body - Main circle with gradient */}
          <circle cx="50" cy="75" r="25" fill={colors.body} />
          
          {/* Head */}
          <circle cx="50" cy="50" r="35" fill={colors.body} />
          
          {/* Face area - lighter color */}
          <ellipse cx="50" cy="50" rx="28" ry="30" fill={colors.face} />
          
          {/* Facial features - dynamic based on state */}
          {getExpression()}
          
          {/* Nose */}
          <circle cx="50" cy="50" r="5" fill={colors.nose} />
          
          {/* Arms */}
          <path d="M20,70 Q10,85 15,100" stroke={colors.body} strokeWidth="12" strokeLinecap="round" />
          <path d="M80,70 Q90,85 85,100" stroke={colors.body} strokeWidth="12" strokeLinecap="round" />
          
          {/* Legs */}
          <path d="M35,95 Q30,110 25,115" stroke={colors.body} strokeWidth="12" strokeLinecap="round" />
          <path d="M65,95 Q70,110 75,115" stroke={colors.body} strokeWidth="12" strokeLinecap="round" />
          
          {/* Hat */}
          <path 
            d="M20,30 Q50,5 80,30 L75,40 Q50,20 25,40 Z" 
            fill={colors.hat} 
          />
          <ellipse 
            cx="50" 
            cy="15" 
            rx="5" 
            ry="5" 
            fill={colors.hatDetail}
          />
          <path 
            d="M30,30 Q50,15 70,30" 
            stroke={colors.hatDetail} 
            strokeWidth="3" 
            fill="none"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default CharacterMascot; 