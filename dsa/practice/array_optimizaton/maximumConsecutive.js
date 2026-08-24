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

// version 2 : optimized approach
function findMaxConsecutiveOnes(arr) {
  let count = 0;
  let maxCount = 0;

  for (const num of arr) {
    if (num === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }

  return maxCount;
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1];

console.log(findMaxConsecutiveOnes(arr)); // 5
