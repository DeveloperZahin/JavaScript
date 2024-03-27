function myfunction() {
    console.log("Hello World!");
    console.log("Learning JavaScript");
}

myfunction();

function message(msg) { // Parameter -> input
    console.log(msg);
}

message("Hello World!");

function sum(x, y) {
    console.log(x+y);
}

sum(10, 20);

// Arrow Functions

const sum2 = (x, y) => {
    console.log(x+y);
}

sum2(9, 20);

// Arrow Functions
const add = (a, b) => a + b;

const result = add(5, 3);
console.log(result); // Output: 8
