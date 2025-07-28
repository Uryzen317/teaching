// Cookie
// const baseDate = new Date();
// const targetDate = baseDate.getTime() + 7 * 24 * 60 * 60 * 1000;
// const finalDate = new Date(targetDate);

// document.cookie = `username=mohammad; expires=${finalDate}`;
// document.cookie = `theme=dark; expires=${finalDate}`;
// document.cookie = `ln=english; expires=${finalDate}`;
// console.log(document.cookie)

// Local storage
// let testLocalStorage = [
//   {
//     test: "test",
//   },
// ];
// window.localStorage.setItem("username", JSON.stringify(testLocalStorage));
// console.log(JSON.parse(window.localStorage.getItem("username")));
// window.localStorage.removeItem('username');
// window.localStorage.clear();

// Rock-Paper-Scissors
const operations = ["rock", "paper", "scissor"];
const result = document.querySelector("#result");

function handleSelection(operation) {
  console.log("user input registered :", operation);

  const computerSelection =
    operations[Math.round(Math.random() * (operations.length - 1))];
  console.log("computer registered :", computerSelection);

  //   Rock-Rock
  if (operation === "rock") {
    if (computerSelection === "rock") {
      result.innerHTML += `<br/>Computer selection : ${computerSelection} | TIE`;
    }

    //   Rock-Paper
    if (computerSelection === "paper") {
      result.innerHTML += `<br/>Computer selection : ${computerSelection} | LOSE`;
    }

    // Rock-scissor
    if (computerSelection === "scissor") {
      result.innerHTML += `<br/>Computer selection : ${computerSelection} | WIN`;
    }
  }

  //   paper-Rock
  if (operation === "paper" && computerSelection === "rock") {
    result.innerHTML += `<br/>Computer selection : ${computerSelection} | WIN`;
  }

  //   paper-Paper
  if (operation === "paper" && computerSelection === "paper") {
    result.innerHTML += `<br/>Computer selection : ${computerSelection} | TIE`;
  }

  // paper-scissor
  if (operation === "paper" && computerSelection === "scissor") {
    result.innerHTML += `<br/>Computer selection : ${computerSelection} | LOSE`;
  }

  //   scissor-Rock
  if (operation === "scissor" && computerSelection === "rock") {
    result.innerHTML += `<br/>Computer selection : ${computerSelection} | LOSE`;
  }

  //   scissor-Paper
  if (operation === "scissor" && computerSelection === "paper") {
    result.innerHTML += `<br/>Computer selection : ${computerSelection} | WIN`;
  }

  // scissor-scissor
  if (operation === "scissor" && computerSelection === "scissor") {
    result.innerHTML += `<br/>Computer selection : ${computerSelection} | TIE`;
  }
}
