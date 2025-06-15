console.log("hello world");

// Array
const array1 = [1, 2, 3, 4, 5];
const obj1 = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(array1[1]); // -> 2
console.log(obj1[1]); // -> 2

console.log(typeof array1); // -> object
console.log(typeof obj1); // -> object

array1[0] = 10;
obj1[0] = 10;

console.log(array1);
console.log(Array.isArray(array1)); // -> true
console.log(Array.isArray(obj1)); // -> false

console.log("Array length is :", array1.length);
console.log("Last item is :", array1[array1.length - 1]);

console.log(array1.toString().replaceAll(",", "-"));

const array2 = new Array(5);
const array3 = Array.from("test test");

array3.length = 3;
console.log(array3);

console.log(array1.at(0));
console.log("|" + array1.join("|") + "|");

console.log("Deleted value is :", array1.pop()); // Delete from last
console.log("New length is :", array1.push(6, 7, 8)); // Push to last
console.log("Delete value is:", array1.shift()); // Delete from first
console.log("New length is :", array1.unshift(1)); // Push to first
console.log(array1);

const array4 = [1, 2, 3];
array4[array4.length] = 4;
delete array4[2];
array4[1] = undefined;
console.log(array4);

console.log(array4.concat([0], 0, "0"));

array4.copyWithin(1, 0, 1); // target index, from - to
console.log(array4);

const array1D = [1, 2, 3]; // 1D
console.log(array1D[0]);

const array2D = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]; // 2D
console.log(array2D[0][0]);

const array3D = [
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
  [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ],
]; // 3D
console.log(array3D[0][0][0]);

console.log(array2D.flat());

array1.splice(4, 0, 5); // addition
console.log(array1);

array4.splice(2, 1); // deletion
console.log(array4);

console.log(array4.slice(1));

// Search
console.log(array1);

console.log(array1.indexOf(5));
console.log(array1.lastIndexOf(5));

console.log(array1.includes(5));
console.log(array1.includes("5"));

console.log("---------------------------");
console.log("Three search result :", array1.find(isThree));
console.log("---------------------------");
console.log("Three index search result :", array1.findIndex(isThree));
console.log("---------------------------");
console.log("Three Last search result :", array1.findLast(isThree));
console.log("---------------------------");
console.log("Three Last index search result :", array1.findLastIndex(isThree));
console.log("---------------------------");

function isThree(value) {
  console.log("finding x==3 by value of", value);

  if (value == 3) {
    return true;
  }

  if (value != 3) {
    return false;
  }
}

console.log("Custom function 1 : ", array1.find(getThreeIndex));
function getThreeIndex(value, index) {
  console.log("Searching for 3. value :", value, "index :", index);

  if (value == 3) {
    console.log("Index found! :", index);
    return true;
  }

  if (value != 3) {
    return false;
  }
}
console.log("---------------------------");

var customIndex = 0;
console.log("Custom function 2 : ", array1.find(getThreeIndex));
function getThreeIndex(value) {
  console.log("Searching for 3. value :", value);

  if (value == 3) {
    console.log("Found index! :", customIndex);
    return true;
  }

  if (value != 3) {
    customIndex += 1;
    return false;
  }
}
console.log("---------------------------");
