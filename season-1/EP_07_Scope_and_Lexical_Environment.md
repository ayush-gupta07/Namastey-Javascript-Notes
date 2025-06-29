# 📘 EPISODE 7: The Scope Chain, Scope & Lexical Environment

## 🔍 What is Scope in JavaScript?

Scope defines **where variables and functions can be accessed** in your code. In JavaScript, scope is **lexical** — it's determined by the physical placement of code in the source file.

---

## 📚 Case Examples

### ✅ Case 1
```js
function a() {
  console.log(b); // 10
}
var b = 10;
a();
```
- Function `a()` can access `b` from global scope due to lexical scoping.

---

### ✅ Case 2
```js
function a() {
  c();
  function c() {
    console.log(b); // 10
  }
}
var b = 10;
a();
```
- Even nested function `c()` can access global `b` due to scope chain.

---

### ✅ Case 3
```js
function a() {
  c();
  function c() {
    var b = 100;
    console.log(b); // 100
  }
}
var b = 10;
a();
```
- Inner `b = 100` shadows global `b = 10`.

---

### ❌ Case 4
```js
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10
  }
}
a();
console.log(b); // ❗ ReferenceError: b is not defined
```
- `b` is scoped to function `a()`, inaccessible from the global context.

---

## 🧠 Execution Context + Lexical Environment

### 📦 Call Stack Representation:
```
Call Stack: [GEC, a(), c()]
```

### 🔁 Lexical Environment of:
- `c()` → local memory + reference to `a()`'s environment
- `a()` → local memory (b, c) + reference to GEC
- GEC → local memory (a) + reference to null

---

## 🧩 Lexical Environment = Local Memory + Parent Reference

- Created with each **Execution Context**
- **Hierarchy-based lookup** for variables
- Inner functions access parent scopes via lexical environment links

---

## 🗂️ Lexical / Static Scope

Lexical scope refers to **accessibility** based on **where** functions and blocks are written in the source code.

```js
function outer() {
  function inner() {
    // inner is lexically inside outer
  }
  inner();
}
// outer is lexically inside global
```

---

## ✅ Key Takeaways

- Inner functions can access variables in **outer functions**
- Global Execution Context (GEC) cannot access **local variables**
- **Lexical Scope** is static — determined at the time of code writing
- Scope chain = hierarchical variable lookup path

---

## 💬 Interview Q&A

### 1. What is lexical scope?
**Answer:** Lexical scope is the ability of a function to access variables from its parent scope based on its position in the code.

### 2. What is a scope chain?
**Answer:** It’s the chain of variable environments from current scope up to the global scope used for identifier resolution.

### 3. Can a global variable be accessed from a nested function?
**Answer:** Yes, if the function is lexically nested inside the global context.

### 4. Can a global scope access local variables?
**Answer:** No. Global context cannot access variables declared in functions.

### 5. What is created when a function is invoked?
**Answer:** A new Execution Context with a corresponding Lexical Environment is created.

---

## 📺 Watch Episode on YouTube

<a href="https://www.youtube.com/watch?v=uH-tVP8MUs8&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/uH-tVP8MUs8/0.jpg" width="750"
alt="The Scope Chain, Scope & Lexical Environment Youtube Link"/></a>

---