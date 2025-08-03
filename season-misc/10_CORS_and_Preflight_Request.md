# 🌐 Episode 10: CORS in JavaScript

## 🔍 What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a browser security mechanism that enables controlled access to resources located outside of a given domain.

### 🧠 Why is it needed?
JavaScript (running in the browser) follows the **Same-Origin Policy (SOP)**, which restricts requests to the same origin (protocol + domain + port). CORS is a protocol that relaxes this restriction and enables secure cross-origin requests.

---

## ⚠️ The Problem Before CORS

Before CORS, making requests across different origins from the browser was **blocked** due to the Same-Origin Policy. This prevented JavaScript from accessing APIs hosted on different domains — a problem for modern web applications using third-party services (e.g., Google Maps, Stripe).

---

## 🔁 CORS Request Flow

There are **two types of CORS requests**:

### ✅ 1. Simple Request
- Uses `GET`, `POST`, or `HEAD` methods
- Content-Type is `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`
- No custom headers

**👉 No preflight required**

```js
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

### 🔁 2. Preflight Request
- Happens when:
  - Method is other than `GET`, `POST`, or `HEAD`
  - Custom headers like `Authorization`, `X-Custom-Header` are present
  - Content-Type is not one of the allowed ones

**Browser sends an `OPTIONS` request first** to check if it's safe.

### 🔄 Preflight Flow
1. Browser sends `OPTIONS` request with:
   - `Origin`
   - `Access-Control-Request-Method`
   - `Access-Control-Request-Headers`

2. Server responds with:
   - `Access-Control-Allow-Origin: *`
   - `Access-Control-Allow-Methods: GET, POST, PUT`
   - `Access-Control-Allow-Headers: Content-Type, Authorization`

3. If approved, browser sends actual request.

---

## 🧪 Example: CORS in Action

```js
// Client-side JS (running on http://myclient.com)
fetch("https://api.someservice.com/user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer token123"
  },
  body: JSON.stringify({ name: "Ayush" })
});
```

### Server-side CORS headers:
```http
Access-Control-Allow-Origin: https://myclient.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
```

---

## 🛡️ How to Avoid CORS Issues

- ✅ **Server Configuration**:
  - Add CORS headers to server response.
- ✅ **Use Proxy**:
  - Create a proxy on the same domain (e.g., `/api`) that redirects to external APIs.
- ✅ **Enable CORS in Express (Node.js)**:
```js
const cors = require('cors');
app.use(cors({ origin: 'https://yourdomain.com' }));
```
- ✅ **Set CORS headers in AWS S3, API Gateway, Nginx, etc.** if hosting APIs.

---

## ❓ Interview Questions & Answers

### 1. What is CORS?
> A browser security mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated.

---

### 2. Why does CORS exist?
> To enforce the Same-Origin Policy and allow cross-origin resource access only when permitted by the server.

---

### 3. What’s the difference between a simple request and a preflight request?
> A simple request meets certain criteria (method, headers, content-type), while a preflight request sends an `OPTIONS` call to verify permissions before the actual request.

---

### 4. What triggers a preflight request?
> Use of methods like `PUT`, `DELETE`, or custom headers like `Authorization`.

---

### 5. How does a server respond to a CORS preflight?
> It must include `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, and `Access-Control-Allow-Headers`.

---

### 6. Can you avoid CORS on the client-side?
> Not directly. You must:
- Use server proxy
- Enable CORS on the server
- Use `jsonp` (only for GET, legacy)

---

### 7. What is the purpose of `Access-Control-Allow-Credentials`?
> To allow cookies and credentials to be sent along with cross-origin requests.

---

### 8. What does `Access-Control-Allow-Origin: *` mean?
> It allows access from **any domain**. ⚠️ Not allowed if `credentials: true` is used.

---

## ✅ Summary

- CORS lets servers control which domains can access their resources.
- Preflight requests use `OPTIONS` to check access.
- Always handle CORS at the server.
- Use proxies or configure headers for production apps.

---

## 📚 Real-World Tip

If you're developing locally and testing APIs from another domain, use a **proxy server** or enable CORS for `localhost` in your API config temporarily.
