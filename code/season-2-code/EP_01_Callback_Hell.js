// 📘 Episode 20: Callbacks in JavaScript

// -------------------------------------------
// 🔹 What is a Callback Function?
// -------------------------------------------

// A callback is a function passed as an argument to another function
// It gets executed at a later point in time.

console.log("Namaste");

setTimeout(function () {
  console.log("JavaScript"); // <-- Callback runs after 5 seconds
}, 5000);

console.log("Season 2");

/*
Expected Output:
Namaste
Season 2
JavaScript
This shows async behavior—'setTimeout' defers execution of the callback.
*/

// -------------------------------------------
// ⚙️ Real-World Example: eCommerce Scenario
// -------------------------------------------

// Suppose these are items added to a user's cart
const cart = ["shoes", "pants", "kurta"];

// Mock API methods for demo purposes
const api = {
  createOrder: function (cart, callback) {
    console.log("Order created for:", cart);
    setTimeout(() => {
      callback(); // proceeds to payment after delay
    }, 2000);
  },

  proceedToPayment: function (callback) {
    console.log("Proceeding to payment...");
    setTimeout(() => {
      callback(); // shows order summary
    }, 2000);
  },

  showOrderSummary: function (callback) {
    console.log("Showing order summary...");
    setTimeout(() => {
      callback(); // updates wallet
    }, 2000);
  },

  updateWallet: function () {
    console.log("Wallet updated.");
  },
};

// -------------------------------------------
// 🛑 Callback Hell Example (Pyramid of Doom)
// -------------------------------------------

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

/*
Expected Output with delays:
Order created for: [ 'shoes', 'pants', 'kurta' ]
Proceeding to payment...
Showing order summary...
Wallet updated.

❗ This nesting of functions inside callbacks is called "Callback Hell"
*/

// -------------------------------------------
// ⚠️ Inversion of Control Demonstration
// -------------------------------------------

// You trust that createOrder will call the callback properly,
// but what if it doesn't? You lose control over execution.

const unreliableAPI = {
  createOrder: function (cart, callback) {
    console.log("Creating order...");

    // Uncomment one of the below scenarios to simulate real problems:

    // Scenario 1: Never calls callback
    // (callback is lost in space 🤯)

    // Scenario 2: Calls callback twice
    // callback();
    // callback();

    // Scenario 3: Crashes before calling callback
    // throw new Error("API crashed");

    // Normal execution
    setTimeout(() => {
      callback();
    }, 1000);
  },
};

// Test Inversion of Control
unreliableAPI.createOrder(cart, function () {
  console.log("Proceed to payment — but can we trust this?");
});

/*
🔍 Why this is dangerous:
- You’re relying on another function to invoke your callback correctly.
- If it forgets, crashes, or misbehaves—you’re stuck.
This is known as “Inversion of Control”.
*/

// -------------------------------------------
// ✅ Summary Recap
// -------------------------------------------

/*
- JavaScript is synchronous and single-threaded by design.
- Callbacks simulate asynchronous behavior using deferred execution.
- Callback Hell = deeply nested callbacks that become unreadable.
- Inversion of Control = losing control over when/how your callback is executed.
*/

// 🎯 Practice Tip: Try rewriting the eCommerce chain using Promises or async/await in the next episodes!

console.log("✅ Callback episode complete!");
