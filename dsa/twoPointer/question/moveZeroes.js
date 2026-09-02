// Short Approach:
// 1. Use i to scan every element.
// 2. Use nonZeroIndex to track where the next non-zero element belongs.
// 3. When a non-zero element is found, swap it with nums[nonZeroIndex].
// 4. Move nonZeroIndex forward.
// 5. At the end, all zeroes are automatically moved to the end.
//
// Time Complexity: O(n)
// Space Complexity: O(1)

function moveZeroes(nums) {
  // Points to the position where
  // the next non-zero element should be placed.
  let nonZeroIndex = 0;

  // Traverse every element of the array.
  for (let i = 0; i < nums.length; i++) {
    // Check whether the current element is non-zero.
    if (nums[i] !== 0) {
      // Swap the current non-zero element
      // with the element at nonZeroIndex.
      [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];

      // Move to the next position
      // for the next non-zero element.
      nonZeroIndex++;
    }
  }

  // Return the modified array.
  return nums;
}

const nums = [0, 1, 0, 3, 12];

const result = moveZeroes(nums);

console.log(result);
