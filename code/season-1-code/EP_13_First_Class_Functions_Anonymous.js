// 📘 Episode 13: First Class Functions ft. Anonymous Functions

// ✅ Function Statement (a.k.a. Function Declaration)
// Function is hoisted with its body
function greet() {
  console.log("✅ Function Declaration: Hello!");
}
greet(); // Output: Hello!

// ✅ Function Expression
// Only the variable is hoisted (as undefined), not the function body
const sayHi = function () {
  console.log("✅ Function Expression: Hi!");
};
sayHi(); // Output: Hi!

// ❌ Calling function expression before it's defined
// console.log(farewell()); // Error: farewell is not a function
const farewell = function () {
  return "Bye!";
};

// ✅ Anonymous Function
// A function without a name
const anonymousExample = function () {
  console.log("✅ Anonymous Function: I have no name");
};
anonymousExample();

// ❌ Syntax error if anonymous function is standalone
// function () { } // ❌ Invalid syntax

// ✅ Named Function Expression
const fun = function namedFn() {
  console.log("✅ Named Function Expression: Hello from namedFn");
  // console.log(namedFn); // Accessible inside only
};
fun(); // Works
// namedFn(); // ❌ ReferenceError: namedFn is not defined

// ✅ Parameters vs Arguments
function printParams(param1, param2) {
  console.log("Param1:", param1);
  console.log("Param2:", param2);
}
printParams("argument1", "argument2"); // arguments passed to parameters

// ✅ First-Class Functions
// Functions can be:
// - Assigned to variables
// - Passed as arguments
// - Returned from other functions

// 1. Assigned to variable
const welcome = function () {
  console.log("✅ First-class: Assigned to variable");
};
welcome();

// 2. Passed as argument
function executor(callback) {
  console.log("Running callback...");
  callback();
}
executor(function () {
  console.log("✅ First-class: Passed as argument");
});

// 3. Returned from a function
function outer() {
  return function () {
    console.log("✅ First-class: Returned from function");
  };
}
const returnedFn = outer();
returnedFn(); // Output: Returned from function

// 🧪 Higher Order Example (Function accepts another function)
function highOrderExample(fn) {
  console.log("High Order Function Started");
  fn(); // Call the passed function
}
highOrderExample(() => console.log("✅ Callback executed"));

// 🔁 Returning function from a function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log("Double 5:", double(5)); // 10

// 💬 Interview Questions Recap (in code-style):
// Q1. Difference between Function Statement and Expression?
// A1. Hoisting behavior. Statement is hoisted with body, Expression is not.

// Q2. Can we call a function before declaration?
// A2. Only if it's a function statement (not expression).

// Q3. What are first-class functions?
// A3. JS treats functions like values – they can be passed, assigned, returned.
