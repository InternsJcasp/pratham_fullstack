// Approach:
// 1. Count frequency of each character using HashMap
// 2. Every pair of characters can be used on both sides
// 3. If any character has an odd frequency,
//    we can put one odd character in the center
// 4. Return the maximum palindrome length
function longestPalindrome(s) {
  const map = new Map();
  // Count characters
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let length = 0;
  let hasOdd = false;
  // Use pairs
  for (let count of map.values()) {
    length += Math.floor(count / 2) * 2;
    if (count % 2 === 1) {
      hasOdd = true;
    }
  }
  // One odd character can be placed in the center
  if (hasOdd) {
    length++;
  }

  return length;
}

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("abc"));

// time complexity : O(n)
// space complexity : O(n)
