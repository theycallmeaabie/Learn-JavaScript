// document.createElement("tagName")

// Important Understanding

// The browser automatically recognizes:

// the tag name
// and creates:
// the correct specialized HTML object

// | Tag Name   | Object Type            |
// | ---------- | ---------------------- |
// | `"p"`      | `HTMLParagraphElement` |
// | `"img"`    | `HTMLImageElement`     |
// | `"input"`  | `HTMLInputElement`     |
// | `"button"` | `HTMLButtonElement`    |

// Prototype Chain Example
// button
//  ↓
// HTMLButtonElement
//  ↓
// HTMLElement
//  ↓
// Element
//  ↓
// Node
//  ↓
// Object

// Invalid Tags

// You can technically create:

// document.createElement("randomTag");

// Browser creates:

// unknown/custom element

console.log("=== DOCUMENT.CREATEELEMENT() ===\ndocument.createElement() is the standard DOM method for creating new HTML elements dynamically.\nsyntax:\ndocument.createElement('tagName')\nexamples:\ndocument.createElement('p')\ndocument.createElement('div')\ndocument.createElement('img')\nthe browser automatically creates specialized HTML element objects.\nexamples include HTMLParagraphElement, HTMLImageElement, and HTMLButtonElement.\nnewly created elements initially exist only in memory and are not visible on the webpage.\ncreated elements must be inserted into the DOM using methods like append() or appendChild().\ncreateElement() is widely used for dynamic UI generation and DOM manipulation.\n");

console.log("=== APPENDING DYNAMICALLY CREATED ELEMENTS ===\ndocument.createElement() creates elements only in memory.\nnew elements do not appear on the webpage until inserted into the DOM.\nappend() is commonly used to insert created elements into the DOM tree.\nexample:\ncontainer.append(element)\nafter creation, element properties can be modified dynamically.\ncommon properties include:\ninnerText\ntextContent\nid\nsrc\nhref\nstyle\nclasses can be added safely using classList.add().\nexample:\nelement.classList.add('card')\nproperties and classes can be modified either before or after appending the element to the DOM.\n");

console.log("=== STRING TEMPLATES VS DOM METHODS ===\nthere are two common approaches for creating dynamic HTML in JavaScript:\n1. DOM methods using createElement()\n2. HTML string generation using innerHTML\nDOM methods create real DOM objects directly and are considered safer and more structured.\nframeworks like React prefer object-based DOM manipulation approaches.\ninnerHTML works by parsing HTML strings into DOM elements.\ninnerHTML is often easier and shorter for quick tasks.\nsetting innerHTML replaces all existing content inside the target element.\nreplacing content using innerHTML may remove event listeners and existing DOM state.\ninnerHTML can introduce security risks if unsafe user input is inserted.\nDOM methods combined with textContent are generally safer because they do not parse raw HTML strings.\n");

console.log("=== CUSTOM ELEMENTS AND HTMLUNKNOWNELEMENT ===\ndocument.createElement() can create elements using any tag name, even non-standard HTML tags.\nunknown or custom tag names are usually represented as HTMLUnknownElement objects.\nexample:\ndocument.createElement('procodrr')\nbrowsers do not throw errors for unknown HTML tags.\nunknown elements still behave as valid DOM element nodes.\ncustom/unknown elements behave like inline elements by default.\nunknown elements still inherit from Element and Node in the DOM hierarchy.\nmodern Web Components use officially registered custom elements with hyphenated names like my-card or user-profile.\n");

console.log("=== LIVE DOM REFERENCES ===\nwhen a DOM element is stored in a variable, the variable stores a live reference to the actual DOM object.\nJavaScript variables do not store copies of DOM elements.\nafter an element is appended to the DOM, the same object reference remains connected to the webpage.\nmodifying properties through the variable automatically updates the rendered webpage.\nexamples:\nelement.innerText = 'Hello'\nelement.style.color = 'red'\nmultiple variables can reference the same DOM element object.\nremoving an element from the DOM does not automatically destroy the JavaScript object if references still exist.\nDOM manipulation works dynamically because elements are live objects connected to the browser DOM tree.\n");