const number = [10, 20, 30];

console.log(...number);

// SPREAD
// [10, 20, 30]
//       ↓
// 10, 20, 30

// EXPAND

const first = ['HTML', 'CSS'];
const second = ['JavaScript', 'React'];

const result = [...first, ...second];

console.log(result);

const user = {
  name: 'Pratham',
  age: 20,
  city: 'Ahmedabad',
};

const { name, ...details } = user;

console.log(name);
console.log(details);

const user1 = {
  name: 'Pratham',
  age: 21,
};

const newUser = {
  ...user1,
  salary: 22390,
};

console.log(newUser);
// copy element
const arr = [1, 2, 3];

const copy = [...arr];

console.log(copy);
