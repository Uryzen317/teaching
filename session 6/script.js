console.log('Session 6');

// Review
let myArray = [0, 1, 2, 3, 4];
console.log(myArray)

let shomarande = 0;
myArray.find(findThree); // go to 9;

function findThree(elem) {
    if (elem == 3) {
        console.log('Target is found at', shomarande)
    }
    if (elem != 3) {

    }

    shomarande += 1;
}

// Date
const date = new Date(
    // year,
    // month,
    // day,
    // hour,
    // minute,
    // second,
    // ms,
    // '2025-01-01',
    // 10000000000000,
);
console.log(date)
console.log(date.getTime())
console.log(date.toISOString())

// Math
let x = 4.6;
console.log(Math.round(x))
console.log(Math.ceil(x))
console.log(Math.floor(x))
console.log('random :', Math.random() * 100)

console.log(Math.trunc(x)) // .toFixed(0)
console.log(Math.abs(x));

console.log(Math.sin(x))
console.log(Math.cos(x))
console.log(Math.tan(x))
console.log(Math.asin(x))
console.log(Math.acos(x))
console.log(Math.sinh(x))
console.log(Math.cosh(x))
console.log(Math.pow(Math.sin(x), 2))
console.log(Math.pow(Math.cos(x), 2))
console.log(Math.sqrt(x));
console.log(Math.log(x))
console.log(Math.log2(x));

console.log(Math.min(0, 1, 3, 4, 5, 5))
console.log(Math.max(4, 1, 6, 7, 77, 8))

console.log('*'.repeat(15), 'Conditions', '*'.repeat(15))

// Conditions
const myBool = true;
if (1 == true) {
    console.log('values are equal')
}
if (1 === true) {
    console.log('Values and types are equal')
}
if (!myBool) {
    console.log('if condition')
} else {
    console.log('else condition')
}

// switch case
let myTarget = 20;
switch (myTarget) {
    case 0: {
        console.log('target is 0')
        break;
    }
    case 1: {
        console.log('target is 1')
        break;
    }
    case 2: {
        console.log('target is 2')
        break;
    }
    case 3: {
        console.log('target is 3')
        break;
    }
    default: {
        console.log('target value is out of range')
    }
}

console.log('*'.repeat(15), 'Loops', '*'.repeat(15))

// Loops
const myArray2 = ['a', 'b', 'c', 'd', 'e']

for (let counter = 0; counter < 5; counter++) {
    console.log('for loop:', counter)
}

for (let elem of myArray2) {
    console.log('for of loop:', elem)
}

for (let index in myArray2) {
    console.log('for in loop:', index)
}

myArray2.map((elem, _index, _self) => {
    console.log('map loop:', elem)
})

myArray2.forEach((elem, _index, _self) => {
    console.log('forEach loop:', elem)
})

let globalWhileCounter = 0;
while (globalWhileCounter < 5) {
    console.log('while counter:', globalWhileCounter)
    globalWhileCounter++;
}

// for (; ;) {
//     console.log('infinite loop')
// }