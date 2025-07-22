const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const rotation = 1;
const corrAlphabets = [];

for (let i = 0; i < alphabets.length; i++) {
  corrAlphabets.push(
    i + rotation < alphabets.length
      ? alphabets[i + rotation]
      : alphabets[i + rotation - alphabets.length]
  );
}
console.log("corr-alph :", corrAlphabets);

function cipher() {
  const text = document.getElementById("cipher-input").value;
  let result = "";

  text.split("").map((letter) => {
    letter = letter.toUpperCase();
    result +=
      alphabets.indexOf(letter) !== -1
        ? corrAlphabets?.at(alphabets.indexOf(letter))
        : " ";
  });

  document.getElementById("cipher-result").innerText = result;
}

function decipher() {
  const text = document.getElementById("decipher-input").value;
  let result = "";

  text.split("").map((letter) => {
    letter = letter.toUpperCase();
    result +=
      corrAlphabets.indexOf(letter) !== -1
        ? alphabets?.at(corrAlphabets.indexOf(letter))
        : " ";
  });

  document.getElementById("decipher-result").innerText = result;
}
