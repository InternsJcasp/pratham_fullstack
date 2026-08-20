// Interaction of the array - two pointer
// version 1 : optimized approached
// Approach:
//   using the two pointer we compare the element to each other  (i and j)
//  final result put in the result array

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
