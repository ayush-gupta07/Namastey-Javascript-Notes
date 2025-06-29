# 📘 EPISODE 1: How JavaScript Works – Execution Context

## 🧠 What is an Execution Context?

Everything in JavaScript happens inside something called the **Execution Context**. It’s like an environment where the JavaScript code is evaluated and executed.

An **Execution Context** has two main components:

| Component | Description |
|----------|-------------|
| **Memory Component** (also called **Variable Environment**) | This is where all variables and functions are stored as key-value pairs before code execution starts. |
| **Code Component** (also called **Thread of Execution**) | This is the part where the code is executed **line by line**, one command at a time. |

---

## 🔍 Breakdown

### 1. **Memory Component (Variable Environment)**

- Stores all variables and function declarations.
- Done in the **memory creation phase** before execution starts.
- Uses key-value structure:
  ```js
  {
    a: 10,
    fn: function() { ... }
  }
  ```

### 2. **Code Component (Thread of Execution)**

- Executes the code **one line at a time**.
- Happens during the **code execution phase**.

---

## 🕐 JavaScript Nature

| Property | Description |
|----------|-------------|
| **Synchronous** | Code is executed in a **synchronous order**, meaning one after the other. |
| **Single-threaded** | Only **one command** is executed at a time using a **single thread of execution**. |

---

## 💡 Code Example

```js
// Memory phase
// a -> undefined
// b -> undefined

let a = 10;
function b() {
  console.log('Hello');
}

b(); // Executes line by line, prints "Hello"
console.log(a); // Prints 10
```

### Explanation:
- In the **memory phase**, JS sets up the variables and functions.
- In the **execution phase**, it runs the function `b()` and prints `Hello`, then logs the value of `a`.

---

## 📌 Interview Q&A

### 1. What is an Execution Context in JavaScript?
**Answer:** It's an environment where JavaScript code is evaluated and executed. It contains memory (variables/functions) and the code to run.

### 2. What are the two components of an Execution Context?
**Answer:** 
- Memory Component (Variable Environment)
- Code Component (Thread of Execution)

### 3. What does it mean that JavaScript is single-threaded?
**Answer:** JavaScript executes one command at a time using a single thread, meaning no two commands run in parallel.

### 4. What happens in the memory creation phase?
**Answer:** All variables are set to `undefined` and function declarations are stored in memory before any code runs.

### 5. What is the difference between synchronous and asynchronous code?
**Answer:** Synchronous code runs in sequence line by line. Asynchronous code (explored later) allows certain operations (like network calls) to run without blocking the main thread.

---

## 🧾 Summary

- JavaScript code runs inside an **Execution Context**, which contains two parts: Memory (where variables/functions are stored) and Code (which executes the code).
- The execution has two phases: **memory creation** and **code execution**.
- JavaScript is **single-threaded** and **synchronous**, meaning it runs one command at a time in a defined order.
- Understanding Execution Context is crucial for grasping advanced concepts like hoisting, closures, scope, and async handling.

---

## 📺 Watch Episode on YouTube

<a href="https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP" target="_blank"><img src="https://img.youtube.com/vi/ZvbzSrg0afE/0.jpg"
alt="Execution Context Youtube Link"/></a>

---