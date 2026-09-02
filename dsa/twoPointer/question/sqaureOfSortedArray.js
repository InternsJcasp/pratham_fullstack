//  Approach

// left  -> starts from the beginning
// right -> starts from the end
//
// The largest square can come from either:
// 1. The most negative number
// 2. The largest positive number
//
// We compare their absolute values and place
// the larger square at the end of result.
//
function sortedSquares(nums) {
  const result = new Array(nums.length);

  let left = 0;
  let right = nums.length - 1;

  // Start filling result from the last position
  let position = nums.length - 1;

  while (left <= right) {
    // Compare absolute values
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      // Left element produces the larger square
      result[position] = nums[left] * nums[left];

      left++;
    } else {
      // Right element produces the larger square
      result[position] = nums[right] * nums[right];

      right--;
    }

    // Move to the previous position
    position--;
  }

  return result;
}

// Example
const nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));

// Time Complexity: O(n)
// Space Complexity: O(n)
