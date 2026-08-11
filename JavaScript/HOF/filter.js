// filter  - It is used to find the selective element in array based on the condition
// question 1 :
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });

// console.log(evenNumbers);

const numbers = [5, 12, 8, 20, 15, 3, 25];

const filterNumber = numbers.filter((n) => n > 10);
console.log(filterNumber);

// real world question
const users = [
  { name: 'Rahul', age: 17 },
  { name: 'Amit', age: 22 },
  { name: 'Neha', age: 19 },
  { name: 'Raj', age: 15 },
];

const ageFilter = numbers.filter((user) => user.age > 18);

console.log(ageFilter);

// question
const products = [
  { name: 'Laptop', price: 50000 },
  { name: 'Phone', price: 20000 },
  { name: 'Mouse', price: 1000 },
  { name: 'Keyboard', price: 3000 },
];

const expensiveProduct = products.filter((item) => item.price > 10000);
