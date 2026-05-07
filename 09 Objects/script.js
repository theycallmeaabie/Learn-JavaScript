console.log("=== DATA TYPES ===\nprimitive types store actual values and are copied by value.\nnon primitive types store references to memory and are copied by reference.\nchanging a reference type affects all variables pointing to it, while primitives remain independent.\n");

console.log("=== TYPE NAMES ===\nprimitive types are also called value types because they store actual values.\nnon primitive types are also called reference types because they store memory references.\n");

console.log("=== VALUE VS REFERENCE ===\nprimitives copy values so changes do not affect other variables.\nobjects copy references so multiple variables point to the same memory and changes affect all.\n");

console.log("=== OBJECT TYPE ===\nin javascript, there is only one non primitive type which is object.\narrays, functions, and other complex types are all variations of objects behind the scenes.\nthis means javascript is fundamentally object based.\n");

console.log("=== OBJECTS BASICS ===\nobjects are created using curly braces and store data as key value pairs.\nexample: const user = { first_name: 'Akash', age: 20 }.\ndot notation is used for standard access. example: user.first_name -> 'Akash'.\nbracket notation is used for special or dynamic keys. example: user['first_name'] -> 'Akash'.\nbracket notation is required when keys contain special characters. example: user['first-name'].\n");

const user2 = {
  firstName: "Adarsh",
  "last-Name": "Singh",
  Anurag: "Developer"
};
console.log(user2.firstName);          // Adarsh
console.log(user2["last-Name"]);       // Singh
console.log(user2["first" + "Name"]);  // Adarsh
user2.age = 23 //updating the object
user2["city"] = "Delhi";

console.log("=== BRACKET STRING KEY ===\nin bracket notation, the value inside [] must resolve to a string key.\nexample: 'first' + 'Name' -> 'firstName', so user['firstName'] accesses the property.\nobject keys are always strings, so expressions that return strings work perfectly.\n");

console.log("=== OBJECT MEMORY ===\nwhen an object is created, javascript allocates a new memory location and stores a reference.\nobjects are compared by reference, not value, so two identical objects are not equal.\nexample: {a:1} === {a:1} -> false.\nnested objects also get separate memory locations linked to the parent object.\n");

console.log("=== OBJECT MEMORY & REFERENCES ===\nwhen you create an object using {}, javascript allocates a new memory location and the variable stores a reference (address) to that memory.\nexample: let a = {name:'Aabid'} creates a new object in memory.\nobjects are compared by reference, not by value, so even if two objects look identical, they are not equal.\nexample: let a = {name:'Aabid'}; let b = {name:'Aabid'}; a === b -> false because they are stored in different memory locations.\nif two variables point to the same object, then they are equal because they share the same reference.\nexample: let a = {name:'Aabid'}; let b = a; a === b -> true.\nevery time you use {} a new memory space is created, so objects are always unique unless explicitly shared.\nnested objects also get their own separate memory locations.\nexample: let user = {name:'Aabid', address:{city:'Delhi'}}; here 'user' and 'address' are stored in different memory locations.\nunderstanding this is important because modifying one reference affects all variables pointing to that same object.\n");

console.log("=== OBJECT UPDATE & NESTING ===\nobjects can be updated or extended anytime using dot or bracket notation.\nexample: user.age = 26 adds a new property, user['city'] = 'Delhi' also works.\nobjects can contain other objects (nested objects) to represent structured data.\nexample: let user = {name:'Aabid', address:{city:'Delhi'}}.\nnested values are accessed using chaining. example: user.address.city -> 'Delhi'.\nnested properties can also be updated. example: user.address.city = 'Mumbai'.\nusing proper formatting and indentation is important for readability in large nested objects.\n");

console.log("=== NESTED OBJECT MEMORY ===\nwhen creating nested objects, javascript allocates separate memory for each object.\nexample: let user = {name:'Aabid', address:{city:'Delhi'}} creates two memory locations, one for user and one for address.\nthe parent object stores a reference to the nested object.\ncopying the parent object copies the reference, not the nested object.\nexample: let user2 = user; both share the same address object.\nmodifying nested data affects all references. example: user2.address.city = 'Mumbai' updates user.address.city as well.\nseparate objects with same structure have different memory. example: {address:{}} !== {address:{}}.\n");

console.log(`user ---------> [Memory A]
                  |
                  |-- name → "Aabid"
                  |
                  |-- address -----> [Memory B]
                                         |
                                         |-- city → "Delhi"`);

console.log("=== OBJECT KEYS MEMORY ===\nobject keys are stored as primitive values, usually strings.\nexample: {name:'Aabid'} stores 'name' as a string key.\nvalues can be primitives or references depending on the type.\nnumber keys are converted to strings. example: {1:'one'} becomes {'1':'one'}.\nsymbols are the only non string keys and are also primitive.\n");

console.log("=== OBJECT MUTABILITY ===\nobjects declared with const are not immutable, only the reference is fixed.\nexample: const user = {name:'Aabid'}; user.name = 'Ali' is allowed.\nreassignment is not allowed. example: user = {} will throw an error.\nmodifying properties changes data at the same memory address, not the reference.\nexample: user.age = 25 adds a new property without changing memory address.\nunderstanding this helps avoid confusion between reassignment and mutation.\n");

let obj = { a: 1 };

console.log(delete obj.a); // true
console.log("=== DELETE PROPERTY ===\nthe delete keyword removes a key value pair from an object.\nexample: let user = {name:'Aabid'}; delete user.name results in {}.\ndelete returns true when successful.\ndot and bracket notation both work. example: delete user.age or delete user['age'].\nsetting a property to undefined does not remove it, it only clears the value.\nexample: obj.a = undefined still keeps key 'a' in the object.\n");

console.log("=== DELETE VARIABLE ===\ndelete only works on object properties, not variables.\nexample: delete user.name removes the property.\nexample: delete user does not work and returns false.\nvariables declared with let, const, or var cannot be deleted.\nto clear a variable, assign null or undefined instead.\n");

console.log("=== OBJECT.SEAL ===\nObject.seal() prevents adding or deleting properties but allows updating existing values.\nexample: const user = {name:'Aabid'}; Object.seal(user); user.name = 'Ali' works but user.age = 25 and delete user.name do not work.\nsealed objects lock structure but not values.\nnested objects are not sealed automatically.\n");

console.log("=== OBJECT.FREEZE ===\nObject.freeze() makes an object immutable at the top level.\nexample: const user = {name:'Aabid'}; Object.freeze(user); user.name = 'Ali' will not work.\nit prevents adding, deleting, and modifying properties.\nfreeze is shallow, so nested objects can still be modified.\nuse Object.isFrozen() to check if an object is frozen.\n");

console.log("=== IN KEYWORD ===\nthe in keyword checks if a key exists in an object and returns true or false.\nexample: let user = {name:'Aabid'}; 'name' in user -> true.\nit only checks key existence, not the value.\nexample: let obj = {a:undefined}; 'a' in obj -> true.\nthe in keyword also checks inherited properties from the prototype chain.\n");
console.log('firstName' in user2);