function show(...values) {
    console.log(values);
}

show(1,2,3,4);


function test(first, second, ...others) {

    console.log(first);
    console.log(second);
    console.log(others);
}

test(1,2,3,4,5);

console.log("=== REST PARAMETERS IN JAVASCRIPT ===\nrest parameters use three dots (...) followed by a parameter name.\nsyntax:\nfunction test(...args) {}\nrest parameters collect multiple function arguments into a real array.\nthey were introduced in ES6 as a modern replacement for the arguments keyword.\nunlike arguments, rest parameters support array methods like map(), filter(), and reduce().\nrest parameters work in arrow functions.\nrest parameters must always be the last parameter in a function definition.\nrest parameters and spread operator both use (...), but they serve different purposes.\nrest parameters collect arguments into an array.\nspread operator expands arrays or iterable values into individual elements.\nrest collects inward, while spread expands outward.\n");

function sum(a, b, ...rest) {

    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);

}

sum(1,2,3,4,5);

function sum2(a, ...rest) {

    console.log(rest);

}

sum2(1);

console.log("=== PRACTICAL IMPLEMENTATION OF REST PARAMETERS ===\nrest parameters collect multiple function arguments into a real array.\nsyntax:\nfunction test(...args) {}\nrest parameters allow direct use of array methods like map(), filter(), and reduce().\nrest parameters must always be the final parameter in the function definition.\nplacing parameters after a rest parameter causes a syntax error.\nnormal parameters can be combined with a rest parameter.\nexample:\nfunction test(a, b, ...rest) {}\nfirst arguments are assigned normally, while remaining arguments are collected into the rest array.\nif no extra arguments are passed, the rest parameter becomes an empty array ([]), not undefined.\nthis behavior makes loops and array methods safer to use.\n");

console.log("=== COMPARISON WITH OLDER METHODS ===\nbefore ES6, developers commonly used the arguments keyword to handle multiple function arguments.\narguments is an array-like object, not a real array.\nit supports indexes and length but does not directly support array methods like map(), filter(), or reduce().\nto use array methods, developers often converted arguments into a real array using Array.from(arguments).\nArray.from() creates a real array from array-like objects.\nthis older approach required extra code and was less clean.\nES6 introduced rest parameters (...args) as a modern replacement.\nrest parameters directly create real arrays and support array methods immediately.\nrest parameters are now the preferred modern approach over arguments.\n");