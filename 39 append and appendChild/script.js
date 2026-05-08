console.log("=== DOM SETUP AND BEST PRACTICES ===\nJavaScript may run before HTML elements are fully parsed, causing DOM selection errors.\nusing the defer attribute ensures scripts execute only after the DOM has been fully parsed.\nexample:\n<script src='script.js' defer></script>\ndefer prevents errors like 'Cannot read properties of null'.\nwithout defer, scripts may execute before elements exist in the DOM.\nmodern JavaScript commonly uses document.querySelector() for DOM selection.\nselected elements are usually stored in variables for cleaner and more efficient manipulation.\nexample:\nconst heading = document.querySelector('h1')\nstoring DOM references avoids repeated DOM searches and improves readability.\n");

console.log("=== ASYNC VS DEFER IN JAVASCRIPT ===\nby default, script tags block HTML parsing while scripts download and execute.\ndefer and async allow scripts to download in the background without blocking HTML parsing.\ndefer waits until the entire DOM is fully parsed before executing the script.\ndefer also preserves script execution order.\ndefer is preferred for DOM manipulation and most frontend applications.\nasync executes the script immediately after download, even if DOM parsing is incomplete.\nasync does not guarantee script execution order.\nasync is mainly used for independent third-party scripts like analytics or ads.\nsummary:\ndefer = execute after DOM parsing\nasync = execute as soon as possible\n");

// parent.appendChild(child);

// Creating a New Element
// const newItem =
//     document.createElement("li");

// newItem.textContent = "Two";
// Appending the Element
// const list =
//     document.getElementById("list");

// list.appendChild(newItem);
// Result

// HTML becomes:

// <ul id="list">

//     <li>One</li>
//     <li>Two</li>

// </ul>
// Important Behavior

// appendChild() inserts:

// at the END
// of the parent element


// | Feature               | `appendChild()` |
// | --------------------- | --------------- |
// | appends at end        | ✅               |
// | moves existing node   | ✅               |
// | accepts strings       | ❌               |
// | accepts one node only | ✅               |
// | returns appended node | ✅               |

console.log("=== APPENDCHILD() METHOD ===\nappendChild() inserts a node at the end of a parent element.\nsyntax:\nparent.appendChild(child)\nappendChild() performs a move operation, not a copy.\nif an existing node is appended elsewhere, it is removed from its old parent and moved to the new parent.\na DOM node can only exist in one location at a time.\nappendChild() accepts only one Node as an argument.\npassing a raw string to appendChild() causes an error.\ntext must first be converted into a Text Node using createTextNode().\nappendChild() returns the node that was successfully appended.\nappendChild() is commonly used for dynamically creating lists, components, and UI elements.\n");

// The cloneNode() Method in JavaScript

// cloneNode() is used to:

// duplicate an existing DOM node.

// Unlike appendChild():

// cloning creates a COPY
// without removing the original element


// Basic Syntax
// node.cloneNode(deep)
// Important Parameter

// cloneNode() accepts:

// one boolean argument
// Value	Meaning
// false	shallow clone
// true	deep clone

// | Method             | Result            |
// | ------------------ | ----------------- |
// | `cloneNode(false)` | element only      |
// | `cloneNode(true)`  | full subtree copy |

console.log("=== CLONENODE() METHOD ===\ncloneNode() is used to duplicate DOM nodes.\nsyntax:\nnode.cloneNode(deep)\ncloneNode(false) creates a shallow clone containing only the element itself.\ncloneNode(true) creates a deep clone containing the element, all children, nested elements, and text nodes.\ndeep cloning is commonly used for duplicating templates, cards, lists, and UI components.\ncloneNode() creates a copy without removing the original element from the DOM.\nthis differs from appendChild(), which moves existing nodes.\ncloning also copies element attributes such as class and id.\ncare must be taken to avoid duplicate IDs after cloning.\ncloneNode() does not automatically copy JavaScript event listeners.\n");

// Example Problem
// document.body.appendChild("Hello");
// Result

// ❌ Error

// Because:

// "Hello" is a string
// NOT a DOM node


// Basic Syntax
// document.createTextNode("Hello")
// Example
// const textNode =
//     document.createTextNode("Hello");
// What Gets Created
// #text

// node containing:

// "Hello"
// Appending the Text Node
// document.body.appendChild(textNode);
// Result

// HTML displays:

// Hello

console.log("=== TEXT NODES AND CREATETEXTNODE() ===\nappendChild() only accepts DOM nodes and cannot directly append raw strings.\nplain text inside the DOM is represented as Text Nodes.\ndocument.createTextNode() is used to create a Text Node from a string.\nexample:\ndocument.createTextNode('Hello')\ncreated text nodes can then be inserted using appendChild().\nexample:\nelement.appendChild(textNode)\ncreateTextNode() treats content as plain text and does not parse HTML tags.\nthis helps prevent accidental HTML injection.\ntextContent is a simpler modern alternative for updating plain text.\n");

// | Feature                | `appendChild()` | `append()` |
// | ---------------------- | --------------- | ---------- |
// | accepts strings        | ❌              | ✅        |
// | accepts multiple items | ❌              | ✅        |
// | accepts nodes          | ✅              | ✅        |
// | returns appended node  | ✅              | ❌        |
// | modern method          | older           | newer      |

console.log("=== APPEND() METHOD ===\nappend() is a modern DOM method used to insert content at the end of an element.\nappend() is more flexible than appendChild().\nappend() accepts strings, DOM nodes, text nodes, and multiple arguments in a single call.\nexample:\nelement.append('Hello', node)\nappend() automatically converts strings into Text Nodes internally.\nappendChild() only accepts a single DOM node and cannot append raw strings directly.\nappend() returns undefined.\nappendChild() returns the appended node.\nlike appendChild(), append() also moves existing DOM nodes instead of cloning them.\nappend() is commonly preferred in modern JavaScript because of its flexibility and cleaner syntax.\n");

console.log("=== CAN PARENTS BE APPENDED? ===\nparent elements can be appended and moved like any other DOM node.\nwhen a parent element moves, all of its children move with it.\na DOM node cannot be appended inside one of its own descendants.\nthis would create a circular DOM tree, which is invalid.\nexample of invalid operation:\nchild.append(parent)\nwhen child already exists inside parent.\na node also cannot append itself.\nexample:\ndiv.append(div)\nbrowsers usually throw a HierarchyRequestError for invalid tree structures.\nthe DOM must always remain a valid hierarchical tree without cycles.\n");

// | Operation                  | Valid? |
// | -------------------------- | ------ |
// | append child to new parent | ✅      |
// | append parent elsewhere    | ✅      |
// | append parent inside child | ❌      |
// | append element into itself | ❌      |
