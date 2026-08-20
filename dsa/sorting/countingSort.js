// Counting Sort - >
// version 1  :
// Create a new array for counting how many there are of the different values.
// Go through the array that needs to be sorted.
// For each value, count it by increasing the counting array at the corresponding index.
// After counting the values, go through the counting array to create the sorted array.
// For each count in the counting array, create the correct number of elements, with values that correspond to the counting array index.

function countingSort(arr) {
  if (arr.length === 0) return arr;

  // Find maximum value
  const max = Math.max(...arr);

  // Create count array
  const count = new Array(max + 1).fill(0);

  // Count occurrences
  for (const num of arr) {
    count[num]++;
  }

  let index = 0;

  for (let num = 0; num <= max; num++) {
    while (count[num] > 0) {
      arr[index] = num;
      index++;
      count[num]--;
    }
  }

  return arr;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));

// time complexity:O(n + m) -- two loop (n + m)
// space complexity :O(n) -- count - n element tracking the count

// version 2:
// 1. Find the maximum element.
// 2. Create a count array of size max + 1.
// 3. Store the frequency of each number.
// 4. Traverse the count array.
// 5. Put each number back into the original array
//    according to its frequency.

APPROACH: function countingSort(arr) {
  if (arr.length <= 1) return arr;
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  for (const num of arr) {
    count[num]++;
  }

  let index = 0;

  for (let num = 0; num < count.length; num++) {
    while (count[num] > 0) {
      arr[index++] = num;
      count[num]--;
    }
  }

  return arr;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));

/*

    TIME COMPLEXITY:
    O(n + k)

    n = number of elements in the input array
    k = range of values (max + 1)

    SPACE COMPLEXITY:
    O(k)

    k = size of the count array

    NOTE:
    Counting Sort is efficient when the range of values (k)
    is relatively small compared to the number of elements (n).
*/
