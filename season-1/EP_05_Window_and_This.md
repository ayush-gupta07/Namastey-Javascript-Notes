# 📘 EPISODE 5: Shortest JS Program, `this` Keyword & Global Object (`window`)

## 🚀 Shortest JavaScript Program

Even an **empty JS file** is considered a valid program!

When executed, the **JS engine** still:
- Creates a **Global Execution Context**
- Allocates memory space
- Sets up the global scope

---

## 🌐 The Global Object – `window`

In browsers, the **global object** is called `window`.

- JavaScript engine creates a global object named `window`.
- It holds:
  - Global variables
  - Global functions
  - Global scope data
- Anything declared in the **global scope** is attached to `window`.

---

## 🧪 Example

```js
var x = 10;

console.log(x);        // 10
console.log(this.x);   // 10
console.log(window.x); // 10
```

✅ All three will print `10` because:
- `x` is a global variable
- It gets attached to the `window` object
- `this` in the global context also refers to `window`

---

## 🧠 Summary

- JS engine creates a **Global Execution Context** even for an empty program.
- It also creates a `window` object to serve as the **global scope container**.
- Any variable/function declared globally becomes a property of `window`.
- The `this` keyword refers to `window` in the global scope.

---

## 💬 Interview Q&A

### 1. What happens when an empty JS file is executed?
**Answer:** A Global Execution Context is created, including memory setup and the global object.

### 2. What is the global object in a browser environment?
**Answer:** It's `window`, which stores all globally declared variables and functions.

### 3. How is a global variable accessed through the `window` object?
**Answer:** It becomes a property of the `window` object and can be accessed via `window.variableName`.

### 4. What does `this` refer to in the global scope?
**Answer:** It refers to the `window` object in browser environments.

### 5. Is the following true?
```js
var x = 5;
console.log(this.x === window.x); // true
```
**Answer:** Yes, `this.x` and `window.x` both refer to the global variable `x`.

---
