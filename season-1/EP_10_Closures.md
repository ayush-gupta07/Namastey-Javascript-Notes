# 📘 EPISODE 10: Closures in JavaScript

## 🔐 What is a Closure?

A **closure** is a function bundled together with its **lexical scope** (the environment in which it was created).

JavaScript has **lexical scoping**, meaning:
- Functions search for variables in their **own scope first**.
- If not found, they move **upward to their parent's scope**.

---

## 🧪 Example 1

```js
function x() {
  var a = 7;
  function y() {
    console.log(a); // 7
  }
  return y;
}

var z = x();
console.log(z); // Prints the function definition of y
z();            // 7 (closure remembers `a` from x's scope)
```

### 🧠 Why this works:
- When `y` is returned, it’s not just the function itself.
- The **function `y` + its surrounding scope** (`a = 7`) is returned.
- This combo is called a **closure**.

---

## 🧪 Example 2: Nested Closures

```js
function z() {
  var b = 900;

  function x() {
    var a = 7;

    function y() {
      console.log(a, b); // 7, 900
    }

    y();
  }

  x();
}

z(); // 7, 900
```

- `y` has access to both `a` and `b` even though `b` is two levels up.
- This demonstrates how closures carry **full lexical ancestry**.

---

## 💬 Closure Definition (Simple)

> A closure is a function that remembers and accesses its **outer function’s variables** even after the outer function has returned.

---

## 🎯 Key Takeaways

- Closures are created **whenever a function is returned or passed**.
- Closures keep a **reference** to their outer lexical environment.
- Useful in:
  - Data hiding
  - Function factories
  - Event handlers
  - Callback functions

---

## 💬 Interview Q&A

### 1. What is a closure?
**Answer:** A function that remembers its lexical scope even after its outer function has returned.

### 2. Can closures access variables after the parent function returns?
**Answer:** Yes, that's exactly what closures are designed for.

### 3. Why are closures useful?
**Answer:** For data encapsulation, function factories, and maintaining private variables.

### 4. Are closures memory efficient?
**Answer:** They can lead to memory leaks if not used properly, as they retain references to outer scope.

### 5. How do closures work with asynchronous code?
**Answer:** They preserve variable state across async operations like `setTimeout`, `fetch`, or event listeners.

---

## 📺 Watch Episode on YouTube

<a href="https://www.youtube.com/watch?v=qikxEIxsXco&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/qikxEIxsXco/0.jpg" 
alt="Closure in JS Youtube Link"/></a>

---