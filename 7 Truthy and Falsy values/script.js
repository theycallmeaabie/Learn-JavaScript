console.log("=== TRUTHY AND FALSY ===\nin javascript, every value is treated as either truthy or falsy when converted to boolean.\nthis happens automatically in conditions and is called type coercion.\nBoolean(value) can be used to check the boolean conversion manually.\nfalsy values include false, 0, empty string, null, undefined, and NaN.\nall other values are truthy.\n");

console.log("=== FALSY VALUES ===\nfalsy values are values that convert to false in a boolean context.\nthe list includes 0, -0, 0n, empty string \"\", null, undefined, false, and NaN.\na string with a space like \" \" is truthy because it is not empty.\nall other values in javascript are truthy.\n");

console.log(Boolean(""));  // false
console.log(Boolean(" ")); // true