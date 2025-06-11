console.log("hello world");

// functions
function firstFunction(first, second, third) {
  console.log("passed value is : ", first);
  console.log("passed object is : ", third);

  return first + second;
}
const returnValue = firstFunction(1, 2, {
  test: "test",
});
console.log(returnValue);

let secondFunction = function (first, second) {
  return first + second;
};
console.log(secondFunction(12, 12));

const thirdFunction = (first, second) => {
  return first + second;
};
console.log(thirdFunction(0, 3));

const fourthFunction = (first, second) => first + second;
console.log(fourthFunction(2, 2));

// objects
let user = {
  age: 20,
};
user.firstname = "mohammad"; // -> property
user.middlename = "reza"; // -> property
user.fullname = function () {
  // -> method
  return user.firstname + user.middlename;
};
console.log(user.fullname());

delete user.age;
console.log(user);

const user2 = {
  firstname: "mohammad",
  middlename: "javad",
  fullname: function () {
    return this.firstname + this.middlename;
  },
  "nick name": "uryzen",
};
console.log(user2.fullname());
console.log(user2["nick name"]);

const emptyObject = new Object();
console.log(emptyObject);

// strings
console.log("STRINGS");
const username = "mohammad";
const text1 = new String("hello world");
const text2 = new String(`hello world`);
console.log(`hello ${username} welcome back`);

console.log('this is a double cout mark " '); // \"
console.log("\t1\n\t2");

let text = "The quick brown fox jumps over the lazy dog";
console.log(text.length);

console.log(text.charAt(20));
console.log(text.at(-2));
console.log(text[0]);

console.log(text.slice(4, 15));
console.log(text.substring(4, 15));
console.log(text.substr(4, 11));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.slice(0, 3).concat(" ", text.slice(40)));
console.log("    \ttest   \t   ".trim());
console.log("    \ttest   \t   ".trimStart());
console.log("    \ttest   \t   ".trimEnd());

console.log(text.padStart(50, "^").padEnd(57, "^"));
console.log("-*^*-".repeat(5));

console.log(text.slice(0, 40).concat(" ", "fox"));
console.log(text.replace("dog", "fox"));
console.log(text.replaceAll("o", "0"));

console.log(text.split(""));
