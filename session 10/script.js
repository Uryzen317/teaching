const buttons = document.getElementsByClassName("btn");
const results = document.getElementById("results");
let operations = "";

for (const button of buttons) {
  button.addEventListener("click", () => {
    if (button.id == "=") {
      results.innerText = eval(operations);
      return (operations = "");
    }

    if (button.id == "clear") {
      results.innerText = "";
      return (operations = "");
    }

    operations += button.id;
    results.innerText = operations;
  });
}
