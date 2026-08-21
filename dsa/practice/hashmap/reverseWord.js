// Approach:
// 1. Store each character in HashMap with its index
// 2. Start from the last index
// 3. Get each character from HashMap
// 4. Add it to result
function reverseWord(word) {
  const map = new Map();

  // Store characters
  for (let i = 0; i < word.length; i++) {
    map.set(i, word[i]);
  }

  let result = "";

  // Read characters in reverse order
  for (let i = word.length - 1; i >= 0; i--) {
    result += map.get(i);
  }

  return result;
}

console.log(reverseWord("hello"));

console.log(reverseWord("javascript"));

// Time Complexity: O(n)
// Space Complexity: O(n)
