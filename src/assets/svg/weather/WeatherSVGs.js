import React from 'react';
import { motion } from 'framer-motion';

// Sunny SVG
export const SunnySVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Sun circle */}
    <circle cx="50" cy="50" r="25" fill="#FDB813" />
    
    {/* Sun rays */}
    <line x1="50" y1="15" x2="50" y2="5" stroke="#FDB813" strokeWidth="4" strokeLinecap="round" />
    <line x1="50" y1="95" x2="50" y2="85" stroke="#FDB813" strokeWidth="4" strokeLinecap="round" />
    <line x1="15" y1="50" x2="5" y2="50" stroke="#FDB813" strokeWidth="4" strokeLinecap="round" />
    <line x1="95" y1="50" x2="85" y2="50" stroke="#FDB813" strokeWidth="4" strokeLinecap="round" />
    
    <line x1="26" y1="26" x2="19" y2="19" stroke="#FDB813" strokeWidth="4" strokeLinecap="round" />
    <line x1="74" y1="74" x2="81" y2="81" stroke="#FDB813" strokeWidth="4" strokeLinecap="round" />
    <line x1="26" y1="74" x2="19" y2="81" stroke="#FDB813" strokeWidth="4" strokeLinecap="round" />
    <line x1="74" y1="26" x2="81" y2="19" stroke="#FDB813" strokeWidth="4" strokeLinecap="round" />
  </motion.svg>
);

// Rainy SVG
export const RainySVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Cloud */}
    <path d="M 25,50 Q 20,35 30,30 Q 40,20 50,25 Q 65,20 70,30 Q 80,25 80,40 Q 85,50 75,55 Q 65,60 55,55 Q 40,65 30,55 Q 20,55 25,50" fill="#A6AAAD" />
    
    {/* Rain drops */}
    <path d="M 30,60 L 25,75" stroke="#4D9DE0" strokeWidth="3" strokeLinecap="round" />
    <path d="M 40,65 L 35,80" stroke="#4D9DE0" strokeWidth="3" strokeLinecap="round" />
    <path d="M 50,63 L 45,78" stroke="#4D9DE0" strokeWidth="3" strokeLinecap="round" />
    <path d="M 60,65 L 55,80" stroke="#4D9DE0" strokeWidth="3" strokeLinecap="round" />
    <path d="M 70,60 L 65,75" stroke="#4D9DE0" strokeWidth="3" strokeLinecap="round" />
  </motion.svg>
);

// Cloudy SVG
export const CloudySVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Background cloud */}
    <path d="M 15,55 Q 10,40 20,35 Q 30,25 40,30 Q 55,20 65,30 Q 75,25 75,40 Q 85,45 80,55 Q 70,65 55,60 Q 40,70 25,60 Q 15,60 15,55" fill="#C4C4C4" />
    
    {/* Foreground cloud */}
    <path d="M 25,50 Q 20,35 30,30 Q 40,20 50,25 Q 65,20 70,30 Q 80,25 80,40 Q 85,50 75,55 Q 65,60 55,55 Q 40,65 30,55 Q 20,55 25,50" fill="#EFEFEF" />
  </motion.svg>
);

// Snowy SVG
export const SnowySVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Cloud */}
    <path d="M 25,50 Q 20,35 30,30 Q 40,20 50,25 Q 65,20 70,30 Q 80,25 80,40 Q 85,50 75,55 Q 65,60 55,55 Q 40,65 30,55 Q 20,55 25,50" fill="#E0E0E0" />
    
    {/* Snow flakes */}
    <g fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="0.5">
      <circle cx="30" cy="65" r="3" />
      <circle cx="40" cy="75" r="3" />
      <circle cx="50" cy="65" r="3" />
      <circle cx="60" cy="75" r="3" />
      <circle cx="70" cy="65" r="3" />
      <circle cx="35" cy="85" r="3" />
      <circle cx="55" cy="85" r="3" />
    </g>
  </motion.svg>
);

// Windy SVG
export const WindySVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Wind lines */}
    <path d="M 10,30 Q 30,20 50,30 Q 70,40 90,30" fill="none" stroke="#A6AAAD" strokeWidth="4" strokeLinecap="round" />
    <path d="M 20,50 Q 40,40 60,50 Q 80,60 95,50" fill="none" stroke="#A6AAAD" strokeWidth="4" strokeLinecap="round" />
    <path d="M 5,70 Q 25,60 45,70 Q 65,80 85,70" fill="none" stroke="#A6AAAD" strokeWidth="4" strokeLinecap="round" />
    
    {/* Small cloud */}
    <path d="M 75,30 Q 80,20 90,25 Q 95,20 95,30 Q 100,35 90,35 Q 80,40 75,30" fill="#EFEFEF" />
    <path d="M 15,45 Q 20,35 30,40 Q 35,35 35,45 Q 40,50 30,50 Q 20,55 15,45" fill="#EFEFEF" />
  </motion.svg>
);

// Foggy SVG
export const FoggySVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Fog lines */}
    <path d="M 10,30 Q 25,25 40,30 Q 55,35 70,30 Q 85,25 90,30" fill="none" stroke="#D3D3D3" strokeWidth="4" strokeLinecap="round" />
    <path d="M 5,45 Q 20,40 35,45 Q 50,50 65,45 Q 80,40 95,45" fill="none" stroke="#D3D3D3" strokeWidth="4" strokeLinecap="round" />
    <path d="M 10,60 Q 25,55 40,60 Q 55,65 70,60 Q 85,55 90,60" fill="none" stroke="#D3D3D3" strokeWidth="4" strokeLinecap="round" />
    <path d="M 5,75 Q 20,70 35,75 Q 50,80 65,75 Q 80,70 95,75" fill="none" stroke="#D3D3D3" strokeWidth="4" strokeLinecap="round" />
  </motion.svg>
);

// Stormy SVG
export const StormySVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Dark cloud */}
    <path d="M 25,50 Q 20,35 30,30 Q 40,20 50,25 Q 65,20 70,30 Q 80,25 80,40 Q 85,50 75,55 Q 65,60 55,55 Q 40,65 30,55 Q 20,55 25,50" fill="#5D6970" />
    
    {/* Lightning bolt */}
    <polygon points="60,55 45,70 55,72 40,90 65,65 55,62 60,55" fill="#FFD700" />
    
    {/* Rain drops */}
    <path d="M 30,60 L 25,70" stroke="#4D9DE0" strokeWidth="3" strokeLinecap="round" />
    <path d="M 35,62 L 30,72" stroke="#4D9DE0" strokeWidth="3" strokeLinecap="round" />
    <path d="M 75,58 L 70,68" stroke="#4D9DE0" strokeWidth="3" strokeLinecap="round" />
    <path d="M 80,60 L 75,70" stroke="#4D9DE0" strokeWidth="3" strokeLinecap="round" />
  </motion.svg>
);

// Hail SVG
export const HailSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Cloud */}
    <path d="M 25,50 Q 20,35 30,30 Q 40,20 50,25 Q 65,20 70,30 Q 80,25 80,40 Q 85,50 75,55 Q 65,60 55,55 Q 40,65 30,55 Q 20,55 25,50" fill="#7D7D7D" />
    
    {/* Hail stones */}
    <circle cx="30" cy="65" r="4" fill="#FFFFFF" stroke="#D3D3D3" />
    <circle cx="45" cy="70" r="5" fill="#FFFFFF" stroke="#D3D3D3" />
    <circle cx="60" cy="65" r="4" fill="#FFFFFF" stroke="#D3D3D3" />
    <circle cx="75" cy="70" r="5" fill="#FFFFFF" stroke="#D3D3D3" />
    <circle cx="35" cy="80" r="5" fill="#FFFFFF" stroke="#D3D3D3" />
    <circle cx="55" cy="85" r="4" fill="#FFFFFF" stroke="#D3D3D3" />
    <circle cx="70" cy="85" r="5" fill="#FFFFFF" stroke="#D3D3D3" />
  </motion.svg>
);

export const WeatherSVGs = {
  Sunny: SunnySVG,
  Rainy: RainySVG,
  Cloudy: CloudySVG,
  Snowy: SnowySVG,
  Windy: WindySVG,
  Foggy: FoggySVG,
  Stormy: StormySVG,
  Hail: HailSVG
}; 