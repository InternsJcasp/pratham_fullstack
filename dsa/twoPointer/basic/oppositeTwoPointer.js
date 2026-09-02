//  Opposite Direction Two Pointers

// Start one pointer from the left and another from the right. Check the condition and move one or both pointers toward the center until they meet.

// This is commonly used for:

// Two Sum in a sorted array
// Checking palindrome
// Reversing an array
// Finding pairs
// Comparing elements from both ends

// Checking palindrome
// 1. Create left = 0.
// 2. Create right = array.length - 1.
// 3. Compare array[left] and array[right].
// 4. If they are different, return false.
// 5. Move left forward.
// 6. Move right backward.
// 7. Continue until left >= right.
// 8. Return true.

function isPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const arr = [1, 2, 3, 2, 1];

console.log(isPalindrome(arr));

// Complexity
// Time Complexity
// O(n)

// Because we check approximately half of the array.

// Space Complexity
// O(1)

// Because we only use:

// left
// right

// No extra array is created.
