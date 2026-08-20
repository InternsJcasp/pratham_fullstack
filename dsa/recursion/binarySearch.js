// Binary Search

function BinarySearch(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);
  if (arr[middle] === target) {
    return middle;
  }

  if (target < arr[middle]) {
    return BinarySearch(arr, target, left, middle - 1);
  }
  return BinarySearch(arr, target, middle + 1, right);
}

const arr = [10, 20, 30, 40, 50, 60, 70];

const BinaryInput = BinarySearch(arr, 20, 0, arr.length - 1);

console.log('result is:', BinaryInput);

// optimized version 2: Binary Search

function BinarySearch(arr, target = 40, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);
  if (arr[middle] === target) {
    return middle;
  }

  if (target < arr[middle]) {
    return BinarySearch(arr, target, left, middle - 1);
  }
  return BinarySearch(arr, target, middle + 1, right);
}

console.log(BinarySearch(arr));
