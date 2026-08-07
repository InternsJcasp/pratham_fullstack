let arr = [1, 2, 3, 4, 5, 6];
//  Challenges 1:
function reverse(arr) {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}
//  time and space complexity of this code: O(n) space and O(n)
//  reason : we push the n element in result arr , it does'nt matter if n=100 and n=1000 element push in result

// Challenges 2:
function sum(arr) {
  let total = 0;

  for (let num of arr) {
    total += num;
  }

  return total;
}
// space : O(1) and time : O(n)

// Challenges 3:
function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log('*');
    }
  }
}
//  space : O(1) and time: O(n^2)
