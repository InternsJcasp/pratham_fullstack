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
