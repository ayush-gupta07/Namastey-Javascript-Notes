// 📘 Episode 12: Event Listeners + Closures Interview Question

// 🎯 Goal:
// Create a button that increments and logs a counter each time it's clicked
// But the counter should be encapsulated using closures — not global

// ✅ HTML setup (for browser environment only, not Node.js)
/*
<button id="clickMe">Click Me</button>
*/

// ❌ Wrong Approach – Using a Global Counter
let count = 0;
document.getElementById("clickMe").addEventListener("click", function () {
  count++;
  console.log("❌ Global Count:", count);
});
// 🚫 Global variable pollutes scope, can be accessed/modified anywhere

// ✅ Correct Approach – Using Closure to Encapsulate Counter
function attachCounter() {
  let count = 0; // this is private to the closure

  document.getElementById("clickMe").addEventListener("click", function () {
    count++;
    console.log("✅ Closure Count:", count);
  });
}
attachCounter();
// ➕ Each time attachCounter is called, a new private `count` is created
// ➕ The callback forms a closure over `count` and retains its state

// ✅ Another Version – Returning the function for reuse
function createCounterHandler() {
  let count = 0;
  return function () {
    count++;
    console.log("🔁 Reusable Closure Count:", count);
  };
}

const handler = createCounterHandler();
document.getElementById("clickMe").addEventListener("click", handler);
// ✅ Reusable closure with encapsulated state

// 🧼 Clean Up to Avoid Memory Leaks
// Event listeners form closures → can cause memory leaks if not removed properly

function addListenerWithCleanup() {
  let count = 0;
  const button = document.getElementById("clickMe");

  function clickHandler() {
    count++;
    console.log("🧹 Clean Counter:", count);
    if (count === 5) {
      button.removeEventListener("click", clickHandler);
      console.log("🛑 Listener removed after 5 clicks");
    }
  }

  button.addEventListener("click", clickHandler);
}
addListenerWithCleanup();

// 🧠 Summary for Interviews:
// - Each click listener forms a closure over the scope where it was created
// - Using closures allows us to maintain private state per element/event
// - Memory can leak if listeners are not cleaned up when no longer needed
// - Demonstrates deep understanding of closures + browser events

// ✅ Practice Tip:
// Try calling `attachCounter()` twice and see how each instance maintains its own `count`
