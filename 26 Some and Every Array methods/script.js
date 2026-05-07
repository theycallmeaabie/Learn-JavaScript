let nums = [1,2,3,4,5];

let result = nums.some((num) => {
    return num > 4;
});

console.log(result);

nums = [2,4,6,7,8,10];

const hasOdd = nums.some((num) => {
    console.log("Checking:", num);
    return num % 2 !== 0;
});

console.log(hasOdd);

console.log("=== SOME() METHOD IN JAVASCRIPT ===\nsome() checks whether at least one element in an array passes a condition.\nit executes a callback function on every element until a true value is found.\nif at least one element passes the test, some() returns true.\nif no elements pass the test, some() returns false.\nsome() uses short-circuiting and stops immediately after finding the first true condition.\nthis improves efficiency because unnecessary iterations are avoided.\nsyntax:\narray.some((element, index, array) => {})\nparameters:\n- element -> current item\n- index -> current position\n- array -> original array\nsome() is commonly used for validation, searching conditions, and detecting invalid data.\nsome() returns a boolean value, not an array.\n");

nums = [2,4,6,8];

result = nums.every((num) => {
    return num % 2 === 0;
});

console.log(result);

const ages = [21, 25, 19, 17];

const allAdults = ages.every((age) => {
    return age >= 18;
});

console.log(allAdults);

console.log("=== EVERY() METHOD IN JAVASCRIPT ===\nevery() checks whether all elements in an array pass a condition.\nit executes a callback function on each element.\nif all elements pass the condition, every() returns true.\nif even one element fails the condition, every() immediately returns false.\nevery() uses short-circuiting and stops at the first false result.\nthis improves efficiency by avoiding unnecessary iterations.\nsyntax:\narray.every((element, index, array) => {})\nparameters:\n- element -> current item\n- index -> current position\n- array -> original array\nevery() is commonly used for validation, consistency checks, and verifying complete datasets.\nevery() returns a boolean value, not an array.\n");