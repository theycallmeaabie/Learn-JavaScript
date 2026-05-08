console.log("=== BROWSER OBJECT MODEL (BOM) ===\nBOM stands for Browser Object Model.\nit allows JavaScript to interact with the browser environment.\nthe main BOM object is window.\nin browsers, window acts as the global object.\nBOM provides access to browser features like URLs, history, navigation, dialogs, timers, and screen information.\nimportant BOM objects include:\n- window\n- location\n- history\n- navigator\n- screen\nlocation object handles URL and page navigation.\nhistory object manages browser history.\nnavigator object provides browser and system information.\nscreen object provides screen dimensions.\nalert(), prompt(), confirm(), setTimeout(), and setInterval() are also part of BOM.\nBOM focuses on browser-level interactions, while DOM focuses on HTML document manipulation.\nthe term Browser Object Model (BOM) is mostly a community/conceptual name, not an official standardized specification like the DOM.\n");

console.log("=== THE WINDOW OBJECT IN JAVASCRIPT ===\nwindow is the global object provided by the browser.\nit represents the browser window or browser tab.\nmost browser APIs and global methods belong to the window object.\nexamples include alert(), prompt(), confirm(), setTimeout(), location, history, and document.\nproperties and methods of window can usually be accessed directly without writing window. prefix.\nexample:\nalert('hello') is equivalent to window.alert('hello')\nin browsers, globally declared variables using var become properties of window.\nglobal functions also become methods of window.\nwindow acts as the main entry point for interacting with browser features and the BOM.\n");

// console.log(location);
// console.log(window.location);
// console.log(location.href);
// location.href

console.log("=== LOCATION, HISTORY, AND WINDOW DIMENSIONS ===\nlocation object is used to interact with the current page URL.\nlocation.href represents the full URL and can also redirect users by assigning a new URL.\nlocation.reload() refreshes the current page programmatically.\nhistory object allows navigation through browser history.\nhistory.back() moves one step backward.\nhistory.forward() moves one step forward.\nhistory.go(n) navigates a specific number of steps.\nnegative values move backward, positive values move forward, and 0 reloads the page.\nwindow.innerWidth and window.innerHeight return viewport dimensions excluding browser UI.\nwindow.outerWidth and window.outerHeight include browser UI elements like toolbars and tabs.\ninner dimensions represent visible webpage area, while outer dimensions represent total browser window size.\n");

// console.log(innerHeight);

// window.open("https://example.com", "_blank");
// | Target    | Meaning          |
// | --------- | ---------------- |
// | `_blank`  | new tab/window   |
// | `_self`   | same tab         |
// | `_parent` | parent frame     |
// | `_top`    | top-level window |

// window.open(
//     "https://example.com",
//     "_blank",
//     "width=400,height=400"
// );

// window.open('url','_blank','resizable')

console.log("=== WINDOW OPENING, MANIPULATION, AND SCROLLING ===\nwindow.open() opens new browser tabs or windows.\nwindow.close() attempts to close the current browser window.\nmodern browsers usually only allow JavaScript to close windows opened through window.open().\nresizeTo() sets an exact browser window size.\nresizeBy() changes the current window size relatively.\nmoveTo() moves the browser window to exact screen coordinates.\nmoveBy() moves the browser window relative to its current position.\nmodern browsers heavily restrict moving and resizing windows for security reasons.\nscrollTo() scrolls the page to an exact position.\nscrollBy() scrolls relative to the current scroll position.\nscrolling methods support smooth scrolling using behavior: 'smooth'.\nwindow.print() opens the browser's native print dialog.\n");

console.log("=== BOM, DOM, AND WEB APIS ===\nBOM and DOM are examples of Web APIs provided by browsers.\nJavaScript itself is only a programming language and does not directly control browsers or webpages.\nbrowsers provide APIs that allow JavaScript to interact with browser features and webpage structures.\nBOM (Browser Object Model) focuses on browser-level functionality such as window, history, location, and screen.\nDOM (Document Object Model) focuses on HTML documents and webpage elements.\nexamples of BOM APIs include alert(), location.href, and history.back().\nexamples of DOM APIs include document.querySelector() and document.createElement().\nWeb APIs are provided by browsers like Chrome, Firefox, Safari, and Edge.\nwithout Web APIs, JavaScript could only perform logic and calculations without interacting with webpages.\n");

console.log("=== BOM VS DOM ===\nBOM (Browser Object Model) allows JavaScript to interact with the browser itself.\nBOM handles browser-level features such as URLs, history, tabs, navigation, dialogs, and screen information.\nDOM (Document Object Model) allows JavaScript to manipulate HTML elements and webpage content.\nDOM can change text, styles, images, attributes, and page structure dynamically.\nBOM focuses on the browser environment, while DOM focuses on the webpage document.\nmain BOM object: window\nmain DOM object: document\nexamples:\n- BOM -> location.href, alert(), history.back()\n- DOM -> document.querySelector(), element.textContent\nDOM enables interactive and dynamic webpages without page reloads.\n");