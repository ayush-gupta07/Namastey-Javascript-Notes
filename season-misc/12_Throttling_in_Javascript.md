# 🧵 Episode 12: Throttling in JavaScript

Throttling is a performance optimization technique used in JavaScript to control the rate at which a function is executed over time. It ensures that a function is called at most once in a specified time interval, no matter how many times the event is triggered.

---

## 📌 What is Throttling?

Throttling ensures that your function is only executed **once every X milliseconds** — even if it's called multiple times.

**Use Case:** Resize, scroll, mousemove events — where you don’t want the function to run excessively.

---

## ✅ Example Code

```js
function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Example usage
function logScroll() {
  console.log("Scrolled!", new Date().toISOString());
}

window.addEventListener("scroll", throttle(logScroll, 1000));
```

---

## 🧪 Explanation

- `throttle` keeps track of the last time the function was executed.
- If the time since the last execution is more than `delay`, it executes again.
- Otherwise, the call is ignored until the delay expires.

---

## ⚙️ Real-World Use Cases

| Use Case | Why Throttling Helps |
|----------|----------------------|
| Scroll Events | Prevent firing a callback hundreds of times per second |
| Resize Events | Avoid layout recalculations during resize |
| Mousemove Events | Save CPU cycles for real-time tracking |
| Infinite scroll loading | Limit API calls while scrolling |

---

## ❓ Interview Questions

### Q1: What is the difference between debouncing and throttling?

**Answer:**  
- **Debouncing** delays the execution until a certain time has passed since the last event.
- **Throttling** limits how often a function can run, executing at regular intervals.

### Q2: When should you use throttling?

**Answer:**  
Use throttling when you want to ensure that a function executes **at regular intervals**, regardless of how many times the event fires — e.g., scroll tracking or mouse movements.

### Q3: Can you implement throttling using setTimeout?

**Answer:**  
Yes, you can create a throttling version using `setTimeout` instead of `Date.now()` to achieve the same effect with some trade-offs in control.

---

## ⚠️ Common Traps & Gotchas

- **Throttle skips calls**: Intermediate calls are dropped between intervals.
- **this context**: Don’t forget to use `.apply(this, args)` to preserve context.
- **Timers aren’t perfect**: `setTimeout`/`setInterval` aren't guaranteed to be precise.

---

## 🧾 Summary

| Feature         | Debouncing                   | Throttling                    |
|-----------------|------------------------------|-------------------------------|
| Behavior        | Delays until idle            | Executes at regular interval  |
| Use Case        | Search bar input              | Scroll, resize, mousemove     |
| Control Type    | Executes once after delay     | Executes once per time frame  |

---

## 🎥 Optional Visualization

> Think of **debouncing** as someone waiting until you're done typing, while **throttling** is someone who only listens to you once every few seconds no matter how much you speak.

---
