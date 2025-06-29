# 📘 EPISODE 9: Block Scope & Shadowing in JavaScript

## 🧱 What is a Block?

A **block** (also called a compound statement) groups JavaScript statements together using `{ ... }`.

```js
{
  var a = 10;
  let b = 20;
  const c = 30;
}
```

- `let` and `const` are **block-scoped** — not accessible outside.
- `var` is **function or globally scoped** — accessible outside the block if declared outside a function.

---

## 🧪 Scope Accessibility Example

```js
{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // 10
console.log(b); // ❌ ReferenceError
```

- `b` and `c` are not accessible outside due to block scoping.
- `a` is still accessible globally.

---

## 🕳️ What is Shadowing?

**Shadowing** is when a variable declared within a certain scope (e.g., inside a block) **has the same name** as a variable in an outer scope.

```js
var a = 100;
{
  var a = 10; // Shadows global 'a'
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); // 10 (global 'a' is overwritten)
```

---

## 🔁 Shadowing with `let` and `const`

```js
let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(b); // 20
}
console.log(b); // 100
```

- Both `b`s exist independently — one in block scope, one in script/global scope.

---

## 🚫 What is Illegal Shadowing?

Illegal shadowing occurs when you try to **shadow a `let` or `const` variable using `var`** in the same or nested block.

```js
let a = 20;
{
  var a = 20; // ❌ SyntaxError
}
```

✅ Valid cases:

```js
let a = 20;
{
  let a = 30; // Valid shadowing
}
```

```js
let a = 20;
function n() {
  var a = 20; // ✅ Legal since var is function scoped
}
```

---

## 🧠 Summary

| Concept        | `var`         | `let` / `const`    |
|----------------|---------------|--------------------|
| Scope          | Function/Global | Block             |
| Hoisting       | Yes (initialized to `undefined`) | Yes (but TDZ applies) |
| Global Object  | Attached      | Not attached       |
| Can Shadow     | Yes           | Yes                |
| Can Be Shadowed| Yes           | ❌ Not with `var`  |

---

## 💬 Interview Q&A

### 1. What is block scope?
**Answer:** It limits variable access to the `{ ... }` block in which they are declared.

### 2. Which variables are block scoped?
**Answer:** `let` and `const`.

### 3. What is shadowing?
**Answer:** When a variable in a nested scope has the same name as one in an outer scope.

### 4. Can `var` shadow `let`?
**Answer:** No, this causes a SyntaxError — it's illegal shadowing.

### 5. Why should we avoid `var`?
**Answer:** Because it lacks block scoping, can lead to unexpected bugs, and pollutes the global scope.

---

## 📺 Watch Episode on YouTube

<a href="https://www.youtube.com/watch?v=lW_erSjyMeM&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/lW_erSjyMeM/0.jpg" 
alt="Block Scope & Shadowing in JS Youtube Link"/></a>

---