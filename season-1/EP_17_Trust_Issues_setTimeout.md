# 📺 Episode 17: Trust Issues with `setTimeout()`

---

In this episode, we dive deep into understanding how `setTimeout()` really works and why it may not always behave exactly as expected. This leads us into understanding **concurrency** and **event loop timing behavior** in JavaScript.

---

## 🧠 Concept Overview

### 🕰️ The Problem

Using `setTimeout()` with a delay of `5000ms` (5 seconds) doesn’t **guarantee** execution after exactly 5 seconds. Instead, it **guarantees at least 5 seconds** delay **before** the callback gets a chance to be executed.

```js
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

// Output:
// Start
// End
// Callback (after >= 5s, may be delayed depending on call stack)
```

### ⚙️ Why?

- When the `setTimeout()` is encountered:
  - Its callback is registered in the **Web API environment**
  - Timer starts
- After timer ends, the callback is pushed to the **Callback Queue**
- The **Event Loop** constantly checks if the **Call Stack** is empty.
- **Only when the Call Stack is empty**, the callback is dequeued and executed.

### 🧱 Blocking the Main Thread

If long synchronous code is running, it **blocks** the Call Stack:

```js
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

for (let i = 0; i < 10000000000; i++) {
  // long computation
}

console.log("End");
```

- Even if 5 seconds pass, the callback must wait for the loop to finish.
- **Callback executes only after the stack is clear.**

### 🕛 What if delay is 0?

```js
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 0);

console.log("End");
```

- Output:  
  `Start`  
  `End`  
  `Callback`
- The callback still enters the **Callback Queue** and waits for stack to be empty.

---

## 📌 Key Takeaways

- `setTimeout` does **not** execute precisely after the given time.
- It ensures **minimum delay**, not exact execution timing.
- JavaScript is **single-threaded**, so any blocking operation delays callback execution.
- Callbacks go to the **Callback Queue**, and the **Event Loop** pushes them to the Call Stack only when it's empty.

---

## 💬 Interview Questions & Answers

### 1. ❓ Why does `setTimeout(fn, 0)` still delay execution?

**Answer:**  
Even with `0ms` delay, the callback is sent to the Callback Queue. It only executes after the current call stack is empty, so actual execution can be delayed depending on what else is running.

---

### 2. ❓ Can `setTimeout` callbacks be delayed more than the specified time?

**Answer:**  
Yes. If the call stack is busy (e.g., with a loop or other sync tasks), the callback will wait in the Callback Queue until the stack is clear.

---

### 3. ❓ What is the role of the Event Loop in `setTimeout()`?

**Answer:**  
The Event Loop checks the Callback Queue and pushes its callbacks into the Call Stack when it becomes empty, enabling asynchronous behavior.

---

### 4. ❓ How does the Event Loop relate to trust issues with `setTimeout()`?

**Answer:**  
Because the Event Loop waits for the Call Stack to be empty, there’s no guarantee the callback will run immediately after the timer expires.

---

### 5. ❓ What is the difference between `setTimeout(..., 0)` and a direct function call?

**Answer:**  
- Direct call: runs **immediately**, added to Call Stack right away.
- `setTimeout(..., 0)`: added to Callback Queue, executed **after stack clears**.

---

## ✅ Summary of What You've Learned

- JS is single-threaded and synchronous by default.
- `setTimeout()` allows async-like behavior but still depends on the call stack being free.
- The actual delay could exceed the timer due to blocking code.
- Always avoid blocking the main thread.
- Use `setTimeout(..., 0)` to **defer non-critical logic** until after the current execution.

---

🎥 **Watch this episode on YouTube:**  
[![YouTube Thumbnail](https://img.youtube.com/vi/nqsPmuicJJc/0.jpg)](https://www.youtube.com/watch?v=nqsPmuicJJc&ab_channel=AkshaySaini)