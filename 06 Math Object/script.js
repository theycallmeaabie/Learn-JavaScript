console.log("=== MATH OBJECT ===\nmath is a built in javascript object that provides constants and methods for mathematical operations.\nmath.pi gives the value of pi and math.sqrt2 gives the square root of 2.\nmath.sqrt(x) returns the square root of a number and math.pow(base, exponent) raises a number to a power.\nmodern javascript often uses the exponentiation operator ** instead of math.pow.\n");

console.log(Math);
console.log(Math.PI); // 3.141592653589793
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3),'\n'); // 8

console.log("=== ROUNDING METHODS ===\nmath.floor(x) always rounds down to the nearest integer. example: Math.floor(4.9) -> 4.\nmath.ceil(x) always rounds up to the next integer. example: Math.ceil(4.1) -> 5.\nmath.round(x) rounds to the nearest integer and rounds up if decimal is 0.5 or more. example: Math.round(4.5) -> 5.\n");

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5),'\n'); // 5

console.log("=== RANDOM NUMBERS ===\nmath.random() generates a pseudo random decimal between 0 inclusive and 1 exclusive.\nto generate a random integer in a range, multiply and use floor.\nexample: Math.floor(Math.random() * 21) generates a number between 0 and 20.\ngeneral formula: Math.floor(Math.random() * (max + 1)).\n");

console.log(Math.random()); // e.g., 0.3728...
let num = Math.floor(Math.random() * 21);
console.log(num,'\n'); // 0 to 20
// Math.floor(Math.random() * (max + 1))

console.log("=== SPECIAL VALUES ===\ninfinity represents a value larger than any number and occurs when dividing a positive number by 0. example: 10/0 -> Infinity.\nnan stands for not a number and represents an invalid numerical result. example: 0/0 -> NaN.\nboth infinity and nan are of type number in javascript.\n");

console.log(-10 / 0); // -Infinity
console.log(typeof -Infinity); // "number"
console.log(-Infinity < -1000000); // true
console.log(10 / 0); // Infinity
console.log(0 / 0);        // NaN
console.log("abc" * 2,'\n');    // NaN