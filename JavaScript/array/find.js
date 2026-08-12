// find - search a array and return the first element that satisfies the condition

const number = [40, 30, 20, 70, 80, 90];

const numFilter = number.find((num) => num > 40);
console.log(numFilter);

// real world problem
// question 1:

// const employees = [
//   { id: 101, name: 'Rahul', department: 'Development' },
//   { id: 102, name: 'Priya', department: 'Testing' },
//   { id: 103, name: 'Amit', department: 'HR' },
//   { id: 104, name: 'Neha', department: 'Development' },
// ];

// const personFinder = employees.find((person) => person.id === 103);
// console.log(personFinder);

// question 2:
// const products = [
//   { id: 1, name: 'Laptop', price: 55000 },
//   { id: 2, name: 'Mouse', price: 800 },
//   { id: 3, name: 'Keyboard', price: 1500 },
//   { id: 4, name: 'Monitor', price: 12000 },
// ];

// const productFilterByName = products.find((item) => item.name === 'Keyboard');

// console.log(productFilterByName);

// question 3:
const products = [
  { name: 'Laptop', price: 55000, inStock: false },
  { name: 'Mouse', price: 800, inStock: false },
  { name: 'Keyboard', price: 1500, inStock: true },
  { name: 'Monitor', price: 12000, inStock: true },
];

const productInStock = products.find((items) => items.inStock === true);
console.log(productInStock);

// Q5. Find User by Email

const users = [
  {
    id: 1,
    name: 'Rahul',
    email: 'rahul@gmail.com',
  },
  {
    id: 2,
    name: 'Priya',
    email: 'priya@gmail.com',
  },
  {
    id: 3,
    name: 'Amit',
    email: 'amit@gmail.com',
  },
];

function findUserByEmail(users, email) {
  const result = users.find((user) => user.email === email);
  return result;
}
console.log('email -- >');
console.log(findUserByEmail(users, 'priya@gmail.com'));
