// version 1:
// Approach:
// Use binary search.
// When target is found, store the index
// and continue searching on the LEFT side.
function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let answer = -1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      answer = middle;
      right = middle - 1;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return answer;
}

console.log(firstOccurrence([1, 2, 2, 2, 4], 2));

// Time Complexity: O(log n)
// Space Complexity: O(1)

// version 2:
// Approach :
// 1. Perform Binary Search.
// 2. If target is found:
//    - Save middle as answer.
//    - Continue searching left.
// 3. The final answer will be the first occurrence.
function firstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  let answer = -1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      // We found target.
      answer = middle;
      // There might be another target on the left.
      right = middle - 1;
    } else if (arr[middle] < target) {
      // Target must be on the right.
      left = middle + 1;
    } else {
      // Target must be on the left.
      right = middle - 1;
    }
  }

  return answer;
}

console.log(firstOccurrence([1, 2, 2, 2, 3, 4], 2));

// Time Complexity:
// O(log n)

// Space Complexity:
// O(1)
