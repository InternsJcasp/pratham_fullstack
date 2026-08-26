// Brute Force approach
function nextGreaterElement(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let greater = -1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        greater = arr[j];
        break;
      }
    }

    result.push(greater);
  }

  return result;
}

const arr = [4, 5, 2, 10, 8];

console.log(nextGreaterElement(arr));
