// Because the array is sorted, we can use two pointers:
// left → starts from the beginning
// right → starts from the end

// Then:
// 1.Calculate numbers[left] + numbers[right].
// 2.If the sum equals target, return the two indices.
// 3.If the sum is less than target, move left forward.
// 4.If the sum is greater than target, move right backward.
// 5.Continue until the answer is found.

function twoSum(numbers, target) {
  // Start pointer from the first element
  let left = 0;

  // Start pointer from the last element
  let right = numbers.length - 1;

  // Continue until the two pointers meet
  while (left < right) {
    // Calculate the sum of the two pointer values
    const sum = numbers[left] + numbers[right];

    // If sum is equal to target, we found the answer
    if (sum === target) {
      // Problem asks for 1-based indexes
      return [left + 1, right + 1];
    }

    // If sum is smaller than target,
    // we need a bigger number
    else if (sum < target) {
      left++;
    }

    // If sum is greater than target,
    // we need a smaller number
    else {
      right--;
    }
  }

  // Return empty array if no pair is found
  return [];
}

// Example
const numbers = [2, 7, 11, 15];
const target = 9;

const result = twoSum(numbers, target);

console.log(result);
