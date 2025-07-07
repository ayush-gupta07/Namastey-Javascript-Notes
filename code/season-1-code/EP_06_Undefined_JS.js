// 📘 Episode 6: undefined vs not defined in JavaScript

// 🔍 Concept 1: undefined
// A variable that is declared but not assigned any value is `undefined`.

var a;
console.log(a); // Output: undefined

// Explanation:
// During the memory creation phase, `a` is allocated memory and initialized with `undefined`.
// Since it has not been assigned a value, it logs `undefined`.

// 🔍 Concept 2: not defined
// Trying to access a variable that was never declared at all throws a ReferenceError.

console.log(b); // ❌ ReferenceError: b is not defined

// Explanation:
// `b` was never declared, so during memory phase, no memory was allocated for it.
// Hence, accessing it gives a "not defined" error.

// ✅ Declaring a variable makes it "defined" (even if it's undefined).
var b;
console.log(b); // undefined — now no error

// 🔍 Concept 3: typeof check
// `typeof` on an undeclared variable doesn't throw an error.

console.log(typeof c); // Output: 'undefined'

// ✅ Safe way to check if a variable exists without throwing an error

// 🔍 Concept 4: variable declared and assigned
var d = 100;
console.log(d); // 100

// 🔁 Summary Recap:

// ✅ undefined:
// - Declared but not assigned a value
// - e.g. var a; → a is undefined

// ❌ not defined:
// - Never declared
// - Accessing it directly throws ReferenceError

// ✅ typeof safe check:
console.log(typeof e); // Output: 'undefined' (no error, even if `e` was never declared)
