# Episode 22: Creating a Promise, Chaining & Error Handling

> Learn how to create your own promises, handle errors gracefully, and build clear chains of async logic.

---

## ✅ What You’ll Learn

- How to **create a Promise**
- The difference between **resolve** and **reject**
- How to **consume Promises**
- How to **chain Promises**
- **Error handling** using `.catch()`
- Avoiding common pitfalls like **broken chains**
- When and how to **recover** from failures in the chain

---

## 🧪 Real-World Example: E-Commerce Flow

```js
const cart = ["shoes", "pants", "kurta"];

// Consumer part of promise
const promise = createOrder(cart); // returns a promise

promise.then(function (orderId) {
  proceedToPayment(orderId);
});
```

---

## 🔧 Creating a Custom Promise (Producer Side)

```js
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      return reject(new Error("Cart is not Valid"));
    }
    const orderId = "12345"; // Simulated DB insert
    resolve(orderId);
  });
}
```

---

## 🔍 Debugging `.then()` Timing

```js
console.log(promise); // Promise {<pending>}
// Will become fulfilled once the async work is done
```

---

## ❌ Handling Promise Rejections

```js
promise
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .catch(function (err) {
    console.log(err.message); // "Cart is not Valid"
  });
```

---

## 🔗 Promise Chaining

```js
createOrder(cart)
  .then(function (orderId) {
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo); // "Payment Successful"
  })
  .catch(function (err) {
    console.log(err.message);
  });
```

---

## 🔄 Continue Execution After Catch

```js
createOrder(cart)
  .then(function (orderId) {
    return orderId;
  })
  .catch(function (err) {
    console.log("Caught error:", err.message);
    return null; // Continue chain
  })
  .then(function (orderId) {
    if (orderId) return proceedToPayment(orderId);
    else throw new Error("Skipping payment due to order failure");
  })
  .then(function (paymentInfo) {
    console.log("Payment Done:", paymentInfo);
  })
  .catch(function (err) {
    console.log("Final catch:", err.message);
  });
```

---

## ❓ Interview Q&A

**Q1. What is the difference between resolve and reject in a Promise?**  
A: `resolve()` is called when the async task completes successfully, `reject()` when it fails.

**Q2. Why is `.catch()` important in a Promise chain?**  
A: It ensures you gracefully handle failures and don’t crash your app or cause memory leaks.

**Q3. What happens if a `.then()` throws an error?**  
A: The next `.catch()` in the chain will catch it.

**Q4. What is Promise Chaining?**  
A: Returning a promise in a `.then()` so that subsequent `.then()` blocks wait for it to resolve.

---

## 🧠 Summary

- You can create custom promises using the `Promise` constructor.
- Use `.then()` to attach success callbacks and `.catch()` for error handling.
- Return from each `.then()` to maintain a proper chain.
- Chains stop on rejection unless caught and continued manually.
- A promise can be in 3 states: **Pending**, **Fulfilled**, or **Rejected**.
- Promises help replace nested callbacks and avoid **callback hell**.

---

🎥 [Watch on YouTube](https://www.youtube.com/watch?v=U74BJcr8NeQ&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=4&ab_channel=AkshaySaini)