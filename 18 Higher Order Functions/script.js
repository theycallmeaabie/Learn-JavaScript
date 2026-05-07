console.log("=== HIGHER ORDER FUNCTIONS ===\na higher order function (HOF) is a function that either accepts another function as an argument or returns a function.\nthis is possible because functions in javascript are first-class citizens.\nfunctions can be stored in variables, passed as arguments, and returned from other functions.\nexamples of built-in higher order functions include map(), filter(), and forEach().\ncallbacks are functions passed into higher order functions.\nhigher order functions are heavily used in modern javascript, especially in asynchronous programming, event handling, and functional programming.\n");

function greet() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(greet);

console.log("=== CREATING HIGHER ORDER FUNCTIONS ===\nin javascript, functions are first-class citizens and can be passed around like normal values.\nwhen a function is passed as an argument to another function, it is called a callback function.\nexample: execute(greet) passes the greet function as a value.\nthis allows higher order functions to execute dynamic behavior using callbacks.\ncallbacks can be normal functions, anonymous functions, or arrow functions.\nhigher order functions are heavily used in array methods, timers, event listeners, and asynchronous programming.\nunderstanding the concept is more important than memorizing syntax details.\n");

console.log(typeof greet);
greet.language = "JavaScript";

console.log(greet.language);
console.dir(greet);

console.log("=== FUNCTIONS AS OBJECTS ===\nin javascript, functions are special callable objects behind the scenes.\nfunctions can be stored in variables, passed as arguments, returned from other functions, and even have custom properties attached to them.\nexample: greet.language = 'JavaScript'.\nconsole.log() usually displays a simplified function view, while console.dir() reveals the underlying object structure and properties.\nfunctions also contain built-in properties and methods such as name, length, call(), apply(), and bind().\nfunctions are unique because they behave both like objects and executable code.\n");

execute(function () {
  console.log("Inline callback");  //anonymous
});

execute(() => {
  console.log("Arrow callback");
});

console.log("=== CALLBACKS & FUNCTION ARGUMENTS ===\nin javascript, functions can be passed as arguments to other functions.\na function passed as an argument is called a callback function.\nthis allows logic and behavior to be treated like data.\ntrying to call a value that is not a function results in a TypeError such as 'is not a function'.\ncallbacks can be defined separately and passed by name, or written inline as anonymous or arrow functions.\ncallbacks are foundational to higher order functions, asynchronous programming, and functional programming in javascript.\n");

console.log("=== ANONYMOUS CALLBACK FUNCTIONS ===\nanonymous functions are functions created without a name.\nthey are commonly used as callback functions passed into higher order functions.\nexample: execute(function() { console.log('Hello') }).\nthe function being passed is called the callback function.\nthe function receiving another function is called the higher order function.\nanonymous callback functions are heavily used in array methods like map(), filter(), and reduce().\nmodern javascript often uses arrow functions as shorter anonymous callbacks.\n");