// Basic version of the Bubble Sorting

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// const arr = [5, 6, 7, 2, 1, 3];

// console.log(bubbleSort(arr));

// time : O(n^ 2) and space : O(1)

// version 2 : here we create the variable swapped
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}

const arr = [5, 6, 7, 2, 1, 3];

console.log(bubbleSort(arr));
