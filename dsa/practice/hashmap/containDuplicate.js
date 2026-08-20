//  Basic simple approached
// it check the element is present in the map it return true mean it contain duplicated and the set the map ( num, true)
//  else not duplicate it show the false value
function containsDuplicate(nums) {
  const map = new Map();

  for (let num of nums) {
    if (map.has(num)) {
      return true;
    }

    map.set(num, true);
  }

  return false;
}

const nums = [1, 2, 4, 4, 5, 6];

console.log(containsDuplicate(nums));

//  Time Complexity: O(n) - single loop is used to iterate the n element of the arr
// Space Complexity : O(n) - we used the map hashmap Object
    
