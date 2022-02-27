var startButtonEl = document.querySelector("#start-btn");
var questionEl = document.querySelector("#question-box");
var timerEl = document.getElementById('countdown');


var quizData = {
    question: [
    "Question 1 is going to be this really long question ___________", 
    "Question 2 is going to be another really long question ___________", 
    "Question 3", 
    "Question 4"
  ],
    choices: [
    "1. Answer", 
    "2. Answer", 
    "3. Answer", 
    "4. Answer"
  ]
  };

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

var questionStart = function() {
  // question element
  var questionText = document.createElement("div");
  questionText.className = "question-box";
  questionText.innerHTML = "<h2 class='question-text'>" + quizData.question[0] + "</h2>";
  questionEl.appendChild(questionText);
  console.log(questionText);


  // answer element pop up below question
  var answerList = document.createElement("ul");
  answerList.className = "answer-list";
  questionText.appendChild(answerList);

  var answerOne = document.createElement("li");
  answerOne.className = "answer-list";
  answerOne.innerHTML = "<button id='answer-btn'>" + quizData.choices[0] + "</button>";
  answerList.appendChild(answerOne);

  var answerTwo = document.createElement("li");
  answerTwo.className = "answer-list";
  answerTwo.innerHTML = "<button id='answer-btn'>" + quizQuestions.choices[1] + "</button>";
  answerList.appendChild(answerTwo);

  var answerThree = document.createElement("li");
  answerThree.className = "answer-list";
  answerThree.innerHTML = "<button id='answer-btn'>" + quizQuestions.choices[2] + "</button>";
  answerList.appendChild(answerThree);

  var answerFour = document.createElement("li");
  answerFour.className = "answer-list";
  answerFour.innerHTML = "<button id='answer-btn'>" + quizQuestions.choices[3] + "</button>";
  answerList.appendChild(answerFour);

}

startButtonEl.addEventListener("click", questionStart)
// startButtonEl.addEventListener("click", countdownTimer)