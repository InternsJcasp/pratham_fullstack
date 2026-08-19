// version 1:
// basic approached
//  create a result array empty to store the final result O(n) space
// intialize the used variable and assign with zero value ( str.length) to count the str
// when string ith is equal to jth(value) increase the count variable and used assign true when the char is multiple time
// then push the value in the result
// then sort the string
// function sortCharFreq(str) {
//   const result = [];
//   const used = new Array(str.length).fill(false);

//   for (const value of str) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === value && !used[i]) {
//         count++;
//         used[i] = true;
//       }
//     }

//     for (let i = 0; i < count; i++) {
//       result.push(value);
//     }
//   }

//   return result.sort();
// }

// console.log(sortCharFreq("tree"));

// time complexity : O(n log n) --> O(n^2 ) -> inner loop + O(m) -> outer single loop + sorted the char -> O(n log n) = O(n^2 + m + n log n)
// space complexity : O(n)  -- > n element push in the char to store the result

// optimized approached
// version 2 :
// count frequency
//  Convert Map to array
//Sort by frequency
// build the result
function sortCharFreq(str) {
  const freq = new Map();

  for (let char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  const chars = [...freq];
  chars.sort((a, b) => b[1] - a[1]);

  let result = "";

  for (let [char, count] of chars) {
    result += char.repeat(count);
  }

  return result;
}

console.log(sortCharFreq("tree"));

// time Complexity = O(n + m) => two outer loop and O(n log n) - O(n + m + n log n) => O(n log n)
// space = O(n) -> n element push in the char to store the result
