var startButtonEl = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question-box");
var timerEl = document.getElementById('countdown');

// storing question number, text and choices in an array
var questions = [
  {
    number: 1,
    question: "This is going to be my first question?",
    answer: "this is the Answer",
    choices: [
      "Answer",
      "this is the Answer",
      "Answer",
      "Answer"
    ]
  },
  {
    number: 2,
    question: "This is going to be my second question?",
    answer: "this is the Answer",
    choices: [
      "Answer",
      "this is the Answer",
      "Answer",
      "Answer"
    ]
  },
  {
    number: 3,
    question: "This is going to be my third question?",
    answer: "this is the Answer",
    choices: [
      "Answer",
      "this is the Answer",
      "Answer",
      "Answer"
    ]
  },
  {
    number: 4,
    question: "This is going to be my fourth question?",
    answer: "this is the Answer",
    choices: [
      "Answer",
      "this is the Answer",
      "Answer",
      "Answer"
    ]
  },
];

var questionCount = 0;

// get the questions and choices from the array
function showQuestions() {
  var questionText = document.querySelector(".question-text");
  var questionInfo = "<h2>" + questions[0].question + "</h2>";
  questionText.innerHTML = questionInfo;
}



function countdownTimer () {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      alert("You have run out of time!");
    }
  }, 1000);
};

// var questionStart = function() {

//   // question element
//   var questionText = document.createElement("div");
//   questionText.className = "question-box";
//   questionText.innerHTML = "<h2 class='question-text'>" + questionObj + "</h2>";
//   questionEl.appendChild(questionText);

  
//   // answer element pop up below question
//   var answerList = document.createElement("ul");
//   answerList.className = "answer-list";
//   questionText.appendChild(answerList);

//   var answerOne = document.createElement("li");
//   answerOne.className = "answer-list";
//   answerOne.innerHTML = "<button id='answer-btn'>" + quizData.choices + "</button>";
//   answerList.appendChild(answerOne);

//   var answerTwo = document.createElement("li");
//   answerTwo.className = "answer-list";
//   answerTwo.innerHTML = "<button id='answer-btn'>" + quizData.choices + "</button>";
//   answerList.appendChild(answerTwo);

//   var answerThree = document.createElement("li");
//   answerThree.className = "answer-list";
//   answerThree.innerHTML = "<button id='answer-btn'>" + quizData.choices + "</button>";
//   answerList.appendChild(answerThree);

//   var answerFour = document.createElement("li");
//   answerFour.className = "answer-list";
//   answerFour.innerHTML = "<button id='answer-btn'>" + quizData.choices + "</button>";
//   answerList.appendChild(answerFour);

}

startButtonEl.addEventListener("click", showQuestions)
// startButtonEl.addEventListener("click", countdownTimer)