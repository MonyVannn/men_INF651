// 1. Variables and Data Types
let student = "Monyvann";
let age = 22;
let isStudent = true;

console.log("Student name: ", student, " has a type of ", typeof student);
console.log("Student age: ", age, " has a type of ", typeof age);
console.log(
  "Whether they are a student?: ",
  isStudent,
  " has a type of ",
  typeof isStudent
);

// 2. Basic Arithmetic Operations
let num1 = 10;
let num2 = 20;

addition = num1 + num2;
console.log("10 + 20 = ", addition);

substraction = num1 - num2;
console.log("10 - 20 = ", substraction);

multiplication = num1 * num2;
console.log("10 * 20 = ", multiplication);

division = num1 / num2;
console.log("10 / 20 = ", division);

// 3. Working with Strings
let str = "I am very lazy";
console.log("The length of this sentence is: ", str.length);
console.log("The first letter of this sentence is: ", str[0]);
console.log("The last letter of this sentence is: ", str[str.length - 1]);

// 4. Math Object
let negNum = -4;
console.log("The squared root of ", negNum, " is: ", Math.sqrt(negNum));
console.log("The number squared of ", negNum, " is: ", Math.pow(negNum, 2));
console.log("The absolute value of ", negNum, " is: ", Math.abs(negNum));

// 5. Boolean Logic and Comparison Operators
let a = 10;
let b = 20;
if (a > b) {
  console.log(a + " is greater than " + b);
} else if (a < b) {
  console.log(a + " is less than " + b);
} else {
  console.log(a + " is equal to " + b);
}

// 6. Logical Operators
let bool1 = true;
let bool2 = false;
console.log("bool1 AND bool2: ", bool1 && bool2);
console.log("bool1 OR bool2: ", bool1 || bool2);
console.log("NOT bool1: ", !bool1);
console.log("NOT bool2: ", !bool2);

// 7. Using Template Literals
let firstName = "Mony";
let lastName = "Vann";
let greetingMessage = `Hello, my name is ${firstName} ${lastName}.`;
console.log(greetingMessage);
