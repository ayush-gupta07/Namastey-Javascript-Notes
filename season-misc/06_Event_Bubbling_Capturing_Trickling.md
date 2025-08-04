# 🧠 Episode 6: Event Bubbling and Capturing in JavaScript

Event propagation in the DOM refers to the order in which event handlers are called when an event occurs on an element nested within other elements.

---

## 📌 What is Event Propagation?

When an event occurs in the DOM, such as a click, it doesn't just affect the target element—it travels through the DOM in two main phases:

1. **Capturing Phase (Trickling down)** – from the `document` → down to the target element.
2. **Bubbling Phase** – from the target element → up to the `document`.

---

## 🔁 Event Bubbling

- The event starts at the target element and **bubbles up** to the ancestors (parent → grandparent → ...).
- Default behavior in most event listeners.

```html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>
```

```js
document.getElementById('grandparent').addEventListener('click', () => {
  console.log('Grandparent clicked');
});

document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});

// Clicking "Child" will output:
// Child clicked
// Parent clicked
// Grandparent clicked
```

---

## 🔽 Event Capturing

- The event is captured on the way down to the target.
- You can enable it by setting the third parameter (`useCapture`) in `addEventListener` to `true`.

```js
document.getElementById('grandparent').addEventListener('click', () => {
  console.log('Grandparent clicked [capture]');
}, true);
```

---

## ⚖️ Which is Better – Bubbling or Capturing?

- **Bubbling** is more common and easier to manage.
- Use **capturing** only when needed (e.g., to intercept events before they reach child elements).

---

## ⚠️ stopPropagation() and stopImmediatePropagation()

- `event.stopPropagation()` → Stops the event from continuing to bubble or capture.
- `event.stopImmediatePropagation()` → Stops all other event listeners on the same element from firing.

```js
document.getElementById('child').addEventListener('click', (e) => {
  console.log('Child clicked');
  e.stopPropagation(); // Prevents event from bubbling to parent and grandparent
});
```

---

## 🧪 Event Listener Priority

- If both capturing and bubbling listeners exist, capturing handlers run first (top-down), then bubbling (bottom-up).

---

## ✅ Summary

| Concept              | Description                                          |
|----------------------|------------------------------------------------------|
| Event Propagation    | How events travel through the DOM                    |
| Bubbling             | Bottom-up (child → parent → root)                    |
| Capturing            | Top-down (root → parent → child)                     |
| useCapture param     | `true` = capture phase, `false` = bubbling (default) |
| stopPropagation      | Stops further propagation in both phases             |
| Priority             | Capture → Target → Bubble                            |

---

## 💬 Interview Questions

1. **What is event propagation?**
   - The flow of events through capturing and bubbling phases.

2. **What is the difference between event bubbling and capturing?**
   - Bubbling: child → parent → root
   - Capturing: root → parent → child

3. **What is the default phase of event propagation in JavaScript?**
   - Bubbling phase.

4. **How do you listen to an event in the capturing phase?**
   - By passing `true` as the third argument to `addEventListener`.

5. **What is `stopPropagation()` used for?**
   - To stop further propagation of the event in either direction.

6. **When should you use capturing over bubbling?**
   - When you want to intercept the event before it reaches the target element.

---

## 📎 Real-World Example

- Use bubbling to delegate click handlers in list items:
```js
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert(`Clicked on ${e.target.textContent}`);
  }
});
```
- This avoids adding individual handlers to each list item.

---

## 🎥 Visualization

- Think of a stone dropped in water:
  - Capturing: ripples going inward
  - Bubbling: ripples going outward