# My Learning Adventure

An interactive learning application designed for children to make education fun and engaging. The app features various subjects including Math, Science, and Vocabulary with interactive lessons and games.

## Features

- Interactive UI with animations and engaging visuals
- Multiple subjects with age-appropriate lessons
- Progress tracking with stars and badges
- Adaptive difficulty levels
- Immediate feedback for answers
- Character mascot to guide children through the app

## Subjects

### Math
- Counting Fun
- Adding Friends
- Shape Match

### Science
- Rainbow Colors
- Animal Friends
- Weather Watch

### Vocabulary
- Letter Fun
- Word Match
- Say It Right

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/my-learning-app.git
```

2. Navigate to the project directory
```
cd my-learning-app
```

3. Install dependencies
```
npm install
```
or
```
yarn install
```

4. Start the development server
```
npm start
```
or
```
yarn start
```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
my-learning-app/
├── public/
│   ├── index.html
│   └── assets/
│       └── audio/
├── src/
│   ├── components/
│   │   ├── CharacterMascot.js
│   │   ├── ChildButton.js
│   │   └── svg/
│   ├── context/
│   │   └── AppContext.js
│   ├── hooks/
│   │   └── useAudio.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── LessonSelectPage.js
│   │   ├── LessonPage.js
│   │   └── FeedbackPage.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Technologies Used

- React.js
- Framer Motion for animations
- Lucide React for icons
- CSS for styling

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Designed for children's education and engagement
- Inspired by modern educational apps and games
