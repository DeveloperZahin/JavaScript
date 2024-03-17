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
