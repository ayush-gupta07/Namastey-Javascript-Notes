# 📘 Episode: `call()`, `apply()`, and `bind()` in JavaScript

> Master how to explicitly control the value of `this` using `call`, `apply`, and `bind`.

---

## 🧠 Overview

In JavaScript, the value of `this` depends on the **calling context**. Sometimes, we want to **manually control** what `this` refers to inside a function. This is where the powerful trio of `.call()`, `.apply()`, and `.bind()` comes in.

These methods are defined on **Function.prototype**, which means **every function in JS has access to them**.

---

## 🔍 Why Do We Need Them?

- Reuse a method from one object in the context of another
- Borrow functions across objects
- Avoid code duplication
- Control context in callbacks or asynchronous invocations

---

## 🔧 Syntax

```js
func.call(thisArg, arg1, arg2, ...);
func.apply(thisArg, [arg1, arg2, ...]);
const boundFn = func.bind(thisArg, arg1, arg2, ...);
```

---

## ✨ Differences at a Glance

| Method | Calls Function? | Accepts Arguments | Returns New Function? |
|--------|------------------|-------------------|------------------------|
| `call` | ✅ Immediately   | ✅ Individually    | ❌                     |
| `apply`| ✅ Immediately   | ✅ As Array        | ❌                     |
| `bind` | ❌ Not called    | ✅ Individually    | ✅ Yes (new function)  |

---

## 📌 Example: `call()`

```js
const person = {
  firstName: "Ayush",
  lastName: "Gupta",
};

function greet(greeting) {
  console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
}

greet.call(person, "Hello");
// Output: Hello, Ayush Gupta
```

---

## 📌 Example: `apply()`

```js
greet.apply(person, ["Namaste"]);
// Output: Namaste, Ayush Gupta
```

- Same as `call`, but takes arguments as an array.

---

## 📌 Example: `bind()`

```js
const boundGreet = greet.bind(person, "Hi");
boundGreet(); // Output: Hi, Ayush Gupta
```

- **Returns a new function** that can be called later with the correct context.

---

## 💼 Real-World Use Case 1: Method Borrowing

```js
const user1 = {
  name: "Ankit",
  printName() {
    console.log(`Hello, ${this.name}`);
  },
};

const user2 = { name: "Alok" };
user1.printName.call(user2); // Hello, Alok
```

---

## 💼 Real-World Use Case 2: Event Handlers with Context

```js
function Button(label) {
  this.label = label;
}

Button.prototype.click = function () {
  console.log(`Button "${this.label}" clicked`);
};

const button1 = new Button("Save");
document.querySelector("#saveBtn").addEventListener("click", button1.click.bind(button1));
```

---

## 🧠 Real-World Use Case 3: Array-like to Array

```js
function logArgs() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
}

logArgs(1, 2, 3); // [1, 2, 3]
```

---

## 🤯 Tricky Gotchas

### ❌ `this` Lost in Callbacks

```js
const obj = {
  val: 42,
  logVal() {
    console.log(this.val);
  },
};

setTimeout(obj.logVal, 1000); // undefined
setTimeout(obj.logVal.bind(obj), 1000); // 42 ✅
```

---

## 💬 Interview Questions

### Q1. What is the difference between `call`, `apply`, and `bind`?
**A:**  
- `call`: invokes the function immediately, passes args individually  
- `apply`: same as `call`, but passes args as an array  
- `bind`: returns a new function with bound context and optional preset arguments

---

### Q2. What happens when you pass `null` or `undefined` to `call/apply/bind`?
**A:**  
In non-strict mode, `this` becomes the **global object** (`window` in browser).  
In strict mode, `this` remains `null` or `undefined`.

---

### Q3. Can you polyfill `bind`?
**A:**

```js
Function.prototype.myBind = function (context, ...args1) {
  const fn = this;
  return function (...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};
```

---

### Q4. What is function currying using `bind()`?
**A:**

```js
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // preset a = 2
console.log(double(5)); // 10
```

---

## 🧠 Summary

- Use `.call()` and `.apply()` for immediate function invocation with a specific `this`.
- Use `.bind()` to return a new function that can be invoked later.
- Always use `bind()` when passing object methods to async functions like `setTimeout`, event listeners, etc.
- Great for **method borrowing**, **function currying**, and **preserving context**.

---

## 🎥 Watch This Topic on YouTube
## [Watch on YouTube](https://www.youtube.com/watch?v=75W8UPQ5l7k&t=63s&ab_channel=AkshaySaini)
