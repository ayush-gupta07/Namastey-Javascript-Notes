// 📘 Episode 2: How JavaScript is Executed & the Call Stack

// 🔍 Concept:
// When JavaScript runs, it creates a Global Execution Context (GEC).
// - Memory Creation Phase: variables/functions are hoisted
// - Code Execution Phase: code runs line by line

// JavaScript uses a **Call Stack** to keep track of function calls.

// 🧪 Example 1: Memory and Code Execution Phases

var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n); // returns 4
var square4 = square(4); // returns 16

console.log("square2:", square2); // 4
console.log("square4:", square4); // 16

// 🔎 Breakdown:
// Memory Phase:
// - n → undefined
// - square → function definition
// - square2 → undefined
// - square4 → undefined
//
// Execution Phase:
// - n = 2
// - square2 = square(2) → creates new EC for square()
// - square4 = square(4) → new EC again
// - console logs

// 🧱 Example 2: Call Stack Trace

function one() {
  console.log("Inside one()");
  two();
}

function two() {
  console.log("Inside two()");
  three();
}

function three() {
  console.log("Inside three()");
}

one();

// Call Stack:
// Initially → [Global]
// one() called → pushed on top
// two() called → pushed
// three() called → pushed
// Logs → "Inside three()"
// three() pops → back to two()
// Logs → "Inside two()"
// two() pops → back to one()
// Logs → "Inside one()"
// one() pops → Global Execution Context remains

// 🧠 Summary:
// - Each function call creates a new Execution Context.
// - Execution Contexts are managed using a Call Stack (LIFO).
// - Global Execution Context is the first one created when the code runs.
