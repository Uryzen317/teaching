const container = document.getElementById("container");
console.log(container);

console.log("-".repeat(24));
console.log(container.innerHTML);
container.innerHTML += "<p>test2</p>";
console.log("-".repeat(24));

for (let i = 0; i < 5; i++) {
  container.innerHTML += `<div class='colored-box' style='background-color:rgb(${
    (i / 5) * 255
  }, ${((5 - i) / 5) * 255}, 100)'></div>`;
}

// for (let counter = 0; counter < 5; counter++) {
//   let color;
//   if (counter === 0) color = "red";
//   if (counter === 1) color = "orange";
//   if (counter === 2) color = "yellow";
//   if (counter === 3) color = "lime";
//   if (counter === 4) color = "teal";
//   container.innerHTML += `<div
//               id="${counter + 1}"
//               class='colored-box'
//               style="background-color: ${color};"
//           ></div>`;
// }

// [1, 1, 1, 1, 1].map((_x, i) => (document.getElementById(i + 1).outerHTML = ""));
// console.log("-".repeat(24));
// const textElement = document.getElementById("text");
// console.log((textElement.style.color = "rgb(255, 0, 0)"));
