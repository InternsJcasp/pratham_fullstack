// Hash Map Approach

// Build a Frequency Map
// Iterate through ransomNote. For each character:
// Check if it exists in the map with a count greater than 0.
// If it exists, decrement its count by 1.
// If it does not exist or its count is 0, return false immediately because magazine lacks the necessary characters.

// Return Success: If the loop finishes without returning false, return true.
function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const charCounts = {};

  // Build character frequency map for magazine
  for (const char of magazine) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  // Decrement character counts for ransomNote
  for (const char of ransomNote) {
    if (!charCounts[char]) {
      return false; // Character missing or run out
    }
    charCounts[char]--;
  }

  return true;
}

// Time complexity: O(n+m) : two loop first for count char and store in map and another loop for if ransomNote char is not exit in magazine
// space complexity: O(n) : auxilary space
