console.log("=== LEXICAL SCOPE ===\nlexical scope means scope is determined by where functions and variables are physically written in the code.\ninner functions can access variables from their own scope, parent scopes, and the global scope through the scope chain.\nthis creates a hierarchy of scopes called lexical scope.\nvariable lookup always moves upward from inner scope to outer scope.\nouter scopes cannot access variables declared inside inner functions.\nlexical scope is the foundation of closures in javascript.\n");

console.log("=== SCOPE VISIBILITY ===\nin browser devtools, local variables and scopes can be inspected while a function is executing.\na function's local scope only exists after the function is called and its execution context is created.\nlocal variables appear in the scope panel only while the function is active on the call stack.\nafter the function finishes execution, its local execution context is removed and its local variables disappear from scope view.\nglobal variables remain visible longer because the global execution context stays active throughout the program.\n");

console.log("=== CLOSURES ===\na closure is formed when an inner function accesses variables from its outer lexical environment.\nclosures allow inner functions to remember outer variables even after the outer function has finished execution.\nthis happens because javascript preserves references to the outer lexical scope.\nclosures are based on lexical scoping.\nin browser devtools, closures often appear in the scope panel under a 'Closure' section.\nclosures are commonly used for private variables, counters, callbacks, and asynchronous programming.\n");

console.log("=== BLOCK SCOPE ===\nblock scope is created using curly braces {} such as in if statements, loops, or standalone blocks.\nvariables declared with let and const are restricted to the block where they are defined.\ntrying to access them outside the block results in a ReferenceError.\nvar is not block scoped and ignores block boundaries.\nvariables declared with var can leak outside blocks but are still restricted by function scope.\nmodern javascript prefers let and const because block scoping prevents accidental variable leaks and improves code safety.\n");

function test() {
  var x = 10;
}

// console.log(x); referenceerror

console.log("=== GLOBAL LEAKS & STRICT MODE ===\nassigning a value to a variable without var, let, or const can accidentally create a global variable.\nin browsers, such undeclared variables may attach to the window object.\nthis behavior is called a global leak and is considered bad practice because it pollutes the global scope and can cause bugs.\nusing 'use strict' enables strict mode, which prevents accidental global variable creation.\nin strict mode, assigning to an undeclared variable throws a ReferenceError.\nstrict mode also helps catch other silent javascript errors and makes code safer.\n");

console.log('Strict mode is enabled using "use strict"; at the top of a file or function');

console.log("=== MODULE SCOPE ===\nmodule scope means variables and functions belong only to their specific javascript file/module.\nin ES modules, variables do not automatically become global or attach to the window object.\nmodules prevent global scope pollution by isolating each file's variables.\nsharing values between modules requires explicit export and import statements.\nall ES modules automatically run in strict mode.\nmodule scope is heavily used in modern javascript applications and frameworks.\n");