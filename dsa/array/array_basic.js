//  Version 1

// function findSecondLargest(arr) {
//   arr.sort((a, b) => a - b);
//   return arr[arr.length - 2];
// }

// const arr = [10, 5, 8, 20, 15];

// console.log(findSecondLargest(arr));

// Time Complexity: O(n log n) - Sorting the array takes O(n log n).
// Space Complexity: O(log n) - Sorting may use extra memory.

// Version 2 - optimized version
function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}
const arr = [10, 5, 8, 20, 15];

console.log(findSecondLargest(arr));

// Time Complexity: O(n) - Traverse the array only once.
// Space Complexity: O(1) - Uses only two variables.

