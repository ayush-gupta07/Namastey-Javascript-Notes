// 📘 Episode 24: Promise APIs (all, allSettled, race, any)

// Simulated Promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ P1 Success"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("✅ P2 Success"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("❌ P3 Failed"), 1500);
});

// ----------------------------------------------
// 🔗 Promise.all()
// Resolves when all promises resolve
// Fails fast if any promise rejects
// ----------------------------------------------

Promise.all([p1, p2])
  .then((results) => console.log("🟢 Promise.all resolved:", results))
  .catch((err) => console.log("🔴 Promise.all error:", err));

// Uncomment below to test rejection case:
// Promise.all([p1, p3, p2])
// .then((results) => console.log("🟢 Promise.all resolved:", results))
// .catch((err) => console.log("🔴 Promise.all error:", err));

// ----------------------------------------------
// 🔗 Promise.allSettled()
// Waits for all promises to either resolve or reject
// Always succeeds with result array
// ----------------------------------------------

Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log("🟡 Promise.allSettled results:");
  results.forEach((result, i) => {
    console.log(` Promise ${i + 1}:`, result);
  });
});

// ----------------------------------------------
// 🔗 Promise.race()
// Resolves or rejects with the first settled promise
// ----------------------------------------------

Promise.race([p1, p2, p3])
  .then((res) => console.log("⚡ Promise.race result:", res))
  .catch((err) => console.log("⚡ Promise.race error:", err));

// ----------------------------------------------
// 🔗 Promise.any()
// Resolves with the first fulfilled promise
// Ignores rejections unless all fail
// ----------------------------------------------

Promise.any([p3, p2, p1])
  .then((res) => console.log("🟢 Promise.any result:", res))
  .catch((err) => {
    console.log("🔴 Promise.any error:", err.message);
    console.log("📋 All errors:", err.errors); // Array of rejection reasons
  });

/*
  🧠 Summary Table:
  
  | API | Waits for All? | Returns On | Rejection Behavior |
  |---------------------|----------------|-------------------|------------------------------------|
  | Promise.all | ✅ | All resolved | Rejects if ANY fail |
  | Promise.allSettled | ✅ | All settled | Never rejects |
  | Promise.race | ❌ | First settled | Resolves/rejects immediately |
  | Promise.any | ❌ | First fulfilled | Rejects only if ALL fail (AggregateError) |
  */
