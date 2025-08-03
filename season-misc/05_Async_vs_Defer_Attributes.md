# Episode 5: HTML Parsing & `async` vs `defer` in JavaScript

## 🔍 Topics Covered
- How HTML Parsing works
- The role of `<script>` tags
- Difference between `async` and `defer` attributes
- Use cases and preferences
- Interview-style Q&A

---

## 🧠 How HTML Parsing Works

When the browser starts rendering a webpage:
1. It parses the HTML from top to bottom.
2. On encountering a `<script>` tag **without** `async` or `defer`, parsing is paused.
3. The script is **fetched and executed immediately**, then HTML parsing resumes.

---

## 🚀 `async` Attribute

### 🔹 Behavior:
- Script is **fetched in parallel** with HTML parsing.
- As soon as the script is downloaded, it is **executed immediately**, even if HTML parsing is still ongoing.
- HTML parsing is **paused** while script executes.

### 🔹 Use Case:
- Use when scripts are **independent** and do **not rely on DOM** or other scripts.
- Example: Analytics scripts, social media SDKs, ad trackers.

---

## ⏳ `defer` Attribute

### 🔹 Behavior:
- Script is also **fetched in parallel** with HTML parsing.
- Execution is **deferred until the HTML document is fully parsed**.
- Scripts with `defer` are executed **in order** as they appear in the HTML.

### 🔹 Use Case:
- Use for scripts that **depend on DOM being ready**.
- Ideal for scripts that manipulate or access DOM elements.
- Good for loading multiple interdependent scripts in sequence.

---

## 📌 Summary Table

| Attribute | Fetch Time     | Execute Time       | Blocking? | Order Preserved? | Use Case                      |
|-----------|----------------|--------------------|-----------|------------------|-------------------------------|
| _None_    | Immediate       | Immediately        | Yes       | N/A              | Critical blocking script      |
| `async`   | During parsing  | As soon as fetched | Yes       | ❌ No             | Independent, non-DOM scripts  |
| `defer`   | During parsing  | After parsing done | No        | ✅ Yes            | DOM-dependent, sequenced load |

---

## 🤔 What to Use When?

- ✅ Use `async` for independent scripts that don’t rely on other scripts or DOM (e.g., tracking tools).
- ✅ Use `defer` for scripts that interact with DOM and need proper loading order.
- ❌ Avoid mixing `async` and `defer` for related scripts — they behave differently.

---

## ⚠️ What If Scripts Are Dependent?

- If one script depends on another (e.g., jQuery must load before a plugin), use `defer`.
- `defer` preserves execution **order**, but `async` does not.

---

## 🧠 Interview Questions

### Q1: What happens when the browser encounters a `<script>` tag without `async` or `defer`?
**A**: HTML parsing is paused. The script is fetched and executed immediately, then parsing resumes.

---

### Q2: Difference between `async` and `defer`?
**A**:
- `async`: Executes as soon as the script is fetched, doesn't wait for HTML.
- `defer`: Executes only after HTML parsing is done, preserves order.

---

### Q3: Which is more preferable in most modern apps?
**A**: `defer` is preferred for DOM-related and multi-script setups since it ensures all scripts load **after** parsing and maintain **order**.

---

### Q4: Can we use both `async` and `defer` together?
**A**: If both are present, **`async` takes precedence**, and the script behaves as async.

---

## 🧾 Conclusion

- HTML parsing is paused for normal `<script>` tags.
- `async` is non-blocking but unordered.
- `defer` is non-blocking **and** ordered.
- Always choose based on **script dependency and timing** needs.