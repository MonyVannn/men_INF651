let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let selectedAnswer = null;
let feedbackShown = false;

const homePage = document.getElementById("home-page");
const quizPage = document.getElementById("quiz-page");
const resultsPage = document.getElementById("results-page");
const aboutPage = document.getElementById("about-page");
const contactPage = document.getElementById("contact-page");
const startQuizBtn = document.getElementById("start-quiz-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const retakeQuizBtn = document.getElementById("retake-quiz-btn");
const homeFromResultsBtn = document.getElementById("home-from-results-btn");
const toggleReviewBtn = document.getElementById("toggle-review-btn");

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const progressText = document.getElementById("progress-text");
const progressBarFill = document.getElementById("progress-bar-fill");
const feedbackMessage = document.getElementById("feedback-message");

const finalScore = document.getElementById("final-score");
const scorePercentage = document.getElementById("score-percentage");
const feedbackText = document.getElementById("feedback-text");
const reviewContainer = document.getElementById("review-container");
const contactForm = document.getElementById("contact-form");
const formSuccessMessage = document.getElementById("form-success-message");

const navLinks = document.querySelectorAll(".nav-link");

function showPage(pageId) {
  const pages = document.querySelectorAll(".page-section");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("data-page") === pageId.replace("-page", "")) {
      link.classList.add("active");
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const page = this.getAttribute("data-page");
    showPage(page + "-page");
  });
});

const navLogo = document.querySelector(".nav-logo");
if (navLogo) {
  navLogo.addEventListener("click", function (e) {
    e.preventDefault();
    showPage("home-page");
  });
}

//displays the current question and its options
function loadQuestion() {
  selectedAnswer = null;
  feedbackShown = false;
  nextQuestionBtn.disabled = true;
  feedbackMessage.classList.remove("show", "correct", "incorrect");

  const currentQuestion = quizQuestions[currentQuestionIndex];

  questionText.textContent = currentQuestion.questionText;

  const totalQuestions = quizQuestions.length;
  const currentQuestionNumber = currentQuestionIndex + 1;
  progressText.textContent = `Question ${currentQuestionNumber} of ${totalQuestions}`;

  const progressPercentage = (currentQuestionNumber / totalQuestions) * 100;
  progressBarFill.style.width = progressPercentage + "%";

  answersContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const answerButton = document.createElement("button");
    answerButton.className = "answer-option";
    answerButton.textContent = option;
    answerButton.setAttribute("data-index", index);

    answerButton.addEventListener("click", function () {
      if (!feedbackShown) {
        selectAnswer(index);
      }
    });

    answersContainer.appendChild(answerButton);
  });
}

// handles answer selection
function selectAnswer(answerIndex) {
  const previousSelected = document.querySelector(".answer-option.selected");
  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }

  const answerButtons = document.querySelectorAll(".answer-option");
  answerButtons[answerIndex].classList.add("selected");

  selectedAnswer = answerIndex;
  nextQuestionBtn.disabled = false;
}

// compares user's selection with correct answer
function checkAnswer() {
  if (selectedAnswer === null) {
    return false;
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswerIndex;

  userAnswers.push({
    questionIndex: currentQuestionIndex,
    selectedAnswer: selectedAnswer,
    correctAnswer: currentQuestion.correctAnswerIndex,
    isCorrect: isCorrect,
  });

  if (isCorrect) {
    score++;
  }

  showAnswerFeedback(isCorrect);

  return isCorrect;
}

//provides immediate visual feedback
function showAnswerFeedback(isCorrect) {
  feedbackShown = true;
  const answerButtons = document.querySelectorAll(".answer-option");
  const currentQuestion = quizQuestions[currentQuestionIndex];

  answerButtons[currentQuestion.correctAnswerIndex].classList.add("correct");

  if (!isCorrect && selectedAnswer !== null) {
    answerButtons[selectedAnswer].classList.add("incorrect");
  }

  answerButtons.forEach((button) => {
    button.style.pointerEvents = "none";
  });

  feedbackMessage.textContent = isCorrect
    ? "Correct"
    : `Incorrect. The correct answer is: ${
        currentQuestion.options[currentQuestion.correctAnswerIndex]
      }`;
  feedbackMessage.classList.add("show", isCorrect ? "correct" : "incorrect");

  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextQuestionBtn.textContent = "View Results";
  }
}

// advances quiz to next question or displays results
function nextQuestion() {
  if (selectedAnswer === null && !feedbackShown) {
    alert("Please select an answer before proceeding.");
    return;
  }

  if (!feedbackShown) {
    checkAnswer();
    return;
  }

  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    displayResult();
  }
}

// shows final score and personalized feedback
function displayResult() {
  const totalQuestions = quizQuestions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  finalScore.textContent = `Your Score: ${score} out of ${totalQuestions}`;
  scorePercentage.textContent = `${percentage}%`;

  let feedbackMessage = "";
  if (percentage === 100) {
    feedbackMessage =
      "Perfect score. You have mastered JavaScript fundamentals.";
  } else if (percentage >= 80) {
    feedbackMessage =
      "Excellent work. You have a strong understanding of JavaScript.";
  } else if (percentage >= 60) {
    feedbackMessage = "Good job. You have a solid foundation. Keep practicing.";
  } else if (percentage >= 40) {
    feedbackMessage = "Not bad. Review the concepts and try again.";
  } else {
    feedbackMessage =
      "Keep learning. Review the JavaScript fundamentals and try again.";
  }

  feedbackText.textContent = feedbackMessage;

  reviewContainer.innerHTML = "";
  reviewContainer.classList.add("hidden");
  toggleReviewBtn.textContent = "Review Answers";

  showPage("results-page");
}

// resets all variables and reloads first question
function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  selectedAnswer = null;
  feedbackShown = false;

  nextQuestionBtn.textContent = "Next Question";
  nextQuestionBtn.disabled = true;

  loadQuestion();
}

// shows/hides answer review section
function toggleReview() {
  if (reviewContainer.classList.contains("hidden")) {
    generateReview();
    reviewContainer.classList.remove("hidden");
    toggleReviewBtn.textContent = "Hide Review";
  } else {
    reviewContainer.classList.add("hidden");
    toggleReviewBtn.textContent = "Review Answers";
  }
}

/**
 * generates the review of all questions and answers
 */
function generateReview() {
  reviewContainer.innerHTML = "";

  quizQuestions.forEach((question, index) => {
    const userAnswer = userAnswers.find(
      (answer) => answer.questionIndex === index
    );
    const reviewItem = document.createElement("div");
    reviewItem.className = "review-item";

    const questionDiv = document.createElement("div");
    questionDiv.className = "review-question";
    questionDiv.textContent = `Q${index + 1}: ${question.questionText}`;
    reviewItem.appendChild(questionDiv);

    const correctDiv = document.createElement("div");
    correctDiv.className = "review-answer review-correct";
    correctDiv.textContent = `Correct Answer: ${
      question.options[question.correctAnswerIndex]
    }`;
    reviewItem.appendChild(correctDiv);

    if (userAnswer) {
      const userDiv = document.createElement("div");
      userDiv.className = "review-answer";
      if (userAnswer.isCorrect) {
        userDiv.classList.add("review-correct");
        userDiv.textContent = `Your Answer: ${
          question.options[userAnswer.selectedAnswer]
        }`;
      } else {
        userDiv.classList.add("review-incorrect");
        userDiv.textContent = `Your Answer: ${
          question.options[userAnswer.selectedAnswer]
        }`;
      }
      reviewItem.appendChild(userDiv);
    }

    reviewContainer.appendChild(reviewItem);
  });
}

// handles client-side form validation
function validateForm() {
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  messageInput.classList.remove("error");

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameInput.classList.add("error");
    isValid = false;
  }

  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    emailError.textContent = "Email is required";
    emailInput.classList.add("error");
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address";
    emailInput.classList.add("error");
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    messageInput.classList.add("error");
    isValid = false;
  }

  return isValid;
}

const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");

contactName.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    this.classList.remove("error");
    document.getElementById("name-error").textContent = "";
  }
});

contactEmail.addEventListener("input", function () {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (this.value.trim() !== "" && emailRegex.test(this.value.trim())) {
    this.classList.remove("error");
    document.getElementById("email-error").textContent = "";
  }
});

contactMessage.addEventListener("input", function () {
  if (this.value.trim() !== "") {
    this.classList.remove("error");
    document.getElementById("message-error").textContent = "";
  }
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    const faqIndex = this.getAttribute("data-faq");
    const answer = document.querySelector(
      `.faq-answer[data-answer="${faqIndex}"]`
    );
    const toggle = this.querySelector(".faq-toggle");

    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      answer.classList.add("show");
      toggle.textContent = "−";
    } else {
      answer.classList.add("hidden");
      answer.classList.remove("show");
      toggle.textContent = "+";
    }
  });
});

// start Quiz button
startQuizBtn.addEventListener("click", function () {
  resetQuiz();
  showPage("quiz-page");
});

// next Question button
nextQuestionBtn.addEventListener("click", nextQuestion);

// retake Quiz button
retakeQuizBtn.addEventListener("click", function () {
  resetQuiz();
  showPage("quiz-page");
});

// Home from results button
homeFromResultsBtn.addEventListener("click", function () {
  showPage("home-page");
});

// toggle review button
toggleReviewBtn.addEventListener("click", toggleReview);

// contact form submission
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    formSuccessMessage.classList.remove("hidden");
    contactForm.reset();

    setTimeout(() => {
      formSuccessMessage.classList.add("hidden");
    }, 5000);
  }
});

// initialize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  showPage("home-page");

  resetQuiz();
});
