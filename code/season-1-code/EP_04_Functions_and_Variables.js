// 📘 Episode 4: Functions and Variable Environments

// 🔍 Concept:
// Every time a function is invoked, a new **Execution Context** is created.
// Each function has its own **Variable Environment** (local memory).

// 🧪 Example 1: Multiple `n` variables in different functions

var n = 1;
a();
b();

function a() {
  var n = 10;
  console.log("Inside a():", n); // 10
}

function b() {
  var n = 100;
  console.log("Inside b():", n); // 100
}

// 🔎 Explanation:
// - `n = 1` is in the global scope
// - Both `a()` and `b()` have their own local `n`
// - They don’t interfere with each other or with the global `n`

// 🧪 Example 2: Scope Chain

function outer() {
  var outerVar = "I’m outside!";
  function inner() {
    console.log(outerVar); // ✅ accessible
  }
  inner();
}

outer();

// 🔎 Explanation:
// - inner() has access to `outerVar` due to lexical scope and Variable Environment chaining

// 🧠 Call Stack & Execution Contexts:
// 1. GEC (Global Execution Context) is created first
// 2. Each function call pushes a new EC onto the Call Stack
// 3. Each EC has its own local memory
// 4. When function finishes, its EC is popped off the Call Stack

// 🧠 Summary:
// - Each function invocation creates a new Execution Context with its own Variable Environment.
// - Local variables in one function don’t affect others.
// - JavaScript uses Lexical Scoping: inner functions access outer function variables.
