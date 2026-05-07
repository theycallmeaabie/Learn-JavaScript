console.log("=== ARRAYS INTRODUCTION ===\narrays are used to store collections of multiple values in a single variable.\narrays are created using square brackets []. example: let arr = [1,2,3].\narray elements are accessed using indexes starting from 0. example: arr[0] -> 1.\nin javascript, arrays are technically objects, so typeof arr returns 'object'.\nfunctions are also objects internally, although typeof returns 'function' as a special case.\narrays are special objects designed for ordered data and provide built in methods like push() and pop().\n");

let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
let arr = [1, 2, 3];
console.log(typeof arr); // "object"
function greet() {}
console.log(typeof greet); // "function"

console.log(typeof [].concat); // "function"

console.log("=== TYPEOF CONCAT ===\n[].concat accesses the concat method of an array.\nconcat is a function, so typeof [].concat returns 'function'.\narrays are objects and can contain methods which are functions attached to the object.\nexample: [1,2].concat([3,4]) -> [1,2,3,4].\n");

console.log("=== ARRAY INDEXES & LENGTH ===\narrays are zero indexed, meaning the first element is at index 0.\nexample: let arr = ['a','b','c']; arr[0] -> 'a'.\narray values are accessed using square brackets. example: arr[1] -> 'b'.\narrays are mutable, so values can be updated. example: arr[1] = 'x'.\nthis is different from strings, which are immutable.\nthe .length property returns the total number of elements. example: arr.length -> 3.\nlast element can be accessed using arr[arr.length - 1].\n");

console.log("=== CONST ARRAY UPDATE ===\nconst arrays can still have their elements updated because const only prevents reassignment of the array reference.\nexample: const arr = [1,2,3]; arr[0] = 99 works.\nreassigning the entire array is not allowed. example: arr = [4,5,6] throws an error.\narrays are mutable because they are objects stored by reference.\n");

arr = [1, 2, 3];

arr[10] = 99;

console.log(arr);
console.log(arr[5]);
console.log(arr.length); // 11

console.log("=== ARRAY FLEXIBILITY ===\njavascript arrays can store multiple data types together including strings, numbers, booleans, null, undefined, objects, and even other arrays.\nexample: ['Aabid', 22, true, null].\narrays inside arrays create multidimensional arrays. example: [[1,2],[3,4]].\nmultidimensional values are accessed using multiple indexes. example: matrix[0][1] -> 2.\nassigning a value to a far index creates empty slots. example: let arr = [1,2,3]; arr[10] = 99.\nintermediate indexes behave like undefined and array length becomes highest index + 1.\n");

console.log("=== ARRAY ADD & REMOVE ===\narray elements can be added manually using indexes. example: arr[3] = 4.\nusing arr[arr.length] adds an element at the end because length points to the next empty index.\npush() is the standard way to add elements to the end. example: arr.push(4).\npush() returns the new array length.\npop() removes the last element from the array. example: arr.pop().\npop() returns the removed element.\narrays are mutable, so these methods modify the original array.\n");

arr = [1, 2, 3];

arr.name = "Aabid";

console.log(arr.name); // "Aabid"

console.log(arr.length); // 3
console.log(arr);

console.log("=== ARRAY KEY VALUE PAIRS ===\narrays are technically objects, so custom key value pairs can be added. example: arr.name = 'Aabid'.\nhowever, this is not the intended use of arrays and should be avoided.\ncustom properties do not affect the length property. example: [1,2,3].length remains 3 even after arr.name = 'Aabid'.\narrays are meant for ordered indexed data, while objects are meant for key value storage.\nmixing both styles makes code confusing and harder to maintain.\n");

console.log('Use the Browser DevTools Memory tab,\n');

console.log("=== ARRAY SHIFT ===\nshift() removes the first element from an array.\nexample: let arr = [1,2,3]; arr.shift() results in [2,3].\nshift() returns the removed element.\nexample: let removed = arr.shift() -> 1.\nshift() is slower than pop() for large arrays because javascript must re-index all remaining elements after removing the first item.\npop() is faster because it removes from the end without re-indexing.\n");

console.log("=== ARRAY UNSHIFT ===\nunshift() adds one or more elements to the beginning of an array.\nexample: let arr = [2,3]; arr.unshift(1) results in [1,2,3].\nmultiple values can be added at once. example: arr.unshift(0,1).\nunshift() returns the new array length.\nexample: let len = arr.unshift(1) -> 3.\nunshift() is slower than push() for large arrays because existing elements must be re-indexed.\n");

let a = [1];
let b = [2];
let c = [3];

console.log(a.concat(b, c)); // [1,2,3]

console.log("=== ARRAY CONCAT ===\nconcat() merges two or more arrays and returns a new array.\nexample: [1,2].concat([3,4]) -> [1,2,3,4].\nconcat() does not modify the original arrays, making it a non mutating method.\nmultiple arrays or values can be merged at once. example: [1].concat([2],[3],4).\nconcat() creates a new array with a new memory reference.\n");

console.log("=== ARRAY INDEXOF ===\nindexOf() searches for an element in an array and returns its index.\nexample: ['a','b','c'].indexOf('b') -> 1.\nif the element is not found, indexOf() returns -1.\nexample: [1,2,3].indexOf(10) -> -1.\nindexOf() returns only the first matching index.\nit uses strict equality (===), so types must match.\nexample: [1].indexOf('1') -> -1.\na second argument can specify the starting search index.\n");

console.log("=== ARRAY INCLUDES ===\nincludes() checks whether an array contains a specific element and returns true or false.\nexample: [1,2,3].includes(2) -> true.\nif the element does not exist, it returns false.\nexample: ['a','b'].includes('c') -> false.\nincludes() is case sensitive and uses strict equality (===).\nexample: [1].includes('1') -> false.\na second argument can specify the starting index for the search.\n");

console.log("=== ARRAY REVERSE ===\nreverse() reverses the order of elements in an array.\nexample: [1,2,3].reverse() -> [3,2,1].\nreverse() modifies the original array, making it a mutating method.\nit also returns the same reversed array.\nstrings do not support reverse() directly, so reversing strings usually involves split(), reverse(), and join().\nexample: 'hello'.split('').reverse().join('') -> 'olleh'.\n");

console.log("=== ARRAY SORT ===\nsort() sorts array elements alphabetically by default.\nexample: ['banana','apple'].sort() -> ['apple','banana'].\nby default, sort() treats elements as strings, which can cause unexpected numeric sorting.\nexample: [1,10,2].sort() -> [1,10,2].\nfor proper numeric sorting, use a compare function.\nexample: arr.sort((a,b) => a-b) for ascending order.\nsort() modifies the original array, making it a mutating method.\n");

console.log("=== SORT & UTF-16 ===\ndefault sort() converts elements to strings and compares them using UTF-16 character codes.\nthis can cause unexpected results with numbers and mixed letter casing.\nexample: [1,100,2].sort() -> [1,100,2] because values are compared as strings.\nuppercase letters have smaller UTF-16 values than lowercase letters.\nexample: ['banana','Apple'].sort() -> ['Apple','banana'].\nuse a compare function like arr.sort((a,b)=>a-b) for proper numeric sorting.\n");

console.log("=== ARRAY SLICE ===\nslice() extracts a portion of an array and returns a new array.\nexample: [1,2,3,4].slice(1,3) -> [2,3].\nslice() includes the start index but excludes the end index.\nexample: slice(1,3) includes indexes 1 and 2 only.\nslice() does not modify the original array, making it a non mutating method.\nif the end index is omitted, slicing continues to the end of the array.\nnegative indexes count from the end. example: arr.slice(-2).\nslice() is commonly used to create shallow copies of arrays.\n");

console.log("=== ARRAY SPLICE ===\nsplice() is a powerful array method used to add, remove, or replace elements directly in the original array.\nsyntax: arr.splice(start, deleteCount, items...).\nexample remove: [1,2,3,4].splice(1,2) removes 2 elements starting at index 1.\nexample add: arr.splice(1,0,'a') inserts 'a' without deleting anything.\nexample replace: arr.splice(1,1,99) replaces one element with 99.\nsplice() returns an array of removed elements.\nunlike slice(), splice() modifies the original array.\n");

let matrix = [
  [1, 2],
  [3, 4]
];

console.log(matrix[0][1]); // 2

console.log("=== MULTIDIMENSIONAL ARRAYS ===\na multidimensional array is an array that contains other arrays as elements.\nexample: [[1,2],[3,4]].\nthese arrays are useful for representing structured data like tables or grids.\nvalues are accessed using multiple indexes.\nexample: matrix[0][1] -> 2.\nthe first index selects the inner array and the second index selects the value inside it.\n");

console.log("=== MULTIDIMENSIONAL ARRAY ACCESS ===\narrays can store other arrays just like normal values.\nexample: let students = [['Adarsh',75],['Akash',90]].\nouter indexes access groups. example: students[1] -> ['Akash',90].\nchained indexes access specific values. example: students[1][0] -> 'Akash'.\nvalues inside nested arrays can be modified. example: students[0][1] = 80.\nnew items can be added using push(). example: students[0].push('A+').\naccessing indexes that do not exist returns undefined.\nassigning values to far indexes creates empty slots in the array.\n");