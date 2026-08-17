// Approach
// MERGE SORT

// 1. Divide array into two halves
// 2. Keep dividing until one element remains
// 3. Merge two sorted arrays
// 4. During merge, compare elements
// 5. Put the smaller element into result
// 6. Continue until everything is merged
function mergeSort(arr) {
  // Base condition
  if (arr.length <= 1) {
    return arr;
  }

  // Find middle
  let mid = Math.floor(arr.length / 2);

  // Divide
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // Recursively sort left and right
  left = mergeSort(left);
  right = mergeSort(right);

  // Merge
  return merge(left, right);
}

function merge(left, right) {
  let result = [];

  let i = 0;
  let j = 0;

  // Compare elements
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add remaining left elements
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // Add remaining right elements
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

let arr = [8, 3, 5, 4, 1, 0];

console.log(mergeSort(arr));
// Time Complexity:
// O(n log n) - dividing the n element

// Space Complexity:
// O(n) -> extra arrays are created during splitting and merging

// version 2:
// Approached:
// Instead of creating a left and right  arrays,we work with
// We keep dividing  using the indices
//  Merge two sorted arrays
// use indices to represent left/right portions
// then create only the merge result
function mergeSort(arr) {
  let temp = new Array(arr.length);

  function divide(left, right) {
    if (left >= right) {
      return;
    }

    let mid = Math.floor((left + right) / 2);

    // Divide left half
    divide(left, mid);

    // Divide right half
    divide(mid + 1, right);

    // Merge both halves
    merge(arr, temp, left, mid, right);
  }

  divide(0, arr.length - 1);

  return arr;
}

function merge(arr, temp, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left;

  // Compare both halves
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      i++;
    } else {
      temp[k] = arr[j];
      j++;
    }

    k++;
  }

  // Remaining elements from left half
  while (i <= mid) {
    temp[k] = arr[i];
    i++;
    k++;
  }

  // Remaining elements from right half
  while (j <= right) {
    temp[k] = arr[j];
    j++;
    k++;
  }

  // Copy sorted elements back
  for (let x = left; x <= right; x++) {
    arr[x] = temp[x];
  }
}

let arr = [8, 3, 5, 4, 7, 6, 1, 2];

console.log(mergeSort(arr));

// Time Complexity:
// Best: O(n log n) - divide the n element

// Space Complexity:
// O(n) -> one temp array is used for merging
