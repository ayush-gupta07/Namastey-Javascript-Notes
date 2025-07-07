// 📘 Episode 8: let & const in JavaScript

// 🔍 let and const are block-scoped, unlike var which is function-scoped

// Example 1: Block scope
{
  let a = 10;
  const b = 20;
  var c = 30;

  console.log(a); // ✅ 10
  console.log(b); // ✅ 20
  console.log(c); // ✅ 30
}

// console.log(a); // ❌ ReferenceError: a is not defined
// console.log(b); // ❌ ReferenceError: b is not defined
console.log(c); // ✅ 30 (because var is function scoped, not block scoped)

// Example 2: Re-declaration
let x = 5;
// let x = 10; // ❌ SyntaxError: Identifier 'x' has already been declared

var y = 15;
var y = 25; // ✅ No error with var

const z = 50;
// z = 60; // ❌ TypeError: Assignment to constant variable

// const z; // ❌ SyntaxError: Missing initializer in const declaration

// Example 3: Temporal Dead Zone (TDZ)
{
  // console.log(myVar); // ✅ undefined (var is hoisted)
  // console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
  // console.log(myConst); // ❌ ReferenceError: Cannot access 'myConst' before initialization

  var myVar = "I am var";
  let myLet = "I am let";
  const myConst = "I am const";

  console.log(myVar); // I am var
  console.log(myLet); // I am let
  console.log(myConst); // I am const
}

// Example 4: Block Scope inside loops
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("let loop:", i); // ✅ 0 1 2
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var loop:", i); // ❌ 3 3 3 (all 3s, due to var hoisting and lack of block scope)
  }, 1000);
}

// Summary:
// ✅ `let` and `const` are block-scoped
// ✅ `const` must be initialized during declaration
// ✅ Temporal Dead Zone exists for let and const — can't access before declaration
// ✅ `var` is hoisted and accessible before its declaration (returns undefined)
// ✅ Prefer `let` and `const` for modern JS development — safer and more predictable
