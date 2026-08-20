// Approach 1: Basic (Linear Search)
// Iterate through the array from left to right.
// The target should be inserted at the first index where the element is greater than or equal to the target.
// If no such element exists, it belongs at the end.

function linearSearchIndexPosition(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}
const arr = [3, 4, 5, 6, 1, 0];
console.log(linearSearchIndexPosition(arr, 5));

// Complexity:
// Time Complexity: O(N) - because in the worst case, you scan through all N elements.
// Space Complexity: O(1) - since no additional memory is allocated.

// version 2:
//  Since the array is sorted, we can divide the search range in half each time using Binary Search.
//  When left > right,the left index points precisely to the correct insertion position.

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1; // Target is in the right half
    } else {
      right = mid - 1; // Target is in the left half
    }
  }

  return left; // 'left' holds the correct insertion index
}

// Time Complexity: O(log N) — Search space halves each step.
// Space Complexity: O(1) — Auxiliary storage remains constant.
