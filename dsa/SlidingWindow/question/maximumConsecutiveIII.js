// Short Approach
// 1.Use two pointers: left and right.
// 2.Move right through the array to expand the window.
// 3.Whenever nums[right] === 0, increase zeros.
// 4.If zeros > k, move left forward until zeros <= k.

// 4.Calculate the current window size: right - left + 1
// 5.Store the maximum window size.

function MaxConsecutiveOnesIII(nums, k) {
  // left represents the starting point of our window
  let left = 0;

  // This keeps track of how many zeros
  // are currently inside our window
  let zeros = 0;

  // This stores the largest valid window length
  let maxLength = 0;

  // right represents the ending point of our window
  for (let right = 0; right < nums.length; right++) {
    // If the current element is 0,
    // we need one operation to convert it to 1
    if (nums[right] === 0) {
      zeros++;
    }

    // If we have more zeros than k,
    // our current window is invalid
    while (zeros > k) {
      // If the element leaving the window is 0,
      // reduce the zero count
      if (nums[left] === 0) {
        zeros--;
      }

      // Move the left side of the window forward
      left++;
    }

    // Current window:
    // [left ........ right]
    //
    // Length = right - left + 1
    let currentLength = right - left + 1;

    // Keep the maximum window length
    maxLength = Math.max(maxLength, currentLength);
  }

  // Return the largest valid window
  return maxLength;
}
console.log(MaxConsecutiveOnesIII([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 9
