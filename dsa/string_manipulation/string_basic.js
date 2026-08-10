// Check Whether Two Strings Are Anagrams

// function areAnagrams(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const sortedStr1 = str1.split('').sort().join('');
//   const sortedStr2 = str2.split('').sort().join('');

//   return sortedStr1 === sortedStr2;
// }

// const str1 = 'listen';
// const str2 = 'silent';

// console.log(areAnagrams(str1, str2));
// Time Complexity :O(n log n) and Space Complexity : O(n)

// Version 2:
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequency = {};

  // Count characters from first string
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];

    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  // Subtract characters from second string
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    if (!frequency[char]) {
      return false;
    }

    frequency[char]--;
  }

  return true;
}

const str1 = 'listen';
const str2 = 'silent';

console.log(areAnagrams(str1, str2));

// Time Complexity : O(n) and O(n) :Space Complexity
