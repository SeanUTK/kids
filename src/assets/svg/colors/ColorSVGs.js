import React from 'react';
import { motion } from 'framer-motion';

// Red SVG
export const RedSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#FF0000" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">Red</text>
  </motion.svg>
);

// Blue SVG
export const BlueSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#0000FF" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">Blue</text>
  </motion.svg>
);

// Green SVG
export const GreenSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#008000" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">Green</text>
  </motion.svg>
);

// Yellow SVG
export const YellowSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#FFFF00" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#000000">Yellow</text>
  </motion.svg>
);

// Orange SVG
export const OrangeSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#FFA500" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">Orange</text>
  </motion.svg>
);

// Purple SVG
export const PurpleSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#800080" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">Purple</text>
  </motion.svg>
);

// Pink SVG
export const PinkSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#FFC0CB" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#000000">Pink</text>
  </motion.svg>
);

// Brown SVG
export const BrownSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#A52A2A" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">Brown</text>
  </motion.svg>
);

// Black SVG
export const BlackSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#000000" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">Black</text>
  </motion.svg>
);

// White SVG
export const WhiteSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#FFFFFF" stroke="#CCCCCC" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#000000">White</text>
  </motion.svg>
);

// Gray SVG
export const GraySVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    <circle cx="50" cy="50" r="40" fill="#808080" />
    <text x="50" y="55" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">Gray</text>
  </motion.svg>
);

export const ColorSVGs = {
  Red: RedSVG,
  Blue: BlueSVG,
  Green: GreenSVG,
  Yellow: YellowSVG,
  Orange: OrangeSVG,
  Purple: PurpleSVG,
  Pink: PinkSVG,
  Brown: BrownSVG,
  Black: BlackSVG,
  White: WhiteSVG,
  Gray: GraySVG
}; 