var startButtonEl = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question-box");
var timerEl = document.getElementById('countdown');

var timer = 10;
var initialsArr = [];
var highscoresArr = [];
var userInitials = '';

var highScore = {
  initials: userInitials,
  score: timer
};

var questionCount = 0;

var nextQuestion = questionEl.querySelector(".choices-list");

// storing question text and choices in an array
var questions = [
  {
    question: "Commonly used data types do NOT include:",
    answer: "this is the Answer",
    choices: [
      "Answer",
      "Answer",
      "this is the Answer",
      "Answer"
    ]
  },
  {
    question: "The condition in an if/else statement is enclosed with:",
    answer: "this is the Answer",
    choices: [
      "this is the Answer",
      "Answer",
      "Answer",
      "Answer"
    ]
  },
  {
    question: "Arrays in javascript can be used to store?",
    answer: "this is the Answer",
    choices: [
      "Answer",
      "this is the Answer",
      "Answer",
      "Answer"
    ]
  },
  {
    question: "String Values must be enclosed within _____ when being assigned to variables",
    answer: "this is the Answer",
    choices: [
      "Answer",
      "Answer",
      "Answer",
      "this is the Answer"
    ]
  },
];

var saveScores = function () {
  localStorage.setItem("save", JSON.stringify(userInitials));
}

nextQuestion.onclick = ()=>{
  // cycle through question loop
  if(questionCount < questions.length - 1){
    questionCount++;
    showQuestions(questionCount);
  } else {
    // get initials from user when game is finished
    gameOverTrigger();
  }
};

var gameOverTrigger = function () {
  var userInitials = prompt("Game Over! Type Your Initials to Save your Score!");
  if (userInitials === null || userInitials === "") {
    alert("Invalid Response! You must submit initials to save your score.")
    return gameOverTrigger();
  }
  saveScores(userInitials);
  console.log(initialsArr);
  window.location.reload();
};

// get the questions and choices from the array
function showQuestions() {
  var questionText = document.querySelector(".question-text");
  var choicesList = document.querySelector(".choices-list");
  var questionInfo = "<h2>" + questions[questionCount].question + "</h2>";
  var choicesInfo = "<li>" + questions[questionCount].choices[0] + "</li>"
                    + "<li>" + questions[questionCount].choices[1] + "</li>"
                    + "<li>" + questions[questionCount].choices[2] + "</li>"
                    + "<li>" + questions[questionCount].choices[3] + "</li>";
  questionText.innerHTML = questionInfo;
  choicesList.innerHTML = choicesInfo;
};

// subtract from timer when answer is incorrect

function countdownTimer () {
  var timeLeft = timer;
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval)
      timeLeft.textContent = "0";
      gameOverTrigger();
    }
  }, 1000);
};

// take timer and store as score 

startButtonEl.addEventListener("click", showQuestions);
startButtonEl.addEventListener("click", countdownTimer)