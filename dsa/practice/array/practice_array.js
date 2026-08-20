// print all element of the array
let arr = [10, 20, 30, 40];

for (let i = 0; i < arr.length; i++) {
  console.log('print all arr element :', arr[i]);
}

// time: O(n) and space : O(1)

// print in reverse number

for (let i = arr.length - 1; i >= 0; i--) {
  console.log('reverse arr', arr[i]);
}

// time: O(n) and space : O(1)

// sum of array

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log('Sum of the arr is :', sum);

// time:O(n) and space O(1)

// Count even number

let num = [2, 4, 6, 7, 8, 9, 0, 9];

let count_even = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    count_even++;
  }
}

console.log('Total even num in arr :', count_even);

// time : O(n) and space: O(1)

// Odd number find in arr
let count_odd = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 !== 0) {
    count_odd++;
  }
}

console.log('Total odd num in arr : ', count_odd);

// time : O(n) and space: O(1)

// Maximum number in arr

let max = num[0];
for (let i = 0; i < num.length; i++) {
  if (num[i] > max) {
    max = [i];
  }
}
console.log('Maximum number in arr :', max);
// time : O(n) and O(1)

// positive number find in array
let num2 = [1, 0, -1, 2, -2, 4, 6, -4];

for (let num of num2) {
  if (num > 0) {
    console.log(num);
  }
}
// time:O(n) and space:O(1)

// multiply Every element by 2

for (let i = 0; i < num.length; i++) {
  num[i] = num[i] * 2;
}
console.log(num);
// time : O(n) and space:O(1)

// Find Average

let sum1 = 0;

for (let i = 0; i < num.length; i++) {
  sum1 += num[i];
}
console.log('Average of the arr is :', sum / num.length);
// same time:O(n) and space O(1)

// linear search
let target = 1;
let found = false;
for (let num of num2) {
  if (num === target) {
    found = true;
    break;
  }
}

console.log('target is found :', found);
// same time:O(n) and space O(1)

// minimum number
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log('Min num in arr :', min);

// Count zero in arr
let arr_1 = [0, 5, 0, 2, 8, 0];
let count_zero = 0;
for (let num of arr_1) {
  if (num === 0) {
    count_zero++;
  }
}
console.log('Count zero in arr :', count_zero);

// time O(n) and space O(1)

// First Negative number
let arr_2 = [5, 8, -3, 2, -7];
let First_neg = [];
for (let i = 0; i < arr_2.length; i++) {
  if (arr_2[i] <= 0) {
    First_neg = arr_2[i];
    break;
  }
}

console.log('First Negative number :', First_neg);

// Input:
// Array = [10, 20, 30, 40]

// Target = 30

// Output:
// 2

let arr_3 = [10, 20, 30, 40, 50, 60, 70, 80];

let Target = 30;
let idx = 0;
for (let i = 0; i < arr_3.length; i++) {
  if (arr_3[i] === Target) {
    idx = i;
    break;
  }
}
console.log('element index :', idx);

// Question 14 - Count Numbers Greater Than 50

let count_greater = 0;

for (let i = 0; i < arr_3.length; i++) {
  if (arr_3[i] > 50) {
    count_greater++;
  }
}

console.log('Count Numbers Greater Than 50 is :', count_greater);

// Question 15 - Replace Negative Numbers with Zero

let arr_4 = [-5, 8, -2, 10, -1];

for (let i = 0; i < arr_4.length; i++) {
  if (arr_4[i] < 0) {
    arr_4[i] = 0;
  }
}

console.log(arr_4);

// remove the duplicate element in array
// version 1  : Basic
function removeDuplicate(arr) {
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (result.length === 0 || result.length !== arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr_5 = [1, 1, 2, 2, 3, 3, 4, 5];
console.log('Remove duplicated element in the array :');
console.log(removeDuplicate(arr_5));
// we traverse the array once
// if n element  -> n iterations
// Time:O(n) ans Space :O(n) -> n element add in the empty array

// version 2 :

function removeDuplicates(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

const arr_6 = [1, 1, 2, 2, 3, 3, 4];

const k = removeDuplicates(arr_6);

console.log(k);
console.log(arr_6.slice(0, k));

// left rotated array in one position
// version 2 : this is optimized and basic version

function leftRotate(arr) {
  const first = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = first;

  return arr;
}

const arr_7 = [1, 2, 3, 4, 5];
console.log('left rotated element :');
console.log(leftRotate(arr_7));

// time :O(n) --> one for loop n iteration and space : O(1) --> only one variable exist in this code
//version :

// function leftRotate(arr) {
//   const first = arr.shift();
//   arr.push(first);

//   return arr;
// }

// const rotatedArr = [5, 4, 3, 2, 1];
// console.log(leftRotate(rotatedArr));

// time :O(1) and space:O(n) n element push in the array

// Check Array is sorted or not
// version 1
// function isSortedFunc(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// const isSorted = [1, 2, 3, 4];
// console.log(isSortedFunc(isSorted));

// time : O(n) : one for loop n iteration  and O(1) in this code only one variable is need to solve
// this is the optimized version
