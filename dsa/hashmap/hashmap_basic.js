// Find the First Non-Repeating Element

// Version 1 :

function firstNonRepeating(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count === 1) {
      return arr[i];
    }
  }

  return null;
}

const arr = [4, 5, 1, 2, 1, 4, 5];

console.log(firstNonRepeating(arr));

// Time Complexity : O(n^2)  and Space Complexity:O(1)

// Version 2:

function firstNonRepeating(arr) {
  const frequency = {};

  // Step 1: Count frequency
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }

  // Step 2: Find first element with frequency 1
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]] === 1) {
      return arr[i];
    }
  }

  return null;
}

const arr2 = [4, 5, 1, 2, 1, 4, 5];

console.log(firstNonRepeating(arr2));

//  Time complexity  : O(n) and O(n): Space Complexity
