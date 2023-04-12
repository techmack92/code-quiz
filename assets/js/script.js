var timer = document.getElementById("countdown");
var startBtn = document.getElementById("start-quiz");
var startScreen = document.getElementById("start-screen")


// Removes the start screen and button, but keeps the "View High Scores" and Timer displayed
startBtn.addEventListener("click", function() {
    startScreen.remove();
    // Once "Start Quiz" button is clicked, the timer starts
    countdown();
});
 
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

  
  // Timer that counts down from 75
function countdown() {
    var timeLeft = 75;
    
  // The `setInterval()` method calls a function to be executed every 1000 milliseconds (1 second)
  var timeInterval = setInterval(function () {
    // As long as `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timer` to show the remaining seconds
      timer.textContent = "Time: " + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 0) {
     // Once `timeLeft` gets to 0, display "Time's Up!"
      timer.textContent = "Time's Up";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      return;
    }
  }, 1000);
}
