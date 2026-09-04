function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    // Target found
    if (sum === target) {
      return [arr[left], arr[right]];
    }

    // Sum is too small,
    // move left pointer forward
    if (sum < target) {
      left++;
    }

    // Sum is too large,
    // move right pointer backward
    else {
      right--;
    }
  }

  // No pair found
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
