// Approached basic
// version 1 :
// if num of element is equal to the target then return i index by using the single loop

function searchRotatedArray(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;

console.log(searchRotatedArray(nums, target));

// time complexity: O(n) - single loop n iteration of the element in the arr
// space complexity: O(1) - variable did'nt take the extra space

//  optimized approached
// version 2 :
// two variable intialized in the function left and right
//  create a loop it run until the left is less equal to right
//  find the middle element of the array
//  if target found - > return mid
// if left side is sorted and if left side element is equal 