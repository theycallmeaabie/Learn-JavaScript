console.log("=== UNDERSTANDING HTML ATTRIBUTES ===\nHTML attributes are additional properties written inside an element's opening tag.\nattributes provide extra information or configuration for HTML elements.\ncommon attributes include id, class, src, href, alt, and style.\nattributes become accessible as DOM properties in JavaScript.\nexample:\nimage.src\nJavaScript can dynamically read, modify, add, or remove attributes.\ncustom attributes can also be created and stored in the DOM.\nexample:\nprocodrr='name'\ncustom attributes can be targeted using CSS attribute selectors and JavaScript.\nmodern HTML recommends using data-* attributes for custom data storage.\nexamples:\ndata-user='Aabid'\nimportant attribute methods include getAttribute(), setAttribute(), and removeAttribute().\n");

// | Attribute Type     | Example                |
// | ------------------ | ---------------------- |
// | Standard           | `src`, `href`, `class` |
// | Custom             | `procodrr="name"`      |
// | Recommended Custom | `data-user="Aabid"`    |

console.log("=== ACCESSING HTML ATTRIBUTES IN JAVASCRIPT ===\nconsole.dir() displays the full JavaScript object representation of a DOM element.\nit is useful for inspecting DOM properties, methods, and attributes.\nDOM elements contain an attributes property storing all HTML attributes as key-value pairs.\nexample:\nelement.attributes\nspecific attributes can be accessed through the attributes collection.\nexample:\nelement.attributes.src.value\nmodern JavaScript more commonly uses getAttribute() for reading attribute values.\nbrowser DevTools also allow inspection of DOM properties through the Properties tab.\nthe Properties tab displays the live DOM object created by the browser, not just raw HTML source.\n");

// element.getAttribute("attributeName")

// const image =
//     document.getElementById("photo");

// console.log(
//     image.getAttribute("src")
// );

// | Feature                      | Meaning             |
// | ---------------------------- | ------------------- |
// | `getAttribute("src")`        | get attribute value |
// | Missing attribute            | returns `null`      |
// | Works with custom attributes | Yes                 |
// | Return type                  | string or null      |

console.log("=== GETATTRIBUTE() METHOD ===\ngetAttribute() is the cleanest and most common way to retrieve an HTML attribute value.\nsyntax:\nelement.getAttribute('attributeName')\ngetAttribute() works with both standard and custom attributes.\nexamples:\ngetAttribute('src')\ngetAttribute('href')\ngetAttribute('data-user')\nif the attribute does not exist, getAttribute() returns null.\ngetAttribute() is cleaner and more readable than accessing values through the attributes collection.\ngetAttribute() retrieves the attribute value stored in the DOM/HTML.\nit is commonly used for reading dynamic element configuration and metadata.\n");

// element.setAttribute(
//     "attributeName",
//     "value"
// );

// const heading =
//     document.getElementById("title");

// heading.setAttribute(
//     "class",
//     "main-heading"
// );

// | Method              | Purpose         |
// | ------------------- | --------------- |
// | `getAttribute()`    | read attribute  |
// | `setAttribute()`    | create/update   |
// | `removeAttribute()` | delete          |
// | `hasAttribute()`    | check existence |

console.log("=== SETATTRIBUTE() METHOD ===\nsetAttribute() is used to create or update HTML attributes dynamically.\nsyntax:\nelement.setAttribute('attributeName', 'value')\nsetAttribute() requires two arguments: attribute name and attribute value.\nif the attribute already exists, its value is updated.\nif the attribute does not exist, it is created automatically.\nsetAttribute() modifies the DOM directly.\nstandard attributes can trigger built-in browser behavior.\nexample:\nsetting the title attribute creates browser tooltips on hover.\ncustom attributes can also be created using setAttribute().\nmodern HTML recommends using data-* attributes for custom data storage.\nrelated methods include getAttribute(), removeAttribute(), and hasAttribute().\n");

console.log("=== DIRECT PROPERTY ACCESS VS ATTRIBUTE METHODS ===\nmany standard HTML attributes are mapped directly to DOM object properties.\ncommon examples include id, className, src, href, and value.\nthese properties can be accessed and modified using dot notation.\nexamples:\nelement.id\nelement.className\nelement.src\nin JavaScript, className is used instead of class because class is a reserved keyword.\ndirect property access is cleaner and simpler for standard attributes.\ncustom attributes are not always mapped to direct DOM properties.\nfor custom or arbitrary attributes, getAttribute() and setAttribute() should be used.\nexample:\nelement.getAttribute('procodrr')\nelement.setAttribute('procodrr', 'javascript')\nmodern HTML recommends using data-* attributes for storing custom data.\n");