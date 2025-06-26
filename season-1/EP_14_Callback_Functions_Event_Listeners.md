# 📘 Episode 14: Callback Functions in JS ft. Event Listeners

> 💡 This episode uncovers how JavaScript can interact with asynchronous operations using **callback functions** and **event listeners**, even though it’s a synchronous and single-threaded language.

---

## 🧠 What You'll Learn

- Callback functions
- Event listeners
- Call stack behavior
- Async simulation using `setTimeout`
- Closures in event handling
- Memory management with event listeners

---

## 🔁 Callback Functions

- JavaScript functions are **first-class citizens**: they can be passed as arguments to other functions.
- A function passed into another function as an argument is called a **callback**.

```js
setTimeout(function () {
  console.log("Timer");
}, 1000); // 'function' is the callback
```

- Despite being synchronous and single-threaded, JavaScript handles asynchronous behavior using callbacks.

---

### ⏲ Example: Call Stack Behavior

```js
setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});
```

📌 Output:
```
x
y
timer
```

- Call stack executes `x` and `y` immediately.
- `setTimeout` gets deferred via Web APIs, added to the task queue, and eventually pushed into the stack when the thread is free.

> ❗ **Avoid blocking the main thread!** If a function takes long (e.g., 30s), it will block everything else.

---

### ⛓️ Callback Nesting Example

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

printAll(); // A B C in order
```

This demonstrates how callbacks can simulate **asynchronous sequencing** in JavaScript.

---

## 🖱️ Event Listeners

Attach a function (callback) to DOM events like click, hover, scroll.

```html
<!-- index.html -->
<button id="clickMe">Click Me!</button>
```

```js
// index.js
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button clicked");
});
```

> The function `xyz` is executed each time the `click` event is fired.

---

## 🔢 Counter Example

### ❌ Global State (Not Safe)

```js
let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button clicked", ++count);
});
```

### ✅ Closure-Based Counter (Encapsulation)

```js
function attachEventList() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count); // closure captures count
  });
}
attachEventList();
```

> ✅ Closures help in data hiding and abstraction. Each `count` stays within its own lexical environment.

---

## 🧹 Garbage Collection and Event Listeners

- **Event listeners create closures** and **consume memory**.
- Even when the call stack is empty, closure variables like `count` stay in memory due to the reference from the event listener.
- ❗ Always **remove event listeners** when they’re no longer needed.

```js
const btn = document.getElementById("clickMe");

function clickHandler() {
  console.log("Button clicked");
  btn.removeEventListener("click", clickHandler); // cleanup
}

btn.addEventListener("click", clickHandler);
```

---

## 📚 Summary: What You Learned

- ✔️ Callback functions allow async behavior in JavaScript
- ✔️ JavaScript remains single-threaded and synchronous, but callbacks simulate async flows
- ✔️ `setTimeout` defers execution using Web APIs and task queue
- ✔️ Event listeners are powerful, but should be managed properly to avoid memory leaks
- ✔️ Closures in event handlers help encapsulate data (e.g., counters)
- ✔️ Unused event listeners should be removed to help garbage collection

---

## 💬 Interview Prep Q&A

**Q: What is a callback function?**  
A: A function passed as an argument to another function and executed later.

**Q: What happens if the main thread is blocked?**  
A: All other operations (like rendering, user input, async callbacks) are blocked until it finishes.

**Q: Why is using closures inside event listeners helpful?**  
A: It allows for data encapsulation and prevents global variable leaks.

**Q: Why should we remove event listeners?**  
A: To prevent memory leaks and ensure unused closures are garbage collected.
