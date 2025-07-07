// 📘 Episode 11: Closures + setTimeout Interview Question

// ❓ Problem Statement:
// Print numbers 1 to 5, each after 1 second, in order using setTimeout inside a loop.

// ❌ Incorrect Approach with var (does NOT work as expected)
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Wrong with var:", i);
  }, i * 1000);
}

// Output after 1s, 2s, 3s, 4s, 5s: all 6 6 6 6 6
// ❌ Because `var` is function-scoped, not block-scoped.
// The function inside setTimeout gets reference to the same `i`.

// ✅ Fix 1: Use let instead of var (block scoped)
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Correct with let:", i);
  }, i * 1000);
}

// Output: 1 2 3 4 5 (each after 1s interval)
// ✔️ Because `let` creates a new block scope for each iteration.

// ✅ Fix 2: Use var with an IIFE to capture current i
for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log("Correct with IIFE:", j);
    }, j * 1000);
  })(i);
}

// ✅ Fix 3: Use a function that returns a function (closure)
function logAfterDelay(i) {
  return function () {
    console.log("Correct with closure function:", i);
  };
}

for (var i = 1; i <= 5; i++) {
  setTimeout(logAfterDelay(i), i * 1000);
}

// ✅ Bonus Concept: Capturing variable reference vs value
function delayLogger() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      (function (j) {
        return function () {
          console.log("Captured j =", j);
        };
      })(i),
      1000
    );
  }
}

delayLogger(); // 0 1 2 printed after 1s using closure to preserve `i` as `j`

// 🧠 Summary / Interview Key Points:
// - `var` leaks out of the block scope; all timeouts share the same `i`
// - `let` creates block-scoped variable per iteration
// - Closures can capture current value by wrapping in an IIFE or returning a function
// - Interviewer checks your understanding of how JS handles async and closures together
