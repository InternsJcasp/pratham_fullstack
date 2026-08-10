//  This is the example of the hashmap
// let marks = {
//   Rahul: 95,

//   Amit: 80,

//   Priya: 91,
// };

// console.log(marks['Rahul']);

// Example 2 - Add new data

let Student = {};
Student['name'] = 'pratham';
Student['age'] = 21;

console.log(Student);

//  Example 3 - Update Data
let marks = {
  Rahul: 95,
};

marks['Rahul'] = 99;
console.log(marks);

// HashMap Example 4 - Check if Key Exists

let Student_marks = {
  Rahul: 85,
  Amit: 90,
};

console.log('Rahul' in Student_marks);
console.log('Amit' in Student_marks);

// Count Frequency using the hashmap
let arr = [2, 3, 2, 5, 3, 2];

let freq = {};

for (let num of arr) {
  if (freq[num]) {
    freq[num]++;
  } else {
    freq[num] = 1;
  }
}

console.log(freq);

// Time Complexity : 0(n) ( for each loop O(1) ) and Space Complexity : O(n) in  worst case

//  Find Duplicate

let seen = {};

for (let num of arr) {
  if(seen[num]) {
    console.log('Duplicate no', num);
    break;
  }
  seen[num] = true;
}

