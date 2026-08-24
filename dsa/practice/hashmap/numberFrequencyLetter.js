// Approach:
// 1. Create a HashMap
// 2. Traverse the array
// 3. If number exists, increase its frequency
// 4. Otherwise, store it with frequency 1
function frequencyCounter(arr) {
  const map = new Map();

  for (let num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  return map;
}

console.log(frequencyCounter([1, 2, 2, 3, 3, 3, 4]));

// time complexity : O(n) -> single loop
// space complexity : O(n)
