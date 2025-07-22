const questions = [
  {
    title: "test test test ... ?",
    options: [
      {
        title: "option 1",
        isCorrect: true,
      },
      {
        title: "option 2",
        isCorrect: false,
      },
      {
        title: "option 3",
        isCorrect: false,
      },
      {
        title: "option 4",
        isCorrect: false,
      },
    ],
  },
  {
    title: "test test test ... ?",
    options: [
      {
        title: "option 1",
        isCorrect: true,
      },
      {
        title: "option 2",
        isCorrect: false,
      },
      {
        title: "option 3",
        isCorrect: false,
      },
      {
        title: "option 4",
        isCorrect: false,
      },
    ],
  },
];
let questionIndex = 0;

function startGame() {
  showQuestion();
}

function showQuestion() {
  // render 1st question
  document.querySelector("#main-container").innerHTML = "";
  const currentQuestion = questions[questionIndex];

  //   container
  const questionContainer = document.createElement("div");
  questionContainer.id = "question-container";

  //   title
  const questionTitle = document.createElement("p");
  questionTitle.id = "question-title";
  questionTitle.textContent = currentQuestion.title;
  questionContainer.appendChild(questionTitle);

  //   status
  const status = document.createElement("p");
  status.id = "status";
  status.textContent = `سوال ${questionIndex + 1} از ${questions.length}`;
  questionContainer.appendChild(status);

  //   options
  const optionsContainer = document.createElement("div");
  optionsContainer.id = "options-container";
  for (const option of currentQuestion.options) {
    const optionButton = document.createElement("button");
    optionButton.classList.add("hoverable");
    optionButton.textContent = option.title;
    optionButton.addEventListener("click", () =>
      handleOption(optionsContainer)
    );

    optionsContainer.appendChild(optionButton);
  }
  questionContainer.appendChild(optionsContainer);

  //   finalization
  document.querySelector("#main-container").appendChild(questionContainer);
}

function handleOption(optionsContainer) {
  const allOptions = document.querySelectorAll("button");
  for (let counter = 0; counter < allOptions.length; counter++) {
    allOptions[counter].disabled = true;
    allOptions[counter].classList.remove("hoverable");

    if (questions[questionIndex].options[counter].isCorrect) {
      allOptions[counter].classList.add("correct");
    } else {
      allOptions[counter].classList.add("wrong");
    }
  }

  //   next question
  const nextQuestion = document.createElement("button");
  nextQuestion.textContent = "سوال بعد";
  nextQuestion.classList.add("hoverable");
  nextQuestion.addEventListener("click", () => {
    if (questionIndex < questions.length - 1) {
      questionIndex += 1;
      showQuestion();
    } else {
      alert("اتمام بازی");
      window.location.reload();
    }
  });

  optionsContainer.appendChild(nextQuestion);
}
