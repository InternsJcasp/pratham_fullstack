function longestConsecutiveString(arr) {
  const numSet = new Set(arr);
  let longestCons = 0;

  for (let num of numSet) {
    if (!numSet.has(num)) {
      let currentNumber = num;
      let currentCount = 1;

      while (numSet.has(currentNum + 1)) {
        currentNumber += 1;
        currentCount += 1;
      }
      longestCons = Math.max(longestCons, currentCount);
    }
  }
  return longestCons;
}

console.log(longestConsecutiveString([100, 4, 200, 3, 2, 1]));

// time complexity : O(n^2) in for loop O(n) inside another loop O(n)
// space complexity : Set it store n element
