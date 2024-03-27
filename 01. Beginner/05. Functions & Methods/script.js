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


// Vowels counting
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const myString = "Hello, how are you?";
console.log("Number of vowels:", countVowels(myString)); // Output: 7

