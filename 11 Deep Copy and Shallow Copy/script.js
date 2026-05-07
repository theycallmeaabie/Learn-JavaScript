let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

let user1 = {
  name: "Aabid"
};

// user1 ──► [Memory A]
// user2 ──► [Memory A]

let user2 = user1;

user2.name = "Ali";

console.log(user1.name); // "Ali"

console.log("=== VALUE VS REFERENCE MEMORY ===\nprimitive types like strings and numbers are copied by value.\nexample: let a = 10; let b = a; changing b does not affect a.\nobjects and arrays are copied by reference, meaning variables point to the same memory location.\nexample: let user2 = user1 does not create a new object, it copies the reference.\nmodifying one reference affects all variables pointing to that same object.\nexample: user2.name = 'Ali' also changes user1.name.\nthis shared reference behavior is a major source of confusion and bugs in javascript.\n"); 

console.log("=== SHALLOW COPY ===\na shallow copy creates a new outer object or array but nested objects and arrays are still shared by reference.\nexample: let user2 = {...user1} creates a new top level object.\nchanges to top level properties do not affect the original.\nexample: user2.name = 'Ali' does not change user1.name.\nhowever, nested objects are still shared.\nexample: user2.address.city = 'Mumbai' also changes user1.address.city.\ncommon shallow copy methods include spread operator (...), slice(), concat(), and Object.assign().\nall shallow copy methods only copy the first level.\n");

console.log("=== OBJECT.ASSIGN ===\nObject.assign() copies properties from one object into another object.\nexample: let user2 = Object.assign({}, user1).\nthe empty object {} acts as a new container for copied properties.\nObject.assign() creates a shallow copy, so top level properties are copied independently.\nexample: changing user2.name does not affect user1.name.\nhowever, nested objects are still shared by reference.\nexample: changing user2.address.city also changes user1.address.city.\narrays can also be copied because arrays are objects internally.\n");

user1 = {
  name: "Aabid",
  address: {
    city: "Delhi"
  }
};

user2 = { ...user1 };

user2.address.city = "Mumbai";

console.log(user1.address.city); // "Mumbai"

a = [1, 2];
b = [3, 4];

let merged = [...a, ...b];

console.log(merged); // [1,2,3,4]
console.log("=== SPREAD OPERATOR ===\nthe spread operator (...) is the modern way to copy or merge arrays and objects.\nexample array copy: let arr2 = [...arr1].\nexample object copy: let user2 = {...user1}.\nspread creates a new outer object or array, so top level changes are independent.\nexample: changing user2.name does not affect user1.name.\nhowever, spread only creates a shallow copy, so nested objects are still shared by reference.\nexample: changing user2.address.city also changes user1.address.city.\nspread can also merge arrays and objects.\nexample: [...a,...b] or {...obj1,...obj2}.\n");

console.log("=== ARRAY COPY METHODS ===\nslice() and concat() can create shallow copies of arrays.\nexample: let arr2 = arr1.slice() copies the entire array.\nexample: let arr2 = [].concat(arr1) also creates a new array shell.\nthese methods create a new outer array, so top level changes are independent.\nhowever, nested arrays and objects are still shared by reference.\nexample: changing arr2[0][0] may also affect arr1.\nspread operator (...) is the modern preferred way for shallow copying arrays.\n");

console.log("=== SHALLOW COPY LIMITATION ===\nspread operator (...) only copies the top level of objects and arrays.\nexample: let user2 = {...user1} creates a new outer object.\nhowever, nested objects and arrays still share the same memory reference.\nexample: user2.address.city = 'Mumbai' also changes user1.address.city.\nthis happens because the nested object reference is copied, not the nested object itself.\narrays behave the same way with nested arrays.\nthis limitation is called shallow copying and can lead to accidental shared mutations.\n");

console.log("=== DEEP COPY ===\ndeep copy duplicates all levels of an object or array so no shared memory references remain.\nexample: changing user2.address.city will not affect user1.address.city.\nthis is different from shallow copy where nested objects are still shared.\na common deep copy technique is JSON.parse(JSON.stringify(obj)).\nexample: let copy = JSON.parse(JSON.stringify(user1)).\nthis creates completely new nested objects and arrays.\nhowever, JSON methods have limitations and do not properly copy functions, undefined, symbols, dates, or circular references.\nmodern javascript also provides structuredClone() for deep copying.\n");

user1 = {
  name: "Aabid",
  address: {
    city: "Delhi"
  }
};

user2 =
  JSON.parse(JSON.stringify(user1));

user2.address.city = "Mumbai";

console.log(user1.address.city); // Delhi
console.log('\n');
console.log("=== STRUCTUREDCLONE ===\nstructuredClone() creates a true deep copy of objects and arrays.\nall nested objects and arrays receive completely new memory references.\nexample: let copy = structuredClone(user1).\nmodifying nested values in the copy does not affect the original.\nstructuredClone() is more powerful than JSON.parse(JSON.stringify()) because it supports more complex data types like Dates, Maps, Sets, and circular references.\nfunctions cannot be cloned using structuredClone().\n");