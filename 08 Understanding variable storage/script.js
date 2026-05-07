const numb1 = 123
const str = 'Aabid'

console.log("=== VARIABLE STORAGE ===\nvariables store references to memory locations rather than just values.\njavascript first allocates memory in the memory creation phase and initializes variables.\nvar is initialized with undefined, while let and const remain uninitialized until execution.\nin the execution phase, actual values are assigned to these memory locations.\ndevtools memory tab can be used to inspect memory and references.\n");

console.log("=== MEMORY INSPECTION ===\nuse the memory tab in devtools and take a snapshot to inspect memory usage.\nenable include numerical values to properly see number variables.\nsearch for known values like strings to locate variables in the snapshot.\nevery variable exists in a context, and the retainers section shows which variables reference a memory location.\nthis helps in understanding memory and debugging issues.\n");

console.log("=== MEMORY FINDINGS ===\nidentical string literals may share the same memory location due to optimization.\nstrings created through operations may have different memory addresses even if values are equal.\nmemory addresses and system context details are engine-specific and not important for normal coding.\nprimitive values like true, false, null, and undefined are often reused internally with same memory locations.\n");

console.log("=== SYSTEM CONTEXT ===\nin devtools, primitives often appear under system context because they are managed internally by the javascript engine.\nbuilt in values like true, false, null, and undefined are reused and behave like shared constants.\nhowever, memory addresses are implementation details and are not guaranteed or exposed in javascript.\n");

console.log("=== VALUE VS REFERENCE ===\nprimitive values are compared by value, so identical values are equal.\nobjects and arrays are compared by memory reference, so even identical structures are not equal unless they point to the same object.\nunderstanding this is essential for working with reference types and equality in javascript.\n");

console.log("=== STRICT IN MEMORY ===\nstrict equality compares primitive values directly but compares objects by their memory reference.\ntwo primitives with the same value are equal, but two objects with the same content are not equal unless they point to the same memory location.\nunderstanding this is key for working with objects and arrays.\n");