// approach basic

// every traverse complete array and multiply all element expect itself
// we used the empty array to store the product data final

function productArray(arr) {
  const result = []; // store the product element
  for (let i = 0; i < arr.length; i++) {
    let product = 1; //store the product of the element except current element
    for (let j = 0; j < arr.length; i++) {
      if (i !== j) {
        product *= arr[j]; // product = product * arr[j] (product of the element with n element except itself)
      }
    }
    arr.push(product); // push the final result in the empty arr
  }
  return result;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(productArray(arr));

// time complexity : o(n^2) and space(n) reason :
// version 2: optimized and simple

// Using the Arrow function 

// Approach

const productExceptSelf = (nums) => {
  const result = [];

  // First Pass 
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }

  // Second Pass
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }

  return result;
};

// 