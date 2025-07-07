// 📘 Episode 16: JS Engine Exposed & V8 Architecture

// ----------------------------------------------------------
// 🔍 JavaScript Runtime Environment (JRE) Overview
// JRE = JS Engine + Web APIs + Event Loop + Callback Queue + Microtask Queue
// Browser or Node.js provides this environment for JS to run
// ----------------------------------------------------------

// ----------------------------------------------------------
// ⚙️ JS Engine - V8 (used by Chrome and Node.js)
// Parses, compiles, and executes JS code using:
// - Ignition (Interpreter)
// - TurboFan (Compiler for optimization)
// - Orinoco (Garbage Collector)
// ----------------------------------------------------------

// ----------------------------------------------------------
// 📌 Step 1: Parsing
// Code is broken down into tokens, then into an AST (Abstract Syntax Tree)
let a = 7;
// Tokens → 'let', 'a', '=', '7'
// AST is generated internally by the engine

// You can try parsing your code to AST at: https://astexplorer.net
// ----------------------------------------------------------

// ----------------------------------------------------------
// 📌 Step 2: Compilation
// JavaScript uses Just-In-Time (JIT) compilation:
// - Interpreter (Ignition) creates bytecode
// - Frequently used code is optimized by Compiler (TurboFan)
function add(x, y) {
  return x + y;
}

console.log(add(3, 4)); // 7
// First time: interpreted
// Subsequent calls: optimized
// ----------------------------------------------------------

// ----------------------------------------------------------
// 📌 Step 3: Execution
// The JS engine executes bytecode using:
// - 🧠 Memory Heap: Stores variables & objects (long-lived data)
// - 📞 Call Stack: Executes function calls (LIFO)
// ----------------------------------------------------------

// ----------------------------------------------------------
// 📦 Memory Allocation & Call Stack Execution Example
function multiply(x, y) {
  return x * y;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(num) {
  console.log(square(num));
}

printSquare(5); // 25

// 🔍 Call Stack Visualization:
// printSquare(5)
// → calls square(5)
// → calls multiply(5, 5)
// → returns 25
// → returns 25
// → console.log(25)

// LIFO (Last-In, First-Out): multiply → square → printSquare → console.log
// ----------------------------------------------------------

// ----------------------------------------------------------
// 🧹 Garbage Collection
// Unused memory is cleaned using V8’s Orinoco GC
// Uses Mark-and-Sweep algorithm:
// - Mark: Finds objects that are still reachable
// - Sweep: Deletes unreachable ones
// ----------------------------------------------------------

// ----------------------------------------------------------
// 🔁 Summary of Concepts
// - JS runs inside a runtime environment (browser/Node.js)
// - JS Engine (like V8) parses → compiles (JIT) → executes
// - Memory Heap stores data; Call Stack runs logic
// - Ignition: interpreter; TurboFan: optimizer
// - GC: Orinoco cleans memory not in use
// ----------------------------------------------------------

// ✅ Final Note:
console.log("Episode 16 complete: JS Engine & V8 internals understood!");
