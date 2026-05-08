// element.parentElement

// console.log(
//     paragraph
//         .parentElement
//         .parentElement
//         .parentElement
// );

// | Property        | Purpose                 |
// | --------------- | ----------------------- |
// | `parentElement` | parent HTML element     |
// | `parentNode`    | parent node of any type |


console.log("=== ACCESSING PARENT ELEMENTS IN THE DOM ===\nparentElement is used to retrieve the direct parent HTML element of a DOM node.\nexample:\nelement.parentElement\nparentElement can be chained multiple times to move upward through the DOM tree.\nexample:\nelement.parentElement.parentElement\nparentNode is similar to parentElement but can return non-element node types.\nparentNode may return document nodes, text nodes, or comment nodes.\nparentElement only returns HTML element nodes.\nparent traversal is commonly used in nested UI structures, forms, cards, menus, and event delegation.\n");

// element.children

// Example HTML
// <div id="box">

//     <h1>Hello</h1>

//     <p>Welcome</p>

// </div>
// JavaScript
// const box =
//     document.getElementById("box");

// console.log(box.children);
// Output
// HTMLCollection(2)

// containing:

// <h1>
// <p></p>

// Example HTML
// <div id="box">

//     <h1>Hello</h1>

//     <p>Welcome</p>

// </div>
// JavaScript
// console.log(box.childNodes);
// Output Conceptually
// NodeList(5)

// containing:

// whitespace text node
// <h1>
// whitespace text node
// <p>
// whitespace text node


// | Property     | Returns            |
// | ------------ | ------------------ |
// | `children`   | HTML elements only |
// | `childNodes` | all nodes          |

console.log("=== ACCESSING CHILD ELEMENTS IN THE DOM ===\nchildren returns an HTMLCollection containing only HTML element nodes.\nchildren ignores text nodes, comments, and whitespace.\nif no child elements exist, children returns an empty HTMLCollection.\nchildNodes returns a NodeList containing all node types inside an element.\nchildNodes includes element nodes, text nodes, comments, and whitespace.\nHTML formatting such as spaces and line breaks becomes text nodes in the DOM.\nchildNodes often contains more items than children because of whitespace text nodes.\nchildren is more commonly used for normal frontend DOM manipulation.\n");

// | Property                 | Returns          |
// | ------------------------ | ---------------- |
// | `nextElementSibling`     | next element     |
// | `previousElementSibling` | previous element |
// | `nextSibling`            | next node        |
// | `previousSibling`        | previous node    |


console.log("=== ACCESSING SIBLING ELEMENTS IN THE DOM ===\nnextElementSibling returns the next sibling that is an HTML element.\npreviousElementSibling returns the previous sibling that is an HTML element.\nif no sibling element exists, these properties return null.\nnextElementSibling and previousElementSibling ignore text nodes, comments, and whitespace.\nnextSibling and previousSibling return all node types, including text nodes and whitespace.\nHTML formatting such as spaces and line breaks becomes text nodes inside the DOM.\nusing nextSibling or previousSibling may unexpectedly return whitespace text nodes instead of HTML elements.\nfor normal frontend development, nextElementSibling and previousElementSibling are usually safer and preferred.\n");

// What Is a Node?

// In the DOM:

// everything is a node.

// This includes:

// HTML elements
// text
// comments
// document itself

console.log("=== ELEMENTS VS NODES IN THE DOM ===\nin the DOM, everything is considered a node, including elements, text, comments, and the document itself.\nelements specifically refer to HTML tags like div, p, img, and section.\ntext, spaces, and line breaks inside HTML become text nodes in the DOM.\nelement-based properties ignore non-element nodes such as text and comments.\nexamples:\nchildren\nnextElementSibling\npreviousElementSibling\nparentElement\nnode-based properties include all node types.\nexamples:\nchildNodes\nnextSibling\npreviousSibling\nparentNode\nelement-based APIs are usually preferred in frontend development because they make DOM traversal cleaner and more predictable.\n");