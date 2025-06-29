# 📘 EPISODE 8: `let` & `const` in JavaScript and the Temporal Dead Zone (TDZ)

## 🔍 Hoisting Behavior

- `let` and `const` are also **hoisted**, but differently than `var`.
- Unlike `var`, they are **not initialized to `undefined`** during hoisting.
- Accessing them before initialization results in a **ReferenceError**.

---

## 🧪 Example

```js
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
console.log(b); // ✅ undefined

let a = 10;
console.log(a); // ✅ 10

var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15
```

---

## 🧠 Key Concepts

- `var` is hoisted to the **global memory** and initialized as `undefined`.
- `let` and `const` are hoisted to a separate memory block called **script**, but are **not initialized**.
- They enter the **Temporal Dead Zone** (TDZ) until assigned.

---

## ⏱️ Temporal Dead Zone (TDZ)

TDZ is the time span between:
- When a `let`/`const` variable is hoisted
- Until it is assigned a value

During this period, accessing the variable results in **ReferenceError**.

---

## 💥 Errors

### Reference Error
Occurs when:
- A variable is accessed while it's still in the TDZ.

```js
console.log(a); // ReferenceError
let a = 10;
```

### Syntax Error
Occurs when:
- Variable declaration violates block scope rules.

---

## 🧼 Best Practices

1. ✅ Use `const` whenever possible.
2. ✅ Use `let` if you plan to reassign, avoid `var`.
3. ✅ Declare and initialize variables at the top of the block to shrink TDZ to zero.

---

## 💬 Interview Q&A

### 1. Are `let` and `const` hoisted?
**Answer:** Yes, but they are not initialized to `undefined`. Accessing them before initialization leads to a ReferenceError.

### 2. What is the Temporal Dead Zone?
**Answer:** It’s the phase between the variable being hoisted and being assigned a value.

### 3. What happens if you access a `let` variable before it’s initialized?
**Answer:** You get a `ReferenceError`.

### 4. Are `let`/`const` accessible through `window` in browsers?
**Answer:** No, they do not become properties of the global `window` object.

### 5. How can you avoid Temporal Dead Zone errors?
**Answer:** Declare and initialize variables at the beginning of their scope.

---

## 📺 Watch Episode on YouTube

<a href="https://www.youtube.com/watch?v=BNC6slYCj50&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/BNC6slYCj50/0.jpg" 
alt="let & const in JS, Temporal Dead Zone Youtube Link"/></a>

---