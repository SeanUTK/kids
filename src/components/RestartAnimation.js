import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

const RestartAnimation = ({ isVisible, onComplete }) => {
  if (!isVisible) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1000,
      }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.5, rotate: 0 }}
        animate={{ 
          scale: [0.5, 1, 1, 0.5],
          rotate: [0, 360, 720, 1080],
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.3, 0.7, 1],
          ease: "easeInOut"
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}
      >
        <RotateCcw size={100} color="#FFFFFF" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            color: '#FFFFFF',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Restarting Application...
        </motion.div>
        
        <motion.div
          style={{
            width: '200px',
            height: '6px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '3px',
            overflow: 'hidden',
            marginTop: '1rem'
          }}
        >
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: 2,
              ease: "linear"
            }}
            style={{
              height: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '3px'
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RestartAnimation; 