var timerEl = document.getElementById("countdown");
var startBtnEl = document.getElementById("start-quiz");
var startScreenEl = document.getElementById("start-screen");
var quizEl = document.getElementById("quiz");
var checkAnswerEl = document.getElementById("check-answer");
var finalScoreEl = document.getElementById("final-score");

var initialsInputEl = document.getElementById("initials-input");
var scoreEl = document.getElementById("score");
var submitBtnEl = document.getElementById("submit-btn");
var currentQuestionIndex = 0;
// Timer that counts down from 75
var timeLeft = 75;
var score = 0;
var timerInterval;

// List of all questions, choices, and answers
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },

    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    
    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above",
    },

    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes",
    },
    
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log",
    },
  ];

  // Removes the start screen and button, but keeps the "View High Scores" and Timer displayed
startBtnEl.addEventListener("click", function() {
    startScreenEl.remove();
    // Once "Start Quiz" button is clicked, the timer starts
    countdown();
});

function countdown() {
  // The `setInterval()` method calls a function to be executed every 1000 milliseconds (1 second)
  var timeInterval = setInterval(function () {
    // As long as `timeLeft` is greater than 1
    if (timeLeft > 0) {
        // Decrement the timer by 1
        timeLeft--;
      // Set the `textContent` of `timer` to show the remaining seconds
      timerEl.textContent = "Time: " + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
        endQuiz;
    }
  }, 1000);
}

// Function that displays questions
function showQuestion() {
    var currentQuestion = questions.currentQuestionIndex;


}