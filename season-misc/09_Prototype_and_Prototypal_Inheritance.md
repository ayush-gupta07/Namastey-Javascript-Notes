# 🧠 Episode 9 : Prototype & Prototypal Inheritance in JavaScript

## 🔍 What is `Array.prototype`?

- `Array.prototype` is the object from which all array instances inherit their methods like `.push()`, `.map()`, `.filter()`, etc.
- Any array (like `const arr = [1, 2, 3]`) internally has `arr.__proto__ === Array.prototype`.

```js
const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
```

---

## 🔍 Exploring the Prototype Chain of an Array

```js
const arr = [1, 2, 3];

console.log(arr.__proto__);                // Array.prototype
console.log(arr.__proto__.__proto__);      // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null
```

- `arr.__proto__` → inherits from `Array.prototype`
- `arr.__proto__.__proto__` → inherits from `Object.prototype`
- `arr.__proto__.__proto__.__proto__` → `null` (end of chain)

This forms the **prototype chain**.

---

## 🔍 `Object.__proto__` and the Prototype Chain

```js
const obj = { a: 1 };

console.log(obj.__proto__);                // Object.prototype
console.log(obj.__proto__.__proto__);      // null
```

- Objects directly created using `{}` inherit from `Object.prototype`.

---

## 🔍 `Function.__proto__` and `Function.prototype`

```js
function test() {}
console.log(typeof test); // "function"

console.log(test.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
```

- Every function is an instance of `Function`, and inherits from `Function.prototype`.
- `Function.prototype` itself inherits from `Object.prototype`.

---

## 🔗 What is the Prototype Chain?

> A prototype chain is the chain of objects from which properties and methods are inherited.

- If a property is not found on an object, JavaScript looks at its prototype (`__proto__`), and continues upward.
- The chain ends at `null`.

### 🧱 Prototype Chain Example:

```js
const arr = [];

// arr -> Array.prototype -> Object.prototype -> null
console.log(arr.hasOwnProperty); // from Object.prototype
```

---

## 🎯 Summary

| Expression                         | Inherits From                    |
|-----------------------------------|----------------------------------|
| `arr.__proto__`                   | `Array.prototype`                |
| `arr.__proto__.__proto__`         | `Object.prototype`               |
| `arr.__proto__.__proto__.__proto__` | `null`                         |
| `obj.__proto__`                   | `Object.prototype`               |
| `test.__proto__` (where test is a function) | `Function.prototype`      |
| `Function.prototype.__proto__`    | `Object.prototype`               |

---

## ❓ Interview Questions

1. **What is `__proto__`?**
   - It’s a reference to the prototype of an object from which it inherits.

2. **How is `Array.prototype` different from `arr.__proto__`?**
   - `Array.prototype` is the global prototype object. `arr.__proto__` points to it.

3. **What is the end of the prototype chain?**
   - `null` – when JavaScript finds `null`, it stops traversing.

4. **Can an object have more than one prototype?**
   - No, an object can inherit from only one prototype (single inheritance).

5. **What is the difference between `.prototype` and `.__proto__`?**
   - `.prototype` exists on constructor functions.
   - `.__proto__` exists on instances and points to the constructor’s prototype.

---

## 📌 Key Takeaways

- Prototype chain enables inheritance.
- Arrays inherit from `Array.prototype`, which inherits from `Object.prototype`.
- Functions are objects and inherit from `Function.prototype`.
- Understanding prototypes helps in debugging inheritance issues and optimizing object design.

---

## 🎥 Watch This Topic on YouTube
## [Watch on YouTube](https://www.youtube.com/watch?v=wstwjQ1yqWQ&pp=0gcJCcMJAYcqIYzv)