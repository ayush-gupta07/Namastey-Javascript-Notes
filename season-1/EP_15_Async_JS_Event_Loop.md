# 📘 Episode 15: Asynchronous JavaScript & Event Loop from Scratch

> 🧠 _"Call Stack executes any execution context that enters it. Time, tide, and JavaScript wait for none."_  
> 📌 TL;DR — Call Stack has **no timer**!

---

## 🚀 What You Will Learn

- What makes JavaScript asynchronous
- The role of **Web APIs**, **Callback Queue**, **Event Loop**, and **Microtask Queue**
- Visual understanding with event listener examples
- Priority between callbacks and promises
- Common interview questions on async JS internals

---

## 🧱 JavaScript Runtime Components

Although JavaScript is single-threaded and synchronous, browsers empower it using **Web APIs**, which include:
- `setTimeout()`
- DOM APIs
- `fetch()`
- `console.log()`, `localStorage`, and others

These are NOT part of JavaScript but are accessible via the **`window` object** (the global environment in browsers).

```js
window.setTimeout()
window.localStorage
window.console.log()
```

---

## ⏲️ `setTimeout()` Demo

```js
console.log("start");

setTimeout(function cb() {
  console.log("timer");
}, 5000);

console.log("end");

// Output: start -> end -> timer
```

### How it Works:
1. Global Execution Context (GEC) created.
2. `console.log("start")` is executed.
3. `setTimeout` uses **Web API** to schedule the `cb()` callback after 5000ms.
4. `console.log("end")` is executed.
5. Once 5s completes, `cb()` is pushed to **Callback Queue**.
6. **Event Loop** pushes it to Call Stack when it's empty.

---

## 🧠 Callback Queue & Event Loop

The **Callback Queue** stores functions to be executed later, while the **Event Loop** constantly checks if:
- Call Stack is empty ✅
- Callback Queue is not empty ✅
Then it moves items from Callback Queue → Call Stack.

---

## 🧪 Button Click Example

```js
console.log("Start");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("Callback");
});

console.log("End");
```

✅ Even after GEC is removed, the `cb()` in `addEventListener` lives in the Web API environment, waiting for the event to happen.

---

## 🔁 Multiple Callbacks Demo

```js
function printStr(str, cb) {
  setTimeout(() => {
    console.log(str);
    cb();
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
  printStr("A", () => {
    printStr("B", () => {
      printStr("C", () => {});
    });
  });
}
printAll(); // Ensures A → B → C
```

---

## 🔍 The Role of Microtask Queue

```js
console.log("Start");

setTimeout(function cbT() {
  console.log("CB Timeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("End");
```

### Microtask Queue:
- `cbF()` goes into the **Microtask Queue** after data is received.
- `cbT()` (from setTimeout) waits in **Callback Queue**.
- **Microtask Queue > Callback Queue** (Higher priority)


#### 🔍 What happens?

1. **"Start"** is logged immediately.
2. `setTimeout(..., 0)` registers the callback `cbT` in the **Callback Queue**.
3. `Promise.resolve().then(cbP)` registers `cbP` in the **Microtask Queue**.
4. **"End"** is logged next, since it's synchronous.
5. **Event Loop** now steps in:
   - It sees that the **Call Stack is empty**.
   - It checks **Microtask Queue first**, finds `cbP`, and executes it.
     - Logs: `"CB Promise"`
   - Then it checks **Callback Queue**, finds `cbT`, and executes it.
     - Logs: `"CB Timeout"`

#### ✅ Final Output:

```
Start
End
CB Promise
CB Timeout
```

This proves that:
- Even if `setTimeout` has `0ms` delay, it still goes to the **Callback Queue**.
- **Microtasks** (like `.then()`) have **higher priority** and get executed **first**.
![Demo](/assets/microtask.gif)

---

## 🧵 Microtask Queue vs Callback Queue

| Feature                | Microtask Queue       | Callback Queue      |
|------------------------|------------------------|----------------------|
| Examples               | `Promise.then`, MutationObserver | `setTimeout`, `setInterval`, `EventListeners` |
| Priority               | ✅ Higher              | ❌ Lower             |
| Risk of Starvation     | ✅ Yes (if recursive)  | ❌ No                |

---

## 💬 Interview Questions

### Q1: When does the Event Loop start?
**A**: Immediately — it continuously runs in the background to monitor queues.

### Q2: Are all callbacks part of Web API env?
**A**: Only async ones (like `setTimeout`, `fetch`). Sync callbacks (`map`, `filter`) are not.

### Q3: Why do we need Callback Queue?
**A**: For holding ready-to-run async callbacks until the Call Stack is clear.

### Q4: Can `setTimeout(fn, 0)` run immediately?
**A**: No. Callback waits for the Call Stack to clear — even 0ms may delay if stack is busy.

---

## 🎯 What Enters the Microtask Queue?

- `.then()` callbacks from **Promises**
- **MutationObservers**
- Tasks with higher execution priority than callbacks

⚠️ **Starvation**: If Microtask Queue keeps filling, Callback Queue functions may never execute.

---

### Observation of Eventloop, Callback Queue & Microtask Queue [**GiF**]

![microtask 1 Demo](/assets/microtask1.gif)
![microtask 2 Demo](/assets/microtask2.gif)
![microtask 3 Demo](/assets/microtask3.gif)
![microtask 4 Demo](/assets/microtask4.gif)
![microtask 5 Demo](/assets/microtask5.gif)
![microtask 6 Demo](/assets/microtask6.gif)

---

## ✅ Summary: Key Learnings

- JS uses **Call Stack** to execute synchronous code.
- **Web APIs** offer asynchronous features like `setTimeout`, `fetch`, and more.
- **Event Loop** moves callbacks from queues to Call Stack when it's empty.
- **Microtask Queue** (Promises, MutationObserver) has **higher priority** than Callback Queue.
- Use `removeEventListener` and cleanup to avoid memory leaks due to closures.
- JS is async-capable because of its runtime environment and browser support — not because of JS itself!

---

## 📺 Watch Episode on YouTube

<a href="https://www.youtube.com/watch?v=8zKuNo4ay8E&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/8zKuNo4ay8E/0.jpg" 
alt="Asynchronous JavaScript & EVENT LOOP from scratch in JS Youtube Link"/></a>

---