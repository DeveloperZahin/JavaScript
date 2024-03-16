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
