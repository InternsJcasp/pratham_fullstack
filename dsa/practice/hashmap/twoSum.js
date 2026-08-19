// hashmap question
// two sum problem

function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let needed = target - arr[i];
    if (map.has(needed)) {
      return [map.get(needed), i];
    }
    map.set(arr[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

//  time complexity : O(n) -> single for iteration of  element
// space complexity : O (n) -> result empty store the index


