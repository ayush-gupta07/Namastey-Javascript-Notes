# 📘 Episode 11: `setTimeout` + Closures – JavaScript Interview Questions

This episode explains the behavior of `setTimeout` in JavaScript, how it interacts with closures, and presents common interview questions that test your understanding of asynchronous behavior and scope.

---

## 🧪 Basic Example

```js
function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Namaste JS");
}
x();
```

### Output
```
Namaste JS
1  // after 3 seconds
```

### Explanation
- We expect JS to wait 3 sec, then print 1, and then the string.
- But JS prints the string immediately, waits 3 sec, and then prints 1.
- This is because `setTimeout` is asynchronous and does not block the execution.
- The inner function forms a closure and remembers the reference to `i`.

---

## ❓ Tricky Interview Question

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

### Output
```
Namaste JS
6
6
6
6
6
```

### Why does this happen?
- Because `var` is function-scoped, all timeout callbacks share the same reference to `i`.
- By the time they run, the loop is over and `i = 6`.

---

## ✅ Solution 1: Use `let`

```js
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
x();
```

### Output
```
1
2
3
4
5
```

- `let` is block-scoped, so a new `i` is created on each iteration.

---

## ✅ Solution 2: Use Closure with IIFE

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    (function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}
x();
```

- Here, `close(i)` creates a new scope capturing the value of `i` for each iteration.

---
