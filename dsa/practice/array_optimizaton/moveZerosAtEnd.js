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
