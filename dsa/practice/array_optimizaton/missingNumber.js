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
