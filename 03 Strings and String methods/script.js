console.log("=== STRINGS ===\nstrings are used to represent text data in javascript and can be written using single quotes, double quotes, or backticks.\nthey are immutable and indexed, meaning characters cannot be changed directly but can be accessed by position.\ncommon operations include length, concatenation using +, and accessing characters using index.\nuseful methods include toUpperCase, toLowerCase, trim, slice, includes, and replace.\ntemplate literals using backticks allow embedding variables with ${}.\n");

console.log("=== STRING PROPERTY ===\nthe length property is used to get the number of characters in a string.\nit includes all characters such as letters, numbers, and spaces.\nlength is a property, so it is used without parentheses.\nthis is different from methods like toUpperCase which require parentheses.\n");

const myName = 'Aabid'
console.log(myName.length);

console.log("=== STRING METHODS ===\nstring methods are built in functions used to manipulate and work with strings.\ncommon methods include toUpperCase and toLowerCase for case conversion, trim for removing spaces, slice for extracting parts, replace for changing text, includes for checking presence, indexOf for finding position, and charAt for accessing characters.\nstrings are immutable, so these methods return new strings without modifying the original.\n");

let str = "Hello";

let upper = str.toUpperCase();
let lower = str.toLowerCase();

console.log(str);   // "Hello" (original unchanged)
console.log(upper); // "HELLO"
console.log(lower,'\n'); // "hello"

console.log("=== WHITESPACE METHODS ===\ntrim removes whitespace from both the start and end of a string. example: '  hello  '.trim() -> 'hello'.\ntrimStart removes whitespace only from the beginning. example: '  hello'.trimStart() -> 'hello'.\ntrimEnd removes whitespace only from the end. example: 'hello  '.trimEnd() -> 'hello'.\nthese methods do not modify the original string and return a new cleaned string.\n");

console.log("=== METHODS ARGUMENTS ===\nsome methods take arguments, which are values passed inside parentheses to control their behavior.\nexamples include includes('text'), indexOf('text', start), slice(start, end), and replace('old', 'new').\nsome methods do not take arguments and work on the entire value by default.\nexamples include toUpperCase(), toLowerCase(), and trim().\nmethods with arguments provide flexibility, while methods without arguments have fixed behavior.\n");


// str.includes(substring, startIndex)
// str.indexOf(substring, startIndex)
console.log("=== STRING SEARCH ARGUMENTS ===\nincludes and indexOf both take arguments.\nthe first argument is the substring to search for.\nthey also accept an optional second argument which is the starting index.\nexample: 'hello world'.includes('o', 5) -> true.\nexample: 'hello world'.indexOf('o', 5) -> 7.\n");


str = 'hello'
let result = str.replace("h", "hi");
console.log(result);

result = str.replaceAll("hello", "hi");
console.log(result); // "hi hi"

console.log("=== STRING REPLACING ===\nreplace(old, new) replaces only the first occurrence of the specified value. example: 'hello hello'.replace('hello', 'hi') -> 'hi hello'.\nreplaceAll(old, new) replaces all occurrences of the specified value. example: 'hello hello'.replaceAll('hello', 'hi') -> 'hi hi'.\nreplace replaces only the first match while replaceAll replaces every match in the string.\n");


let str1 = "Hello";
let str2 = "World";
result = str1.concat(" ", str2);
console.log(result); // "Hello World"

str1 = "Hello";
str2 = "World";
result = `${str1} ${str2}`;
console.log(result); // "Hello World"

console.log("=== CONCATENATION ===\nconcat() is used to merge multiple strings together. example: 'Hello'.concat(' ', 'World') -> 'Hello World'.\nmodern javascript prefers template literals like `${str1} ${str2}` because they are more readable and flexible.\n");


str = "123";
result = str.padStart(5, "0");
console.log(result); // "00123"

str = "123";
result = str.padEnd(5, "0");
console.log(result); // "12300"

let acc = "1234";
let masked = acc.padStart(8, "*");
console.log(masked); // "****1234"

console.log("=== STRING PADDING ===\npadStart(targetLength, char) adds characters to the beginning of a string until it reaches the target length. example: '123'.padStart(5, '0') -> '00123'.\npadEnd(targetLength, char) adds characters to the end of a string until it reaches the target length. example: '123'.padEnd(5, '0') -> '12300'.\nthese methods are useful for formatting strings, such as masking account numbers.\n");


str = "hello";
console.log(str.charAt(1)); // "e"
console.log(str[1]);        // "e"

str = "A";
console.log(str.charCodeAt(0)); // 65

console.log("😊".codePointAt(0)); // Unicode for emoji
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97

console.log("=== ACCESSING CHARACTERS ===\ncharAt(index) returns the character at a given position in the string. example: 'hello'.charAt(1) -> 'e'.\ncharCodeAt(index) returns the unicode value of the character at that index. example: 'A'.charCodeAt(0) -> 65.\ncharAt gives the character, while charCodeAt gives its numeric code.\n");

console.log("=== UNICODE ===\nunicode is a system that assigns a unique numeric code to every character.\njavascript stores strings using unicode values.\ncharCodeAt returns the unicode value of a character. example: 'A'.charCodeAt(0) -> 65.\nfor special characters like emojis, codePointAt is used.\nunicode allows support for multiple languages and symbols.\nUse codePointAt() for advanced Unicode (like emojis)\n");

console.log("=== STRING SPLIT ===\nsplit(separator) breaks a string into an array based on the given separator.\nexample: 'hello world'.split(' ') -> ['hello', 'world'].\nexample: 'a,b,c'.split(',') -> ['a','b','c'].\nexample: 'hello'.split('') -> ['h','e','l','l','o'].\nthe separator determines how the string is divided.\n");

console.log("=== TEMPLATE LITERALS ===\ntemplate literals were introduced in es6 and use backticks (`) instead of quotes.\nthey allow string interpolation using ${variable} syntax, making dynamic strings easier than using +.\nexpressions and logic can be written inside ${}.\nthey also support multi-line strings without using \\n.\ntemplate literals improve readability and flexibility in string handling.\n");