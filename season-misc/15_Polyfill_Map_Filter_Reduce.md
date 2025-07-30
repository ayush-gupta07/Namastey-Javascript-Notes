# 📘 Episode 15: Polyfills for `map()`, `filter()`, and `reduce()` Methods

> 🔧 Building your own versions of JavaScript's most powerful array transformation methods from scratch!

---

## 🤔 What is a Polyfill?

A **polyfill** is a piece of code that provides functionality that you expect the browser to provide natively. It's essentially a **custom implementation** of a native method.

---

## 🎯 Quick Recap: Original Methods

Before diving into polyfills, let's quickly review the original methods:

```js
const nums = [1, 2, 3, 4, 5];

// Original methods
const doubled = nums.map(x => x * 2);           // [2, 4, 6, 8, 10]
const evens = nums.filter(x => x % 2 === 0);    // [2, 4]
const sum = nums.reduce((acc, x) => acc + x, 0); // 15
```

---

## 🗺️ Polyfill for `map()` Method

### 📝 Implementation

```js
Array.prototype.myMap = function(callback) {
    // Create a new array to store results
    const temp = [];
    
    // Iterate through each element
    for (let i = 0; i < this.length; i++) {
        // Apply callback and push result to new array
        temp.push(callback(this[i], i, this));
    }
    
    // Return the new transformed array
    return temp;
}
```

### 🧩 How It Works

1. **Create Result Array**: Initialize an empty array to store transformed values
2. **Iterate Elements**: Loop through each element in the original array
3. **Apply Callback**: Call the provided function with (element, index, array)
4. **Store Result**: Push the returned value to the result array
5. **Return New Array**: Return the transformed array (original remains unchanged)

### 🎯 Usage Example

```js
const nums = [1, 2, 3, 4, 5];

// Double each number
const doubled = nums.myMap(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Convert to strings
const strings = nums.myMap((num, index) => `${num}-${index}`);
console.log(strings); // ["1-0", "2-1", "3-2", "4-3", "5-4"]

// Original array unchanged
console.log(nums); // [1, 2, 3, 4, 5]
```

---

## 🧹 Polyfill for `filter()` Method

### 📝 Implementation

```js
Array.prototype.MyFilter = function(callback) {
    // Create a new array to store filtered results
    const temp = [];
    
    // Iterate through each element
    for (let i = 0; i < this.length; i++) {
        // Apply callback to test condition
        if (callback(this[i], i, this)) {
            // If condition is true, add element to result
            temp.push(this[i]);
        }
    }
    
    // Return the filtered array
    return temp;
}
```

### 🧩 How It Works

1. **Create Result Array**: Initialize an empty array for filtered elements
2. **Iterate Elements**: Loop through each element in the original array
3. **Test Condition**: Call the callback function to test each element
4. **Conditional Push**: Only add elements that pass the test (return truthy value)
5. **Return Filtered Array**: Return new array with only passing elements

### 🎯 Usage Example

```js
const nums = [1, 2, 3, 4, 5];

// Get even numbers
const isEven = num => num % 2 === 0;
const evenNums = nums.MyFilter(isEven);
console.log(evenNums); // [2, 4]

// Get numbers greater than 3
const greaterThanThree = nums.MyFilter(num => num > 3);
console.log(greaterThanThree); // [4, 5]

// Filter with index
const evenIndexes = nums.MyFilter((num, index) => index % 2 === 0);
console.log(evenIndexes); // [1, 3, 5]
```

---

## 🔄 Polyfill for `reduce()` Method

### 📝 Implementation

```js
Array.prototype.MyReduce = function(callback, initialValue) {
    // Set accumulator to initial value
    let accumulator = initialValue;
    
    // Iterate through each element
    for (let i = 0; i < this.length; i++) {
        // Check if element exists (handles sparse arrays)
        if (i in this) {
            // Apply callback with accumulator, current element, index, and array
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    
    // Return the final accumulated value
    return accumulator;
}
```

### 🧩 How It Works

1. **Initialize Accumulator**: Set starting value (provided initialValue)
2. **Iterate Elements**: Loop through each element in the array
3. **Sparse Array Check**: Use `i in this` to handle missing elements
4. **Apply Reducer**: Call callback with (accumulator, current, index, array)
5. **Update Accumulator**: Store the returned value as new accumulator
6. **Return Final Value**: Return the final accumulated result

### 🎯 Usage Example

```js
const nums = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = nums.MyReduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Find maximum value
const max = nums.MyReduce((max, curr) => curr > max ? curr : max, 0);
console.log(max); // 5

// Create object from array
const obj = nums.MyReduce((acc, num, index) => {
    acc[`key${index}`] = num;
    return acc;
}, {});
console.log(obj); // {key0: 1, key1: 2, key2: 3, key3: 4, key4: 5}
```

---

## 🚀 Enhanced Polyfills (Production Ready)

### 📝 Enhanced `reduce()` with No Initial Value

```js
Array.prototype.MyReduceAdvanced = function(callback, initialValue) {
    // Handle empty array case
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }
    
    let accumulator;
    let startIndex;
    
    // If no initial value, use first element
    if (initialValue === undefined) {
        accumulator = this[0];
        startIndex = 1;
    } else {
        accumulator = initialValue;
        startIndex = 0;
    }
    
    // Iterate from startIndex
    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    
    return accumulator;
}
```

### 📝 Enhanced `map()` with Error Handling

```js
Array.prototype.myMapAdvanced = function(callback, thisArg) {
    // Validate callback is a function
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
    
    const temp = [];
    
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            // Use call to set 'this' context if provided
            const result = thisArg 
                ? callback.call(thisArg, this[i], i, this)
                : callback(this[i], i, this);
            temp.push(result);
        }
    }
    
    return temp;
}
```
---

## 🎯 Common Interview Questions

### Q1: What's the difference between map and forEach?
**Answer:** `map()` returns a new array with transformed elements, while `forEach()` just iterates and returns undefined.

### Q2: Why don't we modify the original array in these polyfills?
**Answer:** These methods follow the functional programming principle of immutability - they don't mutate the original array.

### Q3: How does reduce work without an initial value?
**Answer:** It uses the first element as the initial accumulator and starts iteration from the second element.

### Q4: What is the purpose of the 'i in this' check in reduce?
**Answer:** It handles sparse arrays (arrays with missing elements) properly, skipping undefined slots.

---
