// practice - level 1

function Square(n) {
  return n * n;
}
console.log(Square(5));

// arrow function

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(12, 14));

const name = 'Pratham';

function test() {
  const age = 22;

  console.log(name);
  console.log(age);
}

test();

// Total quantity
// Normal FUnction
// function calculatePrize(price, qty) {
//   return price * qty;
// }

// console.log(calculatePrize(500, 4));

// function express

// const calculatePrize = function (price, qty) {
//   return price * qty;
// };
// console.log(calculatePrize(500, 100));

//Arrow Function

const calculatePrize = (price, qty) => {
  return price * qty;
};

console.log(calculatePrize(100, 20));

//  closure

function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }
  return inner;
}

const counter = outer();

console.log(counter());
console.log(counter());
