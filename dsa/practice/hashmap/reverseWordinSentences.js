// Approach:
// 1. Split sentence into words
// 2. Store each word in HashMap with its index
// 3. Traverse the HashMap indexes from last to first
// 4. Build the reversed sentence
function reverseWords(sentence) {
  const words = sentence.split(" ");
  const map = new Map();

  // Store word with index
  for (let i = 0; i < words.length; i++) {
    map.set(i, words[i]);
  }

  let result = "";

  // Read words in reverse order
  for (let i = words.length - 1; i >= 0; i--) {
    result += map.get(i) + " ";
  }

  return result.trim();
}

console.log(reverseWords("I love JavaScript"));

// Time: O(n) -> O(n + m)
// Space: O(n)
