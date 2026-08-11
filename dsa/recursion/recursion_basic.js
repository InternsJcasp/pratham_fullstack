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


