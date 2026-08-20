// approach
// construct the map using the map = { }
// create a empty array to store the result of the array
// For num1 iterate the num1 using the for of , if map[num] -> assign true mean for each num assigned true
// for num2 iterate the num1 using the for of ,  if map[num] -> num2 is push in the result empty array
//  reassign false to prevent the duplicate entries

function IntersectionTwoArray(num1, num2) {
  const map = {};
  const result = [];

  for (const num of num1) {
    map[num] = true; // Mark as present directly
  }

  for (const num of num2) {
    if (map[num]) {
      result.push(num);
      map[num] = false; // Prevents duplicate entries in result
    }
  }
  return result;
}

console.log(IntersectionTwoArray([2, 3, 4, 5], [3, 4, 5, 6, 7])); 