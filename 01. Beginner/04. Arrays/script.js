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

while (idx < value.length) {
    console.log(`Value at index ${idx} = ${value[idx]}`);
    idx++;
}

