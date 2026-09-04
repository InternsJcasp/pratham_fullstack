function sortedSquares(arr) {
  let left = 0;
  let right = arr.length - 1;

  // Result array
  const result = new Array(arr.length);

  // Start filling from the last position
  let position = arr.length - 1;

  while (left <= right) {
    const leftSquare = arr[left] * arr[left];
    const rightSquare = arr[right] * arr[right];

    // Put the larger square at the end
    if (leftSquare > rightSquare) {
      result[position] = leftSquare;
      left++;
    } else {
      result[position] = rightSquare;
      right--;
    }

    position--;
  }

  return result;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));

/*
Time Complexity:
O(n)

Each element is processed exactly once.

Space Complexity:
O(n)

We create a result array of size n.
*/
