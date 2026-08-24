// Approach:
// 1. Store capital letters in a HashMap
// 2. Check each character
// 3. If character exists in HashMap, it is a capital letter
function detectCapital(word) {
  const map = new Map();

  // Store A-Z in HashMap
  for (let i = 65; i <= 90; i++) {
    map.set(String.fromCharCode(i), true);
  }

  // Check capital letters
  for (let char of word) {
    if (map.has(char)) {
      console.log(char + " is a capital letter");
    }
  }
}

detectCapital("HelloWorld");

// time Complexity : O (n) ->O(n+m)
// space complexity : O(n)
