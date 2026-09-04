function longestUniqueSubstring(str) {
  let left = 0;
  let maxLength = 0;

  // Set stores characters currently inside the window
  const set = new Set();

  for (let right = 0; right < str.length; right++) {
    // If duplicate exists,
    // shrink the window from the left
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    // Add current character
    set.add(str[right]);

    // Calculate current window length
    const currentLength = right - left + 1;

    // Update maximum length
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb"));

/*
Time Complexity:
O(n)

Space Complexity:
O(n)
*/
