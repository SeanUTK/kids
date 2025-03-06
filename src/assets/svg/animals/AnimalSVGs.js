import React from 'react';
import { motion } from 'framer-motion';

// Cat SVG
export const CatSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Cat head */}
    <circle cx="50" cy="50" r="35" fill="#F9C846" />
    
    {/* Cat ears */}
    <polygon points="25,30 35,45 15,45" fill="#F9C846" />
    <polygon points="75,30 85,45 65,45" fill="#F9C846" />
    <polygon points="28,32 35,43 20,43" fill="#F08080" />
    <polygon points="72,32 80,43 64,43" fill="#F08080" />
    
    {/* Cat face */}
    <circle cx="35" cy="40" r="5" fill="#4B4B4B" />
    <circle cx="65" cy="40" r="5" fill="#4B4B4B" />
    <polygon points="50,50 45,60 55,60" fill="#FFC0CB" />
    <path d="M 35,65 Q 50,75 65,65" stroke="#4B4B4B" strokeWidth="2" fill="none" />
    
    {/* Cat whiskers */}
    <line x1="20" y1="55" x2="40" y2="52" stroke="#4B4B4B" strokeWidth="1" />
    <line x1="20" y1="60" x2="40" y2="58" stroke="#4B4B4B" strokeWidth="1" />
    <line x1="80" y1="55" x2="60" y2="52" stroke="#4B4B4B" strokeWidth="1" />
    <line x1="80" y1="60" x2="60" y2="58" stroke="#4B4B4B" strokeWidth="1" />
  </motion.svg>
);

// Dog SVG
export const DogSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Dog head */}
    <circle cx="50" cy="50" r="35" fill="#B87333" />
    
    {/* Dog ears */}
    <ellipse cx="25" cy="30" rx="15" ry="20" fill="#B87333" />
    <ellipse cx="75" cy="30" rx="15" ry="20" fill="#B87333" />
    
    {/* Dog face */}
    <circle cx="35" cy="40" r="5" fill="#4B4B4B" />
    <circle cx="65" cy="40" r="5" fill="#4B4B4B" />
    <ellipse cx="50" cy="65" rx="15" ry="10" fill="#F2D2BD" />
    <circle cx="50" cy="60" r="5" fill="#4B4B4B" />
    <path d="M 40,70 Q 50,75 60,70" stroke="#4B4B4B" strokeWidth="2" fill="none" />
  </motion.svg>
);

// Fish SVG
export const FishSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Fish body */}
    <ellipse cx="50" cy="50" rx="30" ry="20" fill="#6495ED" />
    
    {/* Fish tail */}
    <polygon points="20,50 5,65 5,35" fill="#6495ED" />
    
    {/* Fish fins */}
    <polygon points="50,30 60,15 40,15" fill="#6495ED" />
    <polygon points="50,70 60,85 40,85" fill="#6495ED" />
    
    {/* Fish eye */}
    <circle cx="75" cy="45" r="5" fill="white" />
    <circle cx="75" cy="45" r="2" fill="#4B4B4B" />
    
    {/* Fish gills */}
    <path d="M 65,45 Q 65,50 65,55" stroke="#4169E1" strokeWidth="2" fill="none" />
  </motion.svg>
);

// Bird SVG
export const BirdSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Bird body */}
    <ellipse cx="50" cy="60" rx="25" ry="20" fill="#FF6347" />
    
    {/* Bird head */}
    <circle cx="80" cy="40" r="15" fill="#FF6347" />
    
    {/* Bird beak */}
    <polygon points="90,40 105,35 90,45" fill="#FFD700" />
    
    {/* Bird eye */}
    <circle cx="85" cy="35" r="3" fill="#4B4B4B" />
    
    {/* Bird wings */}
    <path d="M 50,50 Q 40,30 20,40" stroke="#FF6347" strokeWidth="10" fill="none" />
    
    {/* Bird tail */}
    <polygon points="25,60 10,50 10,70" fill="#FF6347" />
  </motion.svg>
);

// Rabbit SVG
export const RabbitSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Rabbit body */}
    <ellipse cx="50" cy="65" rx="25" ry="20" fill="#E0E0E0" />
    
    {/* Rabbit head */}
    <circle cx="50" cy="35" r="20" fill="#E0E0E0" />
    
    {/* Rabbit ears */}
    <ellipse cx="40" cy="10" rx="5" ry="15" fill="#E0E0E0" />
    <ellipse cx="60" cy="10" rx="5" ry="15" fill="#E0E0E0" />
    <ellipse cx="40" cy="12" rx="3" ry="10" fill="#FFC0CB" />
    <ellipse cx="60" cy="12" rx="3" ry="10" fill="#FFC0CB" />
    
    {/* Rabbit face */}
    <circle cx="42" cy="30" r="3" fill="#4B4B4B" />
    <circle cx="58" cy="30" r="3" fill="#4B4B4B" />
    <ellipse cx="50" cy="40" rx="5" ry="3" fill="#FFC0CB" />
    <line x1="50" y1="37" x2="50" y2="42" stroke="#4B4B4B" strokeWidth="1" />
    <path d="M 45,45 Q 50,50 55,45" stroke="#4B4B4B" strokeWidth="1" fill="none" />
  </motion.svg>
);

// Cow SVG
export const CowSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Cow body */}
    <ellipse cx="50" cy="60" rx="30" ry="25" fill="white" />
    
    {/* Cow head */}
    <circle cx="30" cy="35" r="20" fill="white" />
    
    {/* Cow spots */}
    <circle cx="40" cy="65" r="8" fill="black" />
    <circle cx="65" cy="50" r="10" fill="black" />
    <circle cx="30" cy="45" r="5" fill="black" />
    
    {/* Cow ears */}
    <ellipse cx="15" cy="25" rx="8" ry="10" fill="white" />
    <ellipse cx="45" cy="25" rx="8" ry="10" fill="white" />
    
    {/* Cow face */}
    <ellipse cx="20" cy="30" r="3" fill="black" />
    <ellipse cx="40" cy="30" r="3" fill="black" />
    <ellipse cx="30" cy="45" rx="10" ry="5" fill="#FFC0CB" />
    <ellipse cx="30" cy="50" rx="3" ry="2" fill="#4B4B4B" />
    <ellipse cx="30" cy="55" rx="3" ry="2" fill="#4B4B4B" />
  </motion.svg>
);

// Pig SVG
export const PigSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Pig body */}
    <ellipse cx="50" cy="60" rx="30" ry="25" fill="#FFC0CB" />
    
    {/* Pig head */}
    <circle cx="30" cy="40" r="20" fill="#FFC0CB" />
    
    {/* Pig snout */}
    <ellipse cx="20" cy="45" rx="10" ry="8" fill="#FFDBEF" />
    <circle cx="17" cy="43" r="2" fill="#4B4B4B" />
    <circle cx="23" cy="43" r="2" fill="#4B4B4B" />
    
    {/* Pig eyes */}
    <ellipse cx="30" cy="30" r="3" fill="#4B4B4B" />
    <ellipse cx="45" cy="30" r="3" fill="#4B4B4B" />
    
    {/* Pig ears */}
    <ellipse cx="15" cy="25" rx="8" ry="10" fill="#FF9BBD" />
    <ellipse cx="45" cy="25" rx="8" ry="10" fill="#FF9BBD" />
    
    {/* Pig tail */}
    <path d="M 80,60 Q 85,55 83,50 Q 81,45 85,40" stroke="#FFC0CB" strokeWidth="3" fill="none" />
  </motion.svg>
);

// Horse SVG
export const HorseSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Horse body */}
    <ellipse cx="50" cy="60" rx="35" ry="25" fill="#8B4513" />
    
    {/* Horse head */}
    <path d="M 25,60 Q 5,40 15,20 Q 25,15 35,25" fill="#8B4513" />
    
    {/* Horse mane */}
    <path d="M 30,25 Q 35,15 40,25 Q 45,15 50,25" stroke="black" strokeWidth="3" fill="none" />
    
    {/* Horse eyes */}
    <ellipse cx="18" cy="25" rx="2" ry="3" fill="#4B4B4B" />
    
    {/* Horse mouth */}
    <path d="M 15,30 Q 10,35 20,35" stroke="#4B4B4B" strokeWidth="1" fill="none" />
    
    {/* Horse tail */}
    <path d="M 85,55 Q 100,50 95,70" stroke="black" strokeWidth="3" fill="none" />
  </motion.svg>
);

// Chicken SVG
export const ChickenSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Chicken body */}
    <ellipse cx="50" cy="65" rx="25" ry="20" fill="white" />
    
    {/* Chicken head */}
    <circle cx="25" cy="40" r="15" fill="white" />
    
    {/* Chicken comb */}
    <polygon points="25,25 20,15 25,20 30,15 25,25" fill="red" />
    
    {/* Chicken beak */}
    <polygon points="10,40 20,35 20,45" fill="#FFD700" />
    
    {/* Chicken eye */}
    <circle cx="25" cy="35" r="2" fill="#4B4B4B" />
    
    {/* Chicken wings */}
    <path d="M 50,55 Q 60,45 70,55" stroke="#DDD" strokeWidth="10" fill="none" />
    
    {/* Chicken legs */}
    <line x1="40" y1="85" x2="40" y2="95" stroke="#FFD700" strokeWidth="3" />
    <line x1="60" y1="85" x2="60" y2="95" stroke="#FFD700" strokeWidth="3" />
  </motion.svg>
);

// Sheep SVG
export const SheepSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Sheep body */}
    <ellipse cx="50" cy="60" rx="30" ry="25" fill="#F5F5F5" />
    <circle cx="40" cy="50" r="7" fill="#F5F5F5" />
    <circle cx="55" cy="45" r="7" fill="#F5F5F5" />
    <circle cx="65" cy="55" r="7" fill="#F5F5F5" />
    <circle cx="45" cy="65" r="7" fill="#F5F5F5" />
    <circle cx="35" cy="60" r="7" fill="#F5F5F5" />
    <circle cx="60" cy="70" r="7" fill="#F5F5F5" />
    
    {/* Sheep head */}
    <circle cx="25" cy="40" r="15" fill="#4B4B4B" />
    
    {/* Sheep ears */}
    <ellipse cx="15" cy="30" rx="5" ry="7" fill="#4B4B4B" />
    <ellipse cx="35" cy="30" rx="5" ry="7" fill="#4B4B4B" />
    
    {/* Sheep face */}
    <ellipse cx="20" cy="35" r="2" fill="white" />
    <ellipse cx="30" cy="35" r="2" fill="white" />
    <ellipse cx="25" cy="45" rx="5" ry="3" fill="#E0E0E0" />
  </motion.svg>
);

// Lion SVG
export const LionSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Lion body */}
    <ellipse cx="50" cy="65" rx="30" ry="20" fill="#C19A6B" />
    
    {/* Lion head */}
    <circle cx="30" cy="40" r="20" fill="#C19A6B" />
    
    {/* Lion mane */}
    <circle cx="30" cy="40" r="25" fill="#CD853F" stroke="#CD853F" strokeWidth="10" />
    
    {/* Lion face */}
    <circle cx="22" cy="35" r="3" fill="#4B4B4B" />
    <circle cx="38" cy="35" r="3" fill="#4B4B4B" />
    <circle cx="30" cy="45" r="3" fill="#8B4513" />
    <path d="M 20,50 Q 30,55 40,50" stroke="#8B4513" strokeWidth="2" fill="none" />
  </motion.svg>
);

// Elephant SVG
export const ElephantSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Elephant body */}
    <ellipse cx="50" cy="65" rx="30" ry="20" fill="#A9A9A9" />
    
    {/* Elephant head */}
    <circle cx="30" cy="45" r="20" fill="#A9A9A9" />
    
    {/* Elephant trunk */}
    <path d="M 15,50 Q 10,60 15,70 Q 20,75 25,70" stroke="#A9A9A9" strokeWidth="8" fill="none" />
    
    {/* Elephant ears */}
    <ellipse cx="40" cy="35" rx="15" ry="20" fill="#A9A9A9" />
    <ellipse cx="42" cy="35" rx="10" ry="15" fill="#C0C0C0" />
    
    {/* Elephant eyes */}
    <circle cx="25" cy="35" r="2" fill="#4B4B4B" />
    
    {/* Elephant tusks */}
    <path d="M 18,55 Q 15,60 18,65" stroke="ivory" strokeWidth="4" fill="none" />
  </motion.svg>
);

// Giraffe SVG
export const GiraffeSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Giraffe body */}
    <ellipse cx="60" cy="75" rx="25" ry="15" fill="#F2CA80" />
    
    {/* Giraffe neck and head */}
    <path d="M 45,70 Q 40,50 35,30 Q 35,15 45,10" stroke="#F2CA80" strokeWidth="12" fill="none" />
    <circle cx="45" cy="10" r="10" fill="#F2CA80" />
    
    {/* Giraffe spots */}
    <circle cx="50" cy="75" r="4" fill="#B5651D" />
    <circle cx="70" cy="70" r="4" fill="#B5651D" />
    <circle cx="65" cy="85" r="3" fill="#B5651D" />
    <circle cx="40" cy="30" r="3" fill="#B5651D" />
    <circle cx="42" cy="50" r="3" fill="#B5651D" />
    <circle cx="45" cy="18" r="3" fill="#B5651D" />
    
    {/* Giraffe eyes */}
    <circle cx="48" cy="7" r="2" fill="#4B4B4B" />
    
    {/* Giraffe ears */}
    <ellipse cx="54" cy="8" rx="3" ry="4" fill="#F2CA80" />
    
    {/* Giraffe ossicones (horn-like structures) */}
    <line x1="40" y1="5" x2="38" y2="0" stroke="#F2CA80" strokeWidth="3" />
    <circle cx="38" cy="0" r="2" fill="#B5651D" />
    <line x1="50" y1="5" x2="52" y2="0" stroke="#F2CA80" strokeWidth="3" />
    <circle cx="52" cy="0" r="2" fill="#B5651D" />
  </motion.svg>
);

// Monkey SVG
export const MonkeySVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Monkey body */}
    <ellipse cx="50" cy="65" rx="20" ry="25" fill="#8B4513" />
    
    {/* Monkey head */}
    <circle cx="50" cy="30" r="20" fill="#8B4513" />
    
    {/* Monkey face */}
    <ellipse cx="50" cy="35" rx="10" ry="12" fill="#E0C8A0" />
    <circle cx="42" cy="25" r="3" fill="#4B4B4B" />
    <circle cx="58" cy="25" r="3" fill="#4B4B4B" />
    <circle cx="50" cy="35" r="2" fill="#4B4B4B" />
    <path d="M 45,42 Q 50,45 55,42" stroke="#4B4B4B" strokeWidth="1" fill="none" />
    
    {/* Monkey ears */}
    <circle cx="30" cy="25" r="7" fill="#8B4513" />
    <circle cx="70" cy="25" r="7" fill="#8B4513" />
    
    {/* Monkey arms */}
    <path d="M 30,55 Q 20,65 15,80" stroke="#8B4513" strokeWidth="5" fill="none" />
    <path d="M 70,55 Q 80,65 85,80" stroke="#8B4513" strokeWidth="5" fill="none" />
    
    {/* Monkey tail */}
    <path d="M 50,90 Q 70,95 80,80 Q 85,70 80,60" stroke="#8B4513" strokeWidth="5" fill="none" />
  </motion.svg>
);

// Tiger SVG
export const TigerSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Tiger body */}
    <ellipse cx="50" cy="65" rx="30" ry="20" fill="#FFA500" />
    
    {/* Tiger stripes on body */}
    <path d="M 30,55 Q 40,60 30,65" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 40,50 Q 50,55 40,60" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 50,55 Q 60,60 50,65" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 60,50 Q 70,55 60,60" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 70,55 Q 80,60 70,65" stroke="black" strokeWidth="2" fill="none" />
    
    {/* Tiger head */}
    <circle cx="30" cy="40" r="20" fill="#FFA500" />
    
    {/* Tiger stripes on head */}
    <path d="M 15,30 Q 25,35 15,40" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 25,25 Q 35,30 25,35" stroke="black" strokeWidth="2" fill="none" />
    <path d="M 35,30 Q 45,35 35,40" stroke="black" strokeWidth="2" fill="none" />
    
    {/* Tiger face */}
    <circle cx="22" cy="35" r="3" fill="#4B4B4B" />
    <circle cx="38" cy="35" r="3" fill="#4B4B4B" />
    <circle cx="30" cy="45" r="3" fill="white" />
    <path d="M 20,50 Q 30,55 40,50" stroke="#4B4B4B" strokeWidth="2" fill="none" />
    
    {/* Tiger ears */}
    <circle cx="15" cy="25" r="5" fill="#FFA500" />
    <circle cx="45" cy="25" r="5" fill="#FFA500" />
  </motion.svg>
);

// Zebra SVG
export const ZebraSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Zebra body */}
    <ellipse cx="50" cy="65" rx="30" ry="20" fill="white" />
    
    {/* Zebra stripes on body */}
    <path d="M 25,50 L 25,80" stroke="black" strokeWidth="5" fill="none" />
    <path d="M 35,45 L 35,85" stroke="black" strokeWidth="5" fill="none" />
    <path d="M 45,45 L 45,85" stroke="black" strokeWidth="5" fill="none" />
    <path d="M 55,45 L 55,85" stroke="black" strokeWidth="5" fill="none" />
    <path d="M 65,45 L 65,85" stroke="black" strokeWidth="5" fill="none" />
    <path d="M 75,50 L 75,80" stroke="black" strokeWidth="5" fill="none" />
    
    {/* Zebra head */}
    <path d="M 30,60 Q 20,45 25,30 Q 30,20 40,30" fill="white" />
    
    {/* Zebra stripes on head */}
    <path d="M 25,30 L 32,36" stroke="black" strokeWidth="3" fill="none" />
    <path d="M 28,25 L 35,32" stroke="black" strokeWidth="3" fill="none" />
    <path d="M 33,22 L 40,28" stroke="black" strokeWidth="3" fill="none" />
    
    {/* Zebra eyes */}
    <circle cx="30" cy="35" r="2" fill="#4B4B4B" />
    
    {/* Zebra ears */}
    <path d="M 35,25 Q 30,15 40,20" fill="white" />
    <path d="M 35,25 Q 30,15 40,20" stroke="black" strokeWidth="1" fill="none" />
    
    {/* Zebra mane */}
    <path d="M 40,30 L 50,50" stroke="black" strokeWidth="5" fill="none" />
  </motion.svg>
);

// Kangaroo SVG
export const KangarooSVG = ({ size = 100 }) => (
  <motion.svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    whileHover={{ scale: 1.1 }}
  >
    {/* Kangaroo body */}
    <ellipse cx="50" cy="60" rx="20" ry="30" fill="#D2B48C" />
    
    {/* Kangaroo head */}
    <ellipse cx="60" cy="25" rx="12" ry="15" fill="#D2B48C" />
    
    {/* Kangaroo ears */}
    <ellipse cx="55" cy="12" rx="5" ry="8" fill="#D2B48C" />
    <ellipse cx="70" cy="12" rx="5" ry="8" fill="#D2B48C" />
    
    {/* Kangaroo face */}
    <circle cx="65" cy="20" r="2" fill="#4B4B4B" />
    <ellipse cx="70" cy="25" rx="4" ry="2" fill="#A0522D" />
    
    {/* Kangaroo arms */}
    <path d="M 50,40 Q 40,50 35,60" stroke="#D2B48C" strokeWidth="5" fill="none" />
    
    {/* Kangaroo legs */}
    <path d="M 40,80 Q 30,95 20,90" stroke="#D2B48C" strokeWidth="8" fill="none" />
    <path d="M 60,80 Q 70,95 80,90" stroke="#D2B48C" strokeWidth="8" fill="none" />
    
    {/* Kangaroo tail */}
    <path d="M 40,75 Q 20,85 15,70" stroke="#D2B48C" strokeWidth="8" fill="none" />
    
    {/* Kangaroo pouch */}
    <path d="M 45,60 Q 50,70 55,60" stroke="#C19A6B" strokeWidth="2" fill="#C19A6B" />
    
    {/* Baby joey in pouch (if visible) */}
    <circle cx="50" cy="65" r="5" fill="#D2B48C" />
  </motion.svg>
);

export const AnimalSVGs = {
  Cat: CatSVG,
  Dog: DogSVG,
  Fish: FishSVG,
  Bird: BirdSVG,
  Rabbit: RabbitSVG,
  Cow: CowSVG,
  Pig: PigSVG,
  Horse: HorseSVG,
  Chicken: ChickenSVG,
  Sheep: SheepSVG,
  Lion: LionSVG,
  Elephant: ElephantSVG,
  Giraffe: GiraffeSVG,
  Monkey: MonkeySVG,
  Tiger: TigerSVG,
  Zebra: ZebraSVG,
  Kangaroo: KangarooSVG
}; 