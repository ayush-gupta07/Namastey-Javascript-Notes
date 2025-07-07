// 📘 Episode 14: Callback Functions and Event Listeners

// ✅ Callback Function - A function passed to another function to be "called back" later
function greet(name, callback) {
  console.log("Hello", name);
  callback(); // calling the callback function
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Ayush", sayBye);
// Output:
// Hello Ayush
// Goodbye!

// ✅ setTimeout as a callback
setTimeout(function () {
  console.log("✅ Timer callback executed after delay");
}, 1000); // Runs after ~1 second

// ✅ Callback inside function execution
function x(y) {
  console.log("Inside function x");
  y();
}

x(function y() {
  console.log("Inside callback y");
});
// Output:
// Inside function x
// Inside callback y

// ✅ setTimeout Call Stack Example
console.log("Start");

setTimeout(function () {
  console.log("Timer callback");
}, 2000);

console.log("End");
// Output:
// Start
// End
// Timer callback (after 2s)

// ❗ Long-running synchronous code blocks async callbacks
console.log("Blocking Example Start");

setTimeout(function () {
  console.log("This might be delayed");
}, 1000);

// Block the main thread
for (let i = 0; i < 1e9; i++) {} // large loop

console.log("Blocking Example End");

// ✅ Nested Callbacks Example (Callback Hell simulation)
function printStr(str, cb) {
  setTimeout(() => {
    console.log(str);
    cb();
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
  printStr("A", () => {
    printStr("B", () => {
      printStr("C", () => {});
    });
  });
}

printAll(); // A B C in order due to nesting

// ✅ Event Listener with Callback
// To test this, run in a browser with an HTML button:
// <button id="clickMe">Click Me</button>
document.getElementById("clickMe")?.addEventListener("click", function () {
  console.log("✅ Button clicked - Event Listener callback");
});

// ✅ Counter with Global State (Not recommended)
let count = 0;
document.getElementById("clickMe")?.addEventListener("click", function () {
  console.log("Clicked (Global):", ++count);
});

// ✅ Counter using Closure for data hiding
function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe")?.addEventListener("click", function () {
    console.log("Clicked (Closure):", ++count);
  });
}
attachEventListener();

// ✅ Remove Event Listener to prevent memory leaks
const btn = document.getElementById("clickMe");
function clickHandler() {
  console.log("Handled once and removed");
  btn?.removeEventListener("click", clickHandler);
}
btn?.addEventListener("click", clickHandler);

// 💬 Interview Recap

// Q1. What is a callback function?
// A: A function passed as an argument to another function, executed later.

// Q2. Why use closures in event handlers?
// A: To encapsulate private data like a local counter.

// Q3. Why remove event listeners?
// A: To avoid memory leaks and release closures when no longer needed.
