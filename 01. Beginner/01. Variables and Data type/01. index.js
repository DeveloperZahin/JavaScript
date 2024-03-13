// Declaring variables with different scopes and mutability

// **var (function-scoped, avoid using):**
var name = "John"; // Function-scoped, accessible throughout the entire code

// **let (block-scoped, can be reassigned):**
let age = 40;      // Block-scoped (within this code block)
age = 30;          // Reassigning is allowed with `let`

// **const (block-scoped, cannot be reassigned):**
const student = true; // Block-scoped, cannot be reassigned (attempting will cause an error)
// var student = true;  // This would cause a reassignment error because const cannot be changed

// Additional variable declarations
var isAdult = true;
var address = null;
var job; // Declared without initialization, defaults to undefined

// Checking data types and printing values
console.log(typeof name,    name);    // "string"
console.log(typeof age,     age);     // "number" (after reassignment)
console.log(typeof student, student); // "boolean"
console.log(typeof address, address); // "object"
console.log(typeof job,     job);     // "undefined"




// Const Example
const profile = {
    firstName: "Mohammad",
    lastName: "Zahin",
    username: "@MohammadZahin",
    isFollow: true,
    followers: 500,
    following: 200,
  };
  
  profile.followers = 550; // Modifying the 'followers' property
  console.log(profile); // Output: { ... (updated followers count) }
    