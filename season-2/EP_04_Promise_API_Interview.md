# Episode 23: async/await in JavaScript

## 🔍 Topics Covered
- What is `async`?
- What is `await`?
- How async/await works behind the scenes?
- Using async/await with real examples
- Error Handling with async/await
- Interview Questions
- `async/await` vs `Promise.then().catch()`

---

## ❓ What is `async`?

`async` is a keyword used before a function to make it return a **promise**, even if the return value is not explicitly a promise.

### Example:

```js
async function getData() {
  return "Namaste JavaScript";
}
const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}
dataPromise.then((res) => console.log(res)); // Namaste JavaScript
```

---

## ❓ What is `await`?

`await` is used only inside `async` functions. It **pauses execution** of the `async` function until the `Promise` is resolved.

### Example:

```js
const p = new Promise((resolve) => {
  resolve("Promise resolved value!!");
});

async function handlePromise() {
  const val = await p;
  console.log(val); // Promise resolved value!!
}
handlePromise();
```

---

## 🧠 Difference Between `.then()` and `async/await`

### Using `.then()`:

```js
p.then((res) => console.log(res));
console.log("Hello There!");
```

> Output:
> ```
> Hello There!
> Promise resolved value!!
> ```

### Using `async/await`:

```js
async function handlePromise() {
  const val = await p;
  console.log("Hello There!");
  console.log(val);
}
handlePromise();
```

> Output:
> ```
> Hello There!
> Promise resolved value!!
> ```

---

## 🧪 Behind the Scenes

When JS sees an `await` inside `async`, it **suspends execution** and returns control to the event loop. The function resumes only when the promise resolves.

### Example with `debugger`:

```js
async function handlePromise() {
  console.log("Hi");
  debugger;
  const val = await p1;
  console.log("Hello There!");
  debugger;
  console.log(val);
}
```

---

## 🌐 Real World Example using `fetch`

```js
async function handlePromise() {
  const data = await fetch("https://api.github.com/users/alok722");
  const res = await data.json();
  console.log(res);
}
handlePromise();
```

---

## ⚠️ Error Handling

### Using `try/catch`

```js
async function handlePromise() {
  try {
    const data = await fetch("https://api.github.com/users/alok722");
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
```

### Using `.catch()`

```js
handlePromise().catch((err) => console.log(err));
```

---

## 🔁 async/await vs Promise Chaining

- `async/await` increases readability
- `async/await` removes "callback hell" and nested `.then()` chains
- Both are built on Promises, but `async/await` is syntactic sugar

---

## 💬 Interview Questions

### Q1: What is the purpose of `async` in JavaScript?
**A:** It makes a function return a Promise and allows use of `await` inside it.

### Q2: Can `await` be used without `async`?
**A:** No, `await` only works inside `async` functions.

### Q3: What happens when an awaited Promise is rejected?
**A:** Execution moves to the nearest `catch` block or `try-catch` within the `async` function.

### Q4: How does async/await improve code readability?
**A:** It flattens the promise chain and makes async code look like synchronous code.

---

## ✅ Summary

- `async` keyword turns a function into one that always returns a promise.
- `await` pauses execution until a promise settles.
- `async/await` is just syntactic sugar over Promises.
- Error handling is simpler using `try-catch` with `async/await`.
- Use `async/await` for cleaner, more maintainable asynchronous code.

---

🎥 [Watch Episode 23 on YouTube](https://www.youtube.com/watch?v=6nv3qy3oNkc&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=4&ab_channel=AkshaySaini)