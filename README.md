
```markdown
# JavaScript Fundamentals 🚀

A beginner-friendly guide to learning the basics of JavaScript.

---

## 📌 1. Variables

Variables store data for later use. Always prefer `let` and `const` over `var`.

```javascript
// const: Use for values that won't change
const name = "Alice";

// let: Use for values that will change later
let age = 25;
age = 26; 

console.log(name, age);

```

---

## 📌 2. Data Types

JavaScript has several primitive data types:

```javascript
const text = "Hello World"; // String
const count = 42;           // Number
const isActive = true;      // Boolean (true/false)
let emptyValue = null;      // Intentional empty value
let unassigned;             // Undefined (value not assigned yet)

```

---

## 📌 3. Functions

Functions allow you to reuse blocks of code.

### Standard Function

```javascript
function greet(user) {
  return `Hello, ${user}!`;
}

console.log(greet("Alex"));

```

### Arrow Function (Modern Syntax)

```javascript
const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8

```

---

## 📌 4. Conditionals (`if / else`)

Control the flow of your program based on conditions.

```javascript
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Keep trying!");
}

```

---

## 📌 5. Arrays & Loops

Arrays store lists of items. Loops let you iterate over them.

```javascript
const fruits = ["Apple", "Banana", "Cherry"];

// Access by index (0-based)
console.log(fruits[0]); // "Apple"

// Loop through the array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Modern loop using forEach
fruits.forEach((fruit) => {
  console.log(fruit);
});

```

---

## 📌 6. Objects

Objects group related data together in key-value pairs.

```javascript
const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
  isStudent: false
};

// Accessing properties
console.log(person.firstName); // "Jane"
console.log(person["age"]);    // 30

```

---

## 🚀 How to Run This Code

1. **In the Browser:** Open your browser (Chrome/Firefox/Edge), press `F12` or `Right-Click -> Inspect`, open the **Console** tab, and paste any code block.
2. **Using Node.js:** Save the code to a file named `app.js` and run it in your terminal:
```bash
node app.js

```



```

```