console.log("=== LOOPS ===\nloops are used to repeat a block of code multiple times until a condition becomes false.\nfor loop is used when the number of iterations is known using for (init; condition; increment).\nwhile loop runs while a condition is true using while (condition).\ndo while loop runs at least once before checking the condition.\nfor of loop is used to iterate over values in arrays or iterables.\nfor in loop is used to iterate over object keys.\nbreak is used to stop a loop and continue is used to skip the current iteration.\n");

// for 
for (let i = 0; i < 5; i++) {
  console.log(i);
};

//while
i = 0;
while (i < 5) {
  console.log(i);
  i++;
};

//for...of
let arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
};

//for...in
let obj = { name: "Aabid", age: 20 };
for (let key in obj) {
  console.log(key);
};

//do...while
i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

for (let i = 0; i < 5; i++) {
  console.log(i);
};

console.log("=== WHILE LOOP ===\na while loop repeatedly executes code as long as its condition remains true.\nsyntax: while(condition) { code }.\nexample: let i = 1; while(i <= 5) { console.log(i); i++; }.\nthe condition is checked before every iteration.\nif the condition becomes false, the loop stops.\nif the condition never becomes false, an infinite loop occurs which can freeze the browser or program.\nloops usually require updating variables inside the loop to eventually stop execution.\nthe debugger keyword and browser devtools can help visualize loop execution step by step.\n");

console.log("=== FOR LOOP ===\nfor loops are used to repeatedly execute code while a condition remains true.\nsyntax: for(initialization; condition; update) { code }.\nexample: for(let i = 0; i < 5; i++) { console.log(i); }.\nthe initialization runs once at the beginning.\nthe condition is checked before every iteration.\nthe update step usually increments or modifies the loop variable after each iteration.\nfor loops are more structured and compact than while loops because setup, condition, and update are written in one line.\nif the condition never becomes false, an infinite loop occurs.\n");

console.log("=== FOR LOOP MECHANICS ===\nin a for loop, initialization creates the loop variable and runs only once.\nexample: let i = 0.\nthe condition is checked before every iteration.\nexample: i < 10 determines whether the loop continues.\nthe increment/update step runs after each iteration.\nexample: i++ increases the variable by 1.\nexecution flow follows: initialize -> check condition -> run code -> update -> repeat.\nvariables declared with let inside the loop are block scoped and only exist within the loop block.\nmissing the update step can create an infinite loop.\n");

for (let i = 0; i < 3; i++) {
  console.log(i);
}

// console.log(i); 
// ❌ Error (i exists only inside the loop block)

console.log("=== DO WHILE LOOP ===\ndo...while loops execute the code block before checking the condition.\nthis guarantees the loop runs at least once.\nsyntax: do { code } while(condition).\nexecution flow: run code -> update variable -> check condition -> repeat if true.\nexample: let i = 1; do { console.log(i); i++; } while(i <= 3).\neven if the condition is initially false, the code block still executes once.\nthis is the main difference between while and do...while loops.\n");

console.log("=== DO WHILE VS WHILE VS FOR ===\ndo...while loops are useful when code must execute at least once before checking the condition.\nexample use cases include input validation, retry systems, and menu driven programs.\nwhile loops check the condition before execution, so the loop may run zero times if the condition is initially false.\nexample: let i = 10; while(i < 5) will never execute.\ndo...while checks the condition after execution, so it always runs at least once.\nfor loops are the most commonly used loops in javascript because they are compact and structured.\n");

console.log("=== LOOP VARIABLE SCOPE ===\nvariables declared with let inside a for loop are block scoped and exist only within the loop.\nexample: for(let i = 0; i < 3; i++) {} makes i inaccessible outside the loop.\nthis helps keep the environment cleaner and avoids unnecessary variable pollution.\nin while and do...while loops, variables are often declared outside the loop so they can be used in the condition.\nexample: let i = 0; while(i < 3) { i++; }.\nouter scoped variables continue to exist after the loop finishes.\nusing let is considered best practice because it provides safer block scoping and better memory management.\n");

console.log("=== FOR...OF LOOP ===\nfor...of is an ES6 loop used to iterate over iterable objects such as arrays, strings, maps, sets, and NodeLists.\nsyntax: for (const element of iterable) { ... }.\nthe loop directly provides values one by one instead of indexes.\nusing const or let inside the loop ensures proper block scoping.\na common naming convention is using plural names for collections and singular names for individual elements, such as fruits and fruit.\nstrings are iterable, so for...of can also loop through characters individually.\n");

console.log("=== FOR...IN LOOP ===\nfor...in is specifically designed for iterating over the keys/properties of an object.\nsyntax: for (const key in object) { ... }.\nthe loop provides property names, not values.\nto access the corresponding value, bracket notation must be used: object[key].\nfor...in is best suited for objects rather than arrays.\nfor arrays and iterable values, for...of is generally preferred.\nfor...in can be slower on large datasets because property enumeration may involve additional internal checks.\n");

console.log("=== MODERN OBJECT ITERATION METHODS ===\nObject.keys(obj) returns an array containing the object's keys.\nObject.values(obj) returns an array containing the object's values.\nObject.entries(obj) returns an array of [key, value] pairs.\nthese methods are commonly used with for...of loops, destructuring, and array methods like map() and forEach().\nmodern javascript often prefers these methods over for...in because they integrate naturally with array-based iteration patterns.\n");

console.log("=== in KEYWORD VS in OPERATOR ===\nalthough both use the word 'in', the for...in loop and the in operator serve different purposes.\nfor...in is used to iterate over the keys/properties of an object.\nthe standalone in operator checks whether a specific property exists inside an object and returns true or false.\nexample: 'firstName' in person checks for property existence.\nthe in operator checks whether the property exists, not whether its value is defined.\n");