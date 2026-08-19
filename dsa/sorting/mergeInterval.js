// version 1:
// basic - approached
// Take one interval.
// Compare it with the next interval.
// If they overlap → merge them.
// If they don't overlap → keep them separate.
// Repeat.
function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    let current = intervals[i];

    if (result.length === 0) {
      result.push(current);
      continue;
    }

    let last = result[result.length - 1];

    // Check overlap
    if (current[0] <= last[1]) {
      // Merge
      last[1] = Math.max(last[1], current[1]);
    } else {
      // No overlap
      result.push(current);
    }
  }

  return result;
}

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [9, 12],
  ]),
);
//  time complexity :O(n) -> single loop iteration of n element
//  space complexity : O(n) -> we push the n element of the arr in the result empty array

// Approached 2 : Optimization approached
// sort by start the arr
// take the first interval of the arr
// Compare it with the next interval.
// If they overlap → merge them.
// If they don't overlap → keep them separate.
// Repeat.
function mergeIntervals(intervals) {
  // Sort intervals by start
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let last = result[result.length - 1];

    // Overlap
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    }
    // No overlap
    else {
      result.push(current);
    }
  }

  return result;
}

//  easy to implementation

// time complexity : O(n log n) --> sorting:O(n log n) and for loop :O(n)
// space complexity: O(n) --> we push the n element of the arr in the result empty array
