const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const box3 = document.getElementById("box-3");

for (let R = 0; R <= 255; R++) {
  box1.innerHTML += `<div style="background-color: rgb(${R}, 0, 0)"></div>`;
}

for (let G = 0; G <= 255; G++) {
  box2.innerHTML += `<div style="background-color: rgb(0, ${G}, 0)"></div>`;
}

for (let B = 0; B <= 255; B++) {
  box3.innerHTML += `<div style="background-color: rgb(0, 0, ${B})"></div>`;
}

// ------------------
const box2d = document.getElementById("box-2d-1");
const ILimit = 100;
const JLimit = 100;

for (let i = 0; i < ILimit; i++) {
  let temp = "";

  for (let j = 0; j < JLimit; j++) {
    temp += `<div style="background-color: rgb(${(i / ILimit) * 256} ,${
      (j / JLimit) * 256
    } , 0)"></div>`;
  }

  box2d.innerHTML += `<div>${temp}</div>`;
}

// ------------------
setInterval(animateRotation, 10);
let rotation = 0;
const rotaionSpeed = 1.5;
const anim1 = document.getElementById("anim-1");

function animateRotation() {
  rotation += rotaionSpeed;
  anim1.style.rotate = rotation + "deg";
}

// ------------------
const box4 = document.getElementById("box-4");
setInterval(animateRChannel, 10);
const precision = 50;
let rOffset = precision;
let shiftSpeed = 0.2;

function animateRChannel() {
  console.log("Now rendering");
  box4.innerHTML = "";

  for (let R = rOffset; R <= precision; R++) {
    box4.innerHTML += `<div style="background-color: rgb(${
      (R / precision) * 256
    }, 0, 0)"></div>`;
  }

  for (let R = 0; R <= rOffset; R++) {
    box4.innerHTML += `<div style="background-color: rgb(${
      (R / precision) * 256
    }, 0, 0)"></div>`;
  }

  rOffset -= shiftSpeed;
  if (rOffset < 0) rOffset = precision;
}
