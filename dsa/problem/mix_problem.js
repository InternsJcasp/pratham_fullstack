// Count Vowels in an Array of Strings

function countVowels(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (
        arr[i][j] === 'a' ||
        arr[i][j] === 'e' ||
        arr[i][j] === 'i' ||
        arr[i][j] === 'o' ||
        arr[i][j] === 'u'
      ) {
        count++;
      }
    }
  }

  return count;
}

const arr = ['apple', 'banana', 'cat'];

console.log(countVowels(arr));

// Time Complexity: O(n) - Every character is checked once.
// Space Complexity: O(1) - Only one count variable is used.

// version 2 :

function countVowels(arr) {
  const vowels = 'aeiou';
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (vowels.includes(arr[i][j])) {
        count++;
      }
    }
  }

  return count;
}

const arr2 = ['apple', 'banana', 'cat'];

console.log(countVowels(arr2));

// Time Complexity: O(n) - Every character is checked once.
// Space Complexity: O(1) - Only count and vowels are used.
