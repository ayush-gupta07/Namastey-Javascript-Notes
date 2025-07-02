# Episode 25 : `this` keyword in JavaScript

> In JavaScript, the `this` keyword refers to an object, which object depends on how `this` is being invoked (used or called).

---

## 🧠 `this` in Global Space

Anything defined globally is said to be in a global space.

```js
console.log(this); // refers to global object i.e. window in case of browser
// 💡 global object differs based on runtime environment
```

---

## 🧠 `this` Inside a Function

```js
function x() {
  // the below value depends on strict/non-strict mode
  console.log(this);
  // in strict mode - undefined
  // in non-strict mode - refers to global window object
}
x();
```

📝 **Notes**:
- On the first go, it feels like `this` in global space and inside function behaves same, but it doesn't.
- Using `"use strict"` at the top changes the behavior — `this` becomes `undefined` inside functions.

🧪 **This Substitution**:
- If the value of `this` is `null/undefined`, it is replaced with the global object **only in non-strict mode**.

---

## 🧠 `this` Inside an Object's Method

```js
const obj = {
  a: 10,
  x: function () {
    console.log(this); // {a: 10, x: f()}
    console.log(this.a); // 10
  },
};
obj.x(); // value of `this` refers to current object i.e. `obj`
```

---

## 🧠 `call`, `apply`, & `bind` Methods

```js
const student = {
  name: "Alok",
  printName: function () {
    console.log(this.name);
  },
};
student.printName(); // Alok

const student2 = { name: "Kajal" };
// Reuse method using call
student.printName.call(student2); // Kajal
```

- `call`, `apply`, and `bind` are used to **set the value of `this`**.
- `bind` returns a new function, whereas `call` and `apply` invoke the function immediately.

---

## 🧠 `this` Inside Arrow Functions

Arrow functions do not have their own `this`; they inherit it from the enclosing **lexical context**.

```js
const obj = {
  a: 10,
  x: () => {
    console.log(this); // window object
  },
};
obj.x();

const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this); // refers to obj2
    };
    y();
  },
};
obj2.x();
```

---

## 🧠 `this` in the DOM

```html
<button onclick="alert(this)">Click Me</button>
<!-- Refers to the HTMLButtonElement that was clicked -->
```

---

## 💬 Interview Questions

1. **What is the value of `this` in the global execution context in browsers?**
   - `window` object.

2. **What does `this` return inside a regular function?**
   - In strict mode: `undefined`.
   - In non-strict mode: `window`.

3. **What is `this substitution` in JavaScript?**
   - In non-strict mode, `this` defaults to global object if it's `null` or `undefined`.

4. **How does `this` behave inside an object method?**
   - Refers to the object itself.

5. **Difference between `call`, `apply`, and `bind`?**
   - `call` and `apply` call the function with `this` set; `bind` returns a new function.

6. **How does `this` behave in arrow functions?**
   - It uses `this` from the enclosing (lexical) context.

7. **What does `this` refer to in DOM event handlers?**
   - The HTML element that triggered the event.

---

## ✅ Summary

- `this` behaves differently depending on the context.
- Global scope: refers to global object (`window` in browser).
- Inside function:
  - non-strict mode → `window`
  - strict mode → `undefined`
- In object methods → refers to the object.
- In arrow functions → takes from lexical context.
- `call`, `apply`, `bind` → used to explicitly set `this`.
- In DOM handlers → `this` refers to the element triggering the event.

---

## 🎥 Watch Live on YouTube

[![this keyword in JavaScript](https://img.youtube.com/vi/9T4z98JcHR0/0.jpg)](https://www.youtube.com/watch?v=9T4z98JcHR0&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=4&ab_channel=AkshaySaini)