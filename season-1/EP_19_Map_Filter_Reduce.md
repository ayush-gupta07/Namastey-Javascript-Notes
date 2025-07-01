# Episode 19: map, filter & reduce

> `map`, `filter`, and `reduce` are Higher-Order Functions in JavaScript.

## 🚀 Map Function

`map()` transforms each element of an array using a provided callback function and returns a new array.

```js
const arr = [5, 1, 3, 2, 6];

// Double the array elements
const doubleArr = arr.map((x) => x * 2);
console.log(doubleArr); // [10, 2, 6, 4, 12]

// Triple the array elements
const tripleArr = arr.map((x) => x * 3);
console.log(tripleArr); // [15, 3, 9, 6, 18]

// Convert elements to binary
const binaryArr = arr.map((x) => x.toString(2));
console.log(binaryArr); // ['101', '1', '11', '10', '110']
```

## 🧹 Filter Function

`filter()` returns a new array with only elements that pass a test implemented by the provided function.

```js
const arr = [5, 1, 3, 2, 6];

// Get only odd numbers
const oddArr = arr.filter((x) => x % 2);
console.log(oddArr); // [5, 1, 3]
```

## 🔄 Reduce Function

`reduce()` reduces the array to a single value using an accumulator function.

```js
const arr = [5, 1, 3, 2, 6];

// Sum of all elements
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 17

// Find maximum value
const max = arr.reduce((max, curr) => (curr > max ? curr : max), 0);
console.log(max); // 6
```

## 🧠 Real-World Examples

```js
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// Full names
const fullNames = users.map(user => user.firstName + " " + user.lastName);
console.log(fullNames); // ['Alok Raj', 'Ashish Kumar', ...]

// Age frequency report using reduce
const ageReport = users.reduce((acc, curr) => {
  acc[curr.age] = (acc[curr.age] || 0) + 1;
  return acc;
}, {});
console.log(ageReport); // {23: 1, 29: 2, 50: 1}

// Function chaining: First names of users < 30 years old
const youngUserNames = users
  .filter(user => user.age < 30)
  .map(user => user.firstName);
console.log(youngUserNames); // ['Alok', 'Ashish', 'Ankit']

// Same using reduce
const youngNames = users.reduce((acc, curr) => {
  if (curr.age < 30) acc.push(curr.firstName);
  return acc;
}, []);
console.log(youngNames); // ['Alok', 'Ashish', 'Ankit']
```

## 💬 Interview Q&A

### Q1: What is the difference between map and forEach?
**Ans**: `map` returns a new array with transformed values, while `forEach` does not return anything and is generally used for side-effects.

### Q2: Can `map`, `filter`, and `reduce` be chained together?
**Ans**: Yes, these functions return arrays or values which can be further processed using method chaining.

### Q3: What is a polyfill for map?
**Ans**: A custom implementation of `map` that mimics native behavior.

```js
Array.prototype.customMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
```

### Q4: When should we use reduce instead of map or filter?
**Ans**: Use `reduce` when the goal is to derive a single value or object (like sum, average, group by, etc.) from an array.

### Q5: Are these methods immutable?
**Ans**: Yes, they return new arrays or values and do not mutate the original array.

---

### 📌 Summary

- `map()` → Transforms each element.
- `filter()` → Filters elements based on a condition.
- `reduce()` → Reduces the array to a single value.

Mastering these will give you the tools needed to write powerful functional JavaScript code!

---

### 🎥 Watch Episode

[![Watch on YouTube](https://img.youtube.com/vi/zdp0zrpKzIE/0.jpg)](https://www.youtube.com/watch?v=zdp0zrpKzIE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)