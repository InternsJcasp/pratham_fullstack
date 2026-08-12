import students from './data/student.json' assert { type: 'json' };

import {
  searchByCourse,
  searchByName,
  searchById,
} from './service/searchService.js';
import { filterByAge, filterByMarks } from './service/filterService.js';

import {
  sortByMarksAscending,
  sortByMarksDescending,
  sortByName,
} from './service/sortService.js';

import {
  getAverageMarks,
  getCoursewiseStats,
  getHighestMarks,
  getLowestMarks,
  getTotalMarks,
  getTotalNumberOfStudents,
} from './service/studentStatistic.js';
import { addStudentFunctionality } from './service/curd/addStudent.js';
import { updateStudent } from './service/curd/updateStudent.js';
import { deleteStudent } from './service/curd/deleteStudent.js';
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

console.log('Total marks of the student:');
console.log(getTotalMarks(students));

console.log('Average marks of the student:');
console.log(getAverageMarks(students));

console.log('Highest marks of the student:');
console.log(getHighestMarks(students));

console.log('Lowest Marks of the student:');
console.log(getLowestMarks(students));

console.log('Total Number of the student:');
console.log(getTotalNumberOfStudents(students));

console.log('Courses Wise Stats of the student:');
console.log(getCoursewiseStats(students));

console.log('Add student data :');
console.log(
  addStudentFunctionality(students, {
    id: 107,
    name: 'Pratham Suthar',
    age: 21,
    course: 'Python',
    marks: 62,
  })
);

console.log('Updated student data :');
console.log(
  updateStudent(students, 101, {
    name: 'Amit',
    marks: 35,
  })
);

console.log('deleted student data :');
console.log(deleteStudent(students, 105));
