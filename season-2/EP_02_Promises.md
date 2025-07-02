# 📘 Episode 21: Promises – Mastering Asynchronous JavaScript

> Promises are powerful constructs in JavaScript used to handle asynchronous operations cleanly and effectively.

---

## 🔍 Before Promises: The Callback Way

### Problem

Asynchronous functions used to rely on **callbacks**, often leading to complex and hard-to-maintain code known as **Callback Hell** or **Inversion of Control**.

```js
const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function () {
  proceedToPayment(orderId);
});
```

### ❌ Issue

- Callback must be passed into another function.
- No control over when or how the callback will be invoked.
- Cannot guarantee the callback will be called only once.

---

## ✅ After Promises: A Cleaner Approach

### What is a Promise?

> A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```js
const promise = createOrder(cart);

promise.then(function () {
  proceedToPayment(orderId);
});
```

- Promises are immutable.
- Promises can be in one of three states:
  - `pending`
  - `fulfilled`
  - `rejected`

---

## 🔄 Real-World Example: Using `fetch` API

```js
const URL = "https://api.github.com/users/alok722";
const user = fetch(URL); // returns a Promise

user.then(function (data) {
  console.log(data); // resolved data
});
```

---

## ⚠️ Understanding Chrome Console Behavior

> Chrome might show the Promise as `pending`, but if you expand it later, you’ll see it as `fulfilled`.

---

## 💡 Promise States Explained

- **pending** – initial state
- **fulfilled** – completed successfully
- **rejected** – failed

---

## 🔁 Solving Callback Hell: Promise Chaining

```js
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });
```

✅ Each `then()` returns a new Promise for chaining.

---

## ⚠️ Common Pitfall in Promise Chaining

> Always `return` the Promise from each `then` to pass the result to the next step.

---

## 💬 Interview Questions and Answers

### 1. What is a Promise in JavaScript?

**Answer:** A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

---

### 2. What are the three states of a Promise?

**Answer:**
- `pending`: Initial state.
- `fulfilled`: Operation completed successfully.
- `rejected`: Operation failed.

---

### 3. How do Promises solve inversion of control?

**Answer:** Instead of passing a callback to another function, you attach it to the Promise using `.then()`. This gives you more control and ensures it’s only executed once.

---

### 4. What is Promise chaining?

**Answer:** Promise chaining is the practice of returning another Promise inside a `.then()` so that further `.then()` calls can be made, forming a clean sequential flow.

---

### 5. What is the difference between passing a callback and attaching a callback?

**Answer:** Passing a callback gives control to the function, risking misuse or non-execution. Attaching a callback using `.then()` ensures it is executed once the Promise is resolved.

---

## 📌 Key Takeaways

- Promises bring cleaner syntax and better control to async code.
- Promises help avoid **Callback Hell**.
- Promise chaining is crucial for sequential async tasks.
- Always `return` a Promise in `.then()` for proper chaining.
- Promises ensure better error handling and flow management.

---

🎥 **Watch Live on YouTube:**

[![Watch on YouTube](https://img.youtube.com/vi/ap-6PPAuK1Y/0.jpg)](https://www.youtube.com/watch?v=ap-6PPAuK1Y&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=3)