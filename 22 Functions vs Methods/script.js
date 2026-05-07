console.log("=== FUNCTION VS METHOD ===\na function is a standalone reusable block of code designed to perform a task.\na method is a function stored inside an object.\nevery method is a function, but not every function is a method.\nmethods are usually invoked using dot notation like object.method().\nmethods often use the 'this' keyword because they belong to objects.\nexamples of built-in methods include array methods like push(), pop(), map(), and string methods like toUpperCase().\n");

console.log("=== OBJECTS & METHODS ===\njavascript objects can contain both properties and methods.\nproperties store data values, while methods are functions stored inside objects.\nfor example, Math.PI is a property because it stores a constant value, while Math.sqrt() is a method because it is a function inside the Math object.\nto create a custom method, place a function inside an object as a property.\nmethods are usually accessed and called using dot notation like object.method().\n");

console.log("=== RETURN & ES6 METHOD SYNTAX ===\nconsole.log() only displays output and does not return a value from a function.\nfunctions and methods without an explicit return statement automatically return undefined.\nuse the return keyword when you want to send data back to the caller for reuse in variables, expressions, or further calculations.\nES6 introduced a shorter method syntax for objects.\ninstead of writing key: function() {}, you can write key() {}.\nboth syntaxes create methods, but the ES6 shorthand is cleaner and preferred in modern javascript.\n");

// ES5 Old Object Method Syntax

// Before ES6:

// const user = {
//   greet: function () {
//     console.log("Hello");
//   }
// };
// 🔹 ES6 Modern Method Syntax ✅
// const user = {
//   greet() {
//     console.log("Hello");
//   }
// };

console.log("=== RETURN STATEMENTS & ES6 METHOD SYNTAX ===\nfunctions and methods should use the return keyword when they need to provide reusable output values.\nconsole.log() only displays information and does not return data to the caller.\nwithout an explicit return statement, functions automatically return undefined.\nES6 introduced shorthand method syntax for objects.\ninstead of writing key: function() {}, modern javascript commonly uses key() {}.\nboth syntaxes create methods, but the ES6 version is shorter and cleaner.\n");

console.log("=== METHODS IN BUILT-IN DATA TYPES ===\narrays in javascript are objects, which is why they have methods like push(), pop(), map(), and filter().\nthese methods are inherited through Array.prototype.\nstrings, however, are primitive values and not actual objects.\nwhen methods like toUpperCase() are used on strings, javascript temporarily wraps the primitive string inside a String object wrapper behind the scenes.\nthis temporary wrapper allows primitive values to access object methods using dot notation.\nprimitive wrapper objects also exist for Number and Boolean types.\n");

console.log("=== METHODS & ES6 SYNTAX SUMMARY ===\na method is simply a function associated with an object.\nany function called using dot notation like object.functionName() is effectively being used as a method.\nobjects contain properties for data and methods for behavior.\nES6 introduced shorthand method syntax for cleaner object method definitions.\ninstead of writing key: function() {}, modern javascript prefers key() {}.\nthis shorter syntax is now the standard style used in modern javascript development.\n");