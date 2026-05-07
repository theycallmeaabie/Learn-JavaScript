const oldUsers = ["Aabid", "Sara"];

const newUsers = [...oldUsers, "Rahul"];

console.log(newUsers);

console.log("=== COMBINING ARRAYS WITH SPREAD OPERATOR ===\nthe spread operator (...) expands array elements individually.\nit can be used to combine arrays into a new array.\nsyntax:\n[...arr1, ...arr2]\nspread creates a new array and does not modify the original arrays.\nmultiple arrays can be combined easily using multiple spread operators.\nextra values can also be inserted while combining arrays.\nspread syntax is cleaner and more flexible than concat().\nspread is commonly used in React, immutable programming, and data merging.\nthe spread operator works by expanding array elements into a new array.\n");

const word = "hello";

const reversed = [...word]
    .reverse()
    .join("");

console.log(reversed);

console.log("=== ARRAYS AND STRINGS WITH SPREAD OPERATOR ===\nthe spread operator (...) expands iterable values into individual elements.\nspread can combine multiple arrays into a new array.\nsyntax:\n[...arr1, ...arr2]\nspread syntax is cleaner and more readable than concat().\nspread can also create shallow copies of arrays.\nsyntax:\n[...array]\na shallow copy copies top-level elements but nested objects or arrays still share references.\nstrings are iterable and can also be spread.\nspreading a string breaks it into individual characters.\nexample:\n[...'hello'] -> ['h','e','l','l','o']\nspread operator is commonly used in React, immutable programming, and data manipulation.\n");


const user = {
    name: "Aabid"
};

const copy = {...user};

copy.name = "Sara";

console.log(user);
console.log(copy);

console.log("=== OBJECTS AND THE SPREAD OPERATOR ===\nthe spread operator (...) can copy and merge objects.\nsyntax:\n{...object}\nspread creates a new object without modifying the original.\nnew properties can be added while copying objects.\nexisting properties can also be overridden.\nlater properties overwrite earlier ones during object merging.\nspread operator is commonly used in React, Redux, and immutable programming.\nobject spread performs only a shallow copy.\nshallow copy means top-level properties are copied, but nested objects still share references.\nmodifying nested objects in the original or copied object affects both because the nested reference is shared.\nspread is safe for flat objects but not for deep cloning nested structures.\n");

function greet(firstName, lastName) {
    console.log(firstName, lastName);
}

const names = ["Aabid", "Khan"];

greet(...names);

console.log("=== FUNCTION CALLS, SPREAD, AND REST PARAMETERS ===\nthe spread operator (...) can expand array elements into individual function arguments.\nthis is useful when a function expects separate arguments but values are stored inside an array.\nexample:\nfunctionCall(...array)\nspread converts array elements into separate values during function calls.\nspread is commonly used with functions like Math.max() and Math.min().\nspread also works with strings because strings are iterable.\nspread and rest parameters both use (...) but serve different purposes.\nspread is used when calling functions to expand values.\nrest parameters are used when defining functions to collect multiple arguments into an array.\nspread expands outward, while rest collects inward.\n");

// Spread Operator

// Used when:

// CALLING functions
// EXPANDING values

// Rest Parameters

// Used when:

// DEFINING functions
// COLLECTING multiple arguments


// function test(a, b) {
//     console.log(a, b);
// }

// const user = {
//     name: "Aabid",
//     age: 21
// };

// test(...user);

console.log("=== LIMITATIONS OF SPREAD IN FUNCTION CALLS ===\nspread operator in function calls only works with iterable values.\narrays and strings are iterable, so they can be spread into function arguments.\nplain JavaScript objects are not iterable.\nattempting to spread a normal object directly into a function call causes a TypeError.\nexample:\nfunctionCall(...object) -> error\nobject spread still works inside object literals for copying and merging properties.\nObject.values(object) can convert object values into an array, which can then be spread into function calls.\nfunction-call spreading and object spreading behave differently depending on context.\n");