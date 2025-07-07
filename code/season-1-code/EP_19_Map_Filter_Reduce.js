// 📘 Episode 19: map, filter & reduce in JavaScript

// Sample array to use with all examples
const arr = [5, 1, 3, 2, 6];

// ----------------------------------------------------------
// 🚀 map(): transforms each element and returns a new array
// ----------------------------------------------------------

// Double each element
const doubleArr = arr.map((x) => x * 2);
console.log("Double:", doubleArr); // [10, 2, 6, 4, 12]

// Triple each element
const tripleArr = arr.map((x) => x * 3);
console.log("Triple:", tripleArr); // [15, 3, 9, 6, 18]

// Convert to binary
const binaryArr = arr.map((x) => x.toString(2));
console.log("Binary:", binaryArr); // ['101', '1', '11', '10', '110']

// ----------------------------------------------------------
// 🧹 filter(): filters values based on a condition
// ----------------------------------------------------------

// Get odd numbers
const oddArr = arr.filter((x) => x % 2 !== 0);
console.log("Odd Numbers:", oddArr); // [5, 1, 3]

// Get even numbers
const evenArr = arr.filter((x) => x % 2 === 0);
console.log("Even Numbers:", evenArr); // [2, 6]

// ----------------------------------------------------------
// 🔄 reduce(): reduces the array to a single value
// ----------------------------------------------------------

// Sum of all elements
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 17

// Maximum element
const max = arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
console.log("Max:", max); // 6

// ----------------------------------------------------------
// 🧠 Real-World Examples with Users
// ----------------------------------------------------------

const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// Full names using map
const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log("Full Names:", fullNames); // ['Alok Raj', 'Ashish Kumar', 'Ankit Roy', 'Pranav Mukherjee']

// Age count using reduce
const ageReport = users.reduce((acc, curr) => {
  acc[curr.age] = (acc[curr.age] || 0) + 1;
  return acc;
}, {});
console.log("Age Frequency:", ageReport); // {23: 1, 29: 2, 50: 1}

// First names of users under 30 using filter + map
const youngUserNames = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName);
console.log("Users < 30 (Names):", youngUserNames); // ['Alok', 'Ashish', 'Ankit']

// Same using reduce
const youngNamesReduce = users.reduce((acc, curr) => {
  if (curr.age < 30) acc.push(curr.firstName);
  return acc;
}, []);
console.log("Users < 30 (Reduce):", youngNamesReduce); // ['Alok', 'Ashish', 'Ankit']

// ----------------------------------------------------------
// 🛠 Polyfill for map()
// ----------------------------------------------------------

Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log(
  "Using customMap (Triple):",
  arr.customMap((x) => x * 3)
); // [15, 3, 9, 6, 18]

// ----------------------------------------------------------
// ✅ Summary:
// - map(): transforms each item → returns new array
// - filter(): filters items → returns subset
// - reduce(): accumulates to a single value (sum, max, freq, etc.)
// - You can chain them together for powerful transformations
// ----------------------------------------------------------

console.log("✅ Episode 19 complete: map, filter & reduce practiced.");
