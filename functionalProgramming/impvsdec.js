//  check wherter the square of the number is even or not.

// Imperative Way
const num = 4;
const numSquared = num * num;
let isEven;

if (numSquared % 2 == 0) {
  isEven = true;
} else {
  isEven = false;
}
console.log(isEven);

//  Declrative Way is short simple and clean it focuses only on the result a developer wanted not the step by step procedure to solve a particular problem.
const isSquare = (x) => ((x * x) % 2 === 0 ? true : false);
console.log(isSquare(4));