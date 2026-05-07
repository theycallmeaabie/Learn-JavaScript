console.log("=== TIMING FUNCTIONS ===\ntiming functions like setTimeout() and setInterval() allow javascript to execute code after delays or at repeated intervals.\nthese are higher order functions because they accept callback functions.\ntiming functions are not part of the core ECMAScript specification.\nthey are provided by the runtime environment such as browsers or Node.js.\nthis is why timer behavior can differ slightly across environments.\nsetTimeout and setInterval are asynchronous and work with the event loop and callback queue.\n");

setTimeout(() => {
  console.log("Hello");
}, 2000); //Output after 2 seconds

const timerId = setTimeout(() => {
  console.log("Runs later");
}, 3000);

console.log(timerId);

// Cancelling Timers
// Use:
// clearTimeout(id);

// setTimeout()
//       ↓
// Browser/Runtime Timer
//       ↓
// Callback Queue
//       ↓
// Event Loop
//       ↓
// Call Stack

console.log("=== SETTIMEOUT ===\nsetTimeout() schedules a callback function to run after a specified delay in milliseconds.\nsyntax: setTimeout(callback, delay).\nsetTimeout is asynchronous and does not block current code execution.\neven with a delay of 0 milliseconds, the callback waits until the current synchronous call stack becomes empty.\npassing a function as the first argument is recommended.\npassing a string causes dynamic code execution similar to eval() and is discouraged for security and clarity reasons.\nsetTimeout returns a unique timer ID that can be used with clearTimeout() to cancel the scheduled task.\n");

setInterval(() => {
  console.log("Running...");
}, 5000);

// setInterval()
//       ↓
// repeated timer events
//       ↓
// callback queue
//       ↓
// event loop
//       ↓
// call stack

console.log("=== SETINTERVAL ===\nsetInterval() repeatedly executes a callback function after a specified time interval.\nsyntax: setInterval(callback, delay).\nunlike setTimeout(), which runs once, setInterval() continues running until it is stopped.\nsetInterval is asynchronous and works using timer APIs, the callback queue, and the event loop.\nsetInterval returns a unique interval ID that can be used with clearInterval() to stop the repeated execution.\nalthough clearTimeout() and clearInterval() can technically clear each other's timers, it is best practice to use the matching clear function for readability.\n");

function greet(name, age) {
  console.log(name, age);
}

setTimeout(greet, 2000, "Aabid", 22);
// setTimeout(callback, delay, extraArgs...)
console.log("=== OPTIONAL TIMER ARGUMENTS ===\nsetTimeout() and setInterval() can accept additional arguments after the delay parameter.\nthese extra arguments are automatically passed into the callback function when it executes.\nexample: setTimeout(greet, 1000, 'Aabid', 22).\nthis eventually runs greet('Aabid', 22).\nmodern javascript often prefers arrow functions or closures instead of optional timer arguments because they improve readability and flexibility.\n");

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

console.log("=== EVENT LOOP & ASYNC LOGIC ===\njavascript is single-threaded and executes code using the call stack.\nfunctions like setTimeout() are handled by browser/runtime Web APIs outside the main javascript engine.\nafter the timer completes, the callback moves into the callback queue.\nthe event loop continuously checks whether the call stack is empty.\nonly when the stack becomes empty does the event loop move queued callbacks onto the call stack for execution.\nthis is why setTimeout(callback, 0) still executes after all synchronous code finishes.\n");