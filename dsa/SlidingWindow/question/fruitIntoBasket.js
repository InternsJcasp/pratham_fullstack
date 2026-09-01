// Approach:
// Use a variable-size sliding window.
// The window can contain at most 2 different fruit types.
// Use a frequency object to count each fruit inside the window.
// If there are more than 2 types, move the left pointer
// until the window becomes valid again.

function FruitsIntoBaskets(fruits) {
  // Store the frequency of each fruit in the current window
  const freq = {};

  // Left pointer of the sliding window
  let left = 0;

  // Store the maximum valid window length
  let maxLen = 0;

  // Move the right pointer to expand the window
  for (let right = 0; right < fruits.length; right++) {
    // Add the current fruit to the frequency object
    const f = fruits[right];
    freq[f] = (freq[f] || 0) + 1;

    // More than 2 fruit types means the window is invalid
    while (Object.keys(freq).length > 2) {
      // Remove the fruit at the left side
      const leftFruit = fruits[left];
      freq[leftFruit]--;

      // Remove the fruit type if its count becomes 0
      if (freq[leftFruit] === 0) {
        delete freq[leftFruit];
      }

      // Move left pointer to shrink the window
      left++;
    }

    // Calculate the current valid window length
    const windowLen = right - left + 1;

    // Update the maximum length
    if (windowLen > maxLen) {
      maxLen = windowLen;
    }
  }

  // Return the maximum number of fruits we can pick
  return maxLen;
}

console.log(FruitsIntoBaskets([1, 2, 1, 2, 3]));

console.log(FruitsIntoBaskets(["A", "B", "C", "A", "C"]));
