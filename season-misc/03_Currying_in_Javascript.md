# 📘 Episode 03: Currying in JavaScript

> 🔄 Transform functions to accept arguments one at a time, creating powerful and reusable code patterns!

---

## 🤔 What is Currying?

**Currying** is a functional programming technique where a function that takes multiple arguments is transformed into a series of functions that each take a single argument.

Instead of calling `f(a, b, c)`, currying allows you to call `f(a)(b)(c)`.

**Benefits of Currying:**
- **Reusability**: Create specialized functions from general ones
- **Composition**: Easily combine functions
- **Partial Application**: Fix some arguments and reuse
- **Cleaner Code**: More readable and maintainable function chains

---

## 🎯 Currying vs Regular Functions

```js
// Regular function
function add(a, b, c) {
    return a + b + c;
}
console.log(add(1, 2, 3)); // 6

// Curried function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}
console.log(curriedAdd(1)(2)(3)); // 6
```

---

## 🔧 Currying with `bind()` Method

### 📝 Basic Implementation

```js
// Using bind to create a curried function for multiplication
let multiply = function(a, b) {
    console.log(a * b);
}

let multiplyByTwo = multiply.bind(null, 2);
multiplyByTwo(5); // Output: 10

let multiplyByThree = multiply.bind(null, 3);
multiplyByThree(5); // Output: 15
```

### 🧩 How It Works

1. **Partial Application**: `bind()` creates a new function with the first argument pre-filled
2. **Context Binding**: Using `null` as context since we don't need `this`
3. **Reusable Functions**: Create specialized versions of the original function

### 🎯 More Examples

```js
// Creating different mathematical operations
function calculate(operation, a, b) {
    switch(operation) {
        case 'add': return a + b;
        case 'multiply': return a * b;
        case 'subtract': return a - b;
        default: return 0;
    }
}

const add = calculate.bind(null, 'add');
const multiply = calculate.bind(null, 'multiply');

console.log(add(5, 3));      // 8
console.log(multiply(4, 6)); // 24
```

---

## 🔄 Currying with Closures

### 📝 Basic Closure Currying

```js
// Using a closure to create a curried function for multiplication
let multiplyy = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwoFunc = multiplyy(2);
multiplyByTwoFunc(5); // Output: 10
```

### 📝 Multiple Level Currying

```js
// Using a closure to create a curried function for addition
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3)); // Output: 6
```

### 🧩 How Closures Enable Currying

1. **Lexical Scoping**: Inner functions have access to outer function variables
2. **Variable Persistence**: Outer function variables remain accessible
3. **Function Factory**: Each call creates a new function with captured values

---

## 🔢 Advanced Currying: Evaluate Function

### 📝 Implementation

```js
// Using a closure to create a curried function for various operations
function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === 'sum') {
                return a + b;
            }
            else if (operation === 'multiply') {
                return a * b;
            }
            else if (operation === 'subtract') {
                return a - b;
            }
            else if (operation === 'divide') {
                return a / b;
            }
            else return 'Invalid operation';
        }
    }
}
```

### 🎯 Usage Examples

```js
console.log(evaluate('sum')(5)(3));        // 8
console.log(evaluate('multiply')(5)(3));   // 15
console.log(evaluate('subtract')(5)(3));   // 2
console.log(evaluate('divide')(5)(3));     // 1.6666666666666667

// Create reusable operation functions
const sum = evaluate('sum');
const multiply = evaluate('multiply');

console.log(sum(10)(20));      // 30
console.log(multiply(4)(7));   // 28
```

### 🧩 Benefits of This Pattern

- **Operation Abstraction**: Separate the operation logic from execution
- **Reusable Operations**: Create operation-specific functions
- **Type Safety**: Validate operations at the first level
- **Extensibility**: Easy to add new operations

---

## ♾️ Infinite Currying

### 📝 Implementation

```js
//Infinite currying example
function infiniteSum(a) {
    return function (b) {
        if(b) return infiniteSum(a + b);
        return a;
    }
}
```

### 🎯 Usage Examples

```js
console.log(infiniteSum(1)(2)(3)()); // 6
console.log(infiniteSum(5)(10)(15)(20)()); // 50
console.log(infiniteSum(100)(200)()); // 300
```

### 🧩 How Infinite Currying Works

1. **Recursive Pattern**: Function calls itself with accumulated value
2. **Termination Condition**: Empty call `()` returns the final result
3. **Accumulation**: Each call adds to the running total
4. **Flexibility**: Accept any number of arguments

### 🔄 Alternative Implementation

```js
function infiniteSum(a) {
    return function (b) {
        if (b !== undefined) {
            return infiniteSum(a + b);
        }
        return a;
    }
}

// Usage with explicit undefined
console.log(infiniteSum(1)(2)(3)(undefined)); // 6
```

---

## 🛠️ Generic Currying Function

### 📝 Convert Any Function to Curried

```js
//Convert f(a,b,c) to f(a)(b)(c)
function convertToCurried(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function (...next) {
            return curried(...args, ...next);
        };
    };
}
```

### 🎯 Usage Examples

```js
function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = convertToCurried(add);

// All these calls are equivalent:
console.log(curriedAdd(1)(2)(3));     // 6
console.log(curriedAdd(1, 2)(3));     // 6
console.log(curriedAdd(1)(2, 3));     // 6
console.log(curriedAdd(1, 2, 3));     // 6

// Partial application
const addToFive = curriedAdd(5);
console.log(addToFive(10)(15));       // 30

const addFiveAndTen = curriedAdd(5, 10);
console.log(addFiveAndTen(20));       // 35
```

### 🧩 How the Generic Function Works

1. **Arity Check**: Compare current arguments with function's expected parameter count
2. **Full Application**: If enough arguments, call the original function
3. **Partial Application**: If not enough, return a new function waiting for more
4. **Argument Accumulation**: Collect arguments across multiple calls
5. **Flexibility**: Support both curried and regular calling patterns

---

## 🧪 Complete Practice Examples

### 📝 Real-World Scenarios

```js
// 1. Configuration-based functions
function createValidator(type) {
    return function(min) {
        return function(max) {
            return function(value) {
                if (type === 'number') {
                    return value >= min && value <= max;
                }
                if (type === 'string') {
                    return value.length >= min && value.length <= max;
                }
                return false;
            }
        }
    }
}

const numberValidator = createValidator('number')(1)(100);
const stringValidator = createValidator('string')(5)(20);

console.log(numberValidator(50));           // true
console.log(stringValidator("Hello"));      // true

// 2. Event handler creation
function createEventHandler(eventType) {
    return function(selector) {
        return function(callback) {
            document.querySelector(selector)
                   .addEventListener(eventType, callback);
        }
    }
}

const onClick = createEventHandler('click');
const onButtonClick = onClick('button');
onButtonClick(() => console.log('Button clicked!'));

// 3. API request builder
function apiRequest(method) {
    return function(endpoint) {
        return function(data) {
            return function(headers = {}) {
                return fetch(endpoint, {
                    method,
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        ...headers
                    }
                });
            }
        }
    }
}

const postRequest = apiRequest('POST');
const postToUsers = postRequest('/api/users');
const createUser = postToUsers({name: 'Ayush', age: 25});
```

---

## ⚡ Currying vs Partial Application

| Aspect | Currying | Partial Application |
|--------|----------|-------------------|
| **Definition** | Transform f(a,b,c) to f(a)(b)(c) | Fix some arguments of f(a,b,c) |
| **Arguments** | Always one at a time | Can fix multiple at once |
| **Return** | Always returns a function until all args provided | May return final result |
| **Flexibility** | Strict single-argument pattern | More flexible argument patterns |

```js
// Currying - always one argument
const curriedAdd = (a) => (b) => (c) => a + b + c;

// Partial Application - can fix multiple arguments
const partialAdd = (a, b) => (c) => a + b + c;
```

---

## 🎯 Common Interview Questions

### Q1: What is the difference between currying and partial application?
**Answer:** Currying transforms a function to take arguments one at a time, while partial application fixes some arguments and returns a function for the remaining ones.

### Q2: How do you implement infinite currying?
**Answer:** Use recursion with a termination condition - return the accumulated value when no argument is passed.

### Q3: What are the benefits of currying?
**Answer:** Code reusability, function composition, partial application, and cleaner functional programming patterns.

### Q4: How does the generic currying function work?
**Answer:** It checks if enough arguments are provided using `fn.length`, and either calls the original function or returns a new function waiting for more arguments.

---

## 🚨 Important Notes

- **Performance**: Currying can have slight performance overhead due to multiple function calls
- **Debugging**: Stack traces can be deeper and harder to follow
- **Readability**: While powerful, excessive currying can hurt code readability
- **Browser Support**: Arrow functions and spread operators require modern JavaScript support
- **Memory**: Each curried function creates closures that hold references to variables

---

## 🎥 Watch This Topic on YouTube
## [Watch on YouTube](https://www.youtube.com/watch?v=vQcCNpuaJO8)