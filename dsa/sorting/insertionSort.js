// Basic version of the insertion sort

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }

// const arr = [11, 10, 15, 1, 4, 7, 9];
// console.log(insertionSort(arr));

// time : O (n^2) and space: O(1)

// optimized version 2 :
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];

    if (arr[i - 1] <= key) {
      continue;
    }

    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

const arr = [11, 10, 15, 1, 4, 7, 9];
console.log(insertionSort(arr));
