console.log("=== NODES VS ELEMENTS IN THE DOM ===\na Node is a generic term for any object inside the DOM tree.\nexamples of nodes include element nodes, text nodes, comment nodes, and the document node.\nan Element is a specific type of node created using HTML tags.\nexamples of elements include div, p, img, section, and button tags.\nevery element is a node, but not every node is an element.\ntext inside HTML becomes text nodes in the DOM.\nspaces, indentation, and line breaks also become text nodes.\nelement-based DOM properties ignore non-element nodes.\nexamples:\nchildren\nparentElement\nnextElementSibling\nnode-based properties include all node types.\nexamples:\nchildNodes\nparentNode\nnextSibling\nunderstanding the difference between nodes and elements is important for predictable DOM traversal.\n");

console.log("=== CHILDREN VS CHILDNODES IN THE DOM ===\nchildren returns an HTMLCollection containing only HTML element nodes.\nchildren ignores text nodes, comments, spaces, and line breaks.\nchildNodes returns a NodeList containing all node types.\nchildNodes includes element nodes, text nodes, comments, and whitespace.\nHTML formatting such as indentation and line breaks becomes text nodes inside the DOM.\nchildren is usually preferred for normal frontend DOM manipulation because it only returns HTML elements.\nchildNodes is useful for low-level DOM processing where access to all node types is required.\n");

// Document Type Node (nodeType === 10)

// Represents:

// <!DOCTYPE html>
// Example
// console.log(
//     document.doctype.nodeType
// );
// Output
// 10
// Why This Matters

// <!DOCTYPE html> is stored in DOM as:

// document type node
// Visual DOM Structure


// console.log(
//     document.body.childNodes[0]
//         .nodeType
// );

console.log("=== NODETYPE PROPERTY IN THE DOM ===\nevery DOM node contains a nodeType property.\nnodeType returns a numeric value representing the type of node.\ncommon node types include:\n1 -> Element Node\n2 -> Attribute Node\n3 -> Text Node\n8 -> Comment Node\n10 -> Document Type Node\nHTML tags like div, p, and img are Element Nodes.\nHTML attributes like id, class, and style are Attribute Nodes.\ntext inside HTML becomes Text Nodes.\nHTML comments become Comment Nodes.\n<!DOCTYPE html> becomes a Document Type Node.\nnodeType is useful for identifying and filtering different node types while traversing the DOM.\n");


// | Property/Method | Purpose             |
// | --------------- | ------------------- |
// | `console.dir()` | inspect node object |
// | `nodeName`      | node name           |
// | `nodeType`      | node type number    |
// | `nodeValue`     | modify text node    |
// | `data`          | modify text node    |

console.log("=== PRACTICAL DOM NODE MANIPULATION ===\nconsole.dir() displays the full JavaScript object representation of a DOM node.\nit is useful for inspecting node properties, methods, nodeType, and nodeName.\nnodeName returns the name of the node.\nnodeType returns the numeric type of the node.\ntext inside HTML is stored as Text Nodes inside the DOM.\ntext nodes can be accessed through childNodes.\nexample:\nelement.childNodes[0]\ntext node content can be modified directly using nodeValue or data.\nexamples:\ntextNode.nodeValue = 'Hello'\ntextNode.data = 'World'\ndirect text node manipulation updates content without replacing the entire HTML element structure.\n");

// Visual Prototype Chain
// <h1>
//   ↓
// HTMLHeadingElement
//   ↓
// HTMLElement
//   ↓
// Element
//   ↓
// Node
//   ↓
// Object
//   ↓
// null

console.log("=== DOM INHERITANCE AND PROTOTYPE CHAIN ===\nevery HTML element inherits from the Node class in the DOM.\nbecause of this inheritance, elements automatically gain access to properties like nodeType, nodeName, childNodes, and parentNode.\nelements also inherit additional element-specific methods and properties from Element and HTMLElement classes.\nexamples include classList, children, style, innerHTML, and querySelector().\nDOM objects follow a prototype chain hierarchy.\na simplified inheritance chain is:\nObject -> Node -> Element -> HTMLElement -> Specific HTML Element\nexample:\nObject -> Node -> Element -> HTMLElement -> HTMLHeadingElement -> <h1>\nall DOM elements ultimately inherit from the base JavaScript Object.\nnot all nodes are elements.\ntext nodes and comment nodes inherit from Node but do not have element-specific properties like classList or style.\n");

console.log('all elements are a node but not every node is an element');