// Approach:
// 1. Use two pointers: left and right
// 2. Use HashMap to store the last index of each character
// 3. Move right pointer through the string
// 4. If character repeats, move left pointer
// 5. Calculate the maximum window length
function longestSubstring(s) {
  const map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    // Character is repeated
    if (map.has(char)) {
      left = Math.max(left, map.get(char) + 1);
    }

    // Store latest index
    map.set(char, right);

    // Current window length
    const length = right - left + 1;

    // Update maximum length
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
}

console.log(longestSubstring("abcabcbb"));

// time Complexity : O(n) - single loop
// space complexity : O(n)
