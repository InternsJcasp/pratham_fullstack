// basic // print N to 1
/*function countDown(n) {
  // Base case
  if (n === 0) {
    return;
  }

  //   work
  console.log(n);

  //   Function call itself
  countDown(n - 1);
}

countDown(5); */

// Factorial question -

function Factorial(n) {
  // base case
  if (n === 0) {
    return;
  }
  // work + function call itself
  return n * Factorial(n - 1);
}

console.log(Factorial(6));

// sum of the N number

function sumNumber(n) {
  if (n === 0) {
    return 0;
  }

  return n + sumNumber(n - 1);
}
console.log(sumNumber(5));

// print 1 to N

function printNumber(n) {
  if (n === 10) {
    return;
  }
  //   work
  console.log(n);
  //   function call
  printNumber(n + 1);
}
printNumber(1);

// febonacci problem

function febonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return febonacci(n - 1) + febonacci(n - 2);
}
console.log(febonacci(14));

// print Odd Number

function OddNumber(n) {
  if (n === 0) {
    return 0;
  }
  if (n % 2 !== 0) {
    console.log(n);
  }
  return OddNumber(n - 1);
}
OddNumber(10);

// print Even Number

function EvenNumber(n) {
  if (n === 10) {
    return;
  }
  if (n % 2 === 0) {
    console.log(n);
  }
  return EvenNumber(n + 1);
}
EvenNumber(0);

// product of N
//It is optimized , more understandable and easy
function productNum(n) {
  if (n === 0) {
    return 1;
  }

  return n * productNum(n - 1);
}
console.log('product', productNum(4));

// reverse string
// version 1:
function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('hello'));
// version 2:
function reverseString(str, index = str.length - 1) {
  if (index < 0) {
    return '';
  }

  return str[index] + reverseString(str, index - 1);
}

console.log(reverseString('hello'));

//Power of X
// version 1 : Optimized
function powerX(num, exp) {
  if (exp === 0) {
    return 1;
  }
  if (num === 0) {
    return 0;
  }
  return num * powerX(num, exp - 1);
}

console.log(`power is `, powerX(4, 2));

// Palindrome Check
// version 1
//  olo === olo

function Palindrome(text, index = 0) {
  const reverse = text.split('').reverse().join('');

  if (index === text.length) {
    return 'is palindrome';
  }

  if (text[index] !== reverse[index]) {
    return 'is not palindrome';
  }

  return Palindrome(text, index + 1);
}

console.log(Palindrome('ice'));
// Version 2 :
function palindrome(text, left = 0, right = text.length - 1) {
  // Base case: all characters have been checked
  if (left >= right) {
    return 'is palindrome';
  }

  // If characters don't match
  if (text[left] !== text[right]) {
    return 'is not palindrome';
  }

  // Move both pointers toward the center
  return palindrome(text, left + 1, right - 1);
}

console.log(palindrome('olo'));

// Binary Search

function BinarySearch(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);
  if (arr[middle] === target) {
    return middle;
  }

  if (target < arr[middle]) {
    return BinarySearch(arr, target, left, middle - 1);
  }
  return BinarySearch(arr, target, middle + 1, right);
}

const arr = [10, 20, 30, 40, 50, 60, 70];

const BinaryInput = BinarySearch(arr, 20, 0, arr.length - 1);

console.log('result is:', BinaryInput);

// optimized version 2: Binary Search

function BinarySearch(arr, target = 40, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);
  if (arr[middle] === target) {
    return middle;
  }

  if (target < arr[middle]) {
    return BinarySearch(arr, target, left, middle - 1);
  }
  return BinarySearch(arr, target, middle + 1, right);
}

console.log(BinarySearch(arr));


