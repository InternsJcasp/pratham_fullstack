// version 1:
//  first sorting the array
// when element of the array is equal to i then return i
function findMissingNumber(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      return i;
    }
  }

  return arr.length;
}

const arr = [3, 0, 1];

console.log(findMissingNumber(arr));

// time complexity: O(n) -> single loop n iteration of the element
// space complexity: O(1)

// optimized approached
// version 2:

function findMissingNumber(arr) {
  const n = arr.length;

  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

const arr = [3, 0, 1];

console.log(findMissingNumber(arr));

// time complexity : O(n) -> single loop n iteration of the element
// space complexity: O(1)
