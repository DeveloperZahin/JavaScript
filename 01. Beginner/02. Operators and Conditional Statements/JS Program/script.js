// JS Program

let score = prompt("Enter a score");
let grade;

if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 70 && score <= 89) {
    grade = 'B';
} else if (score >= 60 && score <= 69) {
    grade = 'C';
} else if (score >= 50 && score <= 59) {
    grade = 'D';
} else if (score >= 0 && score <= 49) {
    grade = 'F';
}

if (score >= 0 && score <= 100) {
    console.log("Accorting to your scores, your grade was :", grade);
} else {
    console.log("Invalid score");
}
