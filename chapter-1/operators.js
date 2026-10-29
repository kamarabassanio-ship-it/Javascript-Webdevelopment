// OPERATORS

// 1. Mathematical Operators
// Addition operator (+)
let num1 = 20;
let num2 = 10;
let sum = num1 + num2 // Additional Operator usage
let difference = num1 - num2; // Subtraction Operator usag
let product = num1 * num2; // Multiplication Operator usage
let quotient = num1 / num2; // Division Operator usage
let remainder = num1 % num2; // Moduls Operator usage

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

// Comparison Operator

console.log(num1 > num2) // Greater than Operator usage
console.log(num1 < num2) // less than Operator usage
console.log(num1 >= num2) // Greater than 0r Equal operator usage
console.log(num1 <= num2) // Less than or Equal operator usage
console.log(num1 == num2) // Equal to operator or Loose Equal usage
console.log(num1 === num2) // Equal to operator or Strict Equal usage

console.log("----------------------")

let number = '9'
console.log(number == 9) // True - Loose equality check
console.log(number === 9) // False - Strict equality check

// Logical Operator
let email= "amkam@lenosole.com"
let password = "123456789"



//The Logical AND(&) Operator - Only returns true when both conditions are true true
console.log(email === "amadu@lenosole.com" && password === "123456789") // False;
console.log(email === "amadu@lenosole.com" && password === 123456789) // False
console.log(email === "amadu@lenosole.com" && password === "123456789") // True

console.log("xxxxxxxxxxxxxxxxxxxxx")

// The Logical OR (||) - only returns true when at least one condition is true and false when all conditions are false
console.log(email === "amadu@lenosole.com" || password === "123456789") // True
console.log(email === "amadu@lenosole.com" || password === 123456789) // True
console.log(email === "amadu@lenosole.com" || password === "123456789") // False


// The Logica NOT (!) - This operator bnegate a variable's value
let abuAge = 32
let marieAge = 23
let fodayAge = "34"


console.log(abuAge != marieAge) //True
console.log(abuAge != fodayAge) //False
console.log(abuAge !== fodayAge) //True