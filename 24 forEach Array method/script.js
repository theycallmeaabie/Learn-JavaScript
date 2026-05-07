const numbers = [1, 2, 3];

numbers.forEach((num) => {
    console.log(num);
});

const fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index, arr) => {
    console.log("Fruit:", fruit);
    console.log("Index:", index);
    console.log("Original Array:", arr);
});

const users = ["Aabid", "Rahul", "Sara"];

users.forEach((user) => {
    console.log(`Welcome ${user}`);
});

console.log("=== FOREACH() IN JAVASCRIPT ===\nforEach() is a built-in array method used to iterate through arrays.\nit executes a callback function once for every element in the array.\nsyntax:\narray.forEach((element, index, array) => {})\nparameters:\n- element -> current item\n- index -> current position\n- array -> original array\nforEach() improves readability compared to traditional loops.\nit is commonly used for logging, DOM operations, and side effects.\nforEach() cannot use break or continue because it is not a real loop statement.\nforEach() always returns undefined.\nif you need to transform data into a new array, use map() instead.\n");

console.log("=== THE NATURE OF FOREACH() RETURNS ===\nforEach() does not return a value and always returns undefined.\nit is designed for executing code and side effects, not for transforming arrays.\nreturn statements inside the callback only return from the callback function itself.\nforEach() ignores all callback return values.\nif you need a new transformed array, use map() instead of forEach().\nforEach() is commonly used for logging, DOM manipulation, updating variables, and running side effects.\n");

console.log("=== FOREACH() VS MAP() ===\nforEach() and map() both iterate through arrays and execute a callback for every element.\nforEach() is mainly used for side effects like logging, DOM updates, or modifying variables.\nforEach() does not return a new array and always returns undefined.\nmap() is used for transforming data and creating a new array.\nmap() stores the callback return values into a new array and returns it.\nuse forEach() when you only want to execute code.\nuse map() when you want transformed data returned as a new array.\nmap() always returns an array, while forEach() returns undefined.\nThe original array remains unchanged in both cases.\n");

console.log("=== POLYFILLS IN JAVASCRIPT ===\na polyfill is a custom implementation of a built-in JavaScript feature.\npolyfills help developers understand how methods work behind the scenes.\nthey are commonly used for learning internal JavaScript behavior and supporting older browsers.\npolyfills usually recreate built-in methods using loops, callbacks, and prototypes.\nArray.prototype is commonly used when creating custom array method polyfills.\ninside array polyfills, this refers to the array calling the method.\nreal JavaScript engine implementations are much more optimized than educational polyfills.\npolyfills are considered an advanced JavaScript topic.\ncommon polyfill interview topics include map(), filter(), reduce(), bind(), call(), and Promise.\n");