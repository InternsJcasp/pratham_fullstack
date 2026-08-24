// version 1:
// approached:
//   if n is equal to 1 or 0 return n
// Keep incrementing i as long as i * i is less than or equal to n
// Since i * i exceeded n, (i - 1) is the integer square root
function sqrtLinear(n) {
  if (n === 0 || n === 1) return n;

  let i = 1;
  while (i * i <= n) {
    i++;
  }

  return i - 1;
}

console.log(sqrtLinear(10));
console.log(sqrtLinear(16));

// time complexity : O(n) - single loop here
// space complexity : O(1) - variable did'nt take the extra space

// optimized Approached
// version:2

// Approached
// if n is equal to 1 or 0 return n
//  left <= right - find the middle element of the array
//  imp - > mid * mid = square
// if square is equal to n, then return middle and if square is less than n , then mid value store in ans right else left side finding

function sqrtBinarySearch(n) {
  if (n === 0 || n === 1) return n;

  let left = 1;
  let right = n;
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === n) {
      return mid; // Exact square root found
    }

    if (square < n) {
      ans = mid; // Store current valid answer
      left = mid + 1; // Look for a larger potential match
    } else {
      right = mid - 1; // mid * mid > n, look in the lower half
    }   
  }

  return ans;
}

// Example usage:
console.log(sqrtBinarySearch(10));
console.log(sqrtBinarySearch(16));

// time complexity : O(log n) - half the N element
// space complexity : O(1) - variable did'nt take the extra space
