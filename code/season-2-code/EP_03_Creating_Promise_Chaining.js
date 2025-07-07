// 📘 Episode 22: Creating Promises, Chaining & Error Handling

// ------------------------------------------
// 🛍️ E-Commerce Simulation Setup
// ------------------------------------------

const cart = ["shoes", "pants", "kurta"];

// Dummy validator
function validateCart(cart) {
  return cart.length > 0; // returns true if cart has items
}

// ------------------------------------------
// 🛠️ Custom Promise: createOrder()
// ------------------------------------------

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      return reject(new Error("Cart is not Valid"));
    }

    const orderId = "order123"; // Simulated DB insertion
    console.log("✅ Order created successfully");
    resolve(orderId);
  });
}

// ------------------------------------------
// 💳 Simulated Payment API
// ------------------------------------------

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    console.log("💳 Proceeding to payment for", orderId);
    setTimeout(() => {
      resolve("Payment Successful");
    }, 1000);
  });
}

// ------------------------------------------
// 🔗 Promise Chaining with Error Handling
// ------------------------------------------

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId); // pass orderId forward
  })
  .then(function (paymentInfo) {
    console.log("🎉", paymentInfo); // Payment Successful
  })
  .catch(function (err) {
    console.error("❌ Error:", err.message);
  });

// ------------------------------------------
// 🔍 Debug: Promise Pending vs Fulfilled
// ------------------------------------------

const promise = createOrder(cart);
console.log("🚦 Initial Promise:", promise); // Should be pending initially

setTimeout(() => {
  console.log("✅ Fulfilled Promise after delay:", promise);
}, 2000);

// ------------------------------------------
// ⚠️ Example: Handling Errors with .catch()
// ------------------------------------------

createOrder([])
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => {
    console.log("This won't run for invalid cart");
  })
  .catch((err) => {
    console.warn("🚨 Error caught:", err.message); // "Cart is not Valid"
  });

// ------------------------------------------
// 🔄 Continue Execution After .catch()
// ------------------------------------------

createOrder([])
  .then(function (orderId) {
    return orderId;
  })
  .catch(function (err) {
    console.warn("🔁 Recovering from error:", err.message);
    return null; // gracefully recover
  })
  .then(function (orderId) {
    if (orderId) return proceedToPayment(orderId);
    else throw new Error("❎ Skipping payment due to order failure");
  })
  .then(function (paymentInfo) {
    console.log("✅ Payment info:", paymentInfo);
  })
  .catch(function (err) {
    console.log("❗ Final catch:", err.message);
  });

/*
🧠 Key Takeaways:
- A Promise can be created with new Promise(resolve, reject)
- Use resolve() when async succeeds, reject() when it fails
- .then() chains steps sequentially
- .catch() handles errors from anywhere above in the chain
- .catch() can allow recovery and continuation
- Always return from then() to maintain clean chains
*/
