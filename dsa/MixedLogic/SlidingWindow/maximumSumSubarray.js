function maxSumSubarray(arr, k) {

    // Sum of the first window
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    // Initially, first window is the maximum
    let maxSum = windowSum;

    // Start sliding the window
    for (let right = k; right < arr.length; right++) {

        // Add the new element
        windowSum += arr[right];

        // Remove the element that left the window
        windowSum -= arr[right - k];

        // Update maximum sum
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}


console.log(
    maxSumSubarray([2, 1, 5, 1, 3, 2], 3)
);



/*
Time Complexity:
O(n)

We visit each element only once.

Space Complexity:
O(1)

We use only a few variables.
*/