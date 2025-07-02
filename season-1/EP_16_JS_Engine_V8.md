# 📘 Episode 16 : JS Engine Exposed, Google's V8 Architecture

JavaScript can run anywhere – from your browser to IoT devices – thanks to the **JavaScript Runtime Environment (JRE)**.

---

## 🔥 What is JavaScript Runtime Environment?

The JRE is a container that provides everything needed to run JavaScript code:
- ✅ JavaScript Engine (core of JRE)
- ✅ Web APIs to communicate with environment
- ✅ Event Loop
- ✅ Callback Queue
- ✅ Microtask Queue

> Without JRE, a browser would not be able to execute JavaScript!

---

## ⚙️ What is a JavaScript Engine?

JavaScript Engines are software (not hardware) written in low-level languages like **C++**. They:
- Parse
- Compile
- Execute
JavaScript code into machine-understandable code.

Popular engines:
- **V8** (Chrome, Node.js)
- **Chakra** (Internet Explorer)
- **SpiderMonkey** (Firefox)

---

## 📜 Parsing, Compilation & Execution

### 1. Parsing

Breaks down code into **tokens**.

```js
let a = 7;
// tokens: let, a, =, 7
```

Generated into an **AST (Abstract Syntax Tree)**, a JSON-like structure.

Try it on 👉 [AST Explorer](https://astexplorer.net)

---

### 2. Compilation

JavaScript uses **Just-In-Time (JIT)** Compilation:
- Converts code to bytecode using **Interpreter**
- Optimizes frequently run code using **Compiler**

> JavaScript is both interpreted and compiled 🔄

- Interpreter: **Ignition**
- Compiler: **TurboFan**

More Info:
- [You Don't Know JS: Compilation](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#whats-in-an-interpretation)
- [Stanford Slides](https://web.stanford.edu/class/cs98si/slides/overview.html)
- [GreenRoots Blog](https://blog.greenroots.info/javascript-interpreted-or-compiled-the-debate-is-over-ckb092cv302mtl6s17t14hq1j)

---

### 3. Execution

- 🧠 **Memory Heap**: Allocates memory
- 📞 **Call Stack**: Executes code in LIFO order

Includes a **Garbage Collector**:
- Uses **Mark-and-Sweep Algorithm** to clean unused memory.

---

## 🛠 Google's V8 Engine Architecture

- Interpreter: **Ignition**
- Compiler: **TurboFan**
- Garbage Collector: **Orinoco**

📌 V8 is used by Chrome and Node.js for high performance.

---

### 📷 Visual References

![JS Engine Diagram](/assets/jsengine.jpg)
![JS Engine GIF](/assets/jsenginegif.gif)
![V8 Architecture](/assets/jsengine.png)

---

## 🔁 Summary of Key Concepts

- JavaScript engines like **V8** power the execution of JS in browsers.
- Code goes through three phases: **Parsing → Compilation → Execution**.
- JS uses **JIT Compilation** for both performance and flexibility.
- V8's architecture includes: **Ignition**, **TurboFan**, and **Orinoco** GC.
- Understanding internals helps write better performing code.

---

## 📺 Watch Episode on YouTube

[![Watch Episode 16 on YouTube](https://img.youtube.com/vi/2WJL19wDH68/0.jpg)](https://www.youtube.com/watch?v=2WJL19wDH68&ab_channel=AkshaySaini)

---

