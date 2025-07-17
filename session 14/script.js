//   // &&
//   const isUserLoggedIn = true;
//   const isUserBlocked = false;
//   if (isUserLoggedIn === true && isUserBlocked === false) {
//     // go to panel
//   }
//   //   ||
//   const isUserLoggedIn = false;
//   const isEmployerLoggedIn = true;
//   if (isUserLoggedIn === true || isEmployerLoggedIn === true || isAdminLoggedInt == true) {
//     // go to panel
//   }

let alphabet = [
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
const offset = 13;
let corrAlphabet = [];

for (let i = 0; i < alphabet.length; i++) {
  if (i + offset < alphabet.length) {
    corrAlphabet[i + offset] = alphabet[i];
  } else {
    corrAlphabet[i + offset - alphabet.length] = alphabet[i];
  }
}

console.log("corr offset :", corrAlphabet);

function cipher() {
  // alert -> just text
  // confirm -> text + button
  // promot -> text + input

  const text = prompt("Enter your text :").toUpperCase();
  if (!text) {
    const confirmInvalid = confirm("Enter a valid text");

    if (confirmInvalid) return cipher();
    return false;
  }

  let result = "";
  const textArray = text.split("");
  for (let i = 0; i < textArray.length; i++) {
    const alphabetIndex = alphabet.indexOf(textArray[i]);

    if (alphabetIndex === -1) result += " ";
    else result += corrAlphabet[alphabetIndex];
  }

  navigator.clipboard.writeText(result);
  alert("Your cipher is : " + result + " [copied to memory]");
}

function decipher() {
  const text = prompt("Enter your cipher :").toUpperCase();
  if (!text) {
    const confirmInvalid = confirm("Enter a valid text");

    if (confirmInvalid) return cipher();
    return false;
  }

  let result = "";
  const textArray = text.split("");
  for (let i = 0; i < textArray.length; i++) {
    const corrAlphabetIndex = corrAlphabet.indexOf(textArray[i]);

    if (corrAlphabetIndex === -1) result += " ";
    else result += alphabet[corrAlphabetIndex];
  }

  navigator.clipboard.writeText(result);
  alert("Your text is : " + result + " [copied to memory]");
}
