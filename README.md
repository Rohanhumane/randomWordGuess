# Word Guessing Game

## Description

This is a **React TypeScript** application that allows users to guess a randomly generated word letter by letter. The app fetches words from an external API and dynamically updates the UI based on user input.

## Features

- 🟢 **Fetches Random Words** from an external API.
- 🎮 **Keyboard Interaction**: Pressing a letter checks if it's in the word.
- 🔄 **State Management with Context API**.
- 🎨 **Styled with Bootstrap & CSS Modules**.
- 🚀 **Optimized for Performance** using React hooks.

## Technologies Used

- **React (TypeScript)**
- **Context API** (for global state management)
- **Bootstrap** (for styling)
- **CSS Modules** (for scoped styles)
- **API Fetching** (from api-ninjas.com)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Rohanhumane/randomWordGuess.git
 
   ```
2. commands:
```sh
cd your-repo
```
```sh
npm install
```
```sh
npm start
```

## workflow

src/
│── components/
│ ├── Boxes.tsx # Handles user interactions via keyboard
│ ├── Display.tsx # Displays guessed letters and dashes
│ ├── RandomWord.tsx # Fetches the random word and updates state
│── context-api/
│ ├── ContexProvider.tsx # Context API for state management
│ ├── contecxt-words.tsx # Context API
│── styles/
│ ├── Display.module.css
│ ├── Boxes.module.css
│── App.tsx # Root component
│── index.tsx # Main entry point
