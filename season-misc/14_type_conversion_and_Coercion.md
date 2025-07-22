# 🧠 Episode: Type Conversion and Type Coercion

This chapter explains how JavaScript performs type conversion (explicit) and type coercion (implicit) in different scenarios.

---

## 🔍 Type of Different Data Structures

```js
let num = 6;
let str = "ayush";
let arr = ["apple", "banana", "cherry"];
let obj = { a: 1, b: 2, c: 3 };

console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof arr); // "object"
console.log(typeof obj); // "object"
```

---

## 🔄 Explicit Type Conversion

```js
let numToStr = String(num);
let strToNum = Number(str);
let arrToStr = String(arr);
let objToStr = JSON.stringify(obj);

console.log(numToStr); // "6"
console.log(strToNum); // NaN
console.log(arrToStr); // "apple,banana,cherry"
console.log(objToStr); // "{"a":1,"b":2,"c":3}"
```

---

### 🔢 Number Conversion Edge Cases

```js
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number("123abc")); // NaN
console.log(Number("0x10")); // 16 (hex)
console.log(Number("0o10")); // 8 (octal)
console.log(Number("0b10")); // 2 (binary)
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number([])); // 0
console.log(Number([5])); // 5
console.log(Number([1,2])); // NaN
```

### 🔀 String Conversion Rules

```js
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1,2,3])); // "1,2,3"
console.log(String({a: 1})); // "[object Object]"
console.log(String(Symbol('test'))); // "Symbol(test)"
```

### 💡 Boolean Conversion Rules

```js
// Explicit boolean conversion
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
```

---

## 🤹‍♂️ Implicit Type Coercion

### ➕ Addition Operator

```js
console.log(1 + 2); // 3
console.log(1 + "2"); // "12"
console.log("3" + 1 + 2); // "312"
```

### ➖ ➗ ✖️ Arithmetic Operators

```js
console.log("5" - 2); // 3
console.log("abc" - 2); // NaN
console.log("10" * 2); // 20
console.log("10" / 2); // 5
```

### 🧮 Comparison Operators

```js
console.log("5" > 3); // true
console.log("02" == 2); // true
console.log("02" === 2); // false
```

### 🟰 Equality Coercion

```js
console.log(0 == false); // true
console.log(null == undefined); // true
console.log(null == 0); // false
```

### 🧱 Object to Primitive Coercion

```js
console.log([] + []); // ""
console.log([1,2] + [3,4]); // "1,23,4"
console.log({} + ""); // "[object Object]"
```

### 🔮 Unary Operators Coercion

```js
console.log(+"abc"); // NaN
console.log(!!"hello"); // true
console.log(!!0); // false
```

### 📦 Template Literals Coercion

```js
console.log(`Value: ${[1,2,3]}`); // "Value: 1,2,3"
console.log(`Boolean: ${true}`); // "Boolean: true"
```

### 🧨 Mind-Bending Coercion Cases

```js
console.log(0.1 + 0.2 == 0.3); // false
console.log([] == false); // true
console.log([] + {} == {} + []); // false
```

---

## 🌟 Falsy and Truthy Values

```js
// All falsy values in JavaScript
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false (BigInt zero)
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Everything else is truthy
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true (space)
console.log(Boolean(-1)); // true
```

---

## 🏆 Advanced Patterns & Tricky Cases

```js
// Advanced conversion shortcuts
console.log(+"42"); // 42 (unary plus)
console.log(!!"hello"); // true (double negation)
console.log("42" | 0); // 42 (bitwise forces number)

// The infamous cases
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 (in some contexts)

// Comparison quirks
console.log("2" > "12"); // true (string comparison)
console.log(null >= 0); // true
console.log(null == 0); // false

// Array comparison madness
console.log([1] == 1); // true
console.log([1] == [1]); // false (reference comparison)
```

## � Best Practices

1. **Always use explicit conversion** when you need type conversion
2. **Use `===` and `!==`** for comparisons to avoid coercion
3. **Use `Number()`, `String()`, `Boolean()`** instead of relying on implicit coercion
4. **Be careful with `+` operator** - use `String()` for concatenation if needed
5. **Test edge cases** when working with user input or external data

---

## 💬 Interview Questions

### Q1. What's the difference between Type Conversion and Type Coercion?
**A:** Type conversion is explicit (done manually using `String()`, `Number()`), while coercion is implicit (done automatically by JavaScript).

### Q2. What is the result of `"5" - 2` and why?
**A:** `3` — `"5"` is coerced to number.

### Q3. Why does `0 == false` return true?
**A:** Because both are coerced to `0` before comparison.

### Q4. What is the result of `[] == false`?
**A:** `true` — `[]` becomes `""`, and `"" == false` becomes `true`.

### Q5. Explain the result of `"3" + 1 + 2`.
**A:** `"312"` — coercion happens left to right; `"3" + 1 = "31"`, then `"31" + 2 = "312"`.

### Q6. What are all the falsy values in JavaScript?
**A:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.

### Q7. Why does `"2" > "12"` return true?
**A:** Because it's string comparison (lexicographic), where "2" comes after "1" alphabetically.

### Q8. What's the difference between `null >= 0` and `null == 0`?
**A:** `null >= 0` is `true` because `null` is converted to `0` for comparison. `null == 0` is `false` because `null` only equals `undefined` in loose equality.

---

## 📌 Summary

Type coercion is tricky and powerful in JavaScript. It’s essential to understand how JavaScript implicitly or explicitly converts values during operations. Mastering this helps avoid bugs and prepares you well for interviews.

## 📝 Key Takeaways

1. **Type Conversion vs Coercion**: Conversion is explicit, coercion is implicit
2. **Use `===` instead of `==`** for strict equality to avoid unexpected coercion
3. **`+` operator ambiguity**: Can mean addition or string concatenation
4. **Falsy values**: Only 8 falsy values exist - everything else is truthy
5. **Objects are always truthy**: But their primitive conversion can be falsy
6. **`null` and `undefined` special cases**: They only equal each other with `==`
7. **Always prefer explicit conversion** for predictable code
