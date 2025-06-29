# 📘 EPISODE 4: Functions and Variable Environments

## 🔍 Concept

In JavaScript, each function call creates a new **Execution Context** with its own **Variable Environment**. This is what enables **local scope**.

This concept is important when understanding **hoisting** and how multiple `n` variables in different scopes don't overwrite each other.

---

## 📂 Example Code

```js
var n = 1;
a();
b();

function a() {
  var n = 10;
  console.log(n); // Output: 10
}

function b() {
  var n = 100;
  console.log(n); // Output: 100
}
```

### 🧾 Output:
```
10
100
```

---

## 🔄 Code Flow

1. A **Global Execution Context (GEC)** is created.
2. In the **memory phase** of GEC:
   - `n` is set to `undefined`.
   - Function code for `a()` and `b()` is stored.
3. In the **execution phase**, `n` is assigned value `1`.
4. When `a()` is called:
   - A new **Local Execution Context** is created.
   - Local memory for `n` is created and assigned `10`.
5. When `b()` is called:
   - Another new **Local Execution Context** is created.
   - Local memory for `n` is assigned `100`.
6. Each function prints its **own local `n`**.
7. Once the functions return, their execution contexts are removed from the **Call Stack**.
8. Finally, after all execution, the GEC is also destroyed.

---

## 🧠 Key Takeaways

- Each function invocation gets its own execution context.
- Local variables shadow global ones of the same name.
- Function `a()` and `b()` do not interfere with each other's `n`.
- Local `n` values are maintained due to separate memory environments.

---

## 💬 Interview Q&A

### 1. What is a Variable Environment?
**Answer:** It’s the memory space where variables are stored for a particular execution context.

### 2. Do functions share variable environments?
**Answer:** No. Each function call creates a separate variable environment.

### 3. What happens if multiple variables have the same name?
**Answer:** JavaScript uses the most local definition due to **scope**. Outer variables are shadowed by inner ones.

### 4. What happens to a function’s execution context after it finishes?
**Answer:** It’s removed from the Call Stack and its memory is cleared.

---

## 📺 Watch Episode on YouTube

<a href="https://www.youtube.com/watch?v=gSDncyuGw0s&ab_channel=AkshaySaini" target="_blank"><img src="https://img.youtube.com/vi/gSDncyuGw0s/0.jpg" width="750"
alt="Functions and Variable Environments Youtube Link"/></a>

---