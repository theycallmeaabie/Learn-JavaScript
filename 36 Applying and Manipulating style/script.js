// element.style

// const heading =
//     document.getElementById("title");

// // console.log(heading.style);

// heading.style.color = "red";

console.log("=== ACCESSING STYLES IN JAVASCRIPT ===\nevery DOM element has a style property accessible through element.style.\nelement.style returns an object containing CSS properties.\nJavaScript uses camelCase naming for CSS properties.\nexamples:\nbackgroundColor\nfontSize\nborderRadius\ncamelCase is required because JavaScript property names cannot contain hyphens.\nstyles can be modified dynamically using dot notation.\nexample:\nelement.style.color = 'red'\nelement.style primarily accesses inline styles.\nexternal stylesheet styles are not directly available through element.style.\ngetComputedStyle() is used to retrieve actual computed/rendered styles.\n");

console.log("=== DOM STYLE MANIPULATION AND CSS SPECIFICITY ===\nelement.style modifies inline CSS styles directly on DOM elements.\nchanges made through element.style update the webpage immediately.\ninline styles generally override external CSS rules because they have higher specificity.\nexample:\nelement.style.color = 'red'\nelement.style only reflects inline styles or styles added dynamically through JavaScript.\nit does not directly show styles coming from external CSS files or style tags.\nexternal CSS values usually appear as empty strings when accessed through element.style.\ngetComputedStyle() is used to retrieve the final rendered/computed CSS values.\nexample:\ngetComputedStyle(element).color\n");

// | Feature                | `element.style` |
// | ---------------------- | --------------- |
// | modifies inline styles | Yes             |
// | reads inline styles    | Yes             |
// | reads external CSS     | No              |
// | overrides external CSS | Usually yes     |

// const items =
//     document.querySelectorAll(".item");

// for(let item of items) {

//     item.style.backgroundColor =
//         "yellow";

// }

console.log("=== BATCH DOM MANIPULATION WITH LOOPS ===\ndocument.querySelectorAll() returns multiple matching elements inside a NodeList.\na NodeList is a collection, not a single DOM element.\nstyles or properties cannot be applied directly to the entire NodeList.\nlooping is required to manipulate each element individually.\nfor...of is a clean and efficient way to iterate through a NodeList.\nexample:\nfor(let item of elements) {\n    item.style.color = 'red';\n}\nbatch manipulation allows multiple DOM elements to be updated simultaneously.\nNodeList also supports forEach() for iteration.\nbatch DOM updates are commonly used for themes, menus, cards, animations, and UI updates.\n");

// const box =
//     document.querySelector(".box");

// box.style.cssText = `
//     width: 200px;
//     height: 200px;
//     background-color: blue;
//     border-radius: 10px;
// `;

console.log("=== ADVANCED STYLE HANDLING IN JAVASCRIPT ===\nCSS shorthand properties control multiple related styles together.\nusing shorthand properties in JavaScript can accidentally overwrite existing related styles.\nexample:\ntextDecoration\nspecific sub-properties like textDecorationLine provide finer control.\nexamples:\ntextDecorationLine\ntextDecorationColor\nusing specific sub-properties helps avoid unintended style overrides.\nelement.style.cssText allows multiple CSS rules to be applied at once.\ncssText accepts standard CSS syntax instead of camelCase JavaScript property names.\nbackticks (template literals) allow multiline CSS strings for cleaner formatting.\nexample:\nelement.style.cssText = `\n    color: white;\n    background-color: black;\n`;\nassigning to cssText replaces existing inline styles.\n");

// className

// className represents:

// ALL classes of an element
// as a single string
// Example HTML
// <div class="card active">
//     Hello
// </div>
// JavaScript
// const div =
//     document.querySelector("div");

// console.log(div.className);
// Output
// card active


// classList (Preferred Modern Approach)

// classList provides:

// safe class manipulation methods

// without replacing all classes.

// Example
// console.log(div.classList);
// Output
// DOMTokenList

// containing individual classes.

// .add()

// Adds a class while preserving existing ones.

// Example
// div.classList.add("dark");
// Result

// HTML becomes:

// <div class="card active dark"></div>


// | Method        | Purpose                  |
// | ------------- | ------------------------ |
// | `.add()`      | add class                |
// | `.remove()`   | remove class             |
// | `.toggle()`   | add/remove automatically |
// | `.contains()` | check existence          |


console.log("=== CLASSNAME VS CLASSLIST ===\nclassName stores all element classes as a single string.\nassigning a value to className replaces all existing classes.\nexample:\nelement.className = 'dark'\nthis can accidentally remove important existing classes.\nclassList is the preferred modern approach for class manipulation.\nclassList provides safe methods for adding, removing, and toggling classes.\nclassList.add('className') adds a class without removing existing classes.\nclassList.remove('className') removes a specific class.\nclassList.toggle('className') adds the class if missing or removes it if already present.\nclassList.toggle() is very useful for features like dark mode, dropdowns, and hamburger menus.\nadditional useful methods include classList.contains() and classList.replace().\n");

