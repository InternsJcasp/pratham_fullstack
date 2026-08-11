// map()

// map() is used when you want to transform every element of an array and create a new array.

// example
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => {
  return num * 2;
});

console.log(doubled);

// question 2
const names = ['rahul', 'pratham', 'bhavik', 'jay'];

const upperCaseNames = names.map(function (name) {
  return name.toUpperCase();
});

console.log(upperCaseNames);

// question 3

// const students = [
//   { name: 'Rahul', age: 20 },
//   { name: 'Pratham', age: 21 },
//   { name: 'Bhavik', age: 22 },
// ];

// const studentNames = students.map(function (student) {
//   return student.name;
// });

// console.log(studentNames);

// question 3:
const prices = [100, 200, 300, 400];

const updatedPrices = prices.map(function (price) {
  return price + 10;
});

console.log(updatedPrices);

// question 5:
const students = [
  { name: 'Rahul', marks: 80 },
  { name: 'Pratham', marks: 65 },
  { name: 'Bhavik', marks: 90 },
];

// Solution
const studentResults = students.map(function (student) {
  return {
    name: student.name,
    passed: student.marks >= 50,
  };
});

console.log(studentResults);
