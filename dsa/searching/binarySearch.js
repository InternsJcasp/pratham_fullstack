// Approach:
// 1. Find the middle element.
// 2. If middle == target, return index.
// 3. If target is smaller, search left half.
// 4. If target is larger, search right half.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50], 40));
// Time Complexity: O(log n)
// Space Complexity: O(1)

// version 2:
// Approach:
// Calculate middle as:
// left + Math.floor((right - left) / 2)
// This is safer than (left + right) / 2

function binarySearchOptimized(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    if (arr[middle] === target) return middle;

    if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

// Time Complexity: O(log n)  - half the array
// Space Complexity: O(1)   - three variable is used
