// 📘 Episode 17: Trust Issues with setTimeout()

// ----------------------------------------------------------
// 🔍 Concept: setTimeout does NOT guarantee exact delay execution
// It ensures MINIMUM delay before putting the callback in the queue
// ----------------------------------------------------------

console.log("Start");

setTimeout(function cb() {
  console.log("Callback after 5 seconds (minimum)");
}, 5000); // ✅ Scheduled after at least 5000ms

console.log("End");

// Output:
// Start
// End
// Callback (after 5s or more, depending on call stack availability)

// ----------------------------------------------------------
// ⚠️ Demonstrating delay due to blocking code
// Even if setTimeout finishes its timer, it must wait for call stack
// ----------------------------------------------------------

console.log("Start (Block)");

setTimeout(function cb() {
  console.log("Callback blocked by heavy loop");
}, 5000);

// 🧱 Simulating heavy synchronous task (blocking main thread)
for (let i = 0; i < 1000000000; i++) {
  // busy wait
}

console.log("End (Block)");

// Output:
// Start (Block)
// End (Block)
// Callback blocked by heavy loop
// → Callback runs AFTER loop finishes even if 5s has passed

// ----------------------------------------------------------
// 🔁 What happens with setTimeout(..., 0)
// It still goes to the Callback Queue and waits for the stack to clear
// ----------------------------------------------------------

console.log("Start (0ms)");

setTimeout(function cbZero() {
  console.log("Callback with 0ms delay");
}, 0);

console.log("End (0ms)");

// Output:
// Start (0ms)
// End (0ms)
// Callback with 0ms delay
// 🔁 Proves that even 0ms delay isn’t "immediate"

// ----------------------------------------------------------
// 🧪 Comparison: Direct function call vs setTimeout(..., 0)
// ----------------------------------------------------------

function sayHello() {
  console.log("Hello from direct call");
}

setTimeout(function sayHelloAsync() {
  console.log("Hello from setTimeout(0)");
}, 0);

sayHello();

// Output:
// Hello from direct call
// Hello from setTimeout(0)

// ----------------------------------------------------------
// ✅ Summary of Key Learnings
// - setTimeout ensures minimum delay, not exact timing
// - Callback waits in queue for the stack to clear
// - Heavy synchronous code blocks async callbacks
// - Use setTimeout(..., 0) to defer logic
// ----------------------------------------------------------

console.log("✅ Episode 17 complete: Trust Issues with setTimeout() explored.");
