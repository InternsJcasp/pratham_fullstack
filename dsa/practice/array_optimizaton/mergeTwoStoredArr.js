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
