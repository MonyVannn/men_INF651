# NANO: Interactive JavaScript Quiz Application

A modern, minimalist single-page web application that provides an interactive JavaScript quiz experience. Built with vanilla JavaScript, HTML5, and CSS3 to demonstrate core web development concepts.

## Features

- **Interactive Quiz System**: 10 JavaScript-related questions with dynamic answer options
- **Real-time Feedback**: Immediate visual feedback for correct and incorrect answers
- **Progress Tracking**: Visual progress bar and question counter
- **Results Display**: Detailed score breakdown with personalized feedback messages
- **Answer Review**: Expandable review section showing all questions and answers
- **Contact Form**: Validated contact form with real-time error checking
- **FAQ Section**: Accordion-style frequently asked questions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Minimalist UI**: Clean, black-and-white design with subtle accent colors

## Getting Started

### Prerequisites

No build tools or dependencies required! Just a modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it!

### File Structure

```
final-project-frontend/
├── index.html       # Main HTML file
├── styles.css       # Stylesheet
├── script.js        # Main JavaScript logic
├── questions.js     # Quiz questions data
├── logo.svg         # Application logo
└── README.md        # This file
```

## Usage

1. **Start the Quiz**: Click the "Start Quiz" button on the home page
2. **Answer Questions**: Click on your chosen answer option
3. **View Feedback**: Click "Next Question" to see if your answer was correct
4. **Continue**: Click "Next Question" again to proceed to the next question
5. **View Results**: After completing all questions, see your score and personalized feedback
6. **Review Answers**: Click "Review Answers" to see detailed breakdown of all questions
7. **Retake Quiz**: Click "Retake Quiz" to start over

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, responsive design, and animations
- **JavaScript (ES6+)**: Core functionality and interactivity
  - DOM manipulation
  - Event handling
  - Conditional logic
  - Loops and arrays
  - Form validation

## Project Structure

### JavaScript Functions

- `loadQuestion()`: Displays the current question and answer options
- `selectAnswer()`: Handles answer selection
- `checkAnswer()`: Validates answers and updates score
- `nextQuestion()`: Advances to the next question or shows results
- `displayResult()`: Shows final score and feedback
- `resetQuiz()`: Resets quiz state for a new attempt
- `validateForm()`: Validates contact form inputs

### Pages

- **Home**: Welcome page with instructions
- **Quiz**: Main quiz interface
- **Results**: Score display and answer review
- **About**: Information about the quiz and FAQ
- **Contact**: Feedback form

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Customization

### Adding Questions

Edit `questions.js` to add or modify quiz questions:

```javascript
{
  questionText: "Your question here?",
  options: [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
  ],
  correctAnswerIndex: 0  // Index of correct answer
}
```

### Styling

Modify `styles.css` to customize the appearance. The design uses CSS custom properties (variables) for easy theming:

```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --muted: #f5f5f5;
  --border: #e5e5e5;
  --success: #16a34a;
  --error: #dc2626;
}
```

## License

This project is open source and available for educational purposes.

## Contact

For questions or feedback, use the Contact form in the application.

---

**Note**: This is a front-end demonstration project. All functionality runs entirely in the browser without a backend server.

