console.log("=== SCOPE INTRODUCTION ===\nscope defines the accessibility or visibility of variables in javascript.\nit determines where variables can be accessed and used.\nif a variable is accessed outside of its valid scope, javascript throws a ReferenceError.\nexample: variables declared inside a function cannot normally be accessed outside that function.\nscope is important for organizing code, avoiding conflicts, debugging issues, and managing memory properly.\njavascript searches variables through the scope chain starting from the current scope outward.\n");

console.log("=== GLOBAL SCOPE ===\nglobal scope is the outermost scope in javascript where variables and functions are accessible throughout the program.\nin browsers, global scope is commonly divided into the window object scope and script scope.\nvariables declared with var and function declarations become properties of the window object.\nexample: var age = 22; window.age works.\nvariables declared with let and const are stored in script scope instead of attaching to window.\nexample: let city = 'Delhi'; window.city returns undefined.\nlet and const are still globally accessible even though they are not properties of window.\n");

// var age = 22;

// function greet() {}

// console.log(window.age);
// console.log(window.greet);

// window exists only in browser environments.

// In Node.js:

// window does not exist

// 🔹 Internally
// window.age = 22
// window.greet = function() {}

// let city = "Delhi";
// const country = "India";

// console.log(window.city);
// console.log(window.country);

// Output:
// undefined
// undefined

// Global Execution Context
// │
// ├── Window Object Scope
// │     ├── var variables
// │     └── function declarations
// │
// └── Script Scope
//       ├── let variables
//       └── const variables
console.log("=== WINDOW SCOPE VS SCRIPT SCOPE ===\nin browsers, the global execution context is internally divided into window object scope and script scope.\nvariables declared with var and function declarations become properties of the window object.\nexample: var age = 22; window.age works.\nvariables declared with let and const are stored in script scope instead of attaching to window.\nexample: let city = 'Delhi'; window.city returns undefined.\nlet and const are still globally accessible even though they are not properties of window.\nscript scope was introduced to avoid polluting the global window object and reduce naming conflicts.\n");

console.log("=== LOCAL/FUNCTION SCOPE ===\nwhen a function is called, javascript creates a new execution context and local scope for that function.\nvariables declared inside the function are local and accessible only within the function's curly braces {}.\nexample: variables x and y inside an add() function cannot be accessed outside the function.\neach function call gets its own separate local memory and variables.\nafter the function finishes execution, its local execution context is removed from the call stack and its local variables become eligible for garbage collection.\n");

console.log("=== SCOPE CHAIN & SHADOWING ===\nwhen javascript accesses a variable, it first searches the current local scope.\nif the variable is not found, javascript moves upward through the scope chain to parent scopes and eventually the global scope.\nthis lookup process is called the scope chain.\nchild scopes can access variables from parent scopes, but parent scopes cannot access child scope variables.\nif a local variable has the same name as a global variable, the local variable takes precedence.\nthis behavior is called variable shadowing.\nif a variable is not found anywhere in the scope chain, javascript throws a ReferenceError.\n");

console.log("=== SCOPE KEY TAKEAWAYS ===\nvariables declared with var in the global scope become properties of the window object in browsers.\nvariables declared with let and const are stored in the separate script scope instead of attaching to window.\nlocal variables declared inside functions are private to that function and cannot normally be accessed outside it.\nwhen a function finishes execution, its local execution context is removed and its local variables become eligible for garbage collection.\nwhen javascript searches for a variable, it starts from the current local scope and moves outward through the scope chain toward the global scope.\n");