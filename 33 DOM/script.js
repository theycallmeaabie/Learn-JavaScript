// Browser Converts This Into Objects

// Internally the browser creates something conceptually like:

// document = {
//     html: {
//         head: {
//             title: "My Page"
//         },

//         body: {
//             h1: "Hello",
//             p: "Welcome"
//         }
//     }
// }


// DOM Tree
// document
//    |
//   html
//   /   \
// head   body
//  |     /   \
// title h1    p

console.log("=== WHAT IS THE DOM? ===\nDOM stands for Document Object Model.\nit is a programming interface provided by browsers for interacting with HTML documents.\nthe browser's HTML parser converts HTML elements into JavaScript objects stored in memory.\nevery HTML element becomes an object that JavaScript can access and manipulate.\nthe DOM represents the webpage as a hierarchical tree structure.\nat the top of the hierarchy is the document object.\ninside document is the html element, which contains head and body.\nDOM elements have parent-child relationships.\nJavaScript uses the DOM to change webpage content, styles, structure, and behavior dynamically.\nDOM enables interactive and dynamic web applications.\n");

// const container = document.getElementById("container");

// console.log(container.children);

// console.log(container.children[0]);
// console.log(container.children[1]);

console.log("=== DOM STRUCTURE AND PROPERTIES ===\nDOM elements are organized in a hierarchical parent-child tree structure.\nevery element except html has a parent element.\nelements can also have multiple children and sibling elements.\nthe children property returns child HTML elements of a DOM node.\nparentElement accesses an element's parent.\nnextElementSibling and previousElementSibling access sibling elements.\nHTML attributes such as src, href, alt, id, class, and style become properties on DOM objects.\nthese attributes can be accessed and modified dynamically using JavaScript.\nstyle property allows dynamic CSS manipulation using camelCase property names.\nDOM relationships and attributes are essential for creating interactive and dynamic webpages.\n");

// innerText
// respects CSS visibility
// only returns visible text
// affected by styling/layout
// textContent
// returns ALL text
// includes hidden content
// faster and simpler
// Example
// <p id="demo">
//     Hello
//     <span style="display:none">Hidden</span>
// </p>
// JavaScript
// const p = document.getElementById("demo");

// console.log(p.innerText);
// console.log(p.textContent);
// Output
// Hello

// Hello Hidden

// Why?

// Because:

// innerText ignores hidden text
// textContent includes all text nodes

console.log("=== DOM MANIPULATION IN JAVASCRIPT ===\nDOM manipulation allows JavaScript to dynamically change webpage content, structure, styles, and attributes.\nelements can be selected using DOM navigation methods like document.body.children[index] or selector methods like querySelector().\ninnerHTML updates content and interprets HTML tags.\nexample:\nelement.innerHTML = '<i>Hello</i>'\ninnerText updates only visible text and does not parse HTML.\ntextContent also updates plain text but includes hidden text nodes.\ninnerHTML parses HTML, while innerText and textContent treat values as plain text.\nDOM manipulation allows dynamic updates without page reloads.\nattributes like src, href, and style can be modified dynamically.\nchanging an image element's src property updates the displayed image instantly.\nDOM manipulation is the foundation of interactive and dynamic web applications.\n");

console.log("=== GLOBAL VARIABLES IN BROWSER DEVTOOLS ===\nbrowser DevTools allow elements to be stored as temporary global variables using 'Store as global variable'.\nthis creates references like temp1, temp2, etc.\nthese variables point to selected DOM elements and can be used directly in the console.\nexample:\ntemp1.style.color = 'red'\nthis feature is useful for debugging, DOM testing, and experimenting quickly.\nthese global variables exist only inside the browser console and are not part of the webpage source code.\nDevTools also provide shortcuts like $0 for accessing the currently selected element.\n");

console.log("=== WINDOW VS DOCUMENT ===\nwindow represents the entire browser window or browser tab.\ndocument represents the HTML webpage loaded inside the browser.\nwindow is the global object in browsers and is part of the BOM (Browser Object Model).\ndocument is the entry point to the DOM (Document Object Model).\nwindow controls browser-level features such as URL, history, navigation, alerts, and screen size.\ndocument controls webpage content such as HTML elements, text, images, and styles.\ndocument is actually a property of the window object.\nexample:\nwindow.document\nwindow focuses on browser interaction, while document focuses on webpage manipulation.\n");