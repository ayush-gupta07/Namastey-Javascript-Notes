# Episode 11: setTimeout + Closures Interview Questions

## 🧠 Topic Summary

This episode covers the interaction of `setTimeout` and closures in JavaScript, and how they affect execution timing and variable scoping. It's an essential topic frequently asked in interviews due to its tricky behavior with asynchronous code and closures.

## 🧪 Example 1: Basic `setTimeout` Closure

### ✅ Code

```js
function x() {
  var i = 1;

  setTimeout(function () {
    console.log(i); // Expected to print after 3 seconds
  }, 3000);

  console.log("Namaste JS");
}

x();
```

### 🧾 Output

```
Namaste JS
1   // after 3 seconds
```

### 🧠 Explanation

- `setTimeout` schedules the callback after 3 seconds but doesn't block the rest of the code.
- So `"Namaste JS"` prints immediately.
- After 3 seconds, the callback inside `setTimeout` is executed.
- It forms a **closure**, capturing the reference of `i` and accessing it later.

## 🤯 Example 2: Common Interview Question – Print `1` after 1s, `2` after 2s… up to `5`

### ❌ Problematic Code (Using `var`)

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log("Namaste JS");
}

x();
```

### 🧾 Output

```
Namaste JS
6
6
6
6
6
```

### ⚠️ Why 6?

- `setTimeout` creates **closures** that remember the **reference** of `i`, not its value.
- By the time callbacks run, the loop has finished, and `i = 6`.
- All 5 functions print the same `i`, which is 6.

## ✅ Solution 1: Use `let` for Block Scope

```js
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i); // correct value due to block scoping of `let`
    }, i * 1000);
  }

  console.log("Namaste JS");
}

x();
```

### ✅ Output

```
Namaste JS
1   // after 1 sec
2   // after 2 sec
3   // after 3 sec
4   // after 4 sec
5   // after 5 sec
```

### 🧠 Explanation

- `let` creates a new binding for `i` in each iteration.
- Each callback closure has its own `i`.

## ✅ Solution 2: Using Closures Explicitly with `var`

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }

    close(i); // each call forms a new closure with current `i`
  }

  console.log("Namaste JS");
}

x();
```

### ✅ Output

```
Namaste JS
1
2
3
4
5
```

## ❓ Interview Questions & Answers

### Q1: What is a closure?

**A:** A closure is when a function remembers its **lexical scope**, even when executed outside that scope.

### Q2: Why does `setTimeout` with `var` always print 6?

**A:** Because `setTimeout` creates a closure that captures the **reference** to `i`. When callbacks run, `i` has already been incremented to 6.

### Q3: How does `let` fix the issue in a loop with `setTimeout`?

**A:** `let` creates a new scope (block scoped) for each loop iteration. So each closure gets a unique copy of `i`.

### Q4: Can we use `var` and still solve this? How?

**A:** Yes, by wrapping the `setTimeout` call in a separate function (like `close(i)`), which creates a new scope and forms a closure with each `i`.

### Q5: Is `setTimeout` synchronous or asynchronous?

**A:** Asynchronous. The callback is scheduled and placed in the event queue after the specified delay. JS continues executing other code meanwhile.

## 🧼 Best Practices

- Always use `let` or `const` in loops with async calls like `setTimeout`.
- Understand how closures capture **references**, not **values**.
