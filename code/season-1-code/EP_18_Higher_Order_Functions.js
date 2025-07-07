// 📘 Episode 18: Higher-Order Functions & Functional Programming

// ----------------------------------------------------------
// 🔍 What is a Higher-Order Function (HOF)?
// A function that takes another function as an argument OR returns a function
// ----------------------------------------------------------

function greet() {
  console.log("Hello!");
}

function executeCallback(callback) {
  console.log("Inside executeCallback");
  callback(); // greet() is called here
}

executeCallback(greet); // Output: Inside executeCallback → Hello!

// ----------------------------------------------------------
// 🧠 HOF in Practical Example – Calculating Area & Circumference
// ----------------------------------------------------------

const radiusArr = [1, 2, 3, 4];

// ➕ Logic to calculate area
function area(radius) {
  return Math.PI * radius * radius;
}

// ➕ Logic to calculate circumference
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 🎯 Higher-Order Function that accepts a logic function
function calculate(radiusArray, logicFn) {
  const output = [];
  for (let i = 0; i < radiusArray.length; i++) {
    output.push(logicFn(radiusArray[i]));
  }
  return output;
}

console.log("Area:", calculate(radiusArr, area));
console.log("Circumference:", calculate(radiusArr, circumference));

// ----------------------------------------------------------
// 🛠 Polyfill for map() – Creating your own version of map
// ----------------------------------------------------------

Array.prototype.customMap = function (logicFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(logicFn(this[i], i, this));
  }
  return result;
};

console.log("Using customMap for Area:", radiusArr.customMap(area));

// ----------------------------------------------------------
// 🧠 Callback vs Higher-Order Function (Naming Insight)
// ----------------------------------------------------------

// In: calculate(radiusArr, area)
// - `area` is the callback
// - `calculate` is the higher-order function

// HOFs are used in:
// - Array methods (map, filter, reduce)
// - Event listeners
// - Functional programming patterns

// ----------------------------------------------------------
// ✅ Summary
// - JS treats functions as first-class citizens
// - HOFs help abstract behavior and improve reusability
// - You can write custom versions (like polyfills) of built-in HOFs
// ----------------------------------------------------------

console.log("✅ Episode 18 complete: Higher-Order Functions practiced.");
ƒ;
