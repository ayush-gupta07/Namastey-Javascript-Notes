# 📘 EPISODE 3: Hoisting in JavaScript

## 🧠 What is Hoisting?

**Hoisting** is the JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.

This happens during the **memory creation phase** of the execution context.

---

## 🔎 Behavior

### In JavaScript:
1. Variables are assigned a default value of `undefined` during memory creation.
2. The entire function code is stored in memory.

### Example:
```js
getName(); // ✅ Output: "ayush"
console.log(x); // ✅ Output: undefined

var x = 7;

function getName() {
  console.log("ayush");
}
```

---

## 📌 Important Concepts

- Accessing a variable **before** its assignment only prints `undefined`, not an error.
- This happens because JS sets up memory **first**, assigning `undefined` to variables.
- Function declarations are hoisted **completely** (along with their body).
- Variable assignments are **not** hoisted — only declarations are.

---

## ⚠️ Not Considered an Error

Accessing a variable before assignment:
```js
console.log(x); // undefined
var x = 7;
```
Here, `x` is hoisted and initialized with `undefined`, so no error occurs.

However, if the variable declaration (`var x`) was **entirely absent**, accessing `x` would cause a **ReferenceError**.

---

## 💡 Why It Happens

Hoisting occurs because:
- During the memory creation phase, JS scans the code and:
  - Registers variables (sets to `undefined`)
  - Stores entire function definitions
- During execution, JS runs code line-by-line with the prepared memory.

---

## 💬 Interview Q&A

### 1. What is hoisting in JavaScript?
**Answer:** It’s a behavior where variable and function declarations are moved to the top of their scope before execution.

### 2. What gets hoisted?
**Answer:** Both function declarations and variable declarations (`var`). However, variables are initialized to `undefined`.

### 3. What is the result of accessing a variable before its assignment?
**Answer:** `undefined`, not a `ReferenceError`, if it was declared using `var`.

### 4. Are function expressions hoisted?
**Answer:** No. Only **function declarations** are hoisted, not function expressions or arrow functions.

```js
console.log(myFunc); // undefined
var myFunc = function () {};
```

### 5. Why does hoisting happen?
**Answer:** It happens due to the memory allocation step in the execution context creation phase.

---

## 📺 Watch Episode on YouTube

<a href="https://www.youtube.com/watch?v=Fnlnw8uY6jo&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/Fnlnw8uY6jo/0.jpg" 
alt="Hoisting Youtube Link"/></a>

---
