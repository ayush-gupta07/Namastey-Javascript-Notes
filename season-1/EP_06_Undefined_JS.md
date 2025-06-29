# 📘 EPISODE 6: `undefined` vs `not defined` in JavaScript

## 🧠 What is `undefined`?

- In the **memory allocation phase**, JavaScript assigns each declared variable a default value: `undefined`.
- It means **memory is allocated**, but **no value has been assigned yet**.

```js
console.log(x); // undefined
var x = 25;
console.log(x); // 25
```

---

## ❌ What is `not defined`?

- If a variable is **not declared at all**, and you try to access it — JS throws a **ReferenceError** saying it is "not defined".

```js
console.log(a); // ❗ Uncaught ReferenceError: a is not defined
```

---

## ⚖️ Comparison

| Term          | Meaning                                                                 |
|---------------|-------------------------------------------------------------------------|
| `undefined`   | Variable is declared, memory is allocated, but value is not assigned.   |
| `not defined` | Variable is never declared, no memory was allocated during creation.    |

---

## ⚙️ Additional Notes

- `not defined !== undefined`
- JavaScript is a **loosely typed / weakly typed** language.
  - You can assign a number to a variable and later assign a string or boolean.
  - Example:
    ```js
    var a = 5;
    a = "hello"; // perfectly fine
    ```

---

## 🚫 Best Practices

- ❌ **Never manually assign `undefined`** to a variable.
- ✅ Let JavaScript assign `undefined` automatically during memory creation.
  ```js
  var x; // undefined by default
  ```

---

## 💬 Interview Q&A

### 1. What does `undefined` mean in JavaScript?
**Answer:** It means the variable has been declared and memory has been allocated, but no value is yet assigned.

### 2. What is `not defined`?
**Answer:** It means the variable was never declared, and JavaScript throws a `ReferenceError` when you try to access it.

### 3. Is JavaScript strongly typed?
**Answer:** No, JavaScript is **loosely typed**, meaning variables are not bound to any specific type.

### 4. What happens when you access an undeclared variable?
**Answer:** A `ReferenceError` occurs — the variable is "not defined".

### 5. Should we assign `undefined` manually?
**Answer:** No. It’s best to let JavaScript handle it during memory allocation.

---

## 📺 Watch Episode on YouTube

<a href="https://www.youtube.com/watch?v=B7iF6G3EyIk&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/B7iF6G3EyIk/0.jpg"
alt="undefined vs not defined in JS Youtube Link"/></a>

---