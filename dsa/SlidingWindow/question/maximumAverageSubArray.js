function findMaxAverage(arr, k) {
  let windowSum = 0;

  // Calculate sum of first k elements
  for (let i = 0; i < k; i++) {
    windowSum = windowSum + arr[i];
  }

  // Assume first window has maximum sum
  let maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    // Remove the element leaving the window
    windowSum = windowSum - arr[i - k];

    // Add the new element entering the window
    windowSum = windowSum + arr[i];

    // Update maximum sum
    maxSum = Math.max(maxSum, windowSum);
  }

  // Convert maximum sum into maximum average
  return maxSum / k;
}

let arr = [1, 12, -5, -6, 50, 3];

let k = 4;

let result = findMaxAverage(arr, k);

console.log(result);
