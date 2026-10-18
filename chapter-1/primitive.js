// Number in JS
console.log(2 + 4); // 6
console.log(2 * 6); // 12
console.log(26 - 7); // 19
console.log(26 / 2); // 13
console.log(7 % 2); // 1

// Number variables
let age = 23;
let anyNumber = 2;
let boolRes = age - anyNumber; // 21

// FIX 1: Changed '=>' (arrow function) to '>=' (greater than or equal to)
let res = boolRes >= 25;

console.log("-----------------");

console.log(res); // Will now correctly print: false

// checking Types of a variables
console.log(typeof res);

// FIX 2: Fixed typo from 'boolResr' to 'boolRes'
console.log(typeof boolRes);
console.log(typeof age);

// Number Variable Exercise 1
let myHeight = 5.5;
let myWeight = 4;

let boolVal = myHeight > myWeight;

console.log(boolVal);
console.log(typeof boolVal);

// Difference between let and const
// Update variable value

// FIX 3: Changed 'myAge' to 'ageVal' so it matches the console.log below it
let ageVal = 34;
console.log(ageVal); // 34

// Rename / update a variable
ageVal = 40;
console.log(ageVal); // 40

// const
const taxRate = 0.6;
console.log(taxRate); // 0.6

// taxRate = 0.9 // Leaving this commented out is correct, as changing a const causes an error!
console.log(taxRate);
 