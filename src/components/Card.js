import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  onClick, 
  color = 'blue', 
  elevation = 'medium', 
  interactive = true,
  padding = 'medium',
  fullWidth = false,
  style = {}
}) => {
  // Color variants
  const colors = {
    blue: {
      bg: '#EBF8FF',
      border: '#3B82F6',
      hover: '#DBEAFE'
    },
    green: {
      bg: '#ECFDF5',
      border: '#10B981',
      hover: '#D1FAE5'
    },
    purple: {
      bg: '#F5F3FF',
      border: '#8B5CF6',
      hover: '#EDE9FE'
    },
    pink: {
      bg: '#FDF2F8',
      border: '#EC4899',
      hover: '#FCE7F3'
    },
    yellow: {
      bg: '#FFFBEB',
      border: '#F59E0B',
      hover: '#FEF3C7'
    },
    red: {
      bg: '#FEF2F2',
      border: '#EF4444',
      hover: '#FEE2E2'
    },
    white: {
      bg: '#FFFFFF',
      border: '#E5E7EB',
      hover: '#F9FAFB'
    }
  };
  
  // Elevation variants
  const elevations = {
    low: '0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)',
    high: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)'
  };
  
  // Padding variants
  const paddings = {
    none: '0',
    small: '12px',
    medium: '20px',
    large: '32px'
  };
  
  // Get selected variants with fallbacks
  const selectedColor = colors[color] || colors.blue;
  const selectedElevation = elevations[elevation] || elevations.medium;
  const selectedPadding = paddings[padding] || paddings.medium;
  
  return (
    <motion.div
      onClick={interactive ? onClick : undefined}
      whileHover={interactive ? { 
        scale: 1.02, 
        boxShadow: elevations.high,
        backgroundColor: selectedColor.hover
      } : {}}
      whileTap={interactive ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: selectedColor.bg,
        border: `3px solid ${selectedColor.border}`,
        borderRadius: '20px',
        padding: selectedPadding,
        boxShadow: selectedElevation,
        cursor: interactive ? 'pointer' : 'default',
        transition: 'background-color 0.2s ease',
        width: fullWidth ? '100%' : 'auto',
        ...style
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card; 