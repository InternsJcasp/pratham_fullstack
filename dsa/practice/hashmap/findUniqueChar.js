function findFirstUniqueChar(str) {
  const charMap = new Map();

  //  Fill the hashmap with character counts
  for (const char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  //  Find the first character with a count of 1
  for (const char of str) {
    if (charMap.get(char) === 1) {
      return char; // Returns the actual unique character
    }
  }

  return null; // Returns null if no unique character exists
}

console.log(findFirstUniqueChar("swiss"));
console.log(findFirstUniqueChar("racecar"));
console.log(findFirstUniqueChar("aabbcc"));

// time complexity : O(n) -> O(n + m) two loop is used in this problem - > O(n)
// space complexity :O(n)
