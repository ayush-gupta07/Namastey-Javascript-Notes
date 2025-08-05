# 🗃️ Episode 13: JavaScript Storage: `localStorage` vs `sessionStorage` vs Cookies

## 📦 What is `localStorage`?

- A web storage API for storing **key-value pairs** in the **browser**.
- Data persists **even after closing the browser tab/window**.
- Shared across **all tabs and windows** with the same origin.

```js
// Store data
localStorage.setItem('name', 'Ayush');

// Retrieve data
const name = localStorage.getItem('name');

// Remove data
localStorage.removeItem('name');

// Clear all data
localStorage.clear();
```

---

## 📦 What is `sessionStorage`?

- Similar to `localStorage` but scoped to the **session**.
- Data is **cleared when the tab or window is closed**.
- **Not shared** across tabs or windows.

```js
// Store data
sessionStorage.setItem('authToken', '123456');

// Retrieve data
const token = sessionStorage.getItem('authToken');

// Remove data
sessionStorage.removeItem('authToken');

// Clear all data
sessionStorage.clear();
```

---

## 💾 Memory Capacity

| Storage Type     | Capacity                |
|------------------|-------------------------|
| `localStorage`   | ~5–10 MB per origin     |
| `sessionStorage` | ~5–10 MB per origin     |
| Cookies          | ~4 KB per cookie        |

> 🔐 Use storage wisely—sensitive data should **not** be stored in localStorage/sessionStorage due to XSS risks.

---

## 🍪 What are Cookies?

- Small pieces of data sent from server and stored in browser.
- Used for **session tracking**, **authentication**, and **user preferences**.
- Automatically sent with every request to the server.
- Can be set to expire.

```js
// Set a cookie
document.cookie = "username=ayush; expires=Fri, 31 Dec 2025 23:59:59 GMT";

// Read cookies
console.log(document.cookie);
```

---

## 🔐 Why Use These Storage Types?

| Use Case                 | Preferred Storage      |
|--------------------------|------------------------|
| Persist login state      | `localStorage` / Cookie |
| Session-specific data    | `sessionStorage`       |
| Temporary tab data       | `sessionStorage`       |
| Cross-tab communication  | `localStorage`         |
| Send data to server      | Cookies (automatically) |

---

## 🌐 Same Origin Policy

- **Same origin** = Same **protocol**, **host**, and **port**.
- Storage (both local and session) is **isolated per origin**.
- Data in `localStorage` or `sessionStorage` from one origin cannot be accessed by another.

---

## 🧪 Examples

```js
// localStorage example
localStorage.setItem('theme', 'dark');
console.log(localStorage.getItem('theme')); // "dark"

// sessionStorage example
sessionStorage.setItem('tab', 'dashboard');
console.log(sessionStorage.getItem('tab')); // "dashboard"
```

---

## 🧠 Interview Questions

1. **Difference between localStorage and sessionStorage?**
   - localStorage persists beyond tab close, sessionStorage does not.

2. **Which storage is automatically sent with requests to server?**
   - Cookies.

3. **Can localStorage be shared between different origins?**
   - No, due to Same-Origin Policy.

4. **When should you use sessionStorage over localStorage?**
   - When data is only relevant to a single tab or session.

5. **What are the limitations of cookies?**
   - Small size (~4KB), sent on every HTTP request, can slow down performance.

---

## ✅ Summary

| Feature            | `localStorage`         | `sessionStorage`       | Cookies                  |
|--------------------|------------------------|-------------------------|--------------------------|
| Lifetime           | Until manually cleared | Until tab is closed     | Configurable via expiry |
| Accessible from JS | ✅                     | ✅                      | ✅                       |
| Sent to server     | ❌                    | ❌                     | ✅                       |
| Size limit         | ~5MB                   | ~5MB                    | ~4KB                    |
| Tab Sharing        | ✅                     | ❌                     | ✅                       |

---

## 🎥 Watch This Topic on YouTube
## [Watch on YouTube](https://www.youtube.com/watch?v=MOd5cTJ6kaA)