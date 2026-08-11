// Simple language mein:

// Jab hum ek function ko doosre function ke argument ke roop mein pass karte hain, toh jo function pass kiya hai usse callback function kehte hain.
function greet() {
  console.log('Hello everyone');
}

function executionFunc(fn) {
  fn();
}

executionFunc(greet);

// example 2

function orderReady() {
  setTimeout(() => {
    console.log('Your order is ready');
  }, 5000);
}
function restaurantOrder(func) {
  func();
}
restaurantOrder(orderReady);

// example 2
function add(a, b) {
  return a + b;
}
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(10, 20, add));

// Arrow function with call back

function multi(a, b, operation) {
  return operation(a, b);
}

const result = calculate(10, 20, (a, b) => {
  return a * b;
});
console.log(result);

const products = [
  { name: 'Laptop', price: 50000 },
  { name: 'Phone', price: 20000 },
  { name: 'Mouse', price: 1000 },
  { name: 'Keyboard', price: 3000 },
];

function expensiveProduct(products) {
  return products.price > 10000;
}
function processProducts(products, callback) {
  return products.filter(callback);
}

console.log(processProducts(products, expensiveProduct));

// practice

function double(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

function half(n) {
  return n / 2;
}

function basicOperator(n, operation) {
  return operation(n);
}

console.log(basicOperator(10, half));
