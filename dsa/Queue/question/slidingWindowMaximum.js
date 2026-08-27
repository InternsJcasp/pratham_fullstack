function maxSlidingWindow(nums, k) {
  const deque = [];
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove indexes that are outside the window
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove smaller elements from the back
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    // Add current index
    deque.push(i);

    // Start storing answers when window reaches size k
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const answer = maxSlidingWindow(nums, k);

console.log(answer);
