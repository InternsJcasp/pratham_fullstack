// version 1 - (linear approached)
// Approached
//  Scan through the array. Update floor whenever nums[i] <= x.
//  The first element where nums[i] >= x becomes the ceiling.

function getFloorAndCeilLinear(nums, x) {
  let floor = -1;
  let ceil = -1;

  for (let num of nums) {
    if (num <= x) floor = num;
    if (num >= x && ceil === -1) ceil = num;
  }

  return { floor, ceil };
}

// time complexity: O(n) -> single loop n iteration of the element
// space complexity: O(1) ->  Auxiliary storage remains constant.
