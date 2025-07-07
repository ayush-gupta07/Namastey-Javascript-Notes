// 📘 Episode 7: Scope Chain, Scope & Lexical Environment

// 🔍 Concept 1: Global Scope
// Variables declared outside of any function are in the global scope
var globalVar = "I am global";

function first() {
  // 🔍 Concept 2: Local Scope
  // Variables declared inside a function are only accessible inside that function
  var localVar = "I am local to first";
  console.log(globalVar); // ✅ Accessible (scope chain)
  console.log(localVar); // ✅ Accessible
}

first();
// console.log(localVar); // ❌ ReferenceError: localVar is not defined

// 🔍 Concept 3: Nested Functions and Scope Chain
function outer() {
  var outerVar = "I am outer";

  function inner() {
    var innerVar = "I am inner";
    console.log(outerVar); // ✅ Accessible due to scope chain
    console.log(innerVar); // ✅ Accessible
  }

  inner();
  // console.log(innerVar); // ❌ ReferenceError: innerVar is not defined
}

outer();

// 🔍 Concept 4: Lexical Environment
// Lexical Environment is the environment within which code is written.
// JavaScript uses the lexical scope to determine variable access.

function grandParent() {
  var a = "Grandparent";

  function parent() {
    var b = "Parent";

    function child() {
      var c = "Child";
      console.log(a); // Grandparent
      console.log(b); // Parent
      console.log(c); // Child
    }

    child();
  }

  parent();
}

grandParent();

// 🔁 Summary Recap:

// ✅ Scope: Region of code where a variable is defined.
// ✅ Lexical Environment: Local memory + Reference to parent environment
// ✅ Scope Chain: JS resolves variables by going up through lexical environments.
// ✅ Child function has access to parent variables, but not vice versa.
