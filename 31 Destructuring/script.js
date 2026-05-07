// Without Destructuring
// const colors = ["red", "blue", "green"];

// const first = colors[0];
// const second = colors[1];

// console.log(first);
// console.log(second);

// With Destructuring
let colors = ["red", "blue", "green"];

let [first, second] = colors;

console.log(first);
console.log(second);

console.log("=== DESTRUCTURING IN JAVASCRIPT ===\ndestructuring is an ES6 feature used to extract values from arrays or properties from objects into variables.\nit provides cleaner and more concise syntax.\narray destructuring extracts values based on position.\nsyntax:\nconst [a, b] = array\nobject destructuring extracts values based on property names.\nsyntax:\nconst {name, age} = object\ndestructuring supports skipping values, default values, renaming variables, and nested extraction.\nrest operator can also be used in destructuring to collect remaining values.\ndestructuring improves readability and reduces repetitive code.\nit is heavily used in React, APIs, and modern JavaScript development.\n");

colors = ["red", "blue", "green"];

[first, , third] = colors;

console.log(first);
console.log(third);

console.log("=== ARRAY DESTRUCTURING IN JAVASCRIPT ===\narray destructuring is an ES6 feature used to unpack array elements into variables.\nsyntax:\nconst [a, b, c] = array\narray destructuring extracts values based on position.\nvariable names can be anything because arrays do not use property names.\narray destructuring is cleaner than manually accessing indexes like array[0].\nvalues can be skipped using empty commas.\nexample:\nconst [a, , b] = array\nmissing elements become undefined unless default values are provided.\nrest operator can collect remaining elements into an array.\narray destructuring is commonly used in React, function returns, swapping variables, and modern JavaScript.\n");

// Without Destructuring
// const user = {
//     name: "Aabid",
//     age: 21
// };

// const name = user.name;
// const age = user.age;

// console.log(name);
// console.log(age);

// With Destructuring
const user = {
    name: "Aabid",
    age: 21
};

let {name, age} = user;

console.log(name);
console.log(age);

const {
    name: userName,
    age: userAge
} = user;

console.log(userName);
console.log(userAge);

const user2 = {
    name: "Aabid",
    address: {
        city: "Bangalore",
        state: "Karnataka"
    }
};

const {
    address: {city}
} = user2;

console.log(city);

const student = {
    name: "Sara",
    marks: {
        math: 90
    }
};

const {
    marks: {math}
} = student;

console.log(math);

console.log("=== OBJECT DESTRUCTURING IN JAVASCRIPT ===\nobject destructuring is an ES6 feature used to extract object properties into variables.\nsyntax:\nconst {name, age} = object\nobject destructuring works based on property names, not positions.\nvariable names must match object property names unless custom naming is used.\ncustom variable names use colon syntax.\nexample:\nconst {name: userName} = object\nmissing properties return undefined unless default values are provided.\ndefault values can be assigned during destructuring.\nobject destructuring also supports nested destructuring for extracting values from nested objects.\nobject destructuring is commonly used in React, APIs, function parameters, and modern JavaScript.\n");

const nums = [10,20,30];

const {0: frst, 1: scnd} = nums;

console.log(frst);
console.log(scnd);

console.log("=== OBJECT-STYLE ARRAY DESTRUCTURING ===\narrays in JavaScript are special types of objects.\narray indexes behave like object keys such as 0, 1, 2, etc.\nbecause of this, arrays can technically be destructured using object destructuring syntax.\nexample:\nconst {0: first, 1: second} = array\nthis extracts values using index keys.\n0: first means first = array[0].\nthis syntax is valid JavaScript but is less common and less readable than normal array destructuring.\nnormal array destructuring using [] is generally preferred.\n");

// Without Destructuring
// function greet(user) {

//     const name = user.name;
//     const age = user.age;

//     console.log(name, age);
// }

// const user = {
//     name: "Aabid",
//     age: 21
// };

// greet(user);

// With Destructuring
function greet({name, age}) {
    console.log(name, age);
}

const user3 = {
    name: "Aabid",
    age: 21
};

greet(user3);

console.log("=== DESTRUCTURING IN FUNCTIONS ===\ndestructuring can be used directly inside function parameters.\nthis allows values to be extracted immediately when arguments are passed.\nobject destructuring in functions uses curly braces.\nexample:\nfunction test({name, age}) {}\narray destructuring in functions uses square brackets.\nexample:\nfunction test([a, b]) {}\nfunction destructuring improves readability and reduces repetitive property access.\ndefault values, nested destructuring, renaming, and rest operator can also be used inside function parameters.\nfunction destructuring is heavily used in React, APIs, and modern JavaScript development.\n");

console.log("=== KEY TAKEAWAYS OF DESTRUCTURING ===\ndestructuring improves code readability and reduces repetitive property or index access.\nit provides cleaner and shorter syntax for extracting values from arrays and objects.\narray destructuring relies on the order or position of elements.\nsyntax:\nconst [a, b] = array\nchanging the order of array elements changes destructuring results.\nobject destructuring relies on property names, not order.\nsyntax:\nconst {name, age} = object\nobject property order does not affect destructuring.\ndestructuring is heavily used in React, APIs, function parameters, and modern JavaScript development.\n");