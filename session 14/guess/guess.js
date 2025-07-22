let secretNumber;
let attemptsLeft;
const maxAttempts = 10;

// DOM Elements
const input = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const attemptsText = document.getElementById("attempts");
const submitBtn = document.getElementById("submitGuess");
const restartBtn = document.getElementById("restartGame");

// Initialize game
function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = maxAttempts;
  feedback.textContent = "Good luck!";
  attemptsText.textContent = `Attempts left: ${attemptsLeft}`;
  input.value = "";
  input.disabled = false;
  submitBtn.disabled = false;
  restartBtn.style.display = "none";
}

function handleGuess() {
  const guess = Number(input.value);

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Enter a number between 1 and 100.";
    return;
  }

  attemptsLeft--;
  attemptsText.textContent = `Attempts left: ${attemptsLeft}`;

  if (guess === secretNumber) {
    feedback.textContent = `Correct! The number was ${secretNumber}`;
    endGame();
  } else if (attemptsLeft === 0) {
    feedback.textContent = `Game Over! The number was ${secretNumber}`;
    endGame();
  } else if (guess < secretNumber) {
    feedback.textContent = "Too low!";
  } else {
    feedback.textContent = "Too high!";
  }

  input.value = "";
}

function endGame() {
  input.disabled = true;
  submitBtn.disabled = true;
  restartBtn.style.display = "inline-block";
}

// Event listeners
submitBtn.addEventListener("click", handleGuess);
restartBtn.addEventListener("click", startGame);

// Optional: allow Enter key to submit
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") handleGuess();
});

// Start on load
startGame();
