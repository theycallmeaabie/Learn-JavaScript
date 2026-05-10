console.log("=== INTRODUCTION TO EVENTS IN JAVASCRIPT ===\nevents allow JavaScript to respond to user interactions and browser actions.\ncommon interactions include clicking, hovering, typing, scrolling, and form submission.\nan event listener waits for a specific event to occur and then executes a function.\nmodern JavaScript uses addEventListener() to attach event listeners.\nsyntax:\nelement.addEventListener('eventName', callbackFunction)\nexamples of common events include:\nclick\ndblclick\nmouseover\nkeydown\nsubmit\ninput\nevent listeners make webpages interactive and dynamic.\nJavaScript frontend programming is heavily event-driven.\n");


console.log("=== METHODS FOR ADDING EVENT LISTENERS ===\nJavaScript supports multiple ways to attach event listeners to elements.\n1. Inline HTML Attributes:\nexample:\n<button onclick='alert()'>\nthis approach mixes JavaScript logic directly with HTML structure and is generally discouraged.\n2. DOM Property Method:\nexample:\nelement.onclick = function() {}\nthis keeps JavaScript inside JS code instead of HTML.\na major limitation is that only one function can be assigned per event type.\nassigning a new function overwrites the previous one.\nmodern JavaScript usually prefers addEventListener() because it supports multiple event handlers and cleaner code organization.\n");


// | Event     | Example               |
// | --------- | --------------------- |
// | click     | clicking button       |
// | dblclick  | double-clicking       |
// | mouseover | hovering mouse        |
// | keydown   | pressing keyboard key |
// | submit    | submitting form       |
// | input     | typing in input box   |


// element.addEventListener(
//     "eventType",
//     callbackFunction
// );

console.log("=== ADDEVENTLISTENER() METHOD ===\naddEventListener() is the modern and recommended way to attach events in JavaScript.\nsyntax:\nelement.addEventListener('eventType', callbackFunction)\nexample:\nbutton.addEventListener('click', function() {})\naddEventListener() allows multiple event listeners for the same event type on the same element.\nunlike .onclick, it does not overwrite previous listeners.\ncallback functions passed to addEventListener() execute only when the event occurs.\ncommon event types include click, dblclick, mouseover, keydown, input, and submit.\naddEventListener() also supports advanced event features such as removing listeners and event propagation control.\n");

