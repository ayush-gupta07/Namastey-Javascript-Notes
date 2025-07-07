// 📘 Episode 3: Hoisting in JavaScript

// 🔍 What is Hoisting?
// Hoisting is JavaScript's default behavior of moving declarations (not initializations) to the top of their scope during the memory creation phase.

// 🔄 During Memory Creation Phase:
// - Variables declared with `var` are hoisted and initialized as `undefined`
// - Function declarations are hoisted with their full definition
// - `let` and `const` are hoisted but not initialized (go into the Temporal Dead Zone)

// 🧪 Example 1: Hoisting with var and function

getName(); // ✅ "ayush"
console.log(x); // ✅ undefined

var x = 7;

function getName() {
  console.log("ayush");
}

// 🔎 Explanation:
// - `getName` is hoisted completely → can be called before its definition
// - `var x` is hoisted and initialized with `undefined`
// so `console.log(x)` prints undefined (no ReferenceError)

// 🧪 Example 2: Accessing undeclared variable

// console.log(a); // ❌ ReferenceError: a is not defined

// 🔎 Explanation:
// - If a variable is not declared at all in any scope, accessing it throws ReferenceError

// 🧪 Example 3: Function Expression vs Function Declaration

console.log(funcDecl()); // ✅ Works: "Declared Function"
// console.log(funcExpr()); // ❌ TypeError: funcExpr is not a function

function funcDecl() {
  return "Declared Function";
}

var funcExpr = function () {
  return "Function Expression";
};

// 🔎 Explanation:
// - `funcDecl` is hoisted with its definition
// - `funcExpr` is hoisted as undefined → calling it before assignment throws TypeError

// 🧠 Summary:
// - `var` is hoisted → initialized with `undefined`
// - Function declarations are hoisted with definition
// - Accessing `var` before assignment = undefined
// - Accessing undeclared variable = ReferenceError
// - Function expressions behave like variables → hoisted as undefined
