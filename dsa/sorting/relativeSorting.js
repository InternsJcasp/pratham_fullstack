// simple and basic approached
// Take each element from arr2.
// Find that element in arr1.
// Add all its occurrences to the result.
// Remove/mark those elements as processed.
// Sort the remaining elements normally.
// Add them to the result.
function relativeSort(arr1, arr2) {
  const result = [];
  const used = new Array(arr1.length).fill(false);

  // Process elements according to arr2
  for (const value of arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === value && !used[i]) {
        result.push(arr1[i]);
        used[i] = true;
      }
    }
  }

  // Get remaining elements
  const remaining = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!used[i]) {
      remaining.push(arr1[i]);
    }
  }

  // Sort remaining elements
  remaining.sort((a, b) => a - b);

  return result.concat(remaining);
}
// time complexity : O(n * m +n log n) - > inner loop :O(n^2) , another loop : O(m) , sorting-> ( n log n) , n^2 + m + n log n
// space complexity: O(n)

// version 2:
// approached optimized
// 1. Create frequency map
// 2. Count frequency of each element in arr1
// 3. Create result array
// 4. Traverse arr2
// Get how many times num appears
// Add num according to its frequency
// Remove it because it is already processed
// 5 & 6. Get remaining elements
// 7. Sort remaining elements
// 8. Add remaining elements to result
// 9. Return result

function relativeSort(arr1, arr2) {
  const frequency = new Map();

  for (const num of arr1) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  const result = [];

  for (const num of arr2) {
    if (frequency.has(num)) {
      const count = frequency.get(num);

      for (let i = 0; i < count; i++) {
        result.push(num);
      }

      frequency.delete(num);
    }
  }

  const remaining = [];

  for (const [num, count] of frequency) {
    for (let i = 0; i < count; i++) {
      remaining.push(num);
    }
  }

  remaining.sort((a, b) => a - b);

  result.push(...remaining);

  return result;
}

// Example
const arr1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
const arr2 = [2, 1, 8, 3];

console.log(relativeSort(arr1, arr2));

// time complexity => O( n log n)  --> O(n) first loop and O(m) second loop -> O(n + m) and sorting ->  Sort method(O(n log n))
// space complexity => O(n) -> n element push in the result empty arr
