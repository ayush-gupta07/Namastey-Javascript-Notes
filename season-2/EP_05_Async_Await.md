# Episode 24: Promise APIs (all, allSettled, race, any) 🔥

### 🔍 Topics Covered
- `Promise.all()`
- `Promise.allSettled()`
- `Promise.race()`
- `Promise.any()`
- Code examples
- Summary
- Interview-style Q&A

---

## 🔗 Promise.all()

> Handles multiple promises in parallel and waits for all to resolve. If **any one fails**, it throws an error immediately.

### 💡 Use Case
Use when you want to wait for **all promises to succeed**.

### ✅ Example
```js
Promise.all([p1, p2, p3])
  .then((results) => console.log(results)) 
  .catch((err) => console.error(err));
```

### 📌 Behavior
- If all resolve: returns `[val1, val2, val3]`
- If any rejects: returns the first rejection error **immediately**

---

## 🔗 Promise.allSettled()

> Waits for **all promises to settle**, regardless of resolve or reject. Safest API.

### ✅ Example
```js
Promise.allSettled([p1, p2, p3])
  .then((results) => console.log(results));
```

### 📌 Output
```js
[
  {status: "fulfilled", value: "P1 Success"},
  {status: "fulfilled", value: "P2 Success"},
  {status: "rejected", reason: "P3 Fail"}
]
```

---

## 🔗 Promise.race()

> Returns the result (resolve/reject) of the **first settled** promise.

### ✅ Example
```js
Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

### 📌 Behavior
- Fastest resolved or rejected wins
- Does **not** wait for others

---

## 🔗 Promise.any()

> Returns the **first fulfilled** promise. Ignores rejections.

### ✅ Example
```js
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.error(err.errors); // List of all errors
  });
```

### 📌 Behavior
- If at least one resolves → returns that
- If **all fail** → returns `AggregateError`

---

## 🧠 Interview Questions

### Q1: What’s the difference between `Promise.all()` and `Promise.allSettled()`?
**A**:  
- `Promise.all()` fails fast on first rejection.  
- `Promise.allSettled()` waits for all and gives status of each.

---

### Q2: When should you use `Promise.race()`?
**A**: When you want to take action based on the **fastest** result, success or failure (e.g., timeout fallback).

---

### Q3: What happens if all promises fail in `Promise.any()`?
**A**: It throws `AggregateError` which contains all individual errors in `err.errors`.

---

### Q4: What’s the most commonly used Promise API in real-world applications?
**A**: `Promise.all()` – especially in scenarios like multiple API fetches or parallel asynchronous tasks.

---

## 🧾 Summary of Promise APIs

| API | Waits for All? | Returns On | Rejection Behavior |
|-----|----------------|------------|--------------------|
| `Promise.all` | ✅ | All resolved | Rejects if **any** fails |
| `Promise.allSettled` | ✅ | All settled | No rejection – always resolves |
| `Promise.race` | ❌ | First settled | Can resolve or reject |
| `Promise.any` | ❌ | First resolved | Rejects **only if all** fail |

---

## 🔗 Watch on YouTube
[![Promise APIs in JavaScript](https://img.youtube.com/vi/DlTVt1rZjIo/0.jpg)](https://www.youtube.com/watch?v=DlTVt1rZjIo)