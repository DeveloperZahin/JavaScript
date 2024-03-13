// Arithmetic Operators: These operators perform arithmetic operations on numeric operands.
console.log("Arithmetic Operators");
    let a = 10;
    let b = 5;

    // Addition
    let sum = a + b; // sum is 15
    console.log(sum);

    // Subtraction
    let difference = a - b; // difference is 5
    console.log(difference);

    // Multiplication
    let product = a * b; // product is 50
    console.log(product);

    // Division
    let quotient = a / b; // quotient is 2
    console.log(quotient);

    // Modulus (Remainder)
    let remainder = a % b; // remainder is 0
    console.log(remainder);


// Assignment Operators: These operators assign values to variables.
    console.log("Assignment Operators");
    let c = 10;
    c = c + 5; // Equivalent to x = 10 + 5, x is now 15
    console.log(c);

// Increment and Decrement Operators: These operators perform increment and decrement operations on numeric operands.
    console.log("Increment and Decrement Operators");
    let x = 10;
    x++; // Equivalent to x = x + 1, x is now 11
    console.log(x);
    x--; // Equivalent to x = x - 1, x is now 9
    console.log(x);
    x += 5; // Equivalent to x = x + 5, x is now 15
    console.log(x);
    x -= 5; // Equivalent to x = x - 5, x is now 10
    console.log(x);

// Comparison Operators: These operators compare two values and return a Boolean result.
    console.log("Comparison Operators");
    let n = 10;
    let m = 5;
    console.log(n ==m); // True
    console.log(n!= m); // False
    console.log(n > m); // True

// Unary Operators: These operators act on a single operand.
    console.log("Unary Operators");
    let z = 5;

    // Unary plus
    console.log(+z); // 5

    // Unary minus
    console.log(-z); // -5

    // Increment
    console.log(++z); // 6

    // Decrement
    console.log(--z); // 5

// Ternary Operators: These operators act on a single operand.
    console.log("Ternary Operators");
    let age = 21;
    let result = age >= 18 ? "You are adult." : "You are not Adult.";
    console.log(result); // You are adult

// Logical Operators: These operators are used to perform logical operations.
    console.log("Logical Operators with if statement");
    // AND operator (&&)
    let p = 5;
    let q = 10;

    if (p > 0 && q > 0) {
        console.log("Both p and q are positive.");
    } else {
        console.log("At least one of p and q is not positive.");
    }

    // OR operator (||)
    let isRaining = true;
    let isSnowing = false;

    if (isRaining || isSnowing) {
        console.log("It's either raining or snowing.");
    } else {
        console.log("It's neither raining nor snowing.");
    }

    // NOT operator (!)
    let isLogged = false;

    if (!isLogged) {
        console.log("User is not logged in.");
    } else {
        console.log("User is logged in.");
    }

// Check if, else if and else
    function calculateGrade(marks) {
        let grade;
    
        if (marks >= 90) {
            grade = 'A+';
        } else if (marks >= 80) {
            grade = 'A';
        } else if (marks >= 70) {
            grade = 'B';
        } else if (marks >= 60) {
            grade = 'C';
        } else if (marks >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }
    
        return grade;
    }
    
    // Example usage:
    let studentMarks = 75;
    let studentGrade = calculateGrade(studentMarks);
    console.log(`Student marks: ${studentMarks}, Grade: ${studentGrade}`);
    