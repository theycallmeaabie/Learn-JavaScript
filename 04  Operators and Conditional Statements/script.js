console.log("=== OPERATORS ===\noperators are symbols used to perform operations on values or variables.\narithmetic operators include + - * / % ** for calculations.\nassignment operators include = += -= *= /= to assign and update values.\ncomparison operators include == === != !== > < >= <= to compare values and return true or false.\nlogical operators include && || ! to combine or invert conditions.\nunary operators include ++(increment), --(decrement) typeof and work on a single value.\nternary operator uses condition ? value1 : value2 as a short form of if else.\noperators are essential for calculations, comparisons, and decision making in javascript.\n");

console.log('ARITHMETIC');
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b,'\n'); // 1

console.log('ASSIGNMENT \n');
let x = 5;
x += 2; // 7

console.log("=== COMBINED ASSIGNMENT OPERATORS ===\ncombined assignment operators perform an operation and then reassign the result back to the same variable.\nexample: num += 5 is shorthand for num = num + 5.\ncommon operators include +=, -=, *=, /=, and %=.\nexample: num -= 2 subtracts and updates the variable.\nthese operators make code shorter and cleaner.\n+= also works with strings for concatenation.\nexample: str += 'world'.\n");

let num = 5;

console.log(num++); // 5
console.log(num);   // 6
 
num = 5;

console.log(++num); // 6
console.log(num);   // 6
console.log("=== INCREMENT & DECREMENT ===\nincrement (++) increases a variable by 1 and decrement (--) decreases it by 1.\nexample: num++ or num--.\nnum++ is shorthand for num = num + 1.\nthere are two forms: postfix (num++) and prefix (++num).\npostfix returns the current value first, then updates the variable.\nexample: let num = 5; console.log(num++) prints 5, then num becomes 6.\nprefix updates the variable first, then returns the updated value.\nexample: console.log(++num) prints 6 immediately.\nthe same behavior applies to decrement operators.\n");

console.log("=== INCREMENT & MEMORY ===\nincrement (++) and decrement (--) operators internally perform reassignment even though '=' is not explicitly written.\nexample: num++ behaves similarly to num = num + 1.\nwhen the value changes, javascript updates the variable with a new value in memory.\nprimitive values themselves are immutable, so javascript computes a new value instead of modifying the original value directly.\nconst variables cannot use ++ or -- because those operations require reassignment.\nexample: const num = 5; num++ throws 'Assignment to constant variable'.\nlet variables work because reassignment is allowed.\n");

console.log('COMPARISON')
console.log(5 == "5");   // true
console.log(5 === "5 \n");  // false
console.log("=== EQUALITY OPERATORS ===\n== compares values with implicit type conversion, meaning javascript converts types automatically. example: 5 == '5' -> true.\n=== compares both value and data type without conversion, making it safer. example: 5 === '5' -> false.\nexplicit conversion using Number(), unary +, or parseInt() is recommended instead of relying on ==.\n");

console.log("=== NOT EQUAL OPERATORS ===\n!= checks if values are not equal with implicit type conversion. example: 5 != '5' -> false.\n!== checks if values or types are not equal without conversion. example: 5 !== '5' -> true.\nstrict not equal is safer because it avoids unexpected results from type coercion.\n");

console.log("=== COMPARISON OPERATORS ===\ngreater than (>) and less than (<) compare numeric values.\njavascript performs implicit type conversion when comparing different types, so manual conversion is recommended.\nno strict versions\ngreater than or equal to (>=) and less than or equal to (<=) include equality in comparison.\nright shift (>>) is a bitwise operator that works on binary values but is rarely used in web development.\n");


console.log('LOGICAL (used with booleans) \n ')
console.log("=== AND OPERATOR ===\nthe && operator checks if both conditions are true.\nif both are true, it returns true, otherwise false.\nit is commonly used to check ranges like age >= 18 && age <= 24.\n&& uses short circuiting, meaning if the first condition is false, it returns immediately without checking the second.\nit returns the first falsy value or the last truthy value.\n");

console.log("=== AND WITH NUMBERS ===\n0 is falsy, so 0 && 1 returns 0.\n1 and 2 are truthy, so 1 && 2 returns 2.\n&& returns the first falsy value or the last truthy value.\n");
console.log("=== AND OPERATOR LOGIC ===\nthe && operator evaluates values from left to right.\nif it finds a falsy value, it returns it immediately.\nif all values are truthy, it returns the last value.\nexample: 0 && 1 -> 0 because 0 is falsy.\nexample: 1 && 2 -> 2 because both are truthy and the last value is returned.\n");

console.log(true && false ,'\n '); // false

console.log("=== OR OPERATOR ===\nthe || operator returns true if at least one condition is true.\nit uses short circuiting, meaning if the first value is truthy, it returns it immediately.\n|| returns the first truthy value or the last value if none are truthy.\nexample: 0 || 5 -> 5, '' || 'hi' -> 'hi', 'a' || 'b' -> 'a'.\nfalsy values include 0, empty string, null, undefined, false, and NaN.\n");

console.log("=== CONSOLE.LOG RETURN ===\nconsole.log is used to print values to the console but it does not return any value.\nit always returns undefined.\nso assigning console.log to a variable results in that variable being undefined.\n");

console.log("=== OR WITH CONSOLE.LOG ===\nconsole.log returns undefined which is falsy.\nso in expressions like console.log('hello') || 'fallback', the result becomes 'fallback'.\nif the first value is truthy, OR short circuits and does not evaluate the next value.\n");

console.log("=== NOT OPERATOR ===\nthe ! operator inverts the truth value of a value.\ntruthy values become false and falsy values become true.\ndouble negation !! is used to convert any value into a boolean.\nexample: !!'hello' -> true, !!0 -> false.\n");

console.log("=== ! vs !! ===\n! inverts the truth value of a value. example: !true -> false, !0 -> true.\n!! converts any value to its boolean equivalent by applying not twice. example: !!'hi' -> true, !!0 -> false.\n! is used to flip truthiness, while !! is used for explicit boolean conversion.\n");

console.log("\n=== BITWISE OPERATORS ===\nbitwise operators like & and | work on the binary representation of numbers.\n& returns 1 only if both bits are 1, while | returns 1 if at least one bit is 1.\nexample: 5 & 3 -> 1 and 5 | 3 -> 7.\nthese are different from logical operators && and || and are rarely used in standard web development.\n");

console.log("=== CONDITIONAL STATEMENTS ===\nconditional statements are used to make decisions in javascript based on conditions that return true or false.\nif statement runs code when a condition is true.\nif else provides two paths using if (condition) { } else { }.\nelse if allows multiple conditions using if (...) else if (...) else.\nswitch is used for multiple exact matches using case and break.\nternary operator uses condition ? value1 : value2 as a short form of if else.\nconditional statements control the flow of execution in a program.\n");

console.log("=== DECISION MAKING ===\njavascript executes code in two phases: memory creation and code execution.\nin memory creation, variables are stored, and in execution phase, code runs line by line.\nthe if statement is used to make decisions by checking a condition.\nif the condition is true, the code block runs, otherwise it is skipped.\n");

console.log("=== SWITCH STATEMENT ===\nswitch is used as a cleaner alternative to multiple if else conditions when checking a variable against many values.\nsyntax: switch(expression) { case value: ... break; default: ... }.\nthe expression is compared with each case value and matching case executes.\nbreak is important to prevent fall through, otherwise subsequent cases will also run.\ndefault runs if no case matches and acts like else.\ncase order does not matter and default is usually placed at the end.\n");

let marks = 65;
if (marks > 90) {
  console.log("A");
} else if (marks > 75) {
  console.log("B");
} else {
  console.log("C");
};

let day = 'Mon'
switch(day) {
  case "Mon":
    console.log("Start");
    break;
  default:
    console.log("Other");
};

let age = 20;

switch (true) {
  case age >= 6 && age <= 12:
    console.log("School student");
    break;

  case age >= 13 && age <= 17:
    console.log("High school student");
    break;

  case age >= 18 && age <= 24:
    console.log("College student");
    break;

  default:
    console.log("Other");
};

console.log("=== SWITCH TRUE PATTERN ===\nswitch(true) allows using conditions inside case statements.\neach case is evaluated as a boolean expression and compared with true.\nif a condition evaluates to true, that case runs.\nthis pattern can replace long if else chains but is less commonly used.\n");

console.log("=== SWITCH STRICT COMPARISON ===\nswitch uses strict equality (===) for comparisons, so both value and type must match exactly.\nexample: 1 will not match '1'.\nto handle case-insensitive inputs, use methods like toLowerCase() before switching.");

console.log('\n\n');
console.log('TERNARY OPERATOR (short of if-else)\n')
console.log('condition?true output:false output')
age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
console.log(age >= 18 ? "Adult" : "Minor");

console.log("=== TERNARY OPERATOR ===\nthe ternary operator has three parts: condition ? valueIfTrue : valueIfFalse.\nit evaluates the condition and returns the first value if true, otherwise the second.\nit can be used inside template literals for dynamic strings.\nconditions can include operations like toLowerCase() for robustness.\nit works with truthy and falsy values, not just boolean expressions.\n");

console.log("=== TERNARY ADVANCED ===\nternary operators can be chained to handle multiple conditions similar to if else if else.\nthey are evaluated from top to bottom and the first true condition is returned.\nhowever, nested ternaries can reduce readability and should be used sparingly.\nfor complex logic, traditional if else statements are preferred for clarity.\n");
let score;
let res = score >= 90 ? "A" : score >= 75 ? "B" : score >= 50 ? "C" : "Fail";