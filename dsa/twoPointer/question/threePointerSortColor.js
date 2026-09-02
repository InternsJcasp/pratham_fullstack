// Short Approach:
// 0 → swap with low, then low++ and mid++
// 1 → just move mid++
// 2 → swap with high, then high--
//     Do not move mid because the new element at mid is unprocessed.

function sortColors(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

const arr = [2, 0, 2, 1, 1, 0];
console.log(sortColors(arr));

// Time Complexity: O(n)
// Space Complexity: O(1)
