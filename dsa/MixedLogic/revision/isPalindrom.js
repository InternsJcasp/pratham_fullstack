function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // Compare characters from both sides
    if (str[left] !== str[right]) {
      return false;
    }

    // Move pointers toward the center
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("madam"));
// Output: true

console.log(isPalindrome("hello"));
// Output: false

/*
Time Complexity:O(n) - We compare characters while moving the two pointers toward the center.

Space Complexity:O(1) - Only two pointer variables are used.
*/
