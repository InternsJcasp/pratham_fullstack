function longestSubstring(s) {
  // Set is used to store characters currently
  // present inside our sliding window.
  let set = new Set();

  // Left pointer of the sliding window.
  let left = 0;

  // This will store the maximum length found.
  let maxLength = 0;

  // Right pointer moves through the entire string.
  for (let right = 0; right < s.length; right++) {
    // If the current character already exists
    // in the window, we have a duplicate.
    while (set.has(s[right])) {
      // Remove the character at the left side
      // because we need to shrink the window.
      set.delete(s[left]);

      // Move the left pointer one step forward.
      left++;
    }

    // Add the current character to the window.
    set.add(s[right]);

    // Calculate the current window length.
    let currentLength = right - left + 1;

    // Update maxLength if the current window
    // is larger than the previous maximum.
    maxLength = Math.max(maxLength, currentLength);
  }

  // Return the length of the longest substring.
  return maxLength;
}


let s = "abcabcbb";

// Call the function
let result = longestSubstring(s);

// Print the answer
console.log(result);
