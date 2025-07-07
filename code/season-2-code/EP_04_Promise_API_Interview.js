// 📘 Episode 23: async/await in JavaScript

// ----------------------------------------------
// 🔹 What is async?
// ----------------------------------------------
async function getData() {
  return "Namaste JavaScript"; // gets wrapped in Promise
}

const dataPromise = getData();
console.log("🔸 async returns:", dataPromise); // Promise<fulfilled>
dataPromise.then((res) => console.log("🔹 Resolved:", res)); // "Namaste JavaScript"

// ----------------------------------------------
// 🔹 What is await?
// ----------------------------------------------
const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("✅ Promise resolved value!!");
  }, 1000);
});

async function handlePromiseAwait() {
  console.log("⏳ Waiting for promise...");
  const val = await p; // pauses here until p resolves
  console.log("🟢 Resolved value using await:", val);
}
handlePromiseAwait();

// ----------------------------------------------
// 🔸 Difference: .then() vs async/await
// ----------------------------------------------

// ✅ Using .then()
p.then((res) => console.log("📌 .then():", res));
console.log("👋 Hello from .then() example");

// ✅ Using async/await
async function usingAwait() {
  const val = await p;
  console.log("👋 Hello from await example");
  console.log("📌 async/await:", val);
}
usingAwait();

// ----------------------------------------------
// 🔍 Behind the scenes: Event loop behavior
// ----------------------------------------------
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("🎉 Promise done!"), 500)
);

async function eventLoopExample() {
  console.log("👋 Start");
  debugger;
  const val = await p1;
  console.log("✅ Resumed after await");
  debugger;
  console.log("📦 Result:", val);
}
eventLoopExample();

// ----------------------------------------------
// 🌐 Real world: fetch user data from GitHub
// ----------------------------------------------
async function fetchUser() {
  const response = await fetch("https://api.github.com/users/alok722");
  const data = await response.json();
  console.log("🌐 GitHub User Data:", data);
}
fetchUser();

// ----------------------------------------------
// ⚠️ Error Handling using try...catch
// ----------------------------------------------
async function fetchWithErrorHandling() {
  try {
    const response = await fetch(
      "https://api.github.com/users/invalid-username"
    );
    const data = await response.json();
    console.log("🌐 Data:", data);
  } catch (error) {
    console.error("❌ Error caught:", error.message);
  }
}
fetchWithErrorHandling();

// OR using .catch()
fetchWithErrorHandling().catch((err) =>
  console.log("👮 Caught with .catch():", err)
);

// ----------------------------------------------
// 🔁 async/await vs Promise Chaining
// ----------------------------------------------
function createOrder(cart) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("order123");
    }, 500);
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("💸 Payment done for " + orderId);
    }, 500);
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🧾 Order Summary: " + paymentInfo);
    }, 500);
  });
}

// ✅ Chaining with async/await
async function completeOrderFlow() {
  try {
    const orderId = await createOrder(["shoes", "kurta"]);
    const payment = await proceedToPayment(orderId);
    const summary = await showOrderSummary(payment);
    console.log("📦 Final Output:", summary);
  } catch (err) {
    console.error("❌ Error in order flow:", err.message);
  }
}
completeOrderFlow();

/*
  🧠 Summary:
  - async returns a promise
  - await pauses until promise resolves
  - use try/catch for error handling
  - async/await is cleaner and easier to read than .then()
  */
