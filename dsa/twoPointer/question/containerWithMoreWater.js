// Short Approach:
// 1. Use two pointers: left and right.
// 2. Calculate area using width × smaller height.
// 3. Update maximum area.
// 4. Move the pointer with the smaller height.
// 5. Continue until left >= right.

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let width = right - left;

    let currentHeight = Math.min(height[left], height[right]);

    let currentArea = width * currentHeight;

    maxWater = Math.max(maxWater, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));

// Time Complexity: O(n)
// Space Complexity: O(1)
