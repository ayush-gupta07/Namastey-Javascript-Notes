# 📘 Episode 20: Callback

## 🧠 Overview

In this episode, we explore **Callbacks** in JavaScript—one of the fundamental concepts behind asynchronous programming. While callbacks provide powerful tools to manage async tasks, they also introduce potential issues like **Callback Hell** and **Inversion of Control**.

---

## 🔹 What is a Callback?

A **callback function** is a function passed into another function as an argument to be executed later.

```js
console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 5000);
console.log("Season 2");
```

**Output:**
```
Namaste
Season 2
JavaScript
```

> Here, `setTimeout` delays the callback execution and demonstrates how async behavior works in JavaScript using callbacks.

---

## ⚙️ Real-World Example: e-Commerce Scenario

```js
const cart = ["shoes", "pants", "kurta"];
```

### Step-by-Step Callbacks:

```js
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
```

### 😵 This leads to: **Callback Hell** aka **Pyramid of Doom**

- Difficult to read.
- Hard to maintain.
- Nested structure causes mental overhead and bugs.

---

## ⚠️ Inversion of Control

When you pass a function as a callback, you're handing control to the parent function, trusting it to:

- Call the callback correctly.
- Call it only once.
- Handle errors properly.

This leads to **loss of control** over execution flow.

```js
api.createOrder(cart, function () {
  api.proceedToPayment(); // We trust createOrder to invoke this
});
```

What if `createOrder`:
- Never calls the callback?
- Calls it multiple times?
- Crashes before calling it?

This risk is called **Inversion of Control**.

---

## 💡 Key Takeaways

- JavaScript is **single-threaded** and **synchronous** by default.
- **Callbacks** help us write asynchronous code.
- **Callback Hell** is a downside of using nested callbacks.
- **Inversion of Control** means giving responsibility of calling the function to another function—which might be risky.

---

## 🤔 Interview Questions

1. **What is a callback function in JavaScript?**
   > A function passed into another function to be invoked later.

2. **What is Callback Hell?**
   > A situation where callbacks are nested within callbacks, making the code hard to read and maintain.

3. **What is Inversion of Control in JavaScript?**
   > A loss of control when we rely on external functions to invoke our callback correctly.

4. **Can you give a real-life example of callback hell?**
   > API chains like: `createOrder → proceedToPayment → showSummary → updateWallet` all dependent on the previous step.

5. **Why do we say async programming in JavaScript exists because callbacks exist?**
   > Because JavaScript is synchronous by design, callbacks enable asynchronous behavior.

---

## 🎥 Watch the Video

<a href="https://www.youtube.com/watch?v=yEKtJGha3yM&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX" target="_blank">
  <img src="https://img.youtube.com/vi/yEKtJGha3yM/0.jpg" width="750" alt="Callback Video">
</a>