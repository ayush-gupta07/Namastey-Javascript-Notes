# 📘 Episode 13: First Class Functions ft. Anonymous Functions

> ⚙️ Functions are the heart ♥ of JavaScript. Understanding their behavior is crucial to mastering the language.

---

## 🧠 What You'll Learn

This episode covers essential concepts about JavaScript functions — how they are defined, invoked, and behave internally. It breaks down **function expressions**, **declarations**, **anonymous functions**, **named function expressions**, **hoisting**, **first-class functions**, and more.

---

## 🧾 Function Statement (aka Function Declaration)

```js
function a() {
  console.log("Hello");
}
a(); // Output: Hello
```

✅ This is a function statement or declaration.

---

## 🧾 Function Expression

A function used like a value and assigned to a variable.

```js
var b = function () {
  console.log("Hello");
};
b(); // Output: Hello
```

---

## ⚔️ Function Statement vs Function Expression

The key difference lies in **hoisting**.

```js
a(); // ✅ Works - Output: Hello A
b(); // ❌ TypeError: b is not a function

function a() {
  console.log("Hello A");
}

var b = function () {
  console.log("Hello B");
};
```

> During memory creation phase:
> - `a` is hoisted along with its function body.
> - `b` is hoisted as `undefined`.

---

## ❓ Function Declaration vs Statement

They are **the same** thing — just two names for the same construct.

---

## 🕵️ Anonymous Function

A function **without a name**.

```js
function () {
  // Syntax Error
}
```

- ❌ This will throw an error.
- ✅ Anonymous functions are only valid when used as expressions (e.g., assigned to a variable or used as arguments).

Example:

```js
var greet = function () {
  console.log("Hi");
};
```

---

## 🧾 Named Function Expression

```js
var b = function xyz() {
  console.log("b called");
};
b(); // Output: b called
xyz(); // ❌ ReferenceError: xyz is not defined
```

- `xyz` is scoped **only within the function body**.

---

## 🧩 Parameters vs Arguments

```js
var b = function (param1, param2) {
  // param1, param2 → Parameters
};
b(arg1, arg2); // arg1, arg2 → Arguments
```

---

## 🚀 First-Class Functions (a.k.a First-Class Citizens)

JavaScript treats functions as **first-class citizens**, meaning:

- Functions can be **passed as arguments**
- Functions can be **returned from other functions**
- Functions can be **assigned to variables**

```js
var b = function (param1) {
  console.log(param1);
};

b(function () {
  console.log("I'm being passed as an argument");
});

function xyz() {}
b(xyz); // Same behavior

var result = function () {
  return function () {
    console.log("Returned function");
  };
};
result()(); // Output: Returned function
```

---

## 🧠 Summary: What You Learned About First Class Functions

- ✔️ **Function Declarations** are hoisted with their definitions.
- ✔️ **Function Expressions** are hoisted as `undefined`.
- ✔️ **Anonymous Functions** must be used in expressions.
- ✔️ **Named Function Expressions** are not globally scoped.
- ✔️ **First-Class Functions** enable higher-order programming:
  - Passing functions as arguments
  - Returning functions
  - Assigning functions to variables

This feature is foundational for:
- Functional programming
- Event handling
- Asynchronous operations
- Composition and currying patterns

---

## 💬 Interview Prep Q&A

**Q: What’s the main difference between function statement and expression?**  
A: Hoisting. Statements are fully hoisted with body; expressions are hoisted as `undefined`.

**Q: Can you name an anonymous function?**  
A: No, it results in a syntax error if used standalone. It must be part of an expression.

**Q: Can functions be passed or returned?**  
A: Yes, JavaScript supports first-class functions.