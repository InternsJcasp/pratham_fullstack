// Approached :
// 1. Create a Set to store visited numbers.
// 2. Repeat until n === 1.
// 3. If n is already in Set → cycle found → return false.
// 4. Add n to Set.
// 5. Calculate sum of squares of digits**.
// 6. Set n = sum and repeat.
// 7. If n === 1 → return true.

function isHappy(n) {
  const seen = new Set();
  while (n !== 1) {
    if (seen.has(n)) {
      return false;
    }

    seen.add(n);

    let sum = 0;

    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }

    n = sum;
  }

  return true;
}
const n = 10;
console.log(isHappy(n));
// time complexity : O(n^2) -  first loop for to check the element exist in hashmap and another this sum and square
//  space complexity:O(n) - because we used the Set() hashmap
