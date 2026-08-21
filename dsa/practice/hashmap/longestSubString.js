// Approach:
// 1. Use HashMap to store the last index of each character
// 2. Use left and right pointers to create a window
// 3. If character is repeated, move left pointer
// 4. Keep updating the maximum length

function longestSubstring(s) {
  const map = new Map();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    // If character already exists in current window
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1;
    }

    // Store latest index
    map.set(char, right);

    // Calculate current window length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));
console.log(longestSubstring("pwwkew"));

// time complexity :O(n)
// space complexity :O(n)
