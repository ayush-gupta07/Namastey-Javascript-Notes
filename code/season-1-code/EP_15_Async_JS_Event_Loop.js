// 📘 Episode 15: Asynchronous JavaScript & Event Loop

// ✅ setTimeout() basic demonstration
console.log("Start");

setTimeout(function cb() {
  console.log("setTimeout callback executed");
}, 5000);

console.log("End");

// Output order:
// Start
// End
// (after 5s) setTimeout callback executed

// ✅ setTimeout with 0ms (still asynchronous)
console.log("Zero ms Example - Start");

setTimeout(function cb() {
  console.log("Zero ms Timeout");
}, 0);

console.log("Zero ms Example - End");

// Output:
// Zero ms Example - Start
// Zero ms Example - End
// Zero ms Timeout

// ✅ Long-running sync code blocks setTimeout callback
console.log("Blocking Start");

setTimeout(function cb() {
  console.log("Callback after blocking");
}, 2000);

// Simulate blocking the call stack
let start = Date.now();
while (Date.now() - start < 4000) {} // Block for 4 seconds

console.log("Blocking End");

// Output:
// Blocking Start
// (4s delay)
// Blocking End
// Callback after blocking

// ✅ Button click example (browser only)
// <button id="btn">Click Me</button>
document.getElementById("btn")?.addEventListener("click", function () {
  console.log("Event listener callback executed");
});

// Even if the GEC is gone, callback remains waiting in Web API until the event occurs.

// ✅ Simulating async sequence using nested callbacks
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

printAll(); // Always prints A, B, C in that order using callback chaining

// ✅ Microtask Queue vs Callback Queue
console.log("Start");

setTimeout(function cbT() {
  console.log("setTimeout callback");
}, 0);

Promise.resolve().then(function cbP() {
  console.log("Promise .then() callback");
});

console.log("End");

// Output:
// Start
// End
// Promise .then() callback
// setTimeout callback

// Explanation:
// - setTimeout cbT → Callback Queue
// - Promise cbP → Microtask Queue
// - Event Loop processes Microtasks before Callback Queue

// ✅ Priority: Microtasks > Callbacks
console.log("Microtask vs Callback Priority");

setTimeout(() => console.log("Callback Queue (setTimeout)"), 0);

Promise.resolve().then(() => console.log("Microtask Queue (Promise)"));

console.log("Synchronous Code Done");

// Output:
// Microtask vs Callback Priority
// Synchronous Code Done
// Microtask Queue (Promise)
// Callback Queue (setTimeout)

// ✅ Starvation possibility (infinite Microtasks block Callback Queue)
let i = 0;
Promise.resolve().then(function recursiveMicrotask() {
  i++;
  if (i < 10) {
    console.log("Microtask", i);
    Promise.resolve().then(recursiveMicrotask);
  }
});
// If the recursion is unbounded, setTimeouts never get a chance to run

// 💬 Summary:
// - Call Stack runs sync code.
// - Web APIs (setTimeout, fetch) schedule async callbacks.
// - Callback Queue → used by setTimeout, event handlers
// - Microtask Queue → used by Promises, MutationObservers
// - Event Loop picks Microtasks first, then Callback Queue
