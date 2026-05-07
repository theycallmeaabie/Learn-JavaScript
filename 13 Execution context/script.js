console.log("=== EXECUTION CONTEXT ===\nexecution context is the environment where javascript code runs.\njavascript execution happens in two phases: memory creation phase and code execution phase.\nin the memory creation phase, variables are allocated memory and initialized with undefined.\nfunctions are fully stored in memory during this phase.\nin the code execution phase, javascript runs code line by line and replaces undefined values with actual assigned values.\nfunction calls execute the function code stored in memory.\nexecution context is the foundation for understanding hoisting, scope, and function execution behavior.\n");

console.log("=== GLOBAL EXECUTION CONTEXT ===\nthe global execution context (GEC) is the default and outermost execution environment created when javascript starts running.\nall globally declared variables and functions are stored inside the global execution context.\nlike all execution contexts, it has a memory creation phase and a code execution phase.\nvariables are initially assigned undefined while functions are fully stored in memory.\nthere is only one global execution context in a program.\nin browsers, the global object is usually the window object.\nfunctions can access variables from the global execution context through scope.\n");

// var
// Global Execution Context
//    └── window object
//           └── variable stored

// let / const
// Global Execution Context
//    └── Script Scope
//           └── variable stored

console.log("=== VAR VS LET/CONST GLOBAL SCOPE ===\nin browsers, the global object is usually the window object.\nglobal variables declared with var become properties of the window object.\nexample: var name = 'Aabid'; window.name works.\nlet and const variables are stored in a separate script scope and are not attached to window.\nexample: let age = 22; window.age returns undefined.\nthis is one reason modern javascript prefers let and const because they avoid polluting the global object.\n");

greet();

function greet() {
  console.log("Hello");
}console.log("=== FUNCTION HOISTING ===\nfunction declarations are fully stored in memory during the memory creation phase.\nthis allows functions to be called before they appear in the code.\nexample: greet(); function greet() {} works.\nthis behavior is called function hoisting.\nvariables declared with var are only initialized as undefined during hoisting.\nfunction expressions are not fully hoisted because they behave like variables.\nexample: var greet = function() {} cannot be safely called before assignment.\n");

console.log("=== LOCAL EXECUTION CONTEXT ===\nevery time a function is called, javascript creates a new local execution context for that function.\nthis acts like a private environment containing the function's parameters and local variables.\nlike the global execution context, it has a memory creation phase and a code execution phase.\nduring memory creation, parameters and local variables are initially set to undefined.\nduring execution, actual values are assigned and code runs line by line.\nafter the function finishes execution, its local execution context is removed from the call stack.\nlocal variables only exist within their function execution context.\n");

// Function called
//    ↓
// Create Local Execution Context
//    ↓
// Memory Creation Phase
//    ↓
// Code Execution Phase
//    ↓
// Function finishes
//    ↓
// Context removed from stack

console.log("=== CALL STACK ===\nthe call stack (execution stack) tracks the order of function execution in javascript.\nwhen a function is called, a new execution context is pushed onto the stack.\nwhen the function finishes, its context is popped from the stack.\njavascript executes the function at the top of the stack first.\nexample: if function A calls B and B calls C, the stack becomes Global -> A -> B -> C.\nafter C finishes, control returns to B, then A, then back to the global context.\nthe call stack follows the LIFO principle (Last In First Out).\nexcessive recursive calls can cause a stack overflow error.\n");

console.log("=== NESTED EXECUTION CONTEXTS ===\nwhen functions call other functions, javascript creates nested execution contexts.\neach function call creates its own isolated memory, parameters, local variables, and execution phase.\nthese contexts are stacked inside the call stack.\nexample: if function A calls B and B calls C, separate execution contexts are created for all three functions.\njavascript always executes the topmost context first.\nafter a function finishes, its context is removed and control returns to the previous context.\nfunctions can theoretically nest infinitely, but excessive nesting causes a stack overflow error.\n");

console.log("=== MEMORY VS EXECUTION ===\njavascript execution contexts have two phases: memory creation and code execution.\nin the memory creation phase, variables are allocated memory and initialized as undefined while functions are fully stored.\nin the execution phase, actual values are assigned and code runs line by line.\nallocated memory and assigned values are different concepts.\nlocal execution contexts created by functions are temporary.\nafter a function finishes, its execution context is removed from the call stack and its memory becomes eligible for garbage collection.\nthis cleanup process is important for efficient memory management.\n");