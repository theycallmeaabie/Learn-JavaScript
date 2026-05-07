console.log("=== GLOBAL EXECUTION CONTEXT ===\nevery javascript program starts by creating a global execution context (GEC).\nit is the outermost and first execution environment in the program.\nthe global execution context goes through two phases: memory creation and code execution.\nin memory creation, variables are initialized as undefined and functions are fully stored in memory.\nin code execution, javascript runs code line by line and assigns actual values.\nthe global execution context sits at the bottom of the call stack and remains active until the program finishes.\n");

console.log("=== GEC & ANONYMOUS ===\nthe global execution context (GEC) is sometimes shown as 'anonymous' in browser devtools or the call stack.\nthis is because the global code is not inside any named function.\nit does not mean the GEC is an anonymous function.\n'anonymous' simply represents unnamed top level script execution.\nin stack traces, named functions appear above the anonymous global context.\n");

function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello");
}

one();

// Stack Flow

console.log("=== CALL STACK LIFO ===\nthe javascript call stack follows the LIFO principle (Last In First Out).\nthe last function added to the stack is the first one to execute and finish.\nwhen a function is called, its execution context is pushed onto the stack.\nwhen the function completes, it is popped off the stack.\njavascript always executes the topmost function context first.\nthis mechanism allows nested function calls and recursion to work correctly.\n");

console.log("=== HOW JAVASCRIPT TRACKS EXECUTION ===\njavascript uses the call stack to track which function and line of code are currently executing.\nthe active execution context is always at the top of the stack.\nwhen a function calls another function, the new function context is pushed onto the stack.\nwhen the function finishes, its context is popped off and control returns to the previous function.\nbrowser developer tools visually show the currently active function and execution flow.\nafter function completion, local memory becomes eligible for cleanup through garbage collection.\n");

console.log("=== RECURSION ===\nrecursion occurs when a function calls itself.\neach recursive call creates a new execution context and adds another layer to the call stack.\nrecursive functions must include a stopping condition called the base case.\nwithout a base case, infinite recursion occurs and eventually causes a stack overflow error.\nexample: function count(n) { if(n === 0) return; count(n-1); }.\neach recursive call has its own isolated local variables and memory.\n");

console.log("=== STACK OVERFLOW ===\nstack overflow occurs when too many execution contexts fill the call stack beyond its memory limit.\nthis most commonly happens because of infinite recursion.\neach function call creates a new execution context and pushes it onto the stack.\nwithout a proper stopping condition (base case), recursive calls continue forever.\neventually javascript throws 'Maximum call stack size exceeded'.\nstack overflow specifically affects call stack memory, not heap memory.\n");

console.log("=== DEBUGGER TOOL ===\nthe debugger allows javascript execution to pause so developers can inspect variables, execution flow, and the call stack.\nusing the debugger keyword or breakpoints in devtools helps visualize how execution contexts are added and removed.\nthe currently active function appears at the top of the call stack.\ndebugging tools allow stepping through code line by line to better understand execution order and memory behavior.\nbrowser devtools and editors often provide controls like step over, step into, and resume execution.\n");