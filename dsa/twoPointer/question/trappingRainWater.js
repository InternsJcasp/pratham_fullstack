//  approach
// 1. Put left pointer at start.
// 2. Put right pointer at end.
// 3. Keep leftMax and rightMax.
// 4. Process the side having the smaller height.
// 5. Add trapped water.
// 6. Move the pointer.
// 7. Continue until left >= right.

function trap(height) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let water = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }

      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }

      right--;
    }
  }

  return water;
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));


// Time Complexity->Each pointer moves through the array at most once.
// O(n)
// Space Complexity : O(1) --> We only used the few variable
