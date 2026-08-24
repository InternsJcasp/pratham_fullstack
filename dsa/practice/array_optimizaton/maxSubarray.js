//Q . Maximum subarray

function maxSubArray(arr) {
  let maxSubArray = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      let sum = 0;

      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      maxSubArray = Math.max(maxSubArray, sum);
    }
  }
  return maxSubArray;
}

const subArray = [4, 2, -1, 3, -5, 4, 6];
console.log(maxSubArray(subArray));
// time : O(n^2) : reason: this is not good two inner for loop it increase the complexity
// space : O(1) : reason : variable

// version 2  : Optimized approached
// function maxSubArrayOptimized(arr) {
//   let currentSum = arr[0];
//   let maxSum = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// }
// const subArray1 = [4, 2, -1, 3, -5, 4, 6];

// console.log(maxSubArrayOptimized(subArray1));
// time:

// Time : O(n) - only one for loop and one variable
// Space : O(1) -  only one variable
