// What is Object
// An Object store information using Key-value pair
// const student = {
//   name: 'Rahul',
//   age: 21,
//   course: 'JavaScript',
//   marks: 85,
// };

// properties
// console.log(Object.keys(student));
// console.log(Object.values(student));

// accessing
// console.log(student.name);
// console.log(student.age);

// console.log(student['name']);
// console.log(student['age']);

// Updating Object Data
// student.marks = 89;
// console.log(student);

// Adding a New Property
// student.Gender = 'male';
// console.log(student);

// Nested Object
// const student = {
//   name: 'Rahul',
//   age: 21,

//   address: {
//     city: 'Ahmedabad',
//     state: 'Gujarat',
//   },
// };

//  Array of the Object
// const students = [
//   {
//     name: 'Rahul',
//     course: 'JavaScript',
//     marks: 85,
//   },
//   {
//     name: 'Amit',
//     course: 'React',
//     marks: 75,
//   },
//   {
//     name: 'Priya',
//     course: 'JavaScript',
//     marks: 92,
//   },
// ];

// find with Object

const students = [
  { name: 'Rahul', marks: 70 },
  { name: 'Amit', marks: 85 },
  { name: 'Priya', marks: 92 },
];

const student = students.find((student) => student.marks > 80);

console.log(student);

// some method with Object
const result = students.some((student) => student.marks > 90);

console.log(result);

// every() With Objects

// Question:

// Did every student score at least 50?

// const result = students.every(
//   (student) => student.marks >= 50
// );

// console.log(result);
