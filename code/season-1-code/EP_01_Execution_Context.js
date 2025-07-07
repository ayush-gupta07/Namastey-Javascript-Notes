// 📘 Episode 1: Execution Context in JavaScript

// 🔍 Concept:
// Everything in JavaScript runs inside an Execution Context, which consists of:
// 1. Memory Component (Variable Environment)
// 2. Code Component (Thread of Execution)

// 🔄 JS Execution has two phases:
// - Memory Creation Phase
// - Code Execution Phase

// 💡 In Memory Phase:
// - Variables are allocated memory and initialized with undefined
// - Function declarations are stored with their entire definition

// 💡 In Code Execution Phase:
// - Code is executed line-by-line
// - Actual values are assigned and functions are invoked

// 🧪 Example Code:
console.log("Namaste");

setTimeout(function () {
  console.log("JavaScript");
}, 5000);

console.log("Season 2");

// Output:
// Namaste
// Season 2
// JavaScript (after 5 seconds)

// 🔍 Another Example with Execution Context:

let a = 10;

function greet() {
  console.log("Hello from greet!");
}

greet();
console.log("Value of a:", a);

// Memory Phase:
// a -> undefined
// greet -> function definition

// Code Phase:
// a = 10
// greet() → logs "Hello from greet!"
// logs value of a

// 🧠 Summary:
// - JavaScript runs code inside Execution Contexts.
// - Every time a function is called, a new Execution Context is created.
// - Understanding memory and execution phases is crucial to grasp advanced JS topics.
