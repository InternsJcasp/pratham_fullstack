// some --> Does at least one element satisfy the condition
const marks = [10, 20, 30, 40, 50];

const result = marks.some((num) => num > 20);

console.log(result);

// question -2
const employees = [
  { name: 'Rahul', experience: 1 },
  { name: 'Priya', experience: 2 },
  { name: 'Amit', experience: 5 },
  { name: 'Neha', experience: 1 },
];

// Check whether at least one employee has more than 3 years of experience.

const checkExperience = employees.some((emp) => emp > 3);
console.log(checkExperience);

// question 3
const students = [
  { name: 'Rahul', marks: 45 },
  { name: 'Amit', marks: 62 },
  { name: 'Priya', marks: 38 },
  { name: 'Neha', marks: 75 },
];

const markFilter = students.some((std) => std.marks > 62);
console.log(markFilter);
