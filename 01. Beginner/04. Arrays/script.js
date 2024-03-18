const fruits = ["apple", "banana", "orange"];
const firstFruit = fruits[0];                 // firstFruit will be "apple"
const lastFruit = fruits[fruits.length - 1];  // Accessing by length - 1

console.log(fruits);
console.log("First Fruit",firstFruit);
console.log("Last Fruit",lastFruit);


//////////////////////////////// looping over an array ////////////////////////////////
var myArray = [10, 20, 30, 40, 50];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


//////////////////////////////// Array exercises ////////////////////////////////
// 1
var marks = [10, 20, 30, 40, 50.5];
var sum = 0;

for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
}

console.log("Sum:", sum);

let avg = sum / marks.length;
console.log(`Average of marks = ${avg}`);


// 2
let value = [30, 40, 20, 55, 78];
let idx = 0;

for (let val of value) {
    console.log(`Value at index ${idx} = ${val}`);
    idx++;
}


//////////////////////////////// Array Methods ////////////////////////////////
// Push
console.log("---------- Push ----------");
const lunchBox = [];            // Create a lunch box array

// Pack some lunch using push
lunchBox.push("sandwich");
lunchBox.push("apple");
lunchBox.push("yogurt");

console.log(lunchBox);          // Output: ["sandwich", "apple", "yogurt"]

// Pop
console.log("---------- Pop ----------");
const afternoonSnack = lunchBox.pop(); // Take out the snack (yogurt) using pop

console.log(lunchBox);          // Output: ["sandwich", "apple"]
console.log(afternoonSnack);    // Output: "yogurt"

// To String
console.log("---------- To String ----------");
console.log(lunchBox.toString());

// Unshift
console.log("---------- Unshift ----------");
lunchBox.unshift("pizza");
console.log(lunchBox);          // Output: ["pizza", "sandwich", "apple"]

// Shift
console.log("---------- Shift ----------");
lunchBox.shift();
console.log(lunchBox);          // Output: ["sandwich", "apple"]

// concat
console.log("----------concat----------");
let array1 = ["pizza", "sandwich", "apple"];
let array2 = ["burger", "delicious"];
let array3 = ["apple", "chips"];

let concatarray = array1.concat(array2, array3);
console.log(concatarray);

// slice
console.log("----------slice----------");
let slicearray = concatarray.slice(1, 3);
console.log(slicearray);

// Splice
console.log("----------Splice----------");
let numbersList = [1, 2, 3, 4]; // Array of numbers

// Remove the second element (index 1)
numbersList.splice(1, 1);  // Start at index 1, remove 1 element
console.log(numbersList);  // Output: [1, 3, 4]

// Here's how to insert numbers:
numbersList.splice(1, 0, 2, 2.2);  // Insert at index 1, add 0 elements to remove first
console.log(numbersList);  // Output: [1, 2, 2.2, 3, 4] (Numbers are inserted)

// Replace the fourth element (index 3) with another number
numbersList.splice(3, 1, 3.3);  // Replace at index 3, remove 1 element, add 3.3
console.log(numbersList);  // Output: [1, 2, 2.2, 3.3, 4]

// Important note:
// - While you can use `splice` with a numbers list, inserting strings will cause errors because JavaScript tries to maintain type consistency within arrays.
