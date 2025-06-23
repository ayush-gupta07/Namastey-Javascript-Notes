# 📘 EPISODE 2: How JavaScript is Executed & the Call Stack

## 🌀 Global Execution Context

When a JavaScript program runs, a **Global Execution Context** is created. This context manages the running code and is made in **two phases**:

---

## 🔄 Execution Context Phases

### 1. **Memory Creation Phase**
- JavaScript allocates memory for **variables and functions**.
- All variables are initially set to `undefined`.
- Function declarations are stored entirely in memory.

#### Example:
```js
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);
```

#### Memory after Creation Phase:
```js
{
  n: undefined,
  square: function,
  square2: undefined,
  square4: undefined
}
```

---

### 2. **Code Execution Phase**
- JavaScript executes code **line-by-line**.
- Values are assigned and functions are invoked.

#### Execution Steps:
1. `n = 2` is assigned.
2. Function `square()` is called with `n`.
3. A **new execution context** is created for `square()`:
   - Memory phase: allocates `num` and `ans` → set to `undefined`.
   - Execution phase: assigns `num = 2`, computes `ans = 4`, returns `4`.
4. `square2` is assigned value `4`.
5. Same process repeats for `square4` → result `16`.

#### Final Global Memory:
```js
{
  n: 2,
  square: function,
  square2: 4,
  square4: 16
}
```

---

## 🧱 Call Stack

JavaScript uses the **Call Stack** to manage execution contexts.

### 🔹 What is the Call Stack?

- A mechanism to keep track of function calls.
- Each function call creates a new execution context, which is **pushed** onto the stack.
- When the function finishes, its context is **popped** off the stack.

### 🔹 Other Names for Call Stack:
- Program Stack
- Control Stack
- Runtime Stack
- Execution Context Stack

---

## 💡 Code Walkthrough

```js
var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);  // returns 4
var square4 = square(4);  // returns 16

console.log(square2); // 4
console.log(square4); // 16
```

---

## 📌 Interview Q&A

### 1. What are the two phases of JavaScript execution?
**Answer:** Memory Creation Phase and Code Execution Phase.

### 2. What happens in the memory creation phase?
**Answer:** JavaScript allocates memory for variables (`undefined`) and functions (entire function definition).

### 3. What is created when a function is invoked?
**Answer:** A new Execution Context is created and pushed to the Call Stack.

### 4. What is the Call Stack used for?
**Answer:** To keep track of execution contexts in a LIFO (Last In First Out) order.

### 5. When is an execution context removed from the stack?
**Answer:** When the function returns (completes execution), the context is popped off the Call Stack.

---
