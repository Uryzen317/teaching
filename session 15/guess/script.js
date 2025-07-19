const code = Math.floor(Math.random() * 100) + 1;
console.log("Random code :", code);

const input = document.getElementById("guess-input");
const resultTag = document.getElementById("guess-result");
const button = document.getElementById("guess-btn");

function guess() {
  const userGuess = Number(input.value);

  if (userGuess < code) {
    resultTag.innerHTML += `Your guess : ${userGuess} | Too low <br/>`;
    input.value = "";
    return;
  }

  if (userGuess > code) {
    resultTag.innerHTML += `Your guess : ${userGuess} | Too high <br/>`;
    input.value = "";
    return;
  }

  if (userGuess === code) {
    resultTag.innerHTML += `Your guess : ${userGuess} | Bingo !`;
    input.value = "";
    button.setAttribute("disabled", true);
    return;
  }
}
