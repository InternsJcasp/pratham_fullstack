function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();
  // Count characters in s
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Remove characters using t
  for (let char of t) {
    if (!map.has(char)) {
      return false;
    }

    map.set(char, map.get(char) - 1);

    if (map.get(char) === 0) {
      map.delete(char);
    }
  }

  return map.size === 0;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

//  time complexity: O(n)
// space complexity : O(1) - map store the some value in initial phase and then counting element store in map then delete the element whose map.get(CHAR) is equal to zero
