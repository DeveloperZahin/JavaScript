// For Loop
console.log("For Loop");

for (let i = 0; i < 5; i++) {
  console.log("Iteration: ", i);
}




// While Loop
console.log("While Loop");

let count = -3;
while (count <= 3) {
  console.log("Count: ", count);
  count++; // Increment count
}




// Do While Loop
console.log("Do While Loop");

let num = 4;
do {
  console.log("Number: ", num);
  num++; // Increment num
} while (num <= 3);




// For of Loop
console.log("For of Loop");

let str = "JavaScript";
let charCount = 0; // Declare and initialize size variable

for (let char of str) {
  console.log("Character: ", char); // Use string interpolation
  charCount++;
}
console.log("String Size =", charCount);




// For Each Loop

console.log("For Each Loop");

const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}




// For in Loop
console.log("For in Loop");

const person = {
  name: "Zahin",
  age: 21,
  job: "Software Engineer"
};

for (const data in person) {
  console.log("Data=", data, "  Value=", person[data]);
}




// Practice Question1
// Print Even Number
console.log("Print Even Number");

let number = 0;
while (number <= 10) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}

// Old Number
console.log("Old Number");

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


/*// Guess the numbers game
console.log("Guess Number Game!");

// Generate a random number between 1 and 100 (inclusive)
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Set maximum number of guesses
const maxGuesses = 10;

// Loop for guessing attempts
for (let guessCount = 1; guessCount <= maxGuesses; guessCount++) {
  // Get user's guess and convert to a number
  const guess = parseInt(prompt(`Guess #${guessCount} (1-100): `));

  // Check guess and provide feedback
  if (guess === randomNumber) {
    console.log(`You win! The number was ${randomNumber}`);
    break; // Exit loop on correct guess
  } else if (guess < randomNumber) {
    console.log("Guess is low. Try again.");
  } else {
    console.log("Guess is high. Try again.");
  }

  // Announce used guesses if the loop ends due to exceeding the limit
  if (guessCount === maxGuesses) {
    console.log(`Out of guesses! The number was ${randomNumber}`);
  }
} */




// String 

console.log("--------------------String------------------");

let name = "Mohammad Zahin";

console.log(name);
console.log(name.length);

console.log(name[9]);


// Template Literals 
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Mohammad Zahin!




//////////////////////////////////////////////// String Methods in JS ////////////////////////////////////////////////
// 1. toUpperCase() and toLowerCase() - These methods convert a string to all uppercase or lowercase letters, respectively.
const message = "This is a message.";

console.log(message.toUpperCase());             // Output: THIS IS A MESSAGE.
console.log(message.toLowerCase());             // Output: this is a message.

// 2. trim() - The trim() method removes leading and trailing whitespace characters (spaces, tabs, newlines) from a string.
const messySentence = "  Extra spaces everywhere!  ";

console.log(messySentence.trim());              // Output: Extra spaces everywhere!

// 3. slice() - The slice() method extracts a section of a string and returns a new string. It takes two arguments
const title = "JavaScript: The Definitive Guide";

console.log(title.slice(0, 11));                // Output: JavaScript:
console.log(title.slice(12));                   // Output: The Definitive Guide

// 4. concat() - The concat() method joins two or more strings and returns a new string.
const firstName = "John";
const lastName = "Doe";

console.log(firstName.concat(" ", lastName));   // Output: John Doe

// 5. indexOf() and lastIndexOf() - These methods search for a substring within a string and return the index of the first or last occurrence, respectively. They return -1 if the substring is not found.
const searchString = "apple is a fruit, but banana is not";

console.log(searchString.indexOf("apple"));     // Output: 0
console.log(searchString.lastIndexOf("apple")); // Output: 6

// 6. replace() - The replace() method allows you to replace a part of a string with another string.
const slogan = "JS: Making web development fun";

console.log(slogan.replace("fun", "easier"));   // Output: JS: Making web development easier

// 7. str.charAt(idx) - The charAt(idx) method returns a single character as a string, not the character's numerical code.
const char = "Hello, world!";

const firstChar = char.charAt(0); // H
const fifthChar = char.charAt(4); // o

console.log(firstChar); // Output: H
console.log(fifthChar); // Output: o
