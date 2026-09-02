// Short Approach:
// 1. Create an empty result array.
// 2. Traverse the input array.
// 3. Check whether the current element already exists in result.
// 4. If it does not exist, add it.
// 5. Return the result array.

function removeDuplicates(arr) {
  // Store only unique elements
  const result = [];

  // Traverse every element of the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is NOT already present
    if (!result.includes(arr[i])) {
      // Add the current element if it is unique
      result.push(arr[i]);
    }
  }

  // Return the array containing unique elements
  return result;
}

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers);
