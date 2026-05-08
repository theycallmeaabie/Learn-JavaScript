console.log("=== TRADITIONAL DOM SELECTION METHODS ===\nmanual DOM traversal uses properties like document.body.children to navigate the DOM tree.\nthis approach becomes difficult and inefficient for deeply nested HTML structures.\ngetElementsByTagName() selects all elements with a specific HTML tag.\nit returns an HTMLCollection, which is array-like but not a real array.\ngetElementsByClassName() selects all elements sharing the same CSS class.\nit also returns an HTMLCollection.\ngetElementById() selects a single unique element using its ID.\nif no matching element exists, getElementById() returns null.\ntraditional DOM selection methods are older APIs and are less flexible than modern querySelector methods.\n");

// What Is an HTMLCollection?

// It is:

// array-like
// index-based
// iterable

// const el =
//     document.getElementById("missing");

// if(el) {
//     console.log(el.textContent);
// }



// const item =
//     document.querySelector(".text");

// console.log(item);

// const items =
//     document.querySelectorAll(".text");

// items.forEach((item) => {
//     console.log(item);
// });

// | Method               | Returns       | Selects     |
// | -------------------- | ------------- | ----------- |
// | `querySelector()`    | first element | one match   |
// | `querySelectorAll()` | NodeList      | all matches |

console.log("=== MODERN DOM SELECTION METHODS ===\ndocument.querySelector() selects the first element matching a CSS selector.\ndocument.querySelectorAll() selects all matching elements.\nboth methods use standard CSS selector syntax.\n# is used for IDs.\n. is used for classes.\nquerySelector() returns only the first matching element.\nquerySelectorAll() returns a NodeList containing all matching elements.\nNodeList is array-like and supports methods such as forEach().\nmodern DOM selection methods are more flexible and readable than older methods like getElementsByClassName() or getElementsByTagName().\nquerySelector and querySelectorAll are the recommended modern DOM selection approaches.\n");


// | Selector Symbol | Meaning         |
// | --------------- | --------------- |
// | `#id`           | select by ID    |
// | `.class`        | select by class |
// | `tag`           | select by tag   |

// | Selector   | Meaning                   |
// | ---------- | ------------------------- |
// | `p.text`   | `<p>` with class          |
// | `h1#title` | `<h1>` with ID            |
// | `div p`    | `<p>` inside `<div>`      |
// | `div > p`  | direct child `<p>`        |
// | `.a.b`     | element with both classes |
// | `h1, p`    | all `<h1>` and `<p>`      |

console.log("=== ATTRIBUTE SELECTORS IN JAVASCRIPT ===\nattribute selectors allow DOM elements to be selected based on HTML attributes.\nattribute selectors work with querySelector() and querySelectorAll().\nsyntax:\n[attribute]\nselects elements containing the attribute.\nsyntax:\n[attribute='value']\nselects elements with an exact attribute value.\nexamples:\n[href]\n[type='password']\ninput[type='text']\nattribute selectors can also perform partial matching.\n^= means starts with.\n$= means ends with.\n*= means contains.\nexamples:\n[href^='https']\n[src$='.png']\n[class*='card']\nattribute selectors are commonly used for forms, links, images, and custom data attributes.\n");

// | Property      | Purpose            |
// | ------------- | ------------------ |
// | `src`         | image/video source |
// | `href`        | link destination   |
// | `textContent` | text content       |
// | `innerHTML`   | HTML content       |
// | `style`       | CSS styling        |

// Selecting Multiple Elements
// const paragraphs =
//     document.querySelectorAll(".text");
// Looping with forEach()
// paragraphs.forEach((paragraph) => {

//     paragraph.style.color = "red";

// });

// Convert to Array (Modern Approach)

// Use spread operator:

// [...collection]
// Example
// const items =
//     document.getElementsByClassName("text");

// const arrayItems = [...items];

// arrayItems.forEach((item) => {

//     item.style.color = "green";

// });

console.log("=== ADVANCED DOM MANIPULATION & LOOPING ===\nDOM manipulation allows dynamic updates to webpage elements without reloading.\nproperties like src, href, textContent, innerHTML, and style can be modified dynamically.\nexample:\nimage.src = 'dog.jpg'\nmultiple elements can be updated by looping through selected collections.\nquerySelectorAll() returns a NodeList, which supports forEach().\nexample:\nnodeList.forEach((item) => {})\nolder methods like getElementsByClassName() return an HTMLCollection.\nHTMLCollection is array-like but does not directly support forEach().\nHTMLCollection can be converted into a real array using the spread operator.\nexample:\n[...collection]\nconverting collections into arrays allows use of array methods like forEach(), map(), and filter().\n");

console.log("=== SCOPED DOM SELECTION ===\nscoped selection means searching for elements inside a specific parent element instead of the entire document.\nsyntax:\nparent.querySelector(selector)\nparent.querySelectorAll(selector)\nscoped selection limits DOM searching to the children of the selected parent element.\nthis makes element selection more precise, cleaner, and easier to maintain.\nscoped selection can also improve performance on large webpages by reducing search scope.\nquerySelector() and querySelectorAll() are not limited to the document object.\nany DOM element can use them for nested selection.\nscoped selection is heavily used in component-based frontend development.\n");

console.log("=== COPYING JS PATHS IN DEVTOOLS ===\nbrowser DevTools provide a 'Copy JS Path' feature for automatically generating precise DOM selectors.\nit can be accessed by right-clicking an inspected element and selecting Copy > Copy JS Path.\nthe browser generates JavaScript code, usually using querySelector().\ngenerated selectors often include nested paths, classes, IDs, and nth-child() selectors.\nnth-child() selects elements based on their position inside a parent.\nCopy JS Path is useful for debugging, testing, automation, and understanding complex DOM structures.\nautomatically generated selectors can become fragile if the HTML structure changes.\nfor production code, developers usually prefer cleaner and more maintainable selectors.\n");