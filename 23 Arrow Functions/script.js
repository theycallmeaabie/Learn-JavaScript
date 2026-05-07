console.log("=== FUNCTION DECLARATIONS VS EXPRESSIONS VS ARROW FUNCTIONS ===\nfunction declarations use the function keyword with a defined name and are fully hoisted during the memory creation phase.\nthis allows them to be called before their physical definition in the code.\nfunction expressions store functions inside variables and follow normal variable hoisting behavior.\narrow functions are also stored in variables and behave similarly to function expressions regarding hoisting.\nfunction expressions and arrow functions must usually be defined before use, especially when declared with let or const.\n");

const add = (a, b) => a + b;  //implicit return

const sub = (a, b) => {       
  return a - b;               //explicit return   
};

console.log("=== ARROW FUNCTIONS ===\narrow functions are a modern ES6 shorthand syntax for writing functions.\ninstead of the function keyword, arrow functions use the => operator after the parameter list.\narrow functions behave similarly to function expressions in most everyday use cases.\nthey are especially popular for callbacks, array methods, and concise code.\narrow functions support shortcuts such as implicit returns and optional parentheses for single parameters.\n");

console.log("=== ARROW FUNCTION RETURNS ===\narrow functions support both explicit and implicit returns.\nwhen using curly braces {}, you must explicitly write the return keyword to return a value.\nif the arrow function contains only a single expression, you can omit both the curly braces and the return keyword.\nin this case, javascript automatically performs an implicit return.\nimplicit returns are commonly used for short callbacks and concise expressions.\nreturning object literals with implicit return requires wrapping the object in parentheses.\n");

// 0 params  → ()
// 1 param   → () optional
// 2+ params → () required

console.log("=== ARROW FUNCTION PARAMETERS & FORMATTING ===\narrow functions require empty parentheses () when there are no parameters.\nfor a single parameter, parentheses are optional, though many developers prefer always using them for consistency.\nfor multiple parameters, parentheses are required.\nlong expressions can be wrapped inside parentheses for cleaner formatting and line breaks.\narrow functions are especially popular for callback functions like setTimeout(), setInterval(), map(), and filter() because their syntax is concise and readable.\n");