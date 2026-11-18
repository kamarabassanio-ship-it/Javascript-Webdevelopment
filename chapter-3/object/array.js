// ARRAY
// Creating an Array
let students = new Array("KEM", "AMADU", "FODAY");
console.log(students);

// Array of Fruits
let fruits = ["Apple", "Banana", "Guava", "Pineapple"];
console.log(fruits);

// NOTE:
/*
1. The data store in an array are called elements
2. Array stores elements of any data type 
3. Elements store in an array are positional indexed based
4. The first elements  in an array is indexed at 0th position
5. Elements stored in an array are seperated with comma(,)
*/

let mixedData = [
  "Programming in Java",
  23,
  null,
  undefined,
  NaN,
  { Name: "Kem", age: 19 },
  { Name: "Angela", age: 23 },
  { Name: "James", age: 34 },
  ["Apple", "Banana", "Cassava"],
  students,
];
console.log(mixedData);

// Accessing Elements in an Array
console.log(fruits[1]); // printing the second element of an array
console.log(fruits[3]); // printing the fourth element of an array
console.log(mixedData[5]); // printing the sixth element of an array
console.log(mixedData[5].name); // printing the sixth element's object's property(name) of an array
console.log(mixedData[5].age); // printing the sixth element's object's property(age) of an array
console.log(mixedData[5].name); // printing the sixth element's object's property(name) of an array
console.log(mixedData[6].name); // printing the seventh element's object's property(name) of an array

// ADDING elements to the Array
let emptyFruits = [];

// push () method
emptyFruits.push("Banana");
emptyFruits.push("Mango");
emptyFruits.push("Orange");

console.log(emptyFruits);

// Removing elements from an Array
// pop() method
emptyFruits.pop(); // removes the last element in the array
emptyFruits.push("Isatu", "Fatu"); // adding two elements to the end of the array
emptyFruits.pop(); // removes the last last element in the array
console.log(emptyFruits);

// Adding elements to the start/beginning of the array
// unshift() method
emptyFruits.unshift("Plantain");
emptyFruits.unshift("Beans");

console.log(emptyFruits);

// Removing element at start/beginning of the array
emptyFruits.shift(); // removes element to the beginning of the array
emptyFruits.shift(); // removes element to the beginning of the array

// Exercise
let studentsDb = [];

console.log("**STUDENTSDB ARRAY*****");
studentsDb.push({
  Name: "Amadu Kamara",
  ID: 4564,
  Email: "amkam@gmail.com",
  PhoneNumber: +23274878828,
});
studentsDb.push({
  Name: "Fatu Kamara",
  ID: 45864,
  Email: "fakam@gmail.com",
  PhoneNumber: +23274778928,
});
studentsDb.push({
  Name: "Satu Kamara",
  ID: 45064,
  Email: "sakam@gmail.com",
  PhoneNumber: +23275878928,
});
studentsDb.push({
  Name: "Grace Kamara",
  ID: 45964,
  Email: "grkam@gmail.com",
  PhoneNumber: +23277878928,
});

console.log(studentsDb);
