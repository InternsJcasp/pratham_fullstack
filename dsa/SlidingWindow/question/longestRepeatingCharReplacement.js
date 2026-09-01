// Approached
// We need to find the longest substring where we can replace at most k characters so that all characters become the same.
// The key formula is:
// Window Length - Frequency of Most Frequent Character ≤ k
// If this condition is true → our window is valid.
// If false → move left forward to make the window smaller.
function characterReplacement(s, k) {
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // Get the current window
    let window = s.substring(left, right + 1);

    // Convert the window into an array
    let chars = window.split("");

    // Sort the characters
    chars.sort();

    // Find the frequency of the most common character
    let maxFreq = 1;
    let currentFreq = 1;

    for (let i = 1; i < chars.length; i++) {
      if (chars[i] === chars[i - 1]) {
        currentFreq++;
      } else {
        currentFreq = 1;
      }

      maxFreq = Math.max(maxFreq, currentFreq);
    }

    // Number of characters we need to replace
    let replacements = chars.length - maxFreq;

    // If replacements are greater than k,
    // shrink the window from the left
    while (replacements > k) {
      left++;

      // Create the new smaller window
      window = s.substring(left, right + 1);

      // Convert it into an array
      chars = window.split("");

      // Sort the new window
      chars.sort();

      // Find the new maximum frequency
      maxFreq = 1;
      currentFreq = 1;

      for (let i = 1; i < chars.length; i++) {
        if (chars[i] === chars[i - 1]) {
          currentFreq++;
        } else {
          currentFreq = 1;
        }

        maxFreq = Math.max(maxFreq, currentFreq);
      }

      // Calculate replacements again
      replacements = chars.length - maxFreq;
    }

    // Update the maximum window length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(characterReplacement("AABABBA", 1));
