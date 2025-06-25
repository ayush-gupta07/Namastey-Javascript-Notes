# Episode 12: Famous Interview Questions ft. Closures 🔥

Welcome to **Episode 12** of our _Namaste JavaScript Notes_ repository!  
This episode dives deep into **Closures** with practical examples and popular **JavaScript Interview Questions** you must master.

---

## 📚 What’s Covered?

A curated list of frequently asked closure-based interview questions along with clear, executable examples, explanations, and edge cases.

---

### ✅ Q1: What is Closure in JavaScript?

A **Closure** is a combination of a function and its lexical environment (scope) bundled together.

```js
function outer() {
  var a = 10;
  function inner() {
    console.log(a);  // inner forms a closure with outer
  }
  return inner;
}
outer()();  // 10
```

---

### ✅ Q2: Will the below code still form a closure?

```js
function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}
outer()();  // 10
```

**Yes**, sequence doesn't matter. The `inner` function still forms a closure with `a`.

---

### ✅ Q3: Changing `var` to `let`, will it make a difference?

```js
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()();  // 10
```

**No difference.** Closures work the same way with `let`.

---

### ✅ Q4: Will inner function have access to outer function arguments?

```js
function outer(str) {
  let a = 10;
  function inner() {
    console.log(a, str);
  }
  return inner;
}
outer("Hello There")();  // 10 "Hello There"
```

**Yes**, closure captures both variables and parameters.

---

### ✅ Q5: Will inner form closure with `outest`?

```js
function outest() {
  var c = 20;
  function outer(str) {
    let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
outest()("Hello There")();  // 10 20 "Hello There"
```

**Yes**, `inner` has access to the entire scope chain (`a`, `c`, `str`).

---

### ✅ Q6: What happens with shadowed variables?

```js
function outest() {
  var c = 20;
  function outer(str) {
    let a = 10;
    function inner() {
      console.log(a, c, str);
    }
    return inner;
  }
  return outer;
}
let a = 100;
outest()("Hello There")();  // 10 20 "Hello There"
```

Even though `a` exists globally, `inner()` uses `a` from `outer()` due to lexical scoping.

---

### ✅ Q7: Advantages of Closures?

- Encapsulation / Data hiding 🔒
- Memoization
- Currying
- Module pattern
- Usage in `setTimeout`, `setInterval`

---

### ✅ Q8: Data Hiding using Closures

#### ❌ Without closure

```js
var count = 0;
function increment() {
  count++;
}
console.log(count); // Accessible by anyone 😬
```

#### ✅ With closure (Encapsulation)

```js
function counter() {
  var count = 0;
  return function increment() {
    count++;
    console.log(count);
  }
}
const c1 = counter();
c1(); // 1
c1(); // 2

const c2 = counter();
c2(); // 1
```

#### ✅ With Constructor Pattern

```js
function Counter() {
  var count = 0;

  this.increment = function () {
    count++;
    console.log(count);
  };

  this.decrement = function () {
    count--;
    console.log(count);
  };
}

const counter1 = new Counter();
counter1.increment(); // 1
counter1.increment(); // 2
counter1.decrement(); // 1
```

---

### ❌ Q9: Disadvantages of Closures?

Closures **prevent garbage collection** of closed-over variables and may cause memory leaks if not handled properly.

```js
function a() {
  var x = 0;
  return function b() {
    console.log(x);
  };
}

const y = a();
y(); // x is still retained in memory
```

> Modern engines like V8 perform smart garbage collection and optimize unused closures.

---

## 🧠 Interview Tip:
Always **explain the scope chain** and how closures maintain references. Demonstrate use cases like memoization, privacy, and callbacks.

---