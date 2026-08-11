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

