// Challenge 1: Even Number Finder (While Loop)
let num = 1;

while (num <= 50) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

// Challenge 2: PIN Validator (Do-While Loop)
const correctPIN = "1234";
let userPIN;

do {
  userPIN = prompt("Challange2: Please enter your PIN:");
} while (userPIN !== correctPIN);

console.log("PIN accepted. Access granted.");

// Challenge 3: Multiplication Table with Skips (For Loop + Continue)
userNum = prompt("Challange3: Please enter a number:");

for (let i = 1; i <= 10; i++) {
  const product = userNum * i;
  if (product % 5 === 0) {
    continue;
  }
  console.log(`${userNum} x ${i} = ${product}`);
}

// Challenge 4: Positive/Negative Number Checker (If-Else)
const userInput = prompt("Challange4: Please enter a number:");
const numToCheck = parseFloat(userInput);

if (numToCheck > 0) {
  console.log("The number is positive.");
} else if (numToCheck < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Challenge 5: Month Finder (Switch Statement)
const monthNum = parseInt(
  prompt("Challange5: Please enter a number between 1 and 12:")
);

switch (monthNum) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid input.");
}
