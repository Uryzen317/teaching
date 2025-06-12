console.log("hello world");

// Numbers

let number1 = 12;
let number2 = 10.2;

let number3 = "10";
let number4 = "2";

console.log(number3 + number1); // -> string
console.log("result is : " + number1 + number2); // -> string
console.log("result is : " + sum(number1, number2)); // -> number
console.log(number1 + number2 + number3); // -> number
console.log(number3 / number4); // -> number
console.log(number3 * number4); // -> number
console.log(number3 - number4); // -> number
console.log(number3 + number4); // -> string

console.log(isNaN(24 / "mohammad")); // NaN
console.log(typeof NaN); // number
console.log(2 / 0); // Infinity
// *2 -> 0,1* | 8 -> 0-7 | *10 -> 0-9* | 16 -> 0-9,a-f
console.log(0xffffff);
console.log(new Number(64).toString(16));

let number5 = BigInt(1000000000000000000000000000000000000000000); // BigInt
let number6 = 0x000000000000055558888n; // BigInt
console.log(typeof number5); // BigInt

let number7 = 10.000123;
let number8 = 1000000;
console.log(number8.toString());
console.log(number8.toExponential());
console.log(number7.toFixed(2));
console.log(number8.toPrecision(8));
console.log(Number("100.1"));
console.log(parseInt("-1000.2222 mohammad 1"));
console.log(parseFloat("-1000.2222 mohammad 1"));
console.log(Number.parseInt(number7)); // --++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++--++

console.log(Number.EPSILON); // 1 -> 1.00000000000001
console.log(Number.MAX_VALUE); // < Infinity
console.log(Number.MIN_VALUE); // > Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // - Infinity
console.log(Number.isNaN(Number.NaN)); // NaN

function sum(first, second) {
  return first + second;
}

// Strings
let text = "The quick brown fox jumps over the lazy dog";

console.log(text.indexOf("fox", 0));
console.log(text.lastIndexOf("o"));
console.log(text.indexOf("***"));

console.log(text.search("fox"));

console.log(text.match("fox"));

console.log(text.includes("fox"));
console.log(text.includes("mohammad"));

console.log(text.startsWith("The"));
console.log(text.endsWith("dog"));
