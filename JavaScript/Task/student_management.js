const students = [
  {
    id: 101,
    name: 'Rahul Sharma',
    course: 'MERN',
    age: 22,
    marks: 85,
  },
  {
    id: 102,
    name: 'Amit Patel',
    course: 'Java',
    age: 24,
    marks: 72,
  },
  {
    id: 103,
    name: 'Neha Mehta',
    course: 'MERN',
    age: 21,
    marks: 91,
  },
  {
    id: 104,
    name: 'Raj Shah',
    course: 'Python',
    age: 23,
    marks: 65,
  },
  {
    id: 105,
    name: 'Priya Desai',
    course: 'MERN',
    age: 22,
    marks: 78,
  },
];

// Search by Name
function searchByName(students, searchText) {
  return students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

// Search by ID
function searchById(students, id) {
  return students.find((student) => student.id === id);
}

// Search by Course
function searchByCourse(students, course) {
  return students.filter(
    (student) => student.course.toLowerCase() === course.toLowerCase()
  );
}

// Filter by Marks
function filterByMarks(students, minimumMarks) {
  return students.filter((student) => student.marks >= minimumMarks);
}

// Filter by Age
function filterByAge(students, minimumAge) {
  return students.filter((student) => student.age >= minimumAge);
}

// Sort by Name
function sortByName(students) {
  return [...students].sort((a, b) => a.name.localeCompare(b.name));
}

function sortByMarksAscending(students) {
  return [...students].sort((a, b) => a.marks - b.marks);
}

function sortByMarksDescending(students) {
  return [...students].sort((a, b) => b.marks - a.marks);
}

console.log('Search Name:');
console.log(searchByName(students, 'rahul'));

console.log('Search ID:');
console.log(searchById(students, 103));

console.log('Search Course:');
console.log(searchByCourse(students, 'mern'));

console.log('Marks >= 80:');
console.log(filterByMarks(students, 80));

console.log('Age >= 22:');
console.log(filterByAge(students, 22));

console.log('Sort by Name:');
console.log(sortByName(students));

console.log('Marks Low to High:');
console.log(sortByMarksAscending(students));

console.log('Marks High to Low:');
console.log(sortByMarksDescending(students));
