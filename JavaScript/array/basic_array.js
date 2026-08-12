//  what is Array :
//  An array stores multiple value in one variable - > denoted to '[]'
// const student = ['Rahul', 'Rohit', 'Priya'];

// Index    0       1       2
// Array ["Rahul","Rohit","Raj"]

// Accessing element in array

const marks = [30, 40, 50];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

// Array properties - length

console.log(`Array of the length : ${marks.length}`);

console.log(marks[marks.length - 1]);

// Changing Array Value

const student = ['Rahul', 'Rohit', 'Priya'];

student[1] = 'John';

console.log(student);

// Adding Data

student.push('Tony');
console.log('Adding the element in the array');
console.log(student);

//  push array in existing array
console.log('-------------------push method----------------------');
const studentPetName = ['Rony', 'Tomy', 'babel'];

student.push(studentPetName);

console.log(student);

// unshift - Add data from beginning

student.unshift('Bhavik');
console.log(student);

//  Removing the data from the arr
// pop --> removing the data from last
console.log('-------------- pop method ---------------');
student.pop();
console.log(student);

// shift --> removing the data from beginning
console.log('--------------shift method----------------');
student.shift();
console.log(student);

//  Array Traversal - 2 method simple for loop and forEach

console.log('--------------Array Traversal-------------');

// using the for loop
console.log('---------------for loop--------------------');
for (let i = 0; i < student.length; i++) {
  console.log(student[i]);
}

//  for Each
console.log('--------------for Each loop----------------');
student.forEach((std) => {
  console.log(std);
});
