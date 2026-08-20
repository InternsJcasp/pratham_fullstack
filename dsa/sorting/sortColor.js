// basic approached : Counting the element
// example- i/p = [2,0,2,1,0,1]
//        - o/p = [0,0,1,1,2,2]
// counting the element  - 0-> 2time
//                       - 1-> 2 time
//                       - 2-> 2 time
// then rebuild
function sortColorProblem(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let num of arr) {
    if (num === 0) {
      count0++;
    } else if (num === 1) {
      count1++;
    } else {
      count2++;
    }
  }

  let index = 0;
  while (count0 > 0) {
    arr[index++] = 0;
    count0--;
  }
  while (count1 > 0) {
    arr[index++] = 1;
    count1--;
  }
  while (count2 > 0) {
    arr[index++] = 2;
    count2--;
  }
  return arr;
}

const arr = [2, 0, 2, 1, 0, 1];
console.log(sortColorProblem(arr));

// time Complexity: O(n) + O(n) = O(n) - multiple loop usage to rebuild the array
//  space Complexity :O(1) - variable did'nt take the extra space

// Optimization approached
function optimizeSortColor(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], low[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}
const arr = [2, 0, 2, 1, 0, 1];
console.log(optimizeSortColor(arr));

// time complexity:O(n)  - single loop
// space complexity: O(1) -  variable did'nt take the extra space 

