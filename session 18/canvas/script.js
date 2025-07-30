const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.beginPath();
context.moveTo(5, 5);
context.lineTo(50, 50);
context.lineTo(70, 30);
context.closePath();
context.stroke();
context.fill();

context.fillStyle = "red";
context.fillRect(20, 20, 50, 50);
context.strokeStyle = "green";
context.strokeRect(10, 10, 20, 20);
context.clearRect(40, 40, 20, 20);

// context.beginPath();
// context.moveTo(10, 10);
// context.rect(10, 10, 80, 80);
// context.stroke();
// context.fill();

// context.beginPath();
// context.arc(50, 50, 25, Math.PI * 0.5, Math.PI * 1.75);
// context.stroke();
// context.fill();

// context.beginPath();
// context.moveTo(10, 10);
// context.lineTo(50, 10);
// context.arcTo(70, 10, 70, 30, 20);
// context.lineTo(70, 90);
// context.stroke();

// context.beginPath();
// context.moveTo(10, 10);
// context.bezierCurveTo(10, 10, 20, 20, 50);
// context.stroke();

const dataURL = canvas.toDataURL("image/png");

const anchorLink = document.createElement("a");
anchorLink.download = "test.png";
anchorLink.href = dataURL;
document.body.appendChild(anchorLink);

anchorLink.click();
document.body.removeChild(anchorLink);
