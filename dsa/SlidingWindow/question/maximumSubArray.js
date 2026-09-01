function maximumSubarraySum(arr, k) {
  let windowSum = 0;
  let maxSum = 0;

  // Calculate the sum of first k elements
  for (let i = 0; i < k; i++) {
    windowSum = windowSum + arr[i];
  }

  // First window is currently the maximum
  maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    // Remove the element leaving the window
    windowSum = windowSum - arr[i - k];

    // Add the new element entering the window
    windowSum = windowSum + arr[i];

    // Update maximum sum
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

let arr = [2, 1, 5, 1, 3, 2];

let k = 3;

let result = maximumSubarraySum(arr, k);

console.log(result);
