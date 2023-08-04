var questionBox = document.querySelector("#title");
var cont = document.querySelector(".container");
var startQuizBtn = document.getElementById("quiz-start");
var answerBox = document.getElementById("answerBox");
var questionEl = document.querySelector("h3");
var message = document.getElementById("message");
var questionIndex = 0;
var timeLeft = 100;
var timerId;
var userAnswer = "";
var rightAnswer = "";
var finalScore = 0;

const questions = [
  {
    question: "When dealing with arrays, what does the method '.pop' do?",
    answers: [
      "add to the end",
      "remove from the end",
      "add to the start",
      "remove from the start",
    ],
    correctAnswer: "remove from the end",
  },
  {
    question: "When dealing with arrays, what does the method '.shift' do?",
    answers: [
      "add to the end",
      "remove from the end",
      "add to the start",
      "remove from the start",
    ],
    correctAnswer: "remove from the start",
  },
  {
    question: "Which syntax is a function declaration?",
    answers: [
      "function doThis() {}",
      "var doThis = function() {}",
      "var doThis = () => {}",
      "doThis: function() {}",
    ],
    correctAnswer: "function doThis() {}",
  },
  {
    question: "Which word is part of the JavaScript reserved words?",
    answers: ["add", "multiply", "delete", "combine"],
    correctAnswer: "delete",
  },
  {
    question: "Which attribute is a selector?",
    answers: [
      ".createElement()",
      ".children",
      ".append()",
      ".getElementbyClassName()",
    ],
    correctAnswer: ".getElementbyClassName()",
  },
];

function startTimer() {
  timerId = setInterval(function () {
    timeLeft--;
    updateTimeLeft();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      endQuiz();
    }
  }, 1000);
}

function updateTimeLeft() {
  var timeLeftEl = document.getElementById("timeLeft");
  timeLeftEl.innerText = `Time Left: ${timeLeft}`;
}

function showQuestions() {
  if (questionIndex < questions.length) {
    answerBox.innerHTML = "";
    questionEl.innerHTML = "";
    const question = questions[questionIndex].question;
    const answers = questions[questionIndex].answers;
    rightAnswer = questions[questionIndex].correctAnswer;
    document.getElementById("game-explanation").textContent = "";

    questionEl.innerText = question;

    for (let index = 0; index < answers.length; index++) {
      const element = answers[index];
      var answer = document.createElement("li");
      answer.classList.add("answerbtn");
      answer.innerText = element;
      answerBox.append(answer);
    }
  } else {
    endQuiz();
  }
}

function checkAnswer(event) {
  event.preventDefault();
  if(timeLeft < 0) {
    endQuiz();
  }
  if (event.target && event.target.matches(".answerbtn")) {
    userAnswer = event.target.textContent;

    message.innerHTML = "";

    if (userAnswer == rightAnswer) {
      message.textContent = "Correct!";
    } else {
      message.textContent = "Wrong!";
      timeLeft -= 10;
    }
    questionIndex++;
    showQuestions();
  }
}

function endQuiz() {
  finalScore = timeLeft;
  clearInterval(timerId);
  message.innerHTML = `<h3>Game over </h3> <p>
    Your score: ${finalScore} </p>`;

   var initials = document.createElement('input');
   initials.setAttribute('type', 'text');
   initials.setAttribute('placeholder', 'Enter Initials');
    initials.setAttribute('id', 'initials')
   message.append(initials);

   var submitScore = document.createElement('button');
   submitScore.setAttribute('onclick', 'saveScore()')
   submitScore.textContent = "Submit score";
   message.append(submitScore)


}

function saveScore() {
  var initials = document.querySelector('#initials').value;
  finalScore;
  var highScore = {
    score: finalScore,
    initials: initials
  }
  var highScorepageLength = 0;
  localStorage.setItem('score' + highScorepageLength, JSON.stringify(highScore));
  highScorepageLength++;
  var savedMessage = document.createElement('p');
  savedMessage.textContent = "Saved HighScore!";
  message.append(savedMessage)
}

startQuizBtn.addEventListener("click", function () {
  showQuestions();
  startTimer();
});

cont.addEventListener("click", checkAnswer);
