// Quick sort
// version 1 :
// Approached:
//  pivot - last of element of the array
//  if num > pivot --> move to right in the array
//  num < pivot --> move to left in the array
//  used the two variable i and j , i --> next smaller element
//  j - which element am I currently checking?
// repeat this step until arr is not sorted

function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //   Pivot element
  const pivot = arr[arr.length - 1];

  //   left and right empty arr
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...QuickSort(left), pivot, ...QuickSort(right)];
}
const arr1 = [8, 9, 2, 4, 3, 2, 1];

console.log(QuickSort(arr1));

// time complexity : O(n log n) -- we divided the element from the pivot
// space complexity : O(n) - n no of the element put in the array left and right

// version 2:
// approached:Recursion method
// Continue only when there are at least 2 elements
// Partition the array and get the pivot's correct position
// Recursively sort the left side of the pivot
// Recursively sort the right side of the pivot
// Return the sorted array

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

// Partition function :
// Choose the last element as the pivot
// i represents the position where the next smaller element should go
// j scans every element before the pivot
// If current element is smaller than the pivot
// Swap the current element with the element at i
// Move i to the next position
// Put the pivot in its correct position
// Return the pivot's final index

function partition(arr, low, high) {
  const pivot = arr[high];

  let i = low;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];

      i++;
    }
  }

  [arr[i], arr[high]] = [arr[high], arr[i]];

  return i;
}

const arr = [8, 3, 5, 1, 4];

quickSort(arr);

console.log(arr);

// Time Complexity:
// Best: O(n log n)
// Average: O(n log n)
// Worst: O(n²)

// Space Complexity:
// Best/Average: O(log n)
// Worst: O(n)

// Partition: O(n) time, O(1) space
