# 📘 Episode 8 : Infinite Currying - Sum Function  
*(Amazon UI/Frontend Interview Question)*

---

## 🧠 Problem Statement

Create a function that allows infinite currying like:

```js
sum(1)(2)(3)(4)(5)...()
```

And returns the **total sum** when final empty `()` is called.

---

## 🔍 Key Concepts Covered

- **Currying**  
- **Closure**  
- **Recursion**
- **Function chaining**
- **Returning functions from functions**

---

## ✅ Desired Output

```js
console.log(sum(1)(2)(3)(4)(0)()); // 10
console.log(sum(5)(10)(-3)());     // 12
console.log(sum(7)());             // 7
```

---

## 🧪 Code Breakdown

```js
function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b); // accumulate sum through closure
    } else {
      return a; // terminating condition
    }
  };
}
```

But to make it more robust (handle `0`, `null`, or `undefined` properly), use:

```js
function sum(a) {
  return function next(b) {
    if (typeof b !== "undefined") {
      return sum(a + b);
    } else {
      return a;
    }
  };
}
```

---

## 🔁 Explanation

- `sum(1)` returns a function with closure `a = 1`
- `sum(1)(2)` returns a function with closure `a = 3`
- ...and so on
- When the last `()` is called without arguments (i.e. `undefined`), we return the accumulated sum

---

## 💡 Real-World Analogy

You can use currying:
- In **form validations** to chain conditions
- For building **middleware pipelines**
- In **function composition** for functional programming

---

## ⚠️ Interview Traps & Misconceptions

| Trap | Clarification |
|------|---------------|
| Returning a value instead of function | This breaks the chain. Return a function unless termination is intended. |
| Assuming 0 means termination | `0` is falsy but might be valid input. Use `typeof` check instead. |
| Forgetting closure accumulation | Need to maintain sum via recursion or closure. |

---

## ❓ Common Follow-up Questions

1. **How do you handle inputs like `sum(0)` or `sum(1)(2)(0)`?**  
   - Don’t rely on truthy/falsy check; explicitly check if `b` is `undefined`.

2. **What happens if you call `sum()` without any argument?**  
   - It will return `undefined`. You can set a default parameter like `sum(a = 0)` if needed.

3. **How can you generalize it to support `toString` override like `sum(1)(2)(3) + 5`?**  
   - You can override `.toString()` or `.valueOf()` for such behavior (advanced concept).

---

## 🧠 Advanced Version with `.valueOf()`

```js
function sum(a) {
  let total = a;

  function inner(b) {
    total += b;
    return inner;
  }

  inner.valueOf = function () {
    return total;
  };

  return inner;
}

console.log(+sum(1)(2)(3)); // 6
```

---

## 📌 Key Takeaways

- Currying is a powerful way to handle **repeated calls**.
- Use closures to preserve state.
- `return function` is crucial to enable chaining.
- Always provide a **termination condition**.
- Prefer `typeof b !== "undefined"` over `if (b)` to handle edge cases like `0`.

---

## 🎥 Watch This Topic on YouTube
## [Watch on YouTube](https://www.youtube.com/watch?v=D5ENjfSkHY4)