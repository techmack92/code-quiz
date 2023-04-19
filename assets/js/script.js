var timerEl = document.getElementById("countdown");
var startBtnEl = document.getElementById("start-quiz");
var startScreenEl = document.getElementById("start-screen");
var quizEl = document.getElementById("quiz");
var choicesEl = document.getElementById("choices");
var checkAnswerEl = document.getElementById("check-answer");
var finalScoreEl = document.getElementById("final-score");
var initialsInputEl = document.getElementById("initials-input");
var scoreEl = document.getElementById("score");
var submitBtnEl = document.getElementById("submit-btn");
var questionTitleEl = document.getElementById("question-title");
var currentQuestionIndex = 0;
var currentQuestion;
var score = 0;
var timerInterval = 0;
var timeLeft = 75;              // Timer that counts down from 75

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

  startBtnEl.addEventListener("click", function() {
    startScreenEl.style.display = "none";                    // Removes the start screen and button, but keeps the "View High Scores" and Timer displayed
    countdown();                                            // Once "Start Quiz" button is clicked, the timer starts
    showQuestion();
});

function countdown() {
  setInterval(function () {                                 // The `setInterval()` method calls a function to be executed every 1000 milliseconds (1 second)
    if (timeLeft > 0) {                                     // As long as `timeLeft` is greater than 1
        timeLeft--;                                         // Decrement the timer by 1
      timerEl.textContent = "Time: " + timeLeft;            // Set the `textContent` of `timer` to show the remaining seconds
    } else {
        endQuiz();
    }
  }, 1000);

}

// Function that displays questions
function showQuestion() {

    quizEl.style.display = "block";
    choicesEl.style.display = "block";
    currentQuestion = questions[currentQuestionIndex];       // Gets current question from `questions` array using the index
  
    questionTitleEl.textContent = currentQuestion.question;      // Sets text of `quiz` element to the current question's text
    choicesEl.innerHTML = "";
    for (var i = 0; i < currentQuestion.choices.length; i++) {   // As long as `i` is less than the length of `questions` array,
        var li = document.createElement("li");                   // Create a list item element, and
        li.textContent = currentQuestion.choices[i];             // Set the choices text of the current question
        li.classList.add("button");
        li.addEventListener("click", checkAnswer) 
        choicesEl.appendChild(li);                                // Appends `li` elements to the `choicesEl` div
    }
}

// Function that checks the user's answer
function checkAnswer(event) {
    // event.preventDefault();
    var selectedChoice = event.target.textContent;               // Gets the text from user's selected choice
    if (selectedChoice == currentQuestion.answer) {             // If user chooses correct answer,
      score++;                                                   // Score increases by 1
      checkAnswerEl.textContent = "Correct!";                    // Display "Correct!"
    } else {
      timeLeft -= 10;                                            // Otherwise, user loses 10 seconds off timer
      checkAnswerEl.textContent = "Wrong! The correct answer is: " + currentQuestion.answer;       // Tells user they chose wrong answer & displays correct answer
    }
    currentQuestionIndex++;                                          // Goes to next question
    checkQuestionIndex(currentQuestionIndex);
}
  
function checkQuestionIndex(currentQuestionIndex) {
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {  
    endQuiz();
  }
}

// Funciton that displays final score at end of quiz
function endQuiz() {
  clearInterval(timerInterval);
  timerEl.textContent = "Time's up!";
  finalScoreEl.textContent = score;                       // Shows final score
  // submitBtnEl.removeEventListener("click", submitScore);  // Removes submit button to prevent user from submitting initials multiple times
}