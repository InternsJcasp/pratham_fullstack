// version:1

// APPROACH:
// - Traverse the complete array.
// - Whenever target is found, update answer.
// - At the end, answer contains the last occurrence.

function lastOccurrenceBasic(arr, target) {
  let answer = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      // Keep updating answer.
      // The last matching index will remain.
      answer = i;
    }
  }

  return answer;
}
// TIME COMPLEXITY:
// O(n)

// SPACE COMPLEXITY:
// O(1)

// Optimization Approached
// version 2:

// APPROACH:
// 1. Use Binary Search.
// 2. When target is found:
//    - Save middle.
//    - Continue searching right.
// 3. Final answer becomes the last occurrence.

function lastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  let answer = -1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      answer = middle;

      // There may be another target on the right.
      left = middle + 1;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return answer;
}

console.log(lastOccurrence([1, 2, 2, 2, 3, 4], 2));

// TIME COMPLEXITY:
// O(log n)

// SPACE COMPLEXITY:
// O(1)
