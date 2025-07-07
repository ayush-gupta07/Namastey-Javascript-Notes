// 📘 Episode 5: Shortest JS Program, `this` Keyword & Global Object (`window`)

// 🔍 Concept 1: Shortest JavaScript Program
// Even an empty JS file is valid because the JavaScript engine still creates:
// - Global Execution Context (GEC)
// - Global Object (`window` in browser)
// - `this` keyword

// 🔎 Example 1: Empty program
// (no code here, yet JS engine will still create global environment)

// 🔍 Concept 2: Global Object – `window`
// In browsers, the global object is called `window`. All global variables and functions become its properties.

var x = 10;

console.log(x); // 10
console.log(this.x); // 10
console.log(window.x); // 10

// ✅ All three will log 10
// - `x` is global
// - `this` in global scope refers to `window`
// - So all are equivalent

// 🔍 Concept 3: this in Global Scope
// In browsers, `this` in the global scope === `window`

console.log(this === window); // true

// 🧠 Summary:
// - A JS program always creates Global Execution Context, even if it's empty.
// - `window` is the global object in browsers. It stores all global variables/functions.
// - In global scope, `this` === `window`.
// - Global variables declared with `var` are attached to the `window` object.
