// move zero at the end
// Approach - create a new array ( result) - extract all non zero number
// then add zero at the end using the push
// brute force approached apply - version 1
// function moveZerosAtTheEnd(arr) {
//   const result = [];
//   let zeroCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeroCount++;
//     } else {
//       result.push(arr[i]);
//     }
//   }

//   for (let i = 0; i < zeroCount; i++) {
//     result.push(0);
//   }

//   return result;
// }
// const arr = [1, 2, 0, 3, 0, 4];
// console.log(moveZerosAtTheEnd(arr));

//  time : O(2n) -> O(n) - reason : there are two loop it iteration n element in the array
// space : O(n) - reason : add element in empty array

// Two pointer approach
// version 2:
function moveZeroes(arr) {
  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  return arr;
}

const arr = [0, 1, 0, 3, 12];

console.log(moveZeroes(arr));
// time: 0(n) and Space O(1)
//  reason : one loop n element iterate and only one variable is used

// buy and sell stock
// function BuySellStock(price) {
//   let maxProfit = 0;
//   for (let i = 0; i < price.length; i++) {
//     for (let j = i + 1; j < price.length; j++) {
//       const profit = price[j] - price[i];
//       maxProfit = Math.max(maxProfit, profit);
//     }
//   }
//   return maxProfit;
// }

// const price = [10, 6, 3, 2, 1, 4, 5];

// console.log(BuySellStock(price));

// time : O(n^2) - reason - there are two loop i and j (n * n)
// space : O(1) - reason - three variable is used in this code maxProfit,i and j it does'nt matter how much variable it still the O(1) space is taken

// version 2:
// function maxProfit(prices) {
//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     minPrice = Math.min(minPrice, prices[i]);

//     const profit = prices[i] - minPrice;

//     maxProfit = Math.max(maxProfit, profit);
//   }

//   return maxProfit;
// }

// const prices = [7, 1, 5, 3, 6, 4];

// console.log(maxProfit(prices));

// time : O(n) - now only we used one for loop and space:O(1): two variable it does'nt matter how much variable still it is

// Merge two sorted array
// Create a new array.
// Put all elements of both arrays into it.
// Sort the new array.

// Example: function mergeTwoArray(arr1, arr2) {
//   const result = [...arr1, ...arr2];
//   result.sort((a, b) => a - b);
//   console.log(result);
//   return result;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9];

// time :O(1) and space :O(n) -> n element push in array it take the n space

// mergeTwoArray(arr1, arr2);
// optimized approached - two pointer

function mergeSortedArrays(arr1, arr2) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

console.log(mergeSortedArrays(arr1, arr2));

//time : O(n+m ) - reason - arr1 and arr2  has n and m element
//space :O(n+m) - reason - const result = [ ] which contain n and m space of the element

// find the missing the number

// function findMissingNumber(arr) {
//   const n = arr.length;

//   for (let i = 0; i <= n; i++) {
//     let found = false;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === i) {
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       return i;
//     }
//   }

//   return -1;
// }

// const findArr = [0, 1, 2, 4, 5, 6];

// console.log(findMissingNumber(arr));

//time:O(n^2) : two loop outer (n) -> inner(n)
// space :O(1): three variable is not taking the extra space

// Maximum consecutive one
// version 1:
// function findMaxConsecutiveOnes(arr) {
//   let currentCount = 0;
//   let maxCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       currentCount++;
//       maxCount = Math.max(maxCount, currentCount);
//     } else {
//       currentCount = 0;
//     }
//   }

//   return maxCount;
// }

// const minArr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1];

// console.log(findMaxConsecutiveOnes(minArr));

// time: O(n)  and space : O(1)

//Interaction of the array
// console.log('interaction of the array');
// function interactionOfArray(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         result.push(arr1[i]);
//         break;
//       }
//     }
//   }
//   return result;
// }
// let ar1 = [1, 2, 4, 5, 6];
// let ar2 = [4, 5, 6, 7];
// console.log(interactionOfArray(ar1, ar2));

// time : O (n^2)  - two loop outside(i) -> inside(j)
// space : O(n)

// Maximum subarray

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
