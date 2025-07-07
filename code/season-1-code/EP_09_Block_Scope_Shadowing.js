// 📘 Episode 9: Shadowing in JavaScript

// 🔍 Shadowing occurs when a variable declared in an inner scope (e.g. block/function)
// has the same name as one in an outer scope. The inner variable "shadows" the outer one.

// ✅ Example 1: Variable Shadowing with var
var a = 100;

function shadowVar() {
  var a = 10;
  console.log("Inside function:", a); // 10 → inner var shadows outer one
}

shadowVar();
console.log("Outside function:", a); // 100 → original var in outer/global scope

// ✅ Example 2: Shadowing with let and const
let b = 20;

{
  let b = 30; // new block scope b
  console.log("Block-scoped let:", b); // 30
}

console.log("Outer-scoped let:", b); // 20 → outer variable remains unaffected

const c = 50;

{
  const c = 60;
  console.log("Block-scoped const:", c); // 60
}

console.log("Outer-scoped const:", c); // 50 → outer const remains unaffected

// ✅ Example 3: Illegal Shadowing
let d = 5;

// var d = 6; // ❌ SyntaxError: Identifier 'd' has already been declared

// let e = 10;
{
  // var e = 20; // ❌ Illegal shadowing: Cannot redeclare block-scoped variable using var
}

// ✅ Example 4: Legal Shadowing
var f = 100;

{
  let f = 200; // ✅ legal because inner let shadows outer var
  console.log("Inner f:", f); // 200
}

console.log("Outer f:", f); // 100

// ✅ Example 5: Function Scope vs Block Scope
function scopeTest() {
  var g = 1;

  if (true) {
    var g = 2; // same scope (function), so this overwrites the above
    console.log("Inside if (var):", g); // 2
  }

  console.log("Outside if (var):", g); // 2
}

scopeTest();

function scopeTestLet() {
  let h = 1;

  if (true) {
    let h = 2; // block-scoped, does not affect outer h
    console.log("Inside if (let):", h); // 2
  }

  console.log("Outside if (let):", h); // 1
}

scopeTestLet();

// ✅ Summary:
// - Shadowing is when an inner variable with the same name as an outer one takes precedence.
// - let & const are block scoped. var is function scoped.
// - You cannot shadow a block-scoped variable (let/const) with var (illegal shadowing).
// - Shadowing is legal when outer is var and inner is let/const.
