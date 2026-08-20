// basic Approached :
// sort each string alphabetically example like "eat" sorted "aet"
// Used the sorted as a hashmap key: store the original words as an array of value under the sorted key
//  extract value -> return all array value from the hash map as 2D array

function groupAnagrams(strs) {
  const map = {};

  for (const str of strs) {
    // Sort the string to create a universal key for anagrams
    const sortedKey = str.split("").sort().join("");

    if (!map[sortedKey]) {
      map[sortedKey] = [];
    }
    map[sortedKey].push(str);
  }

  return Object.values(map);
}

// time complexity : O(n) -> used the single loop for sorted array , if string key is not stored used the empty array
// space complexity :O(n) -> auxilary space  { key and value store in hashmap}
