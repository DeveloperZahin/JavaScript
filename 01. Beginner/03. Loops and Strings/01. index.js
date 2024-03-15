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






