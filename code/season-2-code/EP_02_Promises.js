// 📘 Episode 21: Promises in JavaScript

// -----------------------------------------------------
// 🔙 Before Promises – The Callback Approach
// -----------------------------------------------------

const cart = ["shoes", "pants", "kurta"];

// Simulated callback-based API
function createOrder(cart, callback) {
  console.log("Creating order...");
  setTimeout(() => {
    const orderId = "order123";
    callback(orderId);
  }, 1000);
}

function proceedToPayment(orderId) {
  console.log("Proceeding to payment for", orderId);
}

// Callback style (less control and hard to manage)
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

// -----------------------------------------------------
// ✅ Promises – Modern and Cleaner Way
// -----------------------------------------------------

// A Promise is an object representing future value (or error).
function createOrderPromise(cart) {
  return new Promise((resolve, reject) => {
    // Simulate async order creation
    if (!cart.length) {
      reject("Cart is empty");
    } else {
      setTimeout(() => {
        const orderId = "order456";
        resolve(orderId);
      }, 1000);
    }
  });
}

function proceedToPaymentPromise(orderId) {
  return new Promise((resolve) => {
    console.log("Proceeding to payment for", orderId);
    setTimeout(() => {
      resolve("payment_successful");
    }, 1000);
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise((resolve) => {
    console.log("Payment Info:", paymentInfo);
    setTimeout(() => {
      resolve("summary_shown");
    }, 1000);
  });
}

function updateWalletBalance(summary) {
  return new Promise((resolve) => {
    console.log("Order summary:", summary);
    setTimeout(() => {
      resolve("wallet_updated");
    }, 1000);
  });
}

// -----------------------------------------------------
// 🔁 Promise Chaining – Avoiding Callback Hell
// -----------------------------------------------------

createOrderPromise(cart)
  .then(function (orderId) {
    return proceedToPaymentPromise(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (summary) {
    return updateWalletBalance(summary);
  })
  .then(function (result) {
    console.log("Final result:", result); // wallet_updated
  })
  .catch(function (error) {
    console.error("Error occurred:", error);
  });

// -----------------------------------------------------
// 🔍 Example: Using fetch API (Promise-based)
// -----------------------------------------------------

const URL = "https://api.github.com/users/alok722";

const userPromise = fetch(URL); // fetch returns a Promise

userPromise
  .then((res) => res.json()) // parse response body
  .then((data) => {
    console.log("GitHub User Data:", data); // log full user object
  })
  .catch((err) => {
    console.error("Failed to fetch:", err);
  });

// -----------------------------------------------------
// 🧠 Summary Recap
// -----------------------------------------------------

/*
- Promises represent the completion (or failure) of an async task.
- .then() is used to handle fulfilled Promises.
- .catch() is used to handle rejections/errors.
- Always return Promises inside .then() to enable chaining.
- Promises avoid callback hell and provide more control.
*/

console.log("✅ Promise flow initialized...");
