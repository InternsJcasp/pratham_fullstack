// every --> do all element satisfy the condition?
const marks = [10, 20, 30, 40, 50, 60];

const result = marks.every((marks) => marks >= 10);

console.log(result);

// question 2:
const cart = [
  { product: 'Laptop', quantity: 1 },
  { product: 'Mouse', quantity: 2 },
  { product: 'Keyboard', quantity: 1 },
  { product: 'Monitor', quantity: 0 },
];

const cartQuantity = cart.every((item) => item.quantity > 0);
console.log(cartQuantity);

// question 3:
const students = [
  { name: 'Rahul', attendance: 85 },
  { name: 'Priya', attendance: 90 },
  { name: 'Amit', attendance: 78 },
  { name: 'Neha', attendance: 92 },
];
// A student is eligible for an exam if attendance is at least 75%.

// Check whether every student is eligible

const checkEligible = students.every((std) => std.attendance > 78);
console.log(checkEligible);
