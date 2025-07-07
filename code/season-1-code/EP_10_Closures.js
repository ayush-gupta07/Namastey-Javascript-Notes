// 📘 Episode 10: Closures in JavaScript

// 🔐 What is a Closure?
// A closure is a function that remembers and accesses its lexical scope
// even when it's executed outside that scope.

// ✅ Example 1: Basic Closure
function outer() {
  var a = 7;
  function inner() {
    console.log("inner accessing a:", a); // 7
  }
  return inner;
}

var fn = outer(); // outer() returns inner, which has closed over `a`
fn(); // prints 7

// ✅ Example 2: Nested Closures
function z() {
  var b = 900;

  function x() {
    var a = 7;

    function y() {
      console.log("a and b from nested closure:", a, b); // 7, 900
    }

    y(); // call innermost function
  }

  x(); // call middle function
}

z(); // output: 7 900

// ✅ Example 3: Closure retains variables after parent returns
function makeCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Current count:", count);
  };
}

const counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

const counter2 = makeCounter();
counter2(); // 1 (new lexical environment)

// ✅ Example 4: Closure with asynchronous function
function asyncClosure() {
  let message = "I was captured!";

  setTimeout(function () {
    console.log("Inside setTimeout:", message);
  }, 1000);
}

asyncClosure(); // after 1s → prints: I was captured!

// ✅ Example 5: Data Hiding using Closures
function secretHolder() {
  let secret = "🕵️‍♂️ top secret";

  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

const holder = secretHolder();
console.log(holder.getSecret()); // 🕵️‍♂️ top secret
holder.setSecret("🎉 new secret");
console.log(holder.getSecret()); // 🎉 new secret

// 🧠 Closure Definition (Simple)
// A closure is a function bundled with its lexical environment (surrounding variables).

// ✅ Summary:
// - Closures are created when functions are returned or passed
// - They remember variables from their original scope
// - Useful in:
// - Data hiding
// - Function factories
// - Event handling
// - Async operations (like setTimeout, fetch)
