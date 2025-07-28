# 📘 Episode 02: Polyfills for `call()`, `apply()`, and `bind()` Methods

> 🔧 Building your own versions of JavaScript's most powerful context-binding methods from scratch!

---

## 🧠 What You'll Learn

Understanding how to create **polyfills** for `call()`, `apply()`, and `bind()` methods will deepen your understanding of:
- Function context manipulation
- The `this` keyword behavior
- How native JavaScript methods work internally
- Writing robust, production-ready code

---

## 🤔 What is a Polyfill?

A **polyfill** is a piece of code that provides functionality that you expect the browser to provide natively. It's essentially a **custom implementation** of a native method.

---

## 🎯 Quick Recap: Original Methods

Before diving into polyfills, let's quickly review the original methods:

```js
var obj = { name: "Ayush" };

function sayHello(age) {
    console.log("Hello, " + this.name + " " + age);
}

// Original methods
sayHello.call(obj, 25);        // Hello, Ayush 25
sayHello.apply(obj, [25]);     // Hello, Ayush 25
sayHello.bind(obj, 25)();      // Hello, Ayush 25
```

---

## 🔧 Polyfill for `call()` Method

### 📝 Implementation

```js
Function.prototype.myCall = function(context = {}, ...args) {
    // Check if the calling entity is a function
    if (typeof this !== 'function') {
        throw new TypeError("Error: not a function");
    }
    
    // Assign the function to the context object
    context.fn = this;
    
    // Call the function with the provided arguments
    context.fn(...args);
    
    // Clean up: remove the temporary property
    delete context.fn;
}
```

### 🧩 How It Works

1. **Context Check**: Ensure `this` refers to a function
2. **Temporary Assignment**: Assign the function as a property of the context object
3. **Function Invocation**: Call the function with spread arguments
4. **Cleanup**: Remove the temporary property to avoid pollution

### 🎯 Usage Example

```js
var obj = { name: "Ayush" };

function sayHello(age, city) {
    console.log("Hello, " + this.name + " aged " + age + " from " + city);
}

sayHello.myCall(obj, 25, "Delhi");
// Output: Hello, Ayush aged 25 from Delhi
```

---

## 🔧 Polyfill for `apply()` Method

### 📝 Implementation

```js
Function.prototype.myApply = function(context = {}, args = []) {
    // Check if the calling entity is a function
    if (typeof this !== 'function') {
        throw new TypeError("Error: not a function");
    }
    
    // Check if args is an array
    if (!Array.isArray(args)) {
        throw new TypeError("Error: args must be an array");
    }
    
    // Assign the function to the context object
    context.fn = this;
    
    // Call the function with the provided arguments array
    context.fn(...args);
    
    // Clean up: remove the temporary property
    delete context.fn;
}
```

### 🧩 How It Works

1. **Function Check**: Validate that `this` is a function
2. **Array Validation**: Ensure arguments are provided as an array
3. **Context Binding**: Temporarily assign function to context
4. **Array Spreading**: Use spread operator to pass array elements as individual arguments
5. **Cleanup**: Remove temporary property

### 🎯 Usage Example

```js
var obj = { name: "Ayush" };

function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

greet.myApply(obj, ["Namaste", "!"]);
// Output: Namaste, Ayush!
```

---

## 🔧 Polyfill for `bind()` Method

### 📝 Implementation

```js
Function.prototype.myBind = function(context = {}, ...args) {
    // Check if the calling entity is a function
    if (typeof this !== 'function') {
        throw new TypeError("Error: not a function");
    }
    
    // Store reference to the original function
    const originalFunction = this;3
    
    // Return a new function
    return function(...innerArgs) {
        // Assign the original function to the context
        context.fn = originalFunction;
        
        // Call with both bound arguments and new arguments
        const result = context.fn(...args, ...innerArgs);
        
        // Clean up
        delete context.fn;
        
        // Return the result
        return result;
    }
}
```

### 🧩 How It Works

1. **Function Validation**: Check if `this` is a function
2. **Function Reference**: Store original function reference
3. **Return Bound Function**: Return a new function that when called:
   - Assigns original function to context
   - Merges bound arguments with new arguments
   - Executes function and returns result
   - Cleans up temporary property

### 🎯 Usage Example

```js
var obj = { name: "Ayush" };

function introduce(greeting, age, city) {
    console.log(greeting + ", I'm " + this.name + ", " + age + " years old from " + city);
}

const boundIntroduce = introduce.myBind(obj, "Hello");
boundIntroduce(25, "Mumbai");
// Output: Hello, I'm Ayush, 25 years old from Mumbai
```

---

## 🚀 Enhanced Polyfill for `bind()` (Production Ready)

### 📝 Advanced Implementation

```js
Function.prototype.myBind = function(context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError("Error: not a function");
    }
    
    const originalFunction = this;
    
    function BoundFunction(...innerArgs) {
        // Handle constructor calls (new keyword)
        if (new.target) {
            // When called with 'new', ignore the bound context
            return new originalFunction(...args, ...innerArgs);
        }
        
        // Regular function call
        context.fn = originalFunction;
        const result = context.fn(...args, ...innerArgs);
        delete context.fn;
        return result;
    }
    
    // Maintain prototype chain
    if (originalFunction.prototype) {
        BoundFunction.prototype = Object.create(originalFunction.prototype);
    }
    
    return BoundFunction;
}
```

### 🎯 Features of Enhanced Version

- **Constructor Support**: Handles `new` keyword properly
- **Prototype Chain**: Maintains inheritance
- **Return Values**: Properly returns function results

---

## 🎯 Common Interview Questions

### Q1: Why do we need polyfills for call, apply, and bind?
**Answer:** Polyfills ensure backward compatibility and help us understand the internal working of these methods.

### Q2: What's the main difference between your call and apply polyfill?
**Answer:** The `myCall` accepts arguments individually, while `myApply` expects an array of arguments.

### Q3: How does the bind polyfill differ from call and apply?
**Answer:** `myBind` returns a new function instead of immediately executing it, allowing for partial application and later invocation.

### Q4: What happens if we don't delete the temporary function property?
**Answer:** It would pollute the context object and could lead to memory leaks or unexpected behavior.

---


