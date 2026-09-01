function maxSizeSubarraySum(arr, k) {
  // 'left' represents the starting point of our window
  let left = 0;

  // Stores the sum of elements inside the current window
  let sum = 0;

  // Stores the maximum length found so far
  let maxLength = 0;

  // Move 'right' from left to right through the array
  for (let right = 0; right < arr.length; right++) {
    // Add the current element to the window sum
    sum = sum + arr[right];

    // If the sum becomes greater than k,
    // shrink the window from the left side
    while (sum > k) {
      // Remove the leftmost element from the window
      sum = sum - arr[left];

      // Move the left pointer one step forward
      left++;
    }

    // If the current window's sum is exactly k,
    // calculate its length
    if (sum === k) {
      // Window length = right - left + 1
      let currentLength = right - left + 1;

      // Update maxLength if the current window is bigger
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  // Return the maximum subarray length
  return maxLength;
}

// Example
let arr = [1, 2, 1, 1, 1, 3];
let k = 3;

console.log(maxSizeSubarraySum(arr, k));
