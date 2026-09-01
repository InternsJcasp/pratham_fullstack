function checkPermutation(s1, s2) {
  // If s1 is bigger than s2,
  // s2 cannot contain a permutation of s1.
  if (s1.length > s2.length) {
    return false;
  }

  // Map to store character frequency of s1
  let s1Map = new Map();

  // Map to store character frequency of current window
  let windowMap = new Map();

  //    Create frequency map for s1

  for (let char of s1) {
    // If character already exists,
    // increase its count by 1.
    // Otherwise start its count at 1.
    s1Map.set(char, (s1Map.get(char) || 0) + 1);
  }

  //  Create sliding window

  let left = 0;

  // right moves through s2
  for (let right = 0; right < s2.length; right++) {
    // Get the current character
    let char = s2[right];

    // Add the current character
    // to the window frequency map.
    windowMap.set(char, (windowMap.get(char) || 0) + 1);

    //    Maintain window size

    // Our window must have the same size
    // as s1.
    if (right - left + 1 > s1.length) {
      // Character that needs to be removed
      // from the left side of the window.
      let leftChar = s2[left];

      // Decrease its frequency by 1.
      windowMap.set(leftChar, windowMap.get(leftChar) - 1);

      // If frequency becomes 0,
      // remove the character from the Map.
      if (windowMap.get(leftChar) === 0) {
        windowMap.delete(leftChar);
      }

      // Move the left pointer forward.
      left++;
    }

    //  Compare both maps

    // Only compare when window size
    // is equal to s1.length.
    if (right - left + 1 === s1.length && mapsAreEqual(s1Map, windowMap)) {
      // We found a permutation!
      return true;
    }
  }

  // No permutation was found.
  return false;
}
// function to compare two Maps

function mapsAreEqual(map1, map2) {
  // If both Maps have different number
  // of characters, they cannot be equal.
  if (map1.size !== map2.size) {
    return false;
  }

  // Check every character and its frequency.
  for (let [char, count] of map1) {
    // If character does not exist
    // or frequency is different,
    // Maps are not equal.
    if (map2.get(char) !== count) {
      return false;
    }
  }

  // All characters and frequencies match.
  return true;
}
