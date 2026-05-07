console.log("=== DIALOGUE BOXES ===\njavascript provides three main dialogue boxes: alert, prompt, and confirm.\nalert displays a message with an OK button.\nprompt takes input from the user with an input field and OK/Cancel buttons.\nconfirm asks for confirmation and returns true or false.\nall dialogue boxes are blocking and pause code execution until the user responds.\ntheir appearance depends on the browser.\n");

alert("Your message here");
console.log("=== ALERT DIALOG ===\nalert is used to display a simple message to the user with an OK button.\nit pauses javascript execution until the user clicks OK.\nit also blocks browser rendering while the dialog is open.\nthe appearance of the alert box depends on the browser.\nsyntax: alert('your message here');\n");

confirm("Do you want to proceed?");
console.log("=== CONFIRM DIALOG ===\nconfirm is used to ask the user for a binary decision using ok and cancel buttons.\nit pauses javascript execution until the user responds.\nit returns true if ok is clicked and false if cancel is clicked.\nit is commonly used for confirmation actions like leaving a page or deleting data.\nsyntax: confirm('your message here');\n");

prompt("Enter your name:");
console.log("=== PROMPT DIALOG ===\nprompt is used to take text input from the user through a popup dialog.\nit provides an input field along with ok and cancel buttons.\nit pauses javascript execution until the user responds.\nit returns the entered string if ok is clicked and null if cancel is clicked.\nthe input is local to the browser tab and not shared across tabs or browsers.\nsyntax: prompt('enter your value');\n");

let decision = confirm("Proceed?");
let name = prompt("Enter name:");
console.log("=== DIALOG BOX BEHAVIOR ===\nalert, confirm, and prompt are blocking and pause javascript execution until the user responds.\nconfirm returns true or false, and prompt returns a string or null, which can be stored and used in code logic.\nthese dialog boxes are browser-native features, so their appearance and behavior are controlled by the browser, not by javascript code.\n");