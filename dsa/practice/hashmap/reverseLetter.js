// Approach:
// 1. Store each letter in HashMap with its index
// 2. Start from the last index
// 3. Get each letter from HashMap
// 4. Add it to result
function reverseLetters(word) {
  const map = new Map();

  // Store letters
  for (let i = 0; i < word.length; i++) {
    map.set(i, word[i]);
  }

  let result = "";

  // Read letters in reverse order
  for (let i = word.length - 1; i >= 0; i--) {
    result += map.get(i);
  }

  return result;
}

console.log(reverseLetters("hello"));

// time complexity : O(n)
// space complexity : O(n)
