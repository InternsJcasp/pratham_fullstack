// String Traversal

let str = 'HELLO';

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//time complexity : O(n) and Space Complexity: O(1)

// Character Counter
console.log(str.length);

// Count Vowel
let count = 0;
for (let chr of str) {
  let lower = chr.toLowerCase();
  if (
    lower === 'a' ||
    lower === 'e' ||
    lower === 'i' ||
    lower === 'o' ||
    lower === 'u'
  ) {
    count++;
  }
}

console.log('Total vowel in str', count);

//  Count Upper Case
let count_upper = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] >= 'A' && str[i] <= 'Z') {
    count_upper++;
  }
}
console.log('Count Capital letter ', count_upper);

// reverse letter

let reverse = '';

for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log(reverse);
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// with method

// let reverseStr = str.split('').reverse().join();
// console.log(reverseStr);

// Q . Count Occurrences of a Character
let str1 = 'banana';
let occ = 0;
for (let i = 0; i < str1.length; i++) {
  if (str1[i] === 'a') {
    occ++;
  }
}
console.log(occ);
// time complexity : O(n) and space : O(1)
// Check it character is exist or not

let found = false;

for (let i = 0; i < str1.length; i++) {
  if (str1[i] === 'a') {
    found = true;
    break;
  }
}

console.log(found);
// time complexity : O(n) and space : O(1)

// Find the index of the first vowel.
// If no vowel exists, return -1.

let str3 = 'Pragma';
let first_vowel = '';
for (let i = 0; i < str3.length; i++) {
  let ch = str3[i].toLowerCase();
  if (ch === 'a' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'e') {
    first_vowel = str3[i];
    break;
  }
}
console.log(first_vowel);

// time : O(n) and space O(n)
