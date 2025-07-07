// 📘 Episode 25: `this` keyword in JavaScript

// ✅ 1. `this` in Global Scope (Browser environment)
console.log("1️⃣ Global Scope:");
console.log(this); // In browser → window object

// ✅ 2. `this` inside Regular Function
console.log("\n2️⃣ Inside Regular Function:");
function normalFunction() {
  console.log(this); // Non-strict: window | Strict: undefined
}
normalFunction();

// ✅ Using strict mode
console.log("\n2️⃣a Strict Mode:");
("use strict");
function strictFunction() {
  console.log(this); // undefined
}
strictFunction();

// ✅ 3. `this` inside an Object's Method
console.log("\n3️⃣ Inside Object Method:");
const person = {
  name: "Ayush",
  sayName: function () {
    console.log(this); // Refers to `person`
    console.log(this.name); // Ayush
  },
};
person.sayName();

// ✅ 4. call(), apply(), bind()
console.log("\n4️⃣ call / apply / bind:");
const student1 = {
  name: "Alok",
  greet: function () {
    console.log("Hello", this.name);
  },
};

const student2 = {
  name: "Komal",
};

student1.greet(); // Hello Alok
student1.greet.call(student2); // Hello Komal
student1.greet.apply(student2); // Hello Komal

const boundGreet = student1.greet.bind(student2);
boundGreet(); // Hello Komal

// ✅ 5. `this` in Arrow Functions
console.log("\n5️⃣ Arrow Functions:");
const arrowObj = {
  val: 100,
  normalFunc: function () {
    console.log("normalFunc this:", this); // arrowObj
    const arrow = () => {
      console.log("arrowFunc this:", this); // arrowObj (lexical)
    };
    arrow();
  },
};
arrowObj.normalFunc();

const globalArrow = {
  val: 50,
  arrow: () => {
    console.log(this); // global object (not lexical here)
  },
};
globalArrow.arrow();

// ✅ 6. `this` in DOM
// 📝 Run this in a browser HTML page
/*
<button onclick="console.log(this)">Click Me</button>
*/
// The button element itself is logged when clicked

// ✅ 7. Summary of Behavior
console.log("\n7️⃣ Summary:");
/*
- Global Scope (non-strict): `this` → window
- Global Scope (strict): `this` → undefined
- Inside object method: `this` → object
- Arrow function: `this` → lexical (from surrounding scope)
- call/apply/bind → manually control `this`
- DOM Event handler → `this` → HTML element that triggered the event
*/

// 🧪 Try using debugger or setTimeout with arrow/normal functions to experiment!

// 🧠 Interview Tip:
// Always ask: "Where is this function **defined and called**?" to reason about `this`.
