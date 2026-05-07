console.log("=== FUNCTIONS INTRODUCTION ===\nfunctions are reusable blocks of code grouped under a single name.\nthey help avoid repetition by allowing code to be written once and executed multiple times.\nfunctions are defined using the function keyword and executed by calling their name.\nexample: function greet() { console.log('Hello'); } greet().\nfunctions improve code organization, readability, maintainability, and reusability.\nin javascript, functions are fundamental building blocks used throughout applications.\n");

console.log("=== FUNCTION CREATION & CALLING ===\nfunctions are created using the function keyword, a function name, parentheses (), and a code block {}.\nexample: function greet() { console.log('Hello'); }.\ndefining a function only stores it in memory and does not execute the code.\nthe function runs only when it is called using parentheses.\nexample: greet().\nfunctions can return values using the return keyword.\nexample: function add() { return 5 + 5; }.\nreturn immediately stops function execution and sends a value back.\nif no value is explicitly returned, javascript automatically returns undefined.\n");

console.log("=== PARAMETERS & ARGUMENTS ===\nparameters are placeholders defined inside a function declaration.\nexample: function greet(name) { } where 'name' is a parameter.\narguments are the actual values passed during the function call.\nexample: greet('Aabid') where 'Aabid' is the argument.\nduring execution, parameters behave like local variables containing the passed argument values.\nparameters exist only inside the function scope.\nmissing arguments become undefined.\nextra arguments are ignored unless explicitly handled.\n");

console.log("=== EXTRA ARGUMENTS ===\nif more arguments are passed than there are parameters, the extra arguments are not automatically assigned to variables.\nexample: function greet(name) {} greet('Aabid',22,true).\nonly the first argument maps to the parameter 'name'.\nextra arguments still exist internally and can be accessed using the arguments object or rest parameters (...args).\nrest parameters collect extra arguments into a real array.\nexample: function test(...args) { console.log(args) }.\n");

function introduce(name, profession, age) {
  console.log(
    `My name is ${name}. I am a ${profession} and I am ${age} years old.`
  );
}

introduce("Aabid", "Developer", 22);

function greet(name) {
  name = name || "Guest";

  console.log(name);
}

greet();

console.log("=== ADVANCED FUNCTION PARAMETERS ===\ndefault parameters provide fallback values when arguments are not passed.\nexample: function greet(name = 'Guest') {}.\ndefault values activate only when the argument is undefined.\nfunctions can accept multiple parameters separated by commas.\nexample: function intro(name, profession, age) {}.\narguments map to parameters based on order.\ntemplate literals use backticks (` `) and ${} syntax to inject variables into strings.\nexample: `Hello ${name}`.\nthis allows functions to generate dynamic and highly customized output.\n");

console.log("=== FUNCTION NAMING BEST PRACTICES ===\nfunction names should describe actions using verbs rather than nouns.\nexample good names: introduceMe(), calculateTotal(), fetchUsers().\nexample poor names: introduction(), total(), data().\nfunctions represent behavior, so action based naming improves readability and maintainability.\njavascript commonly uses camelCase for function names.\nclear and descriptive names make debugging and collaboration easier.\n");

console.log("=== RETURN VS CONSOLE.LOG ===\nconsole.log() is mainly used for debugging or displaying values in the console.\nit does not return a value from the function.\nreturn sends a specific value back from the function so it can be stored or reused.\nexample: return a + b.\nreturned values can be used in calculations, variables, or other functions.\nif a function does not explicitly return anything, javascript automatically returns undefined.\nreturn also immediately stops further execution inside the function.\n");

function addTwoNumbers(a, b) {
  return a + b;
}

const result = addTwoNumbers(5, 6);

console.log(result);

console.log("=== STORING RETURN VALUES ===\nwhen a function is called, javascript executes the function and replaces the function call with the returned value.\nexample: const result = addTwoNumbers(5,6) becomes const result = 11.\nreturned values can be stored in variables, used in calculations, or passed into other functions.\nfunction calls behave like normal expressions because they evaluate into their final returned value.\nexample: console.log(addTwoNumbers(2,3)) behaves like console.log(5).\n");

console.log("=== EXPRESSIONS & FUNCTION CALLS ===\nfunction arguments can be expressions like 5 + 6 + 4.\njavascript evaluates the expression first before passing the final value into the function.\nfunctions can also be nested inside other function calls.\nexample: multiply(add(2,3)).\njavascript evaluates innermost function calls first and then passes the returned result to the outer function.\nfunctions can return any datatype including numbers, strings, arrays, objects, booleans, and even other functions.\n");