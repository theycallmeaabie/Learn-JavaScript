function greet() {
    console.log(arguments);
}

greet("Aabid", 21, true);

function add() {

    let sum = 0;

    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(add(1,2,3,4));

// arguments.length tells how many arguments were passed.
function demo() {
    console.log(arguments.length);
}

demo(1,2,3);

console.log("=== ARGUMENTS KEYWORD IN JAVASCRIPT ===\narguments is a special object automatically available inside every regular JavaScript function.\nit contains all arguments passed during the function call.\nyou do not need to declare or initialize arguments manually.\narguments is an array-like object, not a real array.\nit supports indexes and the length property.\narguments does not directly support array methods like map(), filter(), reduce(), or forEach().\nArray.from(arguments) can convert it into a real array.\narguments only exists inside regular functions and does not exist in arrow functions.\nmodern JavaScript commonly uses rest parameters (...args) instead of arguments.\nrest parameters create a real array and support array methods.\n");