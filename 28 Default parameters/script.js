function multiply(a, b) {
    return a * b;
}

console.log(multiply(2));

console.log("=== THE PROBLEM WITH MISSING ARGUMENTS ===\nin JavaScript, if a function is called with fewer arguments than parameters, the missing parameters become undefined.\nJavaScript does not throw an error for missing arguments.\nusing undefined in mathematical operations often results in NaN (Not a Number).\nexample:\n2 * undefined -> NaN\nmissing arguments can lead to unexpected bugs and invalid calculations.\nJavaScript ignores extra arguments but assigns undefined to missing ones.\nbefore ES6, developers manually checked for undefined values.\ndefault parameters were later introduced to solve this problem more cleanly.\n");

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, false)); //false = 0

console.log("=== DEFAULT PARAMETERS IN JAVASCRIPT ===\nES6 introduced default parameters, allowing fallback values directly in the parameter list.\nsyntax:\nfunction test(value = defaultValue) {}\ndefault values are used when an argument is missing or undefined.\nif an actual argument is provided, it overrides the default value.\nundefined triggers default parameters.\nnull and false are treated as actual values and do not trigger defaults.\nin mathematical operations:\n- null is coerced to 0\n- false is coerced to 0\ndefault parameters simplify code and replace older manual undefined checks.\nbefore ES6, developers used conditional statements to assign default values.\ndefault parameters improve readability, safety, and reduce verbose code.\n");