import React from 'react';
import { motion } from 'framer-motion';

const ChildButton = ({ 
  onClick, 
  children, 
  color = 'primary', 
  size = 'medium', 
  icon, 
  fullWidth = false,
  disabled = false 
}) => {
  // Color variants for buttons
  const colors = {
    primary: {
      bg: '#4F46E5',
      hover: '#4338CA',
      text: 'white',
      shadow: 'rgba(79, 70, 229, 0.4)'
    },
    secondary: {
      bg: '#10B981',
      hover: '#059669',
      text: 'white',
      shadow: 'rgba(16, 185, 129, 0.4)'
    },
    success: {
      bg: '#10B981',
      hover: '#059669',
      text: 'white',
      shadow: 'rgba(16, 185, 129, 0.4)'
    },
    danger: {
      bg: '#EF4444',
      hover: '#DC2626',
      text: 'white',
      shadow: 'rgba(239, 68, 68, 0.4)'
    },
    warning: {
      bg: '#F59E0B',
      hover: '#D97706',
      text: 'white',
      shadow: 'rgba(245, 158, 11, 0.4)'
    },
    purple: {
      bg: '#8B5CF6',
      hover: '#7C3AED',
      text: 'white',
      shadow: 'rgba(139, 92, 246, 0.4)'
    },
    pink: {
      bg: '#EC4899',
      hover: '#DB2777',
      text: 'white',
      shadow: 'rgba(236, 72, 153, 0.4)'
    }
  };

  // Size variants
  const sizes = {
    small: {
      padding: '8px 16px',
      fontSize: '14px',
      borderRadius: '12px'
    },
    medium: {
      padding: '12px 24px',
      fontSize: '16px',
      borderRadius: '16px'
    },
    large: {
      padding: '16px 32px',
      fontSize: '18px',
      borderRadius: '20px'
    }
  };

  // Make sure we have a valid color by falling back to primary if the color isn't found
  const selectedColor = colors[color] || colors.primary;
  // Make sure we have a valid size by falling back to medium if the size isn't found
  const selectedSize = sizes[size] || sizes.medium;

  return (
    <motion.button
      onClick={disabled ? null : onClick}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      style={{
        backgroundColor: disabled ? '#CBD5E1' : selectedColor.bg,
        color: disabled ? '#64748B' : selectedColor.text,
        padding: selectedSize.padding,
        fontSize: selectedSize.fontSize,
        borderRadius: selectedSize.borderRadius,
        border: 'none',
        boxShadow: `0 6px 0 0 ${disabled ? '#94A3B8' : selectedColor.hover}, 0 10px 20px ${disabled ? 'rgba(148, 163, 184, 0.4)' : selectedColor.shadow}`,
        cursor: disabled ? 'default' : 'pointer',
        transition: 'all 0.2s ease',
        fontWeight: 'bold',
        width: fullWidth ? '100%' : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Nunito', sans-serif",
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        marginBottom: '6px' // Space for the shadow
      }}
      animate={{ 
        y: [0, -2, 0], 
        transition: { repeat: Infinity, duration: 3 } 
      }}
    >
      {/* Bubbles animation in the background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', borderRadius: 'inherit' }}>
        {!disabled && Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 2 + 1,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Icon and text content */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', position: 'relative', zIndex: 1 }}>
        {icon && <span>{icon}</span>}
        {children}
      </div>
    </motion.button>
  );
};

export default ChildButton; 