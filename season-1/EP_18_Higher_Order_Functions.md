# 📘 Episode 18: Higher-Order Functions ft. Functional Programming

> Higher-order functions are a powerful feature of JavaScript that enable functional programming. They improve modularity, reusability, and expressiveness.

---

## 🔍 What is a Higher-Order Function?

A **Higher-Order Function** (HOF) is a function that either:
- Takes one or more functions as arguments
- Returns a function as its result

### Example:

```js
function x() {
  console.log("Hi");
}
function y(x) {
  x();
}
y(x); // Hi
// y is a higher-order function
// x is a callback function
```

---

## 💡 Interview-style Problem: Calculate Area Using Radius Array

Suppose you are given an array of radii and need to calculate the **area** for each. Let’s look at how to refactor this with functional programming concepts.

### ✅ First (Naive) Approach

```js
const radius = [1, 2, 3, 4];
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};
console.log(calculateArea(radius));
```

But this violates the **DRY (Don't Repeat Yourself)** principle when we add logic for circumference:

```js
const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};
```

---

## ✨ Refactored with Higher-Order Function

```js
const radiusArr = [1, 2, 3, 4];

// logic to calculate area
const area = function (radius) {
    return Math.PI * radius * radius;
}

// logic to calculate circumference
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

// HOF that abstracts common logic
const calculate = function(radiusArr, operation) {
    const output = [];
    for (let i = 0; i < radiusArr.length; i++) {
        output.push(operation(radiusArr[i]));
    }
    return output;
}

console.log(calculate(radiusArr, area));
console.log(calculate(radiusArr, circumference));
```

> Here, `calculate` is the **Higher-Order Function**, and `area` and `circumference` are callback functions.

---

## 🛠 Polyfill of map()

```js
Array.prototype.calculate = function(operation) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(operation(this[i]));
    }
    return output;
}

console.log(radiusArr.calculate(area));
```

This custom `calculate` method mimics the behavior of the built-in `map()` function.

---

## 🎯 Summary of Key Learnings

- Higher-order functions enable more modular and reusable code.
- Functions in JavaScript are first-class citizens.
- You can pass functions as arguments and return functions from other functions.
- This concept is heavily used in **functional programming**.
- Writing polyfills (like custom `map`) helps deeply understand core JS behavior.

---

## ❓ Interview Questions

1. **What is a Higher-Order Function in JavaScript?**
   - A function that takes another function as an argument or returns a function.

2. **What is a Callback Function?**
   - A function passed as an argument to another function, intended to be called later.

3. **What is Functional Programming?**
   - A programming paradigm where functions are treated as first-class citizens and computations are done using pure functions.

4. **How does the custom `calculate()` function differ from `map()`?**
   - `calculate` is user-defined, whereas `map` is a built-in JavaScript method. Both iterate and return a new array.

5. **Why should we prefer HOFs in large applications?**
   - They abstract common patterns and help keep code DRY and maintainable.

---

## ▶️ Watch Episode

<a href="https://www.youtube.com/watch?v=HkWxvB1RJq0&ab_channel=AkshaySaini" target="_blank">
  <img src="https://img.youtube.com/vi/HkWxvB1RJq0/0.jpg" width="750" alt="Watch on YouTube"/>
</a>