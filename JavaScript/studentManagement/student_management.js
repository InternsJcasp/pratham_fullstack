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
