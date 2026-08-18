// Basic Approached - (Linear Search)
//  find the first element strickly greater than its next neighbour
// num [i] > num[i+1]

function findPeakElementLinear(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return nums.length - 1;
}

// time complexity : O(n)
// space complexity: O(1)

// Approach 2: Optimized (Binary Search)
// Concept: Compare the middle element nums[mid] with its right neighbor nums[mid + 1]:

// If nums[mid] < nums[mid + 1], we are on an ascending slope, so a peak must exist on the right half.

// Otherwise, we are on a descending slope (or at a peak), so a peak must exist on the left half (including mid).

function findPeakElement(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1; // Move right
    } else {
      right = mid; // Move left (keep mid in search space)
    }
  }

  return left; // left and right converge on a peak index
}

// time complexity : O(log n) -  Search space halves each step.
// space complexity : O(1) - Auxiliary storage remains constant.
