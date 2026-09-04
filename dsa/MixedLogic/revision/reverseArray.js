function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap left and right elements
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // Move pointers
    left++;
    right--;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

/*
Time Complexity:O(n)
Space Complexity: O(1) - No extra array is created.
*/
