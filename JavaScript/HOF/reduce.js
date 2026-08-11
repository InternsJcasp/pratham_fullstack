const numbers = [10, 20, 30, 40, 50];
// question 1:
const sumOfNumber = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sumOfNumber);

// question 2:
const multi = numbers.reduce((acc, curr) => {
  return acc * curr;
});

console.log(multi);

// question 3:

const cart = [
  { name: 'Laptop', price: 50000 },
  { name: 'Mouse', price: 1000 },
  { name: 'Keyboard', price: 3000 },
];

const TotalPrice = cart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);
console.log(TotalPrice);

// question

const carts = [
  { name: 'Laptop', price: 50000, quantity: 2 },
  { name: 'Mouse', price: 1000, quantity: 3 },
  { name: 'Keyboard', price: 3000, quantity: 4 },
];

const totalQty = carts.reduce((acc, curr) => {
  return acc + curr.quantity;
}, 0);

console.log(totalQty);
