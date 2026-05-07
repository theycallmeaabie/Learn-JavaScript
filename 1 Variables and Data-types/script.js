console.log("=== JAVASCRIPT EXECUTION ===\njavascript uses both interpretation and compilation through modern engines like v8.\nthe engine compiles code into optimized machine code before executing it, making it fast.\njavascript runs directly in web browsers, so no external software is required for basic execution.\n");

console.log("=== BROWSER CONSOLE & REPL ===\nbrowser console is a built-in tool in browsers that allows running and testing javascript code instantly.\nit is used for debugging, logging, and experimenting with code.\nrepl stands for read eval print loop, where input is read, executed, result is printed, and the process repeats.\nthe browser console and node.js environment both act as repl systems.\n");

console.log("=== ADVANCED CONSOLE FEATURES ===\nthe browser console helps in debugging by showing error messages, file names, line numbers, and stack traces.\nthis makes it easy to identify where and why an error occurred.\nthe sources tab in developer tools shows all files loaded in the browser, exactly as received from the server.\nyou can view code, navigate files, and set breakpoints to pause execution.\nbreakpoints help inspect variables and understand code flow step by step.\n");

console.log("VARIABLES\n");
console.log("variables are containers for data\n");

console.log("Declaring variables:");
fullName = "Tony Stark";
age = 25;
x = null;
y = undefined;
z = true;
console.log(fullName);
console.log(age);
console.log(x);
console.log(y);
console.log(z,'\n');

console.log('JavaScript is a dynamically typed language\n you don’t have to declare the data type of a variable, the language figures it out at runtime.\n');

console.log("=== NULL vs UNDEFINED ===\nundefined means a variable has been declared but not assigned a value, so JavaScript automatically sets it during runtime when no value exists.\nnull, on the other hand, is intentionally assigned by the developer to represent an empty or non-existent value.\nundefined is a type itself, while null is historically considered an object due to a JavaScript quirk.\nboth represent absence of value, but undefined is implicit and null is explicit.\nusing strict equality, they are different, but with loose equality, they are considered equal.\n");
let a;
let b = null;

console.log("=== VARIABLE RULES ===\nvariables must start with a letter, underscore (_) or dollar sign ($), and cannot start with a number.\nyou cannot use reserved keywords like let, const, if, or function as variable names.\nvariable names are case-sensitive, so name and Name are different.\nspaces are not allowed in variable names, so use camelCase instead.\nalways use meaningful variable names for better readability.\nprefer using let for changeable values and const for fixed values instead of var.\n");

console.log("=== LET ===\nlet is used to declare a variable whose value can be changed later.\nit is block scoped, meaning it only exists inside the block where it is defined.\nit cannot be redeclared in the same scope.\nlet is safer than var and is commonly used for variables that will change.\n");

console.log("=== CONST ===\nconst is used to declare variables whose value cannot be reassigned.\nit is block scoped like let and must be initialized at the time of declaration.\nit cannot be redeclared in the same scope.\nfor objects and arrays, const prevents reassignment but allows modification of properties or elements.\nconst is preferred by default in modern javascript unless the value needs to change.\n");

console.log("=== VAR ===\nvar is used to declare variables in older javascript.\nit is function scoped, not block scoped, so it ignores curly braces.\nvar allows redeclaration and reassignment of variables.\nit is hoisted to the top of its scope with an initial value of undefined.\nvar can cause bugs due to these behaviors, so modern javascript prefers let and const.\n");

console.log("=== HOISTING ===\nhoisting means javascript moves variable declarations to the top of their scope before execution.\nvar is hoisted and initialized with undefined, so accessing it before declaration returns undefined.\nlet and const are also hoisted but not initialized, so accessing them before declaration results in a reference error.\nthis happens because of the temporal dead zone where the variable exists but cannot be accessed yet.\n");

console.log("=== ES6 (ECMAScript 2015) ===\nes6 is a major update to javascript that introduced modern features to write cleaner and more efficient code.\nit includes features like let and const for better variable handling, arrow functions for shorter syntax, template literals for easier string formatting, destructuring for extracting values, spread operator for copying and expanding data, default parameters, classes, and modules.\nes6 is the standard used in modern javascript development.\n \n");

console.log("DATA TYPES\n");

console.log("=== PRIMITIVE DATA TYPES ===\nprimitive data types are the most basic types in javascript that store single values and are immutable.\nthe main primitive types are number, string, boolean, undefined, null, bigint, and symbol.\nthese values are stored by value, not by reference, and cannot be changed directly.\nprimitive types are simple, fast, and form the foundation of javascript.\n");
let id = Symbol("id");
let big = BigInt(123);
console.log(typeof id);
console.log(typeof big,"\n");

console.log("=== NON-PRIMITIVE DATA TYPES ===\nnon-primitive data types are complex types in javascript that can store multiple values or collections of data.\nthe main non-primitive types are object, array, and function.\nthese are stored by reference, not by value, and can be modified after creation.\nnon-primitive types are mutable and used to build more complex data structures.\n");
let user = { name: "Aabid", age: 20 };
let arr = [1, 2, 3];
function greet() {
  return "Hello";
};
console.log(typeof user)
console.log(typeof arr, 'internally arrays are built on top of objects(key;value)');        // "object"
console.log(Array.isArray(arr)); // true
console.log(typeof greet,"\n")

console.log("=== NaN ===\nNaN stands for not a number and represents an invalid or undefined numeric result.\nit occurs when mathematical operations fail or when non-numeric values are converted to numbers.\nNaN is of type number but is not equal to anything, even itself.\nto check for NaN, use Number.isNaN() as the preferred method.\n");

console.log("=== TEMPLATE LITERALS ===\ntemplate literals use backticks (` `) instead of quotes to create strings.\nthey allow inserting variables and expressions using ${} syntax.\nthey support multi-line strings without using \\n.\ntemplate literals make string formatting cleaner and more readable.\n");

console.log('EXTRA');
console.log(+true);
console.log("=== TYPEOF NULL BUG ===\ntypeof null returns 'object' due to a historical bug in javascript.\nthis behavior is incorrect because null is actually a primitive value, not an object.\nthe bug was never fixed to maintain backward compatibility with existing code.\n");

console.log("=== TYPE CONVERSION ===\ntype conversion means converting a value from one data type to another.\nstring to number can be done using unary + operator like +'100'.\nif the string contains non numeric characters, the result is NaN.\nparseInt() can extract numbers from strings like '100px'.\nnumber to string can be done by adding an empty string like 100 + ''.\nNumber(null) converts to 0 while Number(undefined) converts to NaN.\nunderstanding type conversion is important for handling user input and avoiding bugs.\n");

console.log("=== NAMING CONVENTIONS ===\ncamelCase like userIntro is the standard for variables and functions in javascript.\npascalCase like UserIntro is used for classes and constructors.\nsnake_case like user_intro is less common in javascript.\nkebab-case like user-intro should not be used in javascript variables because the hyphen is treated as a minus operator.\nusing proper naming conventions improves readability and code quality.\n");

console.log("=== CODE EXECUTION PHASES ===\njavascript executes code in two phases: memory creation phase and code execution phase.\nin memory creation phase, the engine scans the code, allocates memory for variables, initializes var with undefined, and keeps let and const uninitialized in the temporal dead zone.\nno code is executed in this phase.\nin code execution phase, javascript runs the code line by line, assigns actual values to variables, and executes functions and console.log statements.\nfirst phase prepares memory, second phase executes logic.\n");

console.log("=== VARIABLE SCOPING ===\nvariables declared with var are stored in the global scope and are attached to the global object like window in browsers.\nvariables declared with let and const are stored in the script scope and are not attached to the global object.\nthis makes let and const safer and avoids polluting the global namespace.\n");

console.log("=== TEMPORAL DEAD ZONE ===\ntemporal dead zone is the period between variable hoisting and its initialization for let and const.\nduring this time, the variable exists but cannot be accessed.\naccessing it before initialization results in a reference error.\ntdz ends when execution reaches the declaration line and the variable is initialized.\n");

console.log("=== DEBUGGING TOOLS ===\nbreakpoints allow pausing code execution at specific lines using the devtools sources tab to inspect variables and memory state.\nthe debugger keyword acts as a programmatic breakpoint that pauses execution when reached.\nboth help in understanding code flow, tracking bugs, and inspecting values step by step.\n");

console.log("=== BROWSER CACHE ===\nbrowser may cache html, css, and javascript files to improve performance.\nbecause of caching, changes like updating the title may not appear immediately.\na hard refresh or disabling cache forces the browser to load the latest version.\n");

console.log("=== SCRIPT LOADING ===\nby default, script tags like <script src='script.js'></script> block html parsing, meaning the browser stops rendering, downloads the script, and executes it before continuing.\nthis can slow down page load.\nusing defer like <script src='script.js' defer></script> loads the script in parallel and executes it after html parsing in order.\nusing async like <script src='script.js' async></script> loads the script in parallel and executes it immediately when ready without preserving order.\nplacing script tags at the bottom of the body also helps reduce blocking.\n");

console.log("=== DEBUGGER KEYWORD ===\ndebugger is used to pause javascript execution at a specific line.\nit acts like a breakpoint and allows inspecting variables and stepping through code.\nit works when developer tools are open and should be removed in production.\n");