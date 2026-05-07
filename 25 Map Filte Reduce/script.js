console.log("=== NON-DESTRUCTIVE METHODS IN JAVASCRIPT ===\nnon-destructive methods do not modify the original array or object.\ninstead, they return a new value or new array while keeping the original data unchanged.\nthese methods are important for safer and more predictable code.\ncommon non-destructive methods include map(), filter(), slice(), concat(), toSorted(), and toReversed().\nmap() and filter() create new arrays instead of modifying existing ones.\nnon-destructive methods are heavily used in React and functional programming.\nthis concept supports immutability, where original data should remain unchanged.\nnon-destructive methods may use more memory because they create new copies of data.\n");

let nums = [1, 2, 3];

const doubled = nums.map((num) => {
    return num * 2;
});

console.log(doubled);

console.log("=== MAP() METHOD IN JAVASCRIPT ===\nmap() executes a callback function on every element of an array and returns a new array.\nit is mainly used for transforming data.\nunlike forEach(), map() returns a new array containing callback return values.\nmap() is non-destructive, meaning the original array remains unchanged.\nsyntax:\narray.map((element, index, array) => {})\nparameters:\n- element -> current item\n- index -> current position\n- array -> original array\nreturned values from the callback become elements in the new array.\nif nothing is returned from the callback, the new array contains undefined values.\nmap() is commonly used in React, frontend development, API data transformation, and functional programming.\n");

// Think of filter() like a sieve.
nums = [1,2,3,4,5];

const even = nums.filter((num) => {
    return num % 2 === 0;
});

console.log(even);

const words = ["hi", "javascript", "cat", "elephant"];

const longWords = words.filter((word) => {
    return word.length > 3;
});

console.log(longWords);

const students = [
    {name: "Aabid", age: 21},
    {name: "Sara", age: 16},
    {name: "Rahul", age: 19}
];

const adults = students.filter((student) => {
    return student.age >= 18;
});

console.log(adults);

nums = [1,2,3,4,5];

const result = nums
    .filter((num) => {
        return num % 2 === 0;
    })
    .map((num) => {
        return num * 10;
    });

console.log(result);

console.log("=== FILTER() METHOD IN JAVASCRIPT ===\nfilter() creates a new array containing elements that pass a condition.\nit executes a callback function on every element.\nif the callback returns true, the element is included in the new array.\nif the callback returns false, the element is excluded.\nfilter() is non-destructive and does not modify the original array.\nsyntax:\narray.filter((element, index, array) => {})\nparameters:\n- element -> current item\n- index -> current position\n- array -> original array\nfilter() is commonly used for selecting specific data from arrays.\nit is heavily used with objects, APIs, and frontend applications.\narray methods can be chained together, such as filter().map().\nchaining improves readability and enables efficient data processing.\n");

nums = [1,2,3,4];

const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

nums = [1,2,3,4];

const product = nums.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1);

console.log(product);

console.log("=== REDUCE() METHOD IN JAVASCRIPT ===\nreduce() reduces an array into a single final value.\nit executes a reducer function on every element of the array.\nsyntax:\narray.reduce((accumulator, currentValue) => {}, initialValue)\nparameters:\n- accumulator -> stores running result\n- currentValue -> current element being processed\n- initialValue -> starting accumulator value\non every iteration, the returned value becomes the next accumulator.\nif initialValue is omitted, the first array element becomes the accumulator.\nreduce() is commonly used for summation, multiplication, counting, grouping, and data transformation.\nreduce() can return numbers, strings, objects, arrays, or any datatype.\nit is considered one of the most powerful and advanced array methods in JavaScript.\nproviding an initial value is generally safer and recommended.\n");