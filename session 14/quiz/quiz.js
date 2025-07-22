const questions = [
  {
    question: "از صفات اخلافی رحیمی کدام است ؟",
    answers: [
      { text: "پرحرف", correct: false },
      { text: "خوش رو، خوش برخورد، سخنور، دانشور", correct: true },
      { text: "کودن", correct: false },
      { text: "خرفت", correct: false },
    ],
  },
  {
    question: "داوودی سوار بر چه چیزی اقدام به خرید گوجه کرد ؟",
    answers: [
      { text: "فرقون", correct: false },
      { text: "پراید", correct: false },
      { text: "F35", correct: true },
      { text: "B2-Sprit stealth bomber", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressElement = document.getElementById("progress");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${
    questions.length
  }`;

  answersContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("answer-btn");
    btn.addEventListener("click", () => selectAnswer(btn, answer.correct));
    answersContainer.appendChild(btn);
  });
}

function selectAnswer(button, correct) {
  const buttons = answersContainer.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));

  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    nextBtn.classList.add("hidden");
  } else {
    showResult();
  }
});

function showResult() {
  questionElement.textContent = `You scored ${score} out of ${questions.length}`;
  answersContainer.innerHTML = "";
  nextBtn.textContent = "Restart";
  nextBtn.classList.remove("hidden");
  nextBtn.onclick = () => {
    nextBtn.textContent = "Next →";
    startQuiz();
  };
}

startQuiz();
