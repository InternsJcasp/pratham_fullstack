// Approach:
// 1. Start from the first element.
// 2. Check every element one by one.
// 3. Return index when target is found.
// 4. If not found, return -1.
// version 1:
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([10, 20, 30, 40], 30));

// Time Complexity: O(n) -- single for loop
// Space Complexity: O(1)  -- two variable only

// version 2 :
// Approach:
// Same fundamental approach as basic linear search.
// We stop immediately when the target is found.
function linearSearchOptimized(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

// Time Complexity: O(n)
// Space Complexity: O(1)
