// Selecting the Element
// const message =
//     document.querySelector(".message");
// 1. .remove() Method (Modern & Simple)

// Modern JavaScript provides:

// element.remove()
// Example
// message.remove();
// Result

// <p> disappears from webpage.


// .removeChild() Method (Older Approach)

// Before .remove() existed,
// developers used:

// parent.removeChild(child)
// Important Rule

// You must:

// access parent first
// Example
// const message =
//     document.querySelector(".message");

// const parent =
//     message.parentElement;

// parent.removeChild(message);
// Result

// Element is removed from DOM.

console.log("=== REMOVING ELEMENTS FROM THE DOM ===\nDOM elements can be removed manually through browser DevTools or programmatically using JavaScript.\nmodern JavaScript commonly uses the remove() method.\nexample:\nelement.remove()\nremove() directly removes the selected element from the DOM tree.\nolder JavaScript used parent.removeChild(child).\nexample:\nparentElement.removeChild(element)\nremoveChild() requires access to the parent element first.\nremove() returns undefined.\nremoveChild() returns the removed node.\nremoving an element from the DOM does not immediately destroy the JavaScript object if references still exist.\n");

console.log("=== MEMORY MANAGEMENT AND DOM ELEMENTS ===\nremoving an element from the DOM does not automatically remove it from JavaScript memory.\nDOM elements are JavaScript objects stored using references.\nif a variable still references a removed DOM element, the object remains in memory.\nexample:\nlet container = document.querySelector('.container')\ncontainer.remove()\nconsole.log(container)\nJavaScript uses garbage collection to free unused memory.\nobjects are only garbage collected when no references to them remain.\nsetting a variable to null removes the reference and allows garbage collection.\nexample:\ncontainer = null\nmemory management becomes important when working with large DOM structures or many dynamically created elements.\nkeeping unnecessary DOM references can cause memory leaks and performance issues.\n");

// | Action             | Removes From DOM | Frees Memory |
// | ------------------ | ---------------- | ------------ |
// | `element.remove()` | ✅                | ❌            |
// | `variable = null`  | ❌                | ✅            |
// | both together      | ✅                | ✅            |